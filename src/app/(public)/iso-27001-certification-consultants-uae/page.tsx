import Link from 'next/link';
import { Metadata } from 'next';
import { getConsultantPageBySlug } from '@/lib/supabase-data';
import { MdArrowForward, MdKeyboardArrowDown, MdLock, MdCheckCircle } from 'react-icons/md';
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
  const page = await getConsultantPageBySlug('iso-27001-certification-consultants-uae');
  return {
    title: page?.meta_title || undefined,
    description: page?.meta_description || undefined,
    keywords: page?.meta_keywords || undefined,
  };
}

export default function ISO27001Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISMS ISO 27001 Certification Consultants in UAE</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">ISO 27001 Certification Consultants in Dubai, UAE, Sharjah, Abu Dhabi</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ISO 27001 certification process in Dubai specifies the requirements of Information Security Management System (ISMS). ISO 27001 consultants in Dubai, UAE is in partnership with International Electrochemical Commission (IEC). The goal of ISO 27001 Information Security Management System is to protect the organizations information in a systematic and cost-effective way that does not depend on the size and type of organization.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Importance of ISO 27001 Certification in Dubai, UAE</h2>
                  <p className="text-gray-700 mb-4">
                    By getting ISO 27001 certification in Dubai, UAE, an organization can prove to its customers or clients that how far they protect the ISO 27001 certification customers in Dubai, UAE through their valuable information and safeguard their data. Since ISO 27001 is an international standard, it increases the business opportunities for companies as well as professionals.
                  </p>
                  <p className="text-gray-700">
                    ISO 27001 certification for individuals in Dubai is also available whereas an individual has to attend the training course and pass the examination and show up that he is a potential employer.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Information Security Management System?</h2>
                  <p className="text-gray-700 mb-4">ISMS is a set of rules that an organization needs to follow:</p>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-purple-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Identify the customers and analyse their expectations in terms of Information Security</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-purple-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Identify the risks</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-purple-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Define some protecting rules to safeguard the information and transition methods to meet their expectations</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-purple-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Set up the objective in terms of information security</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-purple-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Implement the transition and risk methodologies</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-purple-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Measure and monitor the risks frequently and controls the ways that affect the information</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-purple-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Continuous improvement that makes ISMS better</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10 bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Reason for ISO 27001 Information Security Standard</h2>
                  <p className="text-gray-700 mb-4">There are four fundamental business benefits that an organization can accomplish with the implementation of ISO 27001 Information Security standard:</p>
                  <div className="space-y-3 text-gray-700">
                    <div><strong className="text-purple-700">Legal Requirements:</strong> By implementing ISO 27001 standard, it gives you an ideal strategy to agree to the legal requirements.</div>
                    <div><strong className="text-purple-700">Competitive Advantage:</strong> If an organization gets ISO 27001 certification and their competitors do not, then most of the customers move towards you and believe that their information will be safe.</div>
                    <div><strong className="text-purple-700">Less Cost:</strong> Investment in ISO 27001 will tremendously reduce the cost by preventing the security incidents from happening.</div>
                    <div><strong className="text-purple-700">Better Organizations:</strong> By implementing ISMS 27001, it settles down situations where workers are unsure of what needs to be done, helps the organizations to run their primary processes in a better way.</div>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How ISO 27001 Certification Works</h2>
                  <p className="text-gray-700 mb-4">The main job of ISMS 27001 is to protect the integrity, availability and confidentiality of the companies information.</p>
                  <div className="space-y-3 text-gray-700 mb-4">
                    <div><strong>Risk Assessment:</strong> This can be done by finding out the problems that could create risk to the information.</div>
                    <div><strong>Risk Treatment:</strong> Implement methodologies to resolve the problems from happening.</div>
                  </div>
                  <p className="text-gray-700 mb-3">The main aim of ISO 27001 standard is to process the managing risks by:</p>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-purple-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Find out the risks that affect the information.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-purple-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Treat the risk such that it never happens again.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-purple-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Implement security controls to safeguard the information of the company.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 27001 Certification Requirements</h2>
                  <p className="text-gray-700 mb-4">ISO 27001 certification requirements are defined in its clause 4 through 10. All these requirements must be met in order to get ISO 27001 certification.</p>
                  <div className="space-y-3 text-gray-700">
                    <div><strong>Clause 4: Context of the organization</strong> — To understand the external and internal issues and define the scope of ISMS 27001.</div>
                    <div><strong>Clause 5: Leadership</strong> — Defining the roles and responsibilities of the top management.</div>
                    <div><strong>Clause 6: Planning</strong> — Defines requirements for risk assessment, risk treatment plan, and setting the objectives for ISO information security.</div>
                    <div><strong>Clause 7: Support</strong> — Must define the requirements for availability of resources, creating awareness, communication, and control of documents and records.</div>
                    <div><strong>Clause 8: Operation</strong> — Define the ways to implement risk assessment and treatment, controls and other processes required to achieve the objectives of ISO information security.</div>
                    <div><strong>Clause 9: Performance evaluation</strong> — Evaluating the performance by defining the requirements to monitor, measure, audit, and management review.</div>
                    <div><strong>Clause 10: Improvement</strong> — Defining the requirements for non-conformities, corrections to be done on the recorded documents and continual improvement of ISMS 27001.</div>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 27001 Certification Cost in Dubai, UAE</h2>
                  <p className="text-gray-700">
                    ISO 27001 Certification can be obtained in 4 - 6 weeks with one of the UAE&apos;s most trusted and largest ISO certification consultant in Dubai, Abu Dhabi, Sharjah, Ras al-Khaimah, Ajman, Al Ain and Fujairah. ISO 27001 certification implementation cost in UAE depends on the scope of the ISMS and it varies from organization to organization. Our <Link href="/iso-27001-certification-consultants-uae" className="text-purple-600 hover:text-purple-800">ISO 27001 consultants</Link> offer the best quality ISO certification for all companies in Dubai at an affordable price. We provide the ISO certification within 4-6 weeks.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 27001 certified</h2>
                  <p className="text-gray-700 mb-4">
                    If an organization requires ISO 27001 certification, they need to invite ISO certification bodies to perform the ISO 27001 certification audit. If the audit is successful, issue the ISO 27001 certificate to the organization. This ISO 27001 certificate will ensure the customers that their information is safe and secure.
                  </p>
                  <p className="text-gray-700">
                    Once an ISO certification body issues the ISO 27001 certificate to the organization, the certificate is valid for three years. During that period, our ISO 27001 consultant will conduct a surveillance audit to check if the organization is maintaining the ISMS properly.
                  </p>
                </div>

                <div className="mb-10 bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 27001 Certification for Individuals</h2>
                  <p className="text-gray-700 mb-4">Apart from organizations, ISO 27001 certification for individuals is also available. To get ISO 27001 Certification, he needs to take up a training course, and pass the examination.</p>
                  <div className="space-y-3 text-gray-700">
                    <div><strong>ISO 27001 Lead Implementer</strong> — This course is designed for advanced consultants and practitioners.</div>
                    <div><strong>ISO 27001 Lead Auditor</strong> — This course is designed for ISO 27001 auditors in certification bodies and for consultants.</div>
                    <div><strong>ISO 27001 Internal Auditor</strong> — This course is designed for people who will perform ISO 27001 auditing in their company.</div>
                    <div><strong>ISO 27001 Foundations</strong> — This course is designed for people who want to learn the basics of the ISO 27001 standard, and the main steps in the ISO 27001 certification process.</div>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest version of ISO 27001:2013</h2>
                  <p className="text-gray-700 mb-4">
                    The latest version of ISO 27001 is ISO/IEC 27001:2013. The first version of ISO 27001 is released in 2005 as ISO/IEC 27001:2005. The second version of ISO 27001 is released in 2013 as ISO/IEC 27001:2013. The latest version is released in 2019. But 2013 was confirmed.
                  </p>
                  <p className="text-gray-700">
                    ISO 27001 is the global standard that is understood globally for overseeing dangers to the security of data you hold. Certification to ISO 27001 permits you to demonstrate to your customers and other partners that you are dealing with the security of your data. ISO 27001:2013 implements a lot of standardized requirements for ISMS. The standard embraces a system-based methodology for building, executing, operating, maintaining, monitoring, improving your ISMS.
                  </p>
                </div>

                <div className="mb-10 bg-gray-100 p-6 rounded">
                  <p className="text-gray-700">
                    We at WIZ Management solutions, assess the pre-installed ISMS of the organization and will be able to conceive, according to the resources whether the organization has an effective ISMS that guarantees for the successful completion of an ISO 27001 audit. As a result, the organization broaden the customer base and operate confidentially in a secure environment.
                  </p>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs - ISO 27001 Certification</h2>
                  <div className="space-y-6">
                    <style>{faqStyle}</style>
                    <details open className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        How long will it take to get ISO 27001 Certification? <MdKeyboardArrowDown className="text-purple-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        With the help of ISO 27001 consultant in UAE, a small organization may require 3 to 6 months, organization up to 500 individuals will require 8 to 12 months, and bigger organizations require a year or more. Our ISO 27001 consultants help streamline the process.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        What is ISO 27001 certification, and why is it important? <MdKeyboardArrowDown className="text-purple-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        ISO 27001 is an internationally recognized standard for information security management systems (ISMS). It helps businesses in the UAE protect sensitive data, comply with regulations, and gain customer trust.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        How much does ISO 27001 certification cost in UAE? <MdKeyboardArrowDown className="text-purple-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        <Link href="/cost-of-iso-27001-certification" className="text-purple-600 hover:text-purple-800">ISO 27001 certification cost</Link> in UAE is difficult to calculate the expense prior to finishing the risk assessment and the Statement of Applicability. The ISO 27001 cost varies based on business size, complexity, and certification body. Contact us for a customized quote tailored to your needs.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Who needs ISO 27001 certification in the UAE? <MdKeyboardArrowDown className="text-purple-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Any organization handling sensitive information — such as banks, IT companies, healthcare providers, and government contractors — can benefit from ISO 27001 certification. Many UAE companies also require it for regulatory compliance and business credibility.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        What are the steps to obtain ISO 27001 certification in Dubai? <MdKeyboardArrowDown className="text-purple-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">The process includes:</p>
                      <ul className="space-y-2 mt-4">
                        <li className="flex gap-3 items-start">
                          <MdCheckCircle className="text-purple-600 shrink-0 text-sm" />
                          <span className="text-gray-700">Gap analysis – Identifying areas for improvement</span>
                        </li>
                        <li className="flex gap-3 items-start">
                          <MdCheckCircle className="text-purple-600 shrink-0 text-sm" />
                          <span className="text-gray-700">ISMS implementation – Developing security policies & controls</span>
                        </li>
                        <li className="flex gap-3 items-start">
                          <MdCheckCircle className="text-purple-600 shrink-0 text-sm" />
                          <span className="text-gray-700">Internal audit – Ensuring compliance with ISO 27001</span>
                        </li>
                        <li className="flex gap-3 items-start">
                          <MdCheckCircle className="text-purple-600 shrink-0 text-sm" />
                          <span className="text-gray-700">Certification audit – Conducted by an accredited certification body</span>
                        </li>
                      </ul>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        How can your consultancy help with ISO 27001 certification? <MdKeyboardArrowDown className="text-purple-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        WIZMS offers end-to-end support, including risk assessment, policy drafting, employee training, internal audits, and certification guidance — ensuring a smooth and successful process.
                      </p>
                      <p className="text-gray-700 mt-3">
                        To know about <Link href="/iso-27001-advantages-and-disadvantages" className="text-purple-600 hover:text-purple-800">ISO 27001 advantages and disadvantages</Link>
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Does ISO 27001 certification need to be renewed? <MdKeyboardArrowDown className="text-purple-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        Yes, ISO 27001 certification is valid for three years. However, annual surveillance audits are required to maintain compliance.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Can we use this SWOT analysis for ISO 27001 certification, or should the SWOT be more focused on security aspects? <MdKeyboardArrowDown className="text-purple-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        SWOT analysis for ISO 27001 is not mandatory, but it can help for the identification of organizational context and requirements of interested third parties. Considering that, the SWOT analysis of ISO 9001 certification can be used for ISO 27001, you can include an information security perspective on the information that is already gathered.
                      </p>
                    </details>

                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        Why should startups get ISO 27001 Certification? <MdKeyboardArrowDown className="text-purple-600 text-xl faq-icon" />
                      </summary>
                      <p className="text-gray-700 mt-4">
                        <Link href="/why-should-startups-get-iso-27001-certification" className="text-purple-600 hover:text-purple-800">ISO 27001 for startups</Link> guides the organization why they must invest in ISO 27001 certification for startups, and how ISO certification implementation will offer your startup company a much needed competitive edge which you have been looking for.
                      </p>
                    </details>
                  </div>
                </div>

                <div className="mt-10 space-y-4 text-gray-700">
                  <p>
                    Wizms can normally save you time and money by drafting your ISMS ISO 27001. This can also help to achieve certification faster than doing it yourself. Please contact us today to find out how we can help your business with ISO 27001 implementation and certification.
                  </p>
                  <p>
                    Wizms is the best ISO 27001 certification consultancy in Dubai, UAE, Sharjah who focuses on cybersecurity and digital authenticity. We offer top class consulting in ISO 27001 certification services in UAE. Wizms is one of the fastest growing ISO Certification consulting companies in UAE with international experience.
                  </p>
                  <p>
                    The best ISO 27001 consultancy Dubai offer ISO certification in <Link href="/iso-certification-in-uae" className="text-purple-600 hover:text-purple-800">UAE</Link>, <Link href="/iso-certification-sharjah" className="text-purple-600 hover:text-purple-800">Sharjah</Link>, <Link href="/iso-consultant-in-abudhabi" className="text-purple-600 hover:text-purple-800">Abu Dhabi</Link>, Ras al-Khaimah, Ajman, Al Ain and Fujairah. Most of the organizations prefer to increase the performance of the employees by securing their information.
                  </p>
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
                  <Link href="/iso-14001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 14001</p>
                    <p className="text-sm text-gray-600">Environmental Management</p>
                  </Link>
                  <Link href="/iso-50001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 50001</p>
                    <p className="text-sm text-gray-600">Energy Management</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-purple-500 to-purple-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Secure your information with ISO 27001 certification in 4-6 weeks.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-purple-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-purple-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="ISO 27001 - Information Security Management System" bgColor="from-purple-600 to-purple-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 27001 Certification in UAE | Information Security Management | Wizms',
          description: 'ISO 27001 Certification in Dubai, UAE. Professional Information Security Management System consultancy.',
          author: { '@type': 'Organization', name: 'Wizms', url: 'https://wizms.net' },
        })}
      </script>
    </>
  );
}
