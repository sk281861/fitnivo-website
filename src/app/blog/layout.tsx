import { Metadata } from 'next';

const TITLE = 'Fitnivo Blog | Science-Backed Performance & AI Fitness Insights';
const DESCRIPTION = 'Explore precision wellness, biometric synchronization, nutrition science, and AI-driven coaching insights on the Fitnivo blog.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'fitness blog',
    'AI fitness coaching',
    'nutrition science',
    'biometric synchronization',
    'mindfulness performance',
    'wearable optimization',
    'Fitnivo blog',
  ],
  authors: [{ name: 'Fitnivo Research Team', url: 'https://fitnivo.in/blog' }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://fitnivo.in/blog',
    type: 'website',
    siteName: 'Fitnivo',
    images: [
      {
        url: 'https://fitnivo.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fitnivo Blog - Future of Integrated Wellness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['https://fitnivo.in/og-image.png'],
  },
  alternates: {
    canonical: 'https://fitnivo.in/blog',
  },
  robots: 'index, follow',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
