import Link from 'next/link';
import { Metadata } from 'next';
import { MdArrowForward, MdKeyboardArrowDown, MdCheckCircle } from 'react-icons/md';
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
  title: 'ISO 18001 in UAE | ISO 18001 Consultant in UAE | ISO 18001 Certification in Dubai | Wizms',
  description: 'ISO 18001 Certification Consultants in Dubai, UAE. Get professional OHSAS 18001 certification services. Call +971 55 277 4123 for expert guidance and affordable cost.',
};

export default function ISO18001Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 18001 Certification in UAE</span>
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
                    ISO 18001 Certification Consultants in Dubai, UAE
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <Link href="/iso-18001-certification-consultants-uae" className="text-red-600 hover:text-red-800">
                      ISO 18001 Certification in Dubai
                    </Link>
                    {' '}is an International Standard that specifies the requirements for an Occupational Health and Safety (OHSAS) management system. OHSAS 18001 was created by the world's top standard bodies, certification bodies, and professional consultancies to help organizations develop healthy and safe working environments.
                  </p>
                </div>

                {/* ISO 18001 in UAE */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 18001 Certification in UAE</h2>
                  <p className="text-gray-700 mb-4">
                    OHSAS 18001 determines the requirements for an ISO 18001 management system to empower organizations to create and implement a policy and goals based on legal requirements and information about OH&S risks. Implementation includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>Set objectives, monitor and measure performance</li>
                    <li>Commitment from management team</li>
                    <li>Adequate planning and allocation of resources</li>
                  </ul>
                </div>

                {/* Who Should Implement */}
                <div className="mb-10 bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Should Implement OHSAS 18001?</h2>
                  <p className="text-gray-700 mb-4">ISO 18001 applies to organizations of all types and sizes that wish to:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Build an OHSAS management system to limit risks on staff and invested parties</li>
                    <li>Implement, maintain and improve OHSAS 18001 performance</li>
                    <li>Assure conformity with stated OHSAS policy</li>
                  </ul>
                </div>

                {/* Ways to Demonstrate Conformity */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Ways to Demonstrate Conformity</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1" />
                      <span>Self-assurance and self-declaration</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1" />
                      <span>Confirmation from interested parties</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1" />
                      <span>External confirmation of self-declaration</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1" />
                      <span>OHSAS 18001 certification from external organization</span>
                    </li>
                  </ul>
                </div>

                {/* Connection with ISO Standards */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Connection with Other ISO Standards</h2>
                  <p className="text-gray-700 mb-4">
                    OHSAS 18001 is structured similarly to <Link href="/iso-9001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 9001</Link> (Quality Management) and <Link href="/iso-14001-certification-consultants-uae" className="text-green-600 hover:text-green-800">ISO 14001</Link> (Environmental Management). Organizations can integrate these systems for comprehensive management across Quality, Environmental, and Health & Safety domains.
                  </p>
                </div>

                {/* Certification Process */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">OHSAS 18001 Certification Process</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-600 pl-4 py-2">
                      <h3 className="font-bold text-gray-900 mb-1">Step 1: Choose a Consultant</h3>
                      <p className="text-gray-700 text-sm">Appoint a management representative and establish technical communication with an ISO consultant</p>
                    </div>
                    <div className="border-l-4 border-orange-600 pl-4 py-2">
                      <h3 className="font-bold text-gray-900 mb-1">Step 2: Gap Analysis</h3>
                      <p className="text-gray-700 text-sm">Our consultants generate a gap analysis report to identify areas for improvement</p>
                    </div>
                    <div className="border-l-4 border-orange-600 pl-4 py-2">
                      <h3 className="font-bold text-gray-900 mb-1">Step 3: Operational Plan</h3>
                      <p className="text-gray-700 text-sm">Establish a comprehensive operational plan for gap treatment</p>
                    </div>
                    <div className="border-l-4 border-orange-600 pl-4 py-2">
                      <h3 className="font-bold text-gray-900 mb-1">Step 4-7: Implementation & Audit</h3>
                      <p className="text-gray-700 text-sm">Initial audit, training, document preparation, and final certification audit</p>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs - ISO 18001 Certification</h2>
                  <div className="space-y-6">
                    <style>{faqStyle}</style>
                    <details open className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        What is ISO OHSAS 18001 Certification? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        OHSAS 18001 is an Occupational Health and Safety Management System standard. Implementing it signals to clients that worker health and safety are priorities within your organization.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        What are the requirements for OHSAS 18001 in Dubai? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Management must address OH&S hazards and risks to prevent injuries and illnesses. Organizations must establish policies, objectives, and implementation procedures aligned with OHSAS 18001 requirements.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Do I need internal audits every 12 months? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Yes. ISO OHSAS 18001 requires internal audits at equal intervals to ensure the system meets standard requirements and your management system objectives.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Do I need an ISO consultant? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        While not mandatory, an experienced ISO consultant can significantly reduce implementation time and ensure comprehensive documentation. WIZMS helps organizations prepare all required documents and achieve certification faster.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        What is the difference between OHSAS 18001 and ISO 45001? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        ISO 45001 is the newer international standard that replaced OHSAS 18001. It focuses on interaction between the organization and its environment with a stronger emphasis on risk-based thinking and worker participation.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        How long is certification valid? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        ISO 18001 certification is valid for 3 years. Organizations must undergo annual surveillance audits and a full recertification audit in the third year.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        How much does OHSAS 18001 Certification cost? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Cost depends on organization size, industry, and current OH&S maturity. WIZMS provides customized quotes and helps manage costs through efficient implementation. Certification typically takes 4-6 weeks.
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
                  <Link href="/iso-45001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 45001</p>
                    <p className="text-sm text-gray-600">Health & Safety (Newer)</p>
                  </Link>
                  <Link href="/iso-50001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 50001</p>
                    <p className="text-sm text-gray-600">Energy Management</p>
                  </Link>
                </div>

                {/* CTA */}
                <div className="mt-8 p-6 bg-linear-to-r from-orange-500 to-orange-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Get your ISO 18001 certification in 4-6 weeks with expert WIZMS consultants.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-orange-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-orange-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form */}
      <EnquiryForm serviceType="ISO 18001 - OHSAS Occupational Health & Safety Management" bgColor="from-orange-600 to-orange-700" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 18001 in UAE | ISO 18001 Consultant in UAE | ISO 18001 Certification in Dubai | Wizms',
          description: 'ISO 18001 Certification Consultants in Dubai, UAE. Get professional OHSAS 18001 certification services.',
          author: {
            '@type': 'Organization',
            name: 'Wizms',
            url: 'https://wizms.net',
          },
        })}
      </script>
    </>
  );
}
