import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

export const metadata: Metadata = {
  title: 'AI Nutrition Coach — Personalized Calorie & Macro Coaching | Fitnivo',
  description:
    "Fitnivo's AI nutrition coach helps you hit your calorie and macro targets, plan meals, and adjust as you progress — grounded in your actual food-tracking data.",
  keywords: [
    'AI nutrition coach',
    'AI nutrition app',
    'AI diet coach',
    'AI calorie tracking app',
    'AI food tracking app',
    'AI macro tracker',
    'AI macro tracking app',
    'AI meal tracker',
  ],
  alternates: { canonical: 'https://fitnivo.in/ai-nutrition-coach' },
  openGraph: {
    title: 'AI Nutrition Coach | Fitnivo',
    description: 'Personalized calorie and macro coaching grounded in your actual tracked food data.',
    url: 'https://fitnivo.in/ai-nutrition-coach',
    type: 'website',
  },
};

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fitnivo AI Nutrition Coach',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Android, iOS',
  description:
    'AI nutrition coach for calorie and macro tracking, meal planning, and personalized nutrition guidance grounded in your actual food-tracking data.',
  url: 'https://fitnivo.in/ai-nutrition-coach',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is an AI nutrition coach?', acceptedAnswer: { '@type': 'Answer', text: 'An AI nutrition coach is a digital assistant that helps you plan and track your nutrition. It calculates calorie and macro targets, tracks what you eat, and adjusts recommendations based on your progress.' } },
    { '@type': 'Question', name: 'How is Fitnivo different from a nutrition chatbot?', acceptedAnswer: { '@type': 'Answer', text: 'Fitnivo grounds its coaching in your actual tracked meals, not just conversation. It uses your logged food data, calorie and macro trends, and workout activity to give recommendations that reflect your real habits.' } },
    { '@type': 'Question', name: 'Does Fitnivo support weight loss and muscle gain?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You choose your goal (weight loss, muscle gain, maintenance, or recomp) and Fitnivo sets appropriate calorie and macro targets, then adjusts as your progress data comes in.' } },
    { '@type': 'Question', name: 'Can Fitnivo track macros?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Fitnivo tracks calories, protein, carbohydrates, and fat, and connects those to your daily and weekly targets.' } },
    { '@type': 'Question', name: 'Does the nutrition coach need a workout app too?', acceptedAnswer: { '@type': 'Answer', text: "No — but Fitnivo includes both. Your workouts and nutrition live in one app so activity data can inform your calorie targets and recovery." } },
    { '@type': 'Question', name: 'Which AI nutrition apps compete with Fitnivo?', acceptedAnswer: { '@type': 'Answer', text: 'Popular options include MacroFactor (adaptive macro coaching), Welling (conversational logging), Cal AI (photo scanning), MyFitnessPal (large database), and Cronometer (micronutrient depth). Fitnivo differentiates as an all-in-one AI fitness and nutrition coach.' } },
  ],
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'AI Nutrition Coach', url: 'https://fitnivo.in/ai-nutrition-coach' },
]);

const schemaJson = JSON.stringify([softwareAppSchema, faqSchema, breadcrumbSchema]);

const goals = [
  { title: 'Weight loss', body: 'Sustainable calorie deficit with protein targets set to help preserve lean mass.' },
  { title: 'Muscle gain', body: 'Modest surplus with high protein and enough carbs to fuel training.' },
  { title: 'Maintenance', body: 'Stable calories around your maintenance level while tracking macros.' },
  { title: 'Recomposition', body: 'Slight surplus on training days, slight deficit on rest days — driven by your logged data.' },
];

const flow = [
  { n: '01', title: 'Set your goal', body: 'Weight loss, muscle gain, maintenance, or recomp.' },
  { n: '02', title: 'Get personalized targets', body: 'Fitnivo calculates your calorie and macro targets based on your goal, body stats, and activity.' },
  { n: '03', title: 'Track daily meals', body: 'Use the AI food scanner, search, or barcode entry to log what you eat.' },
  { n: '04', title: 'Get weekly guidance', body: 'Fitnivo reviews your progress and adjusts recommendations so you stay on track.' },
];

const faqs = [
  { q: 'What is an AI nutrition coach?', a: 'An AI nutrition coach is a digital assistant that helps you plan and track your nutrition. It calculates calorie and macro targets, tracks what you eat, and adjusts recommendations based on your progress.' },
  { q: 'How is Fitnivo different from a nutrition chatbot?', a: "Fitnivo grounds its coaching in your actual tracked meals, not just conversation. It uses your logged food data, calorie and macro trends, and workout activity to give recommendations that reflect your real habits." },
  { q: 'Does Fitnivo support weight loss and muscle gain?', a: 'Yes. You choose your goal (weight loss, muscle gain, maintenance, or recomp) and Fitnivo sets appropriate calorie and macro targets, then adjusts as your progress data comes in.' },
  { q: 'Can Fitnivo track macros?', a: 'Yes. Fitnivo tracks calories, protein, carbohydrates, and fat, and connects those to your daily and weekly targets.' },
  { q: 'Does the nutrition coach need a workout app too?', a: "No — but Fitnivo includes both. Your workouts and nutrition live in one app so activity data can inform your calorie targets and recovery." },
  { q: 'Is nutrition tracking accurate?', a: 'Nutrition tracking is only as accurate as the entries you log. Fitnivo makes logging faster with an AI food scanner and search, but real-world estimates always carry some variability.' },
  { q: 'Which AI nutrition apps compete with Fitnivo?', a: 'Popular options include MacroFactor, Welling, Cal AI, MyFitnessPal, and Cronometer. Fitnivo differentiates as an all-in-one AI fitness and nutrition coach.' },
];

export default function AINutritionCoachPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navbar />

      <section className="relative pt-32 pb-20 border-b border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60">AI Nutrition Coach</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 border border-cyan-400 bg-cyan-950/20 px-3 py-1 mb-6 text-cyan-400 text-xs font-mono tracking-widest uppercase">
                AI Nutrition Coach
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
                AI Nutrition Coach That Learns From What You Eat
              </h1>
              <p className="text-lg text-[#B4B4B4] mb-8 leading-relaxed max-w-2xl">
                Get calorie and macro targets, plan meals, and follow guidance that&apos;s grounded in your actual food-tracking data — not generic chat replies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en" className="px-8 py-4 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300 text-center">
                  Start Free
                </a>
                <Link href="/ai-food-scanner" className="px-8 py-4 border border-[#262626] hover:border-cyan-400 font-semibold uppercase tracking-wider text-center">
                  See the Food Scanner
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <Image
                src="/images/mockup/nutrition-stats-bmi-tracking-dashboard.webp"
                alt="Fitnivo AI nutrition coach dashboard showing calorie, macro, and BMI tracking"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Is an AI Nutrition Coach?</h2>
          <p className="text-[#B4B4B4] text-lg leading-relaxed mb-4">
            An AI nutrition coach is a digital assistant that helps you plan and track your nutrition. It sets calorie and macro targets, tracks what you eat, and adjusts recommendations based on your progress.
          </p>
          <p className="text-[#B4B4B4] text-lg leading-relaxed">
            Where generic nutrition chatbots hand out generic advice, Fitnivo grounds its coaching in the meals you actually log — so guidance reflects your real habits, not textbook averages.
          </p>
        </div>
      </section>

      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How Fitnivo&apos;s Nutrition Coach Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {flow.map((s) => (
              <div key={s.n} className="border border-[#1f1f1f] bg-[#050505] p-6">
                <div className="text-cyan-400 font-mono text-sm font-bold mb-2">{s.n}</div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-[#B4B4B4] text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Nutrition Coach vs Nutritionist vs Chatbot</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-[#1f1f1f] text-sm">
              <thead>
                <tr className="bg-[#0a0a0a] border-b border-[#1f1f1f]">
                  <th className="p-4">&nbsp;</th>
                  <th className="p-4 text-cyan-400">Fitnivo AI Nutrition Coach</th>
                  <th className="p-4">Human Nutritionist</th>
                  <th className="p-4">Generic AI Chatbot</th>
                </tr>
              </thead>
              <tbody className="text-[#B4B4B4]">
                {[
                  ['Grounded in your tracked meals', 'Yes', 'Depends', 'No'],
                  ['Calorie & macro targets', 'Yes, adaptive', 'Yes', 'Generic'],
                  ['Availability', '24/7', 'Sessions', '24/7'],
                  ['Cost', 'Low', 'High', 'Free/low'],
                  ['Medical individualization', 'No', 'Yes', 'No'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 ? 'bg-[#050505]' : ''}>
                    <td className="p-4 font-semibold text-white border-t border-[#1f1f1f]">{row[0]}</td>
                    <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">{row[1]}</td>
                    <td className="p-4 border-t border-[#1f1f1f]">{row[2]}</td>
                    <td className="p-4 border-t border-[#1f1f1f]">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#B4B4B4] mt-4 italic">
            Fitnivo is a general-purpose coach. For medical conditions like diabetes, pregnancy, eating disorders, or specific clinical needs, work with a qualified professional.
          </p>
        </div>
      </section>

      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">AI Nutrition Coaching for Your Goal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((g) => (
              <div key={g.title} className="border border-[#1f1f1f] bg-[#050505] p-6">
                <h3 className="text-white font-bold text-lg mb-2">{g.title}</h3>
                <p className="text-[#B4B4B4] text-sm leading-relaxed">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">One App for Nutrition and Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/ai-food-scanner" className="border border-[#1f1f1f] bg-[#050505] p-6 hover:border-cyan-400 group">
              <h3 className="text-white font-bold mb-2 group-hover:text-cyan-400">AI Food Scanner</h3>
              <p className="text-sm text-[#B4B4B4]">Snap meals to log calories and macros in seconds.</p>
            </Link>
            <Link href="/ai-meal-planner" className="border border-[#1f1f1f] bg-[#050505] p-6 hover:border-cyan-400 group">
              <h3 className="text-white font-bold mb-2 group-hover:text-cyan-400">AI Meal Planner</h3>
              <p className="text-sm text-[#B4B4B4]">Meals built around your calorie and protein targets.</p>
            </Link>
            <Link href="/ai-fitness-coach" className="border border-[#1f1f1f] bg-[#050505] p-6 hover:border-cyan-400 group">
              <h3 className="text-white font-bold mb-2 group-hover:text-cyan-400">AI Fitness Coach</h3>
              <p className="text-sm text-[#B4B4B4]">Personalized workouts that adapt as you progress.</p>
            </Link>
          </div>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Nutrition That Reflects What You Actually Eat</h2>
          <p className="text-[#B4B4B4] text-lg mb-8">Track your meals, hit your targets, and get coaching grounded in your data.</p>
          <a href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en" className="inline-block px-10 py-4 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300">
            Download Fitnivo
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
