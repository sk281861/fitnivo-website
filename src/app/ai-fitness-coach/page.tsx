import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from './_components/Hero';
import DefinitionSection from './_components/Definition';
import FeatureShowcase from './_components/FeatureShowcase';
import ComparisonTable from './_components/ComparisonTable';
import TestimonialShowcase from './_components/TestimonialShowcase';
import FAQ from './_components/FAQ';
import PremiumCTA from './_components/PremiumCTA';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

export const metadata: Metadata = {
  title: 'Fitnivo AI Fitness Coach | Personal Training & Nutrition Advisor',
  description:
    'Transform your body with an intelligent digital personal trainer. PhD-level nutrition insights, real-time form correction, and 24/7 AI chat accountability.',
  keywords: [
    'AI fitness coach',
    'AI personal trainer',
    'fitness app',
    'nutrition advisor',
    'AI workout plan',
    'form correction',
    'wearable sync',
    'progressive overload',
  ],
  alternates: {
    canonical: 'https://fitnivo.in/ai-fitness-coach',
  },
};

export default function AIFitnessCoachPage() {
  const productSchema = generateProductSchema({
    name: 'Fitnivo AI Fitness Coach',
    description:
      'AI-powered workout optimization with real-time form correction, adaptive difficulty, and PhD-level nutrition insights.',
    image: 'https://fitnivo.in/images/ai-coach.webp',
    url: 'https://fitnivo.in/ai-fitness-coach',
    ratingValue: 4.9,
    ratingCount: 1240,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://fitnivo.in' },
    { name: 'AI Fitness Coach', url: 'https://fitnivo.in/ai-fitness-coach' },
  ]);

  const schemaJson = JSON.stringify([productSchema, breadcrumbSchema]);

  return (
    <main className="bg-[#0B0B0F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />
      <Navbar />
      <Hero />
      <DefinitionSection />
      <FeatureShowcase />
      <ComparisonTable />
      <TestimonialShowcase />
      <FAQ />
      <PremiumCTA />
      <Footer />
    </main>
  );
}
