import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

export const metadata: Metadata = {
  title: 'Best AI Fitness Apps for Beginners in 2026 (No Experience Needed) | Fitnivo',
  description:
    'The best AI fitness apps for beginners in 2026 — apps that explain exercises, build structured programs, and guide you from your first workout.',
  keywords: [
    'ai fitness apps for beginners',
    'best ai workout app for beginners',
    'ai personal trainer for beginners',
    'beginner ai fitness app',
    'ai workout app no experience',
  ],
  alternates: { canonical: 'https://fitnivo.in/blog/ai-fitness-apps-for-beginners' },
  openGraph: {
    title: 'Best AI Fitness Apps for Beginners in 2026 (No Experience Needed)',
    description:
      'The best AI fitness apps for beginners in 2026 — apps that explain exercises, build structured programs, and guide you from your first workout.',
    url: 'https://fitnivo.in/blog/ai-fitness-apps-for-beginners',
    type: 'article',
    images: [
      {
        url: 'https://fitnivo.in/images/blog/ai-coaching/traditional_personal_trainer.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Best AI Fitness Apps for Beginners in 2026 (No Experience Needed)',
  description:
    'The best AI fitness apps for beginners in 2026 — apps that explain exercises, build structured programs, and guide you from your first workout.',
  image: 'https://fitnivo.in/images/blog/ai-coaching/traditional_personal_trainer.webp',
  url: 'https://fitnivo.in/blog/ai-fitness-apps-for-beginners',
  datePublished: '2026-09-04T00:00:00Z',
  dateModified: '2026-09-04T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 2200,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'AI Fitness Apps for Beginners', url: 'https://fitnivo.in/blog/ai-fitness-apps-for-beginners' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can beginners use AI fitness apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI fitness apps are well-suited to beginners because they remove the need to know how to design a workout. You input your goal, experience level, and available equipment, and the app builds a structured program for you — no prior knowledge required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best AI fitness app for someone who has never worked out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For absolute beginners, Fitnivo and Freeletics are good starting points. Fitnivo covers workouts and nutrition together so you do not need two apps. Freeletics has solid beginner bodyweight programs. Nike Training Club is a strong free option with video guidance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do AI fitness apps teach you proper form?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most AI fitness apps include exercise descriptions and some include demo videos or GIFs. They cannot watch you and correct your form in real time. For complex movements like squats and deadlifts, beginners should also seek video resources or an in-person session to check form basics.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Fitnivo good for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Fitnivo asks about your experience level during onboarding and builds workouts accordingly. The AI coach can also answer questions about exercises and explain why certain movements are in your plan. The free tier gives beginners real functionality without upfront cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should beginners use a personal trainer instead of an AI app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A human trainer adds real-time form correction and live accountability that an AI app cannot match. However, a personal trainer costs significantly more. For most beginners with a standard goal like getting fit or losing weight, an AI fitness app provides enough structure to start safely.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long before I see results using an AI fitness app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visible changes typically appear within 4–8 weeks of consistent training and adequate nutrition. Strength gains and improved energy often come faster, within 2–4 weeks. Results depend on consistency, diet, sleep, and starting point — the app is a tool, not a guarantee.',
      },
    },
    {
      '@type': 'Question',
      name: 'What equipment do I need to start with an AI fitness app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'None is required. Most AI fitness apps including Fitnivo and Freeletics support bodyweight-only programs. If you have dumbbells or access to a gym, the app will incorporate them. You select your available equipment during onboarding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are AI fitness apps safe for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally yes, when you input your information accurately. The app sets appropriate starting weights and volume based on your experience level. Start lighter than you think you need to, and flag any pain or injury to your doctor before starting a new exercise program.',
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
          <span className="text-white/60">AI Fitness Apps for Beginners</span>
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
          Best AI Fitness Apps for Beginners in 2026
        </h1>

        {/* Hero image */}
        <div className="relative w-full aspect-[1.9/1] mb-10 overflow-hidden rounded-lg">
          <Image
            src="/images/blog/ai-coaching/traditional_personal_trainer.webp"
            alt="Best AI fitness apps for beginners in 2026"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        {/* TL;DR box */}
        <div className="bg-cyan-950/20 border border-cyan-400/30 p-6 mb-10">
          <p className="text-white font-semibold leading-relaxed">
            <strong>TL;DR:</strong> The best AI fitness apps for beginners explain what to do, why to do it, and how to progress — without assuming you already know gym terminology. Fitnivo, Freeletics, and FitnessAI each offer good beginner entry points. The key feature to look for: structured workout programs (not just a random exercise generator) with clear progression.
          </p>
        </div>

        {/* Answer-first paragraph */}
        <p className="text-[#B4B4B4] text-lg leading-relaxed mb-6">
          The best AI fitness apps for beginners in 2026 handle the decisions you do not know how to make yet — which exercises, how many sets, how heavy, and how to get harder over time. You do not need gym experience to start. You need an app that builds a real program and explains the reasoning.
        </p>

        <p className="text-sm text-[#B4B4B4] mb-8 italic">
          General information only, not medical advice. Consult a qualified professional before starting any new exercise program if you have a medical condition.
        </p>

        <p className="text-sm text-[#B4B4B4] mb-10">
          Reviewed by the <Link href="/about" className="text-cyan-400 hover:underline">Fitnivo Editorial Team</Link>.
        </p>

        {/* Section 1 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">What Beginners Actually Need from a Fitness App</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          A library of 500 exercises is useless if you do not know which ones to do or in what order. Beginners need four things from a fitness app:
        </p>
        <ul className="text-[#B4B4B4] space-y-3 mb-6 list-disc pl-6">
          <li><strong className="text-white">A structured program</strong> — not a random workout generator. A program has a weekly structure that builds logically over weeks, balancing muscle groups and recovery.</li>
          <li><strong className="text-white">Exercise guidance</strong> — descriptions, video or GIF demos, and ideally an explanation of what muscle each movement targets and why it is in your plan.</li>
          <li><strong className="text-white">A progression system</strong> — you should not be doing the same weights for the same reps forever. A good beginner app increases difficulty automatically based on what you log.</li>
          <li><strong className="text-white">Low friction to log</strong> — if logging a workout takes 10 minutes, beginners stop doing it. The interface should be simple enough that the bar to log is near zero.</li>
        </ul>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          What beginners do not need: advanced periodization options, RPE scales, or ten different program templates to choose from. Complexity is the enemy of consistency at the start.
        </p>

        {/* Section 2 — Comparison table */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Quick Comparison: Best AI Fitness Apps for Beginners</h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left border border-[#1f1f1f] text-sm">
            <thead>
              <tr className="bg-[#0a0a0a] border-b border-[#1f1f1f]">
                <th className="p-4 text-white">App</th>
                <th className="p-4 text-white">Beginner program</th>
                <th className="p-4 text-white">Exercise guidance</th>
                <th className="p-4 text-white">Progressive overload</th>
                <th className="p-4 text-white">Nutrition</th>
                <th className="p-4 text-white">Price</th>
              </tr>
            </thead>
            <tbody className="text-[#B4B4B4]">
              <tr>
                <td className="p-4 font-bold text-white border-t border-[#1f1f1f]">Fitnivo</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓ (auto)</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓</td>
                <td className="p-4 border-t border-[#1f1f1f]">Free · Pro $10/mo · $60/yr</td>
              </tr>
              <tr className="bg-[#050505]">
                <td className="p-4 font-bold text-white border-t border-[#1f1f1f]">Freeletics</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓</td>
                <td className="p-4 border-t border-[#1f1f1f]">Basic only</td>
                <td className="p-4 border-t border-[#1f1f1f]">~$34.99/qtr</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white border-t border-[#1f1f1f]">FitnessAI</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓</td>
                <td className="p-4 border-t border-[#1f1f1f]">Limited</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓</td>
                <td className="p-4 border-t border-[#1f1f1f]">—</td>
                <td className="p-4 border-t border-[#1f1f1f]">~$89/yr</td>
              </tr>
              <tr className="bg-[#050505]">
                <td className="p-4 font-bold text-white border-t border-[#1f1f1f]">Nike Training Club</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓ (video)</td>
                <td className="p-4 border-t border-[#1f1f1f]">Limited</td>
                <td className="p-4 border-t border-[#1f1f1f]">—</td>
                <td className="p-4 border-t border-[#1f1f1f]">Free</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white border-t border-[#1f1f1f]">Fitbod</td>
                <td className="p-4 border-t border-[#1f1f1f]">Limited</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">✓</td>
                <td className="p-4 border-t border-[#1f1f1f]">—</td>
                <td className="p-4 border-t border-[#1f1f1f]">~$12.99/mo</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 3 — App write-ups */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">App Write-Ups for Beginners</h2>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-2">1. Fitnivo</h3>
          <p className="text-cyan-400 text-sm mb-3 uppercase tracking-widest font-mono">Best for: Beginners who want workouts + nutrition together</p>
          <p className="text-[#B4B4B4] leading-relaxed mb-4">
            Fitnivo onboards you with goal, experience level, equipment, and schedule — then generates a structured weekly workout program. The <Link href="/ai-fitness-coach" className="text-cyan-400 hover:underline">AI fitness coach</Link> applies progressive overload automatically based on what you log: if you hit your targets, the next session increases the load. You do not need to know when to add weight.
          </p>
          <p className="text-[#B4B4B4] leading-relaxed mb-4">
            The addition of calorie and macro tracking in the same app means beginners can address both sides of the equation without juggling multiple subscriptions. The free tier gives you unlimited workout logging, 3 AI food scans per day, and 15 AI coach messages per day — enough to genuinely test the product before spending anything.
          </p>
          <p className="text-[#B4B4B4] leading-relaxed">
            <strong className="text-white">Weakness for beginners:</strong> No video demonstrations built in. Exercise descriptions and the AI coach fill the gap, but if you need to see the movement, you will need to look it up externally.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-2">2. Freeletics</h3>
          <p className="text-cyan-400 text-sm mb-3 uppercase tracking-widest font-mono">Best for: Beginners who want bodyweight workouts with coach guidance</p>
          <p className="text-[#B4B4B4] leading-relaxed mb-4">
            Freeletics has a genuine beginner track with bodyweight workouts that scale down to easy movements. The AI Coach collects feedback after every session (how hard was it, how did you feel) and adjusts the next workout accordingly. This makes it good for beginners who are not sure how to pace themselves.
          </p>
          <p className="text-[#B4B4B4] leading-relaxed">
            <strong className="text-white">Weakness:</strong> No gym-equipment programs on the free tier. Nutrition tracking is basic. Pricing is higher than some alternatives.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-2">3. FitnessAI</h3>
          <p className="text-cyan-400 text-sm mb-3 uppercase tracking-widest font-mono">Best for: Beginners going to a gym who want simple strength progression</p>
          <p className="text-[#B4B4B4] leading-relaxed mb-4">
            FitnessAI is clean and focused — it gives you a workout with specific weights to use and tells you when to increase. For beginners who just want to show up and follow instructions at the gym without thinking too much, this works well. It does not overwhelm with options.
          </p>
          <p className="text-[#B4B4B4] leading-relaxed">
            <strong className="text-white">Weakness:</strong> No nutrition, limited exercise explanations, gym equipment required.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-2">4. Nike Training Club</h3>
          <p className="text-cyan-400 text-sm mb-3 uppercase tracking-widest font-mono">Best for: Beginners who want free guided video workouts</p>
          <p className="text-[#B4B4B4] leading-relaxed mb-4">
            Nike Training Club is the best free option for beginners who want to see the movements. Videos are professionally produced. There is a beginner program with a sensible progression. The limitation is that NTC does not track sets and reps in detail or apply personalized progressive overload — it is more of a video library with some structure than a true AI workout system.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-2">5. Fitbod</h3>
          <p className="text-cyan-400 text-sm mb-3 uppercase tracking-widest font-mono">Best for: Gym beginners who want variety in their programs</p>
          <p className="text-[#B4B4B4] leading-relaxed mb-4">
            Fitbod generates each workout session fresh based on what you last trained and what equipment is available. For beginners, this can mean a lot of variety — which is both good (staying interested) and bad (lack of a consistent program to build habits around). It is better once you have a few months of experience and want more exercise diversity.
          </p>
        </section>

        {/* Section 4 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">What to Look for as a Beginner</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          When evaluating any AI fitness app as a beginner, prioritize in this order:
        </p>
        <ol className="text-[#B4B4B4] space-y-3 mb-6 list-decimal pl-6">
          <li><strong className="text-white">Structured program, not just a workout generator</strong> — you want a plan that repeats and progresses over weeks, not a new random workout each session.</li>
          <li><strong className="text-white">Clear exercise instructions</strong> — at minimum, a written description. Video is better. The AI coach being able to answer your questions is better still.</li>
          <li><strong className="text-white">Onboarding that captures your starting point</strong> — the app should ask about experience level, injuries, goals, and equipment before giving you anything.</li>
          <li><strong className="text-white">Automatic progression</strong> — you should not have to decide when to increase weight. The app should handle that based on your logs.</li>
          <li><strong className="text-white">Free tier or trial</strong> — do not pay for an annual subscription before you know if the app fits how you want to train.</li>
        </ol>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          Avoid advanced apps designed for experienced athletes. JuggernautAI (powerlifting periodization) and SensAI (HRV-driven programming) are excellent products — for people who already know what they are doing.
        </p>

        {/* Section 5 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">How AI Specifically Helps Beginners</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          The biggest problem for beginners is not motivation — it is decision fatigue. What should I do today? How many sets? How heavy? Am I doing enough? AI fitness apps remove these decisions entirely. You show up, follow the plan, and log what you did.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          The second problem AI solves is progression math. Knowing when and how to increase weight is a skill experienced lifters develop over years. A good <Link href="/ai-workout-planner" className="text-cyan-400 hover:underline">AI workout planner</Link> runs the math automatically — you hit your target reps, it adds weight next time. You stay in the optimal challenge zone without overthinking it.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          Logging also builds the habit of awareness. Beginners who track their workouts consistently — even just the basics — show up more regularly than those who do not. The act of logging is part of the system.
        </p>

        {/* Section 6 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Beginner Mistakes with AI Fitness Apps</h2>
        <ul className="text-[#B4B4B4] space-y-4 mb-10">
          <li>
            <strong className="text-white">Skipping onboarding.</strong> The AI builds your program from your onboarding answers. If you rush through it or exaggerate your experience level, you will get a program that does not fit you. Be accurate.
          </li>
          <li>
            <strong className="text-white">Not logging workouts.</strong> If you do not log your sessions, the AI cannot adapt. You lose the core benefit of using an AI app over a static PDF program. Log every set, even when it feels tedious.
          </li>
          <li>
            <strong className="text-white">Switching apps every week.</strong> Progress is invisible in the first two to three weeks. Most beginners who quit say the app was not working — but they quit before the adaptation phase. Pick one app and use it for at least four weeks before evaluating.
          </li>
          <li>
            <strong className="text-white">Ignoring nutrition.</strong> Training alone rarely produces the results beginners expect. If you are using a workout-only app, consider adding a calorie tracking layer — or use an app like Fitnivo that handles both.
          </li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">First 4 Weeks: What to Expect</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          Week 1–2: Soreness is normal. The weights will feel easy — that is correct for a beginner program. The goal in the first two weeks is learning the movements and building the logging habit, not pushing to failure.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          Week 3–4: You will start to notice the weight increasing. This is the AI progressive overload working. You may feel the sessions getting harder even though you have more experience with the movements.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          After 4 weeks: Visible changes are unlikely this early, but improved energy, better sleep, and greater strength are common. Body composition changes take 6–12 weeks of consistent effort. The app is on track if you are logging consistently and the weights are going up.
        </p>

        {/* FAQ */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Frequently Asked Questions</h2>
        <div className="space-y-6 mb-12">
          {[
            {
              q: 'Can beginners use AI fitness apps?',
              a: 'Yes. AI fitness apps are well-suited to beginners because they remove the need to know how to design a workout. You input your goal, experience level, and available equipment, and the app builds a structured program for you — no prior knowledge required.',
            },
            {
              q: 'What is the best AI fitness app for someone who has never worked out?',
              a: 'For absolute beginners, Fitnivo and Freeletics are good starting points. Fitnivo covers workouts and nutrition together so you do not need two apps. Freeletics has solid beginner bodyweight programs. Nike Training Club is a strong free option with video guidance.',
            },
            {
              q: 'Do AI fitness apps teach you proper form?',
              a: 'Most AI fitness apps include exercise descriptions and some include demo videos or GIFs. They cannot watch you and correct your form in real time. For complex movements like squats and deadlifts, beginners should also seek video resources or an in-person session to check form basics.',
            },
            {
              q: 'Is Fitnivo good for beginners?',
              a: 'Yes. Fitnivo asks about your experience level during onboarding and builds workouts accordingly. The AI coach can also answer questions about exercises and explain why certain movements are in your plan. The free tier gives beginners real functionality without upfront cost.',
            },
            {
              q: 'Should beginners use a personal trainer instead of an AI app?',
              a: 'A human trainer adds real-time form correction and live accountability that an AI app cannot match. However, a personal trainer costs significantly more. For most beginners with a standard goal like getting fit or losing weight, an AI fitness app provides enough structure to start safely.',
            },
            {
              q: 'How long before I see results using an AI fitness app?',
              a: 'Visible changes typically appear within 4–8 weeks of consistent training and adequate nutrition. Strength gains and improved energy often come faster, within 2–4 weeks. Results depend on consistency, diet, sleep, and starting point — the app is a tool, not a guarantee.',
            },
            {
              q: 'What equipment do I need to start with an AI fitness app?',
              a: 'None is required. Most AI fitness apps including Fitnivo and Freeletics support bodyweight-only programs. If you have dumbbells or access to a gym, the app will incorporate them. You select your available equipment during onboarding.',
            },
            {
              q: 'Are AI fitness apps safe for beginners?',
              a: 'Generally yes, when you input your information accurately. The app sets appropriate starting weights and volume based on your experience level. Start lighter than you think you need to, and flag any pain or injury to your doctor before starting a new exercise program.',
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
          <h3 className="text-2xl font-bold mb-3">Start with a plan that builds around you</h3>
          <p className="text-[#B4B4B4] mb-4">
            Fitnivo generates a structured beginner workout program from your goal, equipment, and schedule — and tracks nutrition in the same app. Free tier: unlimited workout logger, 3 AI food scans/day, 15 AI coach messages/day. Pro: $10/month or $60/year.
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
          <li><Link href="/blog/what-is-an-ai-fitness-coach" className="hover:underline">What is an AI fitness coach?</Link></li>
          <li><Link href="/blog/how-ai-fitness-coaches-work" className="hover:underline">How AI fitness coaches work</Link></li>
          <li><Link href="/blog/best-ai-fitness-apps-2026" className="hover:underline">Best AI fitness apps in 2026 (full comparison)</Link></li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}
