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

const WellnessAssessment = nextDynamic(() => import('@/components/landing/WellnessAssessment'), { ssr: true });

const features = [
  {
    icon: '🧘',
    headline: 'Meditation Guidance',
    description: 'AI-guided meditation sessions tailored to your stress levels and wellness goals',
    image: '/ai_mindfulness.webp',
    imageAlt: 'Meditation guidance',
  },
  {
    icon: '😰',
    headline: 'Stress Tracking',
    description: 'Real-time stress analysis using HRV and biometric data to trigger recovery protocols',
    image: '/images/mindfulness_wellness_feature.webp',
    imageAlt: 'Stress tracking',
  },
  {
    icon: '😴',
    headline: 'Sleep Optimization',
    description: 'Detailed sleep analysis and personalized wind-down routines for restorative rest',
    image: '/mindfulness_zen_png_1776977999197.webp',
    imageAlt: 'Sleep optimization',
  },
  {
    icon: '🧠',
    headline: 'Mental Clarity',
    description: 'Cognitive exercise and breathing protocols designed to enhance focus and awareness',
    image: '/ai_system_core_png_1776977971209.webp',
    imageAlt: 'Mental clarity',
  },
  {
    icon: '🛡️',
    headline: 'Emotional Resilience',
    description: 'Behavioral exercises and logging tools to build daily resilience and self-awareness',
    image: '/ai_coach_avatar.webp',
    imageAlt: 'Emotional resilience',
  },
];

const testimonials = [
  {
    quote: 'The AI meditation guides are incredibly accurate. It feels like the app knows exactly what I need to focus on.',
    name: 'Emily Davis',
    role: 'Yoga Practitioner',
    avatar: '/images/fitbuu.webp',
    company: 'Mindfulness Studio',
  },
  {
    quote: 'Tracking my stress has changed how I approach my workouts. I know when to rest and when to push.',
    name: 'Marcus Reed',
    role: 'Triathlete',
    avatar: '/images/fitbuu.webp',
    company: 'Athletic Club',
  },
  {
    quote: 'The sleep optimization features helped me fix my sleep cycle. My daily energy has doubled.',
    name: 'Sophia Chen',
    role: 'Software Engineer',
    avatar: '/images/fitbuu.webp',
    company: 'Tech Startup',
  },
];

const faqs = [
  {
    key: 'faq1',
    question: 'How does the stress tracking work?',
    answer: 'We analyze Heart Rate Variability (HRV) from your wearable to detect physiological stress. When stress is elevated, the AI suggests quick breathing or meditation protocols.',
  },
  {
    key: 'faq2',
    question: 'Are meditation guides personalized?',
    answer: 'Yes! The AI reviews your sleep quality, daily activity, and current stress metrics to compose guided sessions targeting your immediate needs.',
  },
  {
    key: 'faq3',
    question: 'What is the sleep optimization protocol?',
    answer: 'It combines sleep stage analytics with personalized wind-down schedules, helping you transition into deep sleep faster.',
  },
  {
    key: 'faq4',
    question: 'Do I need to meditate daily?',
    answer: 'Consistency helps, but the app is designed to fit your schedule. Even 3-minute sessions can significantly reduce stress and improve focus.',
  },
  {
    key: 'faq5',
    question: 'Is my wellness data kept private?',
    answer: 'Absolutely. All biometric and mental wellness logs are encrypted and fully protected under our zero-sharing policy.',
  },
];

const relatedContent = [
  {
    title: 'Mindfulness Science',
    description: 'Read the research behind athletic performance and the mind-body connection',
    href: '/blog/mindfulness-athletic-performance',
    icon: '🧠',
  },
  {
    title: 'Nutrition Intelligence',
    description: 'Fuel your mind and body with personalized diet plans',
    href: '/nutrition-intelligence',
    icon: '🥗',
  },
  {
    title: 'AI Fitness Coach',
    description: 'Combine mindfulness with AI-powered fitness training',
    href: '/ai-fitness-coach',
    icon: '💪',
  },
];

export default function MindfulnessWellnessPage() {
  const productSchema = generateProductSchema({
    name: 'Mindfulness & Wellness',
    description: 'AI-guided meditation and stress management for holistic wellness and peak performance',
    image: 'https://fitnivo.in/images/pillar_mind.webp',
    url: 'https://fitnivo.in/mindfulness-wellness',
    ratingValue: 4.9,
    ratingCount: 1240,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://fitnivo.in' },
    { name: 'Mindfulness & Wellness', url: 'https://fitnivo.in/mindfulness-wellness' },
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
        headline="Mindfulness Meets Performance"
        subheading="Achieve holistic wellness by integrating mindfulness, meditation, and stress management into your fitness journey."
        primaryCTA={{ text: 'Download App', href: 'https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en' }}
        secondaryCTA={{ text: 'Learn More', href: '#features' }}
        backgroundImage="/images/ai_neural_static_bg.webp"
      />

      <FeatureGrid
        title="Wellness Beyond Fitness"
        description="Holistic wellness that addresses mind, body, and spirit"
        features={features}
      />

      <WellnessAssessment />

      {/* Meditation Science Section */}
      <section className="py-16 md:py-24 bg-white/5 border-t border-b border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            The Neuroscience of Mindfulness
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-4">Brain Changes</h3>
              <p className="text-gray-400 mb-4">
                Regular meditation physically changes your brain structure, increasing gray matter in areas associated with learning and memory.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>✓ Increased prefrontal cortex activity</li>
                <li>✓ Reduced amygdala reactivity</li>
                <li>✓ Enhanced neural plasticity</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-4">Performance Benefits</h3>
              <p className="text-gray-400 mb-4">
                Mindfulness improves focus, reaction time, emotional regulation, and resilience—all critical for peak performance.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>✓ 30% improvement in focus</li>
                <li>✓ 25% reduction in anxiety</li>
                <li>✓ 40% better emotional control</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-4">Stress Reduction</h3>
            <p className="text-gray-400">
              Meditation reduces cortisol levels (stress hormone) by up to 30%, leading to better sleep, faster recovery, and improved immune function. This creates a positive feedback loop where reduced stress improves athletic performance, which further reduces stress.
            </p>
          </div>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

      <CTASection
        headline="Transform Your Wellness Today"
        subheading="Join thousands achieving holistic wellness through mindfulness, meditation, and AI-guided coaching."
        primaryCTA={{ text: 'Download Fitnivo', href: 'https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en' }}
        secondaryCTA={{ text: 'Learn More', href: '#features' }}
      />

      <RelatedContent items={relatedContent} />

      <Footer />
    </main>
  );
}
