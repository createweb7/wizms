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
  title: 'ISO 10002 Certification in UAE | Customer Satisfaction | Wizms',
  description: 'ISO 10002 Customer Satisfaction & Complaint Handling Certification in Dubai, UAE. Improve customer experience.',
};

export default function ISO10002Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 10002 Certification</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">ISO 10002 Certification Consultant in Dubai, UAE</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ISO 10002 is the international standard for managing customer satisfaction and handling complaints. It provides guidelines for establishing an effective complaint-handling process that transforms customer feedback into continuous improvement opportunities.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Satisfaction Management</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 10002 helps organizations respond effectively to customer complaints, resolve issues quickly, and use feedback to enhance products, services, and customer relationships.
                  </p>
                </div>

                <div className="mb-10 bg-rose-50 border-l-4 border-rose-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 10002 Benefits</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1" />
                      <span>Effective complaint handling and resolution</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1" />
                      <span>Enhanced customer satisfaction and loyalty</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1" />
                      <span>Improved products and services</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1" />
                      <span>Continuous organizational improvement</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1" />
                      <span>Enhanced brand reputation</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Complaint Handling Process</h2>
                  <p className="text-gray-700 mb-4">ISO 10002 establishes a structured process for:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Receiving and acknowledging complaints</li>
                    <li>Investigating root causes</li>
                    <li>Responding and resolving issues</li>
                    <li>Analyzing complaint data</li>
                    <li>Implementing preventive actions</li>
                  </ul>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs - ISO 10002 Certification</h2>
                  <div className="space-y-4">
                    <style>{faqStyle}</style>
                    <details open className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is considered a complaint? <MdKeyboardArrowDown className="text-rose-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Any written or verbal expression of dissatisfaction by a customer regarding a product, service, or company can be classified as a complaint.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How quickly should complaints be resolved? <MdKeyboardArrowDown className="text-rose-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 10002 requires prompt response and resolution within timeframes agreed upon by the organization and customer.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Who should manage complaints? <MdKeyboardArrowDown className="text-rose-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">A dedicated complaint management team should be established with representatives from relevant departments to ensure effective resolution.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How does ISO 10002 improve business? <MdKeyboardArrowDown className="text-rose-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">By systematizing complaint handling and using feedback for improvement, organizations reduce issues, improve products, and increase customer loyalty.</p>
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
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-rose-500 to-rose-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Improve customer satisfaction with ISO 10002.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-rose-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-rose-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="ISO 10002 - Customer Satisfaction & Complaint Handling" bgColor="from-rose-600 to-rose-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 10002 Customer Satisfaction Certification in UAE | Wizms',
          author: { '@type': 'Organization', name: 'Wizms' },
        })}
      </script>
    </>
  );
}
