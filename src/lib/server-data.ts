import fs from "fs";
import path from "path";

export type ContentType = "blog" | "microblog" | "service" | "page";

export interface Content {
  slug: string;
  url: string;
  title: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  content: string;
  excerpt: string;
  published: boolean;
  publish_date: string;
  type?: ContentType;
  category?: string;
}

// Parse CSV
function parseCSV(csvContent: string): Record<string, string>[] {
  const lines = csvContent.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = lines[0]
    .split(",")
    .map((h) => h.trim().toLowerCase().replace(/"/g, ""));
  const rows: Record<string, string>[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    // Simple CSV parsing - handle quoted fields
    const fields: string[] = [];
    let current = "";
    let inQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        fields.push(current.trim().replace(/^"|"$/g, ""));
        current = "";
      } else {
        current += char;
      }
    }
    fields.push(current.trim().replace(/^"|"$/g, ""));

    const row: Record<string, string> = {};
    headers.forEach((header, idx) => {
      row[header] = fields[idx] || "";
    });
    rows.push(row);
  }

  return rows;
}

// Load all data from CSV files
const dataCache: Record<ContentType, Content[]> = {
  blog: [],
  microblog: [],
  service: [],
  page: [],
};

let dataLoaded = false;

function loadData() {
  if (dataLoaded) return;

  const csvDir = path.join(
    process.cwd(),
    "..",
    "codeigniter_website",
    "csv_exports"
  );

  try {
    const contentTypes: ContentType[] = [
      "blog",
      "microblog",
      "service",
      "page",
    ];

    contentTypes.forEach((type) => {
      const filePath = path.join(csvDir, `${type}s.csv`);
      if (fs.existsSync(filePath)) {
        const csvContent = fs.readFileSync(filePath, "utf-8");
        const rows = parseCSV(csvContent);

        dataCache[type] = rows
          .map((row) => ({
            slug: row.slug || "",
            url: row.url || "",
            title: row.title || "",
            meta_title: row.meta_title || "",
            meta_description: row.meta_description || "",
            meta_keywords: row.meta_keywords || "",
            content: row.content || "",
            excerpt: row.excerpt || "",
            published:
              row.published === "true" || row.published === "1" || true,
            publish_date: row.publish_date || new Date().toISOString(),
            type,
            category: row.category || undefined,
          }))
          .filter((item) => item.slug); // Filter out empty slugs
      }
    });

    dataLoaded = true;
  } catch (error) {
    console.error("Error loading CSV data:", error);
  }
}

export async function getContentBySlug(slug: string): Promise<Content | null> {
  loadData();

  const types: ContentType[] = ["blog", "microblog", "service", "page"];

  for (const type of types) {
    const content = dataCache[type].find((item) => item.slug === slug);
    if (content && content.published) {
      return content;
    }
  }

  return null;
}

export async function getAllSlugs(): Promise<string[]> {
  loadData();

  const slugs = new Set<string>();
  const types: ContentType[] = ["blog", "microblog", "service", "page"];

  types.forEach((type) => {
    dataCache[type]
      .filter((item) => item.published)
      .forEach((item) => {
        slugs.add(item.slug);
      });
  });

  return Array.from(slugs);
}

export async function getContentByType(
  type: ContentType,
  limit?: number
): Promise<Content[]> {
  loadData();

  const items = dataCache[type].filter((item) => item.published);

  if (limit) {
    return items.slice(0, limit);
  }

  return items;
}
