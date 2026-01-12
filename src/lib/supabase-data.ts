import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContentType = "blog" | "microblog";

export interface Content {
  id?: number;
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
  featured_image?: string;
  featured_image_alt?: string;
}

// Cache for content
let contentCache: {
  blogs: Content[];
  microblogs: Content[];
  lastFetchBlogs?: number;
  lastFetchMicroblogs?: number;
} = {
  blogs: [],
  microblogs: [],
};

const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export async function getContentByType(
  type: ContentType,
  limit?: number
): Promise<Content[]> {
  try {
    const now = Date.now();
    const cacheKey = type === "blog" ? "lastFetchBlogs" : "lastFetchMicroblogs";
    const lastFetch = contentCache[cacheKey as keyof typeof contentCache] as
      | number
      | undefined;

    // Check if cache is still valid for this specific type
    if (lastFetch && now - lastFetch < CACHE_DURATION) {
      const data =
        type === "blog" ? contentCache.blogs : contentCache.microblogs;
      return limit ? data.slice(0, limit) : data;
    }

    const tableName = type === "blog" ? "blogs" : "microblogs";

    const { data, error } = await supabase
      .from(tableName)
      .select("*")
      .eq("published", true)
      .order("publish_date", { ascending: false });

    if (error) {
      console.error(`Error fetching ${type}s:`, error);
      return [];
    }

    const formattedData = (data || []).map((item: any) => ({
      ...item,
      type,
    }));

    // Update cache for this specific type
    if (type === "blog") {
      contentCache.blogs = formattedData;
      contentCache.lastFetchBlogs = now;
    } else {
      contentCache.microblogs = formattedData;
      contentCache.lastFetchMicroblogs = now;
    }

    return limit ? formattedData.slice(0, limit) : formattedData;
  } catch (error) {
    console.error(`Error in getContentByType(${type}):`, error);
    return [];
  }
}

export async function getContentBySlug(slug: string): Promise<Content | null> {
  try {
    // Try blogs first
    const { data: blog, error: blogError } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (!blogError && blog) {
      return { ...blog, type: "blog" };
    }

    // Try microblogs
    const { data: microblog, error: microblogError } = await supabase
      .from("microblogs")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (!microblogError && microblog) {
      return { ...microblog, type: "microblog" };
    }

    return null;
  } catch (error) {
    console.error("Error fetching content by slug:", error);
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  try {
    const blogs = await getContentByType("blog");
    const microblogs = await getContentByType("microblog");

    return [...blogs, ...microblogs].map((item) => item.slug);
  } catch (error) {
    console.error("Error fetching all slugs:", error);
    return [];
  }
}
