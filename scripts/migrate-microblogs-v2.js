const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ Missing Supabase credentials");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function migrateMicroblogs() {
  console.log("🚀 Starting microblog migration...\n");

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
  const lines = csvContent.trim().split("\n");

  if (lines.length < 2) {
    console.error("❌ CSV is empty");
    return;
  }

  // Parse CSV with proper handling
  const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
  console.log(`📋 Headers: ${headers.join(", ")}`);

  const microblogs = [];
  let i = 1;
  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (!line.trim()) {
      i++;
      continue;
    }

    // Try to parse the line
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

    // Build object from fields and headers
    const obj = {};
    headers.forEach((header, idx) => {
      obj[header] = fields[idx] || "";
    });

    // Only add if slug exists and is not empty
    if (obj.slug && obj.slug.trim() && obj.slug.match(/^[a-z0-9-]+$/)) {
      microblogs.push({
        slug: obj.slug.trim(),
        url: obj.url || "",
        title: obj.title || "",
        meta_title: (obj.meta_title || "").substring(0, 160),
        meta_description: (obj.meta_description || "").substring(0, 160),
        meta_keywords: (obj.meta_keywords || "").substring(0, 255),
        content: obj.content || "",
        excerpt: obj.excerpt || "",
        featured_image: obj.featured_image || "",
        featured_image_alt: obj.featured_image_alt || "",
        published:
          obj.published === "true" ||
          obj.published === "1" ||
          obj.published === "TRUE",
        publish_date: obj.publish_date || new Date().toISOString(),
        category: obj.category || "microblog",
      });
    }

    i++;
  }

  console.log(`📊 Found ${microblogs.length} valid microblogs\n`);

  if (microblogs.length === 0) {
    console.log("⚠️  No valid microblogs to migrate");
    return;
  }

  // Clear existing data
  console.log("🗑️  Clearing existing microblogs...");
  const { error: deleteError } = await supabase
    .from("microblogs")
    .delete()
    .neq("id", 0);

  if (deleteError) {
    console.warn("⚠️  Warning clearing existing data:", deleteError.message);
  } else {
    console.log("✅ Cleared existing data\n");
  }

  // Insert in batches of 50
  const batchSize = 50;
  let inserted = 0;
  let failed = 0;

  for (let i = 0; i < microblogs.length; i += batchSize) {
    const batch = microblogs.slice(i, i + batchSize);

    const { data, error } = await supabase
      .from("microblogs")
      .insert(batch)
      .select();

    if (error) {
      console.error(
        `❌ Error in batch ${Math.floor(i / batchSize) + 1}:`,
        error.message
      );
      failed += batch.length;
    } else {
      const count = data ? data.length : batch.length;
      inserted += count;
      console.log(
        `✅ Batch ${
          Math.floor(i / batchSize) + 1
        }: Inserted ${count} microblogs`
      );
    }
  }

  console.log(`\n✨ Migration Summary:`);
  console.log(`   ✅ Inserted: ${inserted}`);
  console.log(`   ❌ Failed: ${failed}`);
  console.log(`\n🎉 Migration complete!`);
}

migrateMicroblogs().catch((err) => {
  console.error("❌ Migration failed:", err);
  process.exit(1);
});
