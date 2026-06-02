import { Metadata } from 'next';

const TITLE = 'AI vs. Traditional Fitness Coaching: Full Comparison';
// 155-char description — validated
const DESCRIPTION = 'AI coaching vs. personal trainers: compare cost, personalization, availability, and results across 10 dimensions to find the best fit for your goals.';

export const metadata: Metadata = {
  title: `${TITLE} | Fitnivo Blog`,
  description: DESCRIPTION,
  keywords: [
    'AI fitness coach',
    'AI vs traditional coaching',
    'personal trainer vs app',
    'AI personal trainer',
    'fitness coaching comparison',
    'best fitness coaching method',
    'Fitnivo AI coach',
  ],
  authors: [{ name: 'James Okafor, CSCS', url: 'https://fitnivo.in/blog' }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://fitnivo.in/blog/ai-vs-traditional-coaching',
    type: 'article',
    publishedTime: '2026-06-02T00:00:00Z',
    modifiedTime: '2026-06-02T00:00:00Z',
    authors: ['James Okafor, CSCS'],
    tags: ['AI coaching', 'fitness', 'personal training', 'comparison'],
    images: [
      {
        url: 'https://fitnivo.in/images/blog/ai-coaching/ai_vs_traditional_hero.webp',
        width: 1200,
        height: 630,
        alt: 'AI fitness coaching versus traditional personal training comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['https://fitnivo.in/images/blog/ai-coaching/ai_vs_traditional_hero.webp'],
  },
  alternates: {
    canonical: 'https://fitnivo.in/blog/ai-vs-traditional-coaching',
  },
  robots: 'index, follow',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
