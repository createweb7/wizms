/**
 * Migration script to load data from CSV files into Supabase
 * Run with: npx ts-node scripts/migrate-csv-to-supabase.ts
 */

import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface CSVRow {
  [key: string]: string;
}

function parseCSV(csvContent: string): CSVRow[] {
  const lines = csvContent.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = lines[0]
    .split(",")
    .map((h) => h.trim().toLowerCase().replace(/"/g, ""));
  const rows: CSVRow[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
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

    const row: CSVRow = {};
    headers.forEach((header, idx) => {
      row[header] = fields[idx] || "";
    });
    rows.push(row);
  }

  return rows;
}

async function migrateBlogs() {
  console.log("🔄 Migrating blogs...");

  const csvPath = path.join(
    process.cwd(),
    "..",
    "codeigniter_website",
    "csv_exports",
    "blogs.csv"
  );

  if (!fs.existsSync(csvPath)) {
    console.error(`❌ CSV file not found: ${csvPath}`);
    return;
  }

  const csvContent = fs.readFileSync(csvPath, "utf-8");
  const rows = parseCSV(csvContent);

  console.log(`📊 Found ${rows.length} blog entries in CSV`);

  // Insert in batches of 100
  const batchSize = 100;
  for (let i = 0; i < rows.length; i += batchSize) {
    const batch = rows.slice(i, i + batchSize);

    const insertData = batch.map((row) => ({
      slug: row.slug || "",
      url: row.url || "",
      title: row.title || "",
      meta_title: row.meta_title || "",
      meta_description: row.meta_description || "",
      meta_keywords: row.meta_keywords || "",
      content: row.content || "",
      excerpt: row.excerpt || "",
      category: row.category || "",
      featured_image: row.featured_image || "",
      featured_image_alt: row.featured_image_alt || "",
      published: row.published === "true" || row.published === "1",
      publish_date: row.publish_date || new Date().toISOString(),
    }));

    const { error } = await supabase.from("blogs").insert(insertData);

    if (error) {
      console.error(`❌ Error inserting batch ${i / batchSize + 1}:`, error);
    } else {
      console.log(
        `✅ Inserted batch ${i / batchSize + 1} (${Math.min(
          batchSize,
          rows.length - i
        )} records)`
      );
    }
  }

  console.log("✨ Blog migration complete!");
}

async function migrateMicroblogs() {
  console.log("🔄 Migrating microblogs...");

  const csvPath = path.join(
    process.cwd(),
    "..",
    "codeigniter_website",
    "csv_exports",
    "microblogs.csv"
  );

  if (!fs.existsSync(csvPath)) {
    console.error(`❌ CSV file not found: ${csvPath}`);
    return;
  }

  const csvContent = fs.readFileSync(csvPath, "utf-8");
  const rows = parseCSV(csvContent);

  console.log(`📊 Found ${rows.length} microblog entries in CSV`);

  // Insert in batches of 100
  const batchSize = 100;
  for (let i = 0; i < rows.length; i += batchSize) {
    const batch = rows.slice(i, i + batchSize);

    const insertData = batch.map((row) => ({
      slug: row.slug || "",
      url: row.url || "",
      title: row.title || "",
      meta_title: row.meta_title || "",
      meta_description: row.meta_description || "",
      meta_keywords: row.meta_keywords || "",
      content: row.content || "",
      excerpt: row.excerpt || "",
      category: row.category || "",
      featured_image: row.featured_image || "",
      featured_image_alt: row.featured_image_alt || "",
      published: row.published === "true" || row.published === "1",
      publish_date: row.publish_date || new Date().toISOString(),
    }));

    const { error } = await supabase.from("microblogs").insert(insertData);

    if (error) {
      console.error(`❌ Error inserting batch ${i / batchSize + 1}:`, error);
    } else {
      console.log(
        `✅ Inserted batch ${i / batchSize + 1} (${Math.min(
          batchSize,
          rows.length - i
        )} records)`
      );
    }
  }

  console.log("✨ Microblog migration complete!");
}

async function main() {
  console.log("🚀 Starting CSV to Supabase migration...\n");

  await migrateBlogs();
  console.log();
  await migrateMicroblogs();

  console.log("\n✅ Migration complete!");
}

main().catch((err) => {
  console.error("❌ Migration failed:", err);
  process.exit(1);
});
