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
    bestFor: 'Beginners who want workouts + nutrition together',
    program: '✓',
    guidance: '✓',
    progression: '✓',
    nutrition: '✓',
    price: 'Free · $10/mo',
    url: '/ai-fitness-coach',
    internal: true,
    body: 'Fitnivo onboards you with goal, experience level, equipment, and schedule — then generates a structured weekly workout program. Progressive overload happens automatically based on what you log. FitBuu can explain exercises and answer beginner questions. Free tier: 3 AI food scans/day, 15 AI coach messages/day, unlimited workout logging.',
  },
  {
    name: 'Freeletics',
    bestFor: 'Beginners who want bodyweight workouts with coach guidance',
    program: '✓',
    guidance: '✓',
    progression: '✓',
    nutrition: 'Basic',
    price: '~$34.99/qtr',
    url: 'https://www.freeletics.com',
    body: 'Genuine beginner track with bodyweight workouts that scale down to easy movements. AI Coach collects post-session feedback and adjusts next workout accordingly.',
  },
  {
    name: 'FitnessAI',
    bestFor: 'Beginners going to a gym who want simple strength progression',
    program: '✓',
    guidance: 'Limited',
    progression: '✓',
    nutrition: '—',
    price: '~$89/yr',
    url: 'https://www.fitnessai.com',
    body: 'Clean and focused — gives you a workout with specific weights and tells you when to increase. For beginners who just want to show up and follow instructions at the gym.',
  },
  {
    name: 'Nike Training Club',
    bestFor: 'Beginners who want free guided video workouts',
    program: '✓',
    guidance: '✓ (video)',
    progression: 'Limited',
    nutrition: '—',
    price: 'Free',
    url: 'https://www.nike.com/ntc-app',
    body: 'Best free option for beginners who want to see the movements. Professionally produced videos. Limitation: does not track sets/reps in detail or apply personalized progressive overload.',
  },
  {
    name: 'Fitbod',
    bestFor: 'Gym beginners who want variety in their programs',
    program: 'Limited',
    guidance: '✓',
    progression: '✓',
    nutrition: '—',
    price: '~$12.99/mo',
    url: 'https://fitbod.me',
    body: 'Generates each workout fresh based on what you last trained. Good for beginners wanting variety — but lacks the consistent program structure that helps build habits early on.',
  },
];

const compColumns = [
  { key: 'program', label: 'Structured Program' },
  { key: 'guidance', label: 'Exercise Guide' },
  { key: 'progression', label: 'Auto-Progression' },
  { key: 'nutrition', label: 'Nutrition' },
];

const compRows: CompRow[] = apps.map((a) => ({
  name: a.name,
  bestFor: a.bestFor,
  price: a.price,
  isOurPick: a.name === 'Fitnivo',
  values: { program: a.program, guidance: a.guidance, progression: a.progression, nutrition: a.nutrition },
}));

const takeaways = [
  'A structured program beats a random exercise generator — look for a plan that builds over weeks.',
  'Fitnivo covers workouts and nutrition together — beginners rarely need two separate apps.',
  'Progressive overload should be automatic — the app decides when to add weight.',
  'Nike Training Club is the best completely free choice for video-guided sessions.',
  'Pick one app and use it for at least 4 weeks before evaluating — early results take time.',
];

const goalPicks = [
  { goal: 'First time working out', pick: 'Fitnivo or Freeletics', note: 'Both onboard gently and build from your experience level.' },
  { goal: 'Bodyweight / no equipment', pick: 'Freeletics or Fitnivo', note: 'Both support full bodyweight beginner programs.' },
  { goal: 'Free with video guidance', pick: 'Nike Training Club', note: 'Professional guided videos at zero cost.' },
  { goal: 'Simple gym strength tracking', pick: 'FitnessAI', note: 'Tells you exactly what weight to use and when to increase.' },
  { goal: 'Workouts + nutrition in one app', pick: 'Fitnivo', note: 'Free tier covers both sides so beginners do not need two apps.' },
];

const faqs = [
  { q: 'Can beginners use AI fitness apps?', a: 'Yes. AI fitness apps are well-suited to beginners because they remove the need to know how to design a workout. You input your goal, experience level, and available equipment, and the app builds a structured program for you — no prior knowledge required.' },
  { q: 'What is the best AI fitness app for someone who has never worked out?', a: 'For absolute beginners, Fitnivo and Freeletics are good starting points. Fitnivo covers workouts and nutrition together so you do not need two apps. Freeletics has solid beginner bodyweight programs. Nike Training Club is a strong free option with video guidance.' },
  { q: 'Do AI fitness apps teach you proper form?', a: 'Most AI fitness apps include exercise descriptions and some include demo videos or GIFs. They cannot watch you and correct your form in real time. For complex movements like squats and deadlifts, beginners should also seek video resources or an in-person session to check form basics.' },
  { q: 'How long before I see results using an AI fitness app?', a: 'Visible changes typically appear within 4–8 weeks of consistent training and adequate nutrition. Strength gains and improved energy often come faster, within 2–4 weeks.' },
];

const tldr = 'The best AI fitness apps for beginners handle all the decisions you don\'t know how to make yet. Fitnivo is the most complete free-to-try option — workouts and nutrition in one app, with FitBuu to answer your questions along the way.';

const fullReviews = [
  {
    name: 'Fitnivo',
    bestFor: 'Beginners who want workouts + nutrition together',
    paragraphs: [
      'Fitnivo onboards you with goal, experience level, equipment, and schedule — then generates a structured weekly workout program. The AI fitness coach applies progressive overload automatically based on what you log: if you hit your targets, the next session increases the load. You do not need to know when to add weight.',
      'The addition of calorie and macro tracking in the same app means beginners can address both sides of the equation without juggling multiple subscriptions. The free tier gives you unlimited workout logging, 3 AI food scans per day, and 15 AI coach messages per day — enough to genuinely test the product before spending anything.',
      'Weakness for beginners: No video demonstrations built in. Exercise descriptions and the AI coach fill the gap, but if you need to see the movement, you will need to look it up externally.',
    ],
  },
  {
    name: 'Freeletics',
    bestFor: 'Beginners who want bodyweight workouts with coach guidance',
    paragraphs: [
      'Freeletics has a genuine beginner track with bodyweight workouts that scale down to easy movements. The AI Coach collects feedback after every session (how hard was it, how did you feel) and adjusts the next workout accordingly. This makes it good for beginners who are not sure how to pace themselves.',
      'Weakness: No gym-equipment programs on the free tier. Nutrition tracking is basic. Pricing is higher than some alternatives.',
    ],
  },
  {
    name: 'FitnessAI',
    bestFor: 'Beginners going to a gym who want simple strength progression',
    paragraphs: [
      'FitnessAI is clean and focused — it gives you a workout with specific weights to use and tells you when to increase. For beginners who just want to show up and follow instructions at the gym without thinking too much, this works well. It does not overwhelm with options.',
      'Weakness: No nutrition, limited exercise explanations, gym equipment required.',
    ],
  },
  {
    name: 'Nike Training Club',
    bestFor: 'Beginners who want free guided video workouts',
    paragraphs: [
      'Nike Training Club is the best free option for beginners who want to see the movements. Videos are professionally produced. There is a beginner program with a sensible progression. The limitation is that NTC does not track sets and reps in detail or apply personalized progressive overload — it is more of a video library with some structure than a true AI workout system.',
    ],
  },
  {
    name: 'Fitbod',
    bestFor: 'Gym beginners who want variety in their programs',
    paragraphs: [
      'Fitbod generates each workout session fresh based on what you last trained and what equipment is available. For beginners, this can mean a lot of variety — which is both good (staying interested) and bad (lack of a consistent program to build habits around). It is better once you have a few months of experience and want more exercise diversity.',
    ],
  },
];

export default function BeginnersContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openReview, setOpenReview] = useState<number | null>(null);

  return (
    <>
      <ReadingProgress />

      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="flex gap-4 items-start bg-[#FF6A00]/[0.06] border border-[#FF6A00]/30 rounded-2xl p-5 mb-10"
      >
        <Image src="/images/mascot/mascot-avatar-circle.png" alt="" width={52} height={52} className="shrink-0 rounded-full ring-2 ring-[#FF6A00]/40" />
        <div>
          <p className="text-[10px] uppercase tracking-widest text-[#FF6A00] font-bold font-mono mb-1">TL;DR</p>
          <p className="text-white text-sm leading-relaxed">{tldr}</p>
        </div>
      </motion.div>

      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="text-xs text-white/40 mb-10 flex items-center gap-2">
        <span className="inline-block w-1 h-1 rounded-full bg-white/40" />
        Reviewed by the <Link href="/about" className="text-[#FF6A00] hover:underline">Fitnivo Editorial Team</Link>. Fitnivo is our product; we call out where other apps are the better pick.
      </motion.p>

      <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="text-white/65 text-lg leading-relaxed mb-12">
        The best AI fitness apps for beginners in 2026 handle the decisions you do not know how to make yet — which exercises, how many sets, how heavy, and how to get harder over time. You do not need gym experience to start. You need an app that builds a real program and explains the reasoning.
      </motion.p>

      <div id="comparison">
        <AppComparisonTable
          columns={compColumns}
          rows={compRows}
          title="Quick Comparison"
          subtitle="5 AI fitness apps for beginners — structured programs, guidance, and progression compared."
          pickColor="emerald"
          pickLabel="My Pick"
        />
      </div>

      <TopPickCard
        rank={1}
        name="Fitnivo"
        tagline="Best for beginners who want workouts + nutrition without two apps"
        description="Fitnivo asks about your experience level, equipment, and goals — then builds a beginner-friendly structured program. FitBuu (the AI agent) automatically advances your weights when you hit targets, explains exercises, and helps you track nutrition in the same app. Free to start, no credit card needed."
        bullets={[
          'Structured weekly program based on your experience level and equipment',
          'FitBuu (AI agent) explains exercises and answers your questions',
          'Progressive overload is automatic — no need to decide when to add weight',
          'Calorie & macro tracking built in — no second app needed',
          'Free tier: 3 scans/day · 15 coach messages/day · unlimited workouts',
          'Pro: unlimited everything at $10/month or $60/year',
        ]}
        ctaHref="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
        ctaText="Try Fitnivo Free"
        mascotSrc="/images/mascot/female-standing-transparent.png"
        quote="The hardest part of starting is knowing what to do. FitBuu figures that out for you."
        badge="My Pick 2026"
      />

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

      <section id="detailed-reviews" className="mb-14">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-baseline gap-3">
          <span className="text-[#FF6A00]">—</span> App Reviews In Full
        </motion.h2>
        <div className="space-y-2">
          {fullReviews.map((review, i) => (
            <div key={review.name}
              className={`rounded-2xl border overflow-hidden transition-colors ${openReview === i ? 'border-[#FF6A00]/40 bg-[#FF6A00]/[0.04]' : 'border-white/[0.08] bg-white/[0.02]'}`}>
              <button onClick={() => setOpenReview(openReview === i ? null : i)}
                className="w-full flex items-center gap-3 p-5 text-left">
                <AppIcon name={review.name} size="sm" />
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-white text-sm">{review.name}</span>
                  <span className="ml-2 text-xs text-white/40 font-mono hidden sm:inline">— {review.bestFor}</span>
                </div>
                <span className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all font-mono text-base ${openReview === i ? 'border-[#FF6A00] text-[#FF6A00] rotate-45' : 'border-white/20 text-white/40'}`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {openReview === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                    <div className="px-5 pb-5 space-y-3 border-t border-white/[0.06]">
                      {review.paragraphs.map((para, j) => (
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

      <section id="what-beginners-need" className="mb-14">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-baseline gap-3">
          <span className="text-[#FF6A00]">—</span> What Beginners Actually Need
        </motion.h2>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} variants={stagger} className="space-y-4 mb-8">
          {[
            { need: 'A structured program', detail: 'Not a random workout generator. A program has a weekly structure that builds logically over weeks, balancing muscle groups and recovery.' },
            { need: 'Exercise guidance', detail: 'Descriptions, video or GIF demos, and ideally an explanation of what muscle each movement targets and why it is in your plan.' },
            { need: 'Automatic progression', detail: 'You should not be doing the same weights for the same reps forever. A good beginner app increases difficulty based on what you log.' },
            { need: 'Low friction to log', detail: 'If logging takes 10 minutes, beginners stop doing it. The interface should make the bar to log near zero.' },
          ].map((item) => (
            <motion.div key={item.need} variants={fadeUp}
              className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
              <span className="text-[#FF6A00] mt-0.5 shrink-0">◆</span>
              <div>
                <span className="font-bold text-white text-sm">{item.need}</span>
                <span className="text-white/60 text-sm"> — {item.detail}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} variants={stagger} className="mb-4">
          <motion.p variants={fadeUp} className="text-white/50 text-sm leading-relaxed">
            Key takeaways from the data above:
          </motion.p>
          <ul className="mt-3 space-y-2">
            {takeaways.map((t) => (
              <motion.li key={t} variants={fadeUp} className="flex items-start gap-2 text-sm text-white/60">
                <span className="text-[#FF6A00] shrink-0 mt-0.5">◆</span>
                {t}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

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

      <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="relative rounded-3xl border border-[#FF6A00]/25 bg-gradient-to-br from-[#FF6A00]/[0.07] via-black to-black overflow-hidden mb-14 min-h-[180px] flex items-center">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/50 to-transparent" />
        <div className="relative z-10 px-8 py-8 flex-1">
          <p className="text-xs uppercase tracking-widest font-mono text-[#FF6A00] mb-2">Free to Start</p>
          <h3 className="text-xl font-black text-white mb-3">Start Your First Program Today</h3>
          <p className="text-sm text-white/60 mb-5 max-w-sm leading-relaxed">Structured beginner workouts and nutrition tracking in one app — free tier available, no credit card needed.</p>
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
        headline="Start with a Plan Built Around You"
        subheading="Fitnivo generates a beginner-friendly workout program from your goal, equipment, and schedule — and tracks nutrition in the same app. Free to start."
        primaryHref="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
        primaryText="Download Fitnivo Free"
      />

      <div className="mt-10">
        <h3 className="text-xs uppercase tracking-widest font-mono text-white/40 mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          {[
            ['/ai-fitness-coach', 'Fitnivo AI Fitness Coach'],
            ['/ai-workout-planner', 'Fitnivo AI Workout Planner'],
            ['/blog/what-is-an-ai-fitness-coach', 'What is an AI fitness coach?'],
            ['/blog/how-ai-fitness-coaches-work', 'How AI fitness coaches work'],
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
