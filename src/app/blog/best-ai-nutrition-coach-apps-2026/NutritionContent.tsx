'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AppComparisonTable, { CompRow } from '@/components/blog-editorial/AppComparisonTable';
import TopPickCard from '@/components/blog-editorial/TopPickCard';
import SmallPickCard from '@/components/blog-editorial/SmallPickCard';
import BlogSidebar from '@/components/blog-editorial/BlogSidebar';
import BlogCTABanner from '@/components/blog-editorial/BlogCTABanner';
import ReadingProgress from '@/components/blog-editorial/ReadingProgress';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };

const apps = [
  { name: 'Fitnivo',      bestFor: 'All-in-one AI fitness + nutrition', scanner: '✓', macros: '✓', adaptive: '✓', workouts: '✓',         price: 'Free · $10/mo',   url: '/ai-nutrition-coach',          internal: true,
    body: 'Covers calorie & macro tracking, AI food scanning, meal planning, and workouts in one app. Free tier: 3 AI food scans/day, 15 AI coach messages/day, unlimited workout logging. Pro is $10/month or $60/year for unlimited everything.' },
  { name: 'MacroFactor',  bestFor: 'Adaptive macro coaching',           scanner: '—', macros: '✓', adaptive: '✓', workouts: '—',         price: '~$11.99/mo',      url: 'https://macrofactor.com',
    body: 'Built by Stronger By Science. Uses your weight trend and intake data to calculate your actual TDEE, then updates targets weekly. Deepest macro-coaching engine on the market.' },
  { name: 'Welling',      bestFor: 'Conversational chat logging',       scanner: '✓', macros: '✓', adaptive: '—', workouts: '—',         price: 'Paid',            url: 'https://www.welling.ai',
    body: 'Log meals by text or photo through a chat interface. Feels like messaging rather than tracking — ideal for people who hate database search.' },
  { name: 'Cal AI',       bestFor: 'Photo-based calorie tracking',      scanner: '✓', macros: '✓', adaptive: '—', workouts: '—',         price: 'Free · ~$10/mo',  url: 'https://calai.app',
    body: 'The viral AI calorie tracker. Photo of a plate → calories and macros in seconds. Uses the MyFitnessPal database for search coverage.' },
  { name: 'MyFitnessPal', bestFor: 'Largest food database',             scanner: '✓ (barcode)', macros: '✓', adaptive: '—', workouts: '✓ (basic)', price: 'Free · $19.99/mo', url: 'https://www.myfitnesspal.com',
    body: 'The category veteran. Over 14 million database entries and the best barcode-scanning experience for packaged food.' },
  { name: 'Cronometer',   bestFor: 'Micronutrient depth',               scanner: '—', macros: '✓', adaptive: '—', workouts: '—',         price: 'Free · Gold',     url: 'https://cronometer.com',
    body: 'The most rigorous micronutrient tracker. Every entry is manually vetted. Best for people who care about vitamins and minerals, not just calories.' },
  { name: 'Noom',         bestFor: 'Behavior-change coaching',          scanner: '—', macros: '—', adaptive: '—', workouts: '—',         price: '~$60/mo',         url: 'https://www.noom.com',
    body: 'Psychology-first weight management with real human coaches. Higher cost, less about macros, more about habits and mindset.' },
  { name: 'Nutrola',      bestFor: 'Voice logging + AI diet assistant', scanner: '✓', macros: '✓', adaptive: '—', workouts: '—',         price: 'Paid',            url: 'https://nutrola.app',
    body: 'Combines photo recognition, voice logging, and personalized diet coaching based on your tracked data.' },
];

const compColumns = [
  { key: 'scanner',  label: 'Food Scan' },
  { key: 'macros',   label: 'Macros' },
  { key: 'adaptive', label: 'Adapts' },
  { key: 'workouts', label: 'Workouts' },
];

const compRows: CompRow[] = apps.map((a) => ({
  name: a.name,
  bestFor: a.bestFor,
  price: a.price,
  isOurPick: a.name === 'Fitnivo',
  values: { scanner: a.scanner, macros: a.macros, adaptive: a.adaptive, workouts: a.workouts },
}));

const toc = [
  { id: 'comparison',       label: 'Quick comparison table' },
  { id: 'detailed-reviews', label: 'All 8 apps reviewed' },
  { id: 'picks-by-goal',    label: 'Picks by goal' },
  { id: 'faq',              label: 'Frequently asked questions' },
];

const takeaways = [
  'MacroFactor leads on adaptive macro coaching — it calculates your actual TDEE from your data.',
  'Fitnivo is the only free app that combines food scanning, macro coaching, and workouts.',
  'Cal AI and Welling win on logging friction — photo and chat logging beat database search.',
  'Cronometer is the deepest micronutrient tracker if vitamins matter to you.',
  'Noom focuses on habits and mindset, not macros — a very different product.',
];

const goalPicks = [
  { goal: 'Weight loss',              pick: 'MacroFactor or Fitnivo',          note: 'Both adapt targets to your actual progress.' },
  { goal: 'Muscle gain',              pick: 'MacroFactor, Fitnivo, or MFP',    note: 'Protein tracking + progressive overload = the combination.' },
  { goal: 'Fast photo logging',       pick: 'Cal AI or Fitnivo',               note: 'Built-in food scanner — photo to macros in seconds.' },
  { goal: 'Micronutrient tracking',   pick: 'Cronometer',                      note: 'Manually verified entries. Nothing else comes close.' },
  { goal: 'Habit & mindset change',   pick: 'Noom',                            note: 'Color-coded food system and human coaching.' },
  { goal: 'Workouts + nutrition',     pick: 'Fitnivo',                         note: 'The only app that covers both sides of the equation.' },
];

const faqs = [
  { q: 'What is the best AI nutrition coach app in 2026?', a: 'MacroFactor leads on adaptive macro coaching, Welling on conversational logging, Cal AI on photo scanning, MyFitnessPal on database breadth, and Fitnivo on all-in-one AI fitness + nutrition.' },
  { q: 'Do AI nutrition apps really work?', a: 'Yes — the value comes from consistent logging plus adaptive targets. The best apps use your actual tracked data to adjust recommendations weekly instead of handing you a static plan.' },
  { q: 'How much do AI nutrition coach apps cost?', a: 'Most cost USD 8–20 per month. Fitnivo has a free tier (3 AI food scans/day, 15 AI coach messages/day, unlimited workout logger). Pro is $10/month or $60/year.' },
  { q: 'Which AI nutrition app is best for weight loss?', a: 'MacroFactor and Fitnivo are strong picks — both adjust calorie and macro targets based on your logged progress. Fitnivo also covers workouts, which is important for preserving muscle during a deficit.' },
];

export default function NutritionContent() {
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
            MacroFactor wins for adaptive macro coaching, Cal AI for photo logging, MyFitnessPal for the biggest database, and{' '}
            <strong>Fitnivo for all-in-one AI fitness + nutrition</strong> — with a free tier usable daily (3 AI scans/day, 15 AI coach messages/day) plus Pro at $10/mo or $60/yr.
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
        &ldquo;AI nutrition coach&rdquo; is a crowded category in 2026 — from photo scanners to conversational bots to full macro-coaching engines. The apps below take genuinely different approaches; picking the right one depends on how you want to log and what you want the app to do with your data.
      </motion.p>

      {/* Comparison table — emerald pick for Fitnivo */}
      <div id="comparison">
        <AppComparisonTable
          columns={compColumns}
          rows={compRows}
          title="Quick Comparison"
          subtitle="8 AI nutrition coach apps compared side-by-side — 2026 edition."
          pickColor="emerald"
          pickLabel="Best Pick"
        />
      </div>

      {/* #1 Fitnivo — TopPickCard */}
      <TopPickCard
        rank={1}
        name="Fitnivo"
        tagline="Best all-in-one AI nutrition + fitness app"
        description="Fitnivo is the only AI nutrition app that also covers workouts — closing both sides of the energy equation in one free-to-try product. AI food scanner, adaptive macro coaching, meal planning, and a full workout coach."
        bullets={[
          'AI food scanner — photograph any meal for instant macros',
          'Adaptive calorie & macro targets that update as you progress',
          'AI nutrition coach with tool-calling for meal plans',
          'Workout programming + tracking alongside nutrition',
          'Free tier: 3 scans/day · 15 coach messages/day',
          'Pro: unlimited everything at $10/month or $60/year',
        ]}
        ctaHref="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
        ctaText="Try Fitnivo Free"
        mascotSrc="/images/mascot/female-standing-transparent.png"
        quote="The only nutrition app where your food coach and workout coach actually talk to each other."
        badge="Best Pick 2026"
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

      {/* Apps #6–8 */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} variants={stagger} className="space-y-4 mb-16">
        {apps.slice(5).map((a, i) => (
          <motion.div key={a.name} variants={fadeUp}
            className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 hover:border-[#FF6A00]/30 hover:bg-white/[0.03] transition-all group">
            <div className="shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-bold font-mono text-xs text-white/50 group-hover:text-[#FF6A00] transition">{i + 6}</div>
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

      {/* Mascot break + CTA inline */}
      <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="relative rounded-3xl border border-[#FF6A00]/25 bg-gradient-to-br from-[#FF6A00]/[0.07] via-black to-black overflow-hidden mb-14 min-h-[180px] flex items-center">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/50 to-transparent" />
        <div className="relative z-10 px-8 py-8 flex-1">
          <p className="text-xs uppercase tracking-widest font-mono text-[#FF6A00] mb-2">Free to Start</p>
          <h3 className="text-xl font-black text-white mb-3">Track Nutrition + Workouts Together</h3>
          <p className="text-sm text-white/60 mb-5 max-w-sm leading-relaxed">AI food scanner, adaptive macro coaching, and workout programming — free tier available, no credit card needed.</p>
          <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF6A00] text-black font-bold text-sm hover:bg-[#FF8524] transition shadow-lg shadow-[#FF6A00]/20">
            Download Free →
          </motion.a>
        </div>
        {/* Mascot */}
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
        headline="Try Fitnivo — AI Nutrition Coach"
        subheading="Free tier includes 3 AI food scans/day, 15 AI coach messages/day, and unlimited workout logging. Pro is $10/month."
        primaryHref="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
        primaryText="Download Fitnivo"
      />

      {/* Related */}
      <div className="mt-10">
        <h3 className="text-xs uppercase tracking-widest font-mono text-white/40 mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          {[
            ['/blog/fitnivo-vs-macrofactor',    'Fitnivo vs MacroFactor'],
            ['/blog/fitnivo-vs-myfitnesspal',   'Fitnivo vs MyFitnessPal'],
            ['/blog/fitnivo-vs-cal-ai',         'Fitnivo vs Cal AI'],
            ['/ai-nutrition-coach',             'Fitnivo AI Nutrition Coach'],
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
