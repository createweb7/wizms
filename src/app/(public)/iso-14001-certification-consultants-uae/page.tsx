import Link from 'next/link';
import { Metadata } from 'next';
import { getConsultantPageBySlug } from '@/lib/supabase-data';
import EnquiryForm from '@/components/EnquiryForm';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getConsultantPageBySlug('iso-14001-certification-consultants-uae');
  return {
    title: page?.meta_title || undefined,
    description: page?.meta_description || undefined,
    keywords: page?.meta_keywords || undefined,
  };
}

export default function ISO14001Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">EMS ISO 14001 Certification Consultants in UAE</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  ISO 14001 Certification Consultants in Dubai, UAE
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  WIZMS offers{' '}
                  <Link href="/iso-14001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">
                    ISO 14001 certification in UAE,
                  </Link>
                  {' '}Dubai that outlines the criteria for a successful environmental management system (EMS). It offers a framework that an organisation can use, instead of creating environmental performance standards.
                </p>
                <p className="text-gray-700 mb-8">
                  ISO 14001 Certification in Dubai, UAE can help an organisation to achieve its objectives if it is integrated with other management systems standards, most notably{' '}
                  <Link href="/iso-9001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">
                    ISO 9001 in Dubai.
                  </Link>
                  {' '}Wizms offers ISO 14001 certification in Dubai, Abu Dhabi, UAE, Sharjah known for environment management system. Our ISO 14001 consultants have immense experience in helping many numbers of companies to meet their standard requirements to qualify for ISO 14001 certification. Wizms provides an excellent service to the organizations who want their company to be ISO 14001 certified.
                </p>

                {/* How may we assist */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How may we assist you to get ISO 14001 Certification in Dubai, UAE?</h2>
                  <p className="text-gray-700 mb-4">
                    It becomes vital for you to get yourself audited in order to receive the ISO 14001 certification after you have implemented the EMS in your company. To undertake the audits, you must first complete the application form if you choose WIZMS, best{' '}
                    <Link href="/" className="text-blue-600 hover:text-blue-800">
                      ISO 14001 certification consultants in UAE, Dubai
                    </Link>
                    . After reviewing each certification criterion, you may arrange your audits accordingly.
                  </p>
                  <p className="text-gray-700">
                    The certification process for ISO 14001 has specific requirements. Following the completion of the formal documentation requirements, the following procedures should be completed to obtain the certification:
                  </p>
                </div>

                {/* Importance */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Importance of ISO 14001 Environmental Management System</h2>
                  <p className="text-gray-700">
                    Environmental management is crucial for any size organisation, regardless of its field of business, especially in the modern world when environmental degradation is becoming more and more apparent. Some of the world&apos;s major environmental issues include ozone layer depletion, climate change, air, soil, and ground water contamination, as well as improper handling of hazardous waste. An organisation can implement specific{' '}
                    <Link href="/examples-of-iso-14001-objectives-for-companies-of-various-sizes" className="text-blue-600 hover:text-blue-800">
                      ISO 14001 procedures
                    </Link>
                    {' '}to assess the negative impact of its operations on the environment and ensure compliance with all applicable regulatory requirements pertaining to environmental protection.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
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
                    <p className="text-sm text-gray-600">Health & Safety Management</p>
                  </Link>
                  <Link href="/iso-50001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 50001</p>
                    <p className="text-sm text-gray-600">Energy Management</p>
                  </Link>
                  <Link href="/iso-27001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 27001</p>
                    <p className="text-sm text-gray-600">Information Security</p>
                  </Link>
                </div>

                {/* CTA */}
                <div className="mt-8 p-6 bg-linear-to-r from-green-500 to-green-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Get your ISO 14001 Environmental Management certification with WIZMS.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-green-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-green-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form */}
      <EnquiryForm serviceType="ISO 14001 - Environmental Management System" bgColor="from-green-600 to-green-700" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 14001 Certification in UAE | ISO 14001 Certification in Dubai | Wizms',
          description: 'Wizms offers ISO 14001 consulting services, helps to get ISO certification at the first attempt.',
          author: {
            '@type': 'Organization',
            name: 'Wizms',
            url: 'https://wizms.net',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Wizms',
            logo: {
              '@type': 'ImageObject',
              url: 'https://wizms.net/logo.png',
            },
          },
        })}
      </script>
    </>
  );
}
