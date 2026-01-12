"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase-data";
import { Content } from "@/lib/supabase-data";
import { MdEdit, MdDelete, MdAdd, MdSearch } from "react-icons/md";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Content[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .order("publish_date", { ascending: false });

        if (error) throw error;
        setBlogs(data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const { error } = await supabase.from("blogs").delete().eq("id", id);

      if (error) throw error;
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog");
    }
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.slug.toLowerCase().includes(searchTerm.toLowerCase())
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
          <h1>Blogs</h1>
          <p>Manage your blog posts</p>
        </div>
        <Link href="/admin/blogs/new" className="btn btn-primary">
          <MdAdd size={18} /> New Blog
        </Link>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-search"
        />
      </div>

      {filteredBlogs.length === 0 ? (
        <div className="empty-state">
          <i className="fas fa-inbox"></i>
          <p>No blogs found</p>
          <Link href="/admin/blogs/new" className="btn btn-primary">
            Create First Blog
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
              {filteredBlogs.map((blog) => (
                <tr key={blog.id}>
                  <td className="font-medium">{blog.title}</td>
                  <td className="text-gray-600">{blog.slug}</td>
                  <td>
                    <span
                      className={`badge ${
                        blog.published ? "badge-success" : "badge-warning"
                      }`}
                    >
                      {blog.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="text-gray-600">
                    {new Date(blog.publish_date).toLocaleDateString()}
                  </td>
                  <td className="actions">
                    <Link
                      href={`/admin/blogs/${blog.id}/edit`}
                      className="btn btn-small btn-secondary"
                    >
                      <MdEdit size={16} /> Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(blog.id!)}
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
