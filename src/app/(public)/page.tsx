import { Metadata } from 'next';
import { getStaticPageBySlug } from '@/lib/supabase-data';
import HomeContent from './HomeContent';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getStaticPageBySlug('home');
  return {
    title: page?.meta_title || 'WIZ Management Solutions | ISO Certification Consultants',
    description: page?.meta_description || 'Expert ISO certification consulting services in Dubai, UAE. We help organizations achieve ISO 9001, ISO 14001, ISO 45001 and other certifications.',
    keywords: page?.meta_keywords || undefined,
  };
}

export default function Home() {
  return <HomeContent />;
}
