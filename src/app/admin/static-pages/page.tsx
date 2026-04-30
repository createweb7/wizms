"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase, StaticPage } from "@/lib/supabase-data";
import { MdEdit } from "react-icons/md";

export default function StaticPagesPage() {
  const [pages, setPages] = useState<StaticPage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const { data, error } = await supabase
          .from("static_pages")
          .select("*")
          .order("id", { ascending: true });

        if (error) throw error;
        setPages(data || []);
      } catch (error) {
        const msg = error instanceof Error ? error.message : String(error);
        console.error("Error fetching static pages:", error);
        setFetchError(msg);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPages();
  }, []);

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
          <h1>Static Pages</h1>
          <p>Manage SEO meta for Home, About, Contact and other static pages</p>
        </div>
      </div>

      {fetchError && (
        <div className="alert alert-error" style={{ marginBottom: 16 }}>
          {fetchError}
        </div>
      )}

      {!fetchError && pages.length === 0 ? (
        <div className="empty-state">
          <p>No static pages found. Make sure the <code>static_pages</code> table exists and RLS policies allow SELECT.</p>
        </div>
      ) : (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Page Name</th>
                <th>Slug</th>
                <th>Meta Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.id}>
                  <td className="font-medium">{page.page_name}</td>
                  <td className="text-gray-600">/{page.slug === 'home' ? '' : page.slug}</td>
                  <td className="text-gray-600">
                    {page.meta_title
                      ? page.meta_title.length > 60
                        ? page.meta_title.slice(0, 60) + "…"
                        : page.meta_title
                      : <span className="text-gray-400">—</span>}
                  </td>
                  <td className="actions">
                    <Link
                      href={`/admin/static-pages/${page.id}/edit`}
                      className="btn btn-small btn-secondary"
                    >
                      <MdEdit size={16} /> Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
