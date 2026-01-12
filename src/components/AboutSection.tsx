"use client";

import { useState } from "react";
import Link from "next/link";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

export default function AboutSection() {
  const [expandedSection, setExpandedSection] = useState<string | null>("main");

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: "main",
      title: "ISO Certification Consultants in Dubai, UAE, Abu Dhabi",
      content: `Wizms is the best ISO certification consultancy in Dubai, UAE provide wide range of ISO certifications. ISO consultants in UAE, Abu Dhabi, Sharjah guide organizations to get ISO Certifications for various standards depending on their requirements. We also provide ISO certification consultancy services in Abu Dhabi, Sharjah, Ras al-Khaimah, Ajman, Al Ain and Fujairah.

We offer certifications like ISO 9001, 27001, 14001, 45001, 18001, 50001, 22000, 22301, 10002, 41001 training, consulting, implementation and auditing services for ISO certification in Dubai and the rest of UAE. In Wizms, ISO consultans are highly qualified with global experience, have immense knowledge about the nitty-gritty of the ISO certification process.

We are expertise in providing ISO certification consulting services in UAE, Dubai, Abu Dhabi, Sharjah, Fujairah, Ras al-Khaimah, Ajman, and Al Ain. Wizms, ISO consultants in Dubai, UAE offers top-class consultancy services including ISO Consulting, ISO Certification, ISO Training, Gap analysis, Documentation, Implementation, and ISO certification audits in UAE.`,
      certifications: [
        "ISO 9001 Certification in Dubai (Quality Management System - QMS)",
        "ISO 14001 Certification in Dubai (Environment Management System - EMS)",
        "ISO 45001 Certification in Dubai (Occupational Health and Safety Management System - OHSMS)",
        "ISO 18001 Certification in Dubai (Occupational Health and Safety Management System - OHSAS)",
        "ISO 50001 Certification in Dubai (Energy Management System - EnMS)",
        "ISO 27001 Certification in Dubai (Information Security Management System - ISMS)",
        "ISO 22000 Certification in Dubai (Food Safety Management System - FSMS)",
        "ISO 22301 Certification in Dubai (Business Continuity Management Standards - BCMS)",
        "ISO 10002 Certification in Dubai (Quality Management and Customer Satisfaction)",
        "ISO 41001 Certification in Dubai (Facility Management System)",
      ],
    },
    {
      id: "what",
      title: "What is the ISO Certification?",
      content: `ISO Certification is an acronym for International Organisation for Standardizations. An ISO standard is a set of guidelines and rules that are recognised internationally to help the businesses to cover key areas.

ISO will let you run a business in more effective ways consistently. ISO certification endorses that an organization or a company is perfectly aligned and has all the requirement for International Standardization and Quality Assurance such as manufacturing process, management system, services and documentation procedure.`,
      highlights: [
        "Customer Satisfaction",
        "Leadership & Commitment",
        "Communication",
        "Quality of Services or Products",
        "Competence",
        "Resources - Employees and Infrastructure",
        "Evaluation of Performance",
        "Improvement",
        "Planning",
        "Maintenance",
        "Managing Risks and Opportunities",
      ],
    },
    {
      id: "why",
      title: "Why ISO Certification in UAE?",
      content: `Wizms, ISO Certification Consultants Dubai, UAE offer a effective Consulting, Training and Implementation services across organizations in the Dubai, UAE and all over the world. Our ISO certification solutions are said to be the best solution among the organizations in UAE, Dubai.`,
      highlights: [
        "Excellent Service",
        "Easy Approach to get ISO Certification in UAE",
        "Complete the project intime",
      ],
      additionalContent: `Our services towards getting ISO Certification in UAE cover training courses, gap assessment, assistance in implementation, documentation reviews, internal and pre-assessment audit, provides assistance in choosing the suitable ISO certification body and ensure successful clearing of the ISO Certification Audit.

ISO Certification in Dubai, UAE is offered to all organization. Get your ISO certificate from best ISO certification consultant in Dubai, UAE which is being operated responsibly that the quality of the service or product is best in the industry. Additionally, having an ISO certification will help you build credibility and trust among the customers, investors and employees. It also substantially enhances the quality, hard work and efficiency of an organization in a nutshell. ISO Certification in UAE will help to increase the economic status of the company as well.`,
    },
    {
      id: "dubai",
      title: "ISO Certification in Dubai",
      content: `Our ISO consultants in UAE, Abu Dhabi offers one-stop solution for ISO 9001 certification at low rates. ISO certification consultants in dubai provides ISO consultancy services for companies in and around Dubai. We help to improve the organization and increase the brand value in the international market.

Our experts help the organization to get all kinds of ISO Certification in Dubai, and we offer consultancy services for a wide range of ISO standards such as ISO 9001, OHSAS 18001, ISO 45001, ISO 27001, ISO 14001, ISO 50001, ISO 22000, ISO 10002, GMP, CE Marking and more. We have certified lead auditors for conducting internal and external audits and a team of expert counselors, qualified engineers and management graduates for ISO certificate implementation to the organization.`,
    },
    {
      id: "abudhabi",
      title: "ISO Certification in Abu Dhabi",
      content: `ISO Certification in Abu Dhabi is one of the mandatory requirements in Dubai, UAE. If any company wants to win a tender, they has to be complaint with ISO certification in Abu Dhabi. Our expert ISO certification consultant in Abu Dhabi can manage the step by step implementation process and make the process easier. You can get ISO certification in Dubai within 4-6 weeks.

Our expert ISO consultant in Abu Dhabi provided services to more than thousands of companies all over the UAE in the most affordable price and the most optimum period thereby resulting in an impressive 100% success rate and overall customer satisfaction.`,
    },
    {
      id: "sharjah",
      title: "ISO Certification in Sharjah",
      content: `ISO certification in Sharjah benefits firms in a variety of ways, including demonstrating the ability of company in Sharjah to conduct operations and to generate high-quality products and services. It empowers our customers to build trust according to the clients. Getting an ISO certification in Sharjah is the key for wining new business.

Our ISO consultant in Sharjah begins the process with a careful evaluation, execution of best practices and finishes with effective culmination of certification measures. The ISO certification cost in Sharjah varies based on the certification body you select.`,
    },
    {
      id: "strategy",
      title: "Our ISO Certification Consulting Strategy",
      content: `Our ISO consultants in Dubai have a unique bottom-up consulting strategy that assures the quality of ISO certification assignments. This approach assures the recognition and execution of development strategies at all management levels.`,
      highlights: [
        "Excellent consulting experience and a proven approach for implementation.",
        "Ultimate experience across the UAE with industry expertise.",
        "Quick, effective and very simple to ISO certification Implementation.",
        "100% success rate and overall client's satisfaction.",
      ],
      additionalContent: `Obtain ISO certification in Dubai from the trusted service provider in UAE for your business. Grow business value by expanding to worldwide markets with the most reliable services/products and gain the confidence of the clients and customers.

Our ISO consultants in Dubai offer the best ISO certification services for all the organization and guide the organization to the new path of organization success and a sustainable competitive advantage. For more details, please contact us or call us at 00971 55 2774123.`,
    },
  ];

  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-8 py-20"
      style={{ backgroundColor: "#f9fafb" }}
    >
      <div className="max-w-7xl mx-auto">
        {sections.map((section) => (
          <div key={section.id} className="mb-6">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-l-4"
              style={{ borderLeftColor: "#295e8f" }}
            >
              <h2 className="text-2xl font-bold text-gray-900 text-left">
                {section.title}
              </h2>
              <div style={{ color: "#295e8f" }} className="text-2xl">
                {expandedSection === section.id ? (
                  <MdExpandLess />
                ) : (
                  <MdExpandMore />
                )}
              </div>
            </button>

            {expandedSection === section.id && (
              <div
                className="bg-white rounded-lg shadow p-8 mt-2 border-l-4"
                style={{ borderLeftColor: "#ee991a" }}
              >
                <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                  {section.content}
                </p>

                {section.certifications && (
                  <div className="mb-6">
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      {section.certifications.map((cert, idx) => (
                        <li key={idx} className="ml-4">
                          {cert}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {section.highlights && (
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {section.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span
                            className="w-2 h-2 rounded-full mt-2 mr-3 shrink-0"
                            style={{ backgroundColor: "#ee991a" }}
                          />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.additionalContent && (
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.additionalContent}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
