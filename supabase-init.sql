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

-- Create indexes for blogs
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

-- Create indexes for microblogs
CREATE INDEX IF NOT EXISTS idx_microblogs_slug ON microblogs(slug);
CREATE INDEX IF NOT EXISTS idx_microblogs_published ON microblogs(published);
CREATE INDEX IF NOT EXISTS idx_microblogs_publish_date ON microblogs(publish_date DESC);
