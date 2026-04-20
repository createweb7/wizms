"use client";

import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">WIZ Management</h3>
              <p className="text-gray-300">Solutions</p>
            </div>
            <div className="text-sm text-gray-400 leading-relaxed">
              <p>Office 31, Corridor 15,</p>
              <p>Hamsah-A, Mezzanine Floor,</p>
              <p>Ansar Gallery Complex,</p>
              <p>Al Karama,</p>
              <p>P.O.Box – 125937,</p>
              <p>Dubai - UAE</p>
            </div>
            {/* Social Media Icons */}
            <div className="flex gap-4 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Consultancy Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Consultancy Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="/iso-9001-certification-consultants-uae"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span style={{ color: "#ee991a" }}>»</span>
                  QMS-ISO 9001 Certification in UAE
                </a>
              </li>
              <li>
                <a
                  href="/iso-14001-certification-consultants-uae"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span style={{ color: "#ee991a" }}>»</span>
                  EMS-ISO 14001 Certification in UAE
                </a>
              </li>
              <li>
                <a
                  href="/iso-45001-certification-consultants-uae"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span style={{ color: "#ee991a" }}>»</span>
                  OHSMS-ISO 45001 Certification in UAE
                </a>
              </li>
              <li>
                <a
                  href="/iso-18001-certification-consultants-uae"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span style={{ color: "#ee991a" }}>»</span>
                  OHSAS 18001 Certification in UAE
                </a>
              </li>
              <li>
                <a
                  href="/iso-50001-certification-consultants-uae"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span style={{ color: "#ee991a" }}>»</span>
                  EnMS-ISO 50001 Certification in UAE
                </a>
              </li>
              <li>
                <a
                  href="/iso-27001-certification-consultants-uae"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span style={{ color: "#ee991a" }}>»</span>
                  ISMS - ISO 27001 Certification in UAE
                </a>
              </li>
              <li>
                <a
                  href="/iso-22000-certification-consultants-uae"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span style={{ color: "#ee991a" }}>»</span>
                  FSMS-ISO 22000/HACCP Certification in UAE
                </a>
              </li>
              <li>
                <a
                  href="/iso-22301-certification-consultants-uae"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span style={{ color: "#ee991a" }}>»</span>
                  BCMS – ISO 22301 Certification in UAE
                </a>
              </li>
              <li>
                <a
                  href="/iso-10002-certification-consultants-uae"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span style={{ color: "#ee991a" }}>»</span>
                  ISO 10002 Certification in UAE
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Useful links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/micro-blogs"
                  className="hover:text-white transition-colors"
                >
                  Micro Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="hover:text-white transition-colors"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Call For Quote */}
          <div>
            <h4 className="text-lg font-bold mb-6">
              Call us for friendly quote:
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div
                  className="text-2xl shrink-0 mt-1"
                  style={{ color: "#ee991a" }}
                >
                  <MdPhone />
                </div>
                <div>
                  <a
                    href="tel:+971552774123"
                    className="text-white font-semibold hover:text-orange-500 transition-colors block"
                  >
                    00971 55 2774123
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="text-2xl shrink-0 mt-1"
                  style={{ color: "#ee991a" }}
                >
                  <MdPhone />
                </div>
                <div>
                  <a
                    href="tel:+971435899945"
                    className="text-white font-semibold hover:text-orange-500 transition-colors block"
                  >
                    00971 4 3589945
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="text-2xl shrink-0 mt-1"
                  style={{ color: "#ee991a" }}
                >
                  <MdEmail />
                </div>
                <div>
                  <a
                    href="mailto:mahendran@wizms.net"
                    className="text-white font-semibold hover:text-orange-500 transition-colors break-all"
                  >
                    mahendran@wizms.net
                  </a>
                </div>
              </div>

              {/* Small Map */}
              <div className="mt-6">
                <iframe
                  src="https://www.google.com/maps/d/u/3/embed?mid=1M1KBam_G3-SIggN4Hr1AhybFN35MpvA&ehbc=2E312F&noprof=1"
                  width="100%"
                  height="200"
                  className="rounded-lg"
                  loading="lazy"
                  title="WIZMS Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} WIZ Management Solutions. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
