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
  title: 'ISO 31000 Certification in UAE | Risk Management | Wizms',
  description: 'ISO 31000 Risk Management Certification in Dubai, UAE. Effective risk assessment and mitigation strategies.',
};

export default function ISO31000Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 31000 Certification</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">ISO 31000 Risk Management Consultant in Dubai, UAE</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ISO 31000 is the international standard for risk management. It provides principles, frameworks, and processes to help organizations identify, analyze, and respond to risks effectively, enabling better decision-making and improved performance.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Risk Management Framework</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 31000 establishes a comprehensive approach to managing risks across all organizational levels. It helps organizations proactively identify and mitigate potential threats to their operations and objectives.
                  </p>
                </div>

                <div className="mb-10 bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits of ISO 31000</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                      <span>Systematic risk identification and assessment</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                      <span>Better informed decision-making</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                      <span>Improved operational efficiency</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                      <span>Enhanced stakeholder confidence</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                      <span>Reduced operational losses</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Risk Management Process</h2>
                  <p className="text-gray-700 mb-4">ISO 31000 follows a structured 5-stage process:</p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li><strong>Establish context</strong> - Define internal and external environment</li>
                    <li><strong>Identify risks</strong> - Determine what might happen and why</li>
                    <li><strong>Analyze risks</strong> - Evaluate probability and impact</li>
                    <li><strong>Evaluate risks</strong> - Prioritize risks against criteria</li>
                    <li><strong>Treat risks</strong> - Develop mitigation strategies</li>
                  </ol>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs - ISO 31000 Certification</h2>
                  <div className="space-y-4">
                    <style>{faqStyle}</style>
                    <details open className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What types of risks does ISO 31000 cover? <MdKeyboardArrowDown className="text-indigo-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 31000 covers all types of risks including operational, financial, strategic, compliance, and reputational risks across any organization.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Is ISO 31000 certification mandatory? <MdKeyboardArrowDown className="text-indigo-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">While not legally mandated, ISO 31000 is increasingly required by regulators, investors, and customers as part of governance requirements.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How long does implementation take? <MdKeyboardArrowDown className="text-indigo-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Implementation typically takes 8-12 weeks depending on organization size and complexity.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Who should be involved in risk management? <MdKeyboardArrowDown className="text-indigo-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Risk management requires involvement from senior management, department heads, and all employees to ensure comprehensive risk identification.</p>
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
                  <Link href="/iso-22301-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 22301</p>
                    <p className="text-sm text-gray-600">Business Continuity</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-indigo-500 to-indigo-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Implement effective risk management with ISO 31000.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-indigo-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-indigo-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="ISO 31000 - Risk Management" bgColor="from-indigo-600 to-indigo-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 31000 Risk Management Certification in UAE | Wizms',
          author: { '@type': 'Organization', name: 'Wizms' },
        })}
      </script>
    </>
  );
}
