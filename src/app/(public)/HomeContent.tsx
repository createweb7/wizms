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
      <AboutSection />
      <CertificationsGrid />
      <ClientsCarousel />
      <TestimonialsCarousel />
      <HowToGetISO />
    </div>
  );
}
