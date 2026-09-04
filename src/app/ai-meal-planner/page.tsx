import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

export const metadata: Metadata = {
  title: 'AI Meal Planner — Personalized Plans by Calories & Macros | Fitnivo',
  description:
    "Fitnivo's AI meal planner builds meal ideas around your calorie and macro targets. Vegetarian, high-protein, cutting, bulking — personalized to you.",
  keywords: [
    'AI meal planner',
    'AI meal planning app',
    'meal planner app',
    'personalized meal plan',
    'meal plan for weight loss',
    'meal plan for muscle gain',
    'high protein meal plan',
  ],
  alternates: { canonical: 'https://fitnivo.in/ai-meal-planner' },
  openGraph: {
    title: 'AI Meal Planner | Fitnivo',
    description: 'AI meal ideas built around your calorie and macro goals.',
    url: 'https://fitnivo.in/ai-meal-planner',
    type: 'website',
  },
};

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fitnivo AI Meal Planner',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Android, iOS',
  description:
    'AI meal planner that builds meal ideas around your calorie and macro targets. Supports weight loss, muscle gain, and multiple diet types.',
  url: 'https://fitnivo.in/ai-meal-planner',
  offers: [
    { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'Free tier' },
    { '@type': 'Offer', price: '10', priceCurrency: 'USD', name: 'Monthly Pro' },
    { '@type': 'Offer', price: '60', priceCurrency: 'USD', name: 'Annual Pro' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is an AI meal planner?', acceptedAnswer: { '@type': 'Answer', text: 'An AI meal planner generates meal suggestions built around your calorie and macronutrient targets, taking your diet preferences and goals into account.' } },
    { '@type': 'Question', name: 'Does Fitnivo support vegetarian and vegan diets?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You can set diet preferences (vegetarian, vegan, non-veg, and more) and Fitnivo builds meals that match.' } },
    { '@type': 'Question', name: 'Can I use it for weight loss or muscle gain?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Set your goal — cutting, bulking, or maintaining — and Fitnivo suggests meals that align with your calorie and protein targets.' } },
    { '@type': 'Question', name: 'How does the meal planner connect to the food scanner?', acceptedAnswer: { '@type': 'Answer', text: 'When you log a scanned meal, it counts toward the day’s calorie and macro totals, and future meal suggestions adjust accordingly.' } },
  ],
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'AI Meal Planner', url: 'https://fitnivo.in/ai-meal-planner' },
]);

const schemaJson = JSON.stringify([softwareAppSchema, faqSchema, breadcrumbSchema]);

const diets = ['Vegetarian', 'Non-vegetarian', 'Vegan', 'High-protein', 'Low-carb', 'Balanced'];
const goals = [
  { t: 'Cutting', b: 'Lower calorie meals that keep protein high to preserve muscle.' },
  { t: 'Bulking', b: 'Slightly higher calories with meals built to fuel training.' },
  { t: 'Maintenance', b: 'Balanced meals around your maintenance calorie target.' },
];

const faqs = [
  { q: 'What is an AI meal planner?', a: 'An AI meal planner generates meal suggestions built around your calorie and macronutrient targets, taking your diet preferences and goals into account.' },
  { q: 'Does Fitnivo support vegetarian and vegan diets?', a: 'Yes. You can set diet preferences (vegetarian, vegan, non-veg, and more) and Fitnivo builds meals that match.' },
  { q: 'Can I use it for weight loss or muscle gain?', a: 'Yes. Set your goal — cutting, bulking, or maintaining — and Fitnivo suggests meals that align with your targets.' },
  { q: 'How does the meal planner connect to the food scanner?', a: "When you log a scanned meal, it counts toward the day's calorie and macro totals, and future suggestions adjust accordingly." },
  { q: 'Can I swap meals I don’t like?', a: 'Yes. Swap any suggestion for another that still fits your calorie and macro targets.' },
];

export default function AIMealPlannerPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navbar />

      <section className="relative pt-32 pb-20 border-b border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60">AI Meal Planner</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 border border-cyan-400 bg-cyan-950/20 px-3 py-1 mb-6 text-cyan-400 text-xs font-mono tracking-widest uppercase">
                AI Meal Planner
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
                Meals Built Around Your Calorie &amp; Macro Goals
              </h1>
              <p className="text-lg text-[#B4B4B4] mb-8 leading-relaxed max-w-2xl">
                Get meal ideas that actually hit your targets. Choose your goal, pick your diet, and let Fitnivo suggest meals for your day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en" className="px-8 py-4 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300 text-center">
                  Build Your Meal Plan
                </a>
                <Link href="/ai-nutrition-coach" className="px-8 py-4 border border-[#262626] hover:border-cyan-400 font-semibold uppercase tracking-wider text-center">
                  Nutrition Coach
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <Image
                src="/images/mockup/personalized-ai-meal-plan-dashboard.webp"
                alt="Fitnivo personalized AI meal plan dashboard showing daily meals aligned to calorie and macro targets"
                width={400}
                height={800}
                priority
                className="w-full max-w-sm h-auto rounded-2xl border border-[#262626]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How Fitnivo Builds Meal Plans</h2>
          <ol className="space-y-4 text-[#B4B4B4] list-decimal pl-6">
            <li>Set your goal (weight loss, muscle gain, maintenance).</li>
            <li>Choose your diet (vegetarian, vegan, non-veg, high-protein, low-carb).</li>
            <li>Fitnivo calculates daily calorie and macro targets.</li>
            <li>Meals are suggested to hit those targets across the day.</li>
            <li>Swap anything you don&apos;t like — the plan re-balances automatically.</li>
          </ol>
        </div>
      </section>

      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Plans by Goal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {goals.map((g) => (
              <div key={g.t} className="border border-[#1f1f1f] bg-[#050505] p-6">
                <h3 className="text-white font-bold text-lg mb-2">{g.t}</h3>
                <p className="text-[#B4B4B4] text-sm leading-relaxed">{g.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Supported Diets</h2>
          <div className="flex flex-wrap gap-3">
            {diets.map((d) => (
              <span key={d} className="border border-[#262626] bg-[#050505] px-4 py-2 text-sm text-cyan-400">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Closed Loop: Plan &rarr; Scan &rarr; Coach</h2>
          <p className="text-[#B4B4B4] text-lg leading-relaxed">
            Suggested meals go into your plan. When you eat, use the <Link href="/ai-food-scanner" className="text-cyan-400 hover:underline">AI food scanner</Link> to log what actually ended up on your plate. Your <Link href="/ai-nutrition-coach" className="text-cyan-400 hover:underline">AI nutrition coach</Link> reads that data and adjusts tomorrow&apos;s recommendations. Plan → scan → coach — all in one app.
          </p>
        </div>
      </section>

      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="border border-[#1f1f1f] bg-[#050505] p-6 group">
                <summary className="cursor-pointer font-bold text-white flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="text-cyan-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-[#B4B4B4] mt-4 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-cyan-950/20 to-black">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Plan Your Week in Minutes</h2>
          <p className="text-[#B4B4B4] text-lg mb-8">Meals aligned to your goals — Fitnivo does the math.</p>
          <a href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en" className="inline-block px-10 py-4 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300">
            Download Fitnivo
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
