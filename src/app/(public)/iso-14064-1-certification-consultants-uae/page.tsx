import Link from 'next/link';
import { Metadata } from 'next';
import { getConsultantPageBySlug } from '@/lib/supabase-data';
import EnquiryForm from '@/components/EnquiryForm';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getConsultantPageBySlug('iso-14064-1-certification-consultants-in-uae');
  return {
    title: page?.meta_title || undefined,
    description: page?.meta_description || undefined,
    keywords: page?.meta_keywords || undefined,
  };
}

export default function ISO14064Page() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">ISO 14064 Certification in UAE, Dubai- Carbon Footprint Verification</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">ISO 14064 Certification in UAE, Dubai- Carbon Footprint Verification</h1>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Carbon FootPrint Verification</h2>
                  <p className="text-gray-700 mb-4">
                    Global warming is rising rapidly due to the emission of green house gases (GHG)- notably carbon dioxide. Therefore, immediate action is needed to minimize these emissions. In short, carbon footprint verification is an unbiased evaluation of the greenhouse gases emitted by a corporation or organization over a specific time period.
                  </p>
                  <p className="text-gray-700">
                    The main reason for carbon footprint verification is, business partners, investors, analysts, the media, and consumers are increasingly judging companies based on their long-term actions. Carbon footprint verification quantifies the greenhouse gas emissions caused by a company&apos;s operations, allowing them to prove its commitment to mitigating the effects of climate change. A carbon footprint inventory can be used by businesses to determine their climate-relevant emissions. It is then used as a decision-making basis for developing climate protection targets and mapping out a strategic path. This is possible only after an independent verification of a Greenhouse Gas (GHG) balance and it become truly reliable.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 14064 Certification in UAE, Dubai</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 14064 certification in UAE, Dubai specifies explicit rules and procedures for calculating and verifying emissions in a GHG inventory. ISO 14064 certification is applied to Industries as well as companies of all sizes. WIZMS provides consulting services for ISO 14064 certification in Dubai and rest of UAE.
                  </p>
                  <p className="text-gray-700">
                    The World Business Council for Sustainable Development (WBCSD) and the World Resources Institute (WRI) published this standard in 1998 to standardize so-called carbon accounting. ISO 14064 standards consists of 3 series of standards. ISO 14064-1 certification in Dubai is based on the Greenhouse Gas Protocol (GHG Protocol). ISO 14064-1 certification is the foundation for calculating a company&apos;s greenhouse gas emissions, i.e. its corporate carbon footprint (CCF). The standard outlines the principles and requirements for a company&apos;s planning, development, and reporting of GHG inventories.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ISO 14064-1 – Carbon Footprint Verification</h2>
                  <p className="text-gray-700 mb-4">
                    ISO 14064-1 certification is a foundational standard for creating a corporate GHG inventory, or calculating the corporate carbon footprint. GHG emissions from corporations can be classified into two categories:
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong><em>Direct emissions</em></strong> – Emissions caused directly by sources owned or controlled by your company.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong><em>Indirect emissions</em></strong> - Emissions from your operations&apos; purchased electricity, steam, and heating/cooling; Emissions from sources that your company does not own or control, such as supplier emissions, business travel, and end-of-life emissions from sold products.
                  </p>
                  <p className="text-gray-700">
                    We, at WIZMS one of the best{' '}
                    <Link href="/" className="text-blue-600 hover:text-blue-800">ISO certification consultant in UAE</Link>
                    {' '}develop the scope based on the company&apos;s needs and the location where majority of the emissions takes place. Our ISO consultants in UAE, Dubai focus on confirming your annual GHG emissions and start the verification process. The verification is carried out in accordance with ISO 14064-1, which is a guideline for verifiers on how to verify emissions. At last, our ISO 14064 certification consultants in Dubai will give you a verification statement. This statement gives an assurance to your stakeholders and investors about the accuracy of your carbon footprint claims. Our carbon footprint verification services in Dubai and rest of UAE have also received external recognition from types of organizations.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Advantages of ISO 14064 Certification in Dubai, UAE</h2>
                  <p className="text-gray-700 mb-2"><strong>Integrity</strong></p>
                  <p className="text-gray-700 mb-4">
                    ISO 14064-1 certification in Dubai demonstrates the authenticity of your systems and processes by proving your GHG inventory, assertions, and reports that fit to the ISO 14064 standard and are free of errors, omissions, or misstatements.
                  </p>
                  <p className="text-gray-700 mb-2"><strong>Targets</strong></p>
                  <p className="text-gray-700 mb-4">
                    ISO 14064-1 certification ensures the integrity of your project baseline, design plan, and supporting assumptions, guaranteed that your projected GHG emissions are reduced.
                  </p>
                  <p className="text-gray-700 mb-2"><strong>Success</strong></p>
                  <p className="text-gray-700">
                    ISO 14064-1 carbon footprint verification provides the necessary assurance. Our ISO consultants will validate your GHG projects to ISO 14064-1 certification and provides assurance that it is implemented as planned and assist them to achieve projected emission reductions. ISO 14064-1 carbon footprint verification assures your stakeholders that GHG emission reductions are attained.
                  </p>
                </div>

                <div className="mb-10 bg-lime-50 border-l-4 border-lime-500 p-6 rounded">
                  <p className="text-gray-700">
                    WIZMS was the first verification bodies in Dubai, UAE to achieve accreditation to ISO 14064. We deliver carbon footprint verification to ISO 14064-1 to any type of organization and in any business sector. Our ISO 14064-1 carbon footprint verification services are designed to develop robust, and reproducible strategies to monitor & report GHG emissions, both at project and organization level.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Certifications</h3>
                <div className="space-y-3">
                  <Link href="/iso-14001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 14001</p>
                    <p className="text-sm text-gray-600">Environmental</p>
                  </Link>
                  <Link href="/iso-9001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 9001</p>
                    <p className="text-sm text-gray-600">Quality Management</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-lime-500 to-lime-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Measure and reduce your carbon footprint with ISO 14064.</p>
                  <a href="tel:+971552774123" className="block text-center bg-white text-lime-600 font-semibold py-2 rounded hover:bg-gray-100 transition mb-2">
                    Call Now: +971 55 277 4123
                  </a>
                  <a href="mailto:mahendran@wizms.net" className="block text-center border-2 border-white text-white font-semibold py-2 rounded hover:bg-white hover:text-lime-600 transition">
                    Email: mahendran@wizms.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm serviceType="ISO 14064-1 - Carbon Footprint & Greenhouse Gas Verification" bgColor="from-lime-600 to-lime-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO 14064 Carbon Footprint Verification Certification in UAE | Wizms',
          author: { '@type': 'Organization', name: 'Wizms' },
        })}
      </script>
    </>
  );
}
