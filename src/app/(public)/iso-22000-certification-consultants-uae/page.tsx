import Link from 'next/link';
import { Metadata } from 'next';
import { MdArrowForward, MdKeyboardArrowDown, MdShoppingCart, MdCheckCircle } from 'react-icons/md';
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
  title: 'ISO 22000 Certification in Dubai, UAE | Food Safety Management | Wizms',
  description: 'ISO 22000 Certification in Dubai, UAE. Food Safety Management System (FSMS) consultancy. Secure your food business certification.',
};

export default function ISO22000Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 22000 Certification</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">ISO 22000 & HACCP Certification Consultant in Dubai, UAE</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ISO 22000 is the international standard for Food Safety Management Systems (FSMS). It specifies requirements for organizations to ensure food safety from production to consumption. HACCP (Hazard Analysis Critical Control Points) is integrated within ISO 22000 for comprehensive food safety management.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Food Safety Management System Requirements</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 22000 provides a systematic approach to food safety, combining HACCP principles with prerequisite programs to control food safety hazards throughout the supply chain.
                  </p>
                </div>

                <div className="mb-10 bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 22000 Benefits</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-cyan-600 shrink-0 mt-1" />
                      <span>Ensures food safety from farm to table</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-cyan-600 shrink-0 mt-1" />
                      <span>Reduces food safety incidents and recalls</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-cyan-600 shrink-0 mt-1" />
                      <span>Meets regulatory and customer requirements</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-cyan-600 shrink-0 mt-1" />
                      <span>Enhances brand reputation and consumer trust</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-cyan-600 shrink-0 mt-1" />
                      <span>Improves operational efficiency</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Applicable Industries</h2>
                  <p className="text-gray-700 mb-4">ISO 22000 applies to all organizations in the food supply chain:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Food manufacturers and processors</li>
                    <li>Farms and agricultural producers</li>
                    <li>Food distribution and logistics</li>
                    <li>Restaurants and food service</li>
                    <li>Packaging suppliers</li>
                    <li>Food ingredient suppliers</li>
                  </ul>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs - ISO 22000 Certification</h2>
                  <div className="space-y-4">
                    <style>{faqStyle}</style>
                    <details open className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is HACCP? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">HACCP (Hazard Analysis Critical Control Points) is a systematic method for identifying and controlling food safety hazards. It's integrated into ISO 22000.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How long does ISO 22000 certification take? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Certification typically takes 4-8 weeks depending on organization size and current food safety practices.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Is ISO 22000 mandatory in UAE? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">While not universally mandatory, many customers and retailers require ISO 22000 certification for food products.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Can small food businesses get certified? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Yes, ISO 22000 is applicable to organizations of all sizes, including small food businesses and startups.</p>
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
                  <Link href="/iso-14001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 14001</p>
                    <p className="text-sm text-gray-600">Environmental Management</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-cyan-500 to-cyan-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Get ISO 22000 Food Safety certification in 4-8 weeks.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-cyan-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-cyan-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="ISO 22000 - Food Safety Management System & HACCP" bgColor="from-cyan-600 to-cyan-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 22000 Certification in Dubai, UAE | Food Safety Management | Wizms',
          author: { '@type': 'Organization', name: 'Wizms', url: 'https://wizms.net' },
        })}
      </script>
    </>
  );
}
