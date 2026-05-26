import { Metadata } from 'next';
import { generateLandingPageMetadata } from '@/lib/seo/generateMetadata';

const pageMetadata = {
  title: 'Mindfulness & Wellness | Fitnivo',
  description: 'Mindfulness Meets Performance with AI-guided meditation and stress management. Download Fitnivo to achieve holistic wellness and peak performance today.',
  image: 'https://fitnivo.in/images/pillar_mind.webp',
  url: 'https://fitnivo.in/mindfulness-wellness',
  keywords: ['mindfulness', 'meditation', 'stress management', 'wellness', 'mental health'],
};

export const metadata: Metadata = {
  ...generateLandingPageMetadata(pageMetadata),
  alternates: {
    canonical: 'https://fitnivo.in/mindfulness-wellness',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
