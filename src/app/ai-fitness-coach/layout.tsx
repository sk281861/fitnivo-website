import { Metadata } from 'next';
import { generateLandingPageMetadata } from '@/lib/seo/generateMetadata';

const pageMetadata = {
  title: 'AI Fitness Coach | Fitnivo',
  description: 'AI Fitness Coach optimizes your workouts with real-time form correction and adaptive difficulty. Download Fitnivo to transform your fitness journey today.',
  image: 'https://fitnivo.in/images/ai-coach.webp',
  url: 'https://fitnivo.in/ai-fitness-coach',
  keywords: ['AI fitness coach', 'workout optimization', 'form correction', 'adaptive training'],
};

export const metadata: Metadata = {
  ...generateLandingPageMetadata(pageMetadata),
  alternates: {
    canonical: 'https://fitnivo.in/ai-fitness-coach',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
