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

const NutritionProfile = nextDynamic(() => import('@/components/landing/NutritionProfile'));

const features = [
  {
    icon: '⚖️',
    headline: 'Macro Optimization',
    description: 'AI-calculated macronutrient ratios tailored to your goals and body composition',
    image: '/ai_nutrition.webp',
    imageAlt: 'Macro optimization',
  },
  {
    icon: '🍽️',
    headline: 'Smart Meal Planning',
    description: 'Personalized meal plans that fit your preferences, allergies, and dietary restrictions',
    image: '/images/nutrition_intelligence_feature.webp',
    imageAlt: 'Smart meal planning',
  },
  {
    icon: '📱',
    headline: 'Food Tracking',
    description: 'Easy-to-use food logging with barcode scanning and restaurant database',
    image: '/ai_system_core_png_1776977971209.webp',
    imageAlt: 'Food tracking',
  },
  {
    icon: '🔬',
    headline: 'Nutrient Analysis',
    description: 'Detailed micronutrient tracking to ensure complete nutritional balance',
    image: '/elite_performance_png_1776977986303.webp',
    imageAlt: 'Nutrient analysis',
  },
  {
    icon: '🎯',
    headline: 'Dietary Preferences',
    description: 'Support for vegetarian, vegan, keto, paleo, and Mediterranean diets',
    image: '/ai_coach_avatar.webp',
    imageAlt: 'Dietary preferences',
  },
];

const testimonials = [
  {
    quote: 'Finally, a nutrition app that understands my goals. The meal plans are delicious and actually sustainable.',
    name: 'Jessica Martinez',
    role: 'Fitness Coach',
    avatar: '/images/fitbuu.webp',
    company: 'Wellness Center',
  },
  {
    quote: 'The macro optimization helped me break through my weight loss plateau in just two weeks.',
    name: 'David Wilson',
    role: 'Busy Professional',
    avatar: '/images/fitbuu.webp',
    company: 'Tech Company',
  },
  {
    quote: 'I love how easy it is to track my meals. The barcode scanner is incredibly fast.',
    name: 'Sarah Thompson',
    role: 'Yoga Instructor',
    avatar: '/images/fitbuu.webp',
    company: 'Yoga Studio',
  },
];

const faqs = [
  {
    question: 'How does the AI calculate my macros?',
    answer: 'Our AI calculates your macronutrient target based on your body metrics, activity level, fitness goals, and metabolic rate. It adjusts these targets as you progress.',
  },
  {
    question: 'Can I customize meal plans?',
    answer: 'Yes! You can swap meals, adjust portion sizes, and exclude specific ingredients. The AI will automatically recalculate your daily totals.',
  },
  {
    question: 'Does it support dietary restrictions?',
    answer: 'We support gluten-free, dairy-free, nut-free, soy-free, vegetarian, vegan, keto, paleo, and low-carb diets.',
  },
  {
    question: 'How accurate is the food database?',
    answer: 'Our database contains over 1 million verified food items, including restaurant dishes and international brands. We verify all entries for accuracy.',
  },
  {
    question: 'Can I sync with fitness data?',
    answer: 'Yes! Fitnivo syncs with Google Fit, Apple Health, Fitbit, and Garmin to adjust your nutrition targets based on your active calorie burn.',
  },
];

const relatedContent = [
  {
    title: 'Nutrition Science Guide',
    description: 'Learn about macros, micros, and personalized nutrition',
    href: '/blog/nutrition-science-personalization',
    icon: '📚',
  },
  {
    title: 'AI Fitness Coach',
    description: 'Combine nutrition with AI-powered workout optimization',
    href: '/ai-fitness-coach',
    icon: '💪',
  },
  {
    title: 'Mindfulness & Wellness',
    description: 'Holistic wellness beyond nutrition and fitness',
    href: '/mindfulness-wellness',
    icon: '🧘',
  },
];

export default function NutritionIntelligencePage() {
  const productSchema = generateProductSchema({
    name: 'Nutrition Intelligence',
    description: 'AI-powered nutrition optimization with personalized meal planning and macro tracking',
    image: 'https://fitnivo.in/images/pillar_nutrition.webp',
    url: 'https://fitnivo.in/nutrition-intelligence',
    ratingValue: 4.9,
    ratingCount: 1240,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://fitnivo.in' },
    { name: 'Nutrition Intelligence', url: 'https://fitnivo.in/nutrition-intelligence' },
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
        headline="Personalized Nutrition Intelligence"
        subheading="Optimize your diet with AI-powered meal planning that adapts to your goals, preferences, and lifestyle."
        primaryCTA={{ text: 'Download App', href: 'https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en' }}
        secondaryCTA={{ text: 'Learn More', href: '#features' }}
        backgroundImage="/images/ai_neural_static_bg.webp"
      />

      <FeatureGrid
        title="Nutrition Powered by AI"
        description="Achieve your health goals with intelligent nutrition guidance"
        features={features}
      />

      <NutritionProfile />

      {/* Nutrition Science Section */}
      <section className="py-16 md:py-24 bg-white/5 border-t border-b border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            The Science of Nutrition Optimization
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-4">Macronutrients</h3>
              <p className="text-gray-400 mb-4">
                Proteins, carbohydrates, and fats are optimized based on your fitness goals and body composition.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>✓ Protein for muscle building</li>
                <li>✓ Carbs for energy and recovery</li>
                <li>✓ Fats for hormone production</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-4">Micronutrients</h3>
              <p className="text-gray-400 mb-4">
                Vitamins and minerals are tracked to ensure complete nutritional balance and optimal health.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>✓ Vitamin tracking</li>
                <li>✓ Mineral balance</li>
                <li>✓ Deficiency prevention</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-4">Personalization</h3>
              <p className="text-gray-400 mb-4">
                Your nutrition plan adapts based on your progress, preferences, and lifestyle changes.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>✓ Goal-based adjustments</li>
                <li>✓ Preference learning</li>
                <li>✓ Progress optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

      <CTASection
        headline="Start Your Nutrition Transformation"
        subheading="Get personalized meal plans and nutrition guidance powered by AI. Download Fitnivo today."
        primaryCTA={{ text: 'Download Fitnivo', href: 'https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en' }}
        secondaryCTA={{ text: 'Learn More', href: '#features' }}
      />

      <RelatedContent items={relatedContent} />

      <Footer />
    </main>
  );
}
