import Link from 'next/link';
import { Metadata } from 'next';
import { getStaticPageBySlug } from '@/lib/supabase-data';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getStaticPageBySlug('clients');
  return {
    title: page?.meta_title || 'Our Clients | WIZ Management Solutions',
    description: page?.meta_description || 'See the organizations we have successfully guided through ISO certification processes across various industries.',
    keywords: page?.meta_keywords || 'WIZ clients, ISO certification success, client testimonials, industry expertise',
  };
}

const logos = [
  '1 Dubai Airports',
  '2 Salik',
  '3 Airbus',
  '4 Global Village',
  '5 Enoc',
  '6 EPPCO',
  '7 Ain Dubai',
  '8 Carnaval',
  '9 Dubai Holding Entertainment',
  '10 Dubai Holding Real Estate',
  '11 AtkinsRealis',
  '12 Henkel',
  '13 Terberg',
  '14 Laticrete',
  '15 Ajman Port',
  '16 Arabian Radio Network',
  '17 Green Planet',
  '18 Roxy Cinemas',
  '19 Motion Gate',
  '20 Jetex',
  '21 Fujairah Oil Terminal',
  '22 Ecomar',
  '23 Emirates Electrical Engineering',
  '24 Vopak',
  '25 Dedienne Aerospace',
  '26 B3 International',
];

export default function ClientsPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">Our Clients</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Clients</h1>
            <p className="text-lg text-gray-600">
              Trusted by over 500 organizations worldwide for ISO certification excellence
            </p>
          </div>

          {/* Client Logos Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Organizations We Serve</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={`/clients/${encodeURIComponent(logo)}.webp`}
                    alt={logo.replace(/^\d+\s*/, '')}
                    className="max-w-full h-auto max-h-24 object-contain"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-white rounded-lg p-12 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-lg text-gray-600">Organizations Served</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                <p className="text-lg text-gray-600">Successful Certifications</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <p className="text-lg text-gray-600">Client Satisfaction Rate</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
