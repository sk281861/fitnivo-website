import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/landing/HeroSection';
import FeatureGrid from '@/components/landing/FeatureGrid';
import dynamic from 'next/dynamic';
import TestimonialCarousel from '@/components/landing/TestimonialCarousel';
import FAQAccordion from '@/components/landing/FAQAccordion';
import CTASection from '@/components/landing/CTASection';
import RelatedContent from '@/components/landing/RelatedContent';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

const WorkoutCustomization = dynamic(() => import('@/components/landing/WorkoutCustomization'));

const features = [
  {
    icon: '📊',
    headline: 'Biometric Sync',
    description: 'Real-time integration with your wearables for personalized coaching',
    image: '/ai_system_core_png_1776977971209.webp',
    imageAlt: 'Biometric synchronization',
  },
  {
    icon: '🎯',
    headline: 'Form Correction',
    description: 'AI-powered real-time feedback on your exercise form and technique',
    image: '/ai_workout.webp',
    imageAlt: 'Form correction feedback',
  },
  {
    icon: '📈',
    headline: 'Adaptive Difficulty',
    description: 'Workouts that automatically adjust based on your performance and recovery',
    image: '/images/fitness_coach_feature.webp',
    imageAlt: 'Adaptive training',
  },
  {
    icon: '💪',
    headline: 'Recovery Optimization',
    description: 'Smart recovery protocols based on your biometric data and training load',
    image: '/elite_performance_png_1776977986303.webp',
    imageAlt: 'Recovery optimization',
  },
  {
    icon: '🏆',
    headline: 'Performance Tracking',
    description: 'Comprehensive analytics to monitor your progress and achievements',
    image: '/ai_coach_avatar.webp',
    imageAlt: 'Performance analytics',
  },
];

const testimonials = [
  {
    quote: 'Fitnivo transformed my workouts. The AI coaching is like having a personal trainer in my pocket.',
    name: 'Sarah Johnson',
    role: 'Fitness Enthusiast',
    avatar: '/images/fitbuu.webp',
    company: 'Tech Startup',
  },
  {
    quote: 'The form correction feature has prevented injuries and improved my technique significantly.',
    name: 'Mike Chen',
    role: 'CrossFit Athlete',
    avatar: '/images/fitbuu.webp',
    company: 'Fitness Community',
  },
  {
    quote: 'I love how the app adapts to my recovery. It knows when I need to push and when to rest.',
    name: 'Emma Davis',
    role: 'Marathon Runner',
    avatar: '/images/fitbuu.webp',
    company: 'Running Club',
  },
];

const faqs = [
  {
    question: 'How does the AI coaching work?',
    answer: 'Our AI analyzes your biometric data, workout history, and real-time performance to provide personalized coaching recommendations. It learns your patterns and adapts your training program accordingly.',
  },
  {
    question: 'What devices are compatible?',
    answer: 'Fitnivo works with Apple Watch, Fitbit, Garmin, Oura Ring, Whoop, Samsung Watch, Polar, and Strava. We continuously add support for new devices.',
  },
  {
    question: 'Can I use it without a wearable?',
    answer: 'Yes! While wearables enhance the experience with biometric data, you can still use Fitnivo with manual input of your workouts and metrics.',
  },
  {
    question: 'How accurate is the form correction?',
    answer: 'Our form correction uses advanced computer vision and machine learning trained on thousands of hours of professional coaching. It provides real-time feedback with 95%+ accuracy.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! Download Fitnivo and get a 14-day free trial of all premium features. No credit card required.',
  },
];

const relatedContent = [
  {
    title: 'AI vs Traditional Coaching',
    description: 'Discover how AI coaching compares to traditional fitness methods',
    href: '/blog/ai-vs-traditional-coaching',
    icon: '🤖',
  },
  {
    title: 'Biometric Optimization Science',
    description: 'Learn the science behind biometric-driven fitness optimization',
    href: '/blog/biometric-optimization-science',
    icon: '🔬',
  },
  {
    title: 'Nutrition Intelligence',
    description: 'Optimize your nutrition alongside your training',
    href: '/nutrition-intelligence',
    icon: '🥗',
  },
];

export default function AIFitnessCoachPage() {
  const productSchema = generateProductSchema({
    name: 'AI Fitness Coach',
    description: 'AI-powered workout optimization with real-time form correction and adaptive difficulty',
    image: 'https://fitnivo.in/images/ai-coach.webp',
    url: 'https://fitnivo.in/ai-fitness-coach',
    ratingValue: 4.9,
    ratingCount: 1240,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://fitnivo.in' },
    { name: 'AI Fitness Coach', url: 'https://fitnivo.in/ai-fitness-coach' },
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
        headline="AI-Powered Workout Optimization"
        subheading="Transform your fitness with intelligent coaching that adapts to your body, learns from your data, and optimizes every rep."
        primaryCTA={{ text: 'Download App', href: 'https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en' }}
        secondaryCTA={{ text: 'Learn More', href: '#features' }}
        backgroundImage="/images/ai_neural_static_bg.webp"
      />

      <FeatureGrid
        title="Why Choose AI Fitness Coach"
        description="Experience the future of personalized fitness training"
        features={features}
      />

      <WorkoutCustomization />

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-white/5 border-t border-b border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Fitnivo vs Traditional Apps
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left py-5 px-6 font-bold text-white">Feature</th>
                  <th className="text-center py-5 px-6 font-bold text-indigo-400">Fitnivo</th>
                  <th className="text-center py-5 px-6 font-bold text-gray-400">Traditional Apps</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'AI Coaching', fitnivo: '✓', traditional: '✗' },
                  { feature: 'Real-time Form Correction', fitnivo: '✓', traditional: '✗' },
                  { feature: 'Adaptive Difficulty', fitnivo: '✓', traditional: '✗' },
                  { feature: 'Biometric Integration', fitnivo: '✓', traditional: '△' },
                  { feature: 'Recovery Optimization', fitnivo: '✓', traditional: '✗' },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-white font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-green-400 font-bold">{row.fitnivo}</td>
                    <td className="py-4 px-6 text-center text-gray-500">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />

      <CTASection
        headline="Ready to Transform Your Fitness?"
        subheading="Join thousands of users who are already experiencing the power of AI-driven fitness coaching."
        primaryCTA={{ text: 'Download Fitnivo', href: 'https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en' }}
        secondaryCTA={{ text: 'Learn More', href: '#features' }}
      />

      <RelatedContent items={relatedContent} />
      
      <Footer />
    </main>
  );
}
