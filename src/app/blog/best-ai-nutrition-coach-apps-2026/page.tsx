import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';
import NutritionContent from './NutritionContent';

export const metadata: Metadata = {
  title: 'Best AI Nutrition Coach Apps in 2026 (8 Apps Ranked) | Fitnivo',
  description:
    'The best AI nutrition coach apps of 2026 — MacroFactor, Welling, Cal AI, MyFitnessPal, Cronometer, Noom, Fitnivo, and more, compared side-by-side.',
  keywords: [
    'best AI nutrition coach apps',
    'best AI nutrition apps 2026',
    'AI nutrition coach',
    'AI diet coach',
    'AI macro coach',
  ],
  alternates: { canonical: 'https://fitnivo.in/blog/best-ai-nutrition-coach-apps-2026' },
  openGraph: {
    title: 'Best AI Nutrition Coach Apps in 2026',
    description: 'Top AI nutrition coach apps of 2026 compared side-by-side.',
    url: 'https://fitnivo.in/blog/best-ai-nutrition-coach-apps-2026',
    type: 'article',
    images: [{ url: 'https://fitnivo.in/images/blog/nutrition/best-ai-nutrition-coach-apps-2026.webp', width: 1200, height: 630 }],
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Best AI Nutrition Coach Apps in 2026 (8 Apps Ranked)',
  description: 'Top AI nutrition coach apps of 2026 compared side-by-side.',
  image: 'https://fitnivo.in/images/blog/nutrition/best-ai-nutrition-coach-apps-2026.webp',
  url: 'https://fitnivo.in/blog/best-ai-nutrition-coach-apps-2026',
  datePublished: '2026-09-04T00:00:00Z',
  dateModified: '2026-09-04T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 2100,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'Best AI Nutrition Coach Apps 2026', url: 'https://fitnivo.in/blog/best-ai-nutrition-coach-apps-2026' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best AI nutrition coach app in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'MacroFactor leads on adaptive macro coaching, Welling on conversational logging, Cal AI on photo scanning, MyFitnessPal on database breadth, and Fitnivo on all-in-one AI fitness + nutrition.' } },
    { '@type': 'Question', name: 'Do AI nutrition apps really work?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — the value comes from consistent logging plus adaptive targets. The best apps use your actual tracked data to adjust recommendations weekly instead of handing you a static plan.' } },
    { '@type': 'Question', name: 'How much do AI nutrition coach apps cost?', acceptedAnswer: { '@type': 'Answer', text: 'Most cost USD 8–20 per month. Fitnivo is $10/month or $60/year and covers both nutrition and workouts in one subscription.' } },
    { '@type': 'Question', name: 'Which AI nutrition app is best for weight loss?', acceptedAnswer: { '@type': 'Answer', text: 'For weight loss, MacroFactor and Fitnivo are strong picks because both adjust calorie and macro targets based on your logged progress. Weight loss also depends on training and lifestyle — Fitnivo covers both in one app.' } },
  ],
};

const schemaJson = JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]);

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navbar />

      {/* Hero */}
      <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-[#FF6A00] hover:text-[#FF8524]">Home</Link>
          <span className="text-white/30">/</span>
          <Link href="/blog" className="text-[#FF6A00] hover:text-[#FF8524]">Blog</Link>
          <span className="text-white/30">/</span>
          <span className="text-white/50">Best AI Nutrition Coach Apps 2026</span>
        </nav>

        <div className="mb-5 flex items-center gap-3 text-sm text-white/40">
          <span className="uppercase tracking-widest text-[#FF6A00] text-[10px] font-bold font-mono">Best-of</span>
          <span className="text-white/20">·</span>
          <span>10 min read</span>
          <span className="text-white/20">·</span>
          <time dateTime="2026-09-04">September 4, 2026</time>
        </div>

        <div className="relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-8 max-w-4xl">
            Best AI Nutrition Coach Apps in 2026
          </h1>
          {/* Floating mascot — absolute so it doesn't push layout on desktop */}
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
            src="/images/blog/nutrition/best-ai-nutrition-coach-apps-2026.webp"
            alt="Best AI nutrition coach apps of 2026 compared side by side"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>

      {/* Animated content */}
      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <NutritionContent />
      </div>

      <Footer />
    </main>
  );
}
