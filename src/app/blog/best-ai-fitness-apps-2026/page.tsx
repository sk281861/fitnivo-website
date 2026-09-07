import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';
import AppComparisonTable, { CompRow } from '@/components/blog-editorial/AppComparisonTable';
import TopPickCard from '@/components/blog-editorial/TopPickCard';
import SmallPickCard from '@/components/blog-editorial/SmallPickCard';
import BlogSidebar from '@/components/blog-editorial/BlogSidebar';
import BlogCTABanner from '@/components/blog-editorial/BlogCTABanner';
import ReadingProgress from '@/components/blog-editorial/ReadingProgress';
import HeroVideo from '@/components/blog-editorial/HeroVideo';

export const metadata: Metadata = {
  title: 'Best AI Fitness Apps in 2026 (Tested & Compared) | Fitnivo',
  description:
    'We compared the top AI fitness apps of 2026 — Fitbod, Freeletics, FitnessAI, Caliber, Ray, Fitnivo, and more. Here is what each is best for.',
  keywords: [
    'best AI fitness apps',
    'best AI fitness apps 2026',
    'AI fitness apps',
    'AI fitness coach app',
    'best AI workout apps',
  ],
  alternates: { canonical: 'https://fitnivo.in/blog/best-ai-fitness-apps-2026' },
  openGraph: {
    title: 'Best AI Fitness Apps in 2026 (Tested & Compared)',
    description: 'Top AI fitness apps of 2026 compared side-by-side.',
    url: 'https://fitnivo.in/blog/best-ai-fitness-apps-2026',
    type: 'article',
    images: [{ url: 'https://fitnivo.in/images/blog/ai-coaching/best-ai-fitness-apps-2026.webp', width: 1200, height: 630 }],
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Best AI Fitness Apps in 2026 (Tested & Compared)',
  description: 'Top AI fitness apps of 2026 compared side-by-side.',
  image: 'https://fitnivo.in/images/blog/ai-coaching/best-ai-fitness-apps-2026.webp',
  url: 'https://fitnivo.in/blog/best-ai-fitness-apps-2026',
  datePublished: '2026-09-03T00:00:00Z',
  dateModified: '2026-09-03T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 2400,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'Best AI Fitness Apps 2026', url: 'https://fitnivo.in/blog/best-ai-fitness-apps-2026' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best AI fitness app in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The right choice depends on what you value most. Fitbod leads for pure strength programming; Freeletics for bodyweight; Ray for voice-guided coaching; Fitnivo for all-in-one AI fitness and nutrition.' } },
    { '@type': 'Question', name: 'Are AI fitness apps worth it?', acceptedAnswer: { '@type': 'Answer', text: 'For most people, yes. AI fitness apps cost a fraction of one-to-one training and remove the friction of designing your own workouts. They are less suitable when you need hands-on form correction or rehab supervision.' } },
    { '@type': 'Question', name: 'Which AI fitness app also does nutrition?', acceptedAnswer: { '@type': 'Answer', text: 'Fitnivo is one of the few AI fitness apps that combines workouts, calorie and macro tracking, AI food scanning, and meal planning in one app.' } },
    { '@type': 'Question', name: 'How much do AI fitness apps cost?', acceptedAnswer: { '@type': 'Answer', text: 'Most AI fitness apps cost roughly USD 10–30 per month, or an annual plan that works out cheaper. Some, like Fitnivo, have a free tier to start.' } },
  ],
};

const schemaJson = JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]);

const apps = [
  { name: 'Fitnivo',      bestFor: 'All-in-one AI fitness + nutrition',   aiWorkouts: '✓', nutrition: '✓',         foodScanner: '✓', coach: '✓',         price: 'Free · Pro $10/mo', url: '/ai-fitness-coach',        internal: true,
    body: 'Fitnivo combines an AI fitness coach with calorie & macro tracking, AI food scanning, and meal planning. Free tier includes unlimited workout logging, water tracking, 3 AI food scans/day, and 15 AI coach messages/day (with tool-calling for workouts, templates, and meal plans). Pro at $10/month or $60/year unlocks unlimited scans and messages. Best if you want one app for both training and nutrition.' },
  { name: 'Fitbod',       bestFor: 'Strength programming',                aiWorkouts: '✓', nutrition: '—',         foodScanner: '—', coach: '—',         price: '~$12.99/mo',        url: 'https://fitbod.me',
    body: "Fitbod is the veteran for AI-driven strength programming — it selects exercises, sets, and reps based on your equipment and past logs. No nutrition side, so you'll need a second app for food." },
  { name: 'Freeletics',   bestFor: 'Bodyweight & adaptive training',      aiWorkouts: '✓', nutrition: '✓ (basic)', foodScanner: '—', coach: '✓',         price: '~$34.99/qtr',       url: 'https://www.freeletics.com',
    body: 'Freeletics is the go-to for bodyweight and travel-friendly training. AI Coach adapts sessions to your feedback and progress.' },
  { name: 'FitnessAI',    bestFor: 'Gym progression',                     aiWorkouts: '✓', nutrition: '—',         foodScanner: '—', coach: '—',         price: '~$89/yr',           url: 'https://www.fitnessai.com',
    body: 'FitnessAI focuses on straightforward, gym-based strength progression with minimal ceremony. Good if you want a lean, focused workout tracker.' },
  { name: 'Caliber',      bestFor: 'Human + AI coaching',                 aiWorkouts: '✓', nutrition: '✓',         foodScanner: '—', coach: '✓ (human)', price: 'Free + coach tiers',url: 'https://www.caliberstrong.com',
    body: "Caliber pairs an AI structure with an actual human coach. Costlier, but adds accountability if that's what you need." },
  { name: 'Ray',          bestFor: 'Voice-guided real-time coaching',     aiWorkouts: '✓', nutrition: '—',         foodScanner: '—', coach: '✓ (voice)', price: '~$19.99/mo',        url: 'https://www.rayfit.com',
    body: 'Ray provides in-ear voice coaching during your workout with computer-vision rep counting. Feels like a live trainer next to you.' },
  { name: 'SensAI',       bestFor: 'Wearable-driven training',            aiWorkouts: '✓', nutrition: '—',         foodScanner: '—', coach: '✓ (LLM chat)', price: 'Paid',           url: 'https://www.sensai.fit',
    body: 'SensAI reads HRV, sleep, and resting HR from HealthKit and programs your training around recovery. Best if you own a wearable.' },
  { name: 'JuggernautAI', bestFor: 'Powerlifting periodization',          aiWorkouts: '✓', nutrition: '—',         foodScanner: '—', coach: '—',         price: 'Paid',              url: 'https://www.juggernautai.app',
    body: 'JuggernautAI applies block periodization to squat, bench, and deadlift. Purpose-built for powerlifters.' },
];

const compColumns = [
  { key: 'aiWorkouts',  label: 'AI Workouts' },
  { key: 'nutrition',   label: 'Nutrition' },
  { key: 'foodScanner', label: 'Food Scan' },
  { key: 'coach',       label: 'Coach' },
];

const compRows: CompRow[] = apps.map((a) => ({
  name: a.name,
  bestFor: a.bestFor,
  price: a.price,
  isOurPick: a.name === 'Fitnivo',
  values: {
    aiWorkouts: a.aiWorkouts,
    nutrition: a.nutrition,
    foodScanner: a.foodScanner,
    coach: a.coach,
  },
}));

const toc = [
  { id: 'quick-comparison',   label: 'Quick Comparison' },
  { id: 'detailed-reviews',   label: 'AI Fitness Apps (Detailed Reviews)' },
  { id: 'picks-by-style',     label: 'Picks by Training Style' },
  { id: 'picks-by-goal',      label: 'Picks by Goal' },
  { id: 'how-we-chose',       label: 'How We Chose These' },
  { id: 'faq',                label: 'FAQs' },
];

const takeaways = [
  'Fitnivo is the strongest all-rounder in 2026 — workouts, nutrition, and food scanning in one app',
  'AI fitness apps do best when they adapt to logged data, not just generic templates',
  'Most people need workouts + nutrition together — apps that only do one are half a tool',
  'Pick based on your goal (strength, bodyweight, fat loss), not on the flashiest AI claims',
  'Consistency beats app choice — the best app is the one you actually open every day',
];

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen" data-build="editorial-v2-2026-09-08">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <ReadingProgress />
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-20">
        {/* ─── HERO (unchanged) ─── */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300">Home</Link>
          <span className="text-white/30">/</span>
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300">Blog</Link>
          <span className="text-white/30">/</span>
          <span className="text-white/60">Best AI Fitness Apps 2026</span>
        </nav>

        <div className="mb-6 flex items-center gap-3 text-sm text-[#B4B4B4]">
          <span className="uppercase tracking-widest text-cyan-400 text-xs font-bold">Best-of</span>
          <span>·</span>
          <span>12 min read</span>
          <span>·</span>
          <time dateTime="2026-09-03">September 3, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 max-w-4xl">
          Best AI Fitness Apps in 2026 (Tested &amp; Compared)
        </h1>

        <div className="relative w-full aspect-[1.9/1] mb-10 overflow-hidden rounded-lg max-w-4xl">
          <Image
            src="/images/blog/ai-coaching/best-ai-fitness-apps-2026.webp"
            alt="Best AI fitness apps of 2026 compared side by side"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
        {/* ─── /HERO ─── */}

        {/* Two-column layout: article + sidebar */}
        <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-10">
          <article className="min-w-0">
            <div className="bg-cyan-950/20 border border-cyan-400/30 p-6 mb-10 rounded-xl">
              <p className="text-white font-semibold leading-relaxed">
                <strong>Quick verdict:</strong> No single AI fitness app is best for everyone. Fitbod leads pure strength programming, Freeletics owns bodyweight, Ray is unmatched for voice-guided real-time coaching, SensAI wins for recovery-aware training, and Fitnivo is the best if you want workouts + nutrition + food scanning in one app.
              </p>
            </div>

            <p className="text-[#B4B4B4] text-lg leading-relaxed mb-6">
              The AI fitness category has split into two genuinely different products in 2026: apps that generate workouts from your data, and apps that pair you with a human coach using AI to scale their attention. Getting the wrong type is the number-one reason people cancel subscriptions.
            </p>
            <p className="text-[#B4B4B4] text-lg leading-relaxed mb-8">
              Below is a straight comparison across eight of the most notable AI fitness apps this year, followed by picks by training style and by goal.
            </p>

            <p className="text-xs text-white/40 mb-10 flex items-center gap-2">
              <span className="inline-block w-1 h-1 rounded-full bg-white/40" />
              Reviewed by the <Link href="/about" className="text-[#FF6A00] hover:underline">Fitnivo Editorial Team</Link>. Third-party product links go to each vendor.
            </p>

            {/* Product demo video */}
            <div className="mb-14">
              <div className="flex items-baseline justify-between gap-4 mb-4 flex-wrap">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  See <span className="text-[#FF6A00]">Fitnivo</span> in action
                </h2>
                <span className="text-[10px] uppercase tracking-widest font-mono text-white/40">
                  10-second demo · auto-plays on view
                </span>
              </div>
              <HeroVideo
                src="/videos/fitnivo-demo.mp4"
                poster="/videos/fitnivo-demo-poster.jpg"
              />
            </div>

            {/* Comparison table */}
            <div id="quick-comparison">
              <AppComparisonTable
                columns={compColumns}
                rows={compRows}
                title="Quick Comparison"
                subtitle="A side-by-side look at the top AI fitness apps in 2026."
              />
            </div>

            {/* Top pick */}
            <TopPickCard
              rank={1}
              name="Fitnivo"
              tagline="Best Overall AI Fitness App in 2026"
              description="A complete AI-powered fitness, nutrition and mindfulness app designed for real people and real results."
              bullets={[
                'AI workout plans (adapts to you)',
                'Personalized nutrition & meal suggestions',
                'AI food scanner (3 free scans/day)',
                'Mindfulness & recovery tools',
                'Syncs with your wearables',
                'Clean, modern and easy to use',
              ]}
              ctaHref="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
              ctaText="Download Fitnivo"
              mascotSrc="/images/mascot/male-standing-transparent.png"
              quote="Fitnivo doesn't just give you workouts. It builds a healthier, stronger, calmer you."
            />

            {/* Other picks grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mb-16">
              {apps.slice(1, 5).map((a, i) => (
                <SmallPickCard
                  key={a.name}
                  rank={i + 2}
                  name={a.name}
                  bestFor={a.bestFor}
                  price={a.price}
                  description={a.body}
                  url={a.url}
                  internal={a.internal}
                />
              ))}
            </div>

            {/* Remaining detailed sections */}
            <h2 className="text-2xl font-bold mb-6 text-white">Other Notable Apps</h2>
            <div className="space-y-8 mb-16">
              {apps.slice(5).map((a, idx) => (
                <section key={a.name} className="border-l-2 border-white/10 pl-5 hover:border-[#FF6A00]/60 transition">
                  <h3 className="text-xl font-bold mb-1 text-white">{idx + 6}. {a.name}</h3>
                  <p className="text-[#FF6A00] text-xs mb-3 uppercase tracking-widest font-mono">Best for: {a.bestFor}</p>
                  <p className="text-[#B4B4B4] leading-relaxed mb-3 text-sm">{a.body}</p>
                  <div className="flex gap-4 flex-wrap text-xs">
                    <span className="text-white/50 font-mono">{a.price}</span>
                    <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-[#FF6A00] hover:underline font-bold uppercase tracking-wider">
                      Visit {a.name} →
                    </a>
                  </div>
                </section>
              ))}
            </div>

            {/* Picks by style */}
            <h2 id="picks-by-style" className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-white">
              Picks by <span className="text-[#FF6A00]">Training Style</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-12">
              {[
                ['Strength / powerlifting', 'Fitbod, JuggernautAI'],
                ['Bodyweight / travel', 'Freeletics'],
                ['All-in-one fitness + nutrition', 'Fitnivo'],
                ['Voice-guided sessions', 'Ray'],
                ['Recovery-driven training', 'SensAI'],
                ['Human coaching with AI', 'Caliber'],
              ].map(([style, picks]) => (
                <div key={style} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-[10px] uppercase tracking-widest font-mono text-white/40 mb-1">{style}</p>
                  <p className="text-sm text-white font-semibold">{picks}</p>
                </div>
              ))}
            </div>

            {/* Picks by goal */}
            <h2 id="picks-by-goal" className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white">
              Picks by <span className="text-[#FF6A00]">Goal</span>
            </h2>
            <ul className="space-y-3 text-[#B4B4B4] mb-12">
              <li><strong className="text-white">Muscle gain:</strong> Fitbod for pure hypertrophy, Fitnivo if you also want to track your calories and protein.</li>
              <li><strong className="text-white">Fat loss:</strong> Fitnivo — the combination of workouts + calorie tracking is what actually drives fat loss.</li>
              <li><strong className="text-white">Beginners:</strong> Fitnivo or Freeletics — both onboard gently.</li>
              <li><strong className="text-white">Home workouts:</strong> Freeletics or Fitnivo (equipment-aware plans).</li>
              <li><strong className="text-white">Gym workouts:</strong> Fitbod for strength focus, Fitnivo for training + food tracking.</li>
            </ul>

            {/* CTA banner */}
            <BlogCTABanner />

            {/* How we tested */}
            <h2 id="how-we-chose" className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white">How We Chose These</h2>
            <p className="text-[#B4B4B4] leading-relaxed mb-4">
              We looked at three things: (1) does the AI actually adapt to your data (not just a chatbot layer on static workouts), (2) does the app cover more than one problem (workouts, nutrition, tracking), and (3) is the price sensible for what you get.
            </p>
            <p className="text-[#B4B4B4] leading-relaxed mb-12">
              Prices are approximate at time of writing and vary by region and promotions.
            </p>

            {/* FAQ */}
            <h2 id="faq" className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white">Frequently Asked Questions</h2>
            <div className="space-y-4 mb-12">
              {[
                { q: 'What is the best AI fitness app in 2026?', a: 'The right choice depends on what you value most. Fitbod leads for pure strength programming; Freeletics for bodyweight; Ray for voice-guided coaching; Fitnivo for all-in-one AI fitness and nutrition.' },
                { q: 'Are AI fitness apps worth it?', a: 'For most people, yes. AI fitness apps cost a fraction of one-to-one training and remove the friction of designing your own workouts. They are less suitable when you need hands-on form correction or rehab supervision.' },
                { q: 'Which AI fitness app also does nutrition?', a: 'Fitnivo is one of the few AI fitness apps that combines workouts, calorie and macro tracking, AI food scanning, and meal planning in one app.' },
                { q: 'How much do AI fitness apps cost?', a: 'Most AI fitness apps cost roughly USD 10–30 per month. Fitnivo has a free tier with real daily usage (3 AI scans/day, 15 AI messages/day, unlimited workout logging), and Pro unlocks unlimited for $10/month or $60/year — on the lower end of the range while covering both fitness and nutrition.' },
              ].map((f) => (
                <details key={f.q} className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/25 transition">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                    <h4 className="text-base font-bold text-white">{f.q}</h4>
                    <span className="text-[#FF6A00] text-xl transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="text-[#B4B4B4] mt-3 text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>

            {/* Related */}
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-widest font-mono">Related Reading</h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { href: '/blog/fitnivo-vs-fitbod',           label: 'Fitnivo vs Fitbod — full comparison' },
                { href: '/blog/fitnivo-vs-cal-ai',           label: 'Fitnivo vs Cal AI — food scanner face-off' },
                { href: '/blog/what-is-an-ai-fitness-coach', label: 'What is an AI fitness coach?' },
                { href: '/blog/best-fitbod-alternatives',    label: 'Best Fitbod alternatives' },
              ].map((r) => (
                <Link key={r.href} href={r.href} className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-[#FF6A00]/40 hover:bg-white/[0.04] transition flex items-center justify-between gap-4">
                  <span className="text-sm text-white group-hover:text-[#FF6A00] transition">{r.label}</span>
                  <span className="text-white/30 group-hover:text-[#FF6A00] transition">→</span>
                </Link>
              ))}
            </div>
          </article>

          <BlogSidebar toc={toc} takeaways={takeaways} faqHref="#faq" />
        </div>
      </div>

      <Footer />
    </main>
  );
}
