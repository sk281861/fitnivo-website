import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

export const metadata: Metadata = {
  title: 'AI Fitness Coach & Personal Trainer | Fitnivo',
  description:
    'Get a personalized AI fitness coach that creates workouts around your goals, tracks progress, plans nutrition, and adapts as you improve. Free tier with 3 AI food scans/day and 15 AI coach messages/day; Pro is $10/month or $60/year.',
  keywords: [
    'AI fitness coach',
    'AI personal trainer',
    'AI fitness trainer',
    'AI gym trainer',
    'AI fitness coaching',
    'personal AI trainer',
    'AI workout generator',
    'AI fitness and nutrition coach',
  ],
  alternates: {
    canonical: 'https://fitnivo.in/ai-fitness-coach',
  },
  openGraph: {
    title: 'AI Fitness Coach & Personal Trainer | Fitnivo',
    description:
      'A personalized AI fitness coach that adapts your workouts, tracks calories and macros, and helps you stay consistent.',
    url: 'https://fitnivo.in/ai-fitness-coach',
    type: 'website',
  },
};

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fitnivo AI Fitness Coach',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Android, iOS',
  description:
    'AI fitness coach and personal trainer that creates personalized workouts, tracks calories and macros, scans meals with AI, and adapts as you progress.',
  url: 'https://fitnivo.in/ai-fitness-coach',
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
    {
      '@type': 'Question',
      name: 'What is an AI fitness coach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI fitness coach is a digital fitness assistant that uses information about your goals, training, and progress to provide personalized workout and fitness guidance. It can plan workouts, track sets and reps, and adjust your training as you progress.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Fitnivo an AI personal trainer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Fitnivo acts as a personal AI trainer by helping you create personalized workouts, track your training, monitor progress, and get fitness guidance whenever you need it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an AI fitness coach create workout plans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Fitnivo creates personalized workouts based on your goals, experience level, available equipment, and training history.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an AI personal trainer help with nutrition?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Fitnivo combines fitness coaching with calorie, macro, and meal tracking so your nutrition is managed alongside your training in one app.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an AI fitness coach replace a personal trainer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI coach provides convenient workout planning, tracking, and general fitness guidance. It is a strong digital alternative for people who want structured training without booking ongoing one-to-one sessions, but it is not a substitute for a qualified professional who can physically assess you in person.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is an AI fitness coach good for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI coaching helps beginners understand what workouts to perform, how to structure their training, and how to track progress from the very first session.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use an AI fitness coach at the gym?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Fitnivo builds workouts around the equipment available to you and lets you log exercises, sets, reps, and weight during your gym session.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an AI fitness coach help me lose weight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI fitness app helps you structure workouts and monitor calories, macros, and progress. Sustainable weight change also depends on nutrition consistency, activity, sleep, and other individual factors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an AI fitness coach help build muscle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Fitnivo helps you follow structured resistance training, track your workouts, and monitor progression over time — the foundation of muscle growth.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Fitnivo different from an AI workout generator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A workout generator primarily creates a routine. Fitnivo combines workout generation with workout tracking, nutrition tracking, meal planning, AI food scanning, and ongoing coaching in one app.',
      },
    },
  ],
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'AI Fitness Coach', url: 'https://fitnivo.in/ai-fitness-coach' },
]);

const schemaJson = JSON.stringify([softwareAppSchema, faqSchema, breadcrumbSchema]);

const ecosystemFeatures = [
  {
    icon: '🏋️',
    title: 'AI Workout Coach',
    body: 'Get personalized workouts based on your goal, experience, and available equipment.',
    href: '/ai-workout-planner',
  },
  {
    icon: '📈',
    title: 'Workout Tracking',
    body: 'Log sets, reps, and weights while building a history of your training.',
    href: '/ai-fitness-coach',
  },
  {
    icon: '🍎',
    title: 'AI Food Scanner',
    body: 'Take a photo of your meal and get an estimate of calories and macronutrients.',
    href: '/ai-food-scanner',
  },
  {
    icon: '🥗',
    title: 'AI Nutrition Coach',
    body: 'Track your calories and macros with nutrition guidance alongside your training.',
    href: '/ai-nutrition-coach',
  },
  {
    icon: '🍽️',
    title: 'Personalized Meal Plans',
    body: 'Build meals around your calorie and protein targets.',
    href: '/ai-meal-planner',
  },
  {
    icon: '💬',
    title: 'AI Fitness Coach',
    body: 'Ask questions about workouts, nutrition, and goals whenever you need guidance.',
    href: '/ai-fitness-coach',
  },
];

const goals = [
  { title: 'Build Muscle', body: 'Follow structured resistance training and track progressive overload.' },
  { title: 'Lose Body Fat', body: 'Combine workout tracking with calorie and macro awareness.' },
  { title: 'Get Stronger', body: 'Track your lifts and monitor progress over time.' },
  { title: 'Improve Fitness', body: 'Build a consistent routine around your schedule and ability.' },
  { title: 'Stay Consistent', body: 'Use your workout history and progress to stay accountable.' },
];

const steps = [
  { n: '01', title: 'Tell Fitnivo what you’re working toward', body: 'Choose your goal, experience, available equipment, and training preferences.' },
  { n: '02', title: 'Get a personalized workout', body: 'Fitnivo creates a workout designed around your individual goals instead of a generic routine.' },
  { n: '03', title: 'Log your workout', body: 'Track exercises, sets, reps, weight, workout history, and personal records.' },
  { n: '04', title: 'Keep progressing', body: 'Your workout history gives Fitnivo context so future training can be adjusted.' },
  { n: '05', title: 'Connect training with nutrition', body: 'Track calories, protein, carbs, and fats alongside your workouts.' },
];

const faqs = [
  { q: 'What is an AI fitness coach?', a: 'An AI fitness coach is a digital fitness assistant that uses information about your goals, training, and progress to provide personalized workout and fitness guidance.' },
  { q: 'Is Fitnivo an AI personal trainer?', a: 'Yes. Fitnivo acts as a personal AI trainer by helping you create personalized workouts, track your training, monitor progress, and get fitness guidance.' },
  { q: 'Can an AI fitness coach create workout plans?', a: 'Yes. Fitnivo creates personalized workouts based on factors such as your goals, experience, and available equipment.' },
  { q: 'Can an AI personal trainer help with nutrition?', a: 'Yes. Fitnivo combines fitness coaching with calorie, macro, and meal tracking so your nutrition can be managed alongside your training.' },
  { q: 'Can an AI fitness coach replace a personal trainer?', a: 'An AI coach can provide convenient workout planning, tracking, and general fitness guidance, but it is not a complete replacement for a qualified professional who can physically assess you and provide individualized supervision.' },
  { q: 'Is an AI fitness coach good for beginners?', a: 'Yes. AI coaching can help beginners understand what workouts to perform, how to structure training, and how to track progress.' },
  { q: 'Can I use an AI fitness coach at the gym?', a: 'Yes. Fitnivo can help create workouts around the equipment available to you and lets you track your exercises, sets, reps, and weight.' },
  { q: 'Can an AI fitness coach help me lose weight?', a: 'An AI fitness app can help you structure workouts and monitor calories, macros, and progress. Sustainable weight management also depends on nutrition, activity, sleep, and other individual factors.' },
  { q: 'Can an AI fitness coach help build muscle?', a: 'Yes. Fitnivo can help you follow structured resistance training, track your workouts, and monitor progression over time.' },
  { q: 'What makes Fitnivo different from an AI workout generator?', a: 'An AI workout generator primarily creates a workout. Fitnivo combines workout generation with workout tracking, nutrition tracking, meal planning, and ongoing AI fitness guidance.' },
  { q: 'Does Fitnivo apply progressive overload automatically?', a: 'Yes. Fitnivo reads your logged sets, reps, and perceived effort to decide whether to increase weight or volume, hold the load, or add a deload week — adapting your plan to how you actually train.' },
];

export default function AIFitnessCoachPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 border-b border-[#1f1f1f] bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60">AI Fitness Coach</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 border border-cyan-400 bg-cyan-950/20 px-3 py-1 mb-6 text-cyan-400 text-xs font-mono tracking-widest uppercase">
                AI Fitness &amp; Nutrition Coach
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
                AI Fitness Coach That Adapts to You
              </h1>

              <p className="text-lg text-[#B4B4B4] mb-6 leading-relaxed max-w-2xl">
                Meet Fitnivo, your AI fitness coach and personal trainer in your pocket. Get personalized workouts, track your sets and progress, manage calories and macros, and get guidance that evolves with your fitness goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
                  className="px-8 py-4 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300 transition-colors text-center"
                >
                  Start Training Free
                </a>
                <a
                  href="#how-it-works"
                  className="px-8 py-4 border border-[#262626] text-white hover:border-cyan-400 font-semibold uppercase tracking-wider bg-transparent transition-colors text-center"
                >
                  See How It Works
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <Image
                  src="/images/mockup/ai-fitness-coach-chat-workout-planner.webp"
                  alt="Fitnivo AI fitness coach chat interface generating a personalized workout plan"
                  width={400}
                  height={800}
                  priority
                  className="w-full h-auto rounded-2xl border border-[#262626]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is an AI Fitness Coach */}
      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Is an AI Fitness Coach?</h2>
          <p className="text-[#B4B4B4] text-lg leading-relaxed mb-6">
            An AI fitness coach is a digital personal trainer that uses information about your goals, fitness level, workouts, preferences, and progress to provide personalized fitness guidance. Instead of following the same workout plan every week, an AI fitness coach helps you decide:
          </p>
          <ul className="space-y-3 text-[#B4B4B4] mb-6">
            {[
              'What workout should I do today?',
              'Which exercises fit my goal?',
              'How many sets and reps should I perform?',
              'What should I do if I miss a workout?',
              'How should I progress over time?',
              'How should my nutrition support my goal?',
              'Am I staying on track?',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#B4B4B4] text-lg leading-relaxed">
            Fitnivo brings these pieces together in one fitness app, combining AI workout guidance, workout tracking, calorie and macro tracking, meal planning, and AI coaching.
          </p>
        </div>
      </section>

      {/* More Than an AI Workout Generator */}
      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">More Than an AI Workout Generator</h2>
          <p className="text-[#B4B4B4] text-lg leading-relaxed mb-10 max-w-3xl">
            A workout generator can give you a routine. An AI fitness coach should help you understand what to do next. With Fitnivo, your workouts are built around factors such as:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { t: 'Your goal', b: 'Muscle gain, fat loss, strength, general fitness, or improving consistency.' },
              { t: 'Your experience', b: 'Your training history and current ability influence the workouts you follow.' },
              { t: 'Your equipment', b: 'Train at a gym, at home, or with limited equipment.' },
              { t: 'Your workout history', b: 'Your logged sets, reps, weights, and completed workouts provide context.' },
              { t: 'Your progress', b: 'As your training changes, your plan can change with it.' },
            ].map((x) => (
              <div key={x.t} className="border border-[#1f1f1f] bg-[#050505] p-6">
                <h3 className="text-white font-bold mb-2">{x.t}</h3>
                <p className="text-sm text-[#B4B4B4] leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (5 steps) */}
      <section id="how-it-works" className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Personal AI Trainer, Built Around Your Goals</h2>
          <p className="text-[#B4B4B4] text-lg mb-12 max-w-3xl">
            Five steps from download to your first fully personalized workout.
          </p>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.n} className="border border-[#1f1f1f] bg-[#050505] p-6 flex gap-6 items-start">
                <div className="text-cyan-400 font-mono text-xl font-bold w-12 flex-shrink-0">{s.n}</div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-[#B4B4B4]">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progressive Overload */}
      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Automatic Progressive Overload</h2>
          <p className="text-[#B4B4B4] text-lg leading-relaxed mb-10 max-w-3xl">
            Fitnivo watches how you train and adapts the next session automatically. You don&apos;t need to calculate your own progressions — the AI reads your logged sets, reps, and perceived effort, then decides what changes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '⬆️', t: 'Progress when ready', b: 'Clear your target reps with good form? Next session adds weight or volume.' },
              { icon: '↔️', t: 'Hold when needed', b: 'Miss reps or log a hard session? Load stays the same while you adapt.' },
              { icon: '⬇️', t: 'Deload automatically', b: 'Accumulated fatigue detected from your history? A deload week is added before it becomes a problem.' },
            ].map((x) => (
              <div key={x.t} className="border border-[#1f1f1f] bg-[#050505] p-6">
                <div className="text-3xl mb-4">{x.icon}</div>
                <h3 className="text-white font-bold mb-2">{x.t}</h3>
                <p className="text-sm text-[#B4B4B4] leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
          <p className="text-[#B4B4B4] mt-6 text-sm">
            The result: your training style becomes your training plan. Fitnivo adapts to how <em>you</em> actually train — not the average user.
          </p>
        </div>
      </section>

      {/* Ecosystem: More than workouts */}
      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your AI Fitness Coach Covers More Than Workouts</h2>
          <p className="text-[#B4B4B4] text-lg mb-12 max-w-3xl">
            Fitnivo differentiates from workout-only AI apps by pairing training with nutrition, food scanning, and coaching in one place.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemFeatures.map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="border border-[#1f1f1f] bg-[#050505] p-6 hover:border-cyan-400 transition-colors group"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors">{f.title}</h3>
                <p className="text-sm text-[#B4B4B4] leading-relaxed">{f.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Personal Trainer */}
      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Personal Trainer Without the Gym Appointment</h2>
          <p className="text-[#B4B4B4] text-lg leading-relaxed mb-6">
            A traditional personal trainer works with you during scheduled sessions. An AI personal trainer gives you access to fitness guidance whenever you need it. With Fitnivo you can:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#B4B4B4]">
            {['Plan your workout', 'Track your training', 'Review your progress', 'Get exercise guidance', 'Track nutrition', 'Ask fitness questions', 'Adjust your routine around your schedule'].map((x) => (
              <li key={x} className="flex gap-3">
                <span className="text-cyan-400">✓</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#B4B4B4] text-lg leading-relaxed mt-6">
            Your coach doesn&apos;t disappear when your workout ends.
          </p>
        </div>
      </section>

      {/* AI Gym Trainer */}
      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your AI Gym Trainer</h2>
          <p className="text-[#B4B4B4] text-lg leading-relaxed mb-4">
            Whether you&apos;re training at a commercial gym or working out at home, Fitnivo can help you build a routine around the equipment available to you.
          </p>
          <p className="text-[#B4B4B4] text-lg leading-relaxed mb-4">
            Instead of wondering &quot;what should I train today?&quot;, use Fitnivo to create a structured session based on your goal and training history — then log your performance and build from there.
          </p>
          <div className="mt-8">
            <Image
              src="/images/mockup/equipment-aware-gym-workout-logger.webp"
              alt="Fitnivo equipment-aware gym workout logger showing exercises, sets, and reps"
              width={800}
              height={450}
              className="w-full h-auto rounded-xl border border-[#262626]"
            />
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">An AI Coach for Your Fitness Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((g) => (
              <div key={g.title} className="border border-[#1f1f1f] bg-[#050505] p-6">
                <h3 className="text-white font-bold text-lg mb-2">{g.title}</h3>
                <p className="text-sm text-[#B4B4B4] leading-relaxed">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalization (inputs → AI → next action) */}
      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How Fitnivo Personalizes Your Fitness Coaching</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-[#1f1f1f] bg-[#050505] p-6">
              <div className="text-xs uppercase tracking-widest text-cyan-400 mb-3">Inputs</div>
              <ul className="text-sm text-[#B4B4B4] space-y-2">
                <li>Fitness goal</li>
                <li>Training experience</li>
                <li>Available equipment</li>
                <li>Workout history</li>
                <li>Sets, reps, and weight</li>
                <li>Nutrition data</li>
                <li>Training preferences</li>
              </ul>
            </div>
            <div className="border border-cyan-400 bg-cyan-950/10 p-6">
              <div className="text-xs uppercase tracking-widest text-cyan-400 mb-3">AI Coaching</div>
              <p className="text-sm text-[#B4B4B4] leading-relaxed">
                Fitnivo uses your information to provide personalized recommendations that reflect your current goal and progress.
              </p>
            </div>
            <div className="border border-[#1f1f1f] bg-[#050505] p-6">
              <div className="text-xs uppercase tracking-widest text-cyan-400 mb-3">Your Next Action</div>
              <p className="text-sm text-[#B4B4B4] leading-relaxed">
                You get a workout, nutrition guidance, or coaching recommendation that is relevant to your current goal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Fitness Coach vs Traditional Personal Trainer</h2>
          <p className="text-[#B4B4B4] mb-8 max-w-3xl">
            An AI coach is a convenient digital alternative for people who want structured guidance without paying for ongoing one-to-one training. Both have their place.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-[#1f1f1f] text-sm">
              <thead>
                <tr className="bg-[#0a0a0a] border-b border-[#1f1f1f]">
                  <th className="p-4 font-bold">&nbsp;</th>
                  <th className="p-4 font-bold text-cyan-400">AI Fitness Coach</th>
                  <th className="p-4 font-bold">Traditional Personal Trainer</th>
                </tr>
              </thead>
              <tbody className="text-[#B4B4B4]">
                {[
                  ['Available', 'Anytime', 'Scheduled sessions'],
                  ['Personalized workouts', 'Yes', 'Yes'],
                  ['Workout tracking', 'Yes', 'Depends'],
                  ['Nutrition tracking', 'Yes', 'Depends'],
                  ['Progress history', 'Yes', 'Depends'],
                  ['Cost', 'Lower', 'Usually higher'],
                  ['Human interaction', 'AI', 'Human'],
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
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-cyan-950/20 to-black">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Train With Your AI Fitness Coach?</h2>
          <p className="text-[#B4B4B4] text-lg mb-8">Your workouts. Your nutrition. Your progress. One AI fitness coach.</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
            className="inline-block px-10 py-4 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300 transition-colors"
          >
            Start Training With Fitnivo
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
