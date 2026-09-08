'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AppIcon from '@/components/blog-editorial/AppIcon';
import BlogCTABanner from '@/components/blog-editorial/BlogCTABanner';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

interface Props { competitorName: string; }

export default function VsContent({ competitorName }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features: [string, string, string][] = [
    ['Adaptive calorie & macro targets', 'Yes', 'Yes (deepest engine)'],
    ['AI food scanner (photo → macros)', 'Yes', 'No (manual/barcode)'],
    ['Barcode + database search', 'Yes', 'Yes'],
    ['Micronutrients tracked', 'Basic', 'Extensive (54+ items)'],
    ['Meal planner', 'Yes', 'No'],
    ['AI workouts / workout logger', 'Yes', 'No'],
    ['AI coach chat', 'Yes', 'No'],
    ['Free tier', 'Yes (3 scans/day + 15 AI msgs/day + workout logger)', 'Limited trial only'],
    ['Pro price', '$10/mo · $60/yr', '~$11.99/mo · ~$71.99/yr'],
    ['Best for', 'All-in-one AI fitness + nutrition', 'Pure adaptive macro coaching'],
  ];

  const faqs = [
    {
      q: 'Is MacroFactor better than Fitnivo for macro coaching?',
      a: 'MacroFactor has the deepest adaptive-macro engine — weekly target adjustments based on your weight trend and intake data. Fitnivo does adaptive nutrition too, but pairs it with workouts, an AI food scanner, and meal planning in one app.',
    },
    {
      q: 'Does MacroFactor have an AI food scanner?',
      a: 'MacroFactor focuses on manual and barcode logging. Fitnivo includes an AI food scanner: take a photo of your meal and get calorie and macro estimates.',
    },
    {
      q: 'Does MacroFactor have workouts?',
      a: 'No, MacroFactor is nutrition-only. Fitnivo covers both training and nutrition in one app.',
    },
    {
      q: 'Which is cheaper?',
      a: 'Fitnivo has a free tier (3 AI scans/day, 15 AI messages/day, unlimited workout logger). Fitnivo Pro is $10/month or $60/year. MacroFactor is around $11.99/month or $71.99/year and is nutrition-only.',
    },
  ];

  return (
    <>
      {/* Short answer box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex gap-4 items-start bg-[#FF6A00]/[0.06] border border-[#FF6A00]/30 rounded-2xl p-5 mb-10"
      >
        <Image
          src="/images/mascot/mascot-avatar-circle.png"
          alt=""
          width={52}
          height={52}
          className="shrink-0 rounded-full ring-2 ring-[#FF6A00]/40"
        />
        <div>
          <p className="text-[10px] uppercase tracking-widest text-[#FF6A00] font-bold font-mono mb-1">Short Answer</p>
          <p className="text-white text-sm leading-relaxed">
            MacroFactor has the deepest adaptive-macro engine — if pure macro coaching is all you need, it&apos;s excellent. Fitnivo pairs adaptive nutrition with AI food scanning, meal planning, and workouts in one app, with a free tier and $10/mo Pro.
          </p>
        </div>
      </motion.div>

      <p className="text-sm text-[#B4B4B4] mb-8">
        Reviewed by the <Link href="/about" className="text-[#FF6A00] hover:underline">Fitnivo Editorial Team</Link>. Fitnivo is our product; we call out where MacroFactor is the better fit.
      </p>

      {/* Comparison table */}
      <section className="mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3"
        >
          <span className="text-[#FF6A00]">—</span> Feature Comparison
        </motion.h2>

        <div className="rounded-2xl border border-white/[0.08] overflow-hidden mb-10">
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-white/[0.08] bg-white/[0.02]">
            <div className="p-4 text-xs uppercase tracking-widest font-mono text-white/40">Feature</div>
            <div className="p-4 flex items-center gap-3 border-l border-white/[0.08]">
              <AppIcon name="Fitnivo" size="sm" />
              <span className="font-bold text-white text-sm">Fitnivo</span>
            </div>
            <div className="p-4 flex items-center gap-3 border-l border-white/[0.08]">
              <AppIcon name={competitorName} size="sm" />
              <span className="font-bold text-white/70 text-sm">{competitorName}</span>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
          >
            {features.map((row, i) => (
              <motion.div
                key={row[0]}
                variants={fadeUp}
                className={`grid grid-cols-[1fr_1fr_1fr] border-t border-white/[0.06] ${i % 2 === 1 ? 'bg-white/[0.01]' : ''}`}
              >
                <div className="p-3.5 text-sm font-semibold text-white/80">{row[0]}</div>
                <div className="p-3.5 text-sm text-emerald-400 border-l border-white/[0.06]">{row[1]}</div>
                <div className="p-3.5 text-sm text-white/50 border-l border-white/[0.06]">{row[2]}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Where each wins */}
      <div className="grid md:grid-cols-2 gap-4 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6"
        >
          <h3 className="font-bold text-white mb-4 flex items-center gap-2">
            <AppIcon name={competitorName} size="sm" /> Where {competitorName} wins
          </h3>
          <ul className="space-y-3 text-[#B4B4B4] text-sm list-disc pl-5">
            <li><strong className="text-white">Weekly adaptive targets:</strong> MacroFactor calculates your actual TDEE from your weight trend and intake, and adjusts weekly. Some of the best macro-coaching math on the market.</li>
            <li><strong className="text-white">Micronutrient depth:</strong> Tracks 54+ items including alcohol, caffeine, and water alongside macros and micros.</li>
            <li><strong className="text-white">Data-nerd features:</strong> Detailed export, trend charts, and reference intakes for people who love the numbers.</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-2xl border border-[#FF6A00]/30 bg-[#FF6A00]/[0.04] p-6"
        >
          <h3 className="font-bold text-white mb-4 flex items-center gap-2">
            <AppIcon name="Fitnivo" size="sm" /> Where Fitnivo wins
          </h3>
          <ul className="space-y-3 text-[#B4B4B4] text-sm list-disc pl-5">
            <li><strong className="text-white">Photo logging:</strong> AI food scanner cuts logging friction — snap a plate, get macros. MacroFactor doesn&apos;t have this.</li>
            <li><strong className="text-white">Workouts included:</strong> Fitnivo covers training, tracking, and progression. MacroFactor is nutrition-only.</li>
            <li><strong className="text-white">Meal planner:</strong> Meal ideas built around your targets. MacroFactor logs but doesn&apos;t plan.</li>
            <li><strong className="text-white">Free tier:</strong> Real daily usage without paying. MacroFactor is trial-then-paid.</li>
            <li><strong className="text-white">One app, one bill:</strong> Nutrition + training in a single $10/mo subscription.</li>
          </ul>
        </motion.div>
      </div>

      {/* Choose if */}
      <div className="grid md:grid-cols-2 gap-4 mb-14">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
          <h3 className="font-bold text-white mb-4">Choose {competitorName} if…</h3>
          <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
            <li>You care most about deep, weekly adaptive macro targets</li>
            <li>You want detailed micronutrient tracking</li>
            <li>You already have a separate workout app you love</li>
            <li>Manual/barcode logging is fine — you don&apos;t need photo scanning</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[#FF6A00]/30 bg-[#FF6A00]/[0.04] p-6">
          <h3 className="font-bold text-white mb-4">Choose Fitnivo if…</h3>
          <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
            <li>You want nutrition + workouts in one app</li>
            <li>You want photo-based food logging (AI food scanner)</li>
            <li>You want meal planning around your macros</li>
            <li>You want a real free tier before paying</li>
          </ul>
        </div>
      </div>

      {/* FAQ accordion */}
      <section id="faq" className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
          <span className="text-[#FF6A00]">—</span> Frequently Asked Questions
        </h2>
        <div className="space-y-0 rounded-2xl border border-white/[0.08] overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={faq.q} className={`border-t border-white/[0.08] ${i === 0 ? 'border-t-0' : ''}`}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-semibold text-white text-sm">{faq.q}</span>
                <span className={`text-[#FF6A00] text-lg leading-none transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-[#B4B4B4] text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <BlogCTABanner
        headline="Try Fitnivo instead of MacroFactor — free tier available"
        subheading="Adaptive nutrition + AI food scanner + workouts in one app. Free tier includes 3 AI food scans/day, 15 AI coach messages/day, and unlimited workout logger."
        primaryHref="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
        primaryText="Download Fitnivo"
      />

      {/* Related links */}
      <div className="mt-10">
        <h3 className="text-xs uppercase tracking-widest font-mono text-white/40 mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="/blog/fitnivo-vs-cal-ai" className="text-[#FF6A00] hover:underline">Fitnivo vs Cal AI</Link></li>
          <li><Link href="/blog/fitnivo-vs-myfitnesspal" className="text-[#FF6A00] hover:underline">Fitnivo vs MyFitnessPal</Link></li>
          <li><Link href="/blog/best-ai-nutrition-coach-apps-2026" className="text-[#FF6A00] hover:underline">Best AI Nutrition Coach Apps 2026</Link></li>
          <li><Link href="/ai-nutrition-coach" className="text-[#FF6A00] hover:underline">Fitnivo AI Nutrition Coach</Link></li>
        </ul>
      </div>
    </>
  );
}
