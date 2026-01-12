import Link from 'next/link';
import { Metadata } from 'next';
import { MdCheckCircle } from 'react-icons/md';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'SA 8000 Certification in UAE | Social Accountability | Wizms',
  description: 'SA 8000 Social Accountability Certification in Dubai, UAE. Labor rights and workplace standards.',
};

export default function SA8000Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">SA 8000 Certification</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">SA 8000 Social Accountability Certification in Dubai, UAE</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  SA 8000 is an international standard for social accountability. It ensures organizations maintain safe, fair, and ethical working conditions, respect labor rights, and provide decent treatment to workers throughout their supply chain.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Social Accountability & Labor Rights</h2>
                  <p className="text-gray-700 mb-4">
                    SA 8000 helps organizations demonstrate commitment to ethical workplace practices, labor standards compliance, and responsible business conduct that benefits workers and organizational reputation.
                  </p>
                </div>

                <div className="mb-10 bg-pink-50 border-l-4 border-pink-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">SA 8000 Benefits</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Compliance with international labor standards</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Enhanced worker well-being and morale</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Improved brand reputation and trust</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Reduced labor-related risks and conflicts</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Better supply chain relationships</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">SA 8000 Core Requirements</h2>
                  <p className="text-gray-700 mb-4">SA 8000 addresses nine key areas:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Child labor elimination</li>
                    <li>Forced labor prevention</li>
                    <li>Safe and healthy working conditions</li>
                    <li>Freedom of association and collective bargaining</li>
                    <li>Fair wages and benefits</li>
                    <li>Working hours limits</li>
                    <li>No discrimination or harassment</li>
                    <li>No discipline or punishment</li>
                    <li>Management responsibility</li>
                  </ul>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs - SA 8000 Certification</h2>
                  <div className="space-y-4">
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Who needs SA 8000 certification? <span className="text-pink-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">Manufacturing, retail, and organizations with significant supply chains benefit from SA 8000 to demonstrate ethical labor practices.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How does SA 8000 differ from ISO standards? <span className="text-pink-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">SA 8000 focuses specifically on social accountability and labor rights, while ISO standards address quality, environment, or health and safety.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is the certification process? <span className="text-pink-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">SA 8000 certification involves assessment of workplace conditions, worker interviews, and documentation review by accredited certification bodies.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How long is SA 8000 certification valid? <span className="text-pink-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">SA 8000 certification is valid for three years, with mandatory annual surveillance audits to ensure continued compliance.</p>
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

                <div className="mt-8 p-6 bg-linear-to-r from-pink-500 to-pink-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Ensure ethical labor practices with SA 8000.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-pink-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-pink-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="SA 8000 - Social Accountability" bgColor="from-pink-600 to-pink-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'SA 8000 Social Accountability Certification in UAE | Wizms',
          author: { '@type': 'Organization', name: 'Wizms' },
        })}
      </script>
    </>
  );
}
