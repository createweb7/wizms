"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase, Content } from "@/lib/supabase-data";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";

interface MicroblogFormProps {
  initialMicroblog?: Content;
}

interface MicroblogContent extends Content {
  featured_image?: string;
  featured_image_alt?: string;
}

export default function MicroblogForm({
  initialMicroblog,
}: MicroblogFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formData, setFormData] = useState<MicroblogContent>({
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
    if (initialMicroblog) {
      setFormData({
        ...initialMicroblog,
        slug: initialMicroblog.slug || "",
        url: initialMicroblog.url || "",
        title: initialMicroblog.title || "",
        meta_title: initialMicroblog.meta_title || "",
        meta_description: initialMicroblog.meta_description || "",
        meta_keywords: initialMicroblog.meta_keywords || "",
        content: initialMicroblog.content || "",
        excerpt: initialMicroblog.excerpt || "",
        published: initialMicroblog.published ?? false,
        publish_date:
          initialMicroblog.publish_date ||
          new Date().toISOString().split("T")[0],
        featured_image: initialMicroblog.featured_image || "",
        featured_image_alt: initialMicroblog.featured_image_alt || "",
      });
      if (editor) {
        editor.commands.setContent(initialMicroblog.content || "");
      }
    }
  }, [initialMicroblog, editor]);

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

  const convertImageToWebp = async (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            reject(new Error("Failed to get canvas context"));
            return;
          }
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(
            (blob) => {
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error("Failed to convert image"));
              }
            },
            "image/webp",
            0.8
          );
        };
        img.onerror = () => reject(new Error("Failed to load image"));
        img.src = e.target?.result as string;
      };
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsDataURL(file);
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    setError("");

    try {
      // Show instant preview of selected file
      const reader = new FileReader();
      reader.onload = (event) => {
        const previewUrl = event.target?.result as string;
        setFormData((prev) => ({
          ...prev,
          featured_image: previewUrl, // Show client-side preview immediately
        }));
      };
      reader.readAsDataURL(file);

      // Then convert and upload in background
      const webpBlob = await convertImageToWebp(file);
      console.log("Converted image to WebP, blob size:", webpBlob.size);

      // Create a unique filename
      const timestamp = Date.now();
      const fileName = `${timestamp}-${formData.slug || "image"}.webp`;
      console.log("Uploading file:", fileName);

      // Upload to Supabase Storage
      const { data, error: uploadError } = await supabase.storage
        .from("microblogs")
        .upload(fileName, webpBlob, {
          contentType: "image/webp",
          upsert: false,
        });

      if (uploadError) {
        console.error("Upload error:", uploadError);
        setError(`Image upload failed: ${uploadError.message}`);
        throw uploadError;
      }

      if (!data) {
        throw new Error("No upload response from server");
      }

      console.log("Upload successful, file path:", data.path);

      // Get public URL
      const { data: publicUrlData } = supabase.storage
        .from("microblogs")
        .getPublicUrl(data.path);

      const imageUrl = publicUrlData?.publicUrl;
      console.log("Generated public URL:", imageUrl);

      if (!imageUrl) {
        throw new Error("Failed to generate public URL");
      }

      // Update form data with Supabase URL (replace client preview with server URL)
      setFormData((prev) => {
        const updated = {
          ...prev,
          featured_image: imageUrl,
        };
        console.log(
          "Updated form data with server URL:",
          updated.featured_image
        );
        return updated;
      });
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Unknown error";
      console.error("Image upload error:", errorMsg, err);
      setError(`❌ Image upload failed: ${errorMsg}`);
    } finally {
      setUploadingImage(false);
    }
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

      // If image was deleted (empty string), and it was a Supabase URL, delete it from storage
      if (initialMicroblog?.featured_image && initialMicroblog.featured_image.startsWith("https://")) {
        if (!formData.featured_image || formData.featured_image === "") {
          try {
            // Extract filename from URL
            const url = new URL(initialMicroblog.featured_image);
            const pathname = url.pathname;
            const filename = pathname.split("/").pop();
            
            if (filename) {
              await supabase.storage
                .from("microblogs")
                .remove([filename]);
            }
          } catch (err) {
            console.error("Error deleting image from storage:", err);
            // Continue with update even if file deletion fails
          }
        }
      }

      if (initialMicroblog?.id) {
        // Update existing microblog
        const updateData = {
          slug: formData.slug,
          url: formData.url,
          title: formData.title,
          meta_title: formData.meta_title,
          meta_description: formData.meta_description,
          meta_keywords: formData.meta_keywords,
          content: formData.content,
          excerpt: formData.excerpt,
          published: formData.published,
          publish_date: formData.publish_date,
          featured_image: formData.featured_image && formData.featured_image.trim() ? formData.featured_image : "",
          featured_image_alt: formData.featured_image_alt && formData.featured_image_alt.trim() ? formData.featured_image_alt : "",
        };
        console.log("Updating microblog with data:", updateData);
        const { error: updateError } = await supabase
          .from("microblogs")
          .update(updateData)
          .eq("id", initialMicroblog.id);

        if (updateError) {
          console.error("Update error from Supabase:", updateError);
          throw updateError;
        }
      } else {
        // Create new microblog
        const insertData = {
          slug: formData.slug,
          url: formData.url || `https://www.wizms.net/${formData.slug}`,
          title: formData.title,
          meta_title: formData.meta_title,
          meta_description: formData.meta_description,
          meta_keywords: formData.meta_keywords,
          content: formData.content,
          excerpt: formData.excerpt,
          published: formData.published,
          publish_date: formData.publish_date,
          featured_image: formData.featured_image && formData.featured_image.trim() ? formData.featured_image : "",
          featured_image_alt: formData.featured_image_alt && formData.featured_image_alt.trim() ? formData.featured_image_alt : "",
        };
        console.log("Creating microblog with data:", insertData);
        const { error: insertError } = await supabase
          .from("microblogs")
          .insert([insertData]);

        if (insertError) {
          console.error("Insert error from Supabase:", insertError);
          throw insertError;
        }
      }

      router.push("/admin/microblogs");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to save microblog";
      console.error("Save error:", err);
      setError(errorMessage);
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
            placeholder="Enter microblog title"
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
              placeholder="microblog-title"
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
              onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
              className="editor-btn"
              style={{ padding: "8px 12px", backgroundColor: editor?.isActive("heading", { level: 3 }) ? "#0066cc" : "#ddd", color: editor?.isActive("heading", { level: 3 }) ? "#fff" : "#000", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              H3
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
        <h2>Featured Image</h2>

        <div className="form-group">
          <label htmlFor="featured_image">
            Upload Image (any format - will convert to WebP)
          </label>
          <input
            type="file"
            id="featured_image"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={isLoading || uploadingImage}
          />
          {uploadingImage && (
            <p
              style={{
                color: "#3b82f6",
                marginTop: "8px",
                fontWeight: "600",
                animation: "pulse 1.5s infinite",
              }}
            >
              ⏳ Converting and uploading image...
            </p>
          )}
          {!uploadingImage &&
            formData.featured_image?.trim() &&
            (formData.featured_image.startsWith("http") ||
              formData.featured_image.startsWith("data:")) && (
              <p
                style={{
                  color: "#10b981",
                  marginTop: "8px",
                  fontWeight: "600",
                }}
              >
                ✅ Image uploaded successfully!
              </p>
            )}
        </div>

        {formData.featured_image?.trim() &&
          (formData.featured_image.startsWith("http") ||
            formData.featured_image.startsWith("data:")) && (
            <div className="form-group">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <label style={{ margin: 0 }}>Image Preview</label>
                <button
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      featured_image: "",
                      featured_image_alt: "",
                    }));
                  }}
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#ef4444",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#dc2626";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ef4444";
                  }}
                >
                  🗑️ Delete Image
                </button>
              </div>
              <div
                style={{
                  maxWidth: "400px",
                  padding: "16px",
                  backgroundColor: "#f8fafc",
                  borderRadius: "8px",
                  border: "2px solid #e2e8f0",
                  textAlign: "center",
                }}
              >
                <img
                  key={formData.featured_image}
                  src={formData.featured_image}
                  alt="Featured Preview"
                  onError={(e) => {
                    console.error(
                      "Failed to load image:",
                      formData.featured_image
                    );
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.innerHTML = `
                      <div style="color: #ef4444; padding: 16px; margin: 0; text-align: center;">
                        <p style="margin: 0 0 8px 0;"><strong>Failed to load image</strong></p>
                        <p style="margin: 0 0 12px 0; font-size: 0.85rem;">Your Supabase storage bucket may not be set to public.</p>
                        <p style="margin: 0; font-size: 0.8rem; color: #94a3b8;">Go to Supabase Console → Storage → Microblogs bucket → Make Public</p>
                      </div>
                    `;
                  }}
                  onLoad={() => {
                    console.log(
                      "Image loaded successfully:",
                      formData.featured_image
                    );
                  }}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "250px",
                    borderRadius: "6px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#94a3b8",
                    marginTop: "12px",
                    wordBreak: "break-all",
                    fontFamily: "monospace",
                    textAlign: "left",
                    maxHeight: "60px",
                    overflow: "auto",
                  }}
                >
                  {formData.featured_image}
                </p>
              </div>
            </div>
          )}

        <div className="form-group">
          <label htmlFor="featured_image_alt">Image Alt Text</label>
          <input
            type="text"
            id="featured_image_alt"
            name="featured_image_alt"
            value={formData.featured_image_alt}
            onChange={handleInputChange}
            placeholder="Alt text for accessibility"
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

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading
            ? "Saving..."
            : initialMicroblog
            ? "Update Microblog"
            : "Create Microblog"}
        </button>
        <a href="/admin/microblogs" className="btn btn-outline">
          Cancel
        </a>
      </div>
    </form>
  );
}
