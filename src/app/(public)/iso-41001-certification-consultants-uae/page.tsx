import Link from 'next/link';
import { Metadata } from 'next';
import { getConsultantPageBySlug } from '@/lib/supabase-data';
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

export async function generateMetadata(): Promise<Metadata> {
  const page = await getConsultantPageBySlug('iso-41001-certification-consultants-uae');
  return {
    title: page?.meta_title || undefined,
    description: page?.meta_description || undefined,
    keywords: page?.meta_keywords || undefined,
  };
}

export default function ISO41001Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 41001 Certification Consultants in UAE</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">ISO 41001 Certification in Dubai, UAE</h1>

                {/* Opening paragraphs */}
                <div className="mb-10">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    ISO 41001 is an international standard that specifies the requirements of Facility Management(FM). It follows the same structure as ISO 45001, ISO 50001. ISO 41001 standard helps the organizations to follow the facility management efficiently and effectively and meet the requirements of ISO 41001 facility management.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    ISO 41001:2018 Standard is non-specific to any industry and intended to be applicable to all types of organizations and the scope of facility management must be defined. ISO 41001 Facility Management System is relevant to build a sustainable infrastructure that helps in enhancing the employee productivity and growth of the business.
                  </p>
                </div>

                {/* ISO 41001 Facility Management */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 41001 Facility Management</h2>
                  <p className="text-gray-700 mb-4">
                    Facility management consists of multiple disciplines that influence the efficiency and productivity of organizations. ISO standard for facility management determines the quality of life in societies through the services it manages and delivers. ISO 41001 facility management has a broad impact on the society and organization, but there is limited recognition of its principles and practices.
                  </p>
                  <p className="text-gray-700">
                    ISO 41001:2018 Certification offers a perfect solution for organizations to achieve business growth. The requirement of ISO 41001 Facility Management System defines a common global structure and support system for an organization.
                  </p>
                </div>

                {/* Get Certified with ISO 41001:2018 Standard */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Certified with ISO 41001:2018 Standard</h2>
                  <p className="text-gray-700 mb-4">
                    <Link href="/how-to-choose-the-right-iso-certification-consultant" className="text-blue-600 hover:text-blue-800">Get ISO 41001 certification</Link> for an organization in the field of organizational infrastructural developments. Facility Management Standard helps the organization to be on top of the ever-changing trends. Considering the operations, and maintenance of the organization, the services of facility management must be constantly improved.
                  </p>
                  <p className="text-gray-700">
                    ISO 41001 certification standard constitutes a benchmark for developing and driving effective strategic, and operational FM principles. ISO 41001:2018 standard focuses towards Facility Management system and has the potential to improve the workforce, safety, reduce the impact on the environment and reduce the cost.
                  </p>
                </div>

                {/* ISO 41001 certification in UAE */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 41001 certification in UAE</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 41001 certification in UAE, Dubai, Abu Dhabi, Sharjah, Ras al-Khaimah, Ajman, Al Ain and Fujairah is possible by means of an <Link href="/iso-certification-in-uae" className="text-blue-600 hover:text-blue-800">ISO certification consultant</Link>. Wizms is the best ISO consultants, interact with the various departments in the facilities management organization, study their process, set objectives and targets to show the performance and streamline the activities and functions as per the ISO 41001 requirements.
                  </p>
                  <p className="text-gray-700">
                    <Link href="/" className="text-blue-600 hover:text-blue-800">ISO consultants in UAE</Link> provide guidance for implementation of the ISO 41001 standard and ensures that the implementation is in place across all departments. It enhances customer confidence as well as support for the growth of the business by gaining credit and reputation for a company. ISO 41001 Certification would definitely add value to the companies who embark their journey of progress in the coming years in UAE.
                  </p>
                </div>

                {/* Benefits of ISO 41001 */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of ISO 41001:</h2>
                  <p className="text-gray-700 mb-4">
                    Benefits of ISO 41001 are aimed to enhance the organizational infrastructure to international standards. It helps in equipping the organizations with industry best practices, common principles, concepts, etc., in order to achieve excellence.
                  </p>
                  <p className="text-gray-700 mb-4">The benefits of ISO 41001 Facility Management System include:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-teal-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Improved workforce productivity, health and safety.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-teal-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Improved requirements and methodologies.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-teal-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Improving the cost benefits to organizations.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-teal-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Improved service.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-teal-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Providing a platform to all types of organizations.</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    ISO 41001:2018 standard helps the facility management team to improve the efficiency in the areas from procurement of operation to maintenance. There are also other ISO Standards such as ISO 44001, ISO 55001, ISO 14001.
                  </p>
                </div>

                {/* ISO 41001 Audit Checklist Preparation */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 41001 Audit Checklist Preparation</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 41001 Audit Checklist includes set of questions based on ISO 41001:2015 facility management system requirements performed by an ISO certification body auditor. To make sure an organization has met all the requirements of ISO 41001 facility management system, an internal audit is conducted. ISO 41001 audit checklist is listed below.
                  </p>

                  <div className="mb-4 bg-gray-50 p-4 rounded border-l-4 border-teal-600">
                    <h3 className="font-bold text-gray-900 mb-3">ISO 41001 internal audits and management reviews</h3>
                    <p className="text-gray-700">
                      ISO 41001 internal audits and management reviews are essential to maintain an effective iso standard for facility management. Set a schedule and assist the employees by providing adequate ISO 41001 training. Internal audits will find out the areas where improvement is needed and senior manager will review those audits during management reviews.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded border-l-4 border-teal-600">
                    <h3 className="font-bold text-gray-900 mb-3">Monitor FM system and make improvements</h3>
                    <p className="text-gray-700">
                      Along with internal audits and reviews, monitoring is also important to improve Facility Management system. Monitor the key metrics and the objectives and make the necessary improvements.
                    </p>
                  </div>
                </div>

                {/* FAQs */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ - ISO 41001 Certification</h2>
                  <div className="space-y-4">
                    <style>{faqStyle}</style>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        What is ISO 41001 Certification? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        ISO 41001 Certification is the world's first Management Systems standard (MSS) explicitly for Facility Management. MSS' are utilized by organizations to guarantee that activities, items and services met or exceed the expectations. They are likewise used to monitor the performance. ISO 41001 Certification helps the organizations to achieve a quality result.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        What is ISO 41001 Facility Management? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        ISO 41001 Facility Management is characterized as an "authoritative function which incorporates people, process and place within the assembled environment to improve the personal satisfaction of individuals and the efficiency of the core business".
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Can an organization implement ISO 41001 yet not seek after certification? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Yes, implementation and certifications are completely different. Using ISO 41001 Certification as a structure to deal with your FM association makes it far simpler than attempting to plan a totally unique FM system to help every association. The outcome should be a system which empowers the association to deal with an individual's facility or an arrangement of facilities effectively and even more promptly characterize benchmarks.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        What are the advantages of ISO 41001 Certification in Dubai? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        ISO 41001 certification in Dubai can be a valuable instrument to add validity, by showing that your product or services meet the desires of your clients.
                      </p>
                      <ul className="space-y-2 mt-4">
                        <li className="flex gap-3 items-start">
                          <MdCheckCircle className="text-teal-600 shrink-0 text-sm" />
                          <span className="text-gray-700">Enhanced picture, believability and currency.</span>
                        </li>
                        <li className="flex gap-3 items-start">
                          <MdCheckCircle className="text-teal-600 shrink-0 text-sm" />
                          <span className="text-gray-700">A consistent structure to meet prerequisites.</span>
                        </li>
                        <li className="flex gap-3 items-start">
                          <MdCheckCircle className="text-teal-600 shrink-0 text-sm" />
                          <span className="text-gray-700">Improved quality and cost control.</span>
                        </li>
                      </ul>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Is ISO 41001 certification suitable to my organizations? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        The requirements indicated in ISO 41001:2018 can be applied to all organizations regardless of sort, size, area and extent of their business. The quality of an associations offices the board influences the wellbeing and prosperity of most of their partners.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Is this ISO 41001 Certification site or building explicitly? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        No, dissimilar to other ISO guidelines, ISO 41001 is about service delivery and the responsibilities of FM Organization. However, FM Organizations may look to restrict certification to explicit areas by locale or site as proper to their activities.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        How Wizms can support your organization? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        With an abundance of involvement in management system certification, Wizms is obviously positioned to partners together to meet the partners requirements and exceed the industry standard. Wizms, <Link href="/" className="text-blue-600 hover:text-blue-800">ISO consultants in Dubai</Link> is profoundly engaged with a wide assortment of industry panels and guidelines composing groups, helping us to keep up a sharp consciousness of changes inside the business.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        How is a facility management system implemented? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Facility Management System Manual sets out the prerequisites, the practices and methodology that manages the FM. You should follow these practices and report on any issues, obstacles and the requirement for corrective action in your Internal Audits and Management Reviews. Our ISO 41001 consultant in UAE shows how you can coordinate yourself in a coherent, ideal, and practical path to obtain <Link href="/iso-41001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 41001 Certification in UAE</Link>.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Who should get ISO 41001 Certification? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" />
                      </summary>
                      <div className="text-gray-700 mt-4">
                        <ul className="space-y-2 mb-4">
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-teal-600 shrink-0 text-sm" />
                            <span>Outsourced FM Organizations and FM Service Providers can be ISO 41001 guaranteed.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-teal-600 shrink-0 text-sm" />
                            <span>Certification process may differ from country to country.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-teal-600 shrink-0 text-sm" />
                            <span>If it's not too much trouble check with your ISO consultant in Dubai or National Certification Authority.</span>
                          </li>
                        </ul>
                        <p>ISO 41001 Certification can be obtained in 4 - 6 weeks with one of the UAE's most trusted and largest ISO certification consultant in Dubai, Abu Dhabi, Sharjah, Ras al-Khaimah, Ajman, Al Ain and Fujairah.</p>
                      </div>
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
                  <Link href="/iso-45001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 45001</p>
                    <p className="text-sm text-gray-600">Health & Safety</p>
                  </Link>
                  <Link href="/iso-14001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 14001</p>
                    <p className="text-sm text-gray-600">Environmental Management</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-teal-500 to-teal-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Get ISO 41001 certification in 4-6 weeks with expert consultants.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-teal-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-teal-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="ISO 41001 - Facility Management System" bgColor="from-teal-600 to-teal-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 41001 Certification Consultants in UAE | Facility Management | Wizms',
          description: 'ISO 41001 Certification in Dubai, UAE. Professional Facility Management System consultancy services.',
          author: { '@type': 'Organization', name: 'Wizms', url: 'https://wizms.net' },
          publisher: { '@type': 'Organization', name: 'Wizms', url: 'https://wizms.net' },
        })}
      </script>
    </>
  );
}
