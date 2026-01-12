/**
 * Quick setup script to create Supabase tables
 * Run with: node scripts/setup-supabase.js
 */

const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY; // You'll need to provide this

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("❌ Missing SUPABASE_SERVICE_KEY in .env.local");
  console.log(
    "Please add your service role key (from Supabase dashboard Settings → API)"
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const createTablesSQL = `
-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  slug VARCHAR(500) NOT NULL UNIQUE,
  url VARCHAR(500) NOT NULL,
  title VARCHAR(300) NOT NULL,
  meta_title VARCHAR(160),
  meta_description VARCHAR(160),
  meta_keywords VARCHAR(255),
  content TEXT NOT NULL,
  excerpt TEXT,
  category VARCHAR(100),
  featured_image VARCHAR(500),
  featured_image_alt VARCHAR(255),
  published BOOLEAN DEFAULT TRUE,
  publish_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_published ON blogs(published);
CREATE INDEX IF NOT EXISTS idx_blogs_publish_date ON blogs(publish_date DESC);

-- Create microblogs table
CREATE TABLE IF NOT EXISTS microblogs (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  slug VARCHAR(500) NOT NULL UNIQUE,
  url VARCHAR(500) NOT NULL,
  title VARCHAR(300) NOT NULL,
  meta_title VARCHAR(160),
  meta_description VARCHAR(160),
  meta_keywords VARCHAR(255),
  content TEXT NOT NULL,
  excerpt TEXT,
  category VARCHAR(100),
  featured_image VARCHAR(500),
  featured_image_alt VARCHAR(255),
  published BOOLEAN DEFAULT TRUE,
  publish_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_microblogs_slug ON microblogs(slug);
CREATE INDEX IF NOT EXISTS idx_microblogs_published ON microblogs(published);
CREATE INDEX IF NOT EXISTS idx_microblogs_publish_date ON microblogs(publish_date DESC);
`;

async function setupTables() {
  console.log("🚀 Setting up Supabase tables...\n");

  try {
    const { error } = await supabase.rpc("exec", {
      sql: createTablesSQL,
    });

    if (error) {
      console.error("❌ Error creating tables:", error);
      // Try alternative approach with individual statements
      console.log(
        "\n📝 Alternative: Please manually run the SQL from SUPABASE_SETUP.md in Supabase SQL Editor"
      );
      process.exit(1);
    }

    console.log("✅ Tables created successfully!");
  } catch (err) {
    console.error("❌ Error:", err);
    console.log(
      "\n📝 Please manually run the SQL from SUPABASE_SETUP.md in Supabase SQL Editor"
    );
    process.exit(1);
  }
}

setupTables();
