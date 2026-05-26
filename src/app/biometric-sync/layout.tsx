import { Metadata } from 'next';
import { generateLandingPageMetadata } from '@/lib/seo/generateMetadata';

const pageMetadata = {
  title: 'Biometric Synchronization | Fitnivo',
  description: 'Biometric-Driven Optimization syncs with Apple Watch, Fitbit, Garmin and more. Download Fitnivo to unlock powerful data-driven fitness insights today.',
  image: 'https://fitnivo.in/images/ai_system_core_png_1776977971209.webp',
  url: 'https://fitnivo.in/biometric-sync',
  keywords: ['biometric sync', 'wearable integration', 'heart rate', 'fitness tracking', 'data-driven'],
};

export const metadata: Metadata = {
  ...generateLandingPageMetadata(pageMetadata),
  alternates: {
    canonical: 'https://fitnivo.in/biometric-sync',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
