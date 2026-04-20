"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Microblog {
  slug: string;
  title: string;
  excerpt: string;
  publish_date: string;
  category?: string;
  meta_description?: string;
  featured_image?: string;
  featured_image_alt?: string;
}

const ITEMS_PER_PAGE = 15;

export default function MicroblogsPage() {
  const [microblogs, setMicroblogs] = useState<Microblog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMicroblogs = async () => {
      try {
        const response = await fetch("/api/content?type=microblog");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        const formattedMicroblogs = (data || [])
          .sort(
            (a: any, b: any) =>
              new Date(b.publish_date).getTime() -
              new Date(a.publish_date).getTime()
          )
          .map((item: any) => ({
            slug: item.slug,
            title: item.title,
            excerpt: item.excerpt,
            publish_date: item.publish_date,
            category: item.category,
            meta_description: item.meta_description,
            featured_image: item.featured_image,
            featured_image_alt: item.featured_image_alt,
          }));
        setMicroblogs(formattedMicroblogs);
      } catch (error) {
        console.error("Error fetching microblogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMicroblogs();
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Filter microblogs based on search term
  const filteredMicroblogs = microblogs.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.meta_description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredMicroblogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentMicroblogs = filteredMicroblogs.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Get 3 most recent microblogs
  const recentMicroblogs = microblogs.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full px-4 sm:px-6 lg:px-8 py-12"
        style={{ backgroundColor: "#295e8f" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Micro Blogs</h1>
          <p className="text-blue-100 text-lg">
            Quick insights and tips on ISO certification
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Microblogs */}
          <div className="lg:col-span-2">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading articles...</p>
              </div>
            ) : filteredMicroblogs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  {searchTerm
                    ? "No micro blog posts match your search."
                    : "No micro blog posts available."}
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentMicroblogs.map((post) => (
                    <article
                      key={post.slug}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      {post.featured_image && (
                        <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                          <Image
                            src={post.featured_image}
                            alt={post.featured_image_alt || post.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              // Hide image if it fails to load
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        </div>
                      )}
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-4">
                          {post.category && (
                            <span
                              className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-white"
                              style={{ backgroundColor: "#295e8f" }}
                            >
                              {post.category}
                            </span>
                          )}
                          {post.publish_date && (
                            <time className="text-sm text-gray-500">
                              {new Date(post.publish_date).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                }
                              )}
                            </time>
                          )}
                        </div>

                        <Link href={`/${post.slug}`}>
                          <h2
                            className="text-xl font-bold text-gray-900 mb-2 transition-colors hover:opacity-70"
                            style={{ color: "#295e8f" }}
                          >
                            {post.title}
                          </h2>
                        </Link>

                        <p className="text-gray-600 mb-4 grow">
                          {post.excerpt || post.meta_description}
                        </p>

                        <Link
                          href={`/${post.slug}`}
                          className="inline-block px-4 py-2 text-white rounded hover:opacity-90 transition-colors w-fit"
                          style={{ backgroundColor: "#ee991a" }}
                        >
                          Read More →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex items-center justify-between">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    style={{
                      backgroundColor: currentPage === 1 ? "#ccc" : "#ee991a",
                    }}
                  >
                    ← Previous
                  </button>
                  <span className="text-gray-600">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    style={{
                      backgroundColor:
                        currentPage === totalPages ? "#ccc" : "#ee991a",
                    }}
                  >
                    Next →
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Search Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Search Here
              </h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Keyword"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-colors"
                  style={{ "--tw-ring-color": "#295e8f" } as any}
                  onFocus={(e) => (e.target.style.borderColor = "#295e8f")}
                  onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                />
                <button
                  className="px-4 py-3 text-white rounded-lg hover:opacity-90 transition-colors"
                  style={{ backgroundColor: "#ee991a" }}
                >
                  🔍
                </button>
              </div>
            </div>

            {/* Recent Posts Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Recent Posts
              </h2>
              <div className="space-y-6">
                {recentMicroblogs.map((post) => (
                  <div
                    key={post.slug}
                    className="pb-6 border-b border-gray-200 last:border-b-0"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-500 text-sm">
                          ⏰{" "}
                          {new Date(post.publish_date).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>
                      <Link href={`/${post.slug}`}>
                        <h3
                          className="text-sm font-bold text-gray-900 transition-colors line-clamp-2 hover:opacity-70"
                          style={{ color: "#295e8f" }}
                        >
                          {post.title}
                        </h3>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div
              className="rounded-lg p-6 text-center text-white"
              style={{ backgroundColor: "#ee991a" }}
            >
              <h3 className="text-2xl font-bold mb-3">
                Have Any Questions? Call Us Today!
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Get expert advice from our ISO certification specialists
              </p>
              <div className="text-2xl font-bold mb-6">00971 55 2774123</div>
              <Link
                href="/contact"
                className="inline-block px-6 py-2 bg-white font-bold rounded-lg hover:bg-gray-100 transition-colors text-sm"
                style={{ color: "#ee991a" }}
              >
                Make Appointment →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
