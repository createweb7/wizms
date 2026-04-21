const fs = require('fs');
const path = require('path');

const viewsDir = '/Users/mahadeer/projects/wizms/codeigniter_website/application/views';
const microblogs = [];

const files = fs.readdirSync(viewsDir).filter(f => f.startsWith('microblog_') && f.endsWith('.php'));

console.log(`Extracting ${files.length} microblogs WITH links preserved...\n`);

files.forEach((file, index) => {
  const filePath = path.join(viewsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Extract slug from filename and convert underscores to hyphens
  const slug = file
    .replace('microblog_', '')
    .replace('.php', '')
    .trim()
    .replace(/_/g, '-');  // Convert underscores to hyphens

  // Extract title
  const titleMatch = content.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  const title = titleMatch ? titleMatch[1].trim() : slug;

  // Extract EVERYTHING between lower-content opening and closing div
  const lowerStart = content.indexOf('<div class="lower-content');
  const lowerEnd = content.indexOf('</div>', lowerStart) + 6;

  let htmlContent = content.substring(lowerStart, lowerEnd);

  // Remove the div wrapper itself, keep only inner content
  htmlContent = htmlContent.replace(/<div[^>]*>/i, '');
  htmlContent = htmlContent.replace(/<\/div>$/, '');

  // Clean PHP tags but PRESERVE HTML tags like <a>, <p>, <b>, etc
  htmlContent = htmlContent.replace(/<\?php.*?\?>/g, '');

  // Remove h1 tags
  htmlContent = htmlContent.replace(/<h1[^>]*>.*?<\/h1>/i, '');

  // Convert base_url() in links to actual paths
  htmlContent = htmlContent.replace(/href="<\?php echo base_url\(\)\?>([^"]*)/g, 'href="/$1');

  // Convert theme_url() in images
  htmlContent = htmlContent.replace(/src="<\?php echo theme_url\(\)\?>([^"]*)/g, 'src="/$1');

  htmlContent = htmlContent.trim();

  // Extract text for excerpt
  const plainText = htmlContent
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 160);

  microblogs.push({
    slug,
    title,
    content: htmlContent,
    excerpt: plainText + '...'
  });

  console.log(`✓ ${index + 1}. ${slug}`);
});

// Generate SQL
const escapeSql = (str) => {
  if (!str) return '';
  return str.replace(/'/g, "''").replace(/\\/g, '\\\\');
};

let sql = `-- Microblog Migration FINAL - WITH LINKS PRESERVED (hyphens in slugs)
-- Disable trigger, update content with links, re-enable

BEGIN;

ALTER TABLE microblogs DISABLE TRIGGER trigger_microblogs_updated_at;

`;

microblogs.forEach((blog) => {
  const slug = escapeSql(blog.slug.trim());
  const content = escapeSql(blog.content);
  const excerpt = escapeSql(blog.excerpt);

  sql += `UPDATE microblogs SET content = '${content}', excerpt = '${excerpt}' WHERE slug = '${slug}';\n`;
});

sql += `
ALTER TABLE microblogs ENABLE TRIGGER trigger_microblogs_updated_at;
COMMIT;

-- ✅ ${microblogs.length} microblogs with LINKS preserved!
`;

const outputPath = path.join(__dirname, 'microblog-migration-final-fixed.sql');
fs.writeFileSync(outputPath, sql, 'utf8');

console.log(`\n✅ FINAL migration with links preserved (FIXED slugs)!`);
console.log(`📄 File: ${outputPath}`);
console.log(`🚀 Run in Supabase`);
