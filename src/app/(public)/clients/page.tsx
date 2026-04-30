import Link from 'next/link';
import Image from 'next/image';
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

export default function ClientsPage() {
  // Logo filenames - these will be served as WebP format
  // Only includes visible logos from original clients.php (not commented out)
  const logos = [
    'airbus-logo',
    '4',
    'Ain_dubai',
    'carnaval',
    'Dubai_holding',
    'enoc',
    '1',
    'toshiba',
    'arn',
    'hatta',
    'government_of_ajman',
    'hutchinson_sports',
    '34',
    '35',
    '36',
    '2',
    '12',
    'emirates_national',
    '15',
    '13',
    '8',
    '9',
    '30',
    '6',
    'doneevents',
    'grundfos',
    '3',
    '37',
    '28',
    '33',
    '20',
    '16',
    '26',
    '27',
    'horizon_terminals',
    'alrashed',
    'LDPL_Middle_East',
    'Seal_for_life',
  ];

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
                    src={`/clients/${logo}.webp`}
                    alt={`Client logo ${logo}`}
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
