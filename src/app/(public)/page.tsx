'use client';

import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import CertificationsGrid from '@/components/CertificationsGrid';
import ClientsCarousel from '@/components/ClientsCarousel';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import HowToGetISO from '@/components/HowToGetISO';

export default function Home() {
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Section */}
      <AboutSection />

      {/* Certifications Grid */}
      <CertificationsGrid />

      {/* Clients Carousel */}
      <ClientsCarousel />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* How to Get ISO */}
      <HowToGetISO />
    </div>
  );
}
