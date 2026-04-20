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
  const page = await getConsultantPageBySlug('iso-17025-certification-consultants-uae');
  return {
    title: page?.meta_title || undefined,
    description: page?.meta_description || undefined,
    keywords: page?.meta_keywords || undefined,
  };
}

export default function ISO17025Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 17025 Certification Consultants in UAE</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">ISO 17025 Certification Consultant in Dubai, UAE:</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Wizms provides the best ISO 17025 certification in Dubai, Abu Dhabi, Sharjah, Ras al-Khaimah, Ajman, Al Ain and Fujairah and offers top-class{' '}
                  <Link href="/iso-17025-consultancy-services" className="text-blue-600 hover:text-blue-800">ISO 17025 consultancy services</Link>
                  {' '}including ISO Consulting, ISO Certification, Training, Gap analysis, Documentation, Implementation, and ISO certification audits in UAE. ISO certification cost is affordable to all types of organizations.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 17025 Accredited Labs in UAE:</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 17025 is an international standard that specifies the requirements of testing and calibration of laboratory. ISO/IEC 17025 is the Laboratory Management System that specifies the general requirements for the competence to carry out tests or calibrations, including sampling.
                  </p>
                  <p className="text-gray-700">
                    ISO 17025 standard allows laboratories to implement an effective quality management system and demonstrate that they are technically proficient and able to produce valid and consistent results. Laboratory customers, regulatory authorities and ISO certification bodies may also use IEC 17025 certification standard in confirming or recognizing the competence.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 17025 Certification in Dubai, UAE:</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 17025 certification in Dubai, UAE is a mandatory ISO 17025 certification. ISO/IEC 17025 Certification Standard provides guidance for organizations to undergo government orders in the laboratory sectors. ISO 17025 certification in Dubai, UAE provides assurance to all types of customers. The certification will help to increase the reputation of the company as well as increases the popularity of the brand name.
                  </p>
                  <p className="text-gray-700">
                    ISO 17025 certification in UAE, Abu Dhabi have huge requirements to get ISO 17025 in laboratory sector. ISO certification in Dubai helps your laboratory to figure out the risks involved in ISO 17025 certification process. Post assessing the risks will reduce the risks and can improvise the migration plan which makes your ISO 17025 certification process quality oriented.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 17025 Requirements:</h2>
                  <p className="text-gray-700 mb-4">
                    The standard was published with collaboration between the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC). Get more information from{' '}
                    <Link href="/iso-17025-certification-requirements" className="text-blue-600 hover:text-blue-800">ISO 17025 Certification requirements</Link>
                    {' '}article.
                  </p>
                  <p className="text-gray-700 mb-4">To get your lab accredited to IEC 17025 the following are requirements:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-emerald-600 shrink-0 mt-1" />
                      <span>Comply to ISO/IEC 17025 standard requirements</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-emerald-600 shrink-0 mt-1" />
                      <span>Find a proficiency testing provider and get the sample tested</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-emerald-600 shrink-0 mt-1" />
                      <span>Evaluate proficiency testing results</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-emerald-600 shrink-0 mt-1" />
                      <span>Participate in Inter lab Comparison Program</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-emerald-600 shrink-0 mt-1" />
                      <span>Take actions if the sample fails in test and re-test the sample until satisfactory results are obtained</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-emerald-600 shrink-0 mt-1" />
                      <span>Submit your results to your accreditation body</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <MdCheckCircle className="text-emerald-600 shrink-0 mt-1" />
                      <span>Face the audit from Accreditation body</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Get certified for ISO 17025 certification in Abu Dhabi</h2>
                  <p className="text-gray-700">
                    To get certified for ISO 17025 in Abu Dhabi, Wizms, top-class{' '}
                    <Link href="/iso-17025-consultancy-services" className="text-blue-600 hover:text-blue-800">ISO 17025 consultancy services</Link>
                    {' '}to all the organization in UAE, Dubai for all certifications in management system. ISO consultant in Abu Dhabi is a well-recognised organization who are trained to deliver the requirements of ISO standards. We are ready to help our customers to gain maximum benefits from the ISO standards. ISO 17025 consultant in Abu Dhabi focuses not only on the certification process and documentation but also on the continuous improvement of the management system. ISO 17025 certification cost is always minimum for our clients.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Easy ways to get ISO 17025 certification in Dubai</h2>
                  <p className="text-gray-700 mb-4">
                    We as{' '}
                    <Link href="/" className="text-blue-600 hover:text-blue-800">ISO consultants in Dubai</Link>
                    , study the process of the organization by having an interaction with the team members at the lab, guide them for Proficiency testing and Inter lab comparison measurements, assist in data interpretation from the obtained results, prepare documentation and set objectives and targets to show the performance and streamline the activities and functions as per the standard requirements.
                  </p>
                  <p className="text-gray-700 mb-4">
                    ISO consultants in Dubai provide guidance for implementation of ISO 17025 standard and ensure that the implementation is in place across all departments. After implementation, we also help to approach the ISO 17025 certification bodies for the audit.
                  </p>
                  <p className="text-gray-700">
                    ISO 17025 certification in Dubai will help to increase the confidence level of the investors and ensures towards the investment.
                  </p>
                </div>

                <div className="mt-12">
                  <style>{faqStyle}</style>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ ISO 17025 certification</h2>
                  <div className="space-y-4">
                    <details open className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is ISO 17025 certification? <MdKeyboardArrowDown className="text-emerald-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 17025 certification is the most expensive ISO standard to ensure testing and calibration of laboratories. ISO 17025 certification in Dubai not just certifies the management system used, yet additionally the specialized capability of the laboratories. In many countries, providers and regulatory authorities will not acknowledge test or calibration results from a lab that is not ISO 17025 certified.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Can the ISO 17025:2017 appraisal group audit the ISO 9001 management system to save time and cost? <MdKeyboardArrowDown className="text-emerald-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">No. ISO 17025:2017 appraisal group cannot do the audit of{' '}
                        <Link href="/iso-9001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 9001</Link>
                        {' '}management system. Anyway, it is possible, and sometimes reasonable, to carry on the two evaluations simultaneously. This can decrement overall time and possibly give benefits in terms of incorporated findings.
                      </p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Are all the laboratories subject to a similar technique for obtaining an ISO 17025 certification in Dubai? <MdKeyboardArrowDown className="text-emerald-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">It is hard to review the laboratories all over the world. In European countries, methodology for gaining an ISO 17025 certification are commonly comparative and it takes roughly a year to acquire the endorsement of the certification body and to have a recorded management system. Outside Europe we have seen instances of laboratories being authorized in 3 months&apos; time for a full scope.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Do we have to implement new arrangements and processes for ISO 17025 certification before UKAS surveys them or do we stand by until after our assessment? <MdKeyboardArrowDown className="text-emerald-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Your 2019 assessment will be embraced to the 2017 version of ISO 17025 certification in Dubai and consequently our{' '}
                        <Link href="/" className="text-blue-600 hover:text-blue-800">ISO consultant in Dubai</Link>
                        {' '}will expect refreshed strategies and methodology that must be implemented before the appraisal.
                      </p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">If we hold ISO 9001 certification from an authorized body, does this replace a portion of the UKAS assessment? <MdKeyboardArrowDown className="text-emerald-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">It can help the evaluation, yet it will not completely replace the assessment by UKAS as we must guarantee that the system is fit for testing/calibration lab working to ISO 17025 certification in Dubai.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Which standard is the more suitable for laboratories? <MdKeyboardArrowDown className="text-emerald-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 17025:2017 certification is the more proper standard for laboratories related with technical competency supported by sound quality system components. If the laboratories facilities are more comprehensive, quality system that clarifies client focus and continuous improvement, might decide to sustain a certified ISO 9001 certification management system.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">If a lab is discovered to be agreeable with ISO 17025:2017 yet not agreeable with ISO 17025:2005 for a given necessity will improve the activities against the old standard? <MdKeyboardArrowDown className="text-emerald-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">No, the transition assessment is against the 2017 version of ISO 17025 certification in UAE.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Can an ISO 9001 auditor conduct the ISO 17025:2017 assessment? <MdKeyboardArrowDown className="text-emerald-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">No. The management system auditors are generally certified to execute assessments against a management system standard. ISO 17025:2017 is both capable of management system standard and require technical specialists in the assessment group who are fit to make legitimate assessment of the technical competence of the laboratory.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Are UKAS hoping to see a danger grid of probability and how health and safety risks are surveyed? <MdKeyboardArrowDown className="text-emerald-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 17011:2017 and UKAS are not prescriptive of how dangers are reported.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">We likewise have accreditation for different norms that have been re-examined over the most recent couple of years (for example ISO/IEC 17065:2012) and are finding that we don&apos;t have to refresh numerous strategies and methods for the 2017 version of 17025, is this normal? <MdKeyboardArrowDown className="text-emerald-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Truly, a large number of the progressions in ISO 17025:2017 align it with the standard clauses in other 17000 series, if you have changed to another standards you may find that you are now consistent with huge numbers of the changed clauses in ISO 17025 certification in Dubai.</p>
                    </details>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-gray-700">
                    Wizms is the best ISO consultant in UAE and provides ISO consulting services in Dubai, Abu Dhabi, Sharjah, Ras al-Khaimah, Ajman, Al Ain and Fujairah. Wizms ISO consultant in Dubai offers top-class ISO consultancy services including ISO Consulting, ISO Certification, <Link href="/training" className="text-blue-600 hover:text-blue-800">ISO Training in UAE</Link>, Gap analysis, Documentation, Implementation, and <Link href="/how-to-get-ready-for-iso-audit" className="text-blue-600 hover:text-blue-800">ISO Certification audits in UAE</Link>.
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
                  <Link href="/iso-14001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 14001</p>
                    <p className="text-sm text-gray-600">Environmental</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-emerald-500 to-emerald-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Achieve laboratory accreditation with ISO 17025.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-emerald-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-emerald-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="ISO 17025 - Laboratory Testing & Calibration" bgColor="from-emerald-600 to-emerald-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 17025 Laboratory Testing & Calibration Certification in UAE | Wizms',
          author: { '@type': 'Organization', name: 'Wizms' },
        })}
      </script>
    </>
  );
}
