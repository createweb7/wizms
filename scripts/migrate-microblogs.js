const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

function parseCSV(csvContent) {
  const lines = csvContent.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = lines[0]
    .split(",")
    .map((h) => h.trim().toLowerCase().replace(/"/g, ""));
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const fields = [];
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

    const row = {};
    headers.forEach((header, idx) => {
      row[header] = fields[idx] || "";
    });
    rows.push(row);
  }

  return rows;
}

async function migrateMicroblogs() {
  console.log("🔄 Migrating microblogs...");

  const csvPath = path.join(
    __dirname,
    "..",
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
  let rows = parseCSV(csvContent);

  // Filter out empty rows (rows without slug)
  rows = rows.filter((row) => row.slug && row.slug.trim());

  console.log(`📊 Found ${rows.length} valid microblog entries in CSV`);

  // Clear existing data
  console.log("🗑️  Clearing existing microblogs...");
  const { error: deleteError } = await supabase
    .from("microblogs")
    .delete()
    .neq("id", 0);

  if (deleteError) {
    console.warn("⚠️  Warning clearing existing data:", deleteError);
  }

  // Insert in batches of 100
  const batchSize = 100;
  for (let i = 0; i < rows.length; i += batchSize) {
    const batch = rows.slice(i, i + batchSize);

    const insertData = batch.map((row) => ({
      slug: row.slug || "",
      url: row.url || "",
      title: row.title || "",
      meta_title: (row.meta_title || "").substring(0, 160),
      meta_description: (row.meta_description || "").substring(0, 160),
      meta_keywords: (row.meta_keywords || "").substring(0, 255),
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
      console.error(
        `❌ Error inserting batch ${Math.floor(i / batchSize) + 1}:`,
        error
      );
    } else {
      console.log(
        `✅ Inserted batch ${Math.floor(i / batchSize) + 1} (${Math.min(
          batchSize,
          rows.length - i
        )} records)`
      );
    }
  }

  console.log("✨ Microblog migration complete!");
}

async function main() {
  console.log("🚀 Starting microblog migration...\n");
  await migrateMicroblogs();
  console.log("\n✅ All done!");
}

main().catch((err) => {
  console.error("❌ Migration failed:", err);
  process.exit(1);
});
