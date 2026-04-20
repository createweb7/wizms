"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase, ConsultantPage } from "@/lib/supabase-data";
import { MdEdit } from "react-icons/md";

export default function ConsultantPagesPage() {
  const [pages, setPages] = useState<ConsultantPage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const { data, error } = await supabase
          .from("consultant_pages")
          .select("*")
          .order("id", { ascending: true });

        if (error) throw error;
        setPages(data || []);
      } catch (error) {
        console.error("Error fetching consultant pages:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPages();
  }, []);

  const filteredPages = pages.filter(
    (p) =>
      p.page_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <h1>Consultant Pages</h1>
          <p>Manage SEO meta for consultancy service pages</p>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search pages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-search"
        />
      </div>

      {filteredPages.length === 0 ? (
        <div className="empty-state">
          <p>No consultant pages found</p>
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
              {filteredPages.map((page) => (
                <tr key={page.id}>
                  <td className="font-medium">{page.page_name}</td>
                  <td className="text-gray-600">{page.slug}</td>
                  <td className="text-gray-600">
                    {page.meta_title
                      ? page.meta_title.length > 60
                        ? page.meta_title.slice(0, 60) + "…"
                        : page.meta_title
                      : <span className="text-gray-400">—</span>}
                  </td>
                  <td className="actions">
                    <Link
                      href={`/admin/consultant/${page.id}/edit`}
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
