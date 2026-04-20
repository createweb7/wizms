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
  const page = await getConsultantPageBySlug('iso-22000-certification-consultants-uae');
  return {
    title: page?.meta_title || undefined,
    description: page?.meta_description || undefined,
    keywords: page?.meta_keywords || undefined,
  };
}

export default function ISO22000Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">FSMS ISO 22000 Certification Consultants in UAE</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">ISO 22000 &amp; HACCP Certification in Dubai, UAE</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  ISO 22000 Certification in Dubai, UAE can be obtained in 4 - 6 weeks with one of the UAE&apos;s most trusted and largest ISO certification consultants in Dubai,{' '}
                  <Link href="/iso-consultant-in-abudhabi" className="text-blue-600 hover:text-blue-800">Abu Dhabi</Link>,{' '}
                  <Link href="/iso-certification-sharjah" className="text-blue-600 hover:text-blue-800">Sharjah</Link>, Ras al-Khaimah, Ajman, Al Ain and Fujairah.
                </p>
                <p className="text-gray-700 mb-8">
                  ISO 22000 Food Safety Management System Certificate is proposed for companies looking to set up a more focused, intelligent, coordinated FSMS than is regularly needed by law. The standard requires meeting any relevant food safety related to statutory and administrative criteria into its food safety framework.
                </p>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 22000 Certification in Dubai:</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 22000 Certification in Dubai, UAE and HACCP training in Dubai sets up food safety management system. Our ISO 22000 consulting and certification services ISO 22000 in the UAE can be obtained fastest and simplest way.
                  </p>
                  <p className="text-gray-700 mb-4">
                    ISO 22000 and FSMS 22000 are Food Safety Management Systems Certification plans that confirm the customers that the industry has implemented an effective plan of food safety management system.
                  </p>
                  <p className="text-gray-700">
                    ISO 22000 certification is recognized globally and is developing in popularity. The number of ISO 22000 certifications has increased every year. ISO food safety certification helps to prevent disease and expensive, harming reviews of products. Food safety management system certificate will help to improve the popularity of the brand name across worldwide.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 22000 standards:</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 22000 is an International Standard which defines the obligations for food safety management systems. Apply ISO 22000 food safety standards to all organizations that engage with the food chain, to guarantee the food safety system. Becoming certified to ISO 22000 provides an organization to prove to its customers that they have a food safety management system in place. That gives the customer trust in the product. This is becoming stronger and more valuable as customers request safe food and food processors require that ingredients got from their suppliers to be safe.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The International Organization for Standardization (ISO) formed the Food Safety Management System Certification ISO 22000. ISO and its member countries utilized the Quality Management System strategy and custom-fitted it to apply to Food Safety, incorporating the generally used and demonstrated HACCP standards and Good Manufacturing Standards.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The ISO 22000 standard has responsibilities for Food Safety Management Systems procedures, processes, and requirements that the company implements prerequisite programs and HACCP.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Unique to some of the other Food Safety Management Systems Certification programs such as FSSC 22000 and SQF, the ISO 22000 standards do not have explicit requirements for prerequisite programs however requires that the company classifies and implements the appropriate programs. This makes it more adaptable, and food organizations of any kind can implement and get ISO 22000 certification.
                  </p>
                  <p className="text-gray-700">
                    ISO 22000 is not a Worldwide Food Safety Initiative (GFSI) benchmarked standard. This indicates that if a specific customer base or market is seeking for a GFSI Recognized standard you should seem at FSSC 22000, which is the most related to ISO 22000 or one of the other GFSI approved certification systems.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 22000:2005 Standards</h2>
                  <p className="text-gray-700">
                    ISO 22000:2005 sets out the prerequisites for a food safety management system. It maps out what the industry needs to do, to exhibit its ability to control food safety risks to make sure that food is safe. It is suitable for industries required in food chains such as food farmers, producers, retailers, storage operators, and restaurants. It is also beneficial to organizations associated with other food-related products, for example, ingredients, packaging, cleaning specialists.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 22000:2018 standards</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 22000:2018 is the recently amended International Food Safety standard, intended to harmonize on a worldwide scale the requirements for food safety management for businesses within the food chain.
                  </p>
                  <p className="text-gray-700">
                    ISO 22000 connects and enhancements the core elements of ISO 9001 and HACCP to provide a successful framework for the development, implementation, assessing for regular improvement to document the Food Safety Management System inside the context of the association&apos;s overall business hazards.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 22000 certification cost in Dubai</h2>
                  <p className="text-gray-700">ISO 22000 certification cost in Dubai depends upon the organization, number of employees, annual turnover. Wizms will provide the ISO 22000 food safety certification at an affordable price and quick services.</p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Who needs ISO 22000 Certification in Dubai?</h2>
                  <p className="text-gray-700 mb-4">ISO 22000 certification is for all those involved in the food supply chain. This includes farmers, transporters, manufacturers, retailers, and restaurants.</p>
                  <p className="text-gray-700">
                    The ISO 22000:2005 sets out the requirements for a food safety management system. It maps out what an organization needs to do, to demonstrate its ability to control food safety hazards to make sure that food is safe. It is suitable for industries involved in the food chain such as animal feed producers, food producers, transport and storage operators, hotels, restaurants, etc. It is also beneficial to companies involved in other food-related products such as additives, ingredients, packaging, cleaning agents, etc.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Why ISO 22000 Certification?</h2>
                  <p className="text-gray-700">
                    By getting ISO 22000 certified, it declares to potential customers and trading partners that the organization is capable enough to meet the highest global standards of food hygiene and safety.
                  </p>
                </div>

                <div className="mb-10 bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">HACCP Certification in UAE</h2>
                  <p className="text-gray-700 mb-4">
                    HACCP Certification in Dubai, UAE requires legal authorization and assurance on the safety of products. FSMS is an important concern for the organization as it may affect human health. The{' '}
                    <Link href="/haccp-certification-in-uae" className="text-blue-600 hover:text-blue-800">HACCP certification in UAE</Link>
                    {' '}offers 100% assurance on the safety of the product. HACCP certification in Dubai is based on Identification, Control and Elimination of the Hazards and Risk Factors that adversely affect the products. Our{' '}
                    <Link href="/haccp-consultant-in-uae" className="text-blue-600 hover:text-blue-800">HACCP Consultant in UAE</Link>
                    {' '}will provide in-depth analysis in HACCP certification and assist your organization in establishing the international standard of hygiene.
                  </p>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">Benefits to Organisation</h3>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex gap-2 items-start"><MdCheckCircle className="text-cyan-600 shrink-0 mt-1" /><span><strong>Introduction of internationally recognized</strong> processes to the organization activities.</span></li>
                    <li className="flex gap-2 items-start"><MdCheckCircle className="text-cyan-600 shrink-0 mt-1" /><span>Give suppliers, stakeholders, and customer&apos;s confidence in the <strong>hazard control measures</strong> in the organization.</span></li>
                    <li className="flex gap-2 items-start"><MdCheckCircle className="text-cyan-600 shrink-0 mt-1" /><span>Follow <strong>hazard controls</strong> in place across your <strong>supply chain</strong>.</span></li>
                    <li className="flex gap-2 items-start"><MdCheckCircle className="text-cyan-600 shrink-0 mt-1" /><span>Introduce <strong>transparency</strong> around accountability and responsibilities.</span></li>
                    <li className="flex gap-2 items-start"><MdCheckCircle className="text-cyan-600 shrink-0 mt-1" /><span><strong>Continually improve and update</strong> your systems.</span></li>
                    <li className="flex gap-2 items-start"><MdCheckCircle className="text-cyan-600 shrink-0 mt-1" /><span>Increase in <strong>company profits</strong>.</span></li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">Benefits to Customer</h3>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex gap-2 items-start"><MdCheckCircle className="text-cyan-600 shrink-0 mt-1" /><span>Capable enough to provide <strong>consistent food products</strong>.</span></li>
                    <li className="flex gap-2 items-start"><MdCheckCircle className="text-cyan-600 shrink-0 mt-1" /><span>Reduces the occurrence of <strong>food-borne disease</strong>.</span></li>
                    <li className="flex gap-2 items-start"><MdCheckCircle className="text-cyan-600 shrink-0 mt-1" /><span><strong>Assurance</strong> of quality in food products.</span></li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">Benefits to Employees</h3>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex gap-2 items-start"><MdCheckCircle className="text-cyan-600 shrink-0 mt-1" /><span><strong>Improves the quality and safety</strong> of jobs in the food industry.</span></li>
                  </ul>

                  <p className="text-gray-700">
                    As ISO 22000 consultants, we have vast knowledge and experience in the food industry. We will frame various comprehensive strategies to inculcate your organization to comply with Food Safety Management System standards.
                  </p>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ ISO 22000 Certification</h2>
                  <div className="space-y-4">
                    <style>{faqStyle}</style>
                    <details open className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is ISO 22000 Certification? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 22000 Certification is an international standard which is used to indicate the requirements of Food Safety Management System (FSMS) whereas companies involved in food safety need to show its capacity to control the food safety hazards, so as to guarantee that food is secure at the time of human utilization.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">For what reason do large organizations uphold FSSC 22000? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Since FSSC 22000 is ISO 17021 based, FSSC ISO 22000 consultant in Dubai permits provision for site examining, thusly all the sites need not to be reviewed. This considers cost savings to huge multi-site organization.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Why ISO 22000:2005 is required? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">In recent days, more food organizations need Food Safety Management System. ISO 22000 standard in UAE is a fundamental one to get into new business sectors.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Do I need an ISO 22000 certification consultant in Dubai? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">You can get advice from autonomous ISO 22000 consultant in Dubai to implement your quality Management System, yet this can be costly. Wizms is the best ISO 22000 consultant in Dubai helps to sort those issues and provides a fine understanding and control over the system and gives a decent beginning stage to your business.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Would you be able to guarantee that we will achieve certification quickly? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 22000 consultant in UAE can guarantee that an organization can be certified successfully. However, you should have all the necessary system set up and if some other records are considered important to set up quality control. Do not worry, best ISO 22000 consultant in Dubai helps the organization until you accomplish ISO 22000 certification.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Which associations can implement ISO 22000:2005 certification? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Associations which can implement ISO 22000:2005 are as follows:</p>
                      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>Food producing and fixing industry</li>
                        <li>Food added substances</li>
                        <li>Food transportation</li>
                        <li>Packing food materials</li>
                        <li>Selling of food (retail or discount)</li>
                        <li>Serving arranged food (general stores)</li>
                        <li>Creating food related Applications</li>
                      </ul>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What are the requirements of ISO 22000? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">ISO 22000 certification requires you to assemble a Food Safety Management System.</p>
                      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>To ensure a clean food environment.</li>
                        <li>A Hazard Analysis and Critical Control Plan created to recognize, prevent and dispose of food hazards.</li>
                        <li>Set up Food Safety Management System to manage food safety all throughout your association.</li>
                        <li>Following the HACCP standards.</li>
                      </ul>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How much does ISO 22000 Certification cost? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Organizations who implement the system with the best ISO 22000 consultant in Dubai might have the option to get certified easier at low cost. Feel free to contact us.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is ISO 22000 internal audit checklist? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Organizations may take 3 to 9 months or more than that to finish their internal audit. When the system is set up and being utilized as a part of everyday business, an ISO 22000 consultant can perform the Certification Audit. If the reviewer finds that the system is consistent with the norm and is being followed all throughout the organization, they will suggest for ISO 22000 certification.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What is HACCP? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">HACCP stands for Hazard Analysis and Critical Control Point. HACCP is a universally perceived system for diminishing the risk of safety hazards in food.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What are the requirements of HACCP? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">HACCP System requires that the hazards are recognized and controlled to an extent. This incorporates chemical, biological or actual hazards. Any organization associated with the assembling, preparing or treatment of food items can utilize HACCP to limit or dispose of safety hazards in their item.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">Why use HACCP? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">Awareness towards food-borne sickness is increasing nowadays and hence the industries are driving towards the utilization of HACCP and HACCP based certification programs.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What are the 7 principles of HACCP? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-1">
                        <li>Hazard Analysis.</li>
                        <li>Recognize the Critical Control Points.</li>
                        <li>Build up Critical Limits.</li>
                        <li>Build up Monitoring Procedures.</li>
                        <li>Build up Corrective Actions.</li>
                        <li>Build up Record Keeping Procedures.</li>
                        <li>Build up Verification Procedures.</li>
                      </ul>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How long will it take to get ISO 22000 certification in UAE? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">To get ISO 22000 certification in UAE, it will take nearly 3 to 15 days to finish the process.</p>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">What are the critical components of ISO 22000? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <ul className="list-disc list-inside text-gray-700 mt-4 space-y-1">
                        <li>Involvement of the management team.</li>
                        <li>Correspondence.</li>
                        <li>The HACCP (Hazard Analysis and Critical Control Point) standards.</li>
                        <li>System management.</li>
                      </ul>
                    </details>
                    <details className="border border-gray-200 rounded-lg p-4 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">How does ISO 22000 integrate with a current HACCP training program in Dubai? <MdKeyboardArrowDown className="text-cyan-600 text-xl faq-icon" /></summary>
                      <p className="text-gray-700 mt-4">
                        When you have HACCP certification in Dubai obtained from reputed HACCP consultant in Dubai, UAE, you may meet the ISO 22000 standard requirements for safety of foods explicitly, Clause 7, Planning and acknowledgment of safe items. The following conditions for ISO 22000 certification in Dubai needs Quality Management System components (Consistent with{' '}
                        <Link href="/iso-9001-certification-consultants-uae" className="text-blue-600 hover:text-blue-800">ISO 9001:2000 certification</Link>
                        ) and include:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>A correspondence plan.</li>
                        <li>A management survey.</li>
                        <li>A technique for nonstop improvement.</li>
                        <li>A technique for report and record control.</li>
                      </ul>
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
                  <Link href="/iso-14001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 14001</p>
                    <p className="text-sm text-gray-600">Environmental Management</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-cyan-500 to-cyan-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Get ISO 22000 Food Safety certification in 4-8 weeks.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-cyan-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-cyan-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="ISO 22000 - Food Safety Management System & HACCP" bgColor="from-cyan-600 to-cyan-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 22000 Certification in Dubai, UAE | Food Safety Management | Wizms',
          author: { '@type': 'Organization', name: 'Wizms', url: 'https://wizms.net' },
        })}
      </script>
    </>
  );
}
