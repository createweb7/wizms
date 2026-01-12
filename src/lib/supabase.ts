// This file is deprecated - use supabase-data.ts instead
// Kept for backwards compatibility reference only

export type ContentType = "blog" | "microblog";

export interface Content {
  slug: string;
  url: string;
  title: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  content: string;
  excerpt?: string;
  published: boolean;
  publish_date: string;
  type?: ContentType;
  category?: string;
}

// Export from supabase-data instead
export {
  getContentBySlug,
  getAllSlugs,
  getContentByType,
} from "./supabase-data";
