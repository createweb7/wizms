"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingQuoteButton() {
  const pathname = usePathname();

  // Hide button on get-quote page
  if (pathname === "/get-quote") {
    return null;
  }

  return (
    <>
      {/* Mobile only - visible only on small screens */}
      <Link
        href="/get-quote"
        className="fixed bottom-6 right-6 md:hidden"
        aria-label="Get Quote"
      >
        <div className="relative">
          {/* Button */}
          <button
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 active:scale-95"
          >
            {/* Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Get Quote
          </button>

          {/* Animated pulse effect */}
          <div className="absolute inset-0 bg-blue-600 rounded-full animate-pulse opacity-20" />
        </div>
      </Link>
    </>
  );
}
