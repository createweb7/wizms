"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { MdDashboard, MdArticle, MdMessage, MdLogout } from "react-icons/md";
import AdminHeader from "@/components/admin/AdminHeader";
import "@/styles/admin.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("adminToken");

    if (!token && pathname !== "/admin/login") {
      router.push("/admin/login");
    } else if (token) {
      setIsAuthenticated(true);
      if (pathname === "/admin/login") {
        router.push("/admin");
      }
    }
    setIsLoading(false);
  }, [pathname, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Login page doesn't need layout
  if (pathname === "/admin/login") {
    return children;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h1>WIZMS Admin</h1>
        </div>

        <nav className="sidebar-nav">
          <Link
            href="/admin"
            className={`nav-link ${pathname === "/admin" ? "active" : ""}`}
          >
            <MdDashboard size={20} />
            <span>Dashboard</span>
          </Link>

          <div className="nav-section">
            <p className="nav-section-title">Content Management</p>

            <Link
              href="/admin/blogs"
              className={`nav-link ${
                pathname?.includes("/admin/blogs") ? "active" : ""
              }`}
            >
              <MdArticle size={20} />
              <span>Blogs</span>
            </Link>

            <Link
              href="/admin/microblogs"
              className={`nav-link ${
                pathname?.includes("/admin/microblogs") ? "active" : ""
              }`}
            >
              <MdMessage size={20} />
              <span>Microblogs</span>
            </Link>
          </div>
        </nav>

        <button
          onClick={() => {
            localStorage.removeItem("adminToken");
            router.push("/admin/login");
          }}
          className="logout-btn"
        >
          <MdLogout size={20} />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <AdminHeader />

        <div className="admin-content">{children}</div>
      </main>
    </div>
  );
}
