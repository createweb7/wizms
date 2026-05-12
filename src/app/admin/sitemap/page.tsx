"use client";

import React, { useEffect, useRef, useState } from "react";
import { MdDownload, MdUpload, MdSave, MdRefresh } from "react-icons/md";

export default function SitemapPage() {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchSitemap = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("/api/sitemap-admin");
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setContent(data.content);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load sitemap");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSitemap();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("/api/sitemap-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setSuccess("sitemap.xml saved successfully!");
      setTimeout(() => setSuccess(""), 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save sitemap");
    } finally {
      setIsSaving(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.name.endsWith(".xml")) {
      setError("Please upload an XML file");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      setContent(text);
      setSuccess("File loaded — click Save to apply changes");
      setTimeout(() => setSuccess(""), 4000);
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sitemap.xml";
    a.click();
    URL.revokeObjectURL(url);
  };

  const urlCount = (content.match(/<url>/g) || []).length;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Sitemap</h1>
          <p>Edit or replace sitemap.xml — {urlCount} URLs</p>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button
            type="button"
            className="btn btn-outline btn-small"
            onClick={fetchSitemap}
            title="Reload from server"
          >
            <MdRefresh size={16} /> Reload
          </button>
          <button
            type="button"
            className="btn btn-outline btn-small"
            onClick={handleDownload}
            disabled={!content}
          >
            <MdDownload size={16} /> Download
          </button>
          <label className="btn btn-secondary btn-small" style={{ cursor: "pointer" }}>
            <MdUpload size={16} /> Upload XML
            <input
              ref={fileInputRef}
              type="file"
              accept=".xml"
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
          </label>
          <button
            type="button"
            className="btn btn-primary btn-small"
            onClick={handleSave}
            disabled={isSaving || !content}
          >
            <MdSave size={16} /> {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {error && <div className="alert alert-error" style={{ marginBottom: 16 }}>{error}</div>}
      {success && <div className="alert alert-success" style={{ marginBottom: 16 }}>{success}</div>}

      <div className="form-section" style={{ padding: 0 }}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          spellCheck={false}
          style={{
            width: "100%",
            minHeight: 600,
            fontFamily: "monospace",
            fontSize: 13,
            lineHeight: 1.5,
            padding: 16,
            border: "1px solid #e2e8f0",
            borderRadius: 8,
            resize: "vertical",
            background: "#f8fafc",
            color: "#1e293b",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>
    </div>
  );
}
