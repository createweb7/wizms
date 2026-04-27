import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable source maps in production to reduce bundle size
  productionBrowserSourceMaps: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dldlsdtguqqybwdwqhzq.supabase.co",
        pathname: "/storage/**",
      },
    ],
    // Optimize image compression with modern formats
    formats: ["image/avif", "image/webp"],
  },

  // Reduce JavaScript size for modern browsers
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;
