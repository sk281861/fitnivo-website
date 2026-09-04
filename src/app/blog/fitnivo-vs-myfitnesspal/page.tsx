import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

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
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Fitnivo vs MyFitnessPal (2026) — AI Food Logging Compared',
  description: 'Side-by-side comparison of Fitnivo and MyFitnessPal for calorie tracking, AI food scanning, and workouts.',
  image: 'https://fitnivo.in/images/mockup/ai-food-scanner-calorie-macro-tracker.webp',
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

      <article className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300">Home</Link>
          <span className="text-white/30">/</span>
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300">Blog</Link>
          <span className="text-white/30">/</span>
          <span className="text-white/60">Fitnivo vs MyFitnessPal</span>
        </nav>

        <div className="mb-6 flex items-center gap-3 text-sm text-[#B4B4B4]">
          <span className="uppercase tracking-widest text-cyan-400 text-xs font-bold">Comparison</span>
          <span>·</span>
          <span>8 min read</span>
          <span>·</span>
          <time dateTime="2026-09-04">September 4, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          Fitnivo vs MyFitnessPal (2026) — AI Food Logging Compared
        </h1>

        <div className="bg-cyan-950/20 border border-cyan-400/30 p-6 mb-10">
          <p className="text-white font-semibold leading-relaxed">
            <strong>Short answer:</strong> Choose <strong>MyFitnessPal</strong> if you eat mostly packaged food and want the largest barcode database. Choose <strong>Fitnivo</strong> if you want AI food scanning, meal planning, and workouts alongside nutrition — with a free tier and $10/mo Pro.
          </p>
        </div>

        <p className="text-sm text-[#B4B4B4] mb-8">
          Reviewed by the <Link href="/about" className="text-cyan-400 hover:underline">Fitnivo Editorial Team</Link>. Fitnivo is our product; we call out where MyFitnessPal is the better fit.
        </p>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Feature comparison</h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left border border-[#1f1f1f] text-sm">
            <thead>
              <tr className="bg-[#0a0a0a] border-b border-[#1f1f1f]">
                <th className="p-4">Feature</th>
                <th className="p-4 text-cyan-400">Fitnivo</th>
                <th className="p-4">MyFitnessPal</th>
              </tr>
            </thead>
            <tbody className="text-[#B4B4B4]">
              {[
                ['AI food scanner (photo → macros)', 'Yes (core feature)', 'Limited / new'],
                ['Barcode + database search', 'Yes', 'Yes (largest DB)'],
                ['Micronutrients tracked', 'Basic', 'Extensive'],
                ['AI nutrition coaching', 'Yes', 'No (macros only)'],
                ['Meal planner', 'Yes', 'Meal ideas (Premium)'],
                ['AI workout planning', 'Yes', 'No (basic logging only)'],
                ['Workout logger', 'Yes', 'Basic'],
                ['Free tier', 'Yes (3 scans/day + 15 AI msgs/day + workout logger)', 'Yes (with ads)'],
                ['Paid price', '$10/mo · $60/yr', '~$19.99/mo · ~$79.99/yr (Premium)'],
                ['Best for', 'AI fitness + nutrition combined', 'Packaged food + huge database'],
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

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Where MyFitnessPal wins</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li><strong className="text-white">Largest food database (14M+ entries):</strong> If you eat a lot of branded / packaged food, barcode coverage is unmatched.</li>
          <li><strong className="text-white">Category veteran:</strong> Long track record, huge user base, plenty of tutorials and community.</li>
          <li><strong className="text-white">Micronutrient depth:</strong> Solid coverage of vitamins and minerals.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Where Fitnivo wins</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li><strong className="text-white">AI food scanner:</strong> Photo-first logging for mixed dishes, home-cooked meals, and restaurant plates.</li>
          <li><strong className="text-white">Workouts in the same app:</strong> AI workout planning, exercise library, and full logging — MyFitnessPal doesn&apos;t do this.</li>
          <li><strong className="text-white">Meal planner:</strong> Suggests meals around your calorie and macro targets, not just an ideas gallery.</li>
          <li><strong className="text-white">AI coach chat:</strong> Ask questions, get plans, iterate — with tool-calling for real workout and meal generation.</li>
          <li><strong className="text-white">Better paid value:</strong> $10/mo Pro covers both nutrition AND workouts vs $19.99/mo for MyFitnessPal Premium (nutrition only).</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Who each is for</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-[#1f1f1f] bg-[#050505] p-6">
            <h3 className="text-white font-bold text-lg mb-3">Choose MyFitnessPal if…</h3>
            <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
              <li>You eat mostly packaged/branded food and rely on barcodes</li>
              <li>Database breadth matters more than logging speed</li>
              <li>You already have a separate workout app</li>
            </ul>
          </div>
          <div className="border border-cyan-400 bg-cyan-950/10 p-6">
            <h3 className="text-white font-bold text-lg mb-3">Choose Fitnivo if…</h3>
            <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
              <li>You want to log meals by photo instead of database search</li>
              <li>You want workouts + nutrition in one app</li>
              <li>You want lower cost — $10/mo Pro covers both, vs MyFitnessPal Premium at ~$19.99/mo for nutrition alone</li>
              <li>You want an AI coach that can create workouts and meal plans on demand</li>
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
          <li><Link href="/blog/fitnivo-vs-macrofactor" className="hover:underline">Fitnivo vs MacroFactor</Link></li>
          <li><Link href="/blog/best-ai-nutrition-coach-apps-2026" className="hover:underline">Best AI Nutrition Coach Apps 2026</Link></li>
          <li><Link href="/ai-food-scanner" className="hover:underline">Fitnivo AI Food Scanner</Link></li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}
