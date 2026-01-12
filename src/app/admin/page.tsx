"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-data";
import Link from "next/link";
import { MdArticle, MdMessage, MdAdd, MdVisibility } from "react-icons/md";

interface Stats {
  totalBlogs: number;
  totalMicroblogs: number;
  publishedBlogs: number;
  publishedMicroblogs: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    totalBlogs: 0,
    totalMicroblogs: 0,
    publishedBlogs: 0,
    publishedMicroblogs: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch blogs stats
        const { data: blogsData } = await supabase.from("blogs").select("*");

        const { data: microblogsData } = await supabase
          .from("microblogs")
          .select("*");

        const totalBlogs = blogsData?.length || 0;
        const totalMicroblogs = microblogsData?.length || 0;
        const publishedBlogs =
          blogsData?.filter((b) => b.published)?.length || 0;
        const publishedMicroblogs =
          microblogsData?.filter((m) => m.published)?.length || 0;

        setStats({
          totalBlogs,
          totalMicroblogs,
          publishedBlogs,
          publishedMicroblogs,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
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
        <h1>Dashboard</h1>
        <p>Welcome back to WIZMS Admin Panel</p>
      </div>

      <div className="stats-grid">
        {/* Total Blogs */}
        <div className="stat-card">
          <div className="stat-icon blogs">
            <MdArticle size={32} />
          </div>
          <div className="stat-content">
            <h3>Total Blogs</h3>
            <p className="stat-value">{stats.totalBlogs}</p>
            <p className="stat-subtitle">{stats.publishedBlogs} published</p>
          </div>
        </div>

        {/* Total Microblogs */}
        <div className="stat-card">
          <div className="stat-icon microblogs">
            <MdMessage size={32} />
          </div>
          <div className="stat-content">
            <h3>Total Microblogs</h3>
            <p className="stat-value">{stats.totalMicroblogs}</p>
            <p className="stat-subtitle">
              {stats.publishedMicroblogs} published
            </p>
          </div>
        </div>

        {/* Draft Blogs */}
        <div className="stat-card">
          <div className="stat-icon drafts">
            <MdArticle size={32} />
          </div>
          <div className="stat-content">
            <h3>Draft Blogs</h3>
            <p className="stat-value">
              {stats.totalBlogs - stats.publishedBlogs}
            </p>
            <p className="stat-subtitle">Need review</p>
          </div>
        </div>

        {/* Draft Microblogs */}
        <div className="stat-card">
          <div className="stat-icon drafts">
            <MdMessage size={32} />
          </div>
          <div className="stat-content">
            <h3>Draft Microblogs</h3>
            <p className="stat-value">
              {stats.totalMicroblogs - stats.publishedMicroblogs}
            </p>
            <p className="stat-subtitle">Need review</p>
          </div>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Quick Actions</h2>
        <div className="quick-actions">
          <Link href="/admin/blogs/new" className="btn btn-primary">
            <MdAdd size={18} /> New Blog
          </Link>
          <Link href="/admin/microblogs/new" className="btn btn-secondary">
            <MdAdd size={18} /> New Microblog
          </Link>
          <Link href="/admin/blogs" className="btn btn-outline">
            <MdVisibility size={18} /> View All Blogs
          </Link>
          <Link href="/admin/microblogs" className="btn btn-outline">
            <MdVisibility size={18} /> View All Microblogs
          </Link>
        </div>
      </div>
    </div>
  );
}
