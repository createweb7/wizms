"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Service {
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
}

export default function ServicesList() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch("/api/content?type=service");
        if (!response.ok) throw new Error("Failed to fetch");
        const items = await response.json();
        const formattedServices = items.map((item: any) => ({
          slug: item.slug,
          title: item.title,
          excerpt: item.excerpt,
          category: item.category,
        }));
        setServices(formattedServices);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Loading services...</p>
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No services available yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/${service.slug}`}
          className="group bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
        >
          <div className="p-6">
            {service.category && (
              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded mb-3 inline-block">
                {service.category}
              </span>
            )}
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {service.excerpt.length > 150
                ? `${service.excerpt.substring(0, 150)}...`
                : service.excerpt}
            </p>
            <div className="mt-4 text-purple-600 font-semibold text-sm group-hover:translate-x-2 transition-transform inline-block">
              Learn More →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
