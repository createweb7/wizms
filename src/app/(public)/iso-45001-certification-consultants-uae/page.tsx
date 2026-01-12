import Link from 'next/link';
import { Metadata } from 'next';
import { MdArrowForward, MdKeyboardArrowDown, MdSecurity, MdDone, MdKey, MdCheckCircle } from 'react-icons/md';
import EnquiryForm from '@/components/EnquiryForm';

const faqStyle = `
  details > summary::-webkit-details-marker {
    display: none;
  }
  details > summary {
    list-style: none;
  }
  details[open] > summary .faq-icon {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
  }
  details > summary .faq-icon {
    transition: transform 0.3s ease;
  }
`;

export const metadata: Metadata = {
  title: 'ISO 45001 Certification in Dubai | ISO 45001 Consultants in UAE | Wizms',
  description: 'Wizms offer ISO 45001 certification consultancy services in Dubai, UAE. ISO 45001 in Dubai is maintaining the occupational health and safety management system (OHSMS)',
};

export default function ISO45001Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 45001 Certification in UAE</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                {/* Hero Section */}
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    ISO 45001 Certification Consultant in Dubai, UAE
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <Link href="/iso-45001-certification-consultants-uae" className="text-red-600 hover:text-red-800">
                      ISO 45001 Certification
                    </Link>
                    {' '}is the international standard for occupational health and safety management systems (OHSMS). It represents a significant shift from OHSAS 18001, providing a more comprehensive framework for managing workplace health and safety risks. WIZMS, a leading ISO 45001 certification consultant in Dubai, UAE, helps organizations transition smoothly to this modern standard.
                  </p>
                </div>

                {/* Fundamentals */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Fundamentals of ISO 45001</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 45001:2018 is designed to help organizations proactively manage their health and safety risks, reduce workplace incidents, and create safer working environments. The standard integrates with other management systems like <Link href="/iso-9001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 9001</Link> and <Link href="/iso-14001-certification-consultants-uae" className="text-green-600 hover:text-green-800">ISO 14001</Link> for seamless implementation.
                  </p>
                  <p className="text-gray-700">
                    ISO 45001 shifts the focus from compliance to risk management, requiring organizations to identify hazards, assess risks, and implement preventive measures before incidents occur.
                  </p>
                </div>

                {/* Migration Section */}
                <div className="mb-10 bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Migration from OHSAS 18001 to ISO 45001</h2>
                  <p className="text-gray-700 mb-4">
                    Organizations currently certified to OHSAS 18001:2007 have until September 2021 to transition to ISO 45001:2018. WIZMS provides two pathways for migration:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border border-orange-200">
                      <h3 className="font-bold text-gray-900 mb-2">Route 1: Complete System Redesign</h3>
                      <p className="text-gray-700">Replace the existing OHSAS 18001 system entirely with a new ISO 45001 compliant system. This option is recommended for organizations seeking comprehensive system improvements.</p>
                    </div>
                    <div className="bg-white p-4 rounded border border-orange-200">
                      <h3 className="font-bold text-gray-900 mb-2">Route 2: Incremental Transition</h3>
                      <p className="text-gray-700">Gradually integrate ISO 45001 requirements into the existing OHSAS 18001 system. This approach minimizes disruption while ensuring full compliance with the new standard.</p>
                    </div>
                  </div>
                </div>

                {/* 8 Steps Section */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">8 Basic Steps to ISO 45001 Certification</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { num: '1', title: 'Learn', desc: 'Understand ISO 45001 requirements and clauses' },
                      { num: '2', title: 'Gap Analysis', desc: 'Identify gaps between current practices and ISO 45001' },
                      { num: '3', title: 'Plan', desc: 'Develop implementation roadmap and strategy' },
                      { num: '4', title: 'Training', desc: 'Train employees on ISO 45001 requirements' },
                      { num: '5', title: 'Documentation', desc: 'Create policies, procedures, and work instructions' },
                      { num: '6', title: 'Use & Improve', desc: 'Implement and continuously improve the system' },
                      { num: '7', title: 'Audit', desc: 'Conduct internal audits before certification' },
                      { num: '8', title: 'Register', desc: 'Undergo external audit and obtain certification' },
                    ].map((step) => (
                      <div key={step.num} className="p-4 bg-linear-to-br from-red-50 to-orange-50 border border-red-200 rounded-lg">
                        <div className="flex gap-3 items-start">
                          <div className="shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                            {step.num}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{step.title}</h3>
                            <p className="text-sm text-gray-600">{step.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cost Section */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 45001 Certification Cost in Dubai</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="font-bold text-gray-900 mb-3">Initial Certification Cost</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex gap-2 items-start">
                          <MdDone className="text-blue-600 shrink-0 mt-1" />
                          <span>Initial audit and documentation review</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <MdDone className="text-blue-600 shrink-0 mt-1" />
                          <span>Certification audit by external body</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <MdDone className="text-blue-600 shrink-0 mt-1" />
                          <span>Issuance of ISO 45001 certificate</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <MdDone className="text-blue-600 shrink-0 mt-1" />
                          <span>Documentation and guidance throughout</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="font-bold text-gray-900 mb-3">Annual Surveillance Cost</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex gap-2 items-start">
                          <MdDone className="text-green-600 shrink-0 mt-1" />
                          <span>Annual surveillance audits</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <MdDone className="text-green-600 shrink-0 mt-1" />
                          <span>Compliance monitoring</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <MdDone className="text-green-600 shrink-0 mt-1" />
                          <span>Recertification audit every 3 years</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <MdDone className="text-green-600 shrink-0 mt-1" />
                          <span>Continuous system support</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                    <h3 className="font-bold text-gray-900 mb-4">Factors Affecting ISO 45001 Certification Cost</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex gap-3 items-start">
                        <span className="font-bold text-red-600 shrink-0">•</span>
                        <div>
                          <p className="font-semibold">Industry Type:</p>
                          <p className="text-sm">High-risk industries (construction, manufacturing) may have higher certification costs</p>
                        </div>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="font-bold text-red-600 shrink-0">•</span>
                        <div>
                          <p className="font-semibold">Number of Offices:</p>
                          <p className="text-sm">Multiple locations increase scope and complexity</p>
                        </div>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="font-bold text-red-600 shrink-0">•</span>
                        <div>
                          <p className="font-semibold">Annual Turnover:</p>
                          <p className="text-sm">Certification bodies often scale costs based on organization size</p>
                        </div>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="font-bold text-red-600 shrink-0">•</span>
                        <div>
                          <p className="font-semibold">Number of Employees:</p>
                          <p className="text-sm">Larger workforce means more extensive training and documentation</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Certification Process */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 45001 Certification Process</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-600 pl-4 py-2">
                      <h3 className="font-bold text-gray-900 mb-1">Stage 1: Document Review</h3>
                      <p className="text-gray-700">Certification body reviews your documented OHSMS to ensure it meets ISO 45001 requirements before the formal audit.</p>
                    </div>
                    <div className="border-l-4 border-red-600 pl-4 py-2">
                      <h3 className="font-bold text-gray-900 mb-1">Stage 2: Certification Audit</h3>
                      <p className="text-gray-700">External auditors assess your organization's compliance with ISO 45001 standard, evaluate hazard identification, and check risk management implementation.</p>
                    </div>
                    <div className="border-l-4 border-red-600 pl-4 py-2">
                      <h3 className="font-bold text-gray-900 mb-1">Stage 3: Certificate Issuance</h3>
                      <p className="text-gray-700">Upon successful completion of audit, the certification body issues your ISO 45001 certificate valid for 3 years with annual surveillance audits.</p>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-10 bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features of ISO 45001</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1" />
                      <span><strong>Risk-based approach:</strong> Focuses on identifying and managing health and safety risks proactively</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1" />
                      <span><strong>Worker participation:</strong> Emphasizes involvement of employees in OHSMS planning and implementation</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1" />
                      <span><strong>Leadership commitment:</strong> Requires top management engagement and commitment</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1" />
                      <span><strong>Continual improvement:</strong> Drives ongoing enhancement of health and safety performance</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1" />
                      <span><strong>Incident prevention:</strong> Reduces workplace accidents and occupational illnesses</span>
                    </li>
                  </ul>
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs - ISO 45001 Certification</h2>
                  <div className="space-y-6">
                    <style>{faqStyle}</style>
                    <details open className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                        <MdKeyboardArrowDown className="text-red-600 text-xl faq-icon" />
                        What is the difference between ISO 45001 and OHSAS 18001?
                      </summary>
                      <p className="text-gray-700 mt-4">
                        ISO 45001 is the newer international standard that replaced OHSAS 18001. Key differences include risk-based approach, stronger leadership involvement, increased worker participation, and better integration with other management systems.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                        <MdKeyboardArrowDown className="text-red-600 text-xl faq-icon" />
                        How long does ISO 45001 certification take?
                      </summary>
                      <p className="text-gray-700 mt-4">
                        The ISO 45001 certification process typically takes 4-6 months depending on organization size, current health and safety maturity, and scope of certification. WIZMS accelerates this timeline with expert guidance.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                        <MdKeyboardArrowDown className="text-red-600 text-xl faq-icon" />
                        Is ISO 45001 applicable to all industries?
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Yes, ISO 45001 is applicable to organizations of all types and sizes across all industries. Whether you're in construction, manufacturing, services, or healthcare, we can help you achieve certification.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                        <MdKeyboardArrowDown className="text-red-600 text-xl faq-icon" />
                        How does ISO 45001 integrate with ISO 9001 and ISO 14001?
                      </summary>
                      <p className="text-gray-700 mt-4">
                        ISO 45001, ISO 9001, and ISO 14001 share common structure and can be integrated into an Integrated Management System (IMS) using WIZMS expert consultancy.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                        <MdKeyboardArrowDown className="text-red-600 text-xl faq-icon" />
                        What training is required for ISO 45001?
                      </summary>
                      <p className="text-gray-700 mt-4">
                        All employees need awareness training on ISO 45001 requirements. Additionally, specific roles like OHSMS representatives, internal auditors, and management need comprehensive training. WIZMS provides tailored training programs.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                        <MdKeyboardArrowDown className="text-red-600 text-xl faq-icon" />
                        What documentation is needed for ISO 45001 certification?
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Required documentation includes health and safety policy, objectives and targets, procedures for hazard identification and risk assessment, training records, incident reports, audit reports, and management review records.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                        <MdKeyboardArrowDown className="text-red-600 text-xl faq-icon" />
                        What is the cost of ISO 45001 certification requirement?
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Costs vary based on industry, organization size, number of locations, and employees. WIZMS provides customized pricing after understanding your specific requirements and ISO 45001 certification context.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                        <MdKeyboardArrowDown className="text-red-600 text-xl faq-icon" />
                        How often do we need surveillance audits?
                      </summary>
                      <p className="text-gray-700 mt-4">
                        After initial certification, surveillance audits are conducted annually. Full recertification audit occurs every 3 years. WIZMS supports you throughout all audit cycles.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                        <MdKeyboardArrowDown className="text-red-600 text-xl faq-icon" />
                        Why should we choose WIZMS for ISO 45001 certification?
                      </summary>
                      <p className="text-gray-700 mt-4">
                        WIZMS provides experienced ISO 45001 consultants, proven methodology, faster certification timeline, ongoing support, and deep understanding of UAE workplace regulations and requirements.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                        <MdKeyboardArrowDown className="text-red-600 text-xl faq-icon" />
                        Can small businesses get ISO 45001 certification?
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Absolutely! ISO 45001 is applicable to organizations of all sizes. Many small and medium enterprises in Dubai, UAE have successfully obtained certification with WIZMS' support.
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Certifications</h3>
                <div className="space-y-3">
                  <Link href="/iso-9001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 9001</p>
                    <p className="text-sm text-gray-600">Quality Management</p>
                  </Link>
                  <Link href="/iso-14001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 14001</p>
                    <p className="text-sm text-gray-600">Environmental Management</p>
                  </Link>
                  <Link href="/iso-50001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 50001</p>
                    <p className="text-sm text-gray-600">Energy Management</p>
                  </Link>
                  <Link href="/iso-27001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 27001</p>
                    <p className="text-sm text-gray-600">Information Security</p>
                  </Link>
                </div>

                {/* CTA */}
                <div className="mt-8 p-6 bg-linear-to-r from-red-500 to-orange-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need ISO 45001 Help?</h4>
                  <p className="text-sm mb-4">Get certified in 4-6 months with WIZMS expert health and safety consultants.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-red-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-red-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form */}
      <EnquiryForm serviceType="ISO 45001 - Occupational Health & Safety Management" bgColor="from-red-600 to-orange-600" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 45001 Certification in Dubai | ISO 45001 Consultants in UAE | Wizms',
          description: 'Wizms offer ISO 45001 certification consultancy services in Dubai, UAE. ISO 45001 in Dubai is maintaining the occupational health and safety management system (OHSMS)',
          author: {
            '@type': 'Organization',
            name: 'Wizms',
            url: 'https://wizms.net',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Wizms',
            logo: {
              '@type': 'ImageObject',
              url: 'https://wizms.net/logo.png',
            },
          },
        })}
      </script>
    </>
  );
}
