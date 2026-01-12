"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase, Content } from "@/lib/supabase-data";
import BlogForm from "@/components/admin/BlogForm";

export default function EditBlogPage() {
  const params = useParams();
  const id = params.id as string;
  const [blog, setBlog] = useState<Content | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .eq("id", parseInt(id))
          .single();

        if (error) throw error;
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="page-container">
        <p className="text-red-600">Blog not found</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Edit Blog</h1>
        <p>Update your blog post</p>
      </div>
      <BlogForm initialBlog={blog} />
    </div>
  );
}
