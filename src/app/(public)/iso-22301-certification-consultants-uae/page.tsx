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
  title: 'ISO 22301 Certification in UAE | Business Continuity Management | Wizms',
  description: 'ISO 22301 Certification in Dubai, UAE. Business Continuity Management System. Ensure organizational resilience.',
};

export default function ISO22301Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 22301 Certification</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">ISO 22301 Certification Consultant in Dubai, UAE</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ISO 22301 is the international standard for Business Continuity Management Systems (BCMS). It specifies requirements for organizations to prepare for, respond to, and recover from disruptions to ensure business resilience and continuity.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Continuity Management System</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 22301 helps organizations develop a comprehensive approach to managing disruptions whether caused by natural disasters, cyber attacks, supply chain failures, or other emergencies.
                  </p>
                </div>

                <div className="mb-10 bg-teal-50 border-l-4 border-teal-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 22301 Benefits</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-teal-600 shrink-0 mt-1" />
                      <span>Ensures business resilience and continuity</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-teal-600 shrink-0 mt-1" />
                      <span>Minimizes impact of disruptions</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-teal-600 shrink-0 mt-1" />
                      <span>Faster recovery from incidents</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-teal-600 shrink-0 mt-1" />
                      <span>Protects reputation and customer confidence</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-teal-600 shrink-0 mt-1" />
                      <span>Meets regulatory requirements</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Needs ISO 22301?</h2>
                  <p className="text-gray-700 mb-4">All organizations benefit from ISO 22301, especially those that:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Operate critical infrastructure</li>
                    <li>Have significant customer dependencies</li>
                    <li>Handle sensitive data or information</li>
                    <li>Operate in volatile regions</li>
                    <li>Supply essential services</li>
                  </ul>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs - ISO 22301 Certification</h2>
                  <div className="space-y-4">
                    <style>{faqStyle}</style>
                    <details open className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is Business Continuity Management? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">BCM is a holistic management process that identifies potential disruptions and develops response and recovery strategies to ensure business resilience.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How long does certification take? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 22301 certification typically takes 6-8 weeks depending on organization complexity.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Is ISO 22301 required? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">While not universally mandated, critical infrastructure organizations and large enterprises increasingly require ISO 22301 certification.</p>
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
                  <Link href="/iso-27001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 27001</p>
                    <p className="text-sm text-gray-600">Information Security</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-teal-500 to-teal-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Ensure business continuity with ISO 22301 certification.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-teal-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-teal-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="ISO 22301 - Business Continuity Management System" bgColor="from-teal-600 to-teal-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 22301 Certification in UAE | Business Continuity Management | Wizms',
          author: { '@type': 'Organization', name: 'Wizms' },
        })}
      </script>
    </>
  );
}
