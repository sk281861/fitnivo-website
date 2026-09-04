import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

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

      <article className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300">Home</Link>
          <span className="text-white/30">/</span>
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300">Blog</Link>
          <span className="text-white/30">/</span>
          <span className="text-white/60">Fitnivo vs Cal AI</span>
        </nav>

        <div className="mb-6 flex items-center gap-3 text-sm text-[#B4B4B4]">
          <span className="uppercase tracking-widest text-cyan-400 text-xs font-bold">Comparison</span>
          <span>·</span>
          <span>8 min read</span>
          <span>·</span>
          <time dateTime="2026-09-03">September 3, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          Fitnivo vs Cal AI (2026) — Which AI Calorie Tracker Wins?
        </h1>

        <div className="relative w-full aspect-[1.9/1] mb-10 overflow-hidden rounded-lg">
          <Image
            src="/images/blog/nutrition/fitnivo-vs-cal-ai.webp"
            alt="Fitnivo vs Cal AI calorie tracker comparison 2026"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        <div className="bg-cyan-950/20 border border-cyan-400/30 p-6 mb-10">
          <p className="text-white font-semibold leading-relaxed">
            <strong>Short answer:</strong> Cal AI is an excellent single-purpose AI calorie tracker. Fitnivo has the same photo-scanning core plus workouts, meal planning, and nutrition coaching in one app — with a free tier (3 AI food scans/day, 15 AI coach messages/day, unlimited workout logger). Fitnivo Pro is $10/month or $60/year for unlimited.
          </p>
        </div>

        <p className="text-sm text-[#B4B4B4] mb-8">
          Reviewed by the <Link href="/about" className="text-cyan-400 hover:underline">Fitnivo Editorial Team</Link>. Fitnivo is our product; we still call out where Cal AI is the better fit.
        </p>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Feature comparison</h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left border border-[#1f1f1f] text-sm">
            <thead>
              <tr className="bg-[#0a0a0a] border-b border-[#1f1f1f]">
                <th className="p-4">Feature</th>
                <th className="p-4 text-cyan-400">Fitnivo</th>
                <th className="p-4">Cal AI</th>
              </tr>
            </thead>
            <tbody className="text-[#B4B4B4]">
              {[
                ['AI food scanner (photo → macros)', 'Yes', 'Yes (core feature)'],
                ['Calorie & macro tracking', 'Yes', 'Yes'],
                ['Micronutrients tracked', 'Basic', 'Limited'],
                ['Nutrition database', 'Growing', 'Uses MyFitnessPal DB'],
                ['AI nutrition coaching', 'Yes', 'Limited'],
                ['Meal planner', 'Yes', 'No'],
                ['AI workouts', 'Yes', 'No'],
                ['Workout tracking', 'Yes', 'No'],
                ['Free tier', 'Yes (3 scans/day + 15 AI messages/day + workout logger)', 'Limited trial only'],
                ['Pro annual price', '$60/yr ($5/mo effective)', 'Higher — see Cal AI pricing'],
                ['Best for', 'All-in-one fitness + nutrition', 'Focused calorie tracking by photo'],
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

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Where Cal AI wins</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li><strong className="text-white">Purpose-built for photo logging:</strong> It&apos;s the whole product — the photo → macros flow is very polished.</li>
          <li><strong className="text-white">Access to MyFitnessPal database:</strong> Since late 2025, Cal AI leverages MyFitnessPal&apos;s food database, giving broad packaged-food coverage.</li>
          <li><strong className="text-white">Brand recognition:</strong> One of the more viral AI-calorie apps of 2025–2026; you&apos;ll find plenty of user tips online.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Where Fitnivo wins</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li><strong className="text-white">Nutrition + workouts in one place:</strong> Cal AI doesn&apos;t do workouts. Fitnivo does.</li>
          <li><strong className="text-white">Meal planning:</strong> Fitnivo builds meal ideas around your calorie and macro targets — Cal AI logs, but doesn&apos;t plan.</li>
          <li><strong className="text-white">AI coaching grounded in your data:</strong> Fitnivo turns tracked meals into recommendations, not just totals.</li>
          <li><strong className="text-white">Better value if you also work out:</strong> One subscription covers what Cal AI + a workout app would cost together.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Who each is for</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-[#1f1f1f] bg-[#050505] p-6">
            <h3 className="text-white font-bold text-lg mb-3">Choose Cal AI if…</h3>
            <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
              <li>You only need a fast photo-to-calorie logger</li>
              <li>You already have a separate workout app you love</li>
              <li>You care most about brand familiarity in calorie apps</li>
            </ul>
          </div>
          <div className="border border-cyan-400 bg-cyan-950/10 p-6">
            <h3 className="text-white font-bold text-lg mb-3">Choose Fitnivo if…</h3>
            <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
              <li>You want food scanning + workouts + coaching in one app</li>
              <li>You&apos;re trying to lose fat or gain muscle (nutrition + training)</li>
              <li>You want meal planning around your macro targets</li>
              <li>You want a real free tier to start (unlimited workout logger + daily AI usage), and a single $10/mo (or $60/yr) Pro plan instead of paying for both a calorie app and a workout app</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Frequently asked questions</h2>
        <div className="space-y-6 mb-12">
          <div>
            <h4 className="text-lg font-bold text-white mb-2">Is Cal AI better than Fitnivo for calorie tracking?</h4>
            <p className="text-[#B4B4B4]">Cal AI is a focused AI calorie-tracker. Fitnivo also has an AI food scanner but combines it with workouts, meal planning, and nutrition coaching in one app.</p>
          </div>
          <div className="border-t border-[#1f1f1f] pt-6">
            <h4 className="text-lg font-bold text-white mb-2">Is Cal AI accurate?</h4>
            <p className="text-[#B4B4B4]">Cal AI provides estimates. Accuracy is good for clear, single-item foods and lower for mixed dishes with hidden ingredients — the same is true of any AI food scanner today, including Fitnivo.</p>
          </div>
          <div className="border-t border-[#1f1f1f] pt-6">
            <h4 className="text-lg font-bold text-white mb-2">Does Cal AI have workouts?</h4>
            <p className="text-[#B4B4B4]">No. Cal AI is nutrition-only. Pair it with a workout app, or use Fitnivo for both.</p>
          </div>
          <div className="border-t border-[#1f1f1f] pt-6">
            <h4 className="text-lg font-bold text-white mb-2">Which is cheaper overall?</h4>
            <p className="text-[#B4B4B4]">Fitnivo has a free tier with real daily usage (3 AI food scans/day, 15 AI coach messages/day, unlimited workout logger). Fitnivo Pro is $10/month or $60/year (effectively $5/month on annual). Cal AI is nutrition-only, so the fair comparison is Cal AI + a workout app subscription — which almost always exceeds Fitnivo Pro.</p>
          </div>
        </div>

        <div className="border border-cyan-400 bg-cyan-950/10 p-8 mb-12">
          <h3 className="text-2xl font-bold mb-3">Try Fitnivo free</h3>
          <p className="text-[#B4B4B4] mb-4">3 AI food scans/day, 15 AI coach messages/day, unlimited workout logger — all free. Pro is $10/month or $60/year for unlimited.</p>
          <a href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en" className="inline-block px-6 py-3 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300">
            Download Fitnivo
          </a>
        </div>

        <h3 className="text-xl font-bold mb-4">Related</h3>
        <ul className="text-cyan-400 space-y-2">
          <li><Link href="/blog/best-ai-fitness-apps-2026" className="hover:underline">Best AI Fitness Apps in 2026</Link></li>
          <li><Link href="/blog/fitnivo-vs-fitbod" className="hover:underline">Fitnivo vs Fitbod</Link></li>
          <li><Link href="/ai-food-scanner" className="hover:underline">Fitnivo AI Food Scanner</Link></li>
          <li><Link href="/ai-nutrition-coach" className="hover:underline">Fitnivo AI Nutrition Coach</Link></li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}
