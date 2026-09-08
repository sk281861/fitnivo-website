import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';
import BeginnersContent from './BeginnersContent';

export const metadata: Metadata = {
  title: 'Best AI Fitness Apps for Beginners in 2026 (No Experience Needed) | Fitnivo',
  description:
    'The best AI fitness apps for beginners in 2026 — apps that explain exercises, build structured programs, and guide you from your first workout.',
  keywords: [
    'ai fitness apps for beginners',
    'best ai workout app for beginners',
    'ai personal trainer for beginners',
    'beginner ai fitness app',
    'ai workout app no experience',
  ],
  alternates: { canonical: 'https://fitnivo.in/blog/ai-fitness-apps-for-beginners' },
  openGraph: {
    title: 'Best AI Fitness Apps for Beginners in 2026 (No Experience Needed)',
    description:
      'The best AI fitness apps for beginners in 2026 — apps that explain exercises, build structured programs, and guide you from your first workout.',
    url: 'https://fitnivo.in/blog/ai-fitness-apps-for-beginners',
    type: 'article',
    images: [
      {
        url: 'https://fitnivo.in/images/blog/ai-coaching/traditional_personal_trainer.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Best AI Fitness Apps for Beginners in 2026 (No Experience Needed)',
  description:
    'The best AI fitness apps for beginners in 2026 — apps that explain exercises, build structured programs, and guide you from your first workout.',
  image: 'https://fitnivo.in/images/blog/ai-coaching/traditional_personal_trainer.webp',
  url: 'https://fitnivo.in/blog/ai-fitness-apps-for-beginners',
  datePublished: '2026-09-04T00:00:00Z',
  dateModified: '2026-09-04T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 2200,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'AI Fitness Apps for Beginners', url: 'https://fitnivo.in/blog/ai-fitness-apps-for-beginners' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can beginners use AI fitness apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI fitness apps are well-suited to beginners because they remove the need to know how to design a workout. You input your goal, experience level, and available equipment, and the app builds a structured program for you — no prior knowledge required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best AI fitness app for someone who has never worked out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For absolute beginners, Fitnivo and Freeletics are good starting points. Fitnivo covers workouts and nutrition together so you do not need two apps. Freeletics has solid beginner bodyweight programs. Nike Training Club is a strong free option with video guidance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do AI fitness apps teach you proper form?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most AI fitness apps include exercise descriptions and some include demo videos or GIFs. They cannot watch you and correct your form in real time. For complex movements like squats and deadlifts, beginners should also seek video resources or an in-person session to check form basics.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Fitnivo good for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Fitnivo asks about your experience level during onboarding and builds workouts accordingly. The AI coach can also answer questions about exercises and explain why certain movements are in your plan. The free tier gives beginners real functionality without upfront cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should beginners use a personal trainer instead of an AI app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A human trainer adds real-time form correction and live accountability that an AI app cannot match. However, a personal trainer costs significantly more. For most beginners with a standard goal like getting fit or losing weight, an AI fitness app provides enough structure to start safely.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long before I see results using an AI fitness app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visible changes typically appear within 4–8 weeks of consistent training and adequate nutrition. Strength gains and improved energy often come faster, within 2–4 weeks. Results depend on consistency, diet, sleep, and starting point — the app is a tool, not a guarantee.',
      },
    },
    {
      '@type': 'Question',
      name: 'What equipment do I need to start with an AI fitness app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'None is required. Most AI fitness apps including Fitnivo and Freeletics support bodyweight-only programs. If you have dumbbells or access to a gym, the app will incorporate them. You select your available equipment during onboarding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are AI fitness apps safe for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally yes, when you input your information accurately. The app sets appropriate starting weights and volume based on your experience level. Start lighter than you think you need to, and flag any pain or injury to your doctor before starting a new exercise program.',
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
          <span className="text-white/50">AI Fitness Apps for Beginners</span>
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
            Best AI Fitness Apps for Beginners in 2026
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
            src="/images/blog/ai-coaching/traditional_personal_trainer.webp"
            alt="Best AI fitness apps for beginners in 2026"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <BeginnersContent />
      </div>

      <Footer />
    </main>
  );
}
