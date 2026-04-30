import Link from 'next/link';
import { Metadata } from 'next';
import { MdCheckCircle } from 'react-icons/md';
import EnquiryForm from '@/components/EnquiryForm';
import { getStaticPageBySlug } from '@/lib/supabase-data';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getStaticPageBySlug('iso-training-uae');
  return {
    title: page?.meta_title || 'ISO Training in Dubai | ISO Training in UAE | Abudhabi | Sharjah | Wizms',
    description: page?.meta_description || 'ISO training in Dubai, UAE: Provides ISO training in ISO 9001, OHSAS 18001, ISO 17025, ISO 14001, ISO 27001, ISO implementation training, ISO documentation training, Awareness training and internal auditor training in Dubai, UAE.',
    keywords: page?.meta_keywords || 'ISO Training in Dubai, ISO Training in UAE, ISO Certification Training, ISO Training Courses, ISO Awareness Training, ISO Internal Audit Training, ISO Documentation Training, ISO Training in Abu Dhabi, ISO Training in Sharjah',
  };
}

export default function ISOTrainingPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">Training</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">ISO Training in Dubai, UAE</h1>
                
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    Wizms is the best ISO Consultants provides training solutions to organizations across the world. Wizms team offers the top-class ISO training in UAE for all the ISO Standards.
                  </p>

                  <p className="font-semibold">
                    Our ISO consultants in Dubai provides the listed down ISO trainings:
                  </p>

                  <div className="space-y-2 text-gray-700">
                    <div className="flex gap-3 items-start">
                      <MdCheckCircle className="text-blue-600 shrink-0 mt-1" />
                      <Link href="/iso-9001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 9001 Certification in Dubai</Link>
                      <span>(Quality Management System - QMS)</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MdCheckCircle className="text-blue-600 shrink-0 mt-1" />
                      <Link href="/iso-14001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 14001 Certification in Dubai</Link>
                      <span>(Environment Management System - EMS)</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MdCheckCircle className="text-blue-600 shrink-0 mt-1" />
                      <Link href="/iso-45001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 45001 Certification in Dubai</Link>
                      <span>(Occupational Health and Safety Management System - OHSMS)</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MdCheckCircle className="text-blue-600 shrink-0 mt-1" />
                      <Link href="/iso-18001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 18001 Certification in Dubai</Link>
                      <span>(Occupational Health and Safety Management System - OHSAS)</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MdCheckCircle className="text-blue-600 shrink-0 mt-1" />
                      <Link href="/iso-50001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 50001 Certification in Dubai</Link>
                      <span>(Energy Management System - EnMS)</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MdCheckCircle className="text-blue-600 shrink-0 mt-1" />
                      <Link href="/iso-27001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 27001 Certification in Dubai</Link>
                      <span>(Information Security Management System - ISMS)</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MdCheckCircle className="text-blue-600 shrink-0 mt-1" />
                      <Link href="/iso-22000-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 22000 Certification in Dubai</Link>
                      <span>(Food Safety Management System - FSMS)</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MdCheckCircle className="text-blue-600 shrink-0 mt-1" />
                      <Link href="/iso-22301-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 22301 Certification in Dubai</Link>
                      <span>(Business Continuity Management Standards - BCMS)</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MdCheckCircle className="text-blue-600 shrink-0 mt-1" />
                      <Link href="/iso-10002-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 10002 Certification in Dubai</Link>
                      <span>(Quality Management and Customer Satisfaction)</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MdCheckCircle className="text-blue-600 shrink-0 mt-1" />
                      <Link href="/iso-41001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 41001 Certification in Dubai</Link>
                      <span>(Facility Management System)</span>
                    </div>
                  </div>

                  <p>
                    Our ISO training courses in Dubai are well structured and customized made to meet the business requirements. We provide you with the best ISO Training course in Dubai based on the content and delivery style.
                  </p>

                  <p className="font-semibold mt-6">Our ISO Training in Dubai, UAE and Globally covers:</p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                        <MdCheckCircle className="text-blue-600 shrink-0 mt-0.5" />
                        Awareness Training
                      </h3>
                      <p className="text-sm text-gray-700 mb-2">Provides ISO training on basic concepts of ISO certification, requirements, principles, approach, and benefits of ISO implementation.</p>
                      <p className="text-sm text-gray-700">Extensive training is provided by ISO consultants that covers frameworks for implementing ISO Certifications, key concepts and requirements for ISO Certification. It also covers gap analysis concepts and to use it for a baseline review of the current systems, etc.</p>
                    </div>

                    <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                        <MdCheckCircle className="text-blue-600 shrink-0 mt-0.5" />
                        Documentation Training
                      </h3>
                      <p className="text-sm text-gray-700">ISO Training to prepare the required documents for ISO Certification internal as well as external audits. It covers the Quality Policy, objectives, Quality Manual, procedures, records specified by ISO, and other documents for effective planning, operation, and control.</p>
                    </div>

                    <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                        <MdCheckCircle className="text-blue-600 shrink-0 mt-0.5" />
                        Training for Executives
                      </h3>
                      <p className="text-sm text-gray-700">Training is provided by ISO consultants that covers the overall benefits of ISO Certifications and its expected business value post the implementation.</p>
                    </div>

                    <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                        <MdCheckCircle className="text-blue-600 shrink-0 mt-0.5" />
                        Training for ISO Internal Audit
                      </h3>
                      <p className="text-sm text-gray-700">ISO certified training course for conducting internal audits that comply with the ISO Standards. The knowledge and skills required for conducting an internal audit are also shared during the training session.</p>
                    </div>

                    <div className="border border-blue-200 bg-blue-50 rounded-lg p-4 md:col-span-2">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                        <MdCheckCircle className="text-blue-600 shrink-0 mt-0.5" />
                        Process Owner Training
                      </h3>
                      <p className="text-sm text-gray-700">ISO training for the Process Owner to empower them with the new process updates and compliance requirements of the ISO Certification body.</p>
                    </div>
                  </div>

                  <p>
                    Our ISO training course in Dubai is employee focused and is tailor-made to suit your organizational requirements. The ISO training courses in UAE are designed and developed by experts of ISO Consultation and are complied with the latest ISO Standard Certificate requirements.
                  </p>

                  <p>
                    ISO training course in Dubai is designed in an interactive way and consist of class presentations, mock audits, assignments, role play, examinations, etc.
                  </p>

                  <p>
                    Our ISO consultants are experts in their respective fields and have handled more than 5,000 training programme sessions for over 1200+ clients spread across 90 Countries.
                  </p>

                  <p>
                    Irrespective of organization, is at any stage of ISO Certification Standard implementation process, i.e.:
                  </p>

                  <div className="space-y-2 text-gray-700">
                    <div className="flex gap-3 items-start">
                      <MdCheckCircle className="text-blue-600 shrink-0 mt-1" />
                      <span>Starting phase of ISO implementation</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MdCheckCircle className="text-blue-600 shrink-0 mt-1" />
                      <span>Midway of the implementation</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MdCheckCircle className="text-blue-600 shrink-0 mt-1" />
                      <span>Approaching the ISO certification audit</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MdCheckCircle className="text-blue-600 shrink-0 mt-1" />
                      <span>The ISO system is well established and matured</span>
                    </div>
                  </div>

                  <p>
                    Our ISO training course in Dubai will surely add value to the overall effectiveness of your ISO standard and helps the management to realize their goal of sustainable competitive advantage.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Services</h3>
                <div className="space-y-3">
                  <Link href="/iso-certification-in-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO Certifications</p>
                    <p className="text-sm text-gray-600">All ISO Standards</p>
                  </Link>
                  <Link href="/iso-9001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 9001</p>
                    <p className="text-sm text-gray-600">Quality Management</p>
                  </Link>
                  <Link href="/iso-14001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 14001</p>
                    <p className="text-sm text-gray-600">Environmental</p>
                  </Link>
                  <Link href="/iso-45001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 45001</p>
                    <p className="text-sm text-gray-600">Health & Safety</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-blue-600 to-blue-700 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Ready to Train?</h4>
                  <p className="text-sm mb-4">Enroll in our expert-led ISO training courses today.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-blue-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-blue-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="ISO Training" bgColor="from-blue-600 to-blue-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO Training in Dubai, UAE',
          description: 'ISO training in Dubai, UAE: Provides ISO training in ISO 9001, OHSAS 18001, ISO 17025, ISO 14001, ISO 27001, ISO implementation training, ISO documentation training, Awareness training and internal auditor training in Dubai, UAE.',
          author: { '@type': 'Organization', name: 'Wizms' },
          publisher: { '@type': 'Organization', name: 'Wizms' },
          url: 'https://wizms.net/iso-training-uae',
        })}
      </script>
    </>
  );
}