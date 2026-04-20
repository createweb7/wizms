"use client";

const sections = [
  {
    id: "main",
    title: "ISO Certification Consultants in Dubai, UAE, Abu Dhabi",
    accent: "#295e8f",
    icon: "🏆",
    content: `Wizms is the best ISO certification consultancy in Dubai, UAE provide wide range of ISO certifications. ISO consultants in UAE, Abu Dhabi, Sharjah guide organizations to get ISO Certifications for various standards depending on their requirements. We also provide ISO certification consultancy services in Abu Dhabi, Sharjah, Ras al-Khaimah, Ajman, Al Ain and Fujairah.

We offer certifications like ISO 9001, 27001, 14001, 45001, 18001, 50001, 22000, 22301, 10002, 41001 training, consulting, implementation and auditing services for ISO certification in Dubai and the rest of UAE. In Wizms, ISO consultans are highly qualified with global experience, have immense knowledge about the nitty-gritty of the ISO certification process.

We are expertise in providing ISO certification consulting services in UAE, Dubai, Abu Dhabi, Sharjah, Fujairah, Ras al-Khaimah, Ajman, and Al Ain. Wizms, ISO consultants in Dubai, UAE offers top-class consultancy services including ISO Consulting, ISO Certification, ISO Training, Gap analysis, Documentation, Implementation, and ISO certification audits in UAE.`,
    certifications: [
      { label: "ISO 9001", sub: "Quality Management System", tag: "QMS" },
      { label: "ISO 14001", sub: "Environment Management System", tag: "EMS" },
      { label: "ISO 45001", sub: "Occupational Health and Safety Management System", tag: "OHSMS" },
      { label: "ISO 18001", sub: "Occupational Health and Safety Management System", tag: "OHSAS" },
      { label: "ISO 50001", sub: "Energy Management System", tag: "EnMS" },
      { label: "ISO 27001", sub: "Information Security Management System", tag: "ISMS" },
      { label: "ISO 22000", sub: "Food Safety Management System", tag: "FSMS" },
      { label: "ISO 22301", sub: "Business Continuity Management Standards", tag: "BCMS" },
      { label: "ISO 10002", sub: "Quality Management and Customer Satisfaction", tag: "" },
      { label: "ISO 41001", sub: "Facility Management System", tag: "" },
    ],
  },
  {
    id: "what",
    title: "What is the ISO Certification?",
    accent: "#ee991a",
    icon: "📋",
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
    accent: "#295e8f",
    icon: "🌟",
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
    accent: "#ee991a",
    icon: "🏙️",
    content: `Our ISO consultants in UAE, Abu Dhabi offers one-stop solution for ISO 9001 certification at low rates. ISO certification consultants in dubai provides ISO consultancy services for companies in and around Dubai. We help to improve the organization and increase the brand value in the international market.

Our experts help the organization to get all kinds of ISO Certification in Dubai, and we offer consultancy services for a wide range of ISO standards such as ISO 9001, OHSAS 18001, ISO 45001, ISO 27001, ISO 14001, ISO 50001, ISO 22000, ISO 10002, GMP, CE Marking and more. We have certified lead auditors for conducting internal and external audits and a team of expert counselors, qualified engineers and management graduates for ISO certificate implementation to the organization.`,
  },
  {
    id: "abudhabi",
    title: "ISO Certification in Abu Dhabi",
    accent: "#295e8f",
    icon: "🏛️",
    content: `ISO Certification in Abu Dhabi is one of the mandatory requirements in Dubai, UAE. If any company wants to win a tender, they has to be complaint with ISO certification in Abu Dhabi. Our expert ISO certification consultant in Abu Dhabi can manage the step by step implementation process and make the process easier. You can get ISO certification in Dubai within 4-6 weeks.

Our expert ISO consultant in Abu Dhabi provided services to more than thousands of companies all over the UAE in the most affordable price and the most optimum period thereby resulting in an impressive 100% success rate and overall customer satisfaction.`,
  },
  {
    id: "sharjah",
    title: "ISO Certification in Sharjah",
    accent: "#ee991a",
    icon: "🌆",
    content: `ISO certification in Sharjah benefits firms in a variety of ways, including demonstrating the ability of company in Sharjah to conduct operations and to generate high-quality products and services. It empowers our customers to build trust according to the clients. Getting an ISO certification in Sharjah is the key for wining new business.

Our ISO consultant in Sharjah begins the process with a careful evaluation, execution of best practices and finishes with effective culmination of certification measures. The ISO certification cost in Sharjah varies based on the certification body you select.`,
  },
  {
    id: "strategy",
    title: "Our ISO Certification Consulting Strategy",
    accent: "#295e8f",
    icon: "🎯",
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

export default function AboutSection() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: "#f0f4f8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 2px 16px rgba(41,94,143,0.08)",
            }}
          >
            {/* Card Header */}
            <div
              className="px-8 py-5 flex items-center gap-4"
              style={{
                background: `linear-gradient(135deg, ${section.accent}18 0%, ${section.accent}08 100%)`,
                borderBottom: `2px solid ${section.accent}22`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{ backgroundColor: `${section.accent}15` }}
              >
                {section.icon}
              </div>
              <div>
                {section.id === "main" ? (
                  <h1 className="text-xl font-bold" style={{ color: "#1a2e44" }}>
                    {section.title}
                  </h1>
                ) : (
                  <h2 className="text-xl font-bold" style={{ color: "#1a2e44" }}>
                    {section.title}
                  </h2>
                )}
              </div>
            </div>

            {/* Card Body */}
            <div className="px-8 py-7">
              {/* Main paragraphs */}
              <div className="space-y-4">
                {section.content.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-gray-600 leading-relaxed text-[15px]"
                  >
                    {para.trim()}
                  </p>
                ))}
              </div>

              {/* Certifications — numbered cards */}
              {section.certifications && (
                <div className="mt-8">
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-4"
                    style={{ color: section.accent }}
                  >
                    Our Certifications in Dubai
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.certifications.map((cert: any, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl"
                        style={{ backgroundColor: "#f8fafd", border: "1px solid #e8edf4" }}
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 text-white"
                          style={{ backgroundColor: section.accent }}
                        >
                          {idx + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-sm" style={{ color: "#1a2e44" }}>
                            {cert.label} Certification in Dubai
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {cert.sub}
                            {cert.tag && (
                              <span
                                className="ml-2 px-2 py-0.5 rounded-full text-white text-[10px] font-bold"
                                style={{ backgroundColor: section.accent + "cc" }}
                              >
                                {cert.tag}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights — pill/tag style */}
              {section.highlights && (
                <div className="mt-8">
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-4"
                    style={{ color: section.accent }}
                  >
                    Key Areas
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {section.highlights.map((item: string, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                        style={{
                          backgroundColor: `${section.accent}10`,
                          border: `1px solid ${section.accent}30`,
                          color: "#1a2e44",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: section.accent }}
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional content */}
              {section.additionalContent && (
                <div
                  className="mt-8 pt-6 space-y-4"
                  style={{ borderTop: `1px solid ${section.accent}20` }}
                >
                  {section.additionalContent.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-gray-600 leading-relaxed text-[15px]"
                    >
                      {para.trim()}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
