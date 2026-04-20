import Link from 'next/link';
import { Metadata } from 'next';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'Best ISO Certification Consultant in Dubai, UAE | Wizms',
  description: 'ISO certification consultancy services in Dubai, UAE: Provides ISO certification services in ISO 9001, OHSAS 18001, ISO 17025, ISO 14001, ISO 27001, ISO implementation training, ISO documentation training, Awareness training and internal auditor training in Dubai, UAE.',
  keywords: 'ISO Certification Services, ISO Consultant Services, ISO Consultancy Dubai, ISO Certification Consultant UAE, ISO Services in Dubai, ISO Services in UAE',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'ISO Consultancy Services',
      description: 'WIZMS is the pioneer in providing Management System ISO Consultancy Services for organizations of all sizes and nature. We also help organizations to get certified in various ISO standards.'
    },
    {
      title: 'Documentation Services',
      description: 'WIZMS trains the employees of an organization to create documents on its products and services. WIZMS ensures that the whole documentation process is less complicated and more resourceful.'
    },
    {
      title: 'Implementation Services',
      description: 'WIZMS educates employees of the organization to help them understand the framework, key concepts, and requirements for implementing ISO certifications. This helps the organization to reach greater heights by improving the performance and processes.'
    },
    {
      title: 'Training Solutions',
      description: 'Our training solutions are developed by experts to help employees gain comprehensive knowledge, improve their skills and confidence levels.'
    },
    {
      title: 'Auditing Services',
      description: 'Auditing is mandatory for International Management Standards to conduct the audit. Thus WIZMS provides the best Audit services consultancy for organizations to help them get certified.'
    },
    {
      title: 'Certification Services',
      description: 'WIZMS provide the best certification services consultancy because WIZMS has a huge network and tie-ups with various certification bodies.'
    },
    {
      title: 'Post Certification Services',
      description: 'Post-certification, our experts will ensure that your management system is in place by visiting your organization monthly or annually.'
    }
  ];

  const certifications = [
    {
      title: 'ISO 9001 Certification',
      description: 'ISO 9001 standard is used to integrate a quality management system in an organization. If an organization follows the ISO 9001 standard properly than it can provide quality products and services. It applies to organizations of all sizes and nature.',
      link: '/iso-9001-certification-consultants-uae',
      icon: '✓'
    },
    {
      title: 'ISO 14001 Certification',
      description: 'ISO 14001 is the standard for the management of the organization\'s environmental program. As ISO 14001 certification consultants, we recommend you to integrate this certification with ISO 9001 to enhance the performance of the organization. It applies to organizations of all sizes and nature.',
      link: '/iso-14001-certification-consultants-uae',
      icon: '🌱'
    },
    {
      title: 'ISO 45001 Certification',
      description: 'ISO 45001 is an international standard that specifies the requirement for occupational health and safety management systems. All organizations are users of this standard. ISO 45001 Certification helps to reduce workplace risk and ensures that the employees reach home safely.',
      link: '/iso-45001-certification-consultants-uae',
      icon: '🛡️'
    },
    {
      title: 'OHSAS 18001 Certification',
      description: 'OHSAS is the British standard for occupational health and safety management system. With OHSAS certification, you can have an incident-free workplace. Moreover, with OHSAS 18001 certification, you will gain worldwide recognition, which leads to an increase in business.',
      link: '/iso-18001-certification-consultants-uae',
      icon: '🛡️'
    },
    {
      title: 'ISO 50001 Certification',
      description: 'ISO 50001 is the international standard for energy management. ISO 50001 Certification helps to reduce greenhouse emission and saves organizations operation cost. This certification is not mandatory, but we recommend it considering all the benefits.',
      link: '/iso-50001-certification-consultants-uae',
      icon: '⚡'
    },
    {
      title: 'ISO 27001 Certification',
      description: 'ISO 27001 is the standard for international security management. Your organization can have many important data sets like financial data, employee database etc. ISO 27001 helps to reduce risk related to data protection of your organization.',
      link: '/iso-27001-certification-consultants-uae',
      icon: '🔒'
    },
    {
      title: 'ISO 22000 Certification',
      description: 'ISO 22000 is a food safety management standard for any organization that follows the food chain. ISO 22000 helps to reduce the business risk that can be created because of food safety. ISO 22000 Certification helps to increase the level of food hygiene and safety.',
      link: '/iso-22000-certification-consultants-uae',
      icon: '🍽️'
    },
    {
      title: 'ISO 22301 Certification',
      description: 'ISO 22301 is the international standard for business continuity management. With ISO 22301 Certification, you can demonstrate your potential customers that your organization can overcome disruptions easily.',
      link: '/iso-22301-certification-consultants-uae',
      icon: '⚠️'
    },
    {
      title: 'ISO 10002 Certification',
      description: 'ISO 10002 is complaint handling process published by the International organization for standardization in 2004. With, ISO 10002 Certification organizations can avail of high customer satisfaction. It applies to organizations of all sizes and nature.',
      link: '/iso-10002-certification-consultants-uae',
      icon: '👥'
    },
    {
      title: 'ISO 41001 Certification',
      description: 'ISO 41001 is an international standard for Facility Management System. ISO 41001 can be easily integrated with other ISO standards to improve the workforce productivity, safety and health and wellbeing.',
      link: '/iso-41001-certification-consultants-uae',
      icon: '🏢'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">Services</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">ISO Certification Consultants in Dubai, UAE</h1>
                
                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                  <p>
                    WIZMS is the <strong>best ISO certification consultancy</strong> in Dubai, UAE. We are <strong>providing ISO certification services in all over UAE</strong>. We can provide <strong>ISO consultancy services</strong> to companies of all sizes. We offer <strong>ISO certification services</strong> to companies from all sectors. We specialize in consulting, training, auditing and ISO certification services.
                  </p>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <div className="space-y-6">
                      {services.map((service, idx) => (
                        <div key={idx} className="border-l-4 border-blue-600 pl-4">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{idx + 1}. {service.title}</h3>
                          <p className="text-gray-700">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">ISO Certification Consultant Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {certifications.map((cert, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                          <Link href={cert.link} className="block group">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 text-3xl">
                                {cert.icon}
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                  {cert.title}
                                </h3>
                                <p className="text-gray-700 text-sm">{cert.description}</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
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
                  <Link href="/iso-training-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO Training</p>
                    <p className="text-sm text-gray-600">Expert Training Courses</p>
                  </Link>
                  <Link href="/iso-implementation-consultancy-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO Implementation</p>
                    <p className="text-sm text-gray-600">Complete Implementation</p>
                  </Link>
                  <Link href="/iso-9001-certification-consultants-uae" className="block p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 transition">
                    <p className="font-semibold text-gray-900">ISO 9001</p>
                    <p className="text-sm text-gray-600">Quality Management</p>
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-linear-to-r from-blue-600 to-blue-700 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Need Our Services?</h4>
                  <p className="text-sm mb-4">Get professional ISO certification consultation today.</p>
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

      <EnquiryForm serviceType="ISO Certification Services" bgColor="from-blue-600 to-blue-700" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ISO Certification Consultants in Dubai, UAE',
          description: 'ISO certification consultancy services in Dubai, UAE. WIZMS provides comprehensive ISO certification services and consultancy.',
          author: { '@type': 'Organization', name: 'Wizms' },
          publisher: { '@type': 'Organization', name: 'Wizms' },
          url: 'https://wizms.net/iso-certification-services-uae',
        })}
      </script>
    </>
  );
}