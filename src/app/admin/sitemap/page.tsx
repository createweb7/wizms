"use client";

import React, { useRef, useState } from "react";
import { MdDownload, MdUpload, MdCheckCircle } from "react-icons/md";

export default function SitemapPage() {
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.name.endsWith(".xml")) {
      setError("Please select an XML file");
      return;
    }
    setSelectedFile(file);
    setError("");
    setSuccess("");
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setIsSaving(true);
    setError("");
    setSuccess("");

    try {
      const text = await selectedFile.text();

      if (!text.includes("<urlset") || !text.includes("</urlset>")) {
        throw new Error("Invalid sitemap: missing <urlset> root element");
      }

      const res = await fetch("/api/sitemap-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: text }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      const urlCount = (text.match(/<url>/g) || []).length;
      setSuccess(`sitemap.xml replaced successfully — ${urlCount} URLs`);
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload sitemap");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDownload = async () => {
    setError("");
    try {
      const res = await fetch("/api/sitemap-admin");
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      const blob = new Blob([data.content], { type: "application/xml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "sitemap.xml";
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to download sitemap");
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Sitemap</h1>
          <p>Upload a new sitemap.xml to replace the current one</p>
        </div>
      </div>

      {error && <div className="alert alert-error" style={{ marginBottom: 16 }}>{error}</div>}
      {success && (
        <div className="alert alert-success" style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
          <MdCheckCircle size={18} /> {success}
        </div>
      )}

      <div className="form-section">
        <h2>Replace Sitemap</h2>

        <div className="form-group">
          <label>Select XML File</label>
          <input
            ref={fileInputRef}
            type="file"
            accept=".xml"
            onChange={handleFileSelect}
            style={{ padding: "8px 0" }}
          />
          {selectedFile && (
            <p style={{ fontSize: 13, color: "#64748b", marginTop: 6 }}>
              Selected: <strong>{selectedFile.name}</strong> ({(selectedFile.size / 1024).toFixed(1)} KB)
            </p>
          )}
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUpload}
            disabled={!selectedFile || isSaving}
          >
            <MdUpload size={18} /> {isSaving ? "Uploading..." : "Upload & Replace"}
          </button>
        </div>
      </div>

      <div className="form-section">
        <h2>Download Current Sitemap</h2>
        <p style={{ color: "#64748b", fontSize: 14, marginBottom: 16 }}>
          Download the current sitemap.xml from the server.
        </p>
        <button
          type="button"
          className="btn btn-outline"
          onClick={handleDownload}
        >
          <MdDownload size={18} /> Download sitemap.xml
        </button>
      </div>
    </div>
  );
}
