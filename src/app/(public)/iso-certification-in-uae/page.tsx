import Link from 'next/link';
import { Metadata } from 'next';
import { getConsultantPageBySlug } from '@/lib/supabase-data';
import { MdKeyboardArrowDown } from 'react-icons/md';
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

export async function generateMetadata(): Promise<Metadata> {
  const page = await getConsultantPageBySlug('iso-certification-in-uae');
  return {
    title: page?.meta_title || undefined,
    description: page?.meta_description || undefined,
    keywords: page?.meta_keywords || undefined,
  };
}

export default function ISOCertificationUAEPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO Certification in UAE</span>
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
                    ISO Certification in UAE
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Want to know <Link href="/how-to-get-iso-9001-certification-in-dubai" className="text-blue-600 hover:text-blue-800">how to get ISO Certification in UAE?</Link> Wizms is a trusted <span className="font-bold">ISO certification consultant in UAE</span>. We provide complete, comprehensive and customized solutions for your organization to get ISO Certification in UAE. We are experts in providing ISO certification consulting services in Dubai, Abu Dhabi, Sharjah, Fujairah, Ras al-Khaimah, Ajman, and Al Ain. Getting an ISO certification in UAE is an easy task for an organization if they <Link href="/how-to-choose-the-right-iso-9001-certification-consultant" className="text-blue-600 hover:text-blue-800">choose the right ISO certification consultant in UAE</Link>. Wizms, our team of ISO consultants is specialized in all major ISO standards and work side by side with your organization to train, document and facilitate all the requirements to be an ISO Certified organization.
                  </p>
                </div>

                {/* Key Points */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO Certification in UAE</h2>
                  <p className="text-gray-700 mb-4">
                    <Link href="/iso-certification-in-uae" className="text-blue-600 hover:text-blue-800">ISO certification in UAE</Link> is one of the promising certification in Dubai, UAE. It is a process certification rather than a product certification that checks each and every step of the organization. ISO certification in Dubai is one of the best ISO certification companies in Dubai that certifies management system, manufacturing process, and documentation procedure that has met all the mandatory requirements that improves branding and customer satisfaction. By getting ISO certification in Dubai, an organization has lot of benefits.
                  </p>
                </div>

                {/* Why Wizms */}
                <div className="mb-10 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Wizms</h2>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <span className="text-blue-600 font-bold mr-3 mt-1">✓</span>
                      <span>Provides trust, assurance and confidence.</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="text-blue-600 font-bold mr-3 mt-1">✓</span>
                      <span>Committed to ISO cost effective auditing, ISO certification &amp; ISO training services in Dubai, UAE.</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="text-blue-600 font-bold mr-3 mt-1">✓</span>
                      <span>Effective communication and easy accessibility.</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="text-blue-600 font-bold mr-3 mt-1">✓</span>
                      <span>Highly qualified and experienced experts who offer various ISO standards like: ISO 9001:2015, ISO 14001:2015, ISO 45001:2015, OHSAS 18001:2007, ISO 22000, ISO 27001, ISO 50001, ISO 17025, ISO 31000, ISO 10002, ISO 41000.</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-700 font-semibold">Get quote today for ISO Certification in UAE!</p>
                </div>

                {/* ISO Certification in Dubai */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO Certification in Dubai</h2>
                  <p className="text-gray-700 mb-4">
                    Wizms is the best ISO certification consultant in Dubai who aids value to the effectiveness of your ISO management system irrespective of the current stage, where your organization is - initial phase of ISO implementation, midway through the implementation, moving towards ISO certification audit or even if your system is robust and well-established.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our ISO certification and auditing services in Dubai covers documentation review, gap assessment, assistance in implementation, training courses, internal and pre-assessment audit. We ensure that your organization continue to reap the benefits from our post certification services for continuous improvement of system effectiveness in order to obtain <Link href="/" className="text-blue-600 hover:text-blue-800">ISO Certification in Dubai</Link>. Moreover, our ISO experts will complete periodic surveillance and recertification audits without any setback. Wizms have worked with several organizations across the world to deliver <span className="font-bold">ISO certification in Dubai</span> and related services that focus on cost-effectiveness and timely delivery of solutions resulting in an impressive 100% success rate for all the clients.
                  </p>
                  <p className="text-gray-700">
                    Our team of immensely experienced ISO consultants works with all the leading ISO certification bodies across the world, to facilitate your organization in getting ISO Certification in UAE, Dubai from the certification body of your preference.
                  </p>
                </div>

                {/* Advantages Section */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Advantages of ISO Certification in UAE</h2>
                  <p className="text-gray-700 mb-6"><span className="font-bold">Exceeds Customer Expectations</span> - Wizms will provide the organizations to follow best practices that will help to quickly retrieve all the related customer information to serve customers better than before.</p>
                  <p className="text-gray-700 mb-6"><span className="font-bold">Consistent Product &amp; Service Quality</span> - ISO Certification in Dubai, UAE will help to bring consistency in the production of goods and delivering services.</p>
                  <p className="text-gray-700 mb-6"><span className="font-bold">Improved Employee&apos;s Performance</span> - With the availability of required information or data for the employees to complete their job without delays. Hence, the employee&apos;s performance will enhance significantly.</p>
                  <p className="text-gray-700 mb-6"><span className="font-bold">Reduces the Operational Costs</span> - Enable organizations to keep the overall operational cost low. Having a robust system in place is necessary to streamline business operations is highly beneficial.</p>
                  <p className="text-gray-700 mb-6"><span className="font-bold">Organize the Business Processes</span> - ISO Certification in UAE, Dubai helps in structuring the business process to achieve standardization in the organization.</p>
                  <p className="text-gray-700 mb-6"><span className="font-bold">Problem Solving and Corrective Actions</span> - To comply with the ISO guidelines a standard operating procedure is required. Thus, it will help in efficient problem solving and taking necessary corrective action in place.</p>
                  <p className="text-gray-700"><span className="font-bold">Enhance Business Profitability</span> - ISO Certification in Dubai helps in managing all the department operations and monitor their performance.</p>
                </div>

                {/* Getting ISO Certification */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">To get ISO Certification in UAE</h2>
                  <p className="text-gray-700 mb-4">
                    In order to obtain an ISO certificate in UAE, you must go through several phases in the certification process. The certification process begins with a gap analysis, followed by the implementation of a Quality Management System, an internal audit to ensure process compliance, and finally the final certification audit and certification issuings.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Organizations from all industries in the UAE desire ISO Certification. Companies seek ISO certification in UAE for a variety of reasons, including constant service quality, global reputation, and improved customer satisfaction. WIZMS offers ISO Certificates in UAE for all key standards, including ISO 9001:2015, ISO 14001:2015, ISO 27001:2015, ISO 17025:2017, ISO 13485:2016, ISO 45001:2018, and others. Our ISO Consultants in Dubai are experts in certain ISO Standards.
                  </p>
                  <p className="text-gray-700">
                    We maintain the highest quality standards in our business operations, client relations, and project delivery as an ISO 9001:2015 Certified Company. Discover our ISO Certification Single Window Solution in Dubai, which includes ISO Consulting, <Link href="/iso-training-uae" className="text-blue-600 hover:text-blue-800">ISO Training</Link>, <Link href="/iso-implementation-consultancy-uae" className="text-blue-600 hover:text-blue-800">ISO Implementation</Link>, and ISO Certification Audit Services. Transform your firm into a quality-first one with our ISO Certification in the UAE. Obtain an ISO Certificate from your reputable <span className="font-bold">ISO Consultant in UAE</span> to become globally acknowledged.
                  </p>
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                  <style>{faqStyle}</style>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs - ISO Certification in Dubai, UAE</h2>
                  <div className="space-y-6">
                    <details className="border border-gray-200 rounded-lg p-4" open>
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                        <MdKeyboardArrowDown className="text-blue-600 text-xl faq-icon" />
                        What are the benefits of ISO Certification in Dubai?
                      </summary>
                      <p className="text-gray-700 mt-4">
                        ISO certification in Dubai is a benchmark for the quality of products and services which is recognized globally. The errors in production or services are totally minimized which not only saves time and energy but also improves the quality of the product. It creates confidence among clients and huge profitability in business. To learn more about <Link href="/essential-of-iso-certifications" className="text-blue-600 hover:text-blue-800">Essential of ISO Certifications in UAE</Link>
                      </p>
                    </details>
                  </div>
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
                  <Link href="/iso-14001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 14001</p>
                    <p className="text-sm text-gray-600">Environmental Management</p>
                  </Link>
                  <Link href="/iso-45001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 45001</p>
                    <p className="text-sm text-gray-600">Health & Safety Management</p>
                  </Link>
                  <Link href="/iso-27001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 27001</p>
                    <p className="text-sm text-gray-600">Information Security</p>
                  </Link>
                </div>

                {/* CTA */}
                <div className="mt-8 p-6 bg-linear-to-r from-blue-500 to-blue-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Get your ISO certification in UAE with expert guidance from WIZMS.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-blue-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:karthiga@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-blue-600 transition">
                    Email: karthiga@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form */}
      <EnquiryForm serviceType="ISO Certification Services" bgColor="from-blue-600 to-blue-700" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO Certification in UAE | ISO Certification in Dubai | Wizms',
          description: 'Wizms offers ISO Certification in UAE for all major certification standards. Get your ISO Certificate in UAE from the Best ISO Certification Consultant in Dubai, UAE',
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
