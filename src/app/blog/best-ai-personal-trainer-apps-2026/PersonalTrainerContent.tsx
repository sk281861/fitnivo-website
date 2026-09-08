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
    bestFor: 'All-in-one AI trainer + nutrition',
    workouts: '✓', nutrition: '✓', scanner: '✓', coach: '✓',
    price: 'Free · $10/mo',
    url: '/ai-fitness-coach',
    internal: true,
    isOurPick: true,
    body: 'The most complete AI personal trainer for people who want workouts AND nutrition in one app. AI-driven progressive overload, calorie & macro tracking, AI food scanner, and FitBuu — the AI agent that adapts your plan and suggests meals in your favourite cuisine. Free tier: 3 scans/day, 15 AI coach messages/day, unlimited workout logging. Pro: $10/month or $60/year.',
  },
  {
    name: 'Ray',
    bestFor: 'Voice-guided real-time in-session coaching',
    workouts: '✓', nutrition: '—', scanner: '—', coach: '✓ (voice)',
    price: '~$19.99/mo',
    url: 'https://www.rayfit.com',
    body: 'The closest thing to a live trainer in your ear. Voice cues, computer-vision rep counting, and real-time exercise substitutions during the session. Best if you want live in-session coaching.',
  },
  {
    name: 'Fitbod',
    bestFor: 'Strength programming & equipment-adaptive workouts',
    workouts: '✓', nutrition: '—', scanner: '—', coach: '—',
    price: '~$12.99/mo',
    url: 'https://fitbod.me',
    body: 'The most mature AI workout generator for strength training. Deep exercise library, equipment-aware, and muscle-fatigue-informed workout selection. No nutrition side.',
  },
  {
    name: 'Freeletics',
    bestFor: 'Bodyweight & adaptive training',
    workouts: '✓', nutrition: 'Basic', scanner: '—', coach: '✓',
    price: '~$34.99/qtr',
    url: 'https://www.freeletics.com',
    body: 'Bodyweight-first AI Coach that adapts sessions to your post-workout feedback and progress. Best for travel and small spaces with no equipment.',
  },
  {
    name: 'Caliber',
    bestFor: 'AI + human coaching hybrid',
    workouts: '✓', nutrition: 'Basic', scanner: '—', coach: '✓ (human)',
    price: 'Free + coach tiers',
    url: 'https://www.caliberstrong.com',
    body: 'AI structure plus a real human coach who programs and adjusts your training. Costs more, but adds accountability and expert oversight.',
  },
  {
    name: 'JuggernautAI',
    bestFor: 'Powerlifting periodization',
    workouts: '✓', nutrition: '—', scanner: '—', coach: '—',
    price: '~$29.99/mo',
    url: 'https://www.juggernautai.app',
    body: 'Block-periodized AI for squat, bench, and deadlift using RPE-based training. Purpose-built for powerlifters and strength sports athletes.',
  },
  {
    name: 'SensAI',
    bestFor: 'Recovery-driven training with wearables',
    workouts: '✓', nutrition: '—', scanner: '—', coach: '✓ (LLM)',
    price: 'Paid',
    url: 'https://www.sensai.fit',
    body: 'Reads HRV, sleep, and resting heart rate from HealthKit and programs your training around your recovery state. Best if you own a wearable and want data-driven load management.',
  },
  {
    name: 'Planfit',
    bestFor: 'Free AI workout generator',
    workouts: '✓', nutrition: '—', scanner: '—', coach: '—',
    price: 'Free / Pro',
    url: 'https://planfit.ai',
    body: 'Fast free workout generator that adapts weight, volume, and intensity as you log. Broad user base and solid entry-level option if budget is the primary concern.',
  },
];

const compColumns = [
  { key: 'workouts',   label: 'AI Workouts' },
  { key: 'nutrition',  label: 'Nutrition' },
  { key: 'scanner',    label: 'Food Scan' },
  { key: 'coach',      label: 'Coach' },
];

const compRows: CompRow[] = apps.map((a) => ({
  name: a.name,
  bestFor: a.bestFor,
  price: a.price,
  isOurPick: a.isOurPick ?? false,
  values: { workouts: a.workouts, nutrition: a.nutrition, scanner: a.scanner, coach: a.coach },
}));

const toc = [
  { id: 'comparison',       label: 'Quick comparison table' },
  { id: 'detailed-reviews', label: 'All 8 apps reviewed' },
  { id: 'picks-by-goal',    label: 'Picks by training goal' },
  { id: 'faq',              label: 'Frequently asked questions' },
];

const takeaways = [
  'AI personal trainer apps cost 5–10% of in-person training and remove workout decision-fatigue.',
  'Fitnivo is the only AI personal trainer that also handles nutrition — closing both sides of the equation.',
  'Ray is unmatched for live in-session voice coaching — closest experience to a trainer in the room.',
  'Fitbod leads for pure strength programming without nutrition overhead.',
  'JuggernautAI and Caliber are for advanced or coached lifters, not general users.',
];

const goalPicks = [
  { goal: 'Workouts + nutrition in one app',    pick: 'Fitnivo',      note: 'AI personal trainer + FitBuu nutrition agent + food scanner — free to try.' },
  { goal: 'Live in-session voice coaching',     pick: 'Ray',          note: 'Voice cues + rep counting in real time during your workout.' },
  { goal: 'Pure strength programming',          pick: 'Fitbod',       note: 'Equipment-adaptive, muscle-fatigue-aware workout generation.' },
  { goal: 'Bodyweight / travel training',       pick: 'Freeletics',   note: 'Adaptive bodyweight AI coach — best for small spaces and travel.' },
  { goal: 'Human coach + AI tracking',          pick: 'Caliber',      note: 'Real coach assigns your program; AI tracks and logs it.' },
  { goal: 'Powerlifting periodization',         pick: 'JuggernautAI', note: 'RPE + block periodization — built by elite powerlifting coaches.' },
  { goal: 'Recovery-driven (HRV/sleep)',         pick: 'SensAI',       note: 'Reads wearable data and programs training around your recovery.' },
  { goal: 'Free AI workout generator',          pick: 'Planfit',      note: 'Adapts weight and volume as you log. Zero cost to start.' },
];

const faqs = [
  {
    q: 'What is the best AI personal trainer app in 2026?',
    a: 'It depends on how you train. Ray leads for voice-guided real-time coaching, Fitbod for strength programming, Freeletics for bodyweight, Caliber for AI + human hybrid, and Fitnivo for all-in-one training + nutrition.',
  },
  {
    q: 'How much do AI personal trainer apps cost?',
    a: 'Most cost USD 10–30 per month — roughly 5–10% of the cost of an in-person personal trainer at 2–3 sessions per week. Fitnivo has a real free tier with daily AI usage.',
  },
  {
    q: 'Can an AI personal trainer replace a human one?',
    a: 'For workout planning, tracking, and progression, yes. For hands-on form correction, injury rehab, or highly technical sport-specific skills, a qualified human is still better.',
  },
  {
    q: 'Are AI personal trainer apps good for beginners?',
    a: 'Yes. A good AI trainer removes the biggest beginner blocker: not knowing what to do. It hands you a structured plan and progresses you gradually.',
  },
];

export default function PersonalTrainerContent() {
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
            Most AI personal trainer apps only do workouts.{' '}
            <strong>Fitnivo covers workouts AND nutrition</strong> — with FitBuu adapting your plan as you progress. Ray wins for live in-session voice coaching. Fitbod leads for pure strength programming.
          </p>
        </div>
      </motion.div>

      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="text-xs text-white/40 mb-10 flex items-center gap-2">
        <span className="inline-block w-1 h-1 rounded-full bg-white/40" />
        Reviewed by the <Link href="/about" className="text-[#FF6A00] hover:underline">Fitnivo Editorial Team</Link>. Fitnivo is our product; we call out where other apps are the better pick.
      </motion.p>

      <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="text-white/65 text-lg leading-relaxed mb-12">
        &ldquo;AI personal trainer&rdquo; means very different things across these apps. Some are workout planners with a chat layer. Others do live in-session coaching. A few pair AI with an actual human. Picking the wrong type is the number-one reason people cancel subscriptions.
      </motion.p>

      {/* Key takeaways */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 mb-12">
        <p className="text-[10px] uppercase tracking-widest font-mono text-white/40 mb-3">Key Takeaways</p>
        <ul className="space-y-2">
          {takeaways.map((t) => (
            <li key={t} className="flex items-start gap-2 text-sm text-white/70">
              <span className="mt-1 shrink-0 w-4 h-4 rounded-full bg-[#FF6A00]/15 border border-[#FF6A00]/40 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-[#FF6A00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              {t}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Comparison table */}
      <div id="comparison">
        <AppComparisonTable
          columns={compColumns}
          rows={compRows}
          title="Quick Comparison"
          subtitle="8 AI personal trainer apps compared side-by-side — 2026 edition."
          pickColor="emerald"
          pickLabel="My Pick"
        />
      </div>

      {/* #1 Fitnivo — TopPickCard */}
      <TopPickCard
        rank={1}
        name="Fitnivo"
        tagline="Best all-in-one AI personal trainer + nutrition coach"
        description="Most AI personal trainer apps only handle your workouts. Fitnivo closes both sides: AI-driven progressive overload, calorie & macro tracking, AI food scanner, and FitBuu — the AI agent that adapts your plan and suggests meals in your favourite cuisine. The most complete AI personal training experience available free to try."
        bullets={[
          'Personalized workout program + progressive overload from day one',
          'FitBuu (AI agent) adapts your plan as you progress',
          'Calorie & macro tracking + AI food scanner in the same app',
          'FitBuu suggests meals in your favourite cuisine with your ingredients',
          'Free tier: 3 scans/day · 15 coach messages/day · unlimited workouts',
          'Pro: unlimited everything at $10/month or $60/year',
        ]}
        ctaHref="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
        ctaText="Try Fitnivo Free"
        mascotSrc="/images/mascot/female-standing-transparent.png"
        quote="You don't have to adapt to the plan — FitBuu (the AI agent) adapts to you."
        badge="My Pick 2026"
      />

      {/* Apps #2–5 grid */}
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

      {/* Apps #6–8 animated list */}
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

      {/* Picks by goal */}
      <section id="picks-by-goal" className="mb-14">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-baseline gap-3">
          <span className="text-[#FF6A00]">—</span> Picks by Training Goal
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

      {/* Mascot CTA inline */}
      <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="relative rounded-3xl border border-[#FF6A00]/25 bg-gradient-to-br from-[#FF6A00]/[0.07] via-black to-black overflow-hidden mb-14 min-h-[180px] flex items-center">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/50 to-transparent" />
        <div className="relative z-10 px-8 py-8 flex-1">
          <p className="text-xs uppercase tracking-widest font-mono text-[#FF6A00] mb-2">Free to Start</p>
          <h3 className="text-xl font-black text-white mb-3">Your AI Personal Trainer + Nutrition Coach</h3>
          <p className="text-sm text-white/60 mb-5 max-w-sm leading-relaxed">AI workout programming, progressive overload, and nutrition tracking — all in one free-to-try app.</p>
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
        headline="Try Fitnivo — AI Personal Trainer"
        subheading="Free tier includes 3 AI food scans/day, 15 AI coach messages/day, and unlimited workout logging. Pro is $10/month."
        primaryHref="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
        primaryText="Download Fitnivo"
      />

      {/* Related */}
      <div className="mt-10">
        <h3 className="text-xs uppercase tracking-widest font-mono text-white/40 mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          {[
            ['/blog/fitnivo-vs-fitbod',                   'Fitnivo vs Fitbod'],
            ['/blog/fitnivo-vs-freeletics',               'Fitnivo vs Freeletics'],
            ['/blog/best-ai-fitness-apps-2026',           'Best AI Fitness Apps 2026'],
            ['/ai-fitness-coach',                         'Fitnivo AI Fitness Coach'],
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
