import Link from 'next/link';
import { Metadata } from 'next';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'GMP Certification in Dubai, UAE | Good Manufacturing Practice | WIZMS',
  description: 'GMP certification in Dubai, UAE in 4–6 weeks. Leading GMP certification consultants in UAE offering audit and implementation services at affordable prices.',
  keywords: 'GMP certification Dubai, Good Manufacturing Practice UAE, GMP consultants UAE, GMP certification consultancy Dubai',
};

export default function GoodManufacturingPracticePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">Good Manufacturing Practice</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">

                {/* Intro */}
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    GMP Certification Services in Dubai, UAE
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    GMP certification in Dubai, UAE can be obtained in 4–6 weeks with one of the leading GMP certification consultants in UAE, Dubai, Sharjah, Abu Dhabi, Ajman, Umm Al Quwain, Fujairah, Ras al-Khaimah and Khor Fakkan. Wizms offer the GMP certification in Dubai with the services of GMP certification audit and implementation services at an affordable price.
                  </p>
                </div>

                {/* What is GMP */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Good Manufacturing Practices Certification in Dubai</h2>
                  <p className="text-gray-700 mb-4">
                    GMP stands for Good Manufacturing Practice. Good Manufacturing Practice is a system for ensuring that products are consistently produced and controlled according to quality standards. It is promulgated by the US Food and Drug Administration under the authority of the Federal Food, Drug, and Cosmetic Act.
                  </p>
                  <p className="text-gray-700 mb-4">
                    GMP certification is designed to minimize the risks involved in any pharmaceutical production that cannot be eliminated through testing the final product. Good Manufacturing Practices certification is aimed primarily at diminishing the risks inherent in any pharmaceutical production, which may broadly be categorized into two groups: cross contamination/mix-ups and false labeling. Above all, manufacturers must not place patients at risk due to inadequate safety, quality or efficacy; for this reason, risk assessment has come to play an important role in WHO quality assurance guidelines.
                  </p>
                  <p className="text-gray-700 mb-4">
                    GMP regulations address issues including recordkeeping, sanitation, personnel qualifications, equipment verification, cleanliness, process validation, and complaint handling. Detailed, written procedures are essential for each process that could affect the quality of the finished product. There must be systems to provide documented proof that correct procedures are consistently followed at each step in the manufacturing process — every time a product is made.
                  </p>
                  <p className="text-gray-700">
                    Most of the food industry companies in UAE have implemented the Good Manufacturing Practices certification scheme for food processing as the foundation upon which they have designed and implemented other quality and food safety management systems like ISO 9001, ISO 22000 and HACCP.
                  </p>
                </div>

                {/* Benefits */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of GMP Certification in Dubai</h2>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      'Helps to improve the food safety management system',
                      'Detect production issues and reduce costs',
                      'Decrease the safety hazard in product quality and safety',
                      'Prove the management capabilities of the company in terms of product quality and safety assurance',
                      'Support to develop good production/services habits',
                      'Improve customer trust in your products',
                      'Better understand the relevant laws and regulations',
                      'Improve the global credibility and public image',
                      'Helps boost export opportunities',
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">{i + 1}</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How to get */}
                <div className="mb-10 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Get GMP Certification in Dubai?</h2>
                  <p className="text-gray-700">
                    We are the most popular GMP certification consultancy in Dubai to get GMP certification for your organization. Our expert team at Wizms will guide you through the hassle-free procedure that allows your firm to obtain GMP certification within very less time. For more details, please contact us at{' '}
                    <a href="tel:+97155277412" className="text-blue-600 hover:underline font-semibold">+971 55 277 4123</a>.
                  </p>
                </div>

              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Certifications</h3>
                <div className="space-y-3">
                  <Link href="/iso-9001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 9001</p>
                    <p className="text-sm text-gray-600">Quality Management System</p>
                  </Link>
                  <Link href="/iso-22000-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 22000</p>
                    <p className="text-sm text-gray-600">Food Safety Management</p>
                  </Link>
                  <Link href="/iso-14001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 14001</p>
                    <p className="text-sm text-gray-600">Environmental Management</p>
                  </Link>
                  <Link href="/iso-45001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 45001</p>
                    <p className="text-sm text-gray-600">Health & Safety Management</p>
                  </Link>
                </div>

                {/* CTA */}
                <div className="mt-8 p-6 bg-linear-to-r from-blue-500 to-blue-600 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm mb-4">Get your GMP certification in 4–6 weeks with expert guidance from WIZMS.</p>
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

      {/* Enquiry Form */}
      <EnquiryForm serviceType="GMP - Good Manufacturing Practice" bgColor="from-blue-600 to-blue-700" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'GMP Certification in Dubai, UAE | Good Manufacturing Practice | WIZMS',
          description: 'GMP certification in Dubai, UAE in 4–6 weeks. Leading GMP certification consultants in UAE offering audit and implementation services.',
          author: {
            '@type': 'Organization',
            name: 'Wizms',
            url: 'https://wizms.net',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Wizms',
            logo: {
              '@type': 'ImageObject',
              url: 'https://wizms.net/logo.png',
            },
          },
        })}
      </script>
    </>
  );
}
