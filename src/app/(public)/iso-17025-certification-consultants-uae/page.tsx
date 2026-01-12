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
  title: 'ISO 17025 Certification in UAE | Laboratory Testing & Calibration | Wizms',
  description: 'ISO 17025 Testing & Calibration Laboratory Certification in Dubai, UAE. Accreditation for laboratory competence.',
};

export default function ISO17025Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 17025 Certification</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">ISO 17025 Certification Consultant in Dubai, UAE</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ISO/IEC 17025 is the international standard for the general requirements of the competence of testing and calibration laboratories. It ensures laboratories operate with high technical competence, reliability, and accuracy in their testing and measurement services.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Laboratory Testing & Calibration Accreditation</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 17025 is the primary standard for laboratory accreditation worldwide. It specifies requirements for management systems, technical competence, measurement uncertainty, and quality assurance in testing and calibration activities.
                  </p>
                </div>

                <div className="mb-10 bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 17025 Benefits</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-emerald-600 shrink-0 mt-1" />
                      <span>International accreditation and recognition</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-emerald-600 shrink-0 mt-1" />
                      <span>Enhanced credibility and customer trust</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-emerald-600 shrink-0 mt-1" />
                      <span>Improved measurement accuracy and reliability</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-emerald-600 shrink-0 mt-1" />
                      <span>Competitive advantage in the market</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-emerald-600 shrink-0 mt-1" />
                      <span>Expanded testing scope and capabilities</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Applicable Test Categories</h2>
                  <p className="text-gray-700 mb-4">ISO 17025 covers accreditation for various testing and calibration services including:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Chemical testing and analysis</li>
                    <li>Mechanical testing</li>
                    <li>Electrical and electronic testing</li>
                    <li>Environmental testing</li>
                    <li>Medical device testing</li>
                    <li>Calibration services</li>
                  </ul>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs - ISO 17025 Certification</h2>
                  <div className="space-y-4">
                    <style>{faqStyle}</style>
                    <details open className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is the difference between testing and calibration? <MdKeyboardArrowDown className="text-emerald-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Testing determines properties and performance of materials/products, while calibration ensures measurement instruments provide accurate results.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Is ISO 17025 accreditation mandatory? <MdKeyboardArrowDown className="text-emerald-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">While not universally mandatory, many industries and regulatory bodies require ISO 17025 accreditation for testing and calibration services.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How long does accreditation take? <MdKeyboardArrowDown className="text-emerald-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 17025 accreditation typically takes 6-12 months depending on laboratory scope and readiness.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is measurement uncertainty? <MdKeyboardArrowDown className="text-emerald-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Measurement uncertainty is the doubt about the accuracy of a measurement result, which must be quantified and reported in ISO 17025 testing.</p>
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

                <div className="mt-8 p-6 bg-linear-to-r from-emerald-500 to-emerald-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Achieve laboratory accreditation with ISO 17025.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-emerald-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-emerald-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="ISO 17025 - Laboratory Testing & Calibration" bgColor="from-emerald-600 to-emerald-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 17025 Laboratory Testing & Calibration Certification in UAE | Wizms',
          author: { '@type': 'Organization', name: 'Wizms' },
        })}
      </script>
    </>
  );
}
