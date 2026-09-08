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
    ['AI food scanner (photo → macros)', 'Yes (core feature)', 'Limited / new'],
    ['Barcode + database search', 'Yes', 'Yes (largest DB)'],
    ['Micronutrients tracked', 'Basic', 'Extensive'],
    ['AI nutrition coaching', 'Yes', 'No (macros only)'],
    ['Meal planner', 'Yes', 'Meal ideas (Premium)'],
    ['AI workout planning', 'Yes', 'No (basic logging only)'],
    ['Workout logger', 'Yes', 'Basic'],
    ['Free tier', 'Yes (3 scans/day + 15 AI msgs/day + workout logger)', 'Yes (with ads)'],
    ['Paid price', '$10/mo · $60/yr', '~$19.99/mo · ~$79.99/yr (Premium)'],
    ['Best for', 'AI fitness + nutrition combined', 'Packaged food + huge database'],
  ];

  const faqs = [
    {
      q: 'Is Fitnivo better than MyFitnessPal?',
      a: 'MyFitnessPal has the largest food database and the best barcode scanning for packaged food. Fitnivo has an AI food scanner, workouts, meal planning, and AI coach chat in one app. Different products for different jobs.',
    },
    {
      q: 'Does MyFitnessPal have AI food scanning?',
      a: 'MyFitnessPal has added some AI features, but photo-first food scanning is the core of Fitnivo. If you want to log by photo, Fitnivo is built for that.',
    },
    {
      q: 'Does MyFitnessPal have workouts?',
      a: 'MyFitnessPal is primarily a nutrition app with basic exercise logging. Fitnivo has full AI workout planning, tracking, and progression.',
    },
    {
      q: 'Is Fitnivo cheaper than MyFitnessPal Premium?',
      a: 'Fitnivo has a free tier that includes 3 AI food scans/day, 15 AI coach messages/day, and unlimited workout logger. Fitnivo Pro is $10/month or $60/year. MyFitnessPal Premium is around $19.99/month or $79.99/year — and Fitnivo also includes workouts.',
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
            Choose <strong>MyFitnessPal</strong> if you eat mostly packaged food and want the largest barcode database. Choose <strong>Fitnivo</strong> if you want AI food scanning, meal planning, and workouts alongside nutrition — with a free tier and $10/mo Pro.
          </p>
        </div>
      </motion.div>

      <p className="text-sm text-[#B4B4B4] mb-8">
        Reviewed by the <Link href="/about" className="text-[#FF6A00] hover:underline">Fitnivo Editorial Team</Link>. Fitnivo is our product; we call out where MyFitnessPal is the better fit.
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
            <li><strong className="text-white">Largest food database (14M+ entries):</strong> If you eat a lot of branded / packaged food, barcode coverage is unmatched.</li>
            <li><strong className="text-white">Category veteran:</strong> Long track record, huge user base, plenty of tutorials and community.</li>
            <li><strong className="text-white">Micronutrient depth:</strong> Solid coverage of vitamins and minerals.</li>
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
            <li><strong className="text-white">AI food scanner:</strong> Photo-first logging for mixed dishes, home-cooked meals, and restaurant plates.</li>
            <li><strong className="text-white">Workouts in the same app:</strong> AI workout planning, exercise library, and full logging — MyFitnessPal doesn&apos;t do this.</li>
            <li><strong className="text-white">Meal planner:</strong> Suggests meals around your calorie and macro targets, not just an ideas gallery.</li>
            <li><strong className="text-white">AI coach chat:</strong> Ask questions, get plans, iterate — with tool-calling for real workout and meal generation.</li>
            <li><strong className="text-white">Better paid value:</strong> $10/mo Pro covers both nutrition AND workouts vs $19.99/mo for MyFitnessPal Premium (nutrition only).</li>
          </ul>
        </motion.div>
      </div>

      {/* Choose if */}
      <div className="grid md:grid-cols-2 gap-4 mb-14">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
          <h3 className="font-bold text-white mb-4">Choose {competitorName} if…</h3>
          <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
            <li>You eat mostly packaged/branded food and rely on barcodes</li>
            <li>Database breadth matters more than logging speed</li>
            <li>You already have a separate workout app</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[#FF6A00]/30 bg-[#FF6A00]/[0.04] p-6">
          <h3 className="font-bold text-white mb-4">Choose Fitnivo if…</h3>
          <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
            <li>You want to log meals by photo instead of database search</li>
            <li>You want workouts + nutrition in one app</li>
            <li>You want lower cost — $10/mo Pro covers both, vs MyFitnessPal Premium at ~$19.99/mo for nutrition alone</li>
            <li>You want an AI coach that can create workouts and meal plans on demand</li>
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
        headline="Try Fitnivo instead of MyFitnessPal — free tier available"
        subheading="AI food scanning + workouts + meal planning in one app. Free tier includes 3 AI food scans/day, 15 AI coach messages/day, and unlimited workout logger."
        primaryHref="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
        primaryText="Download Fitnivo"
      />

      {/* Related links */}
      <div className="mt-10">
        <h3 className="text-xs uppercase tracking-widest font-mono text-white/40 mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="/blog/fitnivo-vs-cal-ai" className="text-[#FF6A00] hover:underline">Fitnivo vs Cal AI</Link></li>
          <li><Link href="/blog/fitnivo-vs-macrofactor" className="text-[#FF6A00] hover:underline">Fitnivo vs MacroFactor</Link></li>
          <li><Link href="/blog/best-ai-nutrition-coach-apps-2026" className="text-[#FF6A00] hover:underline">Best AI Nutrition Coach Apps 2026</Link></li>
          <li><Link href="/ai-food-scanner" className="text-[#FF6A00] hover:underline">Fitnivo AI Food Scanner</Link></li>
        </ul>
      </div>
    </>
  );
}
