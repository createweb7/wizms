import Link from 'next/link';
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'Contact WIZ Management Solutions | ISO Certification Services',
  description: 'Get in touch with WIZ Management Solutions for ISO certification consulting. Contact us today to discuss your organization\'s certification needs.',
  keywords: 'contact WIZ, ISO certification inquiries, consulting contact, management solutions contact',
};

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">Contact</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Get in touch with our ISO certification experts. We're here to help you achieve your certification goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information Cards */}
            
            {/* Phone */}
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg" style={{ backgroundColor: '#ee991a' }}>
                    <MdPhone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Call Us</h3>
                  <div className="space-y-2">
                    <a
                      href="tel:+97152632363"
                      className="block text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      00971 52 6325363
                    </a>
                    <a
                      href="tel:+971552774123"
                      className="block text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      00971 55 2774123
                    </a>
                    <a
                      href="tel:+97143589945"
                      className="block text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      00971 4 3589945
                    </a>
                    <a
                      href="tel:+97143589946"
                      className="block text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      00971 4 3589946
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg" style={{ backgroundColor: '#ee991a' }}>
                    <MdEmail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Send Email</h3>
                  <a
                    href="mailto:karthiga@wizms.net"
                    className="text-gray-700 hover:text-orange-600 transition-colors block"
                  >
                    karthiga@wizms.net
                  </a>
                  <p className="text-sm text-gray-500 mt-2">We respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg" style={{ backgroundColor: '#ee991a' }}>
                    <MdLocationOn className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Office Location</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Office 31, Corridor 15,<br />
                    Hamsah-A, Mezzanine Floor,<br />
                    Ansar Gallery Complex,<br />
                    Al Karama,<br />
                    P.O.Box - 125937,<br />
                    Dubai - UAE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours Card */}
          <div className="bg-linear-to-r from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200 mb-16">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg" style={{ backgroundColor: '#295e8f' }}>
                  <MdAccessTime className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Business Hours</h3>
                <ul className="text-gray-700 space-y-2">
                  <li><span className="font-semibold">Monday - Saturday:</span> 9:00 AM - 6:00 PM (GST)</li>
                  <li><span className="font-semibold">Sunday:</span> Closed</li>
                  <li className="text-sm text-gray-600 mt-4">We're available to answer your queries and provide consultancy support during these hours.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
            <p className="text-gray-600 mb-8">
              For any queries or to schedule a consultation, please fill out the form below. We'll get back to you within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
