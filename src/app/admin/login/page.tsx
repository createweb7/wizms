"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "@/styles/admin-login.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simple authentication (in production, use proper backend auth)
    const ADMIN_EMAIL = "admin@wizms.net";
    const ADMIN_PASSWORD = "WIZ2024Admin!@#";

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Set a simple token in localStorage
      localStorage.setItem("adminToken", "authenticated_" + Date.now());
      router.push("/admin");
    } else {
      setError("Invalid email or password");
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <div className="logo-section">
            <div className="logo-wrapper-large">
              <Image
                src="/logo.webp"
                alt="WIZMS Logo"
                width={80}
                height={80}
                priority
              />
            </div>
          </div>
          <h1>WIZMS</h1>
          <p>Admin Panel</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          {error && <div className="alert alert-error">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">
              <span className="input-icon">✉️</span>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@wizms.net"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <span className="input-icon">🔒</span>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
