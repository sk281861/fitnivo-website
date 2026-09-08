import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';
import MuscleGainContent from './MuscleGainContent';

export const metadata: Metadata = {
  title: 'Best AI Fitness Apps for Muscle Gain in 2026 (Tested) | Fitnivo',
  description:
    'The best AI fitness apps for muscle gain in 2026 — apps that handle progressive overload, protein tracking, and workout periodization for building muscle.',
  keywords: [
    'ai fitness apps for muscle gain',
    'best ai workout app for muscle building',
    'ai app for building muscle',
    'ai personal trainer for muscle gain',
    'best ai workout tracker',
  ],
  alternates: { canonical: 'https://fitnivo.in/blog/ai-fitness-apps-for-muscle-gain' },
  openGraph: {
    title: 'Best AI Fitness Apps for Muscle Gain in 2026 (Tested)',
    description: 'The best AI fitness apps for muscle gain — progressive overload, protein tracking, and workout periodization for building muscle.',
    url: 'https://fitnivo.in/blog/ai-fitness-apps-for-muscle-gain',
    type: 'article',
    images: [{ url: 'https://fitnivo.in/images/blog/ai-coaching/ai_coaching_comparison_chart.webp', width: 1200, height: 630 }],
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Best AI Fitness Apps for Muscle Gain in 2026',
  description: 'Tested comparison of AI fitness apps for muscle building — progressive overload, protein tracking, and periodization.',
  image: 'https://fitnivo.in/images/blog/ai-coaching/ai_coaching_comparison_chart.webp',
  url: 'https://fitnivo.in/blog/ai-fitness-apps-for-muscle-gain',
  datePublished: '2026-09-04T00:00:00Z',
  dateModified: '2026-09-09T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 2300,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'Best AI Fitness Apps for Muscle Gain in 2026', url: 'https://fitnivo.in/blog/ai-fitness-apps-for-muscle-gain' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best AI app for building muscle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most lifters, Fitnivo (best all-in-one with nutrition) or Fitbod (best equipment-adaptive workout generation) lead the field. JuggernautAI and Caliber are the strongest options for advanced or competitive lifters who need sophisticated periodization. The best choice depends on whether you also need protein/nutrition tracking alongside workout programming.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do AI fitness apps help with muscle gain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The core driver of muscle gain is progressive overload — consistently adding stress to the muscle over time. AI fitness apps automate this by tracking every set and weight, then recommending the next session based on your logged performance. Without logging, managing progressive overload across multiple exercises is difficult to do manually.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does progressive overload work in AI fitness apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You log your sets, reps, and weights each session. The AI compares your performance to your target and adjusts the next session accordingly — adding weight if you cleared all reps with good form, holding or reducing if you missed reps. More sophisticated apps also manage volume, intensity, and deload timing across training blocks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Fitbod or Fitnivo better for muscle building?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fitbod excels at equipment-adaptive workout generation — it reshuffles exercises dynamically based on what equipment you have and what muscles were last worked. Fitnivo adds protein and calorie tracking alongside workout programming, which matters for muscle gain because diet is half the equation. If you only need workout programming, Fitbod is strong. If you want nutrition integrated, Fitnivo is the better fit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What protein intake does Fitnivo recommend for muscle gain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fitnivo sets protein targets based on your body weight and goal, aligned with current evidence: typically 1.6–2.2 g of protein per kg of body weight for muscle gain. The AI nutrition coach and food scanner help you track whether you are hitting that target daily, which is where most people fall short.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I build muscle with a free AI fitness app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Fitnivo\'s free tier includes unlimited workout logging and 15 AI coach messages per day — enough to run a full progressive overload program. Fitbod and Hevy also offer usable free tiers. The key features for muscle gain (workout logging and progressive overload tracking) are available free in several apps.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best AI workout tracker for the gym?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hevy is widely used as a pure workout tracker with a clean interface and strong exercise library. Fitnivo tracks workouts and connects logging to nutrition. Fitbod generates workouts and tracks progress. The best tracker depends on whether you want the app to generate your program (Fitnivo, Fitbod) or just log a program you bring in (Hevy).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do AI apps work for advanced lifters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most general AI fitness apps are optimized for beginner-to-intermediate users. JuggernautAI and Caliber are specifically designed for advanced and competitive lifters — they use RPE-based training, block periodization, and sophisticated deload management. For advanced athletes, these specialist apps outperform general-purpose fitness apps.',
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

      {/* Hero */}
      <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-[#FF6A00] hover:text-[#FF8524]">Home</Link>
          <span className="text-white/30">/</span>
          <Link href="/blog" className="text-[#FF6A00] hover:text-[#FF8524]">Blog</Link>
          <span className="text-white/30">/</span>
          <span className="text-white/50">Best AI Fitness Apps for Muscle Gain 2026</span>
        </nav>

        <div className="mb-5 flex items-center gap-3 text-sm text-white/40">
          <span className="uppercase tracking-widest text-[#FF6A00] text-[10px] font-bold font-mono">Best-of</span>
          <span className="text-white/20">·</span>
          <span>9 min read</span>
          <span className="text-white/20">·</span>
          <time dateTime="2026-09-04">September 4, 2026</time>
        </div>

        <div className="relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-8 max-w-4xl">
            Best AI Fitness Apps for Muscle Gain in 2026
          </h1>
          {/* Floating mascot */}
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
            src="/images/blog/ai-coaching/ai_coaching_comparison_chart.webp"
            alt="Best AI fitness apps for muscle gain in 2026"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>

      {/* Animated content */}
      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <MuscleGainContent />
      </div>

      <Footer />
    </main>
  );
}
