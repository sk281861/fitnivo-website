import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';
import VsContent from './VsContent';

export const metadata: Metadata = {
  title: 'Fitnivo vs MyFitnessPal (2026) — AI Food Logging Compared | Fitnivo',
  description:
    'Fitnivo vs MyFitnessPal compared side-by-side. AI food scanning, database breadth, workouts, and which app fits which user in 2026.',
  keywords: ['Fitnivo vs MyFitnessPal', 'MyFitnessPal alternatives', 'apps like MyFitnessPal', 'AI calorie tracker'],
  alternates: { canonical: 'https://fitnivo.in/blog/fitnivo-vs-myfitnesspal' },
  openGraph: {
    title: 'Fitnivo vs MyFitnessPal (2026)',
    description: 'AI calorie tracking compared: Fitnivo vs MyFitnessPal.',
    url: 'https://fitnivo.in/blog/fitnivo-vs-myfitnesspal',
    type: 'article',
    images: [{ url: 'https://fitnivo.in/images/blog/nutrition/fitnivo-vs-myfitnesspal.webp', width: 1200, height: 630 }],
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Fitnivo vs MyFitnessPal (2026) — AI Food Logging Compared',
  description: 'Side-by-side comparison of Fitnivo and MyFitnessPal for calorie tracking, AI food scanning, and workouts.',
  image: 'https://fitnivo.in/images/blog/nutrition/fitnivo-vs-myfitnesspal.webp',
  url: 'https://fitnivo.in/blog/fitnivo-vs-myfitnesspal',
  datePublished: '2026-09-04T00:00:00Z',
  dateModified: '2026-09-04T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 1600,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'Fitnivo vs MyFitnessPal', url: 'https://fitnivo.in/blog/fitnivo-vs-myfitnesspal' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Fitnivo better than MyFitnessPal?', acceptedAnswer: { '@type': 'Answer', text: 'MyFitnessPal has the largest food database and the best barcode scanning for packaged food. Fitnivo has an AI food scanner, workouts, meal planning, and AI coach chat in one app. Different products for different jobs.' } },
    { '@type': 'Question', name: 'Does MyFitnessPal have AI food scanning?', acceptedAnswer: { '@type': 'Answer', text: 'MyFitnessPal has added some AI features, but photo-first food scanning is the core of Fitnivo. If you want to log by photo, Fitnivo is built for that.' } },
    { '@type': 'Question', name: 'Does MyFitnessPal have workouts?', acceptedAnswer: { '@type': 'Answer', text: 'MyFitnessPal is primarily a nutrition app with basic exercise logging. Fitnivo has full AI workout planning, tracking, and progression.' } },
    { '@type': 'Question', name: 'Is Fitnivo cheaper than MyFitnessPal Premium?', acceptedAnswer: { '@type': 'Answer', text: 'Fitnivo has a free tier that includes 3 AI food scans/day, 15 AI coach messages/day, and unlimited workout logger. Fitnivo Pro is $10/month or $60/year. MyFitnessPal Premium is around $19.99/month or $79.99/year — and Fitnivo also includes workouts.' } },
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
          <span className="text-white/50">Fitnivo vs MyFitnessPal</span>
        </nav>

        <div className="mb-5 flex items-center gap-3 text-sm text-white/40">
          <span className="uppercase tracking-widest text-[#FF6A00] text-[10px] font-bold font-mono">Comparison</span>
          <span className="text-white/20">·</span>
          <span>8 min read</span>
          <span className="text-white/20">·</span>
          <time dateTime="2026-09-04">September 4, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-8 max-w-4xl">
          Fitnivo vs MyFitnessPal (2026) — AI Food Logging Compared
        </h1>

        <div className="relative w-full aspect-[1.9/1] mb-10 overflow-hidden rounded-2xl">
          <Image
            src="/images/blog/nutrition/fitnivo-vs-myfitnesspal.webp"
            alt="Fitnivo vs MyFitnessPal AI food logging comparison 2026"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <VsContent competitorName="MyFitnessPal" />
      </div>

      <Footer />
    </main>
  );
}
