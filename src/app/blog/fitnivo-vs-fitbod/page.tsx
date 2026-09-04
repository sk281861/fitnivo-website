import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

export const metadata: Metadata = {
  title: 'Fitnivo vs Fitbod (2026) — Which AI Workout App Is Right for You? | Fitnivo',
  description:
    'Fitnivo vs Fitbod compared side-by-side. AI workouts, nutrition, food scanning, price, and which app fits which type of trainee.',
  keywords: ['Fitnivo vs Fitbod', 'Fitbod alternatives', 'apps like Fitbod', 'AI fitness apps like Fitbod'],
  alternates: { canonical: 'https://fitnivo.in/blog/fitnivo-vs-fitbod' },
  openGraph: {
    title: 'Fitnivo vs Fitbod (2026)',
    description: 'Side-by-side comparison of Fitnivo and Fitbod for AI workouts and nutrition.',
    url: 'https://fitnivo.in/blog/fitnivo-vs-fitbod',
    type: 'article',
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Fitnivo vs Fitbod (2026) — Which AI Workout App Is Right for You?',
  description: 'Side-by-side comparison of Fitnivo and Fitbod for AI workouts, nutrition, food scanning, and price.',
  image: 'https://fitnivo.in/images/mockup/ai-fitness-coach-chat-workout-planner.webp',
  url: 'https://fitnivo.in/blog/fitnivo-vs-fitbod',
  datePublished: '2026-09-03T00:00:00Z',
  dateModified: '2026-09-03T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 1800,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'Fitnivo vs Fitbod', url: 'https://fitnivo.in/blog/fitnivo-vs-fitbod' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Fitbod better than Fitnivo?', acceptedAnswer: { '@type': 'Answer', text: 'Fitbod is stronger for pure strength-workout generation with a deep exercise library. Fitnivo is stronger when you also want calorie & macro tracking, AI food scanning, and meal planning in the same app.' } },
    { '@type': 'Question', name: 'Does Fitbod track macros?', acceptedAnswer: { '@type': 'Answer', text: 'No. Fitbod is strictly a workout app. If you want nutrition tracking you need a second app.' } },
    { '@type': 'Question', name: 'Is Fitnivo cheaper than Fitbod?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Fitnivo has a free tier with unlimited workout logging and daily AI usage (3 food scans, 15 AI coach messages). Pro is $10/month or $60/year (effectively $5/month on annual). Fitbod is around $12.99/month or $79.99/year. And Fitnivo includes nutrition — Fitbod does not.' } },
    { '@type': 'Question', name: 'Which is better for beginners?', acceptedAnswer: { '@type': 'Answer', text: 'Both are beginner-friendly. Fitnivo edges ahead if you also want help with nutrition, which most beginners need alongside their training.' } },
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
          <span className="text-white/60">Fitnivo vs Fitbod</span>
        </nav>

        <div className="mb-6 flex items-center gap-3 text-sm text-[#B4B4B4]">
          <span className="uppercase tracking-widest text-cyan-400 text-xs font-bold">Comparison</span>
          <span>·</span>
          <span>9 min read</span>
          <span>·</span>
          <time dateTime="2026-09-03">September 3, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          Fitnivo vs Fitbod (2026) — Which AI Workout App Is Right for You?
        </h1>

        <div className="bg-cyan-950/20 border border-cyan-400/30 p-6 mb-10">
          <p className="text-white font-semibold leading-relaxed">
            <strong>Short answer:</strong> Choose <strong>Fitbod</strong> if your only priority is strength-workout generation and you already use another app for calories. Choose <strong>Fitnivo</strong> if you want workouts, calorie &amp; macro tracking, AI food scanning, and meal planning in one app. Fitnivo has a free tier that&apos;s actually usable daily (3 AI scans/day, 15 AI coach messages/day, unlimited workout logger); Pro unlocks unlimited at $10/month or $60/year.
          </p>
        </div>

        <p className="text-sm text-[#B4B4B4] mb-8">
          Reviewed by the <Link href="/about" className="text-cyan-400 hover:underline">Fitnivo Editorial Team</Link>. This is our own comparison — we&apos;re transparent that Fitnivo is our product; we still call out where Fitbod is the better choice.
        </p>

        {/* Comparison table */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Feature comparison</h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left border border-[#1f1f1f] text-sm">
            <thead>
              <tr className="bg-[#0a0a0a] border-b border-[#1f1f1f]">
                <th className="p-4">Feature</th>
                <th className="p-4 text-cyan-400">Fitnivo</th>
                <th className="p-4">Fitbod</th>
              </tr>
            </thead>
            <tbody className="text-[#B4B4B4]">
              {[
                ['AI workout generation', 'Yes', 'Yes'],
                ['Equipment-aware plans', 'Yes', 'Yes'],
                ['Workout logging & history', 'Yes', 'Yes'],
                ['Progressive overload tracking', 'Yes', 'Yes'],
                ['Exercise video library', 'Yes', 'Extensive'],
                ['Calorie & macro tracking', 'Yes', 'No'],
                ['AI food scanner', 'Yes', 'No'],
                ['Meal planner', 'Yes', 'No'],
                ['Free tier', 'Yes (unlimited workout logger + water + 3 scans/day + 15 AI messages/day)', 'Limited trial only'],
                ['Pro price', '$10/mo · $60/yr ($5/mo effective on annual)', '~$12.99/mo · ~$79.99/yr'],
                ['Platforms', 'Android, iOS', 'iOS, Android'],
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

        {/* Where Fitbod wins */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Where Fitbod wins</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li><strong className="text-white">Exercise library depth:</strong> Fitbod has one of the largest, most polished exercise libraries with clear demo videos and variations.</li>
          <li><strong className="text-white">Strength-focused workflows:</strong> Fitbod is built by and for people who care about progressive overload on barbell lifts. It shows.</li>
          <li><strong className="text-white">Track record:</strong> Fitbod has been iterating on its AI workout generation for years — mature, stable, well-reviewed.</li>
        </ul>

        {/* Where Fitnivo wins */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Where Fitnivo wins</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li><strong className="text-white">Nutrition in the same app:</strong> Calorie and macro tracking sit next to your workouts. No second subscription, no context-switching.</li>
          <li><strong className="text-white">AI food scanner:</strong> Snap a photo of your meal and get calorie/macro estimates in seconds. Fitbod has no equivalent.</li>
          <li><strong className="text-white">Meal planner:</strong> Meals suggested around your daily calorie and protein targets.</li>
          <li><strong className="text-white">Real free tier:</strong> Unlimited workout logging, water tracking, plus daily AI usage (3 food scans, 15 AI coach messages/day). Pro unlocks unlimited for $10/mo or $60/yr.</li>
          <li><strong className="text-white">Better for fat loss:</strong> Fat loss is 80% nutrition. A workout-only app can&apos;t close that loop; Fitnivo can.</li>
        </ul>

        {/* Who each is for */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Who each app is for</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-[#1f1f1f] bg-[#050505] p-6">
            <h3 className="text-white font-bold text-lg mb-3">Choose Fitbod if…</h3>
            <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
              <li>You only care about strength-workout generation</li>
              <li>You&apos;re already happy with another calorie tracker</li>
              <li>You want the deepest strength-focused exercise library</li>
              <li>You lift primarily with barbells and machines</li>
            </ul>
          </div>
          <div className="border border-cyan-400 bg-cyan-950/10 p-6">
            <h3 className="text-white font-bold text-lg mb-3">Choose Fitnivo if…</h3>
            <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
              <li>You want one app for training <em>and</em> nutrition</li>
              <li>You&apos;re trying to lose fat or gain lean mass</li>
              <li>You want to log meals by photo, not database search</li>
              <li>You want meal planning built around your macros</li>
              <li>You want a real free tier to try before paying — Pro is $10/mo or $60/yr</li>
            </ul>
          </div>
        </div>

        {/* Common questions */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Frequently asked questions</h2>
        <div className="space-y-6 mb-12">
          <div>
            <h4 className="text-lg font-bold text-white mb-2">Is Fitbod better than Fitnivo?</h4>
            <p className="text-[#B4B4B4]">For pure strength-workout generation, Fitbod is a mature and excellent choice. For an all-in-one AI fitness and nutrition app, Fitnivo is designed for that job.</p>
          </div>
          <div className="border-t border-[#1f1f1f] pt-6">
            <h4 className="text-lg font-bold text-white mb-2">Does Fitbod track macros?</h4>
            <p className="text-[#B4B4B4]">No. Fitbod is strictly a workout app. Users who want nutrition tracking pair it with MyFitnessPal, Cronometer, or MacroFactor — or switch to an all-in-one like Fitnivo.</p>
          </div>
          <div className="border-t border-[#1f1f1f] pt-6">
            <h4 className="text-lg font-bold text-white mb-2">Is Fitnivo cheaper than Fitbod?</h4>
            <p className="text-[#B4B4B4]">Yes. Fitnivo has a real free tier (unlimited workout logger + water + 3 AI food scans/day + 15 AI coach messages/day). Fitnivo Pro is $10/month or $60/year (effectively $5/month on annual); Fitbod is around $12.99/month or $79.99/year. When you add a separate calorie-tracker subscription on top of Fitbod, the combined cost is significantly higher than Fitnivo Pro alone.</p>
          </div>
          <div className="border-t border-[#1f1f1f] pt-6">
            <h4 className="text-lg font-bold text-white mb-2">Which is better for beginners?</h4>
            <p className="text-[#B4B4B4]">Both are beginner-friendly. Fitnivo edges ahead if you also want help with nutrition — which most beginners need alongside training.</p>
          </div>
          <div className="border-t border-[#1f1f1f] pt-6">
            <h4 className="text-lg font-bold text-white mb-2">Which is better for home workouts?</h4>
            <p className="text-[#B4B4B4]">Both handle home workouts well because both are equipment-aware. Pick based on whether you want nutrition tracking (Fitnivo) or the deeper exercise library (Fitbod).</p>
          </div>
        </div>

        {/* CTA */}
        <div className="border border-cyan-400 bg-cyan-950/10 p-8 mb-12">
          <h3 className="text-2xl font-bold mb-3">Try Fitnivo free</h3>
          <p className="text-[#B4B4B4] mb-4">Unlimited workout logger, water tracking, 3 AI food scans/day, and 15 AI coach messages/day — free. Pro is $10/month or $60/year for unlimited.</p>
          <a href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en" className="inline-block px-6 py-3 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300">
            Download Fitnivo
          </a>
        </div>

        <h3 className="text-xl font-bold mb-4">Related</h3>
        <ul className="text-cyan-400 space-y-2">
          <li><Link href="/blog/best-ai-fitness-apps-2026" className="hover:underline">Best AI Fitness Apps in 2026</Link></li>
          <li><Link href="/blog/fitnivo-vs-cal-ai" className="hover:underline">Fitnivo vs Cal AI — AI food scanner comparison</Link></li>
          <li><Link href="/blog/best-fitbod-alternatives" className="hover:underline">Best Fitbod alternatives</Link></li>
          <li><Link href="/ai-fitness-coach" className="hover:underline">Fitnivo AI Fitness Coach</Link></li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}
