import Link from 'next/link';
import { Metadata } from 'next';
import { MdCheckCircle } from 'react-icons/md';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'ISO Implementation consultancy in Dubai| ISO Implementation consultancy UAE | Wizms',
  description: 'Wizms is the No.1 ISO Implementation Consultancy in Dubai, UAE. Wizms is considered to be the best consultancy with great approach, fastest service delivery, completion & effectiveness of the implementation.',
  keywords: 'ISO Implementation Consultancy in Dubai, ISO Implementation Consultancy, ISO Implementation Consultancy in UAE, ISO Implementation Consultancy in Abu Dhabi, ISO Consultancy in UAE, ISO Implementation Consultancy in Sharjah, Best ISO Consultancy in UAE',
};

export default function ISOImplementationPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">Implementation</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">ISO Implementation consultancy in Dubai, UAE</h1>
                
                <div className="mb-8 text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Wizms is an expert <Link href="/" className="text-blue-600 hover:text-blue-800">ISO Certification Consultant in Dubai</Link> and are considered to be creative, simple, practical and feasible in order to implement a method that adds value to the organizations business tasks.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation of ISO standards</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    ISO implementation is a big step for an organization and decide the starting and ending process. Here are the few steps that helps to implement the process easier.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Decide the ISO standard and perform Gap Analysis</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Each company must have a objective plan to get ISO Certification. There are so many ISO standards available in the market. The company should decide and choose the appropriate standard that suits your company.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Gap Analysis is to identify the loopholes and figure out the gap between the current management system and ISO standard requirements. Choose a perfect <Link href="/how-to-choose-the-right-iso-certification-consultant" className="text-blue-600 hover:text-blue-800">ISO consultant in Dubai</Link> who helps throughout the ISO certification process. Wizms is the best ISO certification consultant who visits your organization and checks the activities done by the top-level management. Our ISO consultant in Dubai identifies the areas that do not comply the requirements of ISO standards.
                      </p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Design and document development</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Quality manual is one of the basic documentations to get ISO certification. With the help of our ISO consultant, the quality manual will be prepared based on the requirements of ISO standards. Without a proper documentation, ISO implementation will lead to failure. Once the documentation is prepared successfully with the help of an ISO consultant, you can begin your ISO implementation process to get ISO certification.
                      </p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">ISO Training in UAE</h3>
                      <p className="text-gray-700 leading-relaxed">
                        <Link href="/training" className="text-blue-600 hover:text-blue-800">ISO Training in UAE</Link> must be provided to the employees to make ISO implementation process successful by the top-level management. A complete ISO training need to be provided to the employees and they should be trained in every single aspects of the ISO standards.
                      </p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">ISO Audit</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <Link href="/how-to-get-ready-for-iso-audit" className="text-blue-600 hover:text-blue-800">ISO Auditing</Link> is the final step of the ISO implementation. Role of an <Link href="/iso-certification-audit" className="text-blue-600 hover:text-blue-800">ISO certification auditor</Link> must well-known by the company in UAE. An organization in UAE must have and clear picture about the new ISO management standards. An ISO consultant in UAE will conduct mock audit and final management reviews and fine tunes the loopholes in the new ISO management systems.
                      </p>
                      <p className="text-gray-700 font-semibold">
                        If all these steps are followed, it is easy to get ISO certification in UAE.
                      </p>
                    </div>
                  </div>

                  <div className="mt-16 bg-linear-to-br from-gray-50 to-white rounded-lg p-10">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">ISO Implementation Process Flow</h2>
                    
                    <div className="max-w-2xl mx-auto">
                      <div className="space-y-0">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-cyan-400 text-gray-900 rounded-lg px-8 py-4 shadow-lg mb-6">
                            <p className="font-bold text-center text-lg">Step 1<br/>GAP ANALYSIS</p>
                          </div>
                          <div className="text-4xl text-blue-500 font-bold">|</div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-blue-600 text-white rounded-lg px-8 py-4 shadow-lg mb-6 mt-6">
                            <p className="font-bold text-center text-lg">Step 2<br/>DESIGN AND DEVELOPMENT</p>
                          </div>
                          <div className="text-4xl text-blue-500 font-bold">|</div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-yellow-300 text-gray-900 rounded-lg px-8 py-4 shadow-lg mb-6 mt-6">
                            <p className="font-bold text-center text-lg">Step 3<br/>IMPLEMENTATION AND PRACTICE</p>
                          </div>
                          <div className="text-4xl text-blue-500 font-bold">|</div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-orange-500 text-white rounded-lg px-8 py-4 shadow-lg mt-6">
                            <p className="font-bold text-center text-lg">Step 4<br/>ASSESSMENT AND REVIEW</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our ISO Services</h3>
                <div className="space-y-3">
                  <Link href="/iso-certification-in-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO Certifications</p>
                    <p className="text-sm text-gray-600">All ISO Standards</p>
                  </Link>
                  <Link href="/iso-9001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 9001</p>
                    <p className="text-sm text-gray-600">Quality Management</p>
                  </Link>
                  <Link href="/iso-14001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 14001</p>
                    <p className="text-sm text-gray-600">Environmental</p>
                  </Link>
                  <Link href="/iso-45001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 45001</p>
                    <p className="text-sm text-gray-600">Health & Safety</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-blue-600 to-blue-700 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Ready to Implement?</h4>
                  <p className="text-sm mb-4">Start your ISO implementation journey with our expert consultants.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-blue-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-blue-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="ISO Implementation Consultancy" bgColor="from-blue-600 to-blue-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO Implementation consultancy in Dubai, UAE',
          description: 'Wizms is the No.1 ISO Implementation Consultancy in Dubai, UAE. Wizms is considered to be the best consultancy with great approach, fastest service delivery.',
          author: { '@type': 'Organization', name: 'Wizms' },
          publisher: { '@type': 'Organization', name: 'Wizms' },
          url: 'https://wizms.net/iso-implementation-consultancy-uae',
        })}
      </script>
    </>
  );
}
