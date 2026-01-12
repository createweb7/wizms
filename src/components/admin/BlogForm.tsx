"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase, Content } from "@/lib/supabase-data";

interface BlogFormProps {
  initialBlog?: Content;
}

export default function BlogForm({ initialBlog }: BlogFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<Content>({
    slug: "",
    url: "",
    title: "",
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
    content: "",
    excerpt: "",
    published: false,
    publish_date: new Date().toISOString().split("T")[0],
    featured_image: "",
    featured_image_alt: "",
  });

  useEffect(() => {
    if (initialBlog) {
      setFormData({
        ...initialBlog,
        slug: initialBlog.slug || "",
        url: initialBlog.url || "",
        title: initialBlog.title || "",
        meta_title: initialBlog.meta_title || "",
        meta_description: initialBlog.meta_description || "",
        meta_keywords: initialBlog.meta_keywords || "",
        content: initialBlog.content || "",
        excerpt: initialBlog.excerpt || "",
        published: initialBlog.published ?? false,
        publish_date:
          initialBlog.publish_date || new Date().toISOString().split("T")[0],
        featured_image: initialBlog.featured_image || "",
        featured_image_alt: initialBlog.featured_image_alt || "",
      });
    }
  }, [initialBlog]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (!formData.title || !formData.slug || !formData.content) {
        setError("Please fill in all required fields");
        setIsLoading(false);
        return;
      }

      if (initialBlog?.id) {
        // Update existing blog
        const { error: updateError } = await supabase
          .from("blogs")
          .update(formData)
          .eq("id", initialBlog.id);

        if (updateError) throw updateError;
      } else {
        // Create new blog
        const { error: insertError } = await supabase
          .from("blogs")
          .insert([formData]);

        if (insertError) throw insertError;
      }

      router.push("/admin/blogs");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save blog");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      {error && <div className="alert alert-error">{error}</div>}

      <div className="form-section">
        <h2>Basic Information</h2>

        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleTitleChange}
            placeholder="Enter blog title"
            required
            disabled={isLoading}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="slug">Slug *</label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              placeholder="blog-title"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input
              type="text"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleInputChange}
              placeholder="https://example.com"
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="excerpt">Excerpt</label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleInputChange}
            placeholder="Short summary of the blog"
            rows={3}
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content *</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Enter blog content"
            rows={10}
            required
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="form-section">
        <h2>SEO & Publishing</h2>

        <div className="form-group">
          <label htmlFor="meta_title">Meta Title</label>
          <input
            type="text"
            id="meta_title"
            name="meta_title"
            value={formData.meta_title}
            onChange={handleInputChange}
            placeholder="SEO title"
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="meta_description">Meta Description</label>
          <textarea
            id="meta_description"
            name="meta_description"
            value={formData.meta_description}
            onChange={handleInputChange}
            placeholder="SEO description"
            rows={3}
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="meta_keywords">Meta Keywords</label>
          <input
            type="text"
            id="meta_keywords"
            name="meta_keywords"
            value={formData.meta_keywords}
            onChange={handleInputChange}
            placeholder="keyword1, keyword2, keyword3"
            disabled={isLoading}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="publish_date">Publish Date</label>
            <input
              type="date"
              id="publish_date"
              name="publish_date"
              value={formData.publish_date}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </div>

          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="published"
              name="published"
              checked={formData.published}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <label htmlFor="published">Published</label>
          </div>
        </div>
      </div>

      <div className="form-section">
        <h2>Featured Image</h2>

        <div className="form-group">
          <label htmlFor="featured_image">Image URL</label>
          <input
            type="url"
            id="featured_image"
            name="featured_image"
            value={formData.featured_image}
            onChange={handleInputChange}
            placeholder="https://example.com/image.jpg"
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="featured_image_alt">Image Alt Text</label>
          <input
            type="text"
            id="featured_image_alt"
            name="featured_image_alt"
            value={formData.featured_image_alt}
            onChange={handleInputChange}
            placeholder="Describe the image for accessibility"
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading
            ? "Saving..."
            : initialBlog
            ? "Update Blog"
            : "Create Blog"}
        </button>
        <a href="/admin/blogs" className="btn btn-outline">
          Cancel
        </a>
      </div>
    </form>
  );
}
