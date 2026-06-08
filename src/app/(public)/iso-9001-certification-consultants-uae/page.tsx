import Link from 'next/link';
import { Metadata } from 'next';
import { getConsultantPageBySlug } from '@/lib/supabase-data';
import EnquiryForm from '@/components/EnquiryForm';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getConsultantPageBySlug('iso-9001-certification-consultants-uae');
  return {
    title: page?.meta_title || undefined,
    description: page?.meta_description || undefined,
    keywords: page?.meta_keywords || undefined,
  };
}

export default function ISO9001Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 9001 Certification in UAE</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                {/* Hero Section */}
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    ISO 9001 Certification Consultant in UAE, Dubai
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <Link href="/iso-9001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">
                      ISO 9001 certification in Dubai
                    </Link>
                    , UAE helps to provide specifications for quality management system (QMS). The ISO 9001:2015 certification UAE is used by businesses to show that they can consistently deliver goods and services that satisfy client and legal requirements. ISO 9001 certification companies in Dubai, UAE widely use ISO 9000 series to which organisations can be certified by iso 9001. WIZMS, best ISO 9001 certification consultancy in Dubai, UAE have a team of knowledgeable ISO Consultants who specialise in particular ISO 9001 Standards.
                    We uphold the highest quality standards in our client interactions, project delivery, and corporate operations as an ISO 9001:2015 Certified Company.
                  </p>
                </div>

                {/* Who Should Use */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Who should use ISO 9001:2015 revised standard?</h2>
                  <p className="text-gray-700 mb-4">
                    Any organisation must comply with ISO 9001:2015 regardless of size or industry. The standards of the ISO 9001 certification in UAE have been implemented into the quality management systems of more than one million organisations from more than 160 nations.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Utilising the ISO 9001 certification standard, benefits businesses of all shapes and sizes by:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>arrange procedures</li>
                    <li>increase process effectiveness</li>
                    <li>constantly get better</li>
                  </ul>
                  <p className="text-gray-700">
                    All organizations that employ ISO 9001 are urged to upgrade to ISO 9001:2015. This applies to all organisations who certified by ISO 9001:2008, but also those that train or certify others.
                  </p>
                </div>

                {/* ISO 9001 Audit */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What is an ISO 9001 audit?</h2>
                  <p className="text-gray-700">
                    The ISO 9001 audit entails comparing your process's implementation to the ISO 9001 standard and to your documentation. Your QMS is thoroughly examined during the audit, and any deficiencies are found. It guarantees that the company is carrying out the processes it has planned. Through the audit, the quality management system's effectiveness and efficiency can be confirmed.
                  </p>
                </div>

                {/* ISO 9001 Certification in Dubai */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 9001 Certification in Dubai</h2>
                  <p className="text-gray-700 mb-4">
                    In the UAE, obtaining an ISO certificate involves a number of steps in the certification procedure. Gap analyses is the first step in ISO 9001 certification process. Next comes the implementation of the Quality Management System, an internal audit to verify process compliance, the final certification audit, and certification issuance.
                  </p>
                  <p className="text-gray-700">
                    Organisations across all industries prefer{' '}
                    <Link href="/iso-certification-in-uae" className="text-blue-600 hover:text-blue-800">
                      ISO Certification in UAE
                    </Link>
                    {' '}as their chosen certification standard. Businesses in the UAE seek ISO Certification primarily to improve customer happiness, get international reputation, and maintain consistent service quality. WIZMS offers ISO Certificates in the United Arab Emirates, Dubai, Sharjah, Abu Dhabi and across the globe.
                  </p>
                </div>

                {/* Why Choose WIZMS */}
                <div className="mb-10 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Reason to Choose WIZMS to get ISO 9001 Certification in Dubai, UAE</h2>
                  <p className="text-gray-700 mb-4">
                    WIZMS is the best ISO 9001 certified consultancy to apply ISO 9001 Certification in Dubai, Abu-Dhabi, Sharjah, and UAE for conformity assessments that provides globally recognised accredited ISO 9001 standards to companies all over the world that adhere to the standards that have been applied.
                  </p>
                  <p className="text-gray-700 mb-4">
                    WIZMS assigns an adequately skilled, trained, and experienced ISO 9001 consultants to each customer. As part of the assessment and surveillance process, an organisation must undergo a thorough examination; nevertheless, ISO 9001 consultants also have an obligation to make sure that the organisation adds value for the benefit of the customer.
                  </p>
                  <p className="text-gray-700">
                    WIZMS offers services that assist clients in maintaining their systems in accordance with industry standards and the most recent requirements, to both current and prospective clients.
                  </p>
                </div>

              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Certifications</h3>
                <div className="space-y-3">
                  <Link href="/iso-14001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 14001</p>
                    <p className="text-sm text-gray-600">Environmental Management</p>
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
                <div className="mt-8 p-6 bg-linear-to-r from-blue-500 to-blue-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Get your ISO 9001 certification in 4-6 weeks with expert guidance from WIZMS.</p>
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

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">

          <details className="border border-gray-200 rounded-lg overflow-hidden group">
            <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-gray-50 font-semibold text-gray-900 list-none">
              1. Is ISO 9001 mandatory for UAE companies?
              <span className="ml-4 text-blue-600 text-xl group-open:rotate-180 transition-transform duration-200">&#8964;</span>
            </summary>
            <div className="px-5 pb-5 pt-2 bg-white text-gray-700 leading-relaxed">
              No, ISO 9001 certification in UAE is not legally required for all businesses. However, it is highly recommended and often demanded by public authorities (e.g., municipalities), major corporations, and private contractors during vendor onboarding and government tenders.
            </div>
          </details>

          <details className="border border-gray-200 rounded-lg overflow-hidden group">
            <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-gray-50 font-semibold text-gray-900 list-none">
              2. How much does the certification cost?
              <span className="ml-4 text-blue-600 text-xl group-open:rotate-180 transition-transform duration-200">&#8964;</span>
            </summary>
            <div className="px-5 pb-5 pt-2 bg-white text-gray-700 leading-relaxed">
              Costs vary greatly based on factors like your company's employee count, the complexity of your business, the number of locations, and the chosen certification body. Call WIZMS today and get a free quote for the ISO 9001 certification process.
            </div>
          </details>

          <details className="border border-gray-200 rounded-lg overflow-hidden group">
            <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-gray-50 font-semibold text-gray-900 list-none">
              3. How long does the process take?
              <span className="ml-4 text-blue-600 text-xl group-open:rotate-180 transition-transform duration-200">&#8964;</span>
            </summary>
            <div className="px-5 pb-5 pt-2 bg-white text-gray-700 leading-relaxed">
              For small to medium-sized UAE businesses, ISO 9001 implementation and certification process generally takes 1 to 6 weeks. Larger, highly complex organizations may require 1 to 2 months.
            </div>
          </details>

        </div>
      </div>

      {/* Enquiry Form */}
      <EnquiryForm serviceType="ISO 9001 - Quality Management System" bgColor="from-blue-600 to-blue-700" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 9001 Certification in UAE | ISO 9001 Consultants in Dubai | Wizms',
          description: 'ISO 9001 certification in Dubai, UAE, Abu Dhabi, Sharjah providing top-class ISO 9001 certification services by Wizms',
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
