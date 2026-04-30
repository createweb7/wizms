import Link from 'next/link';
import { Metadata } from 'next';
import EnquiryForm from '@/components/EnquiryForm';
import { getStaticPageBySlug } from '@/lib/supabase-data';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getStaticPageBySlug('aml-advisory');
  return {
    title: page?.meta_title || 'AML Advisory | Wizms',
    description: page?.meta_description || 'Our services include the development of the regulatory universe, gap analysis and benchmarking as well as designing and implementation planning of the Policies and Procedure Manuals.',
    keywords: page?.meta_keywords || 'AML Advisory, KYC Solutions, AML Compliance, Anti-Money Laundering, Regulatory Compliance, MLRO, Compliance Officer',
  };
}

export default function AMLAdvisoryPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">AML Advisory</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">AML Advisory - KYC Solutions</h1>

                {/* Section 1: AML Advisory - KYC Solutions */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. AML Advisory - KYC Solutions</h2>
                  <p className="text-gray-700 mb-6">
                    Our services include the development of the regulatory universe, gap analysis and benchmarking as well as designing and implementation planning of the Policies and Procedure Manuals.
                  </p>

                  <div className="space-y-6">
                    {/* KYC Remediation */}
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">KYC Remediation</h3>
                      <p className="text-gray-700">
                        We provide the services of setting up a customer identification program and conducting client risk assessment. Additionally, we assist in the process of client outreach for remediation of expired/missing KYC. Our services also include correcting or eliminating inaccurate or irrelevant customer data and updating the database with the right information.
                      </p>
                    </div>

                    {/* GAP Analysis and AML Audit */}
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">GAP Analysis and AML Audit</h3>
                      <p className="text-gray-700">
                        We provide the services of conducting the independent audit function to examine the organization's AML compliance program.
                      </p>
                    </div>

                    {/* Policies and Procedures */}
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Policies and Procedures</h3>
                      <p className="text-gray-700">
                        We support in preparing comprehensive SOPs, and reports in accordance with relevant regulatory framework. Reports are generated based on the organization&apos;s requirements.
                      </p>
                    </div>

                    {/* Compliance Outsourcing */}
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Outsourcing</h3>
                      <p className="text-gray-700">
                        We provide outsourced Compliance Officer/MLRO on Managed Services as well as Secondment basis. The resource takes care of all the Compliance needs of the organization and reports to an appropriate governance level of the organization&apos;s.
                      </p>
                    </div>
                  </div>
                </section>

                <p className="text-gray-700 mb-12">
                  It is necessary for an organization to <Link href="/iso-9001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">get ISO 9001 certification</Link> in Dubai and UAE and some sectors consider it to be mandatory. By holding an ISO 9001 certification, an organization can upgrade its creditability and indicates the clients that its product and services have met the expectations of ISO 9001.
                </p>

                {/* Section 2: Regulatory Compliance */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Regulatory Compliance</h2>
                  <p className="text-gray-700">
                    Financial and Capital markets as well as business registrars are becoming more and more demanding when it comes to compliance with the statutory requirements and filing regulatory returns. We are well aware of such requirements and support our clients in meeting those in a timely and effective manner.
                  </p>
                </section>

                {/* CTA Section */}
                <section className="bg-linear-to-r from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need AML Advisory & Compliance Support?</h3>
                  <p className="text-gray-700 mb-6">
                    Our experienced compliance consultants are ready to help you establish robust AML and KYC processes tailored to your organization&apos;s needs.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Contact Our AML Experts
                  </Link>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                {/* Related Services */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/iso-certification-services-uae" className="text-blue-600 hover:text-blue-800 hover:underline">
                        → ISO Certification Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/iso-training-uae" className="text-blue-600 hover:text-blue-800 hover:underline">
                        → ISO Training Programs
                      </Link>
                    </li>
                    <li>
                      <Link href="/iso-implementation-consultancy-uae" className="text-blue-600 hover:text-blue-800 hover:underline">
                        → Implementation Consultancy
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Quick Contact CTA */}
                <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white">
                  <h3 className="text-lg font-bold mb-3">Have Questions?</h3>
                  <p className="text-blue-50 mb-4 text-sm">
                    Get in touch with our compliance specialists today.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-50 transition-colors font-semibold text-sm w-full text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="mt-16">
            <EnquiryForm serviceType="AML Advisory & Compliance" bgColor="from-blue-600 to-blue-800" />
          </div>
        </div>
      </div>
    </>
  );
}
