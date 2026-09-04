import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

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
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Best AI Fitness Apps in 2026 (Tested & Compared)',
  description: 'Top AI fitness apps of 2026 compared side-by-side.',
  image: 'https://fitnivo.in/images/mockup/ai-fitness-coach-chat-workout-planner.webp',
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
  {
    name: 'Fitnivo',
    bestFor: 'All-in-one AI fitness + nutrition',
    aiWorkouts: '✓',
    nutrition: '✓',
    foodScanner: '✓',
    coach: '✓',
    price: 'Free · Pro $10/mo · $60/yr',
    url: '/ai-fitness-coach',
    internal: true,
    body: 'Fitnivo combines an AI fitness coach with calorie & macro tracking, AI food scanning, and meal planning. Free tier includes unlimited workout logging, water tracking, 3 AI food scans/day, and 15 AI coach messages/day (with tool-calling for workouts, templates, and meal plans). Pro at $10/month or $60/year unlocks unlimited scans and messages. Best if you want one app for both training and nutrition.',
  },
  {
    name: 'Fitbod',
    bestFor: 'Strength programming',
    aiWorkouts: '✓',
    nutrition: '—',
    foodScanner: '—',
    coach: '—',
    price: '~$12.99/mo',
    url: 'https://fitbod.me',
    body: 'Fitbod is the veteran for AI-driven strength programming — it selects exercises, sets, and reps based on your equipment and past logs. No nutrition side, so you\'ll need a second app for food.',
  },
  {
    name: 'Freeletics',
    bestFor: 'Bodyweight & adaptive training',
    aiWorkouts: '✓',
    nutrition: '✓ (basic)',
    foodScanner: '—',
    coach: '✓',
    price: '~$34.99/qtr',
    url: 'https://www.freeletics.com',
    body: 'Freeletics is the go-to for bodyweight and travel-friendly training. AI Coach adapts sessions to your feedback and progress.',
  },
  {
    name: 'FitnessAI',
    bestFor: 'Gym progression',
    aiWorkouts: '✓',
    nutrition: '—',
    foodScanner: '—',
    coach: '—',
    price: '~$89/yr',
    url: 'https://www.fitnessai.com',
    body: 'FitnessAI focuses on straightforward, gym-based strength progression with minimal ceremony. Good if you want a lean, focused workout tracker.',
  },
  {
    name: 'Caliber',
    bestFor: 'Human + AI coaching',
    aiWorkouts: '✓',
    nutrition: '✓',
    foodScanner: '—',
    coach: '✓ (human)',
    price: 'Free + coach tiers',
    url: 'https://www.caliberstrong.com',
    body: 'Caliber pairs an AI structure with an actual human coach. Costlier, but adds accountability if that\'s what you need.',
  },
  {
    name: 'Ray',
    bestFor: 'Voice-guided real-time coaching',
    aiWorkouts: '✓',
    nutrition: '—',
    foodScanner: '—',
    coach: '✓ (voice)',
    price: '~$19.99/mo',
    url: 'https://www.rayfit.com',
    body: 'Ray provides in-ear voice coaching during your workout with computer-vision rep counting. Feels like a live trainer next to you.',
  },
  {
    name: 'SensAI',
    bestFor: 'Wearable-driven training',
    aiWorkouts: '✓',
    nutrition: '—',
    foodScanner: '—',
    coach: '✓ (LLM chat)',
    price: 'Paid',
    url: 'https://www.sensai.fit',
    body: 'SensAI reads HRV, sleep, and resting HR from HealthKit and programs your training around recovery. Best if you own a wearable.',
  },
  {
    name: 'JuggernautAI',
    bestFor: 'Powerlifting periodization',
    aiWorkouts: '✓',
    nutrition: '—',
    foodScanner: '—',
    coach: '—',
    price: 'Paid',
    url: 'https://www.juggernautai.app',
    body: 'JuggernautAI applies block periodization to squat, bench, and deadlift. Purpose-built for powerlifters.',
  },
];

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
          <span className="text-white/60">Best AI Fitness Apps 2026</span>
        </nav>

        <div className="mb-6 flex items-center gap-3 text-sm text-[#B4B4B4]">
          <span className="uppercase tracking-widest text-cyan-400 text-xs font-bold">Best-of</span>
          <span>·</span>
          <span>12 min read</span>
          <span>·</span>
          <time dateTime="2026-09-03">September 3, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          Best AI Fitness Apps in 2026 (Tested &amp; Compared)
        </h1>

        <div className="bg-cyan-950/20 border border-cyan-400/30 p-6 mb-10">
          <p className="text-white font-semibold leading-relaxed">
            <strong>Quick verdict:</strong> No single AI fitness app is best for everyone. Fitbod leads pure strength programming, Freeletics owns bodyweight, Ray is unmatched for voice-guided real-time coaching, SensAI wins for recovery-aware training, and Fitnivo is the best if you want workouts + nutrition + food scanning in one app.
          </p>
        </div>

        <p className="text-[#B4B4B4] text-lg leading-relaxed mb-6">
          The AI fitness category has split into two genuinely different products in 2026: apps that generate workouts from your data, and apps that pair you with a human coach using AI to scale their attention. Getting the wrong type is the number-one reason people cancel subscriptions.
        </p>
        <p className="text-[#B4B4B4] text-lg leading-relaxed mb-10">
          Below is a straight comparison across eight of the most notable AI fitness apps this year, followed by picks by training style and by goal.
        </p>

        <p className="text-sm text-[#B4B4B4] mb-8">
          Reviewed by the <Link href="/about" className="text-cyan-400 hover:underline">Fitnivo Editorial Team</Link>. Third-party product links go to each vendor.
        </p>

        {/* Comparison table */}
        <div className="overflow-x-auto mb-16">
          <table className="w-full text-left border border-[#1f1f1f] text-sm">
            <thead>
              <tr className="bg-[#0a0a0a] border-b border-[#1f1f1f]">
                <th className="p-4">App</th>
                <th className="p-4">Best for</th>
                <th className="p-4">AI workouts</th>
                <th className="p-4">Nutrition</th>
                <th className="p-4">Food scanner</th>
                <th className="p-4">Coach</th>
                <th className="p-4">Price</th>
              </tr>
            </thead>
            <tbody className="text-[#B4B4B4]">
              {apps.map((a, i) => (
                <tr key={a.name} className={i % 2 ? 'bg-[#050505]' : ''}>
                  <td className="p-4 font-bold text-white border-t border-[#1f1f1f]">{a.name}</td>
                  <td className="p-4 border-t border-[#1f1f1f]">{a.bestFor}</td>
                  <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">{a.aiWorkouts}</td>
                  <td className="p-4 border-t border-[#1f1f1f]">{a.nutrition}</td>
                  <td className="p-4 border-t border-[#1f1f1f]">{a.foodScanner}</td>
                  <td className="p-4 border-t border-[#1f1f1f]">{a.coach}</td>
                  <td className="p-4 border-t border-[#1f1f1f]">{a.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed entries */}
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-cyan-400 pl-4">The AI Fitness Apps, Ranked</h2>

        {apps.map((a, idx) => (
          <section key={a.name} className="mb-12">
            <h3 className="text-2xl font-bold mb-2">{idx + 1}. {a.name}</h3>
            <p className="text-cyan-400 text-sm mb-4 uppercase tracking-widest font-mono">Best for: {a.bestFor}</p>
            <p className="text-[#B4B4B4] leading-relaxed mb-4">{a.body}</p>
            <div className="flex gap-4 flex-wrap text-sm">
              <span className="text-[#B4B4B4]"><strong className="text-white">Price:</strong> {a.price}</span>
              {a.internal ? (
                <Link href={a.url} className="text-cyan-400 hover:underline">See Fitnivo →</Link>
              ) : (
                <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  Visit {a.name} →
                </a>
              )}
            </div>
          </section>
        ))}

        {/* Picks by style */}
        <h2 className="text-3xl font-bold mt-16 mb-6 border-l-4 border-cyan-400 pl-4">Picks by Training Style</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-12">
          <li><strong className="text-white">Strength / powerlifting:</strong> Fitbod, JuggernautAI</li>
          <li><strong className="text-white">Bodyweight / travel:</strong> Freeletics</li>
          <li><strong className="text-white">All-in-one fitness + nutrition:</strong> Fitnivo</li>
          <li><strong className="text-white">Voice-guided sessions:</strong> Ray</li>
          <li><strong className="text-white">Recovery-driven training:</strong> SensAI</li>
          <li><strong className="text-white">Human coaching with AI:</strong> Caliber</li>
        </ul>

        {/* Picks by goal */}
        <h2 className="text-3xl font-bold mt-12 mb-6 border-l-4 border-cyan-400 pl-4">Picks by Goal</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-12">
          <li><strong className="text-white">Muscle gain:</strong> Fitbod for pure hypertrophy, Fitnivo if you also want to track your calories and protein.</li>
          <li><strong className="text-white">Fat loss:</strong> Fitnivo — the combination of workouts + calorie tracking is what actually drives fat loss.</li>
          <li><strong className="text-white">Beginners:</strong> Fitnivo or Freeletics — both onboard gently.</li>
          <li><strong className="text-white">Home workouts:</strong> Freeletics or Fitnivo (equipment-aware plans).</li>
          <li><strong className="text-white">Gym workouts:</strong> Fitbod for strength focus, Fitnivo for training + food tracking.</li>
        </ul>

        {/* How we tested */}
        <h2 className="text-3xl font-bold mt-12 mb-6 border-l-4 border-cyan-400 pl-4">How We Chose These</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          We looked at three things: (1) does the AI actually adapt to your data (not just a chatbot layer on static workouts), (2) does the app cover more than one problem (workouts, nutrition, tracking), and (3) is the price sensible for what you get.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-12">
          Prices are approximate at time of writing and vary by region and promotions.
        </p>

        {/* FAQ */}
        <h2 className="text-3xl font-bold mt-12 mb-6 border-l-4 border-cyan-400 pl-4">Frequently Asked Questions</h2>
        <div className="space-y-6 mb-12">
          <div>
            <h4 className="text-lg font-bold text-white mb-2">What is the best AI fitness app in 2026?</h4>
            <p className="text-[#B4B4B4]">The right choice depends on what you value most. Fitbod leads for pure strength programming; Freeletics for bodyweight; Ray for voice-guided coaching; Fitnivo for all-in-one AI fitness and nutrition.</p>
          </div>
          <div className="border-t border-[#1f1f1f] pt-6">
            <h4 className="text-lg font-bold text-white mb-2">Are AI fitness apps worth it?</h4>
            <p className="text-[#B4B4B4]">For most people, yes. AI fitness apps cost a fraction of one-to-one training and remove the friction of designing your own workouts. They are less suitable when you need hands-on form correction or rehab supervision.</p>
          </div>
          <div className="border-t border-[#1f1f1f] pt-6">
            <h4 className="text-lg font-bold text-white mb-2">Which AI fitness app also does nutrition?</h4>
            <p className="text-[#B4B4B4]">Fitnivo is one of the few AI fitness apps that combines workouts, calorie and macro tracking, AI food scanning, and meal planning in one app.</p>
          </div>
          <div className="border-t border-[#1f1f1f] pt-6">
            <h4 className="text-lg font-bold text-white mb-2">How much do AI fitness apps cost?</h4>
            <p className="text-[#B4B4B4]">Most AI fitness apps cost roughly USD 10–30 per month. Fitnivo has a free tier with real daily usage (3 AI scans/day, 15 AI messages/day, unlimited workout logging), and Pro unlocks unlimited for $10/month or $60/year — on the lower end of the range while covering both fitness and nutrition.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="border border-cyan-400 bg-cyan-950/10 p-8 mb-12">
          <h3 className="text-2xl font-bold mb-3">Want workouts and nutrition in one app?</h3>
          <p className="text-[#B4B4B4] mb-4">Free tier with 3 AI scans/day and 15 AI coach messages/day. Pro is $10/month or $60/year for unlimited.</p>
          <a href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en" className="inline-block px-6 py-3 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300">
            Download Fitnivo
          </a>
        </div>

        {/* Related */}
        <h3 className="text-xl font-bold mb-4">Related reading</h3>
        <ul className="text-cyan-400 space-y-2">
          <li><Link href="/blog/fitnivo-vs-fitbod" className="hover:underline">Fitnivo vs Fitbod — full comparison</Link></li>
          <li><Link href="/blog/fitnivo-vs-cal-ai" className="hover:underline">Fitnivo vs Cal AI — AI food scanner face-off</Link></li>
          <li><Link href="/blog/what-is-an-ai-fitness-coach" className="hover:underline">What is an AI fitness coach?</Link></li>
          <li><Link href="/blog/best-fitbod-alternatives" className="hover:underline">Best Fitbod alternatives</Link></li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}
