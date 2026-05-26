import { Metadata } from 'next';
import { generateLandingPageMetadata } from '@/lib/seo/generateMetadata';

const pageMetadata = {
  title: 'Nutrition Intelligence | Fitnivo',
  description: 'Personalized Nutrition Intelligence optimizes your diet with AI-powered meal planning and macro tracking. Download Fitnivo for smarter nutrition today.',
  image: 'https://fitnivo.in/images/pillar_nutrition.webp',
  url: 'https://fitnivo.in/nutrition-intelligence',
  keywords: ['nutrition AI', 'meal planning', 'macro tracking', 'personalized diet'],
};

export const metadata: Metadata = {
  ...generateLandingPageMetadata(pageMetadata),
  alternates: {
    canonical: 'https://fitnivo.in/nutrition-intelligence',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
