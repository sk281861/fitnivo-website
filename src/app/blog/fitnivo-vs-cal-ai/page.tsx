import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';
import VsContent from './VsContent';

export const metadata: Metadata = {
  title: 'Fitnivo vs Cal AI (2026) — Which AI Calorie Tracker Wins? | Fitnivo',
  description:
    'Fitnivo vs Cal AI compared side-by-side. AI food scanning, calorie & macro tracking, workouts, and which app fits which user.',
  keywords: ['Fitnivo vs Cal AI', 'Cal AI alternatives', 'AI calorie tracker', 'AI food scanner'],
  alternates: { canonical: 'https://fitnivo.in/blog/fitnivo-vs-cal-ai' },
  openGraph: {
    title: 'Fitnivo vs Cal AI (2026)',
    description: 'AI calorie tracker comparison: Fitnivo vs Cal AI.',
    url: 'https://fitnivo.in/blog/fitnivo-vs-cal-ai',
    type: 'article',
    images: [{ url: 'https://fitnivo.in/images/blog/nutrition/fitnivo-vs-cal-ai.webp', width: 1200, height: 630 }],
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Fitnivo vs Cal AI (2026) — Which AI Calorie Tracker Wins?',
  description: 'Side-by-side comparison of Fitnivo and Cal AI for AI food scanning and calorie tracking.',
  image: 'https://fitnivo.in/images/blog/nutrition/fitnivo-vs-cal-ai.webp',
  url: 'https://fitnivo.in/blog/fitnivo-vs-cal-ai',
  datePublished: '2026-09-03T00:00:00Z',
  dateModified: '2026-09-03T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 1700,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'Fitnivo vs Cal AI', url: 'https://fitnivo.in/blog/fitnivo-vs-cal-ai' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Cal AI better than Fitnivo for calorie tracking?', acceptedAnswer: { '@type': 'Answer', text: 'Cal AI is a focused AI calorie-tracker. Fitnivo also has an AI food scanner but combines it with workouts, meal planning, and nutrition coaching in one app.' } },
    { '@type': 'Question', name: 'Is Cal AI accurate?', acceptedAnswer: { '@type': 'Answer', text: 'Cal AI provides estimates. Accuracy is good for clear, single-item foods and lower for mixed dishes with hidden ingredients — the same is true of any AI food scanner today, including Fitnivo.' } },
    { '@type': 'Question', name: 'Does Cal AI have workouts?', acceptedAnswer: { '@type': 'Answer', text: 'No. Cal AI is a nutrition-only app. If you also want workouts, you would pair Cal AI with a separate app, or use an all-in-one like Fitnivo.' } },
    { '@type': 'Question', name: 'Which is cheaper?', acceptedAnswer: { '@type': 'Answer', text: 'Fitnivo has a real free tier (3 AI food scans/day, 15 AI coach messages/day, unlimited workout logger). Pro is $10/month or $60/year. Cal AI is nutrition-only, so a fair comparison adds a workout app on top — which almost always exceeds Fitnivo Pro.' } },
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
          <span className="text-white/50">Fitnivo vs Cal AI</span>
        </nav>

        <div className="mb-5 flex items-center gap-3 text-sm text-white/40">
          <span className="uppercase tracking-widest text-[#FF6A00] text-[10px] font-bold font-mono">Comparison</span>
          <span className="text-white/20">·</span>
          <span>8 min read</span>
          <span className="text-white/20">·</span>
          <time dateTime="2026-09-03">September 3, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-8 max-w-4xl">
          Fitnivo vs Cal AI (2026) — Which AI Calorie Tracker Wins?
        </h1>

        <div className="relative w-full aspect-[1.9/1] mb-10 overflow-hidden rounded-2xl">
          <Image
            src="/images/blog/nutrition/fitnivo-vs-cal-ai.webp"
            alt="Fitnivo vs Cal AI calorie tracker comparison 2026"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <VsContent competitorName="Cal AI" />
      </div>

      <Footer />
    </main>
  );
}
