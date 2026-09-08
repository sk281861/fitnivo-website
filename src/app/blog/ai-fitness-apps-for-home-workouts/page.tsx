import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';
import HomeWorkoutsContent from './HomeWorkoutsContent';

export const metadata: Metadata = {
  title: 'Best AI Fitness Apps for Home Workouts in 2026 | Fitnivo',
  description:
    'The best AI fitness apps for home workouts in 2026 — apps that build effective programs with dumbbells, bodyweight, or no equipment at all.',
  keywords: [
    'ai fitness apps for home workouts',
    'best ai home workout app',
    'ai workout app no equipment',
    'ai workout app dumbbells',
    'bodyweight ai workout app',
  ],
  alternates: { canonical: 'https://fitnivo.in/blog/ai-fitness-apps-for-home-workouts' },
  openGraph: {
    title: 'Best AI Fitness Apps for Home Workouts in 2026',
    description:
      'The best AI fitness apps for home workouts in 2026 — apps that build effective programs with dumbbells, bodyweight, or no equipment at all.',
    url: 'https://fitnivo.in/blog/ai-fitness-apps-for-home-workouts',
    type: 'article',
    images: [
      {
        url: 'https://fitnivo.in/images/blog/ai-coaching/hybrid_coaching_future.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Best AI Fitness Apps for Home Workouts in 2026',
  description:
    'The best AI fitness apps for home workouts in 2026 — apps that build effective programs with dumbbells, bodyweight, or no equipment at all.',
  image: 'https://fitnivo.in/images/blog/ai-coaching/hybrid_coaching_future.webp',
  url: 'https://fitnivo.in/blog/ai-fitness-apps-for-home-workouts',
  datePublished: '2026-09-04T00:00:00Z',
  dateModified: '2026-09-09T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 2100,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'AI Fitness Apps for Home Workouts', url: 'https://fitnivo.in/blog/ai-fitness-apps-for-home-workouts' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best AI workout app for home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For bodyweight-only home training, Freeletics is the strongest option. For dumbbell-based home training with nutrition tracking, Fitnivo is the most complete package. Nike Training Club is the best free option with guided video workouts that require no equipment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI fitness apps work without gym equipment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most AI fitness apps support bodyweight-only modes. You select no equipment during onboarding and the app generates programs using push-ups, squats, lunges, planks, and other movements that require nothing but your bodyweight.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Freeletics or Fitnivo better for home workouts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freeletics is better if you want bodyweight-only workouts without any equipment and do not care about nutrition tracking. Fitnivo is better if you have at least some equipment (dumbbells or bands) and want to track calories and macros in the same app.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I build muscle at home with an AI fitness app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, though the rate of muscle gain is slower with bodyweight-only training than with progressively heavier weights. Having at least adjustable dumbbells gives you far more options for progressive overload. AI apps that track your performance and increase difficulty over time are essential for muscle building at home.',
      },
    },
    {
      '@type': 'Question',
      name: 'What equipment do I need to get the most from an AI home workout app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A pair of adjustable dumbbells or a few fixed-weight pairs covering light, medium, and heavy loads will unlock most of what AI home workout apps can program. Resistance bands add pulling exercises. A pull-up bar adds back and bicep work. None of this is strictly required, but each addition expands your programming options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are bodyweight AI workouts effective?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, especially for fat loss, endurance, and maintaining muscle. Building significant muscle with bodyweight only is harder because you cannot easily add load incrementally. AI apps handle this by adding reps, changing leverage, or introducing harder exercise variations — but there is a ceiling that weights do not have.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI apps do progressive overload with dumbbells only?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. With a set of dumbbells, AI apps apply progressive overload by increasing reps, sets, or weight across sessions. The more weight options you have, the more precisely the AI can progress you. With just one or two pairs of dumbbells, the app will use rep ranges and tempo to create progression.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best free AI home workout app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nike Training Club is the best fully free option with structured programs and guided videos. Fitnivo has a generous free tier (unlimited workout logging, 3 AI food scans/day, 15 AI coach messages/day) that works well for home training with equipment.',
      },
    },
  ],
};

const schemaJson = JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]);

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-[#FF6A00] hover:text-[#FF8524]">Home</Link>
          <span className="text-white/30">/</span>
          <Link href="/blog" className="text-[#FF6A00] hover:text-[#FF8524]">Blog</Link>
          <span className="text-white/30">/</span>
          <span className="text-white/50">AI Fitness Apps for Home Workouts</span>
        </nav>

        <div className="mb-5 flex items-center gap-3 text-sm text-white/40">
          <span className="uppercase tracking-widest text-[#FF6A00] text-[10px] font-bold font-mono">Best-of</span>
          <span className="text-white/20">·</span>
          <span>8 min read</span>
          <span className="text-white/20">·</span>
          <time dateTime="2026-09-04">September 4, 2026</time>
        </div>

        <div className="relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-8 max-w-4xl">
            Best AI Fitness Apps for Home Workouts in 2026
          </h1>
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-56 pointer-events-none select-none" aria-hidden="true">
            <Image
              src="/images/mascot/male-pointing-transparent.png"
              alt=""
              width={224}
              height={340}
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(255,106,0,0.25)]"
              style={{ animation: 'mascotFloat 4s ease-in-out infinite' }}
            />
          </div>
        </div>

        <div className="relative w-full aspect-[1.9/1] mb-10 overflow-hidden rounded-2xl">
          <Image
            src="/images/blog/ai-coaching/hybrid_coaching_future.webp"
            alt="Best AI fitness apps for home workouts in 2026"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <HomeWorkoutsContent />
      </div>

      <Footer />
    </main>
  );
}
