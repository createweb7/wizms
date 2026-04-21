'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Content } from '@/lib/supabase-data';

interface BlogCardProps {
  blog: Content;
  compact?: boolean;
}

export function BlogCard({ blog, compact = false }: BlogCardProps) {
  const publishDate = new Date(blog.publish_date || '').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  if (compact) {
    return (
      <Link href={`/${blog.slug}`}>
        <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <h4 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-2">
            {blog.title}
          </h4>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">{publishDate}</span>
            {blog.category && (
              <span
                className="text-xs font-semibold px-2 py-1 rounded-full text-white"
                style={{ backgroundColor: '#295e8f' }}
              >
                {blog.category}
              </span>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/${blog.slug}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer h-full flex flex-col">
        {/* Featured Image */}
        {blog.featured_image && (
          <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
            <Image
              src={blog.featured_image}
              alt={blog.featured_image_alt || blog.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Category Badge */}
          {blog.category && (
            <div className="mb-3">
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: '#295e8f' }}
              >
                {blog.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
            {blog.title}
          </h3>

          {/* Excerpt */}
          {blog.excerpt && (
            <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
              {blog.excerpt}
            </p>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-xs text-gray-500">{publishDate}</span>
            <span
              className="text-xs font-semibold transition-colors"
              style={{ color: '#ee991a' }}
            >
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
