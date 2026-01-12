"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  return (
    <header className="admin-header">
      <div className="admin-header-content">
        <div className="header-left">
          <Link href="/admin" className="admin-logo">
            <div className="logo-wrapper">
              <Image
                src="/logo.webp"
                alt="WIZ Logo"
                width={120}
                height={120}
                priority
                style={{ objectFit: "contain", width: "auto", height: "50px" }}
              />
            </div>
            <div className="logo-text-container">
              <span className="logo-text-main">WIZMS</span>
              <span className="logo-text-sub">Admin Panel</span>
            </div>
          </Link>
        </div>

        <div className="header-right">
          <div className="user-section">
            <div className="user-avatar">A</div>
            <span className="user-label">Admin User</span>
            <button
              onClick={handleLogout}
              className="logout-link"
              title="Logout"
            >
              <FiLogOut size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
