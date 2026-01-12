"use client";

import Link from "next/link";
import {
  MdArrowForward,
  MdCheckCircle,
  MdSecurity,
  MdLock,
  MdDomain,
  MdVerified,
  MdShield,
  MdCardTravel,
} from "react-icons/md";

interface Certification {
  id: string;
  title: string;
  code: string;
  description: string;
  icon: any;
  link: string;
  color: string;
}

const certifications: Certification[] = [
  {
    id: "iso9001",
    code: "ISO 9001",
    title: "QMS",
    description: "Quality Management System",
    icon: MdCheckCircle,
    link: "/iso-9001-certification-consultants-uae",
    color: "#295e8f",
  },
  {
    id: "iso14001",
    code: "ISO 14001",
    title: "EMS",
    description: "Environment Management System",
    icon: MdVerified,
    link: "/iso-14001-certification-consultants-uae",
    color: "#2a9d84",
  },
  {
    id: "iso45001",
    code: "ISO 45001",
    title: "OHSMS",
    description: "Occupational Health and Safety Management System",
    icon: MdSecurity,
    link: "/iso-45001-certification-consultants-uae",
    color: "#ee991a",
  },
  {
    id: "iso50001",
    code: "ISO 50001",
    title: "EnMS",
    description: "Energy Management System",
    icon: MdShield,
    link: "/iso-50001-certification-consultants-uae",
    color: "#f59e0b",
  },
  {
    id: "iso41001",
    code: "ISO 41001",
    title: "FMS",
    description: "Facility Management System",
    icon: MdDomain,
    link: "/iso-41001-certification-consultants-uae",
    color: "#8b5cf6",
  },
  {
    id: "iso27001",
    code: "ISO 27001",
    title: "ISMS",
    description: "Information Security Management System",
    icon: MdLock,
    link: "/iso-27001-certification-consultants-uae",
    color: "#ec4899",
  },
  {
    id: "iso22000",
    code: "ISO 22000",
    title: "FSMS",
    description: "Food Safety Management System",
    icon: MdCardTravel,
    link: "/iso-22000-certification-consultants-uae",
    color: "#06b6d4",
  },
  {
    id: "iso22301",
    code: "ISO 22301",
    title: "BCMS",
    description: "Business Continuity Management Standards",
    icon: MdCardTravel,
    link: "/iso-22301-certification-consultants-uae",
    color: "#14b8a6",
  },
];

export default function CertificationsGrid() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our ISO Certifications
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive certification solutions across all major ISO standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <Link key={cert.id} href={cert.link}>
                <div
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8 cursor-pointer hover:scale-105 border-t-4"
                  style={{ borderTopColor: cert.color }}
                >
                  <div className="mb-6 inline-block p-4 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    <IconComponent
                      className="w-10 h-10"
                      style={{ color: cert.color }}
                    />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {cert.code}
                  </h3>
                  <p className="text-sm font-semibold text-gray-600 mb-4">
                    {cert.title}
                  </p>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed h-12">
                    {cert.description}
                  </p>

                  <div
                    className="flex items-center gap-2 font-semibold transition-colors group-hover:text-white"
                    style={{ color: cert.color }}
                  >
                    Learn More
                    <MdArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
