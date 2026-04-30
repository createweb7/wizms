"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase, StaticPage } from "@/lib/supabase-data";

interface StaticPageFormProps {
  initialPage: StaticPage;
}

export default function StaticPageForm({ initialPage }: StaticPageFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
  });

  useEffect(() => {
    setFormData({
      meta_title: initialPage.meta_title || "",
      meta_description: initialPage.meta_description || "",
      meta_keywords: initialPage.meta_keywords || "",
    });
  }, [initialPage]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const { error: updateError } = await supabase
        .from("static_pages")
        .update({
          meta_title: formData.meta_title,
          meta_description: formData.meta_description,
          meta_keywords: formData.meta_keywords,
          updated_at: new Date().toISOString(),
        })
        .eq("id", initialPage.id!);

      if (updateError) throw updateError;

      setSuccess("Saved successfully!");
      setTimeout(() => router.push("/admin/static-pages"), 1000);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to save";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      {error && <div className="alert alert-error">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="form-section">
        <h2>Page Info</h2>
        <div className="form-group">
          <label>Page Name</label>
          <input type="text" value={initialPage.page_name} disabled />
        </div>
        <div className="form-group">
          <label>Slug</label>
          <input type="text" value={initialPage.slug} disabled />
        </div>
      </div>

      <div className="form-section">
        <h2>SEO Meta</h2>

        <div className="form-group">
          <label htmlFor="meta_title">
            Meta Title{" "}
            <span style={{ color: "#94a3b8", fontWeight: 400 }}>
              ({formData.meta_title.length}/160)
            </span>
          </label>
          <input
            type="text"
            id="meta_title"
            name="meta_title"
            value={formData.meta_title}
            onChange={handleInputChange}
            placeholder="SEO title (max 160 chars)"
            maxLength={160}
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="meta_description">
            Meta Description{" "}
            <span style={{ color: "#94a3b8", fontWeight: 400 }}>
              ({formData.meta_description.length}/160)
            </span>
          </label>
          <textarea
            id="meta_description"
            name="meta_description"
            value={formData.meta_description}
            onChange={handleInputChange}
            placeholder="SEO description (max 160 chars)"
            rows={3}
            maxLength={160}
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="meta_keywords">
            Meta Keywords{" "}
            <span style={{ color: "#94a3b8", fontWeight: 400 }}>
              ({formData.meta_keywords.length}/255)
            </span>
          </label>
          <textarea
            id="meta_keywords"
            name="meta_keywords"
            value={formData.meta_keywords}
            onChange={handleInputChange}
            placeholder="keyword1, keyword2, keyword3"
            rows={3}
            maxLength={255}
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Changes"}
        </button>
        <a href="/admin/static-pages" className="btn btn-outline">
          Cancel
        </a>
      </div>
    </form>
  );
}
