import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';
import PersonalTrainerContent from './PersonalTrainerContent';

export const metadata: Metadata = {
  title: 'Best AI Personal Trainer Apps in 2026 (Tested & Ranked) | Fitnivo',
  description:
    'The best AI personal trainer apps of 2026 — Ray, Fitbod, Freeletics, Caliber, JuggernautAI, Fitnivo, and more. Compare features, pricing, and who each is for.',
  keywords: [
    'best AI personal trainer app',
    'best AI personal trainer apps 2026',
    'AI personal trainer app',
    'AI trainer app',
    'personal AI trainer',
  ],
  alternates: { canonical: 'https://fitnivo.in/blog/best-ai-personal-trainer-apps-2026' },
  openGraph: {
    title: 'Best AI Personal Trainer Apps in 2026',
    description: 'The best AI personal trainer apps of 2026, compared side-by-side.',
    url: 'https://fitnivo.in/blog/best-ai-personal-trainer-apps-2026',
    type: 'article',
    images: [{ url: 'https://fitnivo.in/images/blog/ai-coaching/best-ai-personal-trainer-apps-2026.webp', width: 1200, height: 630 }],
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Best AI Personal Trainer Apps in 2026 (Tested & Ranked)',
  description: 'The best AI personal trainer apps of 2026, compared side-by-side.',
  image: 'https://fitnivo.in/images/blog/ai-coaching/best-ai-personal-trainer-apps-2026.webp',
  url: 'https://fitnivo.in/blog/best-ai-personal-trainer-apps-2026',
  datePublished: '2026-09-04T00:00:00Z',
  dateModified: '2026-09-04T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 2200,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'Best AI Personal Trainer Apps 2026', url: 'https://fitnivo.in/blog/best-ai-personal-trainer-apps-2026' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best AI personal trainer app in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on how you train. Ray leads for voice-guided real-time coaching, Fitbod for strength programming, Freeletics for bodyweight and adaptive training, Caliber for AI + human hybrid, and Fitnivo for all-in-one training + nutrition.' } },
    { '@type': 'Question', name: 'How much do AI personal trainer apps cost?', acceptedAnswer: { '@type': 'Answer', text: 'Most cost USD 10–30 per month, which is roughly 5–10% of the cost of an in-person personal trainer at 2–3 sessions per week.' } },
    { '@type': 'Question', name: 'Can an AI personal trainer replace a human one?', acceptedAnswer: { '@type': 'Answer', text: 'For workout planning, tracking, and progression, yes. For hands-on form correction, injury rehab, or highly technical sport-specific skills, a qualified human is still better.' } },
    { '@type': 'Question', name: 'Are AI personal trainer apps good for beginners?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A good AI trainer removes the biggest beginner blocker: not knowing what to do. It hands you a plan and progresses you gradually.' } },
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
          <span className="text-white/50">Best AI Personal Trainer Apps 2026</span>
        </nav>

        <div className="mb-5 flex items-center gap-3 text-sm text-white/40">
          <span className="uppercase tracking-widest text-[#FF6A00] text-[10px] font-bold font-mono">Best-of</span>
          <span className="text-white/20">·</span>
          <span>11 min read</span>
          <span className="text-white/20">·</span>
          <time dateTime="2026-09-04">September 4, 2026</time>
        </div>

        <div className="relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-8 max-w-4xl">
            Best AI Personal Trainer Apps in 2026
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
            src="/images/blog/ai-coaching/best-ai-personal-trainer-apps-2026.webp"
            alt="Best AI personal trainer apps of 2026 compared side by side"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <PersonalTrainerContent />
      </div>

      <Footer />
    </main>
  );
}
