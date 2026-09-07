'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// ── Animation variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

// ── Reusable SVG icon (Heroicons stroke style) ──────────────────────────────
function Ico({ d, size = 20 }: { d: string | string[]; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      {(Array.isArray(d) ? d : [d]).map((p, i) => <path key={i} d={p} />)}
    </svg>
  );
}

const I = {
  dumbbell:    ['M6.5 6.5h11m-11 11h11M5 12h14', 'M3 8.5a2 2 0 1 0 0-3 2 2 0 0 0 0 3Zm0 10a2 2 0 1 0 0-3 2 2 0 0 0 0 3Zm18-10a2 2 0 1 0 0-3 2 2 0 0 0 0 3Zm0 10a2 2 0 1 0 0-3 2 2 0 0 0 0 3Z'],
  chartBar:    'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
  camera:      ['M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z', 'M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z'],
  leaf:        ['M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.249 2.249 0 0 0 17.5 15.75H8.25a2.25 2.25 0 0 0-2.14 1.558L5.55 19.5m14.44-3.692a9.02 9.02 0 0 0 .31-2.308m-17.5 2.308a9.02 9.02 0 0 1-.286-2.258'],
  utensils:    ['M12 2v20', 'M7.5 4.5C7.5 4.5 6 7 6 9.5c0 1.657.896 3.12 2.25 3.888V20.5', 'M16.5 2v6a1.5 1.5 0 0 1-3 0V2'],
  chat:        'M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z',
  sparkles:    ['M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z', 'M18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z'],
  trendUp:     'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
  trendDown:   'M2.25 6 9 12.75l4.306-4.306a11.95 11.95 0 0 1 5.814 5.518l2.74 1.22m0 0-5.94 2.281m5.94-2.28-2.28-5.941',
  pauseCircle: ['M15.75 5.25v13.5', 'M8.25 5.25v13.5'],
  bolt:        'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z',
  fire:        ['M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z', 'M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z'],
  shield:      'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
  star:        'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z',
  target:      ['M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z', 'M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z', 'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'],
  check:       'M4.5 12.75l6 6 9-13.5',
  arrow:       'M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3',
  plus:        'M12 4.5v15m7.5-7.5h-15',
};

// ── Data ────────────────────────────────────────────────────────────────────
const ecosystemCards = [
  { icon: 'dumbbell', title: 'AI Workout Coach', body: 'Get personalized workouts built around your goal, experience, and equipment — not a generic template.', href: '/ai-workout-planner' },
  { icon: 'chartBar', title: 'Workout Tracking', body: 'Log sets, reps, weights, and personal records while building a history that improves future sessions.', href: '/ai-fitness-coach' },
  { icon: 'camera', title: 'AI Food Scanner', body: 'Photograph any meal and get a calorie and macro estimate instantly. 3 scans free daily.', href: '/ai-food-scanner' },
  { icon: 'leaf', title: 'AI Nutrition Coach', body: 'Track calories and macros with guidance that connects your food choices to your training goals.', href: '/ai-nutrition-coach' },
  { icon: 'utensils', title: 'Personalized Meal Plans', body: 'Build meals around your calorie and protein targets. Adapted to your preferences.', href: '/ai-meal-planner' },
  { icon: 'chat', title: 'Always-On AI Coach', body: 'Ask anything about workouts, nutrition, or goals. Your coach is available whenever you need it.', href: '/ai-fitness-coach' },
] as const;

const overloadCards = [
  { icon: 'trendUp',     label: 'Progress',  title: 'Add load when ready',      body: 'Clear your target reps with good form? Fitnivo adds weight or volume to your next session automatically.' },
  { icon: 'pauseCircle', label: 'Hold',       title: 'Hold when adapting',       body: 'Missed reps or logged a hard session? Load stays the same while your body catches up.' },
  { icon: 'trendDown',   label: 'Deload',     title: 'Deload before breakdown',  body: 'Accumulated fatigue detected in your logs? A deload week is inserted before it becomes an injury.' },
];

const goals = [
  { icon: 'bolt',    title: 'Build Muscle',     body: 'Structured resistance training and progressive overload — the actual mechanism of muscle growth.' },
  { icon: 'fire',    title: 'Lose Body Fat',     body: 'Combine workout programming with calorie and protein tracking to stay in a deficit without losing muscle.' },
  { icon: 'star',    title: 'Get Stronger',      body: 'Track your lifts session by session and watch numbers move in the right direction over weeks.' },
  { icon: 'target',  title: 'Improve Fitness',   body: 'Build a consistent routine around your schedule, ability, and available equipment.' },
  { icon: 'shield',  title: 'Stay Consistent',   body: 'Your workout history and progress log give you tangible proof that showing up is working.' },
];

const steps = [
  { n: '01', title: 'Tell Fitnivo your goal', body: 'Choose muscle gain, fat loss, strength, or fitness. Set your experience, equipment, and training days.' },
  { n: '02', title: 'Get a personalized workout', body: 'Fitnivo creates a plan built for you — not the average user. No generic templates.' },
  { n: '03', title: 'Log every session', body: 'Track exercises, sets, reps, weight, and perceived effort while you train.' },
  { n: '04', title: 'Adapt and progress', body: 'Fitnivo reads your logs to decide when to add load, hold, or deload — automatically.' },
  { n: '05', title: 'Connect nutrition', body: 'Track calories, protein, carbs, and fats alongside your training in the same app.' },
];

const compareRows = [
  ['Available', 'Anytime, on your phone', 'Scheduled sessions only'],
  ['Personalized workouts', '✓', '✓'],
  ['Workout tracking', '✓ (built-in)', 'Depends'],
  ['Nutrition tracking', '✓ (built-in)', 'Depends'],
  ['Progress history', '✓ (automatic)', 'Depends'],
  ['Cost', 'Free · $10/mo Pro', 'Usually $50–150/session'],
  ['Human interaction', 'AI-powered', 'Human trainer'],
];

const whyItems = [
  'What workout should I do today?',
  'How many sets and reps for my goal?',
  'What to do if I missed a session?',
  'How should I progress over time?',
  'How does my nutrition support my goal?',
  'Am I actually making progress?',
];

const trainerPoints = [
  'Plan your workout', 'Track your training', 'Review your progress',
  'Get exercise guidance', 'Track nutrition', 'Ask fitness questions', 'Adjust around your schedule',
];

export default function PageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
    { q: 'What is an AI fitness coach?', a: 'An AI fitness coach is a digital assistant that uses your goals, training history, and progress to deliver personalized workout guidance, tracking, and nutrition coaching.' },
    { q: 'Can an AI fitness coach create workout plans?', a: 'Yes. Fitnivo creates personalized workouts based on your goal, experience, available equipment, and training history — not a generic routine.' },
    { q: 'Is Fitnivo good for beginners?', a: 'Yes. Fitnivo tells beginners exactly what to do, how many sets and reps, and how to track progress from the very first session.' },
    { q: 'Can an AI personal trainer help with nutrition?', a: 'Yes. Fitnivo combines workout coaching with calorie, macro, and meal tracking so both training and nutrition are managed in one app.' },
    { q: 'Can I use Fitnivo at the gym?', a: 'Yes. Fitnivo builds workouts around your available equipment — gym, home, or minimal gear — and lets you log everything in-session.' },
    { q: 'Can Fitnivo help me lose weight?', a: 'Fitnivo helps structure both sides of weight loss: workout programming to build or preserve muscle, and calorie tracking to manage intake.' },
    { q: 'Can Fitnivo help build muscle?', a: 'Yes. Structured resistance training, progressive overload tracking, and protein monitoring — the foundations of muscle growth.' },
    { q: 'Does Fitnivo apply progressive overload automatically?', a: 'Yes. Fitnivo reads your logged sets, reps, and perceived effort then decides whether to add weight, hold, or schedule a deload week.' },
    { q: 'What makes Fitnivo different from an AI workout generator?', a: 'A generator creates a routine once. Fitnivo combines generation with tracking, nutrition, food scanning, and ongoing adaptive coaching in one app.' },
    { q: 'Can Fitnivo replace a personal trainer?', a: 'Fitnivo is a strong, affordable alternative for structured guidance and tracking. For hands-on form correction or medical rehab, a qualified professional is still recommended.' },
  ];

  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FF6A00]/[0.07] rounded-full blur-[120px]" />
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#FF6A00]/[0.05] rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-10">
            <Link href="/" className="text-white/50 hover:text-[#FF6A00] transition">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-white/60">AI Fitness Coach</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#FF6A00]/40 bg-[#FF6A00]/10 px-4 py-1.5 mb-6">
                <Ico d={I.sparkles} size={14} />
                <span className="text-[#FF6A00] text-xs font-bold font-mono tracking-widest uppercase">AI Fitness &amp; Nutrition Coach</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white mb-6">
                Your Personal<br />
                <span className="text-[#FF6A00]">AI Trainer</span><br />
                in Your Pocket
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-white/65 mb-8 leading-relaxed max-w-lg">
                Personalized workouts, adaptive progressive overload, AI food scanning, and macro tracking — all in one app that learns from how you actually train.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-8">
                <motion.a
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#FF6A00] text-black font-bold text-sm hover:bg-[#FF8524] transition shadow-lg shadow-[#FF6A00]/25"
                >
                  Start Training Free <Ico d={I.arrow} size={16} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/15 text-white hover:border-[#FF6A00]/50 font-semibold text-sm transition"
                >
                  See How It Works
                </motion.a>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-xs text-white/50 font-mono">
                {['Free tier — no credit card', '3 AI food scans/day', '15 AI coach messages/day'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />{t}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: video + floating mascot */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_-20px_rgba(255,106,0,0.35)]">
                <video
                  autoPlay muted loop playsInline
                  className="w-full h-auto block"
                  src="/videos/AI-personal-trainer.mp4"
                />
              </div>
              {/* Mascot: pointing at video on desktop */}
              <div className="hidden xl:block absolute -left-24 bottom-0 w-44 pointer-events-none">
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                  <Image src="/images/mascot/male-pointing-transparent.png" alt="" width={176} height={352} className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(255,106,0,0.3)]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─────────────────────────────────────────────────── */}
      <div className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-3 gap-4 text-center">
          {[
            { val: 'Free', label: 'No credit card needed' },
            { val: 'Real-time', label: 'Adapts to your logs' },
            { val: 'All-in-one', label: 'Workouts + nutrition' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-black text-[#FF6A00]">{s.val}</div>
              <div className="text-xs text-white/45 font-mono mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── WHAT IS ─────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-white mb-4">What Is an AI Fitness Coach?</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-6">
              An AI fitness coach uses your goals, training history, and progress data to answer the exact questions a personal trainer would — without the appointment.
            </motion.p>
            <motion.ul variants={stagger} className="space-y-3">
              {whyItems.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-[#FF6A00]/15 border border-[#FF6A00]/30 inline-flex items-center justify-center text-[#FF6A00]">
                    <Ico d={I.check} size={11} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={scaleIn} className="relative flex justify-center">
            <Image src="/images/mascot/female-standing-transparent.png" alt="Fitnivo AI coach mascot" width={320} height={480} className="w-64 lg:w-72 h-auto object-contain drop-shadow-[0_30px_60px_rgba(255,106,0,0.25)]" />
            <div className="absolute inset-x-[20%] bottom-0 h-8 bg-[#FF6A00]/20 blur-2xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ─── ECOSYSTEM CARDS ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={stagger} className="mb-12">
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-widest font-mono text-[#FF6A00] mb-3">Full Ecosystem</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-white mb-4">More Than Just a Workout Generator</motion.h2>
            <motion.p variants={fadeUp} className="text-white/55 text-lg max-w-2xl">Fitnivo pairs training with nutrition, food scanning, and coaching — all in one place.</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ecosystemCards.map((f) => (
              <motion.div key={f.title} variants={fadeUp} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link href={f.href} className="group relative flex flex-col h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#FF6A00]/40 hover:bg-white/[0.05] transition-all overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
                  <div className="relative mb-4 w-10 h-10 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/25 flex items-center justify-center text-[#FF6A00] group-hover:bg-[#FF6A00]/25 transition-colors">
                    <Ico d={I[f.icon]} size={18} />
                  </div>
                  <h3 className="relative font-bold text-white mb-2 group-hover:text-[#FF6A00] transition-colors">{f.title}</h3>
                  <p className="relative text-sm text-white/55 leading-relaxed flex-1">{f.body}</p>
                  <div className="relative mt-4 text-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs font-mono uppercase tracking-wider">
                    Learn more <Ico d={I.arrow} size={12} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={stagger} className="mb-12">
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-widest font-mono text-[#FF6A00] mb-3">From Download to First Workout</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-white">Your AI Trainer in 5 Steps</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} variants={stagger} className="relative space-y-4">
            {/* Timeline line */}
            <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-[#FF6A00]/60 via-[#FF6A00]/20 to-transparent hidden md:block" />
            {steps.map((s) => (
              <motion.div key={s.n} variants={fadeUp} whileHover={{ x: 4 }}
                className="relative flex gap-6 items-start rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 hover:border-[#FF6A00]/30 hover:bg-white/[0.04] transition-all group">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/25 flex items-center justify-center">
                  <span className="text-[#FF6A00] font-black font-mono text-lg group-hover:scale-110 transition-transform inline-block">{s.n}</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-white text-base mb-1">{s.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PROGRESSIVE OVERLOAD ────────────────────────────────────────── */}
      <section className="py-20 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={stagger} className="mb-12">
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-widest font-mono text-[#FF6A00] mb-3">Smart Progression</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-white mb-4">Automatic Progressive Overload</motion.h2>
            <motion.p variants={fadeUp} className="text-white/55 max-w-2xl leading-relaxed">Fitnivo watches how you train and adapts the next session. You don&apos;t calculate progressions — the AI does it from your logged data.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} variants={stagger} className="grid md:grid-cols-3 gap-4">
            {overloadCards.map((c, i) => (
              <motion.div key={c.title} variants={scaleIn} whileHover={{ y: -6 }}
                className={`relative rounded-2xl p-6 border overflow-hidden ${i === 0 ? 'border-emerald-500/30 bg-emerald-500/[0.04]' : i === 1 ? 'border-white/10 bg-white/[0.03]' : 'border-amber-500/30 bg-amber-500/[0.04]'}`}>
                <div className={`mb-4 w-10 h-10 rounded-xl flex items-center justify-center ${i === 0 ? 'bg-emerald-500/15 text-emerald-400' : i === 1 ? 'bg-white/10 text-white/60' : 'bg-amber-500/15 text-amber-400'}`}>
                  <Ico d={I[c.icon as keyof typeof I]} size={18} />
                </div>
                <div className={`text-[10px] font-mono uppercase tracking-widest mb-2 ${i === 0 ? 'text-emerald-400' : i === 1 ? 'text-white/40' : 'text-amber-400'}`}>{c.label}</div>
                <h3 className="font-bold text-white mb-2">{c.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── AI PERSONAL TRAINER ─────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-widest font-mono text-[#FF6A00] mb-3">No Appointment Needed</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-white mb-5">AI Personal Trainer — Always Available</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-8">
              A traditional personal trainer is available during scheduled sessions. With Fitnivo, your coach is in your pocket 24/7.
            </motion.p>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trainerPoints.map((p) => (
                <motion.div key={p} variants={fadeUp} className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-[#FF6A00]/15 border border-[#FF6A00]/30 flex items-center justify-center text-[#FF6A00]">
                    <Ico d={I.check} size={10} />
                  </span>
                  <span className="text-sm text-white/70">{p}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8">
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF6A00] text-black font-bold text-sm hover:bg-[#FF8524] transition shadow-lg shadow-[#FF6A00]/20">
                Download Free <Ico d={I.arrow} size={14} />
              </motion.a>
            </motion.div>
          </motion.div>
          {/* Mascot */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
              <Image src="/images/mascot/male-standing-transparent.png" alt="Fitnivo AI personal trainer" width={360} height={540} className="w-72 lg:w-80 h-auto object-contain drop-shadow-[0_40px_80px_rgba(255,106,0,0.3)]" />
            </motion.div>
            <div className="absolute inset-x-[15%] bottom-0 h-10 bg-[#FF6A00]/25 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ─── GOALS ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={stagger} className="mb-10">
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-widest font-mono text-[#FF6A00] mb-3">Whatever Your Goal</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-white">An AI Coach for Every Goal</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {goals.map((g) => (
              <motion.div key={g.title} variants={fadeUp} whileHover={{ y: -5, scale: 1.01 }}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 hover:border-[#FF6A00]/35 hover:bg-white/[0.04] transition-all">
                <div className="mb-3 w-9 h-9 rounded-xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center text-[#FF6A00] group-hover:bg-[#FF6A00]/20 transition-colors">
                  <Ico d={I[g.icon as keyof typeof I]} size={16} />
                </div>
                <h3 className="font-bold text-white mb-1.5 text-sm">{g.title}</h3>
                <p className="text-xs text-white/55 leading-relaxed">{g.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── COMPARISON ──────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={stagger} className="mb-10">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-white mb-4">AI Coach vs. Personal Trainer</motion.h2>
            <motion.p variants={fadeUp} className="text-white/55 max-w-xl">Both have their place — here is how they compare for everyday training.</motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-3 text-xs uppercase tracking-widest font-mono border-b border-white/10 bg-white/[0.03]">
              <div className="p-4 text-white/40" />
              <div className="p-4 text-[#FF6A00]">Fitnivo AI Coach</div>
              <div className="p-4 text-white/40">Traditional PT</div>
            </div>
            {compareRows.map((row, i) => (
              <div key={row[0]} className={`grid grid-cols-3 text-sm border-b border-white/[0.05] ${i % 2 ? '' : 'bg-white/[0.01]'}`}>
                <div className="p-4 font-semibold text-white/80">{row[0]}</div>
                <div className="p-4 text-[#FF6A00] font-medium">{row[1]}</div>
                <div className="p-4 text-white/45">{row[2]}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white/[0.01]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={stagger} className="mb-10">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-white">Frequently Asked Questions</motion.h2>
          </motion.div>
          <div className="space-y-2">
            {faqs.map((f, i) => (
              <motion.div key={f.q} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
                className={`rounded-2xl border overflow-hidden transition-colors ${openFaq === i ? 'border-[#FF6A00]/40 bg-[#FF6A00]/[0.04]' : 'border-white/[0.08] bg-white/[0.02]'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left">
                  <span className="font-semibold text-white text-sm">{f.q}</span>
                  <span className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${openFaq === i ? 'border-[#FF6A00] text-[#FF6A00] rotate-45' : 'border-white/20 text-white/40'}`}>
                    <Ico d={I.plus} size={12} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                      <p className="px-5 pb-5 text-sm text-white/60 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/mascot/banner-cta-scene.png" alt="" fill className="object-cover object-left" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/60 to-black/90" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center min-h-[300px]">
          <div className="hidden md:block" aria-hidden="true" />
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-right">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">Ready to Train With Your AI Fitness Coach?</h2>
            <p className="text-white/65 mb-8">Your workouts. Your nutrition. Your progress. All in one free-to-try app.</p>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#FF6A00] text-black font-bold hover:bg-[#FF8524] transition shadow-xl shadow-[#FF6A00]/30 text-sm">
              Start Training Free <Ico d={I.arrow} size={16} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
