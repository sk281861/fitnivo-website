import type { Metadata } from 'next';
import { generateBreadcrumbSchema } from '@/lib/seo/generateSchema';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Fitnivo — AI Fitness & Nutrition App',
  description:
    'Meet the Fitnivo editorial team. We test and review AI fitness apps, workout planners, and nutrition tools so you can make an informed choice.',
  alternates: { canonical: 'https://fitnivo.in/about' },
  openGraph: {
    title: 'About Fitnivo — AI Fitness & Nutrition App',
    description:
      'Meet the Fitnivo editorial team. We test and review AI fitness apps, workout planners, and nutrition tools so you can make an informed choice.',
    url: 'https://fitnivo.in/about',
    type: 'website',
  },
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://fitnivo.in' },
    { name: 'About Us', url: 'https://fitnivo.in/about' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutContent />
    </>
  );
}
