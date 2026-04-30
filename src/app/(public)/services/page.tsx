import { Metadata } from 'next';
import { getStaticPageBySlug } from '@/lib/supabase-data';
import ServicesContent from './ServicesContent';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getStaticPageBySlug('services');
  return {
    title: page?.meta_title || 'ISO Certification Services | WIZ Management Solutions',
    description: page?.meta_description || 'Comprehensive ISO certification and management system consulting services in Dubai, UAE.',
    keywords: page?.meta_keywords || undefined,
  };
}

export default function ServicesPage() {
  return <ServicesContent />;
}
