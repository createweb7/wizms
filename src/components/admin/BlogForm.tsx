"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase, Content } from "@/lib/supabase-data";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";

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

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: formData.content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setFormData((prev) => ({
        ...prev,
        content: editor.getHTML(),
      }));
    },
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
      if (editor) {
        editor.commands.setContent(initialBlog.content || "");
      }
    }
  }, [initialBlog, editor]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => {
      const updated = { ...prev, [name]: type === "checkbox" ? checked : value };
      if (name === "slug") {
        updated.url = `https://www.wizms.net/${value}`;
      }
      return updated;
    });
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
    const slug = generateSlug(title);
    setFormData((prev) => ({
      ...prev,
      title,
      slug,
      url: `https://www.wizms.net/${slug}`,
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

      // Strip fields that don't exist as columns in the blogs table
      const { id, type, ...blogData } = formData as any;
      // Always ensure url is set
      if (!blogData.url) {
        blogData.url = `https://www.wizms.net/${blogData.slug}`;
      }

      if (initialBlog?.id) {
        const { error: updateError } = await supabase
          .from("blogs")
          .update(blogData)
          .eq("id", initialBlog.id);

        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase
          .from("blogs")
          .insert([blogData]);

        if (insertError) throw insertError;
      }

      router.push("/admin/blogs");
    } catch (err: any) {
      const msg = err?.message || err?.error_description || JSON.stringify(err);
      setError(msg || "Failed to save blog");
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
            <label htmlFor="url">URL (auto-generated)</label>
            <input
              type="text"
              id="url"
              name="url"
              value={formData.url}
              readOnly
              style={{ background: "#f1f5f9", color: "#64748b" }}
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
          <label htmlFor="content">Content * (Rich Text Editor)</label>
          <div className="editor-toolbar" style={{ marginBottom: "10px", display: "flex", gap: "5px", flexWrap: "wrap", padding: "10px", backgroundColor: "#f5f5f5", borderRadius: "4px" }}>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className="editor-btn"
              style={{ padding: "8px 12px", backgroundColor: editor?.isActive("bold") ? "#0066cc" : "#ddd", color: editor?.isActive("bold") ? "#fff" : "#000", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              Bold
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className="editor-btn"
              style={{ padding: "8px 12px", backgroundColor: editor?.isActive("italic") ? "#0066cc" : "#ddd", color: editor?.isActive("italic") ? "#fff" : "#000", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              Italic
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
              className="editor-btn"
              style={{ padding: "8px 12px", backgroundColor: editor?.isActive("heading", { level: 2 }) ? "#0066cc" : "#ddd", color: editor?.isActive("heading", { level: 2 }) ? "#fff" : "#000", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              H2
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
              className="editor-btn"
              style={{ padding: "8px 12px", backgroundColor: editor?.isActive("bulletList") ? "#0066cc" : "#ddd", color: editor?.isActive("bulletList") ? "#fff" : "#000", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              Bullet List
            </button>
            <button
              type="button"
              onClick={() => {
                const url = prompt("Enter URL:");
                if (url) {
                  editor?.chain().focus().setLink({ href: url }).run();
                }
              }}
              className="editor-btn"
              style={{ padding: "8px 12px", backgroundColor: editor?.isActive("link") ? "#0066cc" : "#ddd", color: editor?.isActive("link") ? "#fff" : "#000", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              Link
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().clearNodes().run()}
              className="editor-btn"
              style={{ padding: "8px 12px", backgroundColor: "#ddd", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              Clear Format
            </button>
          </div>
          <EditorContent
            editor={editor}
            id="content"
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "12px",
              minHeight: "300px",
              backgroundColor: "#fff",
              fontFamily: "monospace",
              fontSize: "14px",
            }}
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
