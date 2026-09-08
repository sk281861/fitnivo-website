import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';
import VsContent from './VsContent';

export const metadata: Metadata = {
  title: 'Fitnivo vs Fitbod (2026) — Which AI Workout App Is Right for You? | Fitnivo',
  description:
    'Fitnivo vs Fitbod compared side-by-side. AI workouts, nutrition, food scanning, price, and which app fits which type of trainee.',
  keywords: ['Fitnivo vs Fitbod', 'Fitbod alternatives', 'apps like Fitbod', 'AI fitness apps like Fitbod'],
  alternates: { canonical: 'https://fitnivo.in/blog/fitnivo-vs-fitbod' },
  openGraph: {
    title: 'Fitnivo vs Fitbod (2026)',
    description: 'Side-by-side comparison of Fitnivo and Fitbod for AI workouts and nutrition.',
    url: 'https://fitnivo.in/blog/fitnivo-vs-fitbod',
    type: 'article',
    images: [{ url: 'https://fitnivo.in/images/blog/ai-coaching/fitnivo-vs-fitbod.webp', width: 1200, height: 630 }],
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Fitnivo vs Fitbod (2026) — Which AI Workout App Is Right for You?',
  description: 'Side-by-side comparison of Fitnivo and Fitbod for AI workouts, nutrition, food scanning, and price.',
  image: 'https://fitnivo.in/images/blog/ai-coaching/fitnivo-vs-fitbod.webp',
  url: 'https://fitnivo.in/blog/fitnivo-vs-fitbod',
  datePublished: '2026-09-03T00:00:00Z',
  dateModified: '2026-09-03T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 1800,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'Fitnivo vs Fitbod', url: 'https://fitnivo.in/blog/fitnivo-vs-fitbod' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Fitbod better than Fitnivo?', acceptedAnswer: { '@type': 'Answer', text: 'Fitbod is stronger for pure strength-workout generation with a deep exercise library. Fitnivo is stronger when you also want calorie & macro tracking, AI food scanning, and meal planning in the same app.' } },
    { '@type': 'Question', name: 'Does Fitbod track macros?', acceptedAnswer: { '@type': 'Answer', text: 'No. Fitbod is strictly a workout app. If you want nutrition tracking you need a second app.' } },
    { '@type': 'Question', name: 'Is Fitnivo cheaper than Fitbod?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Fitnivo has a free tier with unlimited workout logging and daily AI usage (3 food scans, 15 AI coach messages). Pro is $10/month or $60/year (effectively $5/month on annual). Fitbod is around $12.99/month or $79.99/year. And Fitnivo includes nutrition — Fitbod does not.' } },
    { '@type': 'Question', name: 'Which is better for beginners?', acceptedAnswer: { '@type': 'Answer', text: 'Both are beginner-friendly. Fitnivo edges ahead if you also want help with nutrition, which most beginners need alongside their training.' } },
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
          <span className="text-white/50">Fitnivo vs Fitbod</span>
        </nav>

        <div className="mb-5 flex items-center gap-3 text-sm text-white/40">
          <span className="uppercase tracking-widest text-[#FF6A00] text-[10px] font-bold font-mono">Comparison</span>
          <span className="text-white/20">·</span>
          <span>9 min read</span>
          <span className="text-white/20">·</span>
          <time dateTime="2026-09-03">September 3, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-8 max-w-4xl">
          Fitnivo vs Fitbod (2026) — Which AI Workout App Is Right for You?
        </h1>

        <div className="relative w-full aspect-[1.9/1] mb-10 overflow-hidden rounded-2xl">
          <Image
            src="/images/blog/ai-coaching/fitnivo-vs-fitbod.webp"
            alt="Fitnivo vs Fitbod AI workout app comparison 2026"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <VsContent competitorName="Fitbod" />
      </div>

      <Footer />
    </main>
  );
}
