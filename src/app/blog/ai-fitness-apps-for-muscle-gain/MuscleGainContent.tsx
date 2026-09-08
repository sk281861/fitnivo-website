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
    bestFor: 'Workout programming + protein tracking in one app',
    progressive: '✓', tracking: '✓', protein: '✓', scanner: '✓',
    price: 'Free · $10/mo',
    url: '/ai-fitness-coach',
    internal: true,
    isOurPick: true,
    body: 'The only app on this list that handles both workout programming and protein tracking together. AI progressive overload session by session, calorie & macro targets set to your muscle-gain goal, and an AI food scanner for fast protein logging. FitBuu adapts your plan and can suggest high-protein meals in your favourite cuisine. Free tier: 3 scans/day, 15 AI coach messages/day, unlimited workout logging. Pro: $10/month or $60/year.',
  },
  {
    name: 'Fitbod',
    bestFor: 'Equipment-adaptive workout generation',
    progressive: '✓', tracking: '✓', protein: '—', scanner: '—',
    price: '~$12.99/mo',
    url: 'https://fitbod.me',
    body: 'Purpose-built for workout generation and adaptation. Tracks muscle recovery across sessions and selects exercises to avoid re-training fatigued muscles. Deep exercise library and equipment-flexible. No nutrition tracking — pair with a separate macro tracker.',
  },
  {
    name: 'JuggernautAI',
    bestFor: 'Advanced powerlifters (RPE + block periodization)',
    progressive: '✓✓', tracking: '✓', protein: '—', scanner: '—',
    price: '~$29.99/mo',
    url: 'https://www.juggernautai.app',
    body: 'RPE-based training and sophisticated block periodization built by elite powerlifting coaches. Overkill for intermediate lifters, but genuinely strong for advanced athletes who need precise intensity management and competition peaking.',
  },
  {
    name: 'Caliber',
    bestFor: 'Lifters who want human coaching + app tracking',
    progressive: '✓', tracking: '✓', protein: 'Basic', scanner: '—',
    price: 'Free · $29.99/mo',
    url: 'https://www.caliberstrong.com',
    body: 'Pairs human coaches with an app for workout tracking. Free tier includes self-guided programming. Paid tier connects you with a coach who programs and adjusts your training.',
  },
  {
    name: 'FitnessAI',
    bestFor: 'Simple weight-recommendation progression',
    progressive: '✓', tracking: '✓', protein: '—', scanner: '—',
    price: '~$89/yr',
    url: 'https://www.fitnessai.com',
    body: 'Straightforward AI weight recommendations for gym lifts. Tells you exactly what weight to use and when to go up. No nutrition, no frills — just the progressive overload logic.',
  },
  {
    name: 'Hevy',
    bestFor: 'Pure workout logging (bring your own program)',
    progressive: '—', tracking: '✓', protein: '—', scanner: '—',
    price: 'Free · Pro',
    url: 'https://hevy.com',
    body: 'A workout tracker not a programming app. You design your own routine and log sessions in a fast, clean interface. Strong personal record tracking and exercise history. No auto-progression.',
  },
];

const compColumns = [
  { key: 'progressive', label: 'Auto-Progression' },
  { key: 'tracking',    label: 'Workout Log' },
  { key: 'protein',     label: 'Protein Track' },
  { key: 'scanner',     label: 'Food Scan' },
];

const compRows: CompRow[] = apps.map((a) => ({
  name: a.name,
  bestFor: a.bestFor,
  price: a.price,
  isOurPick: a.isOurPick ?? false,
  values: { progressive: a.progressive, tracking: a.tracking, protein: a.protein, scanner: a.scanner },
}));

const toc = [
  { id: 'comparison',       label: 'Quick comparison table' },
  { id: 'detailed-reviews', label: 'All 6 apps reviewed' },
  { id: 'picks-by-goal',    label: 'Picks by training style' },
  { id: 'faq',              label: 'Frequently asked questions' },
];

const takeaways = [
  'Progressive overload is the core driver of muscle gain — the app must adapt weight/volume session by session.',
  'Fitnivo is the only app on this list that also tracks protein — closing both sides of the muscle-gain equation.',
  'Fitbod leads for workout generation if you do not need nutrition in the same app.',
  'JuggernautAI and Caliber are for advanced/coached lifters, not beginners.',
  'Protein target: 1.6–2.2 g per kg of body weight daily. Most people underestimate this without tracking.',
];

const goalPicks = [
  { goal: 'Workout + protein tracking',    pick: 'Fitnivo',      note: 'Only app that closes both sides of the muscle-gain equation.' },
  { goal: 'Equipment-flexible gym training', pick: 'Fitbod',     note: 'Muscle-fatigue-aware workout generation, adapts to any equipment.' },
  { goal: 'Advanced powerlifting',         pick: 'JuggernautAI', note: 'RPE + block periodization built by elite powerlifting coaches.' },
  { goal: 'Human coaching + AI',           pick: 'Caliber',      note: 'Real coach assigns and adjusts your program — AI tracks it.' },
  { goal: 'Simple gym weight progression', pick: 'FitnessAI',    note: 'Clean weight recommendations, no complexity overhead.' },
  { goal: 'Log your own program',          pick: 'Hevy',         note: 'Fast, clean logging with strong exercise history and PRs.' },
];

const faqs = [
  {
    q: 'What is the best AI app for building muscle?',
    a: 'For most lifters, Fitnivo (best all-in-one with nutrition) or Fitbod (best equipment-adaptive workout generation) lead the field. JuggernautAI and Caliber are the strongest options for advanced or competitive lifters who need sophisticated periodization.',
  },
  {
    q: 'Do AI fitness apps help with muscle gain?',
    a: 'Yes. The core driver of muscle gain is progressive overload. AI fitness apps automate this by tracking every set and weight, then recommending the next session based on your logged performance.',
  },
  {
    q: 'How does progressive overload work in AI fitness apps?',
    a: 'You log your sets, reps, and weights each session. The AI compares your performance to your target and adjusts the next session accordingly — adding weight if you cleared all reps, holding or reducing if you missed.',
  },
  {
    q: 'Is Fitbod or Fitnivo better for muscle building?',
    a: 'Fitbod excels at equipment-adaptive workout generation. Fitnivo adds protein and calorie tracking alongside workout programming. If you only need workout programming, Fitbod is strong. If you want nutrition integrated, Fitnivo is the better fit.',
  },
];

export default function MuscleGainContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openReview, setOpenReview] = useState<number | null>(null);

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
            For muscle gain you need progressive overload and protein tracking.{' '}
            <strong>Fitnivo is the only app that does both in one free-to-try product</strong> — AI-driven workout progression and macro tracking with an AI food scanner. Fitbod leads if you only need workout programming.
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
        Building muscle requires two things: a progressively harder training stimulus and enough protein to support repair and growth. The best AI fitness apps for muscle gain automate the first and help you manage the second. This guide ranks apps on both criteria.
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
          subtitle="6 AI fitness apps for muscle gain compared side-by-side — 2026 edition."
          pickColor="emerald"
          pickLabel="My Pick"
        />
      </div>

      {/* #1 Fitnivo — TopPickCard */}
      <TopPickCard
        rank={1}
        name="Fitnivo"
        tagline="Best for workout programming + protein tracking in one app"
        description="Muscle gain needs two things: progressive overload and enough protein. Fitnivo is the only app on this list that handles both — AI-driven progressive overload session by session, and calorie & protein tracking with an AI food scanner. FitBuu can also suggest high-protein meals in your favourite cuisine."
        bullets={[
          'AI progressive overload — weights advance based on every logged session',
          'Protein & calorie tracking with adaptive macro targets for muscle gain',
          'AI food scanner (photo → macros) makes protein tracking sustainable',
          'FitBuu suggests high-protein meals in your favourite cuisine',
          'Free tier: 3 scans/day · 15 coach messages/day · unlimited workouts',
          'Pro: unlimited everything at $10/month or $60/year',
        ]}
        ctaHref="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
        ctaText="Try Fitnivo Free"
        mascotSrc="/images/mascot/female-standing-transparent.png"
        quote="Muscle gain is half training, half protein. Fitnivo is the only app that handles both sides."
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

      {/* Apps #6+ animated list */}
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

      <section id="detailed-reviews" className="mb-14">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-baseline gap-3">
          <span className="text-[#FF6A00]">—</span> App Reviews In Full
        </motion.h2>
        <div className="space-y-2">
          {apps.map((app, i) => (
            <div key={app.name}
              className={`rounded-2xl border overflow-hidden transition-colors ${openReview === i ? 'border-[#FF6A00]/40 bg-[#FF6A00]/[0.04]' : 'border-white/[0.08] bg-white/[0.02]'}`}>
              <button onClick={() => setOpenReview(openReview === i ? null : i)}
                className="w-full flex items-center gap-3 p-5 text-left">
                <AppIcon name={app.name} size="sm" />
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-white text-sm">{app.name}</span>
                  <span className="ml-2 text-xs text-white/40 font-mono hidden sm:inline">— {app.bestFor}</span>
                </div>
                <span className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all font-mono text-base ${openReview === i ? 'border-[#FF6A00] text-[#FF6A00] rotate-45' : 'border-white/20 text-white/40'}`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {openReview === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                    <div className="px-5 pb-5 space-y-3 border-t border-white/[0.06]">
                      {app.body.split('\n\n').map((para, j) => (
                        <p key={j} className="text-sm text-white/65 leading-relaxed">{para}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Picks by goal */}
      <section id="picks-by-goal" className="mb-14">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-baseline gap-3">
          <span className="text-[#FF6A00]">—</span> Picks by Training Style
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
          <h3 className="text-xl font-black text-white mb-3">Build Muscle with AI + Protein Tracking</h3>
          <p className="text-sm text-white/60 mb-5 max-w-sm leading-relaxed">Progressive overload, protein & macro tracking, and an AI food scanner — all free to try.</p>
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
        headline="Try Fitnivo — AI Workout + Protein Tracking"
        subheading="Free tier includes 3 AI food scans/day, 15 AI coach messages/day, and unlimited workout logging. Pro is $10/month."
        primaryHref="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
        primaryText="Download Fitnivo"
      />

      {/* Related */}
      <div className="mt-10">
        <h3 className="text-xs uppercase tracking-widest font-mono text-white/40 mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          {[
            ['/blog/fitnivo-vs-fitbod',                     'Fitnivo vs Fitbod'],
            ['/blog/best-ai-personal-trainer-apps-2026',    'Best AI Personal Trainer Apps 2026'],
            ['/blog/best-ai-fitness-apps-2026',             'Best AI Fitness Apps 2026'],
            ['/ai-fitness-coach',                           'Fitnivo AI Fitness Coach'],
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
