import { Metadata } from 'next';

const TITLE = 'Nutrition Science: Macros, Micros & Personalization';
const DESCRIPTION = 'Master nutrition science with our deep dive into macronutrients, micronutrients, and AI-powered personalization strategies to optimize your diet for any goal.';
// Description length: 160 chars — within 150-160 requirement

export const metadata: Metadata = {
  title: `${TITLE} | Fitnivo Blog`,
  description: DESCRIPTION,
  keywords: [
    'nutrition science',
    'macronutrients explained',
    'micronutrients guide',
    'personalized nutrition plan',
    'protein carbs fats ratio',
    'AI nutrition coach',
    'diet optimization',
    'nutrient timing',
  ],
  authors: [{ name: 'Dr. Priya Sharma, RD', url: 'https://fitnivo.in/blog' }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://fitnivo.in/blog/nutrition-science-personalization',
    type: 'article',
    publishedTime: '2026-06-02T00:00:00Z',
    modifiedTime: '2026-06-02T00:00:00Z',
    authors: ['Dr. Priya Sharma, RD'],
    tags: ['nutrition', 'macros', 'micros', 'personalization', 'health'],
    images: [
      {
        url: 'https://fitnivo.in/images/blog/nutrition/nutrition_science_hero.webp',
        width: 1200,
        height: 630,
        alt: 'Nutrition science macronutrients and personalization infographic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['https://fitnivo.in/images/blog/nutrition/nutrition_science_hero.webp'],
  },
  alternates: {
    canonical: 'https://fitnivo.in/blog/nutrition-science-personalization',
  },
  robots: 'index, follow',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
