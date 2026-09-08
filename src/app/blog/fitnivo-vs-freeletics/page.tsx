import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';
import VsContent from './VsContent';

export const metadata: Metadata = {
  title: 'Fitnivo vs Freeletics (2026) — Which AI Coach Wins? | Fitnivo',
  description:
    'Fitnivo vs Freeletics compared side-by-side. Adaptive AI coaching, bodyweight training, nutrition, and which app fits which user.',
  keywords: ['Fitnivo vs Freeletics', 'Freeletics alternatives', 'AI bodyweight app', 'AI adaptive training'],
  alternates: { canonical: 'https://fitnivo.in/blog/fitnivo-vs-freeletics' },
  openGraph: {
    title: 'Fitnivo vs Freeletics (2026)',
    description: 'AI coaching compared: Fitnivo vs Freeletics.',
    url: 'https://fitnivo.in/blog/fitnivo-vs-freeletics',
    type: 'article',
    images: [{ url: 'https://fitnivo.in/images/blog/ai-coaching/fitnivo-vs-freeletics.webp', width: 1200, height: 630 }],
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Fitnivo vs Freeletics (2026) — Which AI Coach Wins?',
  description: 'Side-by-side comparison of Fitnivo and Freeletics for AI coaching, bodyweight training, and nutrition.',
  image: 'https://fitnivo.in/images/blog/ai-coaching/fitnivo-vs-freeletics.webp',
  url: 'https://fitnivo.in/blog/fitnivo-vs-freeletics',
  datePublished: '2026-09-04T00:00:00Z',
  dateModified: '2026-09-04T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 1500,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'Fitnivo vs Freeletics', url: 'https://fitnivo.in/blog/fitnivo-vs-freeletics' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Freeletics better than Fitnivo?', acceptedAnswer: { '@type': 'Answer', text: 'Freeletics is excellent for bodyweight and travel-friendly training with a mature AI Coach. Fitnivo covers gym, home, and bodyweight workouts and adds a full AI nutrition side (food scanning, macros, meal planning).' } },
    { '@type': 'Question', name: 'Does Freeletics have nutrition tracking?', acceptedAnswer: { '@type': 'Answer', text: 'Freeletics has a nutrition companion, but Fitnivo\'s nutrition side is deeper: AI food scanner, meal planner, AI coach chat, and integrated with your training data.' } },
    { '@type': 'Question', name: 'Is Freeletics good for gym workouts?', acceptedAnswer: { '@type': 'Answer', text: 'Freeletics leans toward bodyweight and HIIT-style workouts. Fitnivo builds equipment-aware plans that scale from bodyweight to full-equipment commercial gym.' } },
    { '@type': 'Question', name: 'Which is cheaper?', acceptedAnswer: { '@type': 'Answer', text: 'Fitnivo has a free tier (3 AI food scans/day, 15 AI coach messages/day, unlimited workout logger). Fitnivo Pro is $10/month or $60/year. Freeletics is around $34.99 per quarter for Coach.' } },
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
          <span className="text-white/50">Fitnivo vs Freeletics</span>
        </nav>

        <div className="mb-5 flex items-center gap-3 text-sm text-white/40">
          <span className="uppercase tracking-widest text-[#FF6A00] text-[10px] font-bold font-mono">Comparison</span>
          <span className="text-white/20">·</span>
          <span>7 min read</span>
          <span className="text-white/20">·</span>
          <time dateTime="2026-09-04">September 4, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-8 max-w-4xl">
          Fitnivo vs Freeletics (2026) — Which AI Coach Wins?
        </h1>

        <div className="relative w-full aspect-[1.9/1] mb-10 overflow-hidden rounded-2xl">
          <Image
            src="/images/blog/ai-coaching/fitnivo-vs-freeletics.webp"
            alt="Fitnivo vs Freeletics AI coach comparison 2026"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <VsContent competitorName="Freeletics" />
      </div>

      <Footer />
    </main>
  );
}
