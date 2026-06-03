export const dynamic = 'force-dynamic';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/landing/HeroSection';
import FeatureGrid from '@/components/landing/FeatureGrid';
import nextDynamic from 'next/dynamic';
import TestimonialCarousel from '@/components/landing/TestimonialCarousel';
import FAQAccordion from '@/components/landing/FAQAccordion';
import CTASection from '@/components/landing/CTASection';
import RelatedContent from '@/components/landing/RelatedContent';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

const DeviceCompatibility = nextDynamic(() => import('@/components/landing/DeviceCompatibility'), { ssr: true });

const features = [
  {
    icon: '❤️',
    headline: 'Heart Rate Integration',
    description: 'Real-time heart rate monitoring for optimal training zones and recovery tracking',
    image: '/images/biometric_sync_wearable.webp',
    imageAlt: 'Heart rate monitoring',
  },
  {
    icon: '😴',
    headline: 'Sleep Tracking',
    description: 'Comprehensive sleep analysis with stage tracking and recovery recommendations',
    image: '/mindfulness_zen_png_1776977999197.webp',
    imageAlt: 'Sleep tracking analytics',
  },
  {
    icon: '🏃',
    headline: 'Activity Monitoring',
    description: 'Automatic activity detection and comprehensive movement tracking throughout the day',
    image: '/ai_system_core_png_1776977971209.webp',
    imageAlt: 'Activity monitoring data',
  },
  {
    icon: '💪',
    headline: 'Recovery Metrics',
    description: 'Advanced recovery scoring based on HRV, sleep, and training load',
    image: '/elite_performance_png_1776977986303.webp',
    imageAlt: 'Biometric recovery score',
  },
  {
    icon: '📊',
    headline: 'Performance Analytics',
    description: 'Detailed performance insights and trend analysis for continuous improvement',
    image: '/ai_workout.webp',
    imageAlt: 'Biometric analytics dashboard',
  },
];

const testimonials = [
  {
    quote: 'Seeing all my biometric data in one place has revolutionized how I train. I make smarter decisions every day.',
    name: 'Tom Anderson',
    role: 'Triathlon Coach',
    avatar: '/images/fitbuu.webp',
    company: 'Sports Academy',
  },
  {
    quote: 'The recovery metrics are spot on. I know exactly when my body needs a rest day.',
    name: 'Sarah Jenkins',
    role: 'Amateur Runner',
    avatar: '/images/fitbuu.webp',
    company: 'Running Club',
  },
  {
    quote: 'Easy integration and clean layout. It connects seamlessly with my Apple Watch.',
    name: 'John Miller',
    role: 'Fitness Enthusiast',
    avatar: '/images/fitbuu.webp',
    company: 'Tech Company',
  },
];

const faqs = [
  {
    question: 'Which devices are supported?',
    answer: 'We support Apple Watch, Garmin, Fitbit, Oura Ring, Whoop, Samsung Watch, Polar, and Strava.',
  },
  {
    question: 'How often does data sync?',
    answer: 'Data syncs automatically in the background whenever you open the app. Active workouts sync in real-time.',
  },
  {
    question: 'Is my biometric data secure?',
    answer: 'Yes! All biometric data is fully encrypted end-to-end and stored securely. We never share your data with third parties.',
  },
  {
    question: 'Can I use multiple devices?',
    answer: 'Yes! You can connect multiple wearables and services. Our AI will merge the metrics to build a unified profile.',
  },
  {
    question: 'What if I don\'t have a wearable?',
    answer: 'You can still track workouts and meals manually. However, wearables enable the real-time biometric analysis.',
  },
];

const relatedContent = [
  {
    title: 'Biometric Optimization Science',
    description: 'Learn the science behind biometric-driven fitness optimization',
    href: '/blog/biometric-optimization-science',
    icon: '🔬',
  },
  {
    title: 'Recovery Optimization',
    description: 'Sleep, stress, and adaptation science for peak performance',
    href: '/blog/recovery-optimization-sleep-stress',
    icon: '😴',
  },
  {
    title: 'AI Fitness Coach',
    description: 'Combine biometric optimization with AI-powered workouts',
    href: '/ai-fitness-coach',
    icon: '💪',
  },
];

export default function BiometricSyncPage() {
  const productSchema = generateProductSchema({
    name: 'Biometric Synchronization',
    description: 'Seamless integration with wearables for data-driven fitness optimization and performance insights',
    image: 'https://fitnivo.in/images/ai_system_core_png_1776977971209.webp',
    url: 'https://fitnivo.in/biometric-sync',
    ratingValue: 4.9,
    ratingCount: 1240,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://fitnivo.in' },
    { name: 'Biometric Sync', url: 'https://fitnivo.in/biometric-sync' },
  ]);

  const schemaJson = JSON.stringify([productSchema, breadcrumbSchema]);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />
      <Navbar />

      <HeroSection
        headline="Biometric-Driven Optimization"
        subheading="Sync with your favorite wearables and unlock data-driven insights that transform your fitness journey."
        primaryCTA={{ text: 'Download App', href: 'https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en' }}
        secondaryCTA={{ text: 'Learn More', href: '#features' }}
        backgroundImage="/images/ai_neural_static_bg.webp"
        comingSoon={true}
      />

      <FeatureGrid
        title="Data-Driven Fitness"
        description="Harness the power of biometric data for smarter training decisions"
        features={features}
      />

      <DeviceCompatibility />

      {/* Data Privacy Section */}
      <section className="py-16 md:py-24 bg-white/5 border-t border-b border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Your Data, Your Privacy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-white mb-4">🔒 Encryption</h3>
              <p className="text-gray-400">
                All data is encrypted in transit and at rest using industry-standard AES-256 encryption.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-white mb-4">📋 Compliance</h3>
              <p className="text-gray-400">
                We comply with HIPAA, GDPR, and CCPA regulations to protect your health information.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-white mb-4">🚫 No Sharing</h3>
              <p className="text-gray-400">
                Your biometric data is never sold or shared with third parties without explicit consent.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Your Control</h3>
            <p className="text-gray-400 mb-4">
              You have complete control over your data. You can:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
              <li>✓ View all connected devices and permissions</li>
              <li>✓ Disconnect devices at any time</li>
              <li>✓ Export your data in standard formats</li>
              <li>✓ Request complete data deletion</li>
            </ul>
          </div>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

      <CTASection
        headline="Unlock Your Biometric Potential"
        subheading="Connect your wearables and start making data-driven fitness decisions. Download Fitnivo today."
        primaryCTA={{ text: 'Download Fitnivo', href: 'https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en' }}
        secondaryCTA={{ text: 'Learn More', href: '#features' }}
      />

      <RelatedContent items={relatedContent} />

      <Footer />
    </main>
  );
}
