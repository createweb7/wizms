"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase-data";
import { Content } from "@/lib/supabase-data";
import { MdEdit, MdDelete, MdAdd } from "react-icons/md";

export default function MicroblogsPage() {
  const [microblogs, setMicroblogs] = useState<Content[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMicroblogs = async () => {
      try {
        const { data, error } = await supabase
          .from("microblogs")
          .select("*")
          .order("publish_date", { ascending: false });

        if (error) throw error;
        setMicroblogs(data || []);
      } catch (error) {
        console.error("Error fetching microblogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMicroblogs();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this microblog?")) return;

    try {
      const { error } = await supabase.from("microblogs").delete().eq("id", id);

      if (error) throw error;
      setMicroblogs(microblogs.filter((mb) => mb.id !== id));
    } catch (error) {
      console.error("Error deleting microblog:", error);
      alert("Failed to delete microblog");
    }
  };

  const filteredMicroblogs = microblogs.filter(
    (mb) =>
      mb.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mb.slug.toLowerCase().includes(searchTerm.toLowerCase())
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
          <h1>Microblogs</h1>
          <p>Manage your microblogs</p>
        </div>
        <Link href="/admin/microblogs/new" className="btn btn-primary">
          <MdAdd size={18} /> New Microblog
        </Link>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search microblogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-search"
        />
      </div>

      {filteredMicroblogs.length === 0 ? (
        <div className="empty-state">
          <i className="fas fa-inbox"></i>
          <p>No microblogs found</p>
          <Link href="/admin/microblogs/new" className="btn btn-primary">
            Create First Microblog
          </Link>
        </div>
      ) : (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Slug</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMicroblogs.map((mb) => (
                <tr key={mb.id}>
                  <td className="font-medium">{mb.title}</td>
                  <td className="text-gray-600">{mb.slug}</td>
                  <td>
                    <span
                      className={`badge ${
                        mb.published ? "badge-success" : "badge-warning"
                      }`}
                    >
                      {mb.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="text-gray-600">
                    {new Date(mb.publish_date).toLocaleDateString()}
                  </td>
                  <td className="actions">
                    <Link
                      href={`/admin/microblogs/${mb.id}/edit`}
                      className="btn btn-small btn-secondary"
                    >
                      <MdEdit size={16} /> Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(mb.id!)}
                      className="btn btn-small btn-danger"
                    >
                      <MdDelete size={16} /> Delete
                    </button>
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
