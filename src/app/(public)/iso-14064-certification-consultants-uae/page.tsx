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
  title: 'ISO 14064 Certification in UAE | Carbon Footprint & GHG Verification | Wizms',
  description: 'ISO 14064-1 Carbon Footprint & Greenhouse Gas Verification in Dubai, UAE. Sustainability certification.',
};

export default function ISO14064Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 14064 Certification</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">ISO 14064 Carbon Footprint Certification in Dubai, UAE</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ISO 14064 is the international standard for quantifying, monitoring, reporting, and verifying greenhouse gas (GHG) emissions and carbon footprint. It enables organizations to measure their environmental impact and demonstrate commitment to climate action.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Greenhouse Gas Emissions Verification</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 14064 helps organizations quantify their carbon footprint, identify reduction opportunities, and communicate environmental sustainability efforts to stakeholders.
                  </p>
                </div>

                <div className="mb-10 bg-lime-50 border-l-4 border-lime-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 14064 Benefits</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-lime-600 shrink-0 mt-1" />
                      <span>Accurate carbon footprint measurement</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-lime-600 shrink-0 mt-1" />
                      <span>Identify GHG reduction opportunities</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-lime-600 shrink-0 mt-1" />
                      <span>Enhanced sustainability credentials</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-lime-600 shrink-0 mt-1" />
                      <span>Cost savings through emission reduction</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-lime-600 shrink-0 mt-1" />
                      <span>Regulatory compliance and reporting</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">GHG Emissions Categories</h2>
                  <p className="text-gray-700 mb-4">ISO 14064 covers measurement of three types of emissions:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Scope 1:</strong> Direct emissions from owned/controlled sources</li>
                    <li><strong>Scope 2:</strong> Indirect emissions from purchased electricity and energy</li>
                    <li><strong>Scope 3:</strong> Other indirect emissions from value chain</li>
                  </ul>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs - ISO 14064 Certification</h2>
                  <div className="space-y-4">
                    <style>{faqStyle}</style>
                    <details open className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is carbon footprint? <MdKeyboardArrowDown className="text-lime-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Carbon footprint is the total amount of greenhouse gases (primarily CO2) emitted directly or indirectly by an organization's activities.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How is carbon footprint calculated? <MdKeyboardArrowDown className="text-lime-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 14064 uses standardized methodologies to measure energy consumption, fuel usage, waste, and other sources of emissions, then converts them to CO2 equivalents.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Who needs ISO 14064 certification? <MdKeyboardArrowDown className="text-lime-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Organizations committed to sustainability, compliance with environmental regulations, and stakeholder reporting benefit from ISO 14064 certification.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How does ISO 14064 support sustainability goals? <MdKeyboardArrowDown className="text-lime-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">By measuring emissions, organizations can set targets, track progress, and demonstrate commitment to reducing their carbon footprint and environmental impact.</p>
                    </details>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Certifications</h3>
                <div className="space-y-3">
                  <Link href="/iso-14001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 14001</p>
                    <p className="text-sm text-gray-600">Environmental</p>
                  </Link>
                  <Link href="/iso-9001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 9001</p>
                    <p className="text-sm text-gray-600">Quality Management</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-lime-500 to-lime-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Measure and reduce your carbon footprint with ISO 14064.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-lime-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-lime-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="ISO 14064-1 - Carbon Footprint & Greenhouse Gas Verification" bgColor="from-lime-600 to-lime-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 14064 Carbon Footprint Verification Certification in UAE | Wizms',
          author: { '@type': 'Organization', name: 'Wizms' },
        })}
      </script>
    </>
  );
}
