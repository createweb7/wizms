'use client';

import { useState, useMemo } from 'react';
import { Content } from '@/lib/supabase-data';
import { BlogCard } from './BlogCard';
import { MdSearch } from 'react-icons/md';

interface BlogSidebarProps {
  allBlogs: Content[];
  onSearch: (query: string) => void;
  searchQuery: string;
}

export function BlogSidebar({ allBlogs, onSearch, searchQuery }: BlogSidebarProps) {
  const recentBlogs = useMemo(() => {
    return allBlogs
      .sort(
        (a, b) =>
          new Date(b.publish_date || '').getTime() -
          new Date(a.publish_date || '').getTime()
      )
      .slice(0, 5);
  }, [allBlogs]);

  return (
    <div className="space-y-6 sticky top-6">
      {/* Search Box */}
      <div className="bg-white rounded-lg shadow-md p-5">
        <div className="relative">
          <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
            style={{ '--tw-ring-color': '#295e8f' } as React.CSSProperties}
          />
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-md p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ color: '#295e8f' }}>
          Recent Posts
        </h3>
        <div className="space-y-3">
          {recentBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} compact={true} />
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="rounded-lg shadow-md p-5 text-center" style={{ backgroundColor: '#295e8f' }}>
        <h3 className="text-lg font-bold text-white mb-2">Have Questions?</h3>
        <p className="text-sm text-blue-100 mb-4">
          Get expert insights and solutions for your business needs.
        </p>
        <button
          style={{ backgroundColor: '#ee991a' }}
          className="w-full py-2 px-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity text-sm"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
