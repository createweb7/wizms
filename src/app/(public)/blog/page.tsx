"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  publish_date: string;
  category?: string;
  meta_description?: string;
}

const ITEMS_PER_PAGE = 15;

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/content?type=blog");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        const formattedBlogs = (data || [])
          .sort(
            (a: any, b: any) =>
              new Date(b.publish_date).getTime() -
              new Date(a.publish_date).getTime(),
          )
          .map((item: any) => ({
            slug: item.slug,
            title: item.title,
            excerpt: item.excerpt,
            publish_date: item.publish_date,
            category: item.category,
            meta_description: item.meta_description,
          }));
        setBlogs(formattedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.meta_description?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get 3 most recent blogs
  const recentBlogs = blogs.slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-semibold">Blog</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Blog Posts */}
          <div className="lg:col-span-2">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading articles...</p>
              </div>
            ) : filteredBlogs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  {searchTerm
                    ? "No blog posts match your search."
                    : "No blog posts available."}
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-8">
                  {currentBlogs.map((blog) => (
                    <article
                      key={blog.slug}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          {blog.category && (
                            <span
                              className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-white"
                              style={{ backgroundColor: "#295e8f" }}
                            >
                              {blog.category}
                            </span>
                          )}
                          {blog.publish_date && (
                            <time className="text-sm text-gray-500">
                              {new Date(blog.publish_date).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                },
                              )}
                            </time>
                          )}
                        </div>

                        <Link href={`/${blog.slug}`}>
                          <h2
                            className="text-2xl font-bold text-gray-900 mb-2 transition-colors hover:opacity-70"
                            style={{ color: "#295e8f" }}
                          >
                            {blog.title}
                          </h2>
                        </Link>

                        <p className="text-gray-600 mb-4">
                          {blog.excerpt || blog.meta_description}
                        </p>

                        <Link
                          href={`/${blog.slug}`}
                          className="inline-block px-4 py-2 text-white rounded hover:opacity-90 transition-colors"
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
              <div className="space-y-8">
                {recentBlogs.map((blog) => (
                  <div
                    key={blog.slug}
                    className="bg-gray-50 p-4 rounded-lg"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-500 text-sm">
                          ⏰{" "}
                          {new Date(blog.publish_date).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            },
                          )}
                        </span>
                      </div>
                      <Link href={`/${blog.slug}`}>
                        <h3
                          className="text-sm font-bold text-gray-900 transition-colors line-clamp-2 hover:opacity-70"
                          style={{ color: "#295e8f" }}
                        >
                          {blog.title}
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
