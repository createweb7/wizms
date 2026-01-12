'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Service {
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
  meta_description?: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/content?type=service');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        const formattedServices = (data || [])
          .sort((a: any, b: any) => a.title.localeCompare(b.title))
          .map((item: any) => ({
            slug: item.slug,
            title: item.title,
            excerpt: item.excerpt,
            category: item.category,
            meta_description: item.meta_description,
          }));
        setServices(formattedServices);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12" style={{ backgroundColor: '#295e8f' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-blue-100 text-lg">
            Comprehensive ISO certification and management system consulting
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading services...</p>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No services available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.slug}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6 flex flex-col h-full">
                  {service.category && (
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit text-white" style={{ backgroundColor: '#295e8f' }}>
                      {service.category}
                    </span>
                  )}

                  <Link href={`/${service.slug}`}>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 transition-colors hover:opacity-70" style={{ color: '#295e8f' }}>
                      {service.title}
                    </h2>
                  </Link>

                  <p className="text-gray-600 mb-4 grow text-sm">
                    {service.excerpt || service.meta_description}
                  </p>

                  <Link
                    href={`/${service.slug}`}
                    className="inline-block px-4 py-2 text-white rounded hover:opacity-90 transition-colors w-fit"
                    style={{ backgroundColor: '#ee991a' }}
                  >
                    Learn More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
