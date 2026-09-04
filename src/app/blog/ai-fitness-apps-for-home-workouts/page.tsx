import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

export const metadata: Metadata = {
  title: 'Best AI Fitness Apps for Home Workouts in 2026 | Fitnivo',
  description:
    'The best AI fitness apps for home workouts in 2026 — apps that build effective programs with dumbbells, bodyweight, or no equipment at all.',
  keywords: [
    'ai fitness apps for home workouts',
    'best ai home workout app',
    'ai workout app no equipment',
    'ai workout app dumbbells',
    'bodyweight ai workout app',
  ],
  alternates: { canonical: 'https://fitnivo.in/blog/ai-fitness-apps-for-home-workouts' },
  openGraph: {
    title: 'Best AI Fitness Apps for Home Workouts in 2026',
    description:
      'The best AI fitness apps for home workouts in 2026 — apps that build effective programs with dumbbells, bodyweight, or no equipment at all.',
    url: 'https://fitnivo.in/blog/ai-fitness-apps-for-home-workouts',
    type: 'article',
    images: [
      {
        url: 'https://fitnivo.in/images/blog/ai-coaching/hybrid_coaching_future.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Best AI Fitness Apps for Home Workouts in 2026',
  description:
    'The best AI fitness apps for home workouts in 2026 — apps that build effective programs with dumbbells, bodyweight, or no equipment at all.',
  image: 'https://fitnivo.in/images/blog/ai-coaching/hybrid_coaching_future.webp',
  url: 'https://fitnivo.in/blog/ai-fitness-apps-for-home-workouts',
  datePublished: '2026-09-04T00:00:00Z',
  dateModified: '2026-09-04T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 2100,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'AI Fitness Apps for Home Workouts', url: 'https://fitnivo.in/blog/ai-fitness-apps-for-home-workouts' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best AI workout app for home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For bodyweight-only home training, Freeletics is the strongest option. For dumbbell-based home training with nutrition tracking, Fitnivo is the most complete package. Nike Training Club is the best free option with guided video workouts that require no equipment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI fitness apps work without gym equipment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most AI fitness apps support bodyweight-only modes. You select no equipment during onboarding and the app generates programs using push-ups, squats, lunges, planks, and other movements that require nothing but your bodyweight.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Freeletics or Fitnivo better for home workouts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freeletics is better if you want bodyweight-only workouts without any equipment and do not care about nutrition tracking. Fitnivo is better if you have at least some equipment (dumbbells or bands) and want to track calories and macros in the same app.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I build muscle at home with an AI fitness app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, though the rate of muscle gain is slower with bodyweight-only training than with progressively heavier weights. Having at least adjustable dumbbells gives you far more options for progressive overload. AI apps that track your performance and increase difficulty over time are essential for muscle building at home.',
      },
    },
    {
      '@type': 'Question',
      name: 'What equipment do I need to get the most from an AI home workout app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A pair of adjustable dumbbells or a few fixed-weight pairs covering light, medium, and heavy loads will unlock most of what AI home workout apps can program. Resistance bands add pulling exercises. A pull-up bar adds back and bicep work. None of this is strictly required, but each addition expands your programming options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are bodyweight AI workouts effective?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, especially for fat loss, endurance, and maintaining muscle. Building significant muscle with bodyweight only is harder because you cannot easily add load incrementally. AI apps handle this by adding reps, changing leverage, or introducing harder exercise variations — but there is a ceiling that weights do not have.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI apps do progressive overload with dumbbells only?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. With a set of dumbbells, AI apps apply progressive overload by increasing reps, sets, or weight across sessions. The more weight options you have, the more precisely the AI can progress you. With just one or two pairs of dumbbells, the app will use rep ranges and tempo to create progression.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best free AI home workout app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nike Training Club is the best fully free option with structured programs and guided videos. Fitnivo has a generous free tier (unlimited workout logging, 3 AI food scans/day, 15 AI coach messages/day) that works well for home training with equipment.',
      },
    },
  ],
};

const schemaJson = JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]);

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300">Home</Link>
          <span className="text-white/30">/</span>
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300">Blog</Link>
          <span className="text-white/30">/</span>
          <span className="text-white/60">AI Fitness Apps for Home Workouts</span>
        </nav>

        {/* Meta strip */}
        <div className="mb-6 flex items-center gap-3 text-sm text-[#B4B4B4]">
          <span className="uppercase tracking-widest text-cyan-400 text-xs font-bold">Best-of</span>
          <span>·</span>
          <span>8 min read</span>
          <span>·</span>
          <time dateTime="2026-09-04">September 4, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          Best AI Fitness Apps for Home Workouts in 2026
        </h1>

        {/* Hero image */}
        <div className="relative w-full aspect-[1.9/1] mb-10 overflow-hidden rounded-lg">
          <Image
            src="/images/blog/ai-coaching/hybrid_coaching_future.webp"
            alt="Best AI fitness apps for home workouts in 2026"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        {/* TL;DR box */}
        <div className="bg-cyan-950/20 border border-cyan-400/30 p-6 mb-10">
          <p className="text-white font-semibold leading-relaxed">
            <strong>TL;DR:</strong> The best AI home workout apps build effective programs from whatever equipment you have — bodyweight only, resistance bands, or a set of dumbbells. Freeletics leads for bodyweight; Fitnivo and FitnessAI work well for dumbbell-based home training with nutrition tracking; Nike Training Club is the best free option for guided video workouts.
          </p>
        </div>

        {/* Answer-first paragraph */}
        <p className="text-[#B4B4B4] text-lg leading-relaxed mb-6">
          The best AI fitness apps for home workouts in 2026 adapt your program to whatever equipment you have — including no equipment at all. The key distinction from a video library is that these apps track your performance, apply progressive overload, and update your plan as you improve. A YouTube workout gives you a fixed session. An AI app gives you a system that evolves.
        </p>

        <p className="text-sm text-[#B4B4B4] mb-8 italic">
          General information only, not medical advice. Consult a qualified professional before starting any new exercise program if you have a medical condition.
        </p>

        <p className="text-sm text-[#B4B4B4] mb-10">
          Reviewed by the <Link href="/about" className="text-cyan-400 hover:underline">Fitnivo Editorial Team</Link>.
        </p>

        {/* Section 1 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">The Home Workout Problem AI Solves</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          Training at home removes barriers — no commute, no waiting for equipment, lower cost. But it creates a different problem: without a trainer to tell you what to do, most people default to doing the same workout repeatedly or following random videos with no structure. Both approaches limit progress.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          AI fitness apps fill the programming gap. You tell the app what equipment you have, how many days you can train, and what your goal is. It produces a structured weekly program, tracks what you log, and adjusts the plan as you progress — the same logic a personal trainer would apply, without the cost or the need to leave your living room.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          The second problem AI solves is accountability. Logging your workout — even into an app — creates a record and a commitment loop that makes you more likely to show up for the next session.
        </p>

        {/* Section 2 — Equipment tiers */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Equipment Tiers and Which Apps Handle Each</h2>
        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-[#1f1f1f] pl-4">
            <h3 className="text-xl font-bold text-white mb-2">No equipment / bodyweight only</h3>
            <p className="text-[#B4B4B4]">
              Push-ups, squats, lunges, burpees, planks, and variations. <strong className="text-white">Freeletics</strong> is the category leader here. Nike Training Club also works well. Fitnivo supports bodyweight-only programs through its <Link href="/ai-workout-planner" className="text-cyan-400 hover:underline">AI workout planner</Link>.
            </p>
          </div>
          <div className="border-l-2 border-[#1f1f1f] pl-4">
            <h3 className="text-xl font-bold text-white mb-2">Resistance bands</h3>
            <p className="text-[#B4B4B4]">
              Bands add pulling exercises and provide variable resistance. Most apps treat bands as equipment you can select — Fitnivo and Freeletics both handle bands well. FitnessAI focuses more on weighted equipment.
            </p>
          </div>
          <div className="border-l-2 border-[#1f1f1f] pl-4">
            <h3 className="text-xl font-bold text-white mb-2">Dumbbells</h3>
            <p className="text-[#B4B4B4]">
              A pair of adjustable dumbbells or several fixed-weight pairs is where home training starts to match gym training for most goals. <strong className="text-white">Fitnivo</strong> and <strong className="text-white">FitnessAI</strong> handle dumbbell-based programming well. Fitbod works with dumbbells but is designed primarily for gym use.
            </p>
          </div>
          <div className="border-l-2 border-[#1f1f1f] pl-4">
            <h3 className="text-xl font-bold text-white mb-2">Full home gym (barbell, rack, cables)</h3>
            <p className="text-[#B4B4B4]">
              At this level, you have access to almost everything a commercial gym has. <strong className="text-white">Fitbod</strong> and <strong className="text-white">FitnessAI</strong> program barbell movements effectively. The equipment selection in Hevy (a workout logger with some AI features) also handles full home gyms.
            </p>
          </div>
        </div>

        {/* Section 3 — Comparison table */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Quick Comparison Table</h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left border border-[#1f1f1f] text-sm">
            <thead>
              <tr className="bg-[#0a0a0a] border-b border-[#1f1f1f]">
                <th className="p-4 text-white">App</th>
                <th className="p-4 text-white">Equipment flexibility</th>
                <th className="p-4 text-white">Bodyweight</th>
                <th className="p-4 text-white">Dumbbells</th>
                <th className="p-4 text-white">Nutrition</th>
                <th className="p-4 text-white">Price</th>
              </tr>
            </thead>
            <tbody className="text-[#B4B4B4]">
              <tr>
                <td className="p-4 font-bold text-white border-t border-[#1f1f1f]">Fitnivo</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">High</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓</td>
                <td className="p-4 border-t border-[#1f1f1f]">Free · Pro $10/mo · $60/yr</td>
              </tr>
              <tr className="bg-[#050505]">
                <td className="p-4 font-bold text-white border-t border-[#1f1f1f]">Freeletics</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">High (BW-first)</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓✓</td>
                <td className="p-4 border-t border-[#1f1f1f]">Limited</td>
                <td className="p-4 border-t border-[#1f1f1f]">Basic</td>
                <td className="p-4 border-t border-[#1f1f1f]">~$34.99/qtr</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white border-t border-[#1f1f1f]">FitnessAI</td>
                <td className="p-4 border-t border-[#1f1f1f]">Medium</td>
                <td className="p-4 border-t border-[#1f1f1f]">Limited</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓</td>
                <td className="p-4 border-t border-[#1f1f1f]">—</td>
                <td className="p-4 border-t border-[#1f1f1f]">~$89/yr</td>
              </tr>
              <tr className="bg-[#050505]">
                <td className="p-4 font-bold text-white border-t border-[#1f1f1f]">Nike Training Club</td>
                <td className="p-4 border-t border-[#1f1f1f]">Medium</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓✓</td>
                <td className="p-4 border-t border-[#1f1f1f]">Limited</td>
                <td className="p-4 border-t border-[#1f1f1f]">—</td>
                <td className="p-4 border-t border-[#1f1f1f]">Free</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white border-t border-[#1f1f1f]">Fitbod</td>
                <td className="p-4 border-t border-[#1f1f1f]">High (gym-first)</td>
                <td className="p-4 border-t border-[#1f1f1f]">Partial</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓</td>
                <td className="p-4 border-t border-[#1f1f1f]">—</td>
                <td className="p-4 border-t border-[#1f1f1f]">~$12.99/mo</td>
              </tr>
              <tr className="bg-[#050505]">
                <td className="p-4 font-bold text-white border-t border-[#1f1f1f]">Hevy</td>
                <td className="p-4 border-t border-[#1f1f1f]">High</td>
                <td className="p-4 border-t border-[#1f1f1f]">Partial</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓</td>
                <td className="p-4 border-t border-[#1f1f1f]">—</td>
                <td className="p-4 border-t border-[#1f1f1f]">Free · Pro available</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 4 — App write-ups */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">App Write-Ups: Best for Each Home Scenario</h2>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-2">Fitnivo — Best for dumbbell home training + nutrition</h3>
          <p className="text-[#B4B4B4] leading-relaxed mb-4">
            Fitnivo generates equipment-aware programs from whatever you have at home. Select dumbbells, resistance bands, or bodyweight-only during onboarding and the program adapts accordingly. The <Link href="/ai-fitness-coach" className="text-cyan-400 hover:underline">AI fitness coach</Link> applies progressive overload automatically — you log your session, and the next one adjusts based on how you performed.
          </p>
          <p className="text-[#B4B4B4] leading-relaxed">
            The addition of calorie and macro tracking in the same app is the differentiator. Home trainees often underestimate how much nutrition affects results. Fitnivo covers both sides without requiring a second app. Free tier includes unlimited workout logging, 3 AI food scans per day, and 15 AI coach messages per day.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-2">Freeletics — Best for bodyweight-only home training</h3>
          <p className="text-[#B4B4B4] leading-relaxed mb-4">
            Freeletics built its reputation on bodyweight training and it remains the best AI app for people who want effective no-equipment workouts. The AI Coach adapts to your fitness level and session feedback. Programs are genuinely challenging and well-structured for bodyweight progression.
          </p>
          <p className="text-[#B4B4B4] leading-relaxed">
            The limitation is equipment versatility — once you add dumbbells or a barbell to your home setup, Freeletics does not program them as effectively as apps designed around weighted equipment. See our <Link href="/blog/fitnivo-vs-freeletics" className="text-cyan-400 hover:underline">Fitnivo vs Freeletics comparison</Link> for a full breakdown.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-2">FitnessAI — Best for dumbbell progressions at home</h3>
          <p className="text-[#B4B4B4] leading-relaxed mb-4">
            FitnessAI is lean and focused on strength progression. If your home gym has dumbbells and you want specific weight targets with clear progression logic, FitnessAI delivers this simply and well. No nutrition, no frills — just the workout and the numbers.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-2">Nike Training Club — Best free option for video-guided home workouts</h3>
          <p className="text-[#B4B4B4] leading-relaxed mb-4">
            Nike Training Club is the strongest completely free option. It has structured beginner and intermediate programs, professional video guidance, and a library of sessions across different goals. The limitation is that it does not track your performance in the same way a pure AI app does — it is more of a guided video platform with structure than an adaptive AI system.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-2">Fitbod — Good for full home gyms</h3>
          <p className="text-[#B4B4B4] leading-relaxed mb-4">
            Fitbod is primarily a gym app but handles home setups well when you have a barbell, rack, or a comprehensive dumbbell selection. It generates each workout fresh based on what you last trained. Less effective with bodyweight-only or minimal equipment setups.
          </p>
        </section>

        {/* Section 5 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">What Makes a Home Workout App AI vs Just a Video Library</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          A video workout library (YouTube, NTC, Peloton) gives you fixed content. You watch a trainer, follow along, and then it is over. The next session has no memory of what you did before.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          An AI workout app tracks your logged sessions and updates your plan based on actual performance. If you hit your target reps and weight, the next session increases the load. If you missed a session or reported high fatigue, the app adjusts. This feedback loop is what separates adaptive programming from static content.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          Some apps market themselves as AI but are essentially a workout generator that produces a one-time plan — no adaptation, no tracking. A genuine AI fitness app should update your program based on what you log, not just generate a plan once and leave you to follow it forever.
        </p>

        {/* Section 6 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Progressive Overload at Home: Why It Matters and How AI Handles It</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          Progressive overload — gradually increasing the stress on your muscles over time — is the core mechanism of fitness improvement. At a gym, you add plates. At home with limited equipment, you need other strategies.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          AI apps handle home progressive overload through several methods:
        </p>
        <ul className="text-[#B4B4B4] space-y-3 mb-6 list-disc pl-6">
          <li><strong className="text-white">Rep progression</strong> — increasing reps from 8 to 12 before adding weight</li>
          <li><strong className="text-white">Set progression</strong> — adding a set once you hit the top rep range</li>
          <li><strong className="text-white">Exercise variation</strong> — progressing from a push-up to an archer push-up to a one-arm push-up as strength increases</li>
          <li><strong className="text-white">Tempo manipulation</strong> — slowing down the lowering phase to increase time under tension without changing weight</li>
          <li><strong className="text-white">Weighted additions</strong> — adding a backpack with books or a weighted vest to bodyweight exercises</li>
        </ul>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          Apps like Fitnivo and Freeletics handle these automatically. You do not need to plan the progression — you log what you did and the app decides what comes next.
        </p>

        {/* FAQ */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Frequently Asked Questions</h2>
        <div className="space-y-6 mb-12">
          {[
            {
              q: 'What is the best AI workout app for home?',
              a: 'For bodyweight-only home training, Freeletics is the strongest option. For dumbbell-based home training with nutrition tracking, Fitnivo is the most complete package. Nike Training Club is the best free option with guided video workouts that require no equipment.',
            },
            {
              q: 'Can AI fitness apps work without gym equipment?',
              a: 'Yes. Most AI fitness apps support bodyweight-only modes. You select no equipment during onboarding and the app generates programs using push-ups, squats, lunges, planks, and other movements that require nothing but your bodyweight.',
            },
            {
              q: 'Is Freeletics or Fitnivo better for home workouts?',
              a: 'Freeletics is better if you want bodyweight-only workouts without any equipment and do not care about nutrition tracking. Fitnivo is better if you have at least some equipment (dumbbells or bands) and want to track calories and macros in the same app.',
            },
            {
              q: 'Can I build muscle at home with an AI fitness app?',
              a: 'Yes, though the rate of muscle gain is slower with bodyweight-only training than with progressively heavier weights. Having at least adjustable dumbbells gives you far more options for progressive overload. AI apps that track your performance and increase difficulty over time are essential for muscle building at home.',
            },
            {
              q: 'What equipment do I need to get the most from an AI home workout app?',
              a: 'A pair of adjustable dumbbells or a few fixed-weight pairs covering light, medium, and heavy loads will unlock most of what AI home workout apps can program. Resistance bands add pulling exercises. A pull-up bar adds back and bicep work. None of this is strictly required, but each addition expands your programming options.',
            },
            {
              q: 'Are bodyweight AI workouts effective?',
              a: 'Yes, especially for fat loss, endurance, and maintaining muscle. Building significant muscle with bodyweight only is harder because you cannot easily add load incrementally. AI apps handle this by adding reps, changing leverage, or introducing harder exercise variations — but there is a ceiling that weights do not have.',
            },
            {
              q: 'Can AI apps do progressive overload with dumbbells only?',
              a: 'Yes. With a set of dumbbells, AI apps apply progressive overload by increasing reps, sets, or weight across sessions. The more weight options you have, the more precisely the AI can progress you. With just one or two pairs of dumbbells, the app will use rep ranges and tempo to create progression.',
            },
            {
              q: 'What is the best free AI home workout app?',
              a: 'Nike Training Club is the best fully free option with structured programs and guided videos. Fitnivo has a generous free tier (unlimited workout logging, 3 AI food scans/day, 15 AI coach messages/day) that works well for home training with equipment.',
            },
          ].map((item, i) => (
            <div key={i} className={i > 0 ? 'border-t border-[#1f1f1f] pt-6' : ''}>
              <h4 className="text-lg font-bold text-white mb-2">{item.q}</h4>
              <p className="text-[#B4B4B4]">{item.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border border-cyan-400 bg-cyan-950/10 p-8 mb-12">
          <h3 className="text-2xl font-bold mb-3">AI-powered home workouts that adapt as you progress</h3>
          <p className="text-[#B4B4B4] mb-4">
            Fitnivo builds equipment-aware programs for home training — bodyweight, bands, or dumbbells — and tracks your nutrition in the same app. Free tier: unlimited workout logger, 3 AI food scans/day, 15 AI coach messages/day. Pro: $10/month or $60/year.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
            className="inline-block px-6 py-3 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300"
          >
            Download Fitnivo Free
          </a>
        </div>

        {/* Related links */}
        <h3 className="text-xl font-bold mb-4">Related reading</h3>
        <ul className="text-cyan-400 space-y-2">
          <li><Link href="/ai-fitness-coach" className="hover:underline">Fitnivo AI Fitness Coach</Link></li>
          <li><Link href="/ai-workout-planner" className="hover:underline">Fitnivo AI Workout Planner</Link></li>
          <li><Link href="/blog/fitnivo-vs-freeletics" className="hover:underline">Fitnivo vs Freeletics — full comparison</Link></li>
          <li><Link href="/blog/best-ai-fitness-apps-2026" className="hover:underline">Best AI fitness apps in 2026 (full comparison)</Link></li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}
