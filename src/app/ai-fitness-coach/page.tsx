import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateBreadcrumbSchema } from '@/lib/seo/generateSchema';
import PageContent from '@/components/ai-fitness-coach/PageContent';

export const metadata: Metadata = {
  title: 'AI Fitness Coach & Personal Trainer | Fitnivo',
  description:
    'Get a personalized AI fitness coach that creates workouts around your goals, tracks progress, plans nutrition, and adapts as you improve. Free tier with 3 AI food scans/day and 15 AI coach messages/day; Pro is $10/month or $60/year.',
  keywords: [
    'AI fitness coach',
    'AI personal trainer',
    'AI fitness trainer',
    'AI gym trainer',
    'AI fitness coaching',
    'personal AI trainer',
    'AI workout generator',
    'AI fitness and nutrition coach',
  ],
  alternates: { canonical: 'https://fitnivo.in/ai-fitness-coach' },
  openGraph: {
    title: 'AI Fitness Coach & Personal Trainer | Fitnivo',
    description: 'A personalized AI fitness coach that adapts your workouts, tracks calories and macros, and helps you stay consistent.',
    url: 'https://fitnivo.in/ai-fitness-coach',
    type: 'website',
  },
};

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fitnivo AI Fitness Coach',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Android, iOS',
  description: 'AI fitness coach and personal trainer that creates personalized workouts, tracks calories and macros, scans meals with AI, and adapts as you progress.',
  url: 'https://fitnivo.in/ai-fitness-coach',
  offers: [
    { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'Free tier' },
    { '@type': 'Offer', price: '10', priceCurrency: 'USD', name: 'Monthly Pro' },
    { '@type': 'Offer', price: '60', priceCurrency: 'USD', name: 'Annual Pro' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is an AI fitness coach?', acceptedAnswer: { '@type': 'Answer', text: 'An AI fitness coach is a digital fitness assistant that uses information about your goals, training, and progress to provide personalized workout and fitness guidance.' } },
    { '@type': 'Question', name: 'Is Fitnivo an AI personal trainer?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Fitnivo acts as a personal AI trainer by helping you create personalized workouts, track your training, monitor progress, and get fitness guidance whenever you need it.' } },
    { '@type': 'Question', name: 'Can an AI fitness coach create workout plans?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Fitnivo creates personalized workouts based on your goals, experience level, available equipment, and training history.' } },
    { '@type': 'Question', name: 'Can an AI personal trainer help with nutrition?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Fitnivo combines fitness coaching with calorie, macro, and meal tracking so your nutrition is managed alongside your training in one app.' } },
    { '@type': 'Question', name: 'Can an AI fitness coach replace a personal trainer?', acceptedAnswer: { '@type': 'Answer', text: 'An AI coach provides convenient workout planning, tracking, and general fitness guidance. It is a strong digital alternative for people who want structured training without booking ongoing one-to-one sessions.' } },
    { '@type': 'Question', name: 'Is an AI fitness coach good for beginners?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. AI coaching helps beginners understand what workouts to perform, how to structure their training, and how to track progress from the very first session.' } },
    { '@type': 'Question', name: 'Can I use an AI fitness coach at the gym?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Fitnivo builds workouts around the equipment available to you and lets you log exercises, sets, reps, and weight during your gym session.' } },
    { '@type': 'Question', name: 'Can an AI fitness coach help me lose weight?', acceptedAnswer: { '@type': 'Answer', text: 'An AI fitness app helps you structure workouts and monitor calories, macros, and progress. Sustainable weight change also depends on nutrition consistency, activity, sleep, and other individual factors.' } },
    { '@type': 'Question', name: 'Can an AI fitness coach help build muscle?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Fitnivo helps you follow structured resistance training, track your workouts, and monitor progression over time — the foundation of muscle growth.' } },
    { '@type': 'Question', name: 'What makes Fitnivo different from an AI workout generator?', acceptedAnswer: { '@type': 'Answer', text: 'A workout generator primarily creates a routine. Fitnivo combines workout generation with workout tracking, nutrition tracking, meal planning, AI food scanning, and ongoing coaching in one app.' } },
  ],
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'AI Fitness Coach', url: 'https://fitnivo.in/ai-fitness-coach' },
]);

const schemaJson = JSON.stringify([softwareAppSchema, faqSchema, breadcrumbSchema]);

export default function AIFitnessCoachPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navbar />
      <PageContent />
      <Footer />
    </main>
  );
}
