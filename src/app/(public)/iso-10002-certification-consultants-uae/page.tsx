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
  const page = await getConsultantPageBySlug('iso-10002-certification-consultants-uae');
  return {
    title: page?.meta_title || undefined,
    description: page?.meta_description || undefined,
    keywords: page?.meta_keywords || undefined,
  };
}

export default function ISO10002Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 10002 Certification</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">ISO 10002 Certification Consultant in Dubai, UAE</h1>
                <p className="text-gray-700 mb-4">
                  Product plays a vital role in an upcoming organization. Companies always try to create best product in order to satisfy the needs of the customer. They update the quality of the product often. Also, they want their brand or product to be reached in every city and keen in maintaining the reputation of the company. Companies welcome complaints from the customers. Because complaints are considered to be gold for business.
                </p>
                <p className="text-gray-700 mb-6">
                  ISO, an international standard organization, developed ISO 10002 standard to manage the complaints from the customers and keep them satisfied.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What is ISO 10002?</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 10002 is a complaint handling process developed in 2014 for all types and size of organizations and all sectors. The complaints-handling process is suitable to implement as one of the processes of an overall quality management system. ISO 10002 standard helps to identify the complaints, their cause and how to rectify the complaints effectively and efficiently.
                  </p>
                  <p className="text-gray-700">
                    ISO 10002 assists the companies to take the complaints about their product from the unsatisfied customers and in turn to improve the quality of the product for the future customers. The current version of ISO 10002 certification is the ISO 10002:2014. It will be reviewed and replaced by the ISO 10002:2019.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Ways to implement ISO 10002 certification in your company</h2>
                  <p className="text-gray-700 mb-4">ISO 10002 Certification can be implemented in five steps. Also, ISO 10002 checklist is listed below:</p>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Choose the <Link href="/" className="text-blue-600 hover:text-blue-800">best ISO 10002 Certification consultant in Dubai</Link> and rest of UAE.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Our ISO 10002 consultants perform self-assessment of your compliance with the ISO 10002 requirements in Dubai, UAE.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Contact with a certification body accredited by the ISO certification in UAE.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Conduct ISO 10002 audit procedures developed by your company</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">If the audit ISO 10002 is successful, the ISO 10002 certification will be issued.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">If the audit ISO 10002 is unsuccessful, you will receive a list of improvements to do before trying again.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">The ISO 10002 certification is valid for one year and can be renewed after a new audit.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">All about ISO 10002 standard:</h2>
                  <p className="text-gray-700">
                    ISO 10002 Certification consultant in Dubai will implement ISO 10002 standard better than others. ISO 10002 standard adopts quality management system to guarantee customer satisfaction. If the organization is ready to accept the complaints as an opportunity to improve the quality of the product, then it is the right time to identify the loopholes and provide best ISO consultancy services to the customers that can be improved eventually. Wizms, the best ISO certification in UAE provides the organization a required solution. Annexure A of ISO 10002 standard provides guidance for the small organizations.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Important factors of ISO 10002 Certification:</h2>
                  <ul className="space-y-2 mb-4">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">The commitment provided by the top-level management is the basic requirement to implement ISO 10002 certification. ISO 10002 audit in Dubai will guarantee the commitment of top-level management.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">An organization must conduct awareness training to the employees, stakeholders and other interested parties who implement ISO 10002 certification in UAE.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Organize a team to analyse, control and maintain the requirements of ISO 10002 certification</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">With the help of the ISO consultant in UAE, define the scope of the project.</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Customers always rely on the ISO consulting services team to bring up their end product to be satisfied by the customers. ISO certification bodies in UAE helps the organization to achieve ISO 10002 certification.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 10002 certification process</h2>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Survey for company requirements and the standard requirement is done to produce a detailed GAP analysis report.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Based on the detailed study of all activities within an organization, documents are prepared, as required by ISO 10002:2018 standards.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Provide awareness training to all employees within an organization.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Employees will be trained on ways to conduct an internal audit to check readiness for ISO 10002 certification.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Apply for ISO 10002 certification and avail pre-certification audit of certifying body and take actions on suggestions given by them.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">Perform the final audit and take appropriate actions on the defects and risks found to satisfy the certifying body.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-rose-600 shrink-0 mt-1 text-lg" />
                      <span className="text-gray-700">You will receive an ISO 10002 certification once you pass all the assessments. This certificate is valid for three years.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <p className="text-gray-700">
                    ISO 10002 provides guidance on the process of complaints handling related to products within an organization, including planning, design, operation, maintenance, and improvement. The complaints-handling process is suitable to implement as one of the processes of an overall quality management system. On the other hand, it does not apply to disputes referred for resolution outside the organization or for employment-related disputes.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 10002:2018 Certification</h2>
                  <p className="text-gray-700">
                    ISO 10002:2014 Certification, now revised to ISO 10002:2018. ISO 10002:2018 provides guidance on the process of customer satisfaction complaints handling related to products within an organization. ISO 10002:2018 includes planning, design, operation, maintenance, and improvement. The complaints-handling process described by ISO 10002:2018 standard is suitable for use as one of the processes of an overall quality <Link href="/iso-9001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 9001 Certification</Link> management system.
                  </p>
                </div>

                <div className="mt-12">
                  <style>{faqStyle}</style>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ of ISO 10002 Certification</h2>
                  <div className="space-y-4">
                    <details open className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is ISO 10002 Certification? <MdKeyboardArrowDown className="text-rose-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 10002:2018 Certification is an International Standard for quality management and customer satisfaction, which can be followed by organizations of all sizes in all sectors. An unhappy customer will tell people about their bad experience damaging your reputation. Thus ISO 10002 standard can be used to improve the experience of future customers by taking the input of the unsatisfied customers.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is customer handling in ISO 10002 Customer Satisfaction? <MdKeyboardArrowDown className="text-rose-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Clients hope for something else and more from the services that you provide. <Link href="/iso-10002-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 10002 certification in Dubai</Link>, is the international standard for consumers loyalty. It gives you rules for setting up your own grumblings management system like helping you to recognize objections, their motivation and how to dispense with them. ISO 10002 will permit you to distinguish regions in your business where you can improve and inevitably eliminate the reason for objections.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What are the benefits of ISO 10002 certification? <MdKeyboardArrowDown className="text-rose-600 text-xl faq-icon" /></summary>
                      <div className="text-gray-700 mt-4">
                        <ul className="space-y-2">
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Achieve operational productivity to recognize patterns and reasons for complaints.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Resolve more objections by receiving a more customer focused methodology.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>A point new staff with new client service training opportunities.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Incorporate ISO 10002 certification with <Link href="/iso-9001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 9001 certification</Link> to improve in general effectiveness.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Implementing ISO 10002 certification in UAE customer complaints management.</span>
                          </li>
                        </ul>
                      </div>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What are the top tips for implementing ISO 10002 certification? <MdKeyboardArrowDown className="text-rose-600 text-xl faq-icon" /></summary>
                      <div className="text-gray-700 mt-4">
                        <ul className="space-y-2">
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Get support from senior manager.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Compare existing system with the requirements of ISO 10002.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Get the feedback from the customer.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Set up an implementation team to get the best outcomes.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Follow the principles of ISO 10002 certification, UAE.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Train the staff and help them to move towards the ISO 10002 certification.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Consistently audit your ISO 10002 certification.</span>
                          </li>
                        </ul>
                      </div>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How to get ISO 10002 certification? <MdKeyboardArrowDown className="text-rose-600 text-xl faq-icon" /></summary>
                      <div className="text-gray-700 mt-4">
                        <p className="mb-2">Wizms, the best <Link href="/" className="text-blue-600 hover:text-blue-800">ISO consultant in Dubai</Link> will make the certification process straightforward. After you apply, we choose a customer administrator who will control you and your business through the following steps.</p>
                        <ul className="space-y-2">
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Gap Analysis</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Formal appraisal</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Certification and beyond that</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Coordinate your systems</span>
                          </li>
                        </ul>
                      </div>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What are the benefits of ISO 10002 Complaints Management System Certification? <MdKeyboardArrowDown className="text-rose-600 text-xl faq-icon" /></summary>
                      <div className="text-gray-700 mt-4">
                        <ul className="space-y-2">
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Ability to hold the reliability of clients.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Implementation and certification guarantees a consistent process to deal with clients, which empowers to recognize reasons and wipe out the reasons for complaints.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-rose-600 shrink-0 text-sm" />
                            <span>Adapt customer-focused approach to deal with examination and audit complaints.</span>
                          </li>
                        </ul>
                      </div>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is the basis of ISO 10002 certification for continuous improvement? <MdKeyboardArrowDown className="text-rose-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">The ISO 10002:2014 standard, presently updated to ISO 10002:2018, gives guidelines about the complaints handling related to products inside an organization. This incorporates arranging, plan, activity, maintenance, and improvement. The ISO 10002 standard deals with complaints handling, is appropriate for the use quality management system (QMS).</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Can you tell me briefly about the ISO 10002 certification that ensures it? <MdKeyboardArrowDown className="text-rose-600 text-xl faq-icon" /></summary>
                      <div className="text-gray-700 mt-4">
                        <p className="mb-2">ISO 10002 certification will guarantee:</p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Better client relationship.</li>
                          <li>Ceaseless improvement of processes.</li>
                          <li>A straightforward system.</li>
                          <li>More elevated levels of consumer loyalty.</li>
                          <li>Brand improvement.</li>
                          <li>Focusing the management.</li>
                        </ul>
                      </div>
                    </details>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-gray-700">
                    Wizms is the best ISO consultant in UAE and provides ISO consulting services in Dubai, Abu Dhabi, Sharjah, Ras al-Khaimah, Ajman, Al Ain and Fujairah. Wizms ISO consultant in Dubai offers top-class ISO consultancy services including ISO Consulting, ISO Certification, ISO Training in UAE, Gap analysis, Documentation, Implementation, and ISO Certification audits in UAE.
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
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-rose-500 to-rose-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Improve customer satisfaction with ISO 10002.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-rose-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-rose-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="ISO 10002 - Customer Satisfaction & Complaint Handling" bgColor="from-rose-600 to-rose-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 10002 Customer Satisfaction Certification in UAE | Wizms',
          author: { '@type': 'Organization', name: 'Wizms' },
        })}
      </script>
    </>
  );
}
