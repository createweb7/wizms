"use client";

import React from "react";
import BlogForm from "@/components/admin/BlogForm";

export default function NewBlogPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Create New Blog</h1>
        <p>Add a new blog post to your website</p>
      </div>
      <BlogForm />
    </div>
  );
}
