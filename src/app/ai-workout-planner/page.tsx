import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

export const metadata: Metadata = {
  title: 'AI Workout Planner & Generator — Personalized Plans | Fitnivo',
  description:
    "Get personalized workouts built around your goal, experience, and equipment. Fitnivo's AI workout planner adapts as you train.",
  keywords: [
    'AI workout planner',
    'AI workout generator',
    'AI workout generator app',
    'personalized workout app',
    'personalized workout planner',
    'adaptive workout app',
    'AI gym workout planner',
    'workout generator based on equipment',
  ],
  alternates: { canonical: 'https://fitnivo.in/ai-workout-planner' },
  openGraph: {
    title: 'AI Workout Planner & Generator | Fitnivo',
    description: 'Personalized workouts built around your goal, experience, and equipment.',
    url: 'https://fitnivo.in/ai-workout-planner',
    type: 'website',
  },
};

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fitnivo AI Workout Planner',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Android, iOS',
  description:
    'AI workout planner and generator that creates personalized workouts based on your goal, experience, and available equipment, and adapts as you train.',
  url: 'https://fitnivo.in/ai-workout-planner',
  offers: [
    { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'Free tier (workout logger free)' },
    { '@type': 'Offer', price: '10', priceCurrency: 'USD', name: 'Monthly Pro' },
    { '@type': 'Offer', price: '60', priceCurrency: 'USD', name: 'Annual Pro' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is an AI workout planner?', acceptedAnswer: { '@type': 'Answer', text: 'An AI workout planner generates personalized workout routines based on your goal, fitness level, available equipment, and training history — then adjusts future sessions as you log your progress.' } },
    { '@type': 'Question', name: 'How is an AI workout planner different from a static plan?', acceptedAnswer: { '@type': 'Answer', text: 'A static plan gives you the same routine every week. An AI workout planner adjusts exercises, sets, reps, and progression based on what you actually did.' } },
    { '@type': 'Question', name: 'Can Fitnivo plan gym, home, and bodyweight workouts?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Choose your available equipment and Fitnivo builds a matching routine — commercial gym, home dumbbells, or bodyweight only.' } },
    { '@type': 'Question', name: 'Does it handle progressive overload?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. As you log sets and reps, Fitnivo tracks progression and adjusts future targets to keep you moving forward.' } },
    { '@type': 'Question', name: 'How does Fitnivo compare to Fitbod and Planfit?', acceptedAnswer: { '@type': 'Answer', text: 'Fitbod, Planfit, and BodBot are strong workout-only planners. Fitnivo differentiates by combining an AI workout planner with nutrition tracking, AI food scanning, and meal planning in one app.' } },
  ],
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'AI Workout Planner', url: 'https://fitnivo.in/ai-workout-planner' },
]);

const schemaJson = JSON.stringify([softwareAppSchema, faqSchema, breadcrumbSchema]);

const inputs = [
  { t: 'Goal', b: 'Muscle gain, fat loss, strength, general fitness, or consistency.' },
  { t: 'Experience', b: 'Beginner through advanced — sets appropriate exercise selection.' },
  { t: 'Equipment', b: 'Gym, home dumbbells, bands, machines, or bodyweight only.' },
  { t: 'Schedule', b: 'How many days per week you want to train.' },
  { t: 'History', b: 'Your logged sessions inform what comes next.' },
];

const environments = [
  { t: 'Commercial gym', b: 'Full equipment stack — barbells, machines, cables, dumbbells.' },
  { t: 'Home gym', b: 'Dumbbells, adjustable bench, resistance bands.' },
  { t: 'Bodyweight only', b: 'No equipment needed — push-ups, squats, lunges, planks.' },
  { t: 'Hotel / travel', b: 'Minimal equipment, quick sessions to keep the streak alive.' },
];

const faqs = [
  { q: 'What is an AI workout planner?', a: 'An AI workout planner generates personalized workout routines based on your goal, fitness level, available equipment, and training history — then adjusts future sessions as you log progress.' },
  { q: 'How is it different from a static plan?', a: 'A static plan gives you the same routine every week. An AI planner adjusts exercises, sets, reps, and progression based on what you actually did.' },
  { q: 'Can Fitnivo plan gym, home, and bodyweight workouts?', a: 'Yes. Choose your available equipment and Fitnivo builds a matching routine — commercial gym, home dumbbells, or bodyweight only.' },
  { q: 'Does it handle progressive overload?', a: 'Yes. As you log sets and reps, Fitnivo tracks progression and adjusts future targets.' },
  { q: 'How does Fitnivo compare to Fitbod and Planfit?', a: 'Fitbod, Planfit, and BodBot are strong workout-only planners. Fitnivo differentiates by combining an AI workout planner with nutrition tracking, AI food scanning, and meal planning in one app.' },
  { q: 'Is it good for beginners?', a: 'Yes. Fitnivo starts with safe volumes, clear exercise guidance, and progresses gradually as you get stronger.' },
];

export default function AIWorkoutPlannerPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navbar />

      <section className="relative pt-32 pb-20 border-b border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60">AI Workout Planner</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 border border-cyan-400 bg-cyan-950/20 px-3 py-1 mb-6 text-cyan-400 text-xs font-mono tracking-widest uppercase">
                AI Workout Planner
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
                AI Workout Planner That Adapts as You Train
              </h1>
              <p className="text-lg text-[#B4B4B4] mb-8 leading-relaxed max-w-2xl">
                Get personalized workouts built around your goal, experience, and equipment. Log your session, and Fitnivo adjusts what comes next.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en" className="px-8 py-4 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300 text-center">
                  Generate Your Plan
                </a>
                <Link href="/ai-fitness-coach" className="px-8 py-4 border border-[#262626] hover:border-cyan-400 font-semibold uppercase tracking-wider text-center">
                  See AI Fitness Coach
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <Image
                src="/images/mockup/custom-workout-creator-exercise-builder.webp"
                alt="Fitnivo AI workout planner creating a personalized routine with sets, reps, and exercises"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Is an AI Workout Planner?</h2>
          <p className="text-[#B4B4B4] text-lg leading-relaxed mb-4">
            An AI workout planner generates personalized workout routines based on your goal, fitness level, available equipment, and training history — then adjusts future sessions as you log your progress.
          </p>
          <p className="text-[#B4B4B4] text-lg leading-relaxed">
            Where static PDF plans give you the same routine every week, an AI planner reads your logged workouts and progresses you at the right pace.
          </p>
        </div>
      </section>

      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">How Fitnivo Builds Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inputs.map((x) => (
              <div key={x.t} className="border border-[#1f1f1f] bg-[#050505] p-6">
                <h3 className="text-white font-bold mb-2">{x.t}</h3>
                <p className="text-sm text-[#B4B4B4] leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Home, Gym, Bodyweight, or Travel</h2>
          <p className="text-[#B4B4B4] text-lg mb-8 max-w-3xl">
            Fitnivo generates workouts around whatever equipment you actually have.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {environments.map((e) => (
              <div key={e.t} className="border border-[#1f1f1f] bg-[#050505] p-6">
                <h3 className="text-white font-bold text-lg mb-2">{e.t}</h3>
                <p className="text-[#B4B4B4] text-sm leading-relaxed">{e.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Progressive Overload, Done for You</h2>
          <p className="text-[#B4B4B4] text-lg leading-relaxed">
            As you log sets and reps, Fitnivo tracks your performance and adjusts future targets. If you cleared last week&apos;s sets, next week nudges upward. If you missed reps, the plan holds the load until you catch up. Progress becomes something the app tracks — not something you have to remember.
          </p>
        </div>
      </section>

      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How Fitnivo Compares to Workout-Only Apps</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-[#1f1f1f] text-sm">
              <thead>
                <tr className="bg-[#0a0a0a] border-b border-[#1f1f1f]">
                  <th className="p-4">Feature</th>
                  <th className="p-4 text-cyan-400">Fitnivo</th>
                  <th className="p-4">Fitbod</th>
                  <th className="p-4">Planfit</th>
                </tr>
              </thead>
              <tbody className="text-[#B4B4B4]">
                {[
                  ['AI workout planner', 'Yes', 'Yes', 'Yes'],
                  ['Equipment-aware', 'Yes', 'Yes', 'Yes'],
                  ['Workout logging & history', 'Yes', 'Yes', 'Yes'],
                  ['Progressive overload', 'Yes', 'Yes', 'Yes'],
                  ['Nutrition tracking', 'Yes', 'No', 'No'],
                  ['AI food scanner', 'Yes', 'No', 'No'],
                  ['Meal planner', 'Yes', 'No', 'No'],
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
          <p className="text-sm text-[#B4B4B4] mt-4">
            See <Link href="/blog/fitnivo-vs-fitbod" className="text-cyan-400 hover:underline">Fitnivo vs Fitbod</Link> for a full comparison.
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Generate Your First Workout</h2>
          <p className="text-[#B4B4B4] text-lg mb-8">Personalized to your goal, equipment, and history.</p>
          <a href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en" className="inline-block px-10 py-4 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300">
            Download Fitnivo
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
