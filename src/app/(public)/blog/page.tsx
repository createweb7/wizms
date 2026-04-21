'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BlogCard } from '@/components/BlogCard';
import { BlogSidebar } from '@/components/BlogSidebar';
import { Content } from '@/lib/supabase-data';

const ITEMS_PER_PAGE = 12;

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/content?type=blog');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        const formattedBlogs = (data || []).sort(
          (a: any, b: any) =>
            new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
        );
        setBlogs(formattedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.meta_description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16" style={{ backgroundColor: '#295e8f' }}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Our Blog</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Insights and expertise on ISO certification and management systems. Stay updated with the latest industry trends and best practices.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Blog Posts Grid */}
          <div className="lg:col-span-2">
            {loading ? (
              <div className="text-center py-16">
                <div className="inline-block">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#295e8f' }}></div>
                </div>
                <p className="text-gray-600 mt-4">Loading articles...</p>
              </div>
            ) : filteredBlogs.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <p className="text-gray-600 text-lg">
                  {searchTerm ? '🔍 No blog posts match your search.' : 'No blog posts available.'}
                </p>
              </div>
            ) : (
              <>
                {/* Blog Grid - 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {currentBlogs.map((blog) => (
                    <BlogCard key={blog.id || blog.slug} blog={blog} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex items-center justify-between bg-gray-50 rounded-lg p-6">
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className="px-6 py-3 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
                      style={{
                        backgroundColor: currentPage === 1 ? '#ccc' : '#ee991a'
                      }}
                    >
                      ← Previous
                    </button>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 font-medium">
                        Page <span style={{ color: '#295e8f' }} className="font-bold">{currentPage}</span> of <span style={{ color: '#295e8f' }} className="font-bold">{totalPages}</span>
                      </span>
                    </div>
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className="px-6 py-3 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
                      style={{
                        backgroundColor: currentPage === totalPages ? '#ccc' : '#ee991a'
                      }}
                    >
                      Next →
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <BlogSidebar
            allBlogs={blogs}
            onSearch={(query) => {
              setSearchTerm(query);
              setCurrentPage(1);
            }}
            searchQuery={searchTerm}
          />
        </div>
      </div>
    </>
  );
}
