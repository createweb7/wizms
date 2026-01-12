import Link from 'next/link';
import { Metadata } from 'next';
import { MdKeyboardArrowDown, MdCheckCircle } from 'react-icons/md';
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
  title: 'ISO 14001 Certification in Dubai, UAE: ISO 14001 Consultants | Wizms',
  description: 'ISO 14001 Certification: To get ISO 14001 in Dubai, UAE, Abu Dhabi, and Sharjah globally known for Environmental Management System. Call us today',
};

export default function ISO14001Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 14001 Certification in UAE</span>
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
                    ISO 14001 Certification Consultants in Dubai, UAE
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <Link href="/iso-14001-certification-consultants-uae" className="text-green-600 hover:text-green-800">
                      ISO 14001 Certification in Dubai, UAE
                    </Link>
                    {' '}is a universally recognized standard for environmental management system (EMS). Organizations implementing ISO 14001:2015 demonstrate their commitment to environmental protection and sustainable development. The ISO 14001 certification consultants in UAE help businesses establish effective environmental management systems that comply with the standard while improving operational efficiency.
                  </p>
                </div>

                {/* Introduction */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction to ISO 14001:2015</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 14001 is designed to help organizations of all sizes develop and implement an environmental management system (EMS) to improve their environmental performance. The standard provides a framework for identifying environmental risks, managing environmental aspects, and demonstrating compliance with applicable regulations.
                  </p>
                  <p className="text-gray-700">
                    In Dubai and across the UAE, ISO 14001 certification has become essential for organizations operating in industries with significant environmental impact. WIZMS, a leading ISO 14001 certification consultant in Dubai, UAE, provides comprehensive guidance through the entire certification journey.
                  </p>
                </div>

                {/* How WIZMS Assists */}
                <div className="mb-10 bg-green-50 border-l-4 border-green-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How WIZMS Assists in ISO 14001 Implementation</h2>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="font-bold text-green-600 shrink-0">1.</span>
                      <span><strong>Environmental Aspect & Impact Assessment:</strong> We conduct a comprehensive review of your current environmental practices and identify all significant aspects.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-green-600 shrink-0">2.</span>
                      <span><strong>Gap Analysis:</strong> Our consultants identify gaps between your current practices and ISO 14001:2015 requirements.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-green-600 shrink-0">3.</span>
                      <span><strong>EMS Documentation:</strong> We help develop environmental policy, procedures, and work instructions aligned with the standard.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-green-600 shrink-0">4.</span>
                      <span><strong>Training & Awareness:</strong> We train your team on ISO 14001 requirements and environmental responsibilities.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-green-600 shrink-0">5.</span>
                      <span><strong>Internal Audit:</strong> Our team conducts internal audits to verify compliance before certification audit.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-green-600 shrink-0">6.</span>
                      <span><strong>Certification Support:</strong> We guide you through the external certification audit process.</span>
                    </li>
                  </ol>
                </div>

                {/* Importance of ISO 14001 */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Importance of ISO 14001 Environmental Management System</h2>
                  <p className="text-gray-700 mb-4">
                    Organizations across various industries recognize the critical importance of environmental management. ISO 14001:2015 certification demonstrates:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-green-600 shrink-0 mt-1" />
                      <span><strong>Environmental Responsibility:</strong> A genuine commitment to minimize environmental impact and legal compliance</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-green-600 shrink-0 mt-1" />
                      <span><strong>Cost Reduction:</strong> Efficient resource use and waste management lead to operational cost savings</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-green-600 shrink-0 mt-1" />
                      <span><strong>Market Advantage:</strong> Enhanced reputation and competitive edge in environmentally conscious markets</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-green-600 shrink-0 mt-1" />
                      <span><strong>Regulatory Compliance:</strong> Ensures compliance with environmental regulations in UAE and internationally</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-green-600 shrink-0 mt-1" />
                      <span><strong>Stakeholder Confidence:</strong> Builds trust with investors, customers, and local communities</span>
                    </li>
                  </ul>
                </div>

                {/* Integration with Other Standards */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Integration with Other ISO Management Systems</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 14001 can be effectively integrated with other management systems, particularly:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/iso-9001-certification-consultants-uae" className="p-4 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                      <p className="font-semibold text-gray-900">ISO 9001</p>
                      <p className="text-sm text-gray-600">Quality Management System</p>
                    </Link>
                    <Link href="/iso-45001-certification-consultants-uae" className="p-4 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                      <p className="font-semibold text-gray-900">ISO 45001</p>
                      <p className="text-sm text-gray-600">Occupational Health & Safety</p>
                    </Link>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                  <style>{faqStyle}</style>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs - ISO 14001 Certification</h2>
                  <div className="space-y-6">
                    <details className="border border-gray-200 rounded-lg p-4" open>
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                        <MdKeyboardArrowDown className="text-green-600 text-xl faq-icon" />
                        How long does ISO 14001 certification take?
                      </summary>
                      <p className="text-gray-700 mt-4">
                        The ISO 14001 certification process typically takes 8-12 weeks. This includes gap analysis, EMS implementation, training, internal audit, and certification audit.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                        <MdKeyboardArrowDown className="text-green-600 text-xl faq-icon" />
                        What is the cost of ISO 14001 certification?
                      </summary>
                      <p className="text-gray-700 mt-4">
                        The cost varies based on organization size, industry, and current environmental practices. WIZMS provides customized quotes after understanding your specific requirements.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                        <MdKeyboardArrowDown className="text-green-600 text-xl faq-icon" />
                        Is ISO 14001 mandatory in UAE?
                      </summary>
                      <p className="text-gray-700 mt-4">
                        While not universally mandatory, many UAE organizations are adopting ISO 14001 due to regulatory requirements, customer demands, and sustainability commitments.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                        <MdKeyboardArrowDown className="text-green-600 text-xl faq-icon" />
                        Can small businesses get ISO 14001 certification?
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Yes, ISO 14001 is applicable to organizations of all sizes. Many small and medium enterprises (SMEs) in Dubai and UAE have successfully obtained certification.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                        <MdKeyboardArrowDown className="text-green-600 text-xl faq-icon" />
                        What is ISO 14001 procedures document?
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Procedures define how your organization will manage environmental aspects. WIZMS assists in developing <Link href="/iso-14001-certification-consultants-uae" className="text-green-600 hover:text-green-800 underline">ISO 14001 procedures</Link> specific to your operations.
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
                  <Link href="/iso-45001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 45001</p>
                    <p className="text-sm text-gray-600">Health & Safety Management</p>
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
                <div className="mt-8 p-6 bg-linear-to-r from-green-500 to-green-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Get your ISO 14001 Environmental Management certification in 8-12 weeks with WIZMS.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-green-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-green-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form */}
      <EnquiryForm serviceType="ISO 14001 - Environmental Management System" bgColor="from-green-600 to-green-700" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 14001 Certification in Dubai, UAE: ISO 14001 Consultants | Wizms',
          description: 'ISO 14001 Certification: To get ISO 14001 in Dubai, UAE, Abu Dhabi, and Sharjah globally known for Environmental Management System. Call us today',
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
