# WIZMS Next.js Website

Modern Next.js 14 application for WIZ Management Solutions ISO certification consulting business.

## Features

- ✅ **Dynamic Content**: Blogs and microblogs powered by Supabase CMS
- ✅ **Static Pages**: Services, About, Contact rendered at build time
- ✅ **SEO Optimized**: Full meta tags, keywords, and Open Graph support
- ✅ **Catch-all Routing**: All content served via `/[slug]` dynamic routes
- ✅ **Responsive Design**: Mobile-first Tailwind CSS styling
- ✅ **Fast Performance**: Static generation and ISR for optimal speeds

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page with hero section
│   ├── [slug]/
│   │   └── page.tsx          # Dynamic catch-all route
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── favicon.ico
├── lib/
│   └── supabase.ts           # Supabase client & utilities
└── public/                   # Static assets
```

## Setup Instructions

### 1. Environment Variables

Update `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 2. Supabase Tables

You need to create 4 tables in Supabase:

- **blogs** - Blog posts (dynamic)
- **microblogs** - Micro blog posts (dynamic)
- **services** - Service descriptions (static)
- **pages** - General pages (static)

Import the CSV files from the export:
```
blogs.csv → blogs table
microblogs.csv → microblogs table
services.csv → services table
pages.csv → pages table
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

```bash
vercel
```

## Content Management

### Adding New Blog Posts

1. Insert record into `blogs` table in Supabase
2. Build website (or use ISR)
3. Content automatically available at `/{slug}`

### Updating Services

1. Modify `services` table in Supabase
2. Rebuild and redeploy
3. Changes live within minutes

## Routing

All content is accessible via catch-all route:

```
/ → Home
/advantages-and-disadvantages-of-doing-remote-audits → Blog
/iso-9001-certification → Service
/about → Page
```

Content type is auto-detected from Supabase tables.

## Performance

- **Static Generation**: Services & pages pre-rendered at build time
- **ISR**: Blogs update within 60 seconds (configurable)
- **Image Optimization**: Next.js Image component
- **CSS Optimization**: Tailwind purging unused styles

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase PostgreSQL
- **Hosting**: Vercel (recommended)

## Support

For questions or issues, contact: karthiga@wizms.net

---

© 2025 WIZ Management Solutions. All Rights Reserved.
