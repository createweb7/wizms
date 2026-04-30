import { Metadata } from 'next';
import Link from 'next/link';
import { getStaticPageBySlug } from '@/lib/supabase-data';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getStaticPageBySlug('about');
  return {
    title: page?.meta_title || 'About WIZ Management Solutions | ISO Certification Consultants',
    description: page?.meta_description || 'Learn about WIZ Management Solutions - expert ISO certification consultants with proven track record in helping organizations achieve and maintain ISO compliance.',
    keywords: page?.meta_keywords || 'about WIZ, ISO certification consultants, management solutions, ISO expertise',
  };
}

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">About</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* About Us Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
                <p className="text-gray-700 text-lg mb-6">
                  WIZ Management Solutions is a well-established professional consultancy provider specialized in Management Systems, IT Services and Process Improvements. Since our inception, we have been actively working with several public and private sectors across:
                </p>
                
                {/* Locations Grid with Flags */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { flag: '🇦🇪', name: 'UAE' },
                    { flag: '🇬🇧', name: 'UK - London' },
                    { flag: '🇮🇹', name: 'Italy - Milan' },
                    { flag: '🇩🇯', name: 'Djibouti' },
                    { flag: '🇴🇲', name: 'Oman' },
                    { flag: '🇧🇭', name: 'Bahrain' },
                    { flag: '🇰🇼', name: 'Kuwait' },
                    { flag: '🇸🇦', name: 'Saudi Arabia' },
                    { flag: '🇮🇳', name: 'India' },
                  ].map((location, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center p-4 bg-linear-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all duration-300"
                    >
                      <div className="text-4xl mb-2">{location.flag}</div>
                      <span className="text-sm font-semibold text-gray-700 text-center">{location.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-lg h-80 flex items-center justify-center sticky top-20">
                  <div className="text-center">
                    <div className="text-7xl mb-4">🌍</div>
                    <p className="text-white font-bold text-lg">Global Presence</p>
                    <p className="text-blue-100 text-sm mt-2">9+ Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Team Section */}
          <section className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="hidden lg:block">
              <div className="bg-linear-to-br from-orange-100 to-orange-50 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-3">👥</div>
                  <p className="text-gray-700 font-semibold">Expert Team</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
              <p className="text-gray-700 text-lg mb-6">
                Our team comprises well-qualified consultants with doctorate, engineering, information technology and business administration backgrounds. We have hands-on work experience in a wide range of sectors such as:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                {[
                  'Port Operations',
                  'Terminal Operations (Oil and Gas)',
                  'Entertainment and Theme Park',
                  'Free Trade Zone',
                  'Manufacturing',
                  'Facilities Management',
                  'Construction',
                  'Electrical Substations',
                  'Project Management',
                  'Trading',
                  'Logistics',
                  'Marine Engineering',
                  'Packaging Industries'
                ].map((sector, i) => (
                  <div key={i} className="flex items-center">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>{sector}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 text-lg mt-6">
                We have worked with companies ranging from small scale to large scale (in terms of size, activities) and from single site to multiple locations. Our professionals are expertise in delivering consultancy services to ensure that you <span className="font-bold">are CERTIFIED AT THE FIRST TIME</span>.
              </p>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-lg text-white" style={{ backgroundColor: '#295e8f' }}>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <ul className="space-y-3 text-blue-50">
                <li className="flex items-start">
                  <span className="mr-3 text-xl">→</span>
                  <span>To be the preferred firm for the provision of consultancy services for ISO and non-ISO standards across the globe.</span>
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-lg text-white" style={{ backgroundColor: '#ee991a' }}>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <ul className="space-y-3 text-yellow-50">
                <li className="flex items-start">
                  <span className="mr-3 text-xl">→</span>
                  <span>To deliver on time quality service based on customer requirements.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">→</span>
                  <span>To tailor customer's system in compliance with the standards in order to build a comprehensive management system for their organisation.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '⭐',
                  title: 'Expert Consultants',
                  description:
                    'Our team consists of highly experienced ISO certification experts with credentials in multiple ISO standards.',
                },
                {
                  icon: '✓',
                  title: 'Proven Track Record',
                  description:
                    'We have successfully guided hundreds of organizations through ISO certification processes across various industries.',
                },
                {
                  icon: '🎯',
                  title: 'First Time Certification',
                  description:
                    'Our expertise ensures you achieve certification at the first time with minimal disruption to operations.',
                },
                {
                  icon: '💡',
                  title: 'Customized Solutions',
                  description:
                    'We understand that every organization is unique, so we tailor our approach to your specific needs.',
                },
                {
                  icon: '⚡',
                  title: 'Global Experience',
                  description:
                    'Working across 9+ countries with diverse industries and sectors gives us unmatched expertise.',
                },
                {
                  icon: '🤝',
                  title: 'Comprehensive Services',
                  description:
                    'From initial assessment to final certification and ongoing support, we provide end-to-end solutions.',
                },
              ].map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="p-8 rounded-lg text-center" style={{ backgroundColor: '#295e8f' }}>
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-6">
              Contact us today to learn how we can help your organization achieve ISO certification.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="px-6 py-3 text-white rounded-lg hover:opacity-90 transition-colors font-semibold" style={{ backgroundColor: '#ee991a' }}
              >
                Get in Touch
              </Link>
              <Link
                href="/iso-certification-services-uae"
                className="px-6 py-3 bg-white text-white border-2 border-white rounded-lg hover:bg-blue-50 transition-colors font-semibold" style={{ color: '#295e8f', borderColor: 'white' }}
              >
                View Our Services
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
