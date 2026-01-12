import Link from 'next/link';
import { Metadata } from 'next';
import { MdCheckCircle } from 'react-icons/md';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'SEDEX Certification in UAE | Supply Chain Ethics & Compliance | Wizms',
  description: 'SEDEX (Supplier Ethical Data Exchange) Certification in Dubai, UAE. Supply chain transparency and ethics.',
};

export default function SEDEXPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">SEDEX Certification</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">SEDEX Certification Consultant in Dubai, UAE</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  SEDEX (Supplier Ethical Data Exchange) is a global platform and certification for managing supply chain ethics and labor practices. It provides a standardized approach for suppliers to demonstrate responsible business conduct and ethical compliance.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Supply Chain Ethics & Transparency</h2>
                  <p className="text-gray-700 mb-4">
                    SEDEX membership enables suppliers to transparently share audit results, labor practices, and ethical practices data with buyers and retailers globally, reducing duplicate audits and compliance burdens.
                  </p>
                </div>

                <div className="mb-10 bg-violet-50 border-l-4 border-violet-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">SEDEX Benefits</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                      <span>Access to global retail and brand buyers</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                      <span>Reduced duplicate audits from multiple buyers</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                      <span>Enhanced supplier credibility and trust</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                      <span>Improved labor and ethical practices</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                      <span>Competitive business advantage</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">SEDEX Assessment Areas</h2>
                  <p className="text-gray-700 mb-4">SEDEX members are assessed on:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Labor practices and worker rights</li>
                    <li>Health and safety conditions</li>
                    <li>Environmental management</li>
                    <li>Business ethics and compliance</li>
                    <li>Management systems and governance</li>
                  </ul>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs - SEDEX Certification</h2>
                  <div className="space-y-4">
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Who requires SEDEX certification? <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">Suppliers to major retail chains, fashion brands, and fast-moving consumer goods companies are increasingly required to be SEDEX members.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is a SEDEX audit? <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">A SEDEX audit assesses compliance with labor, health/safety, environmental, and ethics standards through facility inspections and worker interviews.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How often is SEDEX recertification required? <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">SEDEX membership requires annual self-assessment updates and audits every 1-3 years depending on facility risk level and audit history.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What types of facilities can join SEDEX? <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">SEDEX welcomes manufacturing facilities, supply chain partners, and service providers across industries including apparel, food, consumer goods, and chemicals.</p>
                    </details>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Certifications</h3>
                <div className="space-y-3">
                  <Link href="/sa-8000-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">SA 8000</p>
                    <p className="text-sm text-gray-600">Social Accountability</p>
                  </Link>
                  <Link href="/iso-45001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 45001</p>
                    <p className="text-sm text-gray-600">Health & Safety</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-violet-500 to-violet-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Join SEDEX and access global retail buyers.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-violet-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-violet-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="SEDEX - Supplier Ethical Data Exchange" bgColor="from-violet-600 to-violet-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'SEDEX Supply Chain Ethics Certification in UAE | Wizms',
          author: { '@type': 'Organization', name: 'Wizms' },
        })}
      </script>
    </>
  );
}
