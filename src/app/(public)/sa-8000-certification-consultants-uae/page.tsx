import Link from 'next/link';
import { Metadata } from 'next';
import { getConsultantPageBySlug } from '@/lib/supabase-data';
import { MdCheckCircle } from 'react-icons/md';
import EnquiryForm from '@/components/EnquiryForm';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getConsultantPageBySlug('sa-8000-certification-consultants-uae');
  return {
    title: page?.meta_title || undefined,
    description: page?.meta_description || undefined,
    keywords: page?.meta_keywords || undefined,
  };
}

export default function SA8000Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">SA 8000 Certification Consultants in UAE</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">SA 8000:</h1>

                <p className="text-gray-700 mb-4">
                  SA 8000 is an audit standard. SA 8000 principles are compatible with ISO 9001, ISO 14001, OHSAS 18001 standards. SA 8000 meaning is Social Accountability. SA 8000 standard involves auditing the management system that encourages organizations to develop, maintain socially acceptable working practices and brings benefit to the supply chain.
                </p>

                <p className="text-gray-700 mb-6">
                  SA 8000 standard is addressed in the areas like forced and child labour, health and safety, freedom of association and collective bargaining, disciplinary practices, working hours, compensation and management systems.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">SA 8000 Certification</h2>
                  <p className="text-gray-700">
                    SA 8000 Certification is an international standard that specifies the requirements of Social Accountability 8000. SA 8000 certification has helped many companies in Dubai to prevent human issues which are crucial. Employees are a very big asset for most of the organizations in Dubai that they have to be secured and stay back for a long term. Most of the SA 8000 certified companies have their key employees for a long term.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">SA 8000 Certification in Dubai</h2>
                  <p className="text-gray-700 mb-4">
                    SA 8000 consultants in Dubai provide SA 8000 certification in Dubai. Services provided by our SA 8000 consultants are SA 8000 Consulting, SA 8000 Certification, Training, Gap analysis, Documentation, Implementation, and SA 8000 audit in Dubai. The compliance of SA 8000 requirements from the Dubai government where in your organization has to be complied with.
                  </p>
                  <p className="text-gray-700">
                    There is a drastic requirement for SA 8000 certification in Dubai. Because the government wants the companies to strictly follow the principles of SA 8000 certification. SA 8000 in Dubai is one of the best practices that helps the employees to be safe and secure.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">SA 8000 Certification in UAE</h2>
                  <p className="text-gray-700">
                    SA 8000 certification in UAE helps the organization to double check the security features that increases the reputation as well as the brand value of a product. It is always advisable to have a third-party SA 8000 audit that helps to identify the loopholes. SA 8000 certification in Sharjah increases the confidence level of the customers which gives an impact on the company's profit margin. SA 8000 certification cost in UAE is certified at affordable price.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How to get SA 8000 certified?</h2>
                  <p className="text-gray-700">
                    Wizms is one of the leading SA 8000 certification consultants available in the certification industry. SA 8000 consultant in Dubai are highly experienced in any industry sector. Wizms believe in customer satisfaction and SA 8000 implementation rather than SA 8000 certification. Being a SA 8000 consultant in Abu Dhabi, the objective is to help the customers get benefits from SA 8000 standard. SA 8000 Certification cost is minimal and affordable for all our customers.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">SA 8000 standard focus on</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Prohibits child labour.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Prohibits discrimination.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Minimal wages has to be provided for all employees in the organization.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Top-level management is responsible for the health and safety of employees.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Employees can bargain their salary.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Management has to set standard working hours.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of SA 8000 certification:</h2>
                  <p className="text-gray-700 mb-4">Social Accountability 8000 management will benefit your business by:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Enhances the brand value, and reputation</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Attracts new customers</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Attracting the customers to invest</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Creating new opportunities</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Demonstrating transparency to stakeholder</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Provides an edge over non-approved competitors</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Reason for getting SA 8000 certification:</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Consumers have become increasingly concerned about whether products have been manufactured under conditions of human rights, child labour and discrimination.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>The existing management of many companies cannot adequately cope up with the demands imposed by labour laws, codes of conduct of individual companies, as well as their stakeholders.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>A greater challenge is to effectively monitor whether the manufacturers and suppliers have implemented SA 8000 certification.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10 bg-pink-50 border-l-4 border-pink-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">SA 8000 audit:</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>SA 8000 audit, SA 8000 certification and verification services are well known in the marketplace as a benchmark for assurance.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>SA 8000 audit report is generated that covers the entire value chain from product certification to process, organisation, service and systems certification.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                      <span>Our SA 8000 certification consultants are specialists in every industry and sector, wherever you are in the world. SA 8000 consultants in Dubai offers advanced testing facilities that provide prompt responses, and extra additional services to add value.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ - SA 8000 certification</h2>
                  <div className="space-y-4">
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is SA 8000 Certification in Dubai, UAE? <span className="text-pink-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">The Social Accountability 8000:2014 Standard is the leading social certification standard for factories and organizations across the globe. It was established by Social Accountability International in 1997 as a multi-stakeholder initiative. Over the years, the Standard has evolved into an overall framework that helps certified organizations demonstrate their dedication to the fair treatment of workers across industries and in any country.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is covered under the SA 8000 standard? <span className="text-pink-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">SA8000 certification in Dubai is a social management and certification system intended to help manufacturing organizations with least social and moral guidelines. These standards were created in late 90s dependent on the Declaration of Human Rights just as suggested by the Worldwide Labour Organization (ILO). SA8000 certification in Dubai is practically identical in structure with the <Link href="/iso-9001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 9001 certification in Dubai</Link> and ISO 14001 certification, which contain a scope of strict norms governing issues such as others conscious working conditions or the ban on child labour.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How would an auditor help to prepare SA8000 checklist? <span className="text-pink-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <div className="text-gray-700 mt-4">
                        <p className="mb-3">SA8000 checklists are legitimately prepared by SA8000 auditors. Auditors are very keen on conducting SA8000 audit checklist that can be done on one of two different ways:</p>
                        <ul className="space-y-2">
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                            <span>Turning out straightforwardly for a Certification Body, or</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <MdCheckCircle className="text-pink-600 shrink-0 mt-1" />
                            <span>Filling in as an individual auditor accessible by authorized CBs.</span>
                          </li>
                        </ul>
                      </div>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How does an ISO consultant help to get SA8000 certification? <span className="text-pink-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">Wizms, best <Link href="/" className="text-blue-600 hover:text-blue-800">ISO consultant in Dubai</Link> meet and discuss with managerial and worker team in the organization, study the existing gap, and develop the system, set objectives and targets to improve the performance and streamline the activities and functions as per the standard requirements. In addition, we provide guidance for implementation of the standard and ensure that the implementation is in place.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Who is suited for the SA8000 standard? <span className="text-pink-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">The Social Accountability 8000 management and certification system is responsible for any organization that needs to enable its workers and their families by focusing on social duties. Moreover, the SA8000 certification is appropriate for product suppliers and commercial chains regardless of their size, industry or area.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Does the standard also integrate with existing quality and Occupational management systems? <span className="text-pink-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">Truly, SA8000 can be completely coordinated. For example, If you need to report your corporate duty towards individuals and the environment, you may wish to join SA8000 with certified environmental management under <Link href="/iso-14001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 14001 certification in UAE</Link> or EMAS.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Does the standard cover sub-contractors? <span className="text-pink-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">Truly, SA8000 covers sub-temporary workers such as suppliers and other third parties related with the confirmed organization, if they fall under the organization's domain and influence.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Whether the sub-contractors are also audited? <span className="text-pink-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">Organizations are liable for auditing their suppliers and sub-contractual workers. As such, auditors do not investigate these sub-contractual workers legitimately, yet rather confirm that the ensured organization has set up an effective monitoring practice.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Whether internal audits are required for SA 8000 certification? <span className="text-pink-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">Indeed, internal audits is required. Organizations are needed to guarantee the compliance of SA 8000 checklist with the necessities of SA8000. These internal audits are expected to happen at least once in a year.</p>
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
                  <Link href="/iso-45001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 45001</p>
                    <p className="text-sm text-gray-600">Health & Safety</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-pink-500 to-pink-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Ensure ethical labor practices with SA 8000.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-pink-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-pink-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="SA 8000 - Social Accountability" bgColor="from-pink-600 to-pink-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'SA 8000 Social Accountability Certification in UAE | Wizms',
          author: { '@type': 'Organization', name: 'Wizms' },
        })}
      </script>
    </>
  );
}
