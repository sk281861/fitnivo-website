import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

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
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Fitnivo vs Freeletics (2026) — Which AI Coach Wins?',
  description: 'Side-by-side comparison of Fitnivo and Freeletics for AI coaching, bodyweight training, and nutrition.',
  image: 'https://fitnivo.in/images/mockup/personal-ai-trainer-custom-workout-routine.webp',
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

      <article className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300">Home</Link>
          <span className="text-white/30">/</span>
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300">Blog</Link>
          <span className="text-white/30">/</span>
          <span className="text-white/60">Fitnivo vs Freeletics</span>
        </nav>

        <div className="mb-6 flex items-center gap-3 text-sm text-[#B4B4B4]">
          <span className="uppercase tracking-widest text-cyan-400 text-xs font-bold">Comparison</span>
          <span>·</span>
          <span>7 min read</span>
          <span>·</span>
          <time dateTime="2026-09-04">September 4, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          Fitnivo vs Freeletics (2026) — Which AI Coach Wins?
        </h1>

        <div className="bg-cyan-950/20 border border-cyan-400/30 p-6 mb-10">
          <p className="text-white font-semibold leading-relaxed">
            <strong>Short answer:</strong> Choose <strong>Freeletics</strong> if you mostly train bodyweight and want a mature adaptive HIIT/bodyweight coach. Choose <strong>Fitnivo</strong> if you want AI training + nutrition in one app, with a real free tier and $10/mo Pro.
          </p>
        </div>

        <p className="text-sm text-[#B4B4B4] mb-8">
          Reviewed by the <Link href="/about" className="text-cyan-400 hover:underline">Fitnivo Editorial Team</Link>. Fitnivo is our product; we call out where Freeletics is the better fit.
        </p>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Feature comparison</h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left border border-[#1f1f1f] text-sm">
            <thead>
              <tr className="bg-[#0a0a0a] border-b border-[#1f1f1f]">
                <th className="p-4">Feature</th>
                <th className="p-4 text-cyan-400">Fitnivo</th>
                <th className="p-4">Freeletics</th>
              </tr>
            </thead>
            <tbody className="text-[#B4B4B4]">
              {[
                ['AI adaptive coaching', 'Yes', 'Yes (mature)'],
                ['Bodyweight workouts', 'Yes', 'Yes (specialty)'],
                ['Gym / equipment workouts', 'Yes (full range)', 'Limited'],
                ['Workout logger', 'Yes (unlimited on free)', 'Yes'],
                ['Nutrition tracking', 'Yes (calories + macros + scanner)', 'Companion app'],
                ['AI food scanner', 'Yes', 'No'],
                ['Meal planner', 'Yes', 'Basic'],
                ['AI coach chat', 'Yes', 'No'],
                ['Free tier', 'Yes (3 scans/day + 15 AI msgs/day + workout logger)', 'Limited trial'],
                ['Pro price', '$10/mo · $60/yr', '~$34.99/qtr Coach'],
                ['Best for', 'All-in-one AI fitness + nutrition', 'Adaptive bodyweight training'],
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

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Where Freeletics wins</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li><strong className="text-white">Bodyweight specialty:</strong> Deep library of bodyweight movements and HIIT sessions built for people who don&apos;t want a gym.</li>
          <li><strong className="text-white">Mature adaptive Coach:</strong> Years of iteration on adapting sessions to your feedback.</li>
          <li><strong className="text-white">Travel-friendly:</strong> If you&apos;re constantly on the road, no-equipment programming is a real advantage.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Where Fitnivo wins</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li><strong className="text-white">Full training range:</strong> Bodyweight, home gym, and full commercial gym — Fitnivo scales with your equipment.</li>
          <li><strong className="text-white">Nutrition in the same app:</strong> AI food scanner, macros, meal planning — Freeletics&apos;s nutrition is a separate companion.</li>
          <li><strong className="text-white">AI coach chat:</strong> Ask for workouts, meal plans, templates — with tool-calling.</li>
          <li><strong className="text-white">Free tier:</strong> Meaningful daily usage without paying. Freeletics is trial-then-paid.</li>
          <li><strong className="text-white">Better paid value:</strong> $10/mo covers workouts + nutrition. Freeletics Coach is roughly $11.66/mo (from ~$34.99/qtr) for training only.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Who each is for</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-[#1f1f1f] bg-[#050505] p-6">
            <h3 className="text-white font-bold text-lg mb-3">Choose Freeletics if…</h3>
            <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
              <li>You train mostly bodyweight or HIIT</li>
              <li>You travel a lot and rarely go to a gym</li>
              <li>You already have a separate nutrition tracker you love</li>
            </ul>
          </div>
          <div className="border border-cyan-400 bg-cyan-950/10 p-6">
            <h3 className="text-white font-bold text-lg mb-3">Choose Fitnivo if…</h3>
            <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
              <li>You train across bodyweight, home, and gym environments</li>
              <li>You want nutrition + workouts in one app</li>
              <li>You want a real free tier before paying</li>
              <li>You want AI coach chat that generates workouts and meal plans on demand</li>
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
          <li><Link href="/blog/fitnivo-vs-fitbod" className="hover:underline">Fitnivo vs Fitbod</Link></li>
          <li><Link href="/blog/best-ai-personal-trainer-apps-2026" className="hover:underline">Best AI Personal Trainer Apps 2026</Link></li>
          <li><Link href="/blog/best-ai-fitness-apps-2026" className="hover:underline">Best AI Fitness Apps 2026</Link></li>
          <li><Link href="/ai-workout-planner" className="hover:underline">Fitnivo AI Workout Planner</Link></li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}
