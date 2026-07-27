'use client';

import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import CertificationsGrid from '@/components/CertificationsGrid';
import ClientsCarousel from '@/components/ClientsCarousel';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import HowToGetISO from '@/components/HowToGetISO';

export default function HomeContent() {
  return (
    <div>
      <HeroSlider />
      <ClientsCarousel />
      <AboutSection />
      <CertificationsGrid />
      <TestimonialsCarousel />
      <HowToGetISO />

      {/* Bottom intro paragraph */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            In Dubai, UAE, WIZMS provides ISO certification consulting, implementation, training, documentation, and audit support services for businesses wishing to achieve internationally recognised management system certifications. WIZMS offer certification services for all ISO 9001, ISO 14001, 45001 and other international standards. Our ISO consultants have years of experience and can simplify the certification process, ensuring that quality is maintained while also improving operational efficiency, environmental performance, work safety, information security and business continuity. WIZMS&apos;s ISO certification solutions are both cost-effective, timely, and deliverable, enhancing customer confidence, satisfying regulatory requirements, or giving businesses an edge in the industry. From Dubai to Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah and Fujairah in the Middle East as well as across the UAE, WIZMS offers comprehensive ISO consulting services for businesses of all sizes.
          </p>
        </div>
      </section>
    </div>
  );
}
