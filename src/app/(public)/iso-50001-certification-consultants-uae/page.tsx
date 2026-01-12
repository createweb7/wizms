import Link from 'next/link';
import { Metadata } from 'next';
import { MdArrowForward, MdKeyboardArrowDown, MdElectricBolt, MdCheckCircle } from 'react-icons/md';
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
  title: 'ISO 50001 Certification Consultants in Dubai, UAE | Energy Management System | Wizms',
  description: 'ISO 50001 Certification in Dubai, UAE. Professional Energy Management System consultancy. Get EnMS certification in 4-6 weeks. Call +971 55 277 4123',
};

export default function ISO50001Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 50001 Certification in UAE</span>
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
                    ISO 50001 Certification Consultant in Dubai, UAE
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    ISO 50001 is the International standard that specifies the requirements for an Energy Management System (EnMS). It provides organizations with a comprehensive framework to establish, implement, maintain and improve energy management systems. The primary purpose is to help organizations achieve continual improvement of energy performance, including energy security, efficiency, use and consumption.
                  </p>
                </div>

                {/* About ISO 50001 */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Energy Management System (EnMS) in UAE</h2>
                  <p className="text-gray-700 mb-4">
                    An Energy Management System integrates the existing business system with energy management to reduce energy usage and improve overall energy performance. By adopting ISO 50001 standards, organizations can:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>Reduce energy consumption and operational costs</li>
                    <li>Lower greenhouse gas emissions</li>
                    <li>Improve energy efficiency and performance</li>
                    <li>Demonstrate corporate sustainability commitment</li>
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-10 bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 50001 Benefits for Organizations</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-amber-600 shrink-0 mt-1" />
                      <span>Developing or updating energy efficiency policies</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-amber-600 shrink-0 mt-1" />
                      <span>Determining baseline values for energy consumption</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-amber-600 shrink-0 mt-1" />
                      <span>Performing data analysis of energy use</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-amber-600 shrink-0 mt-1" />
                      <span>Estimation of improvement results and monitoring</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-amber-600 shrink-0 mt-1" />
                      <span>Continuous monitoring and performance improvement</span>
                    </li>
                  </ul>
                </div>

                {/* ISO 50001:2018 */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 50001:2018 Energy Management Systems</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 50001:2018 is the newest energy management standard created with a High-Level Structure similar to <Link href="/iso-9001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 9001</Link> and <Link href="/iso-14001-certification-consultants-uae" className="text-green-600 hover:text-green-800">ISO 14001</Link>. This makes it easier to integrate with existing management systems.
                  </p>
                  <p className="text-gray-700">
                    ISO 50001 can be implemented independently or integrated with ISO 9001, ISO 14001, <Link href="/iso-45001-certification-consultants-uae" className="text-red-600 hover:text-red-800">ISO 45001</Link>, or OHSAS 18001 for a comprehensive Integrated Management System approach.
                  </p>
                </div>

                {/* Application */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Should Implement ISO 50001?</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 50001 is applicable to organizations of all types and sizes across all industries:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdElectricBolt className="text-amber-600 shrink-0 mt-1" />
                      <span>Manufacturing facilities and industrial plants</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdElectricBolt className="text-amber-600 shrink-0 mt-1" />
                      <span>Commercial and institutional buildings</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdElectricBolt className="text-amber-600 shrink-0 mt-1" />
                      <span>Government and public facilities</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdElectricBolt className="text-amber-600 shrink-0 mt-1" />
                      <span>Service organizations with significant energy use</span>
                    </li>
                  </ul>
                </div>

                {/* Why Choose WIZMS */}
                <div className="mb-10 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose WIZMS for ISO 50001?</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-amber-600 shrink-0 mt-1" />
                      <span>Reduces time to get ISO 50001 certification</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-amber-600 shrink-0 mt-1" />
                      <span>Minimizes ISO 50001 certification costs</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-amber-600 shrink-0 mt-1" />
                      <span>Manages all EnMS related documents</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-amber-600 shrink-0 mt-1" />
                      <span>Provides 24/7 support throughout implementation</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-amber-600 shrink-0 mt-1" />
                      <span>Faster and simpler certification process (4-6 weeks)</span>
                    </li>
                  </ul>
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs - ISO 50001 Certification</h2>
                  <div className="space-y-6">
                    <style>{faqStyle}</style>
                    <details open className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        What is the value of ISO 50001 Certification? <MdKeyboardArrowDown className="text-amber-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        In business, you cannot manage what you do not measure. ISO 50001 enables organizations to control energy costs, support energy productivity, improve environmental quality, and enhance competitiveness through systematic energy management.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Why should my organization care about ISO 50001? <MdKeyboardArrowDown className="text-amber-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Energy is crucial to operations and often one of the largest manageable expenses. ISO 50001 provides a model for organizations to achieve significant energy savings through improved performance and resource efficiency.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Can ISO 50001 be implemented independently? <MdKeyboardArrowDown className="text-amber-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Yes. ISO 50001 is an independent management system that can be implemented without other ISO certifications. However, it can be easily integrated with ISO 9001, ISO 14001, or ISO 45001 for comprehensive system management.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        What experts can help implement ISO 50001? <MdKeyboardArrowDown className="text-amber-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        WIZMS provides experienced ISO 50001 certification consultants with expertise in energy management systems. Our team helps organizations in UAE implement ISO 50001 efficiently and cost-effectively.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        What is the ISO 50001 internal audit checklist? <MdKeyboardArrowDown className="text-amber-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Key audit areas include: Commitment and Policy, Planning, Implementation, Checking/Auditing, and Review of the Energy Management System. Our consultants guide you through all audit requirements.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        How long does ISO 50001 certification take? <MdKeyboardArrowDown className="text-amber-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        ISO 50001 can typically be implemented and certified within 4-6 weeks, depending on organization size and current energy management maturity. WIZMS ensures faster implementation through expert guidance.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        What is the impact potential of ISO 50001? <MdKeyboardArrowDown className="text-amber-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        ISO 50001 could impact up to 60% of the world's energy consumption across multiple sectors. Organizations implementing it typically see significant reductions in energy costs and environmental footprint.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        How much does ISO 50001 Certification cost? <MdKeyboardArrowDown className="text-amber-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Cost depends on organization size, industry, and current energy management practices. WIZMS provides customized quotes and cost-effective certification solutions without compromising on quality.
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
                    <p className="text-sm text-gray-600">Health & Safety</p>
                  </Link>
                  <Link href="/iso-27001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 27001</p>
                    <p className="text-sm text-gray-600">Information Security</p>
                  </Link>
                </div>

                {/* CTA */}
                <div className="mt-8 p-6 bg-linear-to-r from-amber-500 to-amber-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Get your ISO 50001 Energy Management certification in 4-6 weeks.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-amber-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-amber-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form */}
      <EnquiryForm serviceType="ISO 50001 - Energy Management System" bgColor="from-amber-600 to-amber-700" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 50001 Certification Consultants in Dubai, UAE | Energy Management System | Wizms',
          description: 'ISO 50001 Certification in Dubai, UAE. Professional Energy Management System consultancy.',
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
