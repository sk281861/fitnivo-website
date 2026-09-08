import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';
import VsContent from './VsContent';

export const metadata: Metadata = {
  title: 'Fitnivo vs MacroFactor (2026) — Which Nutrition Coach Wins? | Fitnivo',
  description:
    'Fitnivo vs MacroFactor compared side-by-side. Adaptive macro coaching, AI food scanning, workouts, and which app fits which user.',
  keywords: ['Fitnivo vs MacroFactor', 'MacroFactor alternatives', 'adaptive macro coaching', 'AI nutrition coach'],
  alternates: { canonical: 'https://fitnivo.in/blog/fitnivo-vs-macrofactor' },
  openGraph: {
    title: 'Fitnivo vs MacroFactor (2026)',
    description: 'MacroFactor vs Fitnivo for AI nutrition coaching.',
    url: 'https://fitnivo.in/blog/fitnivo-vs-macrofactor',
    type: 'article',
    images: [{ url: 'https://fitnivo.in/images/blog/nutrition/fitnivo-vs-macrofactor.webp', width: 1200, height: 630 }],
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Fitnivo vs MacroFactor (2026) — Which Nutrition Coach Wins?',
  description: 'Side-by-side comparison of Fitnivo and MacroFactor for adaptive macro coaching, food scanning, and workouts.',
  image: 'https://fitnivo.in/images/blog/nutrition/fitnivo-vs-macrofactor.webp',
  url: 'https://fitnivo.in/blog/fitnivo-vs-macrofactor',
  datePublished: '2026-09-04T00:00:00Z',
  dateModified: '2026-09-04T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 1600,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'Fitnivo vs MacroFactor', url: 'https://fitnivo.in/blog/fitnivo-vs-macrofactor' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is MacroFactor better than Fitnivo for macro coaching?', acceptedAnswer: { '@type': 'Answer', text: 'MacroFactor has the deepest adaptive-macro engine — weekly target adjustments based on your weight trend and intake data. Fitnivo does adaptive nutrition too, but pairs it with workouts, an AI food scanner, and meal planning in one app.' } },
    { '@type': 'Question', name: 'Does MacroFactor have an AI food scanner?', acceptedAnswer: { '@type': 'Answer', text: 'MacroFactor focuses on manual and barcode logging. Fitnivo includes an AI food scanner: take a photo of your meal and get calorie and macro estimates.' } },
    { '@type': 'Question', name: 'Does MacroFactor have workouts?', acceptedAnswer: { '@type': 'Answer', text: 'No, MacroFactor is nutrition-only. Fitnivo covers both training and nutrition in one app.' } },
    { '@type': 'Question', name: 'Which is cheaper?', acceptedAnswer: { '@type': 'Answer', text: 'Fitnivo has a free tier (3 AI scans/day, 15 AI messages/day, unlimited workout logger). Fitnivo Pro is $10/month or $60/year. MacroFactor is around $11.99/month or $71.99/year and is nutrition-only.' } },
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
          <span className="text-white/50">Fitnivo vs MacroFactor</span>
        </nav>

        <div className="mb-5 flex items-center gap-3 text-sm text-white/40">
          <span className="uppercase tracking-widest text-[#FF6A00] text-[10px] font-bold font-mono">Comparison</span>
          <span className="text-white/20">·</span>
          <span>8 min read</span>
          <span className="text-white/20">·</span>
          <time dateTime="2026-09-04">September 4, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-8 max-w-4xl">
          Fitnivo vs MacroFactor (2026) — Which Nutrition Coach Wins?
        </h1>

        <div className="relative w-full aspect-[1.9/1] mb-10 overflow-hidden rounded-2xl">
          <Image
            src="/images/blog/nutrition/fitnivo-vs-macrofactor.webp"
            alt="Fitnivo vs MacroFactor nutrition coach comparison 2026"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <VsContent competitorName="MacroFactor" />
      </div>

      <Footer />
    </main>
  );
}
