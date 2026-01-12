"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  publish_date: string;
  category?: string;
}

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("/api/content?type=blog");
        if (!response.ok) throw new Error("Failed to fetch");
        const items = await response.json();
        const formattedBlogs = items.map((item: any) => ({
          slug: item.slug,
          title: item.title,
          excerpt: item.excerpt,
          publish_date: item.publish_date,
          category: item.category,
        }));
        setBlogs(formattedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Loading blogs...</p>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No blog posts available yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {blogs.map((blog) => (
        <Link
          key={blog.slug}
          href={`/${blog.slug}`}
          className="group bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-center gap-4 mb-3">
              {blog.publish_date && (
                <time className="text-sm text-gray-500">
                  {new Date(blog.publish_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              )}
              {blog.category && (
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {blog.category}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {blog.excerpt.length > 150
                ? `${blog.excerpt.substring(0, 150)}...`
                : blog.excerpt}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
