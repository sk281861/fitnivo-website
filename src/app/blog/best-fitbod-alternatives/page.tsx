"use client";

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DeviceSlider from '@/app/ai-fitness-coach/_components/DeviceSlider';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

// ── Schema Data ──────────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  headline: 'The 5 Best Fitbod Alternatives in 2026 (Free & Premium Options)',
  description:
    'Looking for the best Fitbod alternatives in 2026? Read our detailed review of Fitnivo, Hevy, Strong, and others to find the best all-in-one fitness app.',
  image: 'https://fitnivo.in/images/blog/best-fitbod-alternatives-hero.webp',
  url: 'https://fitnivo.in/blog/best-fitbod-alternatives',
  datePublished: '2026-07-01T00:00:00Z',
  dateModified: '2026-07-01T00:00:00Z',
  authorName: 'Marcus Vance, CSCS',
  authorUrl: 'https://fitnivo.in/blog',
  wordCount: 1350,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  {
    name: 'The 5 Best Fitbod Alternatives in 2026 (Free & Premium Options)',
    url: 'https://fitnivo.in/blog/best-fitbod-alternatives',
  },
]);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is there a free alternative to Fitbod?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Nike Training Club is a completely free alternative for bodyweight and cardio follow-along sessions. For weightlifting logging, Hevy and Strong offer solid free tiers with limited custom routine slots."
      }
    },
    {
      "@type": "Question",
      "name": "Does Fitbod track macros?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, Fitbod is strictly a workout generation and logging app. Users looking to track their nutrition alongside workouts typically have to use a separate app like MyFitnessPal or choose an integrated alternative like Fitnivo."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best all-in-one fitness and mindfulness app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fitnivo is the best all-in-one option in 2026 because it consolidates progressive overload workout generation, macro logging, hydration tracking, and mindfulness recovery protocols into a single, unified interface."
      }
    }
  ]
};

const schemaJson = JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]);

// ── Table of Contents ─────────────────────────────────────────────────────────
const tableOfContents = [
  { id: 'why-look-for-alternatives', label: 'Why Are Users Looking for a Fitbod Alternative?' },
  { id: 'alt-1-fitnivo', label: '1. Fitnivo: The Best All-in-One AI Coach & Macro Tracker' },
  { id: 'alt-2-hevy', label: '2. Hevy: The Best Social Workout Logger' },
  { id: 'alt-3-strong', label: '3. Strong: The Minimalist Choice' },
  { id: 'alt-4-loadmuscle', label: '4. Load Muscle: The New AI Contender' },
  { id: 'alt-5-ntc', label: '5. Nike Training Club: The Best Completely Free Option' },
  { id: 'social-accountability-advantage', label: 'The Social Accountability Advantage' },
  { id: 'comparison-matrix', label: 'Feature Comparison Matrix: Fitnivo vs. Fitbod vs. Hevy' },
  { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
];

// ── Related Posts ─────────────────────────────────────────────────────────────
const relatedPosts = [
  {
    title: 'Mindfulness and Athletic Performance: The Mind-Body Connection',
    description: 'Explore the neuroscience of how mindfulness training reduces stress and improves athletic output.',
    href: '/blog/mindfulness-athletic-performance',
    image: '/images/blog/mindfulness/mindfulness-athletic-performance-hero.webp',
    readTime: '9 min read',
    category: 'Mindfulness',
  },
  {
    title: 'Nutrition Science: Macros, Micros & Personalization',
    description: 'Most people track calories. Elite performers track nutrient quality, timing, and individual metabolic response.',
    href: '/blog/nutrition-science-personalization',
    image: '/images/blog/nutrition/nutrition_science_hero.webp',
    readTime: '12 min read',
    category: 'Nutrition',
  },
  {
    title: 'AI vs. Traditional Fitness Coaching: A Complete Comparison',
    description: 'Eight dimensions where AI coaching consistently outperforms human-only methods.',
    href: '/blog/ai-vs-traditional-coaching',
    image: '/images/blog/ai-coaching/ai_vs_traditional_hero.webp',
    readTime: '10 min read',
    category: 'AI Coaching',
  },
];

export default function BestFitbodAlternativesPage() {
  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #0d1033 50%, #0a0a1a 100%)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.18) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-indigo-400 hover:text-indigo-300 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/blog" className="text-indigo-400 hover:text-indigo-300 transition-colors">Blog</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 truncate">AI Coaching</span>
          </nav>

          {/* Category & read time */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest"
              style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)' }}
            >
              AI Coaching
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/40 text-sm">10 min read</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/40 text-sm">July 1, 2026</span>
          </div>

          {/* H1 Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ letterSpacing: '-0.02em' }}>
            The 5 Best Fitbod Alternatives in 2026{' '}
            <span style={{ background: 'linear-gradient(90deg, #00F2FF, #BF00FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              (Free & Premium Options)
            </span>
          </h1>

          {/* AEO Quick Answer Block */}
          <div className="bg-indigo-950/20 border border-indigo-500/20 p-6 rounded-2xl mb-8">
            <p className="text-lg text-white font-bold leading-relaxed">
              Quick Answer: While Fitbod is great for AI recommendations, apps like Fitnivo, Hevy, and Strong offer better UI, lifetime value, or integrated macro tracking. Fitnivo stands out as the ultimate all-in-one option, combining automated workout generation with complete macro logging, hydration tracking, and CNS-focused mindfulness exercises on a sleek black interface.
            </p>
          </div>

          <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
            Finding the right workout app can feel like navigating an endless sea of identical templates. For years, Fitbod has dominated the AI workout generation space, but as users seek deeper biometric integration and holistic recovery metrics, several competitors have stepped up to fill the gaps.
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 mb-10">
            <Image
              src="/images/fitbuu.webp"
              alt="Marcus Vance, CSCS — Behavioral Fitness Specialist and Chief Analytics Officer at Fitnivo"
              width={48}
              height={48}
              className="rounded-full ring-2 ring-indigo-500/40"
            />
            <div>
              <p className="text-white font-semibold text-sm">Marcus Vance, CSCS</p>
              <p className="text-white/50 text-xs">Behavioral Fitness Specialist · MSc Applied Psychology</p>
            </div>
          </div>
        </div>

        {/* Hero Image (Wrapped in custom styled container with 1px border and cyan glow) */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden border border-[#262626] shadow-[0_0_40px_rgba(0,242,254,0.15)]" style={{ height: '300px' }}>
            <Image
              src="/images/blog/best-fitbod-alternatives-hero.webp"
              alt="The 5 Best Fitbod Alternatives in 2026 comparison hero graphic showing 3D fitness telemetry"
              fill
              priority
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,26,0.6) 0%, transparent 60%)' }} />
          </div>
        </div>
      </section>

      {/* ── Main Content Grid ─────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">

          {/* ── Article Body ───────────────────────────────────────────────── */}
          <article className="min-w-0">

            {/* ── Table of Contents ─────────────────────────────────────── */}
            <nav
              aria-label="Table of contents"
              className="mb-12 rounded-2xl p-6"
              style={{
                background: 'rgba(99,102,241,0.07)',
                border: '1px solid rgba(99,102,241,0.2)',
              }}
            >
              <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span style={{ color: '#818cf8' }}>📋</span> Table of Contents
              </h2>
              <ol className="space-y-2">
                {tableOfContents.map((item, i) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <span className="text-xs font-mono mt-0.5 w-5 text-right flex-shrink-0" style={{ color: '#818cf8' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-white/70 hover:text-indigo-400 transition-colors leading-snug"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* ── SECTION 1: Why Look for Alternatives ──────────────────────── */}
            <section id="why-look-for-alternatives" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #00F2FF', paddingLeft: '1rem' }}>
                Why Are Users Looking for a Fitbod Alternative?
              </h2>
              <div className="text-white/80 space-y-6 leading-relaxed">
                <p>
                  Fitbod has earned a strong reputation for generating workouts based on available gym equipment and muscle recovery charts. However, as the digital fitness market matures in 2026, users are hitting several points of friction that force them to look elsewhere.
                </p>
                <p>
                  First, Fitbod is strictly limited to weightlifting and workout generation. It entirely lacks nutrition tools, meaning users are forced to pay for a second subscription (like MyFitnessPal) to track their diet. Managing multiple separate subscriptions is both expensive and inefficient, leading people to search for a unified, all-in-one fitness and mindfulness app.
                </p>
                <p>
                  Second, subscription costs have steadily risen. Many weightlifters feel they aren&apos;t getting enough value for the monthly fee, especially since the app doesn&apos;t integrate critical daily tracking metrics like hydration or post-workout mental recovery protocols.
                </p>
                <p>
                  Finally, some users report that Fitbod&apos;s workout generation logic can feel repetitive over time. It occasionally suggests odd exercise selections or generic rep splits that don&apos;t align with a user&apos;s real-world progress or daily physical recovery needs.
                </p>
              </div>
            </section>

            {/* ── SECTION 2: 1. Fitnivo ─────────────────────────────────────── */}
            <section id="alt-1-fitnivo" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #00F2FF', paddingLeft: '1rem' }}>
                1. Fitnivo: The Best All-in-One AI Coach & Macro Tracker
              </h2>
              <div className="text-white/80 space-y-6 leading-relaxed">
                <p>
                  Fitnivo is designed to be the ultimate **Holistic AI Coach**. Unlike Fitbod, which only tracks the weights you lift, Fitnivo is built to manage your entire biological recovery loop: Workouts, Macros, Hydration Logging, and Mindfulness.
                </p>
                <p>
                  It features a stunning, premium pure black and neon cyan UI designed to look beautiful in low-light gym environments. Rather than jumping between three different apps, you get a complete daily health dashboard that handles your lifting, nutrition, and recovery in one place.
                </p>

                {/* Inline Diagram (Wrapped in custom styled container with 1px border) */}
                <div className="my-8 rounded-2xl overflow-hidden border border-[#262626]">
                  <Image
                    src="/images/blog/holistic-coach-tracker.webp"
                    alt="Fitnivo holistic biological recovery loop tracker displaying macro, hydration, and mindfulness metrics"
                    width={800}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="text-white font-bold text-lg">Key Features:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
                    <li>
                      <strong>Equipment-Aware Workouts:</strong> Instantly adapts to your setting. Whether you are in a commercial gym, a hotel fitness center, or doing a bodyweight routine in your living room, the AI generates a customized plan to match your exact setup.
                    </li>
                    <li>
                      <strong>Sub-500ms Recalculation:</strong> Log a set, and Fitnivo&apos;s algorithm immediately adjusts the target weights and reps for your remaining sets in under 500 milliseconds, optimizing your progressive overload on the fly.
                    </li>
                    <li>
                      <strong>Workout Tracker with Hydration and Macro Logging:</strong> Your daily calorie and macronutrient targets dynamically adjust in real time based on your active workout volume and hydration levels.
                    </li>
                    <li>
                      <strong>Mindfulness for Weightlifting Recovery:</strong> Houses specialized breathing patterns and body scans designed to downregulate your central nervous system (CNS) immediately after a heavy training session, accelerating muscle repair.
                    </li>
                  </ul>
                </div>

                {/* Device Carousel Showcase */}
                <div className="my-12 flex flex-col items-center">
                  <h4 className="text-white font-mono text-sm uppercase tracking-widest mb-6">Explore the Fitnivo Interface</h4>
                  <DeviceSlider />
                </div>

                <div className="my-8 text-center">
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
                    className="inline-block px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold font-mono uppercase tracking-wider transition-colors"
                  >
                    Start Your Free Trial with Fitnivo
                  </Link>
                </div>
              </div>
            </section>

            {/* ── SECTION 3: 2. Hevy ────────────────────────────────────────── */}
            <section id="alt-2-hevy" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #00F2FF', paddingLeft: '1rem' }}>
                2. Hevy: The Best Social Workout Logger
              </h2>
              <div className="text-white/80 space-y-6 leading-relaxed">
                <p>
                  Hevy has rapidly become one of the most popular workout loggers on the market, largely thanks to its clean interface and strong community-driven features.
                </p>
                <p>
                  The app excels as a social platform. It allows you to follow friends, share routines, compare lift histories, and comment on each other&apos;s workouts, which is excellent for external accountability.
                </p>
                <p>
                  However, Hevy is not a true AI coach. It does not automatically generate routines or adjust weights for you. If you want an app that calculates your progressive overload and tells you exactly what to do next, you will find Hevy lacking compared to Fitbod or Fitnivo.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
                  <li><strong>Pros:</strong> Excellent social feed, robust routine builder, very stable free tier.</li>
                  <li><strong>Cons:</strong> No automated AI workout generation, completely lacks macro, hydration, or mindfulness recovery tracking.</li>
                </ul>
              </div>
            </section>

            {/* ── SECTION 4: 3. Strong ──────────────────────────────────────── */}
            <section id="alt-3-strong" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #00F2FF', paddingLeft: '1rem' }}>
                3. Strong: The Minimalist Choice
              </h2>
              <div className="text-white/80 space-y-6 leading-relaxed">
                <p>
                  Strong is a veteran in the workout logging space, beloved for its minimalist, distraction-free approach to recording your weightlifting metrics.
                </p>
                <p>
                  The app is incredibly fast to use. It allows you to enter your sets and reps with minimal taps and includes useful plates calculators and rest timers.
                </p>
                <p>
                  Unfortunately, Strong has received very few feature updates in recent years. It lacks the modern AI algorithms of Fitbod, and like Hevy, it relies entirely on you to create your own workout plans. There are no built-in nutrition tools or recovery protocols to sync with your training.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
                  <li><strong>Pros:</strong> Fast, clean, reliable interface that stays out of your way during a workout.</li>
                  <li><strong>Cons:</strong> Development has stalled, no AI planning, very limited free tier, no food or hydration logs.</li>
                </ul>
              </div>
            </section>

            {/* ── SECTION 5: 4. Load Muscle ─────────────────────────────────── */}
            <section id="alt-4-loadmuscle" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #00F2FF', paddingLeft: '1rem' }}>
                4. Load Muscle: The New AI Contender
              </h2>
              <div className="text-white/80 space-y-6 leading-relaxed">
                <p>
                  Load Muscle is a newer entry in the AI fitness category, aiming to challenge Fitbod directly with algorithmic workout planning.
                </p>
                <p>
                  The app features a solid program builder that adjusts volume and fatigue metrics over multi-week blocks. It also boasts a large library of high-definition exercise demonstration videos.
                </p>
                <p>
                  Because it is a relatively new application, its community is small, and its algorithm lacks the vast dataset that Fitbod has accumulated over the years. It also functions solely as a weightlifting tracker, missing the broader, holistic approach of all-in-one dashboards.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
                  <li><strong>Pros:</strong> Quality block-periodization AI programming, polished video guides.</li>
                  <li><strong>Cons:</strong> Newer algorithm, lacks community features, no integrated nutrition or mindfulness tools.</li>
                </ul>
              </div>
            </section>

            {/* ── SECTION 6: 5. Nike Training Club ──────────────────────────── */}
            <section id="alt-5-ntc" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #00F2FF', paddingLeft: '1rem' }}>
                5. Nike Training Club: The Best Completely Free Option
              </h2>
              <div className="text-white/80 space-y-6 leading-relaxed">
                <p>
                  If you are operating on a tight budget and want a completely free workout tracker, Nike Training Club (NTC) is a stellar option.
                </p>
                <p>
                  NTC offers hundreds of premium, follow-along video workouts led by world-class trainers. It is particularly strong for home fitness, yoga, bodyweight conditioning, and cardio sessions.
                </p>
                <p>
                  However, NTC is poorly suited for progressive overload in a commercial gym. It does not provide custom weightlifting logs or dynamic load adjustments, making it a bad fit for serious lifters focused on progressive volume tracking.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
                  <li><strong>Pros:</strong> 100% free with no hidden fees or paywalls, extremely high-production video guides.</li>
                  <li><strong>Cons:</strong> Bad for tracking heavy barbell progression, generic training templates, no macro or recovery metrics.</li>
                </ul>
              </div>
            </section>

            {/* ── SECTION: The Social Accountability Advantage ───────────────── */}
            <section id="social-accountability-advantage" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #00F2FF', paddingLeft: '1rem' }}>
                The Social Accountability Advantage
              </h2>
              <div className="text-white/80 space-y-6 leading-relaxed">
                <p>
                  When comparing fitness platforms in the search for the best gamified fitness apps 2026, the biggest differentiator often comes down to psychology. How do you stay motivated to workout at home or in a busy commercial gym? The answer lies in how an app triggers your brain&apos;s dopamine loop.
                </p>
                <p>
                  Fitnivo solves the #1 reason people quit fitness apps: loss of motivation. While other loggers assume you have infinite willpower, Fitnivo is built as a complete gamified fitness experience. It features a built-in **Streak Tracker** equipped with streak freezes, ensuring you don&apos;t get punished or lose your momentum due to life events like travel or illness.
                </p>
                <p>
                  This is where Fitnivo differs fundamentally from Hevy. While Hevy is essentially a social Instagram-style feed for workouts, Fitnivo uses actual game mechanics. With Global Leaderboards, leveling systems, and point modifiers, Fitnivo gamifies your consistency, helping you build positive habits and keep you addicted to your own health progress.
                </p>
              </div>
            </section>

            {/* ── SECTION 7: Comparison Matrix ──────────────────────────────── */}
            <section id="comparison-matrix" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #00F2FF', paddingLeft: '1rem' }}>
                Feature Comparison Matrix: Fitnivo vs. Fitbod vs. Hevy
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-white/10 text-sm">
                  <thead>
                    <tr className="bg-white/5 font-mono border-b border-white/10 text-white">
                      <th className="p-4 border-r border-white/10">Feature</th>
                      <th className="p-4 border-r border-white/10">Fitnivo (Holistic Coach)</th>
                      <th className="p-4 border-r border-white/10">Fitbod</th>
                      <th className="p-4">Hevy</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold border-r border-white/10">AI Workout Generation</td>
                      <td className="p-4 text-green-400 border-r border-white/10">✓ (Sub-500ms math)</td>
                      <td className="p-4 text-green-400 border-r border-white/10">✓ (Standard AI)</td>
                      <td className="p-4 text-red-500">✗ (Manual log)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold border-r border-white/10">Integrated Macro/Meal Tracking</td>
                      <td className="p-4 text-green-400 border-r border-white/10">✓ (Dynamic adjustment)</td>
                      <td className="p-4 text-red-500 border-r border-white/10">✗</td>
                      <td className="p-4 text-red-500">✗</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold border-r border-white/10">Equipment-Aware Logic</td>
                      <td className="p-4 text-green-400 border-r border-white/10">✓ (Instantly adaptive)</td>
                      <td className="p-4 text-green-400 border-r border-white/10">✓</td>
                      <td className="p-4 text-red-500">✗</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold border-r border-white/10">Social Features</td>
                      <td className="p-4 text-red-500 border-r border-white/10">✗ (Privacy focused)</td>
                      <td className="p-4 text-red-500 border-r border-white/10">✗</td>
                      <td className="p-4 text-green-400">✓ (Strong community)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold border-r border-white/10">Gamification (Streaks & Leaderboards)</td>
                      <td className="p-4 text-green-400 border-r border-white/10">✓ (XP levels, leaderboards, and streak freezes)</td>
                      <td className="p-4 text-green-400 border-r border-white/10">✓ (Weekly streaks & club leaderboards)</td>
                      <td className="p-4 text-green-400">✓ (Weekly streaks & follower PR leaderboards)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold border-r border-white/10">Hydration Tracking</td>
                      <td className="p-4 text-green-400 border-r border-white/10">✓</td>
                      <td className="p-4 text-red-500 border-r border-white/10">✗</td>
                      <td className="p-4 text-red-500">✗</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold border-r border-white/10">Mindfulness Exercises</td>
                      <td className="p-4 text-green-400 border-r border-white/10">✓ (CNS recovery)</td>
                      <td className="p-4 text-red-500 border-r border-white/10">✗</td>
                      <td className="p-4 text-red-500">✗</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── SECTION 8: FAQ ────────────────────────────────────────────── */}
            <section id="frequently-asked-questions" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #00F2FF', paddingLeft: '1rem' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Is there a free alternative to Fitbod?</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Yes, Nike Training Club is a completely free alternative for bodyweight and cardio follow-along sessions. For weightlifting logging, Hevy and Strong offer solid free tiers with limited custom routine slots.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-lg font-bold text-white mb-2">Does Fitbod track macros?</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    No, Fitbod is strictly a workout generation and logging app. Users looking to track their nutrition alongside workouts typically have to use a separate app like MyFitnessPal or choose an integrated alternative like Fitnivo.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-lg font-bold text-white mb-2">What is the best all-in-one fitness and mindfulness app?</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Fitnivo is the best all-in-one option in 2026 because it consolidates progressive overload workout generation, macro logging, hydration tracking, and mindfulness recovery protocols into a single, unified interface.
                  </p>
                </div>
              </div>
            </section>

          </article>

          {/* ── Sidebar ────────────────────────────────────────────────────── */}
          <aside className="sticky top-28 space-y-10 lg:block">
            {/* Newsletter Sign Up */}
            <div className="p-6 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <h3 className="text-white font-bold text-base mb-3 font-mono uppercase tracking-wider">
                ⚡ Fitnivo Journal
              </h3>
              <p className="text-white/60 text-xs leading-relaxed mb-4">
                Get the latest science-backed workout, biomechanics, and nutrition insights delivered weekly.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-bold text-xs rounded-xl font-mono uppercase tracking-wider"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Related Posts */}
            <div>
              <h3 className="text-white font-bold text-sm mb-5 font-mono uppercase tracking-wider">
                📚 Related Articles
              </h3>
              <div className="space-y-5">
                {relatedPosts.map((post) => (
                  <Link href={post.href} key={post.title} className="group block" style={{ textDecoration: 'none' }}>
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-3 border border-white/5">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="280px"
                      />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest" style={{ color: '#818cf8' }}>
                      {post.category} · {post.readTime}
                    </span>
                    <h4 className="text-white group-hover:text-indigo-400 transition-colors text-sm font-semibold mt-1 leading-snug">
                      {post.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>

      <Footer />
    </main>
  );
}
