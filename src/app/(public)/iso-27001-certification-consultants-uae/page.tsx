import Link from 'next/link';
import { Metadata } from 'next';
import { MdArrowForward, MdKeyboardArrowDown, MdLock, MdCheckCircle } from 'react-icons/md';
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
  title: 'ISO 27001 Certification in UAE | Information Security Management | Wizms',
  description: 'ISO 27001 Certification in Dubai, UAE. Professional Information Security Management System (ISMS) consultancy. Get certified in 4-6 weeks.',
};

export default function ISO27001Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 27001 Certification in UAE</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">ISO 27001 Certification Consultants in Dubai, UAE</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ISO 27001 is the international standard for Information Security Management Systems (ISMS). It specifies requirements for establishing, implementing, maintaining and improving an ISMS to protect sensitive information and data. ISO 27001 certification demonstrates your organization's commitment to information security.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What is an Information Security Management System?</h2>
                  <p className="text-gray-700 mb-4">
                    An ISMS is a systematic approach to managing sensitive company information by reducing information risk through a risk-based approach. ISO 27001 provides a framework to identify, analyze, and manage information security risks.
                  </p>
                </div>

                <div className="mb-10 bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits of ISO 27001</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-purple-600 shrink-0 mt-1" />
                      <span>Protects sensitive and confidential information</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-purple-600 shrink-0 mt-1" />
                      <span>Reduces information security risks and incidents</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-purple-600 shrink-0 mt-1" />
                      <span>Enhances business continuity and resilience</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-purple-600 shrink-0 mt-1" />
                      <span>Builds customer and stakeholder trust</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-purple-600 shrink-0 mt-1" />
                      <span>Ensures regulatory compliance</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 27001 Certification Process</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-600 pl-4 py-2">
                      <h3 className="font-bold text-gray-900 mb-1">Step 1: Initial Assessment</h3>
                      <p className="text-gray-700 text-sm">Evaluate current information security practices and identify gaps</p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-4 py-2">
                      <h3 className="font-bold text-gray-900 mb-1">Step 2: Risk Assessment</h3>
                      <p className="text-gray-700 text-sm">Identify and analyze information security risks</p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-4 py-2">
                      <h3 className="font-bold text-gray-900 mb-1">Step 3: ISMS Implementation</h3>
                      <p className="text-gray-700 text-sm">Develop policies, procedures, and controls</p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-4 py-2">
                      <h3 className="font-bold text-gray-900 mb-1">Step 4: Certification Audit</h3>
                      <p className="text-gray-700 text-sm">External audit and certification issuance</p>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Needs ISO 27001?</h2>
                  <p className="text-gray-700 mb-4">ISO 27001 is applicable to all organizations that handle sensitive information:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Technology and software companies</li>
                    <li>Financial services and banking institutions</li>
                    <li>Healthcare and medical organizations</li>
                    <li>Legal and professional services</li>
                    <li>Government and public sector agencies</li>
                    <li>Any organization with confidential data</li>
                  </ul>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs - ISO 27001 Certification</h2>
                  <div className="space-y-6">
                    <style>{faqStyle}</style>
                    <details open className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Is ISO 27001 mandatory? <MdKeyboardArrowDown className="text-purple-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        While not universally mandatory, many industries and customers require ISO 27001 certification. It's strongly recommended for organizations handling sensitive information.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        How long does certification take? <MdKeyboardArrowDown className="text-purple-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        ISO 27001 certification typically takes 4-6 weeks with WIZMS expert guidance, depending on organization size and current security maturity.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        What is the difference between ISO 27001 and ISO 27002? <MdKeyboardArrowDown className="text-purple-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        ISO 27001 is the certifiable standard for ISMS requirements, while ISO 27002 provides guidance and best practices for information security controls.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Can small businesses get ISO 27001? <MdKeyboardArrowDown className="text-purple-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Yes, ISO 27001 is applicable to organizations of all sizes. Many SMEs in Dubai have successfully obtained certification with WIZMS support.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        How much does ISO 27001 cost? <MdKeyboardArrowDown className="text-purple-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Cost depends on organization size and current security practices. WIZMS provides customized, cost-effective certification solutions.
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </div>

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
                    <p className="text-sm text-gray-600">Health & Safety</p>
                  </Link>
                  <Link href="/iso-14001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 14001</p>
                    <p className="text-sm text-gray-600">Environmental Management</p>
                  </Link>
                  <Link href="/iso-50001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 50001</p>
                    <p className="text-sm text-gray-600">Energy Management</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-purple-500 to-purple-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Secure your information with ISO 27001 certification in 4-6 weeks.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-purple-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-purple-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="ISO 27001 - Information Security Management System" bgColor="from-purple-600 to-purple-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 27001 Certification in UAE | Information Security Management | Wizms',
          description: 'ISO 27001 Certification in Dubai, UAE. Professional Information Security Management System consultancy.',
          author: { '@type': 'Organization', name: 'Wizms', url: 'https://wizms.net' },
        })}
      </script>
    </>
  );
}
