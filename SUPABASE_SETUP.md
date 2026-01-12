# Supabase Integration Setup Guide

## Step 1: Create Tables in Supabase

1. Go to your Supabase dashboard: https://app.supabase.com
2. Select your project
3. Go to **SQL Editor** (left sidebar)
4. Click **New Query**
5. Copy and paste the SQL from `supabase-init.sql`:

   ```sql
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
   ```

6. Click **Run** to execute the SQL
7. Verify tables are created in the **Table Editor**

## Step 2: Enable RLS (Row Level Security) - Optional

For production, you may want to enable RLS:

1. Go to **Authentication** → **Policies**
2. Create a policy to allow SELECT on both tables (or keep it open for testing)

## Step 3: Migrate Data from CSV

Run the migration script to load data from CSV files into Supabase:

```bash
cd /Users/mahadeer/projects/wizms/nextjs-app

# Install ts-node if needed
npm install --save-dev ts-node

# Run migration
npx ts-node scripts/migrate-csv-to-supabase.ts
```

The script will:

- Read from `../codeigniter_website/csv_exports/blogs.csv`
- Read from `../codeigniter_website/csv_exports/microblogs.csv`
- Insert all data into Supabase in batches of 100
- Show progress as it migrates

## Step 4: Verify Configuration

The `.env.local` file already contains your Supabase credentials:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your public anon key

## Step 5: Test the Integration

Start the dev server and test the API endpoints:

```bash
npm run dev
```

Test the API:

```bash
# Get all blogs
curl http://localhost:3000/api/content?type=blog

# Get specific blog
curl http://localhost:3000/api/content/your-blog-slug

# Get microblogs
curl http://localhost:3000/api/content?type=microblog
```

## Data Structure

### Blogs Table

- `id`: Auto-incremented ID
- `slug`: Unique URL slug (used in dynamic routes)
- `url`: Original URL path
- `title`: Blog post title
- `meta_title`: SEO title (160 chars)
- `meta_description`: SEO description (160 chars)
- `meta_keywords`: SEO keywords
- `content`: Full HTML content
- `excerpt`: Short summary
- `category`: Blog category
- `featured_image`: Image URL
- `featured_image_alt`: Alt text for image
- `published`: Boolean (shows only published=true)
- `publish_date`: Publication timestamp
- `created_at`: Record creation time
- `updated_at`: Last update time

### Microblogs Table

Same structure as blogs but for short-form content.

## Caching

The data loader includes 1-hour caching to reduce API calls:

- First request fetches from Supabase
- Subsequent requests use cache (within 1 hour)
- Cache is invalidated after 1 hour

To clear cache manually during development, restart the dev server.

## Troubleshooting

### "Failed to fetch content" error

- Check that `.env.local` has correct Supabase URL and key
- Verify tables are created in Supabase dashboard
- Check Supabase project status (not rate limited)

### No data showing

- Run migration script: `npx ts-node scripts/migrate-csv-to-supabase.ts`
- Verify data exists in Supabase table editor
- Check that `published=true` in database

### 404 on dynamic routes

- Ensure slug exists in database (case-sensitive)
- Check published status is true
- Verify CSV had valid slugs before migration

## Next Steps

1. ✅ Create Supabase tables (SQL)
2. ✅ Migrate CSV data to Supabase
3. ✅ Test API endpoints
4. ✅ Verify blog/microblog pages load from Supabase
5. Future: Add services and pages table (similar structure)
6. Future: Set up RLS policies for production
