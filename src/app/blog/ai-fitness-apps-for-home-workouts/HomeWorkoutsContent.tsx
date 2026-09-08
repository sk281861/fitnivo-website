'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AppComparisonTable, { CompRow } from '@/components/blog-editorial/AppComparisonTable';
import AppIcon from '@/components/blog-editorial/AppIcon';
import TopPickCard from '@/components/blog-editorial/TopPickCard';
import SmallPickCard from '@/components/blog-editorial/SmallPickCard';
import BlogCTABanner from '@/components/blog-editorial/BlogCTABanner';
import ReadingProgress from '@/components/blog-editorial/ReadingProgress';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };

const apps = [
  {
    name: 'Fitnivo',
    bestFor: 'Dumbbell home training + nutrition',
    bodyweight: '✓',
    dumbbells: '✓',
    nutrition: '✓',
    price: 'Free · $10/mo',
    url: '/ai-fitness-coach',
    internal: true,
    body: 'Fitnivo generates equipment-aware programs from whatever you have at home. Select dumbbells, resistance bands, or bodyweight-only during onboarding and the program adapts accordingly. The AI fitness coach applies progressive overload automatically — you log your session, and the next one adjusts based on how you performed. The addition of calorie and macro tracking in the same app is the differentiator. Home trainees often underestimate how much nutrition affects results. Fitnivo covers both sides without requiring a second app. Free tier includes unlimited workout logging, 3 AI food scans per day, and 15 AI coach messages per day.',
  },
  {
    name: 'Freeletics',
    bestFor: 'Bodyweight-only home training',
    bodyweight: '✓',
    dumbbells: 'Limited',
    nutrition: 'Basic',
    price: '~$34.99/qtr',
    url: 'https://www.freeletics.com',
    body: 'Freeletics built its reputation on bodyweight training and it remains the best AI app for people who want effective no-equipment workouts. The AI Coach adapts to your fitness level and session feedback. Programs are genuinely challenging and well-structured for bodyweight progression. The limitation is equipment versatility — once you add dumbbells or a barbell to your home setup, Freeletics does not program them as effectively as apps designed around weighted equipment.',
  },
  {
    name: 'FitnessAI',
    bestFor: 'Dumbbell progressions at home',
    bodyweight: 'Limited',
    dumbbells: '✓',
    nutrition: '—',
    price: '~$89/yr',
    url: 'https://www.fitnessai.com',
    body: 'FitnessAI is lean and focused on strength progression. If your home gym has dumbbells and you want specific weight targets with clear progression logic, FitnessAI delivers this simply and well. No nutrition, no frills — just the workout and the numbers.',
  },
  {
    name: 'Nike Training Club',
    bestFor: 'Free guided video home workouts',
    bodyweight: '✓',
    dumbbells: 'Limited',
    nutrition: '—',
    price: 'Free',
    url: 'https://www.nike.com/ntc-app',
    body: 'Nike Training Club is the strongest completely free option. It has structured beginner and intermediate programs, professional video guidance, and a library of sessions across different goals. The limitation is that it does not track your performance in the same way a pure AI app does — it is more of a guided video platform with structure than an adaptive AI system.',
  },
  {
    name: 'Fitbod',
    bestFor: 'Full home gym (barbell + rack)',
    bodyweight: 'Partial',
    dumbbells: '✓',
    nutrition: '—',
    price: '~$12.99/mo',
    url: 'https://fitbod.me',
    body: 'Fitbod is primarily a gym app but handles home setups well when you have a barbell, rack, or a comprehensive dumbbell selection. It generates each workout fresh based on what you last trained. Less effective with bodyweight-only or minimal equipment setups.',
  },
  {
    name: 'Hevy',
    bestFor: 'Pure workout logging (bring your own program)',
    bodyweight: 'Partial',
    dumbbells: '✓',
    nutrition: '—',
    price: 'Free · Pro',
    url: 'https://hevy.com',
    body: 'Hevy is a workout tracker, not a programming app. You build your own routine and log sessions in a clean, fast interface. Strong community features, exercise history graphs, and personal record tracking. Does not auto-generate or adapt your program. No nutrition tracking.',
  },
];

const compColumns = [
  { key: 'bodyweight', label: 'Bodyweight' },
  { key: 'dumbbells', label: 'Dumbbells' },
  { key: 'nutrition', label: 'Nutrition' },
];

const compRows: CompRow[] = apps.map((a) => ({
  name: a.name,
  bestFor: a.bestFor,
  price: a.price,
  isOurPick: a.name === 'Fitnivo',
  values: { bodyweight: a.bodyweight, dumbbells: a.dumbbells, nutrition: a.nutrition },
}));

const toc = [
  { id: 'comparison', label: 'Quick comparison table' },
  { id: 'detailed-reviews', label: 'All 6 apps reviewed' },
  { id: 'equipment-tiers', label: 'Equipment tiers' },
  { id: 'progressive-overload', label: 'Progressive overload at home' },
  { id: 'faq', label: 'Frequently asked questions' },
];

const takeaways = [
  'Freeletics is the best bodyweight-only app — deep no-equipment programming.',
  'Fitnivo is best if you have any equipment (dumbbells/bands) AND want nutrition tracking.',
  'Nike Training Club is the top free choice for guided video sessions.',
  'FitnessAI wins for simple dumbbell progressions without nutrition overhead.',
  'Progressive overload at home is possible — AI apps manage rep/set/weight progression automatically.',
];

const goalPicks = [
  { goal: 'Bodyweight only', pick: 'Freeletics or Fitnivo', note: 'Both support full bodyweight programs.' },
  { goal: 'Dumbbells + nutrition', pick: 'Fitnivo', note: 'Only app that covers both sides in one free-to-try product.' },
  { goal: 'Free video guided sessions', pick: 'Nike Training Club', note: 'Professional guided videos at zero cost.' },
  { goal: 'Dumbbell strength only', pick: 'FitnessAI', note: 'Simple, clean weight progression with no nutrition overhead.' },
  { goal: 'Full home gym (barbell)', pick: 'Fitbod', note: 'Best at handling a full rack + barbell home gym.' },
  { goal: 'Just logging your own plan', pick: 'Hevy', note: 'Clean, fast logging with strong exercise history.' },
];

const faqs = [
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
];

export default function HomeWorkoutsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <ReadingProgress />

      {/* TL;DR */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="flex gap-4 items-start bg-[#FF6A00]/[0.06] border border-[#FF6A00]/30 rounded-2xl p-5 mb-10"
      >
        <Image src="/images/mascot/mascot-avatar-circle.png" alt="" width={52} height={52} className="shrink-0 rounded-full ring-2 ring-[#FF6A00]/40" />
        <div>
          <p className="text-[10px] uppercase tracking-widest text-[#FF6A00] font-bold font-mono mb-1">TL;DR</p>
          <p className="text-white text-sm leading-relaxed">
            The best AI home workout apps build effective programs from whatever equipment you have — bodyweight only, resistance bands, or a set of dumbbells. Freeletics leads for bodyweight; Fitnivo and FitnessAI work well for dumbbell-based home training with nutrition tracking; Nike Training Club is the best free option for guided video workouts.
          </p>
        </div>
      </motion.div>

      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="text-xs text-white/40 mb-10 flex items-center gap-2">
        <span className="inline-block w-1 h-1 rounded-full bg-white/40" />
        Reviewed by the <Link href="/about" className="text-[#FF6A00] hover:underline ml-1">Fitnivo Editorial Team</Link>. Fitnivo is our product; we call out where other apps are the better pick.
      </motion.p>

      <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="text-white/65 text-lg leading-relaxed mb-12">
        The best AI fitness apps for home workouts in 2026 adapt your program to whatever equipment you have — including no equipment at all. The key distinction from a video library is that these apps track your performance, apply progressive overload, and update your plan as you improve. A YouTube workout gives you a fixed session. An AI app gives you a system that evolves.
      </motion.p>

      {/* Comparison table */}
      <div id="comparison">
        <AppComparisonTable
          columns={compColumns}
          rows={compRows}
          title="Quick Comparison"
          subtitle="6 AI home workout apps compared — bodyweight, dumbbells, and nutrition support."
          pickColor="emerald"
          pickLabel="My Pick"
        />
      </div>

      {/* Top pick — Fitnivo */}
      <TopPickCard
        rank={1}
        name="Fitnivo"
        tagline="Best for dumbbell home training + nutrition in one app"
        description="Fitnivo generates equipment-aware programs from whatever you have at home. Select dumbbells, resistance bands, or bodyweight-only during onboarding and the program adapts accordingly. The AI fitness coach applies progressive overload automatically — you log your session, and the next one adjusts based on how you performed."
        bullets={[
          'Equipment-aware workouts — bodyweight, bands, or dumbbells',
          'AI progressive overload based on every logged session',
          'Calorie & macro tracking built into the same app',
          'Covers both training and nutrition — no second app needed',
          'Free tier: unlimited workout logging, 3 AI food scans/day, 15 AI coach messages/day',
          'Pro: $10/month or $60/year',
        ]}
        ctaHref="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
        ctaText="Try Fitnivo Free"
        mascotSrc="/images/mascot/female-standing-transparent.png"
        badge="My Pick 2026"
      />

      {/* Small pick cards: apps 2–5 */}
      <div className="grid sm:grid-cols-2 gap-4 mb-16">
        {apps.slice(1, 5).map((a, i) => (
          <SmallPickCard
            key={a.name}
            rank={i + 2}
            name={a.name}
            bestFor={a.bestFor}
            price={a.price}
            description={a.body}
            url={a.url}
            internal={'internal' in a ? (a as { internal?: boolean }).internal : false}
          />
        ))}
      </div>

      {/* Remaining apps */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} variants={stagger} className="space-y-4 mb-16">
        {apps.slice(5).map((a, i) => (
          <motion.div key={a.name} variants={fadeUp}
            className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 hover:border-[#FF6A00]/30 hover:bg-white/[0.03] transition-all group">
            <div className="shrink-0 flex flex-col items-center gap-1.5">
              <span className="text-[10px] font-mono text-white/30 group-hover:text-[#FF6A00] transition">#{i + 6}</span>
              <span className="transition-transform group-hover:scale-110 group-hover:-rotate-3">
                <AppIcon name={a.name} size="md" />
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <span className="font-bold text-white text-sm">{a.name}</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 border border-white/10 rounded px-1.5 py-0.5">{a.bestFor}</span>
                <span className="ml-auto text-xs font-mono text-white/50 shrink-0">{a.price}</span>
              </div>
              <p className="text-xs text-white/55 leading-relaxed mb-2">{a.body}</p>
              <a href={a.url} target="_blank" rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-wider font-bold text-[#FF6A00]/70 hover:text-[#FF6A00] transition inline-flex items-center gap-1">
                Visit {a.name} →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* The home workout problem AI solves */}
      <section className="mb-14">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-baseline gap-3">
          <span className="text-[#FF6A00]">—</span> The Home Workout Problem AI Solves
        </motion.h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="space-y-4">
          <motion.p variants={fadeUp} className="text-white/65 leading-relaxed">
            Training at home removes barriers — no commute, no waiting for equipment, lower cost. But it creates a different problem: without a trainer to tell you what to do, most people default to doing the same workout repeatedly or following random videos with no structure. Both approaches limit progress.
          </motion.p>
          <motion.p variants={fadeUp} className="text-white/65 leading-relaxed">
            AI fitness apps fill the programming gap. You tell the app what equipment you have, how many days you can train, and what your goal is. It produces a structured weekly program, tracks what you log, and adjusts the plan as you progress — the same logic a personal trainer would apply, without the cost or the need to leave your living room.
          </motion.p>
          <motion.p variants={fadeUp} className="text-white/65 leading-relaxed">
            The second problem AI solves is accountability. Logging your workout — even into an app — creates a record and a commitment loop that makes you more likely to show up for the next session.
          </motion.p>
        </motion.div>
      </section>

      {/* Equipment tiers */}
      <section id="equipment-tiers" className="mb-14">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-baseline gap-3">
          <span className="text-[#FF6A00]">—</span> Equipment Tiers and Which Apps Handle Each
        </motion.h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} variants={stagger} className="space-y-4">
          {[
            {
              tier: 'No equipment / bodyweight only',
              best: 'Freeletics, Nike Training Club, Fitnivo',
              note: 'Push-ups, squats, lunges, burpees, planks, and variations. Freeletics is the category leader here.',
            },
            {
              tier: 'Resistance bands',
              best: 'Fitnivo, Freeletics',
              note: 'Bands add pulling exercises and provide variable resistance. Most apps treat bands as equipment you can select.',
            },
            {
              tier: 'Dumbbells',
              best: 'Fitnivo, FitnessAI, Fitbod',
              note: 'A pair of adjustable dumbbells or several fixed-weight pairs is where home training starts to match gym training for most goals.',
            },
            {
              tier: 'Full home gym (barbell, rack, cables)',
              best: 'Fitbod, FitnessAI',
              note: 'At this level, you have access to almost everything a commercial gym has. Fitbod and FitnessAI program barbell movements effectively.',
            },
          ].map((item) => (
            <motion.div key={item.tier} variants={fadeUp} whileHover={{ y: -3 }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 hover:border-[#FF6A00]/30 transition-all">
              <div className="text-[10px] uppercase tracking-widest font-mono text-white/40 mb-1">{item.tier}</div>
              <div className="font-bold text-white text-sm mb-1">{item.best}</div>
              <div className="text-xs text-white/50 leading-relaxed">{item.note}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Picks by goal */}
      <section id="picks-by-goal" className="mb-14">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-baseline gap-3">
          <span className="text-[#FF6A00]">—</span> Picks by Goal
        </motion.h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} variants={stagger}
          className="grid sm:grid-cols-2 gap-3">
          {goalPicks.map((g) => (
            <motion.div key={g.goal} variants={fadeUp} whileHover={{ y: -3 }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 hover:border-[#FF6A00]/30 transition-all">
              <div className="text-[10px] uppercase tracking-widest font-mono text-white/40 mb-1">{g.goal}</div>
              <div className="font-bold text-white text-sm mb-1">{g.pick}</div>
              <div className="text-xs text-white/50 leading-relaxed">{g.note}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Progressive overload section */}
      <section id="progressive-overload" className="mb-14">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-baseline gap-3">
          <span className="text-[#FF6A00]">—</span> Progressive Overload at Home: Why It Matters and How AI Handles It
        </motion.h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="space-y-4">
          <motion.p variants={fadeUp} className="text-white/65 leading-relaxed">
            Progressive overload — gradually increasing the stress on your muscles over time — is the core mechanism of fitness improvement. At a gym, you add plates. At home with limited equipment, you need other strategies.
          </motion.p>
          <motion.p variants={fadeUp} className="text-white/65 leading-relaxed">
            AI apps handle home progressive overload through several methods:
          </motion.p>
          <motion.ul variants={stagger} className="space-y-3 pl-2">
            {[
              { label: 'Rep progression', detail: '— increasing reps from 8 to 12 before adding weight' },
              { label: 'Set progression', detail: '— adding a set once you hit the top rep range' },
              { label: 'Exercise variation', detail: '— progressing from a push-up to an archer push-up to a one-arm push-up as strength increases' },
              { label: 'Tempo manipulation', detail: '— slowing down the lowering phase to increase time under tension without changing weight' },
              { label: 'Weighted additions', detail: '— adding a backpack with books or a weighted vest to bodyweight exercises' },
            ].map((item) => (
              <motion.li key={item.label} variants={fadeUp} className="flex items-start gap-3 text-sm text-white/70">
                <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-400/40 shrink-0">
                  <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span><strong className="text-white">{item.label}</strong>{item.detail}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.p variants={fadeUp} className="text-white/65 leading-relaxed">
            Apps like Fitnivo and Freeletics handle these automatically. You do not need to plan the progression — you log what you did and the app decides what comes next.
          </motion.p>
        </motion.div>
      </section>

      {/* Mid-article CTA */}
      <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="relative rounded-3xl border border-[#FF6A00]/25 bg-gradient-to-br from-[#FF6A00]/[0.07] via-black to-black overflow-hidden mb-14 min-h-[180px] flex items-center">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/50 to-transparent" />
        <div className="relative z-10 px-8 py-8 flex-1">
          <p className="text-xs uppercase tracking-widest font-mono text-[#FF6A00] mb-2">Free to Start</p>
          <h3 className="text-xl font-black text-white mb-3">AI-powered home workouts that adapt as you progress</h3>
          <p className="text-sm text-white/60 mb-5 max-w-sm leading-relaxed">
            Fitnivo builds equipment-aware programs for home training — bodyweight, bands, or dumbbells — and tracks your nutrition in the same app. Free tier available, no credit card needed.
          </p>
          <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF6A00] text-black font-bold text-sm hover:bg-[#FF8524] transition shadow-lg shadow-[#FF6A00]/20">
            Download Free →
          </motion.a>
        </div>
        <div className="absolute right-0 bottom-0 h-full w-48 pointer-events-none hidden sm:block">
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 right-4 h-[110%]">
            <Image src="/images/mascot/male-pointing-transparent.png" alt="" width={160} height={240}
              className="h-full w-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(255,106,0,0.3)]" />
          </motion.div>
        </div>
      </motion.div>

      {/* FAQ */}
      <section id="faq" className="mb-14">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-baseline gap-3">
          <span className="text-[#FF6A00]">—</span> Frequently Asked Questions
        </motion.h2>
        <div className="space-y-2">
          {faqs.map((f, i) => (
            <motion.div key={f.q} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              className={`rounded-2xl border overflow-hidden transition-colors ${openFaq === i ? 'border-[#FF6A00]/40 bg-[#FF6A00]/[0.04]' : 'border-white/[0.08] bg-white/[0.02]'}`}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left">
                <span className="font-semibold text-white text-sm">{f.q}</span>
                <span className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all font-mono text-base ${openFaq === i ? 'border-[#FF6A00] text-[#FF6A00] rotate-45' : 'border-white/20 text-white/40'}`}>+</span>
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
      </section>

      <BlogCTABanner
        headline="Train at Home Smarter — Free"
        subheading="Fitnivo builds equipment-aware workout programs and tracks your nutrition in the same app. Free tier available, no credit card needed."
        primaryHref="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
        primaryText="Download Fitnivo Free"
      />

      <div className="mt-10">
        <h3 className="text-xs uppercase tracking-widest font-mono text-white/40 mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          {[
            ['/ai-fitness-coach', 'Fitnivo AI Fitness Coach'],
            ['/ai-workout-planner', 'Fitnivo AI Workout Planner'],
            ['/blog/fitnivo-vs-freeletics', 'Fitnivo vs Freeletics — full comparison'],
            ['/blog/best-ai-fitness-apps-2026', 'Best AI Fitness Apps in 2026'],
          ].map(([href, label]) => (
            <li key={href}>
              <Link href={href} className="text-[#FF6A00] hover:text-[#FF8524] hover:underline transition inline-flex items-center gap-1">
                {label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
