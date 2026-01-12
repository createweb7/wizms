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
  title: 'ISO 41001 Certification in UAE | Facility Management System | Wizms',
  description: 'ISO 41001 Facility Management System Certification in Dubai, UAE. Optimize your facility operations.',
};

export default function ISO41001Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 41001 Certification</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">ISO 41001 Facility Management Certification in Dubai, UAE</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ISO 41001 is the international standard for facility management systems. It provides a framework for organizations to manage their facilities effectively, efficiently, and sustainably while supporting their core business operations.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Facility Management System</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 41001 helps organizations optimize facility performance, reduce operational costs, improve safety, and create better work environments through systematic facility management practices.
                  </p>
                </div>

                <div className="mb-10 bg-slate-50 border-l-4 border-slate-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 41001 Benefits</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-slate-600 shrink-0 mt-1" />
                      <span>Optimized facility performance and efficiency</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-slate-600 shrink-0 mt-1" />
                      <span>Reduced operational and maintenance costs</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-slate-600 shrink-0 mt-1" />
                      <span>Enhanced workplace safety and security</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-slate-600 shrink-0 mt-1" />
                      <span>Improved employee satisfaction and productivity</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-slate-600 shrink-0 mt-1" />
                      <span>Sustainability and environmental responsibility</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Facilities Management Scope</h2>
                  <p className="text-gray-700 mb-4">ISO 41001 covers management of:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Building infrastructure and maintenance</li>
                    <li>Health, safety, and security</li>
                    <li>Space and assets management</li>
                    <li>Environmental sustainability</li>
                    <li>Service delivery to occupants</li>
                    <li>Cost optimization and budgeting</li>
                  </ul>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs - ISO 41001 Certification</h2>
                  <div className="space-y-4">
                    <style>{faqStyle}</style>
                    <details open className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Who should implement ISO 41001? <MdKeyboardArrowDown className="text-slate-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Any organization managing facilities including corporate offices, factories, hospitals, retail stores, and educational institutions can benefit from ISO 41001.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How does ISO 41001 reduce costs? <MdKeyboardArrowDown className="text-slate-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 41001 optimizes maintenance schedules, reduces energy consumption, minimizes downtime, and improves resource utilization.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is the implementation timeline? <MdKeyboardArrowDown className="text-slate-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 41001 implementation typically takes 6-8 months depending on facility complexity and organizational maturity.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How does ISO 41001 support sustainability? <MdKeyboardArrowDown className="text-slate-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 41001 requires organizations to manage environmental impacts, reduce waste, improve energy efficiency, and adopt sustainable practices.</p>
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
                    <p className="text-sm text-gray-600">Environmental</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-slate-500 to-slate-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Optimize your facility management with ISO 41001.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-slate-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-slate-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="ISO 41001 - Facility Management System" bgColor="from-slate-600 to-slate-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 41001 Facility Management System Certification in UAE | Wizms',
          author: { '@type': 'Organization', name: 'Wizms' },
        })}
      </script>
    </>
  );
}
