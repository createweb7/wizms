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
  const page = await getConsultantPageBySlug('iso-31000-certification-consultants-uae');
  return {
    title: page?.meta_title || undefined,
    description: page?.meta_description || undefined,
    keywords: page?.meta_keywords || undefined,
  };
}

export default function ISO31000Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 31000 Certification Consultants in UAE</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">ISO 31000:</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  ISO 31000 is an international standard that specifies the requirements of risk management. ISO 31000 provides a set of principles and guidelines, risk management system and process that helps the organization to manage the risk. ISO 31000 standard helps the organization to develop, implement and improve the system that integrates risk management strategies into organization&apos;s processes including decision-making. ISO 31000 is designed to simplify the complex situations by making crucial decisions by moving towards the structured approach of identifying and judging the risks.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 31000 Certification</h2>
                  <p className="text-gray-700">
                    ISO 31000 Certification enables the organizations to comprehend the fundamental concepts about Risk Management and understand the importance and benefits of ISO 31000 standard. The organizations of any sector who are interested in understanding the processes and strategies of ISO Risk Management are applicable to get ISO 31000 certification.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How to become iso 31000 certified organization?</h2>
                  <p className="text-gray-700 mb-4">
                    Being ISO 31000 certified means that you are securing your organization from risks that could endanger the efficiency, governance, and stakeholders&apos; confidence. ISO 31000 standard will provide support and allow the top-level management team to identify opportunities, threats and risks. ISO 31000 certification will help to achieve the strategic objectives of the organization by establishing a risk-based system of values.
                  </p>
                  <p className="text-gray-700">
                    ISO 31000 certification in UAE does provide guidance for internal or external audit programs. Organizations that are ISO 31000 certified can compare their risk management practices with an internationally recognized benchmark, providing principles for effective management and corporate governance.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest version of ISO 31000:2018</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 31000:2018 provides guidelines and principles on managing the risk faced by the organizations. All these guidelines can be customized to any organization and its context. ISO 31000:2018 provides a basic approach to manage any type of risk. ISO 31000:2018 can be used throughout the life of the organization and can be applied to decision-making at all levels.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The latest version of ISO 31000 standard focuses on the integration, the role of leaders and their responsibility. ISO 31000 lead risk manager are often at the margins of organizational management and this emphasis will help them to demonstrate that risk management is an integral part of business.
                  </p>
                  <p className="text-gray-700">
                    Each section of the ISO 31000:2018 standard was reviewed in the spirit of clarity, using simpler language to facilitate understanding and make it accessible to all stakeholders. The 2018 version places a greater focus on creating and protecting value of risk management and features other principles such as continual improvement, the inclusion of stakeholders, being customized to the organization and consideration of cultural and human factors.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Importance of ISO 31000 Risk Management</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 31000 will guide the organizations towards identifying potential risks that could endanger the achievement of crucial objectives. ISO 31000 standard will help them to determine which risks are essential to achieve primary objectives before they affect the business, while effectively keeping all other ISO risk management under control.
                  </p>
                  <p className="text-gray-700">
                    Furthermore, when an organization achieves ISO 31000 risk management system, proves that they have undergone proper professional training and enhancing the risk management and risk identification skills. Companies in UAE need a certified ISO 31000 risk management professional who helps to formulate and correctly implement strategies and solutions to improve and protect the needs of the organization. Attending ISO 31000 training will be beneficial because it makes them more marketable to employers, as nowadays iso risk management standards are crucial.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of ISO 31000 Certification:</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                      <span>Helps to develop a risk management strategy to effectively and mitigate the risks</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                      <span>Enhance likelihood of achieving the objectives and increase the protection of their assets</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                      <span>Identify both positive and negative consequences associated with risk.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                      <span>Based on the risk, identify the areas for allocation of resources</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                      <span>Improve organization's governance and ultimately its performance.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What will ISO 31000 Consultants do?</h2>
                  <p className="text-gray-700">
                    We as consultants, interact with the various departments based on the scope of the organization, study their process, identify the risk, assist in risk analysis and risk treatment, set objectives and targets to show the performance and streamline the activities and functions as per the standard requirements. In addition, we provide guidance for implementation of the standard and ensure that the implementation is in place across all departments.
                  </p>
                </div>

                <div className="mt-12">
                  <style>{faqStyle}</style>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ of ISO 31000 Certification</h2>
                  <div className="space-y-4">
                    <details open className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is ISO 31000 certification? <MdKeyboardArrowDown className="text-indigo-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 31000 certification is a global standard created to help associations of any size and manage the risks successfully. ISO 31000 certification in Dubai gives the standards, structure and nonexclusive process to deal risk management in an efficient way. ISO 31000 certification in UAE is promoted as a useful archive to assist associations with building up their own way to deal with risk.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is the method used to get duplicate copy of ISO 31000 certification for my organization? <MdKeyboardArrowDown className="text-indigo-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">The ISO standards are not free. Duplicates of ISO 31000:2009, Risk management - Risk management vocabulary, Principles and Guidelines, collections of terms and definitions identified with risk management, can be bought from the ISO Central Secretariat, or through the ISO Store. The reports are likewise accessible at ISO public member institutions.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Can my business get ISO 31000-certified? <MdKeyboardArrowDown className="text-indigo-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 31000 certification in Dubai is not a standard in which associations can try to be guaranteed. By executing ISO 31000 certification in UAE, associations can compare their risk management practices with a globally perceived benchmark that gives standards to effective management.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Who is responsible to get ISO 31000 certificate documents in an organization? <MdKeyboardArrowDown className="text-indigo-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 31000 certification in Dubai ought to be seen by:</p>
                      <div className="mt-2 space-y-2">
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Anybody answerable for executing risk management inside an association.</span>
                        </div>
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Individuals who need to guarantee that the association is managing risks.</span>
                        </div>
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Individuals who need to assess an association's practices in managing risks.</span>
                        </div>
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Developers of guidelines, aides, strategies and codes of work related to management risks.</span>
                        </div>
                      </div>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is the reason to select Wizms Management Solutions for ISO 31000 Certification in Dubai? <MdKeyboardArrowDown className="text-indigo-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Wizms is the best{' '}
                        <Link href="/" className="text-blue-600 hover:text-blue-800">ISO 31000 certification consultant in Dubai</Link>
                        , UAE. Our ISO 31000 consultant in UAE assist the organizations to execute unmistakable risk management plans and structures, adjusting to the specific set of principles. Here are some of the advantages of joining with Wizms include:
                      </p>
                      <div className="mt-2 space-y-2">
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                          <span className="text-gray-700">100% of data security and privacy is maintained.</span>
                        </div>
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Straightforward process and SLA adherence.</span>
                        </div>
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Certified specialists and best in the business pricing.</span>
                        </div>
                      </div>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What are the principle components of the ISO 31000 risk management process? <MdKeyboardArrowDown className="text-indigo-600 text-xl faq-icon" /></summary>
                      <div className="mt-4 space-y-2">
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Convey and consult.</span>
                        </div>
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Build up the specific circumstance.</span>
                        </div>
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Recognize the risk.</span>
                        </div>
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Break down the risks.</span>
                        </div>
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Assess the risk.</span>
                        </div>
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Treat the risk.</span>
                        </div>
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-indigo-600 shrink-0 mt-1" />
                          <span className="text-gray-700">Screen and survey.</span>
                        </div>
                      </div>
                    </details>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Wizms for ISO 31000 Certification</h2>
                    <p className="text-gray-700">
                      Organizations takes the control over the advantage of being certified with ISO 31000 in Dubai with legitimate help of an ISO consultant in Dubai, UAE like Wizms. To find out about how Wizms deal with ISO 31000 Certification, the courses of events, and estimating structure,{' '}
                      <Link href="/contact" className="text-blue-600 hover:text-blue-800">contact us</Link>
                      {' '}today.
                    </p>
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
                  <Link href="/iso-27001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 27001</p>
                    <p className="text-sm text-gray-600">Information Security</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-indigo-500 to-indigo-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Manage risks effectively with ISO 31000 certification.</p>
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
