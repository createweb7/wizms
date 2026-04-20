import Link from 'next/link';
import { Metadata } from 'next';
import { getConsultantPageBySlug } from '@/lib/supabase-data';
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

export async function generateMetadata(): Promise<Metadata> {
  const page = await getConsultantPageBySlug('iso-18001-certification-consultants-uae');
  return {
    title: page?.meta_title || undefined,
    description: page?.meta_description || undefined,
    keywords: page?.meta_keywords || undefined,
  };
}

export default function ISO18001Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 18001 certification in Dubai</span>
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
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    ISO 18001 Certification Consultants in Dubai, UAE, Abu Dhabi, Sharjah, Ras al-Khaimah, Ajman, Al Ain and Fujairah
                  </h1>
                </div>

                {/* ISO 18001 Certification in Dubai */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 18001 Certification in Dubai</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    ISO 18001 certification in Dubai is an International Standard that specifies the requirements and designed to provide organizations with the elements of OH&S management system. OHSAS 18001 was created by world&apos;s top standard bodies, certification bodies, and professional consultancies.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    All types of organizations are worried about achieving the OHSAS performance by controlling their OHSAS hazards. An effective method to develop a healthy and safe environment is to integrate OHSAS risk management into an association&apos;s business activities. The success of the system depends on the commitment from all levels of the organization.
                  </p>
                </div>

                {/* ISO 18001 Certification in UAE */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 18001 Certification in UAE</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    <Link href="/iso-18001-certification-consultants-uae" className="text-red-600 hover:text-red-800 font-semibold">
                      ISO 18001 Certification in UAE
                    </Link>
                    {' '}determines the requirements for an ISO 18001 management system to empower an organization, to create and implement a policy and goals based on the legal requirements and information about OH&S risks.
                  </p>
                  <p className="text-gray-700 mb-4">OHSAS system is implemented with OHSAS 18001 by including:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Set the objectives, monitor and measure the performance.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Commitment from management team.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Adequate planning and allocation of resources to implement OHSAS 18001 certification in Dubai.</span>
                    </li>
                  </ul>

                  <p className="text-gray-700 mb-4">
                    <Link href="/iso-18001-certification-consultants-uae" className="text-red-600 hover:text-red-800 font-semibold">
                      Important steps of OHSAS 18001 Certification
                    </Link>
                    {' '}applies to different kinds and sizes of organizations that wish to:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Build up an OHSAS management system to limit the risks on staff and other invested parties who could be exposed to OHSAS 18001 hazards.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Implement, maintain and improve the performance of OHSAS 18001.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Assure conformity with it stated OHSAS policy.</span>
                    </li>
                  </ul>
                </div>

                {/* Easy ways to demonstrate conformity */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Easy ways to demonstrate conformity with OHSAS 18001 Standard</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Making self-assurance and self-declaration</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Looking for confirmation from parties who have interest in the organization.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Looking for confirmation for its self-declaration from parties outside the organization, and</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Getting OHSAS 18001 certification from the external organization.</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    OHSAS 18001 certification in Dubai,UAE has been drafted as per the principles given in the ISO/IEC Directives, Part 2. This implies OHSAS 18001 is completely lined up with other management system standards principles created by ISO.
                  </p>
                </div>

                {/* Connecting OHSAS 18001 with other ISO standards */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Connecting OHSAS 18001 with other ISO standards</h2>
                  <p className="text-gray-700 mb-4">
                    OHSAS 18001 is created similar to ISO 9001 Quality Management System standard and the ISO 14001 Environmental Management System standard. They are connected together to encourage the reconciliation of Quality(QMS), Environmental (EMS) and Occupational Health and Safety Management Systems(OHSAS) by the organizations.
                  </p>
                  <p className="text-gray-700">
                    It is feasible for an organization to adapt its current management system. Every organization might implement different components of ISO standards depending upon the invested parties in order to get <Link href="/iso-certification-in-uae" className="text-red-600 hover:text-red-800">ISO certification in UAE</Link>.
                  </p>
                </div>

                {/* Business benefits */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Business benefits of achieving OHSAS 18001 certification:</h2>
                  <p className="text-gray-700">
                    The best way to get benefits for your business is, to achieve ISO 18001 certificate by illustrating the positive aspects of having an occupational health and safety management process, instead of highlighting the negative aspects.
                  </p>
                </div>

                {/* OHSAS 18001 Certification Process */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">OHSAS 18001 Certification Process</h2>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Steps to get OHSAS 18001 Certification in UAE</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Choose a <Link href="/iso-certification-in-uae" className="text-red-600 hover:text-red-800">right ISO consultant in Dubai</Link>. Appoint a representative from the management side and have a technical communication with ISO consultant in Dubai.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Analyse the gap in the ISO 18001. Our ISO 18001 consultant in Dubai,UAE will generate and provide a gap analysis report to the organization based on ISO 18001 certificate.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Wizms, ISO 18001 consultant in UAE will establish an operational plan for the gap treatment.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Perform initial OHSAS 18001 audit with the help of the best ISO certification consultant in Dubai.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Training and awareness program is conducted by our ISO certification consultant. Hence, employees can implement OHSAS 18001 certification easier.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">With the help of our ISO consultant, operational plan, document preparation, preparing all system works for the organization to implement ISO 18001 certification.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-orange-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Conduct a final audit, finding out the non-matches and resolving the issues.</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    A senior management can conduct planned periodic audits and resolve the problems during the implementation process and to audit whether the organization has met the requirements of ISO 18001 certificate. ISO consultancy in Dubai monitors and audits the organization. If the audit was positive, ISO 18001 certificate is issued to the organization.
                  </p>
                </div>

                {/* OHSAS 18001 certification cost */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">OHSAS 18001 certification cost in Dubai</h2>
                  <p className="text-gray-700">
                    OHSAS 18001 certification cost in Dubai,UAE depends upon the organization. Wizms offers the best quality ISO certification for all companies in Dubai at an affordable price, and provides the certification within 4 to 6 weeks.
                  </p>
                </div>

                {/* OHSAS 18001 replaced by ISO 45001 */}
                <div className="mb-10 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">OHSAS 18001 replaced by ISO 45001</h2>
                  <p className="text-gray-700 mb-4">
                    The OHSAS 18001 standards are incorporated into the new ISO 45001 standards. The new standard is released on 12th March 2018. All organizations must undergo a transition from OHSAS 18001:2007 to ISO 45001:2018 before March 2021.
                  </p>
                  <p className="text-gray-700">
                    Our ISO certification experts have provided consultancy services with remarkable Occupational Health and Safety System to several industries that have been audited and certified with the OHSAS 18001 Certification in the very first attempt. The ideal safety systems have resulted in enormous benefits for certified companies.
                  </p>
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ ISO OHSAS 18001 Certification</h2>
                  <div className="space-y-4">
                    <style>{faqStyle}</style>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        What is ISO OHSAS 18001 Certification? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        OHSAS 18001 is Occupational healthy and safety management systems. Implementing the ISO OHSAS 18001 standard will send a clear signal to your clients that you view worker&apos;s health and safety as a priority within your association.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        What is the requirements of OHSAS 18001 Certification in Dubai? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        The requirements that an organization must meet while implementing <Link href="/iso-18001-certification-consultants-uae" className="text-red-600 hover:text-red-800">ISO OHSAS 18001 certification in Dubai</Link>, the management must address the OH&S hazards and risks to prevent injuries and weakness.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Is ISO OHSAS 18001 Certification is being revised? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        In 2005, the OHSAS Working Group chose to re-examine OHSAS 18001 to adjust it to ISO 14001:2004. Following a 2-year time of drafting and public survey, the overhauled standard was distributed in July of 2007.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Do I need to have an internal audit for every 12 months? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Yes. Initially, ISO OHSAS 18001 standard states that you should audit your organization internally at equal interval period.
                      </p>
                      <ul className="space-y-2 mt-4">
                        <li className="flex gap-3 items-start">
                          <MdCheckCircle className="text-orange-600 shrink-0 text-sm" />
                          <span className="text-gray-700">meets the requirements of ISO OHSAS 18001 standard.</span>
                        </li>
                        <li className="flex gap-3 items-start">
                          <MdCheckCircle className="text-orange-600 shrink-0 text-sm" />
                          <span className="text-gray-700">meets the requirements of your management system.</span>
                        </li>
                      </ul>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Whether the organization needs an ISO consultant to design the system? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Utilizing an <Link href="/" className="text-red-600 hover:text-red-800">ISO consultant in Dubai</Link> could imply that you gain your endorsement in a more limited time. Wizms, is the best ISO consultant in Dubai helps the organization to prepare the documents in all aspects. Likewise, an organization must be cautious in choosing the best ISO consultant in Dubai as there are numerous inadequate individuals helping organizations in accomplishing registration to the international standards.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        What Makes OHSAS 18001 Different? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        OHSAS 18001 standard is different from other standards, is its inescapable use by third-party certification. More than 16,000 associations have certified their OH&S management system to ISO OHSAS 18001.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        How might I get a copy of the standard? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Wizms provides an electronic duplicate of OHSAS 18001:2007. To arrange feel free to <Link href="/contact" className="text-red-600 hover:text-red-800">contact us.</Link>
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        How would you pick the perfect people to lead internal audit? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Internal auditing ought to be focused on improving the administrative system. Senior directors ought to be engaged in internal auditing. One of the ISO consultants approaches in Dubai is to get them included in auditing for improvement, with more junior staff associated with the additional tedious tasks of conformance inspecting.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Want to Implement ISO OHSAS 18001 Certification. How Do I Get Started? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Before you begin making changes to your current OH&S projects and systems, ISO consultant in Dubai helps you to get a duplicate of the norm and make sure that you have understood the <Link href="/iso-18001-certification-consultants-uae" className="text-red-600 hover:text-red-800">ISO OHSAS 18001 requirements</Link>.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Compare OHSAS 18001 and ISO 45001? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        The main difference between <Link href="/iso-45001-certification-consultants-uae" className="text-red-600 hover:text-red-800">ISO 45001 OHSAS 18001</Link> is <Link href="/iso-45001-certification-consultants-uae" className="text-red-600 hover:text-red-800">ISO 45001 Certification in Dubai</Link> focuses on the interaction between an association and its business environment while ISO OHSAS 18001 Certification in Dubai was focused on OH&S risks and other internal issues.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        How much does OHSAS 18001 Certification Cost? <MdKeyboardArrowDown className="text-orange-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        OHSAS 18001 Certification Cost depends on the good estimation which is the key to success. Hidden costs can sink your company, and the easy way to prevent them is to conduct a thorough analysis, have discussions, and find the best possible solutions is to hire a right OHSAS 18001 Consultant who helps you to manage the ohsas 18001 certification cost.
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
                    <p className="text-sm text-gray-600">Health & Safety (Newer)</p>
                  </Link>
                  <Link href="/iso-50001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 50001</p>
                    <p className="text-sm text-gray-600">Energy Management</p>
                  </Link>
                </div>

                {/* CTA */}
                <div className="mt-8 p-6 bg-linear-to-r from-orange-500 to-orange-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Get your ISO 18001 certification in 4-6 weeks with expert WIZMS consultants.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-orange-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-orange-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form */}
      <EnquiryForm serviceType="ISO 18001 - OHSAS Occupational Health & Safety Management" bgColor="from-orange-600 to-orange-700" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 18001 in UAE | ISO 18001 Consultant in UAE | ISO 18001 Certification in Dubai | Wizms',
          description: 'ISO 18001 Certification Consultants in Dubai, UAE. Get professional OHSAS 18001 certification services in Dubai, Sharjah, Abu Dhabi and other UAE emirates.',
          author: {
            '@type': 'Organization',
            name: 'Wizms',
            url: 'https://wizms.net',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Wizms',
            url: 'https://wizms.net',
          },
        })}
      </script>
    </>
  );
}
