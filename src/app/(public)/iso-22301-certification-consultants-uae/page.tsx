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
  const page = await getConsultantPageBySlug('iso-22301-certification-consultants-uae');
  return {
    title: page?.meta_title || undefined,
    description: page?.meta_description || undefined,
    keywords: page?.meta_keywords || undefined,
  };
}

export default function ISO22301Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 22301 Certification</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">BCMS ISO 22301 Certification Consultants in Dubai, UAE</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Wizms offers Business Continuity Management System (BCMS) ISO 22301 Certification in UAE, Dubai that is valid for 3 years. BCM certification in UAE describes how to manage the business continuity in a company by establishing framework, implement and plan. An organization can get ISO 22301 standard from certified ISO certification bodies and hence they can prove its compliance to their customers, partners, clients.
                </p>
                <p className="text-gray-700 mb-4">
                  Business Continuity Management System intends to protect organizations from a wide range of dangers related to downtime, which can happen due to unexpected disasters or disruptions. Interruptions to the business can result in data risk breakdown, profit loss, and unsuccessful to deliver regular client services according to the service level agreements.
                </p>
                <p className="text-gray-700 mb-6">
                  ISO standard is the best standard for your association if you have to exhibit to partners that your organization can quickly overcome operational interruption to provide continued and effective services. ISO 22301 BCMS certification will direct an organization on how best to plan for such eventualities.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Importance of BCMS ISO 22301 Certification in Dubai, UAE for an organization</h2>
                  <p className="text-gray-700 mb-4">
                    BCM ISO 22301 certification provides an organization with the power of giving a premium level of services to their investors regardless of the conditions. ISO 22301 BCMS recognizes the capability to safeguard data backups, reduce major losses, and increase the recovery time of critical faculty.
                  </p>
                  <p className="text-gray-700">
                    By getting ISO 22301 business continuity management system, an organization can upgrade their skills and knowledge; they will be able to advise their employees on best practices of ISO business continuity.
                  </p>
                </div>

                <div className="mb-10 bg-teal-50 border-l-4 border-teal-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How ISO 22301 Works</h2>
                  <p className="text-gray-700 mb-4">ISO 22301 focuses on the continuity of the business after the delivery of products and services. The working process of ISO 22301 is:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-teal-600 shrink-0 mt-1" />
                      <span>Perform business impact analysis and find out the ISO business continuity priorities.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-teal-600 shrink-0 mt-1" />
                      <span>Analyse the disruptive events that can affect the business continuity.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-teal-600 shrink-0 mt-1" />
                      <span>Define how to prevent the disruptive events from happening.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-teal-600 shrink-0 mt-1" />
                      <span>Define how to recover the risk in shortest time period.</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">The strategies to implement ISO 22301 standard must be recorded in terms of policies, procedures and must be documented.</p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 22301 Certification in Dubai, UAE</h2>
                  <p className="text-gray-700 mb-4">
                    To get BCMS ISO 22301 certification in Dubai, UAE choose the best ISO 22301 certification consultant in Dubai, UAE. Wizms is the best ISO 22301 certification consultancy in Dubai with an impeccable experience of helping the organization to get ISO 22301 certification quickly and easily.
                  </p>
                  <p className="text-gray-700">
                    Our ISO certification consultancy will help you get through an easy procedure that allows your firm to obtain ISO certification within 4-6 weeks. Our team is specialized in Business Continuity Management Systems and gives a detailed study of your organizational activities along with documentation of the procedure under ISO 22301 standard requirements. Our systematic approach ensures that you obtain ISO 22301 certification on the first attempt.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 22301 Certification Cost in Dubai</h2>
                  <p className="text-gray-700">
                    BCMS ISO 22301 certification cost in Dubai depends upon the organization. Wizms offers the best quality ISO 22301 certification for all companies in Dubai and rest of UAE at an affordable cost, and we provide the certification within 4-6 weeks.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Wizms - Our Advice</h2>
                  <p className="text-gray-700">
                    To get ISO 22301 certification in Dubai, contact our ISO consultants. They provide the solution for risks, consulting, certification and auditing services. You can reach Wizms by visiting www.wizms.net and can have a chat with ISO experts team or contact karthiga@wizms.net so that our experts will reach you in the shortest time period and provides better solution to achieve ISO 22301 certification.
                  </p>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs - ISO 22301 Certification in Dubai, UAE</h2>
                  <p className="text-gray-700 mb-4">Our ISO 22301 Certification consultant in Dubai have gathered the main queries and provided a perfect solution regarding ISO 22301 certification.</p>
                  <div className="space-y-4">
                    <style>{faqStyle}</style>
                    <details open className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is ISO 22301 certification in Dubai, UAE? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 22301 certification in Dubai is an international standard for Business Continuity Management (BCM). It is intended to enable associations to prevent, plan for, react to and recover from unexpected and problematic incidents. ISO 22301 certification in Dubai plans to defend an association from a wide scope of possible threats and interruptions.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How much does ISO 22301 Certification Cost? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 22301 Certification Cost differs upon variables such as size and complexity of your organization, scope of BCMS, utilization of ISO consultancy services, and choice of the Certification Body.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Which organizations apply the ISO 22301 Standard? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Organizations that need to:</p>
                      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>Set up a new BCM or improve their current BCM.</li>
                        <li>Utilize their management system to ensure similarity.</li>
                        <li>Document the similarities for third parties.</li>
                      </ul>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How much does the implementation of ISO 22301 Certification Cost? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">If you have your own resources to implement ISO 22301 certification, you need to provide them adequate training, time for documentation, separate time for auditing and so forth. But if you decide to use an expert ISO Consultants in Dubai like Wizms, ISO 22301 certification costs are based on the number of days taken by an ISO consultant in Dubai.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What criteria and areas do our experts access during ISO 22301 certification? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">During implementation of ISO 22301 certification in Dubai, our ISO consultant in Dubai analyse and evaluate the following areas of BCMs:</p>
                      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>Policy of BCM.</li>
                        <li>Scope of BCM.</li>
                        <li>Specifications for the BCM.</li>
                      </ul>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is business continuity management? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">BCM (Business Continuity Management) is the way associations manage and react to issues. The point is to permit crucial capacities to keep working in case of disturbances. This incorporates anything from bad climate to digital attacks.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How to understand the ISO 22301 certification cost? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">An ISO consultant in Dubai will assist you in understanding the ISO 22301 Certification costs by checking the management system, arranging the project, drafting the documents, organizing non-problematic tests, dealing with ISO 22301 internal audits checklist and supporting the external audits.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is the reason to get ISO 22301 Certification in Dubai, UAE? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 22301 Certification in UAE, Dubai sets out the requirements for a BCMS and is viewed as an incredible system for effective BCM.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What are the works to be done to get ISO 22301 Certification in Dubai, UAE by an ISO consultant in Dubai? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" /></summary>
                      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-1">
                        <li>Demonstrate to existing and new customers that they have an effective BCMS that will empower the service delivery in case of an incident.</li>
                        <li>Get a free assessment about the viability of their business progression.</li>
                        <li>Certification includes customary surveys and ISO 22301 self-assessment checklist, and ISO 22301 internal audits of the BCMS to ensure it improves gradually.</li>
                        <li>Meet the requirements of the management.</li>
                      </ul>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is the main part of a BCMS? <MdKeyboardArrowDown className="text-teal-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">The main part of BCMS is making sure that you have accurately recognized the risks. If you plan for an incident that has minimal possibility of happening, then you are wasting the time of the resources. If you neglected to recognize a risk that happened, because you would have no way to deal with the circumstance.</p>
                    </details>
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

                <div className="mt-8 p-6 bg-linear-to-r from-teal-500 to-teal-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Ensure business continuity with ISO 22301 certification.</p>
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

      <EnquiryForm serviceType="ISO 22301 - Business Continuity Management System" bgColor="from-teal-600 to-teal-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 22301 Certification in UAE | Business Continuity Management | Wizms',
          author: { '@type': 'Organization', name: 'Wizms' },
        })}
      </script>
    </>
  );
}
