import Link from 'next/link';
import { Metadata } from 'next';
import { getConsultantPageBySlug } from '@/lib/supabase-data';
import { MdCheckCircle } from 'react-icons/md';
import EnquiryForm from '@/components/EnquiryForm';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getConsultantPageBySlug('sedex');
  return {
    title: page?.meta_title || undefined,
    description: page?.meta_description || undefined,
    keywords: page?.meta_keywords || undefined,
  };
}

export default function SEDEXPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">SEDEX</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">SEDEX Certification</h1>

                <p className="text-gray-700 mb-4">
                  Sedex is defined as Supplier Ethical Data Exchange introduced to drive ethical business practices. Sedex helps to maintain the ethical information in a simple way. Buyers can manage and view the ethical data and information for multiple suppliers in one place whereas Suppliers can share their ethical information or data for multiple buyers at another secure place. As such the chain moves on.
                </p>

                <p className="text-gray-700 mb-4">
                  The device utilized by SEDEX is SMETA (SEDEX Members Ethical Trade Audit). It fuses 3 components:
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                    <span>Best practice direction on leading moral exchange audits</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                    <span>Generating sedex audit report design and</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                    <span>Remedial activity plan group</span>
                  </li>
                </ul>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Advantages of SEDEX Certification</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                      <span>Simple to get to data or information.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                      <span>Creates Ethical policies</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                      <span>Manages and maintains business information or data appropriately</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                      <span>Improves business proficiency</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                      <span>Produce more noteworthy worker inclusion</span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-700 mb-6">
                  <Link href="/sedex-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">Sedex certification</Link> is designed to profit retailers, purchaser, and their providers, decreasing duplication of exertion in moral exchange auditing. Organizations who are not individuals from SEDEX Certification are capable to utilize SMETA. SEDEX Certification in Dubai is an extensive stage that empowers the compelling administration of complex worldwide supply chains, prompting genuine business benefits for your organization.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">SEDEX Certification Process</h2>
                  <p className="text-gray-700 mb-4">
                    SEDEX Certification process is as simple. Sedex is not a standard, sedex is an integration of implicit rules or confirmation. Rather the job of SEDEX standard is to empower you to effectively share and manage inventory network data, with the point of driving consistent improvement. SEDEX has two points, one is to facilitate the weight on providers by having sedex audits, polls and affirmations, and the other is to drive upgrades in the moral execution of international supply chains.
                  </p>
                  <p className="text-gray-700">
                    Wizms is having a group of SEDEX Certification Consultants in Dubai who guide the customers and make SEDEX certification process speedy and successful. The SEDEX Certification is given by perceived certification bodies in Dubai who does SEDEX audit. After achieving SEDEX Certification, they complete yearly certification audit.
                  </p>
                </div>

                <div className="mb-10 bg-violet-50 border-l-4 border-violet-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">SEDEX Audit</h2>
                  <p className="text-gray-700 mb-4">
                    Sedex audit is a review done at the companies to assess the security features of the employee, check environmental and business ethics standards are being met. By getting Sedex Certification, companies in UAE helps the suppliers to share the same data with many customers that reduces the need for multiple Sedex audits and allows both parties to concentrate on process improvements. Sedex members are then allowed to store, share and report on ethical information in a secure, online database in an effort to improve working conditions in the global supply chain.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Sedex audits performed by SEDEX Consultants in UAE are designed to be accepted by all Sedex A and AB members, as well as other customers and stakeholders, in order to:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                      <span>Reduce audit fatigue by providing a format for audits that is widely accepted</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                      <span>Improving efficiency in the workplace</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                      <span>Enhance ethical trading programs</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                      <span>Answer the questions raised on ethical performance from non-government organizations and customers</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ - SEDEX Certification</h2>
                  <div className="space-y-4">
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is SEDEX? <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">SEDEX is Supplier Ethical Data Exchange. The SEDEX certification is a broadly perceived online platform where enrolled companies in UAE transparently share data about their social and ethical performance. SEDEX audits are conducted normally based on SMETA rules.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What are the steps in SEDEX audit? <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <div className="text-gray-700 mt-4 space-y-2">
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                          <span>Present a self-assessment form.</span>
                        </div>
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                          <span>Arrange for SEDEX audit at site.</span>
                        </div>
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                          <span>Issue a SEDEX audit report and CAPR</span>
                        </div>
                      </div>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Whether an organization can get a SEDEX Certificate after the SEDEX Audit? <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">No. Organization cannot get a certificate after a SEDEX audit. SEDEX audit brings about a review report which is then transferred to the SEDEX platform.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Who conducts these SEDEX audits? <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">Auditors who wish to conduct ethical audits can enrol with the SEDEX database, either through basic membership as an independent evaluator or by turning into a member from the SEDEX Audit Company Group. Invested members can utilize the platform to locate a reasonable evaluator for their organization.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Who does a SEDEX Audit? <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">SEDEX favours the agencies and who empanel APSCA certified auditors are responsible to conduct SEDEX audits.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is the amount of time required to get the SEDEX/SMETA audit? <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">A SMETA compliance audit can be arranged, executed and uploaded inside 7-10 days. You need to guarantee that you are prepared for it.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How to conduct a SEDEX Approved Audit? <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">You can contact Wizms, best <Link href="/" className="text-blue-600 hover:text-blue-800">ISO consultant in Dubai</Link> now 00971 52 6325363 or keep in touch with us at karthiga@wizms.net</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How to have a SEDEX audit checklist? <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">You can build up your own SEDEX audit Checklist. It should begin with a legal SEDEX audit Checklist and afterwards you can add inquiries from SAQ to strengthen it.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What are preparations that need to be done before the SEDEX audit? <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">It is required to read the ETI base code and experience the Self-assessment Questionnaire that you will have in your account.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is the difference between a SMETA Audit and SEDEX Audit? <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4">There is no such difference. They are similar.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What are the benefits of a SEDEX audit? <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <div className="text-gray-700 mt-4 space-y-2">
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                          <span>Improve your prestige by indicating your clients and partners that you are focused on the standards of ethically and socially responsible business.</span>
                        </div>
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                          <span>Stand out from the opposition with neutral proof of your corporate citizenship.</span>
                        </div>
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                          <span>Mitigate risks in the fields of social responsibility and maintainability.</span>
                        </div>
                        <div className="flex gap-3 items-start">
                          <MdCheckCircle className="text-violet-600 shrink-0 mt-1" />
                          <span>Drive the nonstop improvement of your suppliers relations.</span>
                        </div>
                      </div>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is Sedex audit? <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span></summary>
                      <p className="text-gray-700 mt-4"><Link href="/what-is-sedex-audit" className="text-blue-600 hover:text-blue-800">Sedex audit</Link> is a comprehensive platform that enables effective management of complex global supply chains, leading to real business benefits for your organization.</p>
                    </details>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-violet-50 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    Wizms provides ISO Certificate in UAE for all major standards such as ISO 9001:2015, ISO 14001:2015, ISO 27001:2015, ISO 17025:2017, ISO 45001:2018 and more. Wizms is the best ISO consultant in UAE and provides ISO consulting services in Dubai, <Link href="/iso-consultant-in-abudhabi" className="text-blue-600 hover:text-blue-800">Abu Dhabi</Link>, <Link href="/iso-certification-sharjah" className="text-blue-600 hover:text-blue-800">Sharjah</Link>, Ras al-Khaimah, Ajman, Al Ain and Fujairah. Wizms ISO consultant in Dubai offers top-class ISO consultancy services including ISO Consulting, ISO Certification, <Link href="/training" className="text-blue-600 hover:text-blue-800">ISO Training in UAE</Link>, <Link href="/gap-analysis" className="text-blue-600 hover:text-blue-800">Gap analysis</Link>, Documentation, Implementation, and <Link href="/iso-audit" className="text-blue-600 hover:text-blue-800">ISO certification audits in UAE</Link>.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Certifications</h3>
                <div className="space-y-3">
                  <Link href="/sa-8000-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">SA 8000</p>
                    <p className="text-sm text-gray-600">Social Accountability</p>
                  </Link>
                  <Link href="/iso-45001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 45001</p>
                    <p className="text-sm text-gray-600">Health & Safety</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-violet-500 to-violet-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Join SEDEX and access global retail buyers.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-violet-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-violet-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="SEDEX - Supplier Ethical Data Exchange" bgColor="from-violet-600 to-violet-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'SEDEX Supply Chain Ethics Certification in UAE | Wizms',
          author: { '@type': 'Organization', name: 'Wizms' },
        })}
      </script>
    </>
  );
}
