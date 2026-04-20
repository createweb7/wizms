"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdKeyboardArrowDown,
} from "react-icons/md";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [consultancyOpen, setConsultancyOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll event listener for hiding/showing header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Scrolling up
      } else if (currentScrollY > 100) {
        // Only hide if scrolled more than 100px
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Show at top
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const consultancyItems = [
    { label: "ISO Certification in UAE", href: "/iso-certification-in-uae" },
    {
      label: "QMS-ISO 9001 Certification",
      href: "/iso-9001-certification-consultants-uae",
    },
    {
      label: "EMS-ISO 14001 Certification",
      href: "/iso-14001-certification-consultants-uae",
    },
    {
      label: "ISO 14064-1 Certification",
      href: "/iso-14064-certification-consultants-uae",
    },
    {
      label: "OHSMS-ISO 45001 Certification",
      href: "/iso-45001-certification-consultants-uae",
    },
    {
      label: "OHSAS 18001 Certification",
      href: "/iso-18001-certification-consultants-uae",
    },
    {
      label: "EnMS-ISO 50001 Certification",
      href: "/iso-50001-certification-consultants-uae",
    },
    {
      label: "ISMS - ISO 27001 Certification",
      href: "/iso-27001-certification-consultants-uae",
    },
    {
      label: "FSMS -ISO 22000/HACCP Certification",
      href: "/iso-22000-certification-consultants-uae",
    },
    {
      label: "BCMS – ISO 22301 Certification",
      href: "/iso-22301-certification-consultants-uae",
    },
    {
      label: "ISO 10002 Certification",
      href: "/iso-10002-certification-consultants-uae",
    },
    {
      label: "ISO 41001 Certification",
      href: "/iso-41001-certification-consultants-uae",
    },
    {
      label: "ISO 17025 Certification",
      href: "/iso-17025-certification-consultants-uae",
    },
    {
      label: "ISO 31000 Certification",
      href: "/iso-31000-certification-consultants-uae",
    },
    {
      label: "SA 8000 Certification",
      href: "/sa-8000-certification-consultants-uae",
    },
    {
      label: "Sedex Certification",
      href: "/sedex-certification-consultants-uae",
    },
  ];

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Consultancy", submenu: consultancyItems },
    {
      label: "ISO Implementation",
      href: "/iso-implementation-consultancy-uae",
    },
    { label: "ISO Training", href: "/iso-training-uae" },
    { label: "AML Advisory", href: "/aml-advisory" },
    { label: "Services", href: "/iso-certification-services-uae" },
    { label: "Clients", href: "/clients" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar - Always Fixed */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.webp"
                alt="WIZMS Logo"
                width={200}
                height={200}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Center - Contact Info (Hidden on Mobile) */}
            <div className="hidden lg:flex gap-8 items-center flex-1 justify-center">
              {/* Phone */}
              <a
                href="tel:+971552774123"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                  <MdPhone className="w-6 h-6" style={{ color: "#295e8f" }} />
                </div>
                <div className="text-sm">
                  <p className="text-gray-500 text-xs font-semibold uppercase">
                    CALL US
                  </p>
                  <p className="text-gray-900 font-semibold">
                    +971 55 277 4123
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:karthiga@wizms.net"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                  <MdEmail className="w-6 h-6" style={{ color: "#295e8f" }} />
                </div>
                <div className="text-sm">
                  <p className="text-gray-500 text-xs font-semibold uppercase">
                    SEND US A MESSAGE
                  </p>
                  <p className="text-gray-900 font-semibold">
                    karthiga@wizms.net
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                  <MdLocationOn
                    className="w-6 h-6"
                    style={{ color: "#295e8f" }}
                  />
                </div>
                <div className="text-sm">
                  <p className="text-gray-500 text-xs font-semibold uppercase">
                    VISIT US AT
                  </p>
                  <p className="text-gray-900 font-semibold">Office 31, Al Karama, Dubai</p>
                </div>
              </div>
            </div>

            {/* Right - Get Quote Button (Hidden on Mobile) */}
            <Link
              href="/get-quote"
              className="hidden lg:block px-6 py-2 rounded-lg font-semibold transition-colors hover:opacity-90"
              style={{ backgroundColor: "#fbbf24", color: "white" }}
            >
              Get A Quote →
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Bar - Fixed on Desktop, Scrolls on Mobile */}
      <nav className={`bg-white shadow border-t border-gray-200 transition-transform duration-300 ${menuOpen ? 'block' : 'hidden lg:block'} sticky top-[88px] z-40`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 h-auto">
            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-8 items-center">
              {menuItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.submenu ? (
                    <>
                      <button
                        className={`transition-colors px-1 py-1 rounded flex items-center gap-1 whitespace-nowrap font-medium group-hover:text-yellow-500 ${
                          item.submenu.some(
                            (subitem) => pathname === subitem.href
                          )
                            ? "text-yellow-500"
                            : "text-gray-700"
                        }`}
                      >
                        {item.label}
                        <MdKeyboardArrowDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                      </button>
                      {/* Desktop Dropdown - 2 Columns, Centered */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-96 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-4">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.label}
                              href={subitem.href}
                              className="px-3 py-2 text-gray-700 rounded text-sm font-medium transition-colors"
                              style={{}}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "#fef3c7";
                                e.currentTarget.style.color = "#fbbf24";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "transparent";
                                e.currentTarget.style.color = "#374151";
                              }}
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`transition-colors px-1 py-1 rounded whitespace-nowrap font-medium hover:text-yellow-500 ${
                        pathname === item.href
                          ? "text-yellow-500"
                          : "text-gray-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Items will show below when menuOpen is true */}
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-200">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setConsultancyOpen(!consultancyOpen)}
                        className={`w-full text-left py-2 font-medium flex justify-between items-center px-2 hover:text-yellow-500 transition-colors ${
                          item.submenu.some(
                            (subitem) => pathname === subitem.href
                          )
                            ? "text-yellow-500"
                            : "text-gray-700"
                        }`}
                      >
                        {item.label}
                        <MdKeyboardArrowDown
                          className={`w-4 h-4 transition-transform ${
                            consultancyOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {consultancyOpen && (
                        <div className="bg-gray-100 pl-4 grid grid-cols-2 gap-2 p-2">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.label}
                              href={subitem.href}
                              className={`py-2 text-xs font-medium transition-colors ${
                                pathname === subitem.href
                                  ? "text-yellow-500"
                                  : "text-gray-700 hover:text-yellow-500"
                              }`}
                              onClick={() => {
                                setMenuOpen(false);
                                setConsultancyOpen(false);
                              }}
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block py-2 text-gray-700 hover:text-yellow-500 px-2 font-medium transition-colors ${
                        pathname === item.href ? "text-yellow-500" : ""
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
