import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

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
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Fitnivo vs MacroFactor (2026) — Which Nutrition Coach Wins?',
  description: 'Side-by-side comparison of Fitnivo and MacroFactor for adaptive macro coaching, food scanning, and workouts.',
  image: 'https://fitnivo.in/images/mockup/nutrition-stats-bmi-tracking-dashboard.webp',
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

      <article className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300">Home</Link>
          <span className="text-white/30">/</span>
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300">Blog</Link>
          <span className="text-white/30">/</span>
          <span className="text-white/60">Fitnivo vs MacroFactor</span>
        </nav>

        <div className="mb-6 flex items-center gap-3 text-sm text-[#B4B4B4]">
          <span className="uppercase tracking-widest text-cyan-400 text-xs font-bold">Comparison</span>
          <span>·</span>
          <span>8 min read</span>
          <span>·</span>
          <time dateTime="2026-09-04">September 4, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          Fitnivo vs MacroFactor (2026) — Which Nutrition Coach Wins?
        </h1>

        <div className="bg-cyan-950/20 border border-cyan-400/30 p-6 mb-10">
          <p className="text-white font-semibold leading-relaxed">
            <strong>Short answer:</strong> MacroFactor has the deepest adaptive-macro engine — if pure macro coaching is all you need, it&apos;s excellent. Fitnivo pairs adaptive nutrition with AI food scanning, meal planning, and workouts in one app, with a free tier and $10/mo Pro.
          </p>
        </div>

        <p className="text-sm text-[#B4B4B4] mb-8">
          Reviewed by the <Link href="/about" className="text-cyan-400 hover:underline">Fitnivo Editorial Team</Link>. Fitnivo is our product; we call out where MacroFactor is the better fit.
        </p>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Feature comparison</h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left border border-[#1f1f1f] text-sm">
            <thead>
              <tr className="bg-[#0a0a0a] border-b border-[#1f1f1f]">
                <th className="p-4">Feature</th>
                <th className="p-4 text-cyan-400">Fitnivo</th>
                <th className="p-4">MacroFactor</th>
              </tr>
            </thead>
            <tbody className="text-[#B4B4B4]">
              {[
                ['Adaptive calorie & macro targets', 'Yes', 'Yes (deepest engine)'],
                ['AI food scanner (photo → macros)', 'Yes', 'No (manual/barcode)'],
                ['Barcode + database search', 'Yes', 'Yes'],
                ['Micronutrients tracked', 'Basic', 'Extensive (54+ items)'],
                ['Meal planner', 'Yes', 'No'],
                ['AI workouts / workout logger', 'Yes', 'No'],
                ['AI coach chat', 'Yes', 'No'],
                ['Free tier', 'Yes (3 scans/day + 15 AI msgs/day + workout logger)', 'Limited trial only'],
                ['Pro price', '$10/mo · $60/yr', '~$11.99/mo · ~$71.99/yr'],
                ['Best for', 'All-in-one AI fitness + nutrition', 'Pure adaptive macro coaching'],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 ? 'bg-[#050505]' : ''}>
                  <td className="p-4 font-semibold text-white border-t border-[#1f1f1f]">{row[0]}</td>
                  <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">{row[1]}</td>
                  <td className="p-4 border-t border-[#1f1f1f]">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Where MacroFactor wins</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li><strong className="text-white">Weekly adaptive targets:</strong> MacroFactor calculates your actual TDEE from your weight trend and intake, and adjusts weekly. Some of the best macro-coaching math on the market.</li>
          <li><strong className="text-white">Micronutrient depth:</strong> Tracks 54+ items including alcohol, caffeine, and water alongside macros and micros.</li>
          <li><strong className="text-white">Data-nerd features:</strong> Detailed export, trend charts, and reference intakes for people who love the numbers.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Where Fitnivo wins</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li><strong className="text-white">Photo logging:</strong> AI food scanner cuts logging friction — snap a plate, get macros. MacroFactor doesn&apos;t have this.</li>
          <li><strong className="text-white">Workouts included:</strong> Fitnivo covers training, tracking, and progression. MacroFactor is nutrition-only.</li>
          <li><strong className="text-white">Meal planner:</strong> Meal ideas built around your targets. MacroFactor logs but doesn&apos;t plan.</li>
          <li><strong className="text-white">Free tier:</strong> Real daily usage without paying. MacroFactor is trial-then-paid.</li>
          <li><strong className="text-white">One app, one bill:</strong> Nutrition + training in a single $10/mo subscription.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Who each is for</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-[#1f1f1f] bg-[#050505] p-6">
            <h3 className="text-white font-bold text-lg mb-3">Choose MacroFactor if…</h3>
            <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
              <li>You care most about deep, weekly adaptive macro targets</li>
              <li>You want detailed micronutrient tracking</li>
              <li>You already have a separate workout app you love</li>
              <li>Manual/barcode logging is fine — you don&apos;t need photo scanning</li>
            </ul>
          </div>
          <div className="border border-cyan-400 bg-cyan-950/10 p-6">
            <h3 className="text-white font-bold text-lg mb-3">Choose Fitnivo if…</h3>
            <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
              <li>You want nutrition + workouts in one app</li>
              <li>You want photo-based food logging (AI food scanner)</li>
              <li>You want meal planning around your macros</li>
              <li>You want a real free tier before paying</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">FAQ</h2>
        <div className="space-y-6 mb-12">
          {faqSchema.mainEntity.map((f) => (
            <div key={f.name} className="border-t border-[#1f1f1f] pt-6 first:border-t-0 first:pt-0">
              <h4 className="text-lg font-bold text-white mb-2">{f.name}</h4>
              <p className="text-[#B4B4B4]">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="border border-cyan-400 bg-cyan-950/10 p-8 mb-12">
          <h3 className="text-2xl font-bold mb-3">Try Fitnivo free</h3>
          <p className="text-[#B4B4B4] mb-4">3 AI food scans/day, 15 AI coach messages/day, unlimited workout logger. Pro is $10/month or $60/year for unlimited.</p>
          <a href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en" className="inline-block px-6 py-3 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300">Download Fitnivo</a>
        </div>

        <h3 className="text-xl font-bold mb-4">Related</h3>
        <ul className="text-cyan-400 space-y-2">
          <li><Link href="/blog/fitnivo-vs-cal-ai" className="hover:underline">Fitnivo vs Cal AI</Link></li>
          <li><Link href="/blog/fitnivo-vs-myfitnesspal" className="hover:underline">Fitnivo vs MyFitnessPal</Link></li>
          <li><Link href="/blog/best-ai-nutrition-coach-apps-2026" className="hover:underline">Best AI Nutrition Coach Apps 2026</Link></li>
          <li><Link href="/ai-nutrition-coach" className="hover:underline">Fitnivo AI Nutrition Coach</Link></li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}
