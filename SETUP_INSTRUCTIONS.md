# 🎯 Supabase Setup - Visual Step-by-Step Guide

## Your Supabase Project Details

```
Project: dldlsdtguqqybwdwqhzq
URL: https://dldlsdtguqqybwdwqhzq.supabase.co
Database: postgres
```

---

## 📍 STEP 1: Create Tables (2 minutes)

### 1️⃣ Open Supabase Dashboard

Go to: https://app.supabase.com

### 2️⃣ Select Your Project

Click on project: **dldlsdtguqqybwdwqhzq**

### 3️⃣ Open SQL Editor

In left sidebar → Click **SQL Editor**

### 4️⃣ Create New Query

Click **+ New Query**

### 5️⃣ Copy SQL Code

Paste this into the SQL editor:

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

### 6️⃣ Execute SQL

Click the **Run** button (▶️ icon in top right)

### ✅ Verify Success

Left sidebar → **Table Editor**

You should see:

- ✅ `public.blogs` table
- ✅ `public.microblogs` table

---

## 📍 STEP 2: Migrate Data (5 minutes)

### 1️⃣ Open Terminal

```bash
cd /Users/mahadeer/projects/wizms/nextjs-app
```

### 2️⃣ Run Migration Script

```bash
npx ts-node scripts/migrate-csv-to-supabase.ts
```

### Expected Output

```
🚀 Starting CSV to Supabase migration...

🔄 Migrating blogs...
📊 Found 6131 blog entries in CSV
✅ Inserted batch 1 (100 records)
✅ Inserted batch 2 (100 records)
✅ Inserted batch 3 (100 records)
... (more batches) ...
✨ Blog migration complete!

🔄 Migrating microblogs...
📊 Found 167 microblog entries in CSV
✅ Inserted batch 1 (100 records)
✅ Inserted batch 2 (67 records)
✨ Microblog migration complete!

✅ Migration complete!
```

### ⚠️ If Migration Fails

1. Verify tables exist (Step 1)
2. Check internet connection
3. Try again with: `npx ts-node scripts/migrate-csv-to-supabase.ts`

---

## 📍 STEP 3: Verify Data in Supabase

### 1️⃣ Check Blogs Table

Supabase → **Table Editor** → Click **blogs**

You should see rows with:

- slug (e.g., "iso-45001-ohsms-benefits")
- title (e.g., "ISO 45001 OHSMS Benefits...")
- content (HTML)
- publish_date

### 2️⃣ Count Records

Supabase → **SQL Editor** → **New Query**

Paste and run:

```sql
SELECT COUNT(*) as blog_count FROM blogs;
SELECT COUNT(*) as microblog_count FROM microblogs;
```

Should show:

- ✅ blog_count: 6131
- ✅ microblog_count: 167

---

## 📍 STEP 4: Test the App

### 1️⃣ Start Dev Server

```bash
npm run dev
```

### 2️⃣ Test in Browser

Open:

- http://localhost:3000/blog
- http://localhost:3000/micro-blogs
- http://localhost:3000/blog/iso-45001-ohsms-benefits

### 3️⃣ Test API Endpoints

In another terminal:

```bash
# Get all blogs (limited to 3)
curl "http://localhost:3000/api/content?type=blog&limit=3" | jq '.'

# Get all microblogs
curl "http://localhost:3000/api/content?type=microblog" | jq 'length'

# Get specific blog
curl "http://localhost:3000/api/content/iso-45001-ohsms-benefits" | jq '.title'
```

---

## ✅ Verification Checklist

- [ ] **Step 1 Done**: Supabase tables created
- [ ] **Step 2 Done**: Migration script completed successfully
- [ ] **Step 3 Done**: Data visible in Supabase Table Editor
- [ ] **Step 4 Done**: Blog pages load in browser
- [ ] **API Works**: curl commands return data

---

## 🎉 Success!

Once all steps are complete:

```
✅ Supabase Database: Connected
✅ Blog Data: 6,131 entries loaded
✅ Microblog Data: 167 entries loaded
✅ API Endpoints: Working
✅ Blog Pages: Displaying data
```

Your website is now **fully functional with Supabase**! 🚀

---

## 📞 Quick Troubleshooting

| Problem             | Solution                            |
| ------------------- | ----------------------------------- |
| Tables not showing  | Refresh Supabase dashboard (F5)     |
| Migration error     | Check table names, run SQL manually |
| No data in tables   | Re-run migration script             |
| Blog page shows 404 | Check if data migrated, check slug  |
| API returns empty   | Verify `published=true` in DB       |

---

## 📚 Additional Resources

- **Quick Start**: `SUPABASE_QUICK_START.md`
- **Detailed Setup**: `SUPABASE_SETUP.md`
- **Migration Guide**: `SUPABASE_MIGRATION.md`
- **Integration Summary**: `SUPABASE_INTEGRATION_COMPLETE.md`

---

**Status**: Ready to follow steps above! ✨
