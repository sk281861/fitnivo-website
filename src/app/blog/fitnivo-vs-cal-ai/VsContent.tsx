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
    ['AI food scanner (photo → macros)', 'Yes', 'Yes (core feature)'],
    ['Calorie & macro tracking', 'Yes', 'Yes'],
    ['Micronutrients tracked', 'Basic', 'Limited'],
    ['Nutrition database', 'Growing', 'Uses MyFitnessPal DB'],
    ['AI nutrition coaching', 'Yes', 'Limited'],
    ['Meal planner', 'Yes', 'No'],
    ['AI workouts', 'Yes', 'No'],
    ['Workout tracking', 'Yes', 'No'],
    ['Free tier', 'Yes (3 scans/day + 15 AI messages/day + workout logger)', 'Limited trial only'],
    ['Pro annual price', '$60/yr ($5/mo effective)', 'Higher — see Cal AI pricing'],
    ['Best for', 'All-in-one fitness + nutrition', 'Focused calorie tracking by photo'],
  ];

  const faqs = [
    {
      q: 'Is Cal AI better than Fitnivo for calorie tracking?',
      a: 'Cal AI is a focused AI calorie-tracker. Fitnivo also has an AI food scanner but combines it with workouts, meal planning, and nutrition coaching in one app.',
    },
    {
      q: 'Is Cal AI accurate?',
      a: 'Cal AI provides estimates. Accuracy is good for clear, single-item foods and lower for mixed dishes with hidden ingredients — the same is true of any AI food scanner today, including Fitnivo.',
    },
    {
      q: 'Does Cal AI have workouts?',
      a: 'No. Cal AI is nutrition-only. Pair it with a workout app, or use Fitnivo for both.',
    },
    {
      q: 'Which is cheaper overall?',
      a: 'Fitnivo has a free tier with real daily usage (3 AI food scans/day, 15 AI coach messages/day, unlimited workout logger). Fitnivo Pro is $10/month or $60/year (effectively $5/month on annual). Cal AI is nutrition-only, so the fair comparison is Cal AI + a workout app subscription — which almost always exceeds Fitnivo Pro.',
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
            Cal AI is an excellent single-purpose AI calorie tracker. Fitnivo has the same photo-scanning core plus workouts, meal planning, and nutrition coaching in one app — with a free tier (3 AI food scans/day, 15 AI coach messages/day, unlimited workout logger). Fitnivo Pro is $10/month or $60/year for unlimited.
          </p>
        </div>
      </motion.div>

      <p className="text-sm text-[#B4B4B4] mb-8">
        Reviewed by the <Link href="/about" className="text-[#FF6A00] hover:underline">Fitnivo Editorial Team</Link>. Fitnivo is our product; we still call out where Cal AI is the better fit.
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
            <li><strong className="text-white">Purpose-built for photo logging:</strong> It&apos;s the whole product — the photo → macros flow is very polished.</li>
            <li><strong className="text-white">Access to MyFitnessPal database:</strong> Since late 2025, Cal AI leverages MyFitnessPal&apos;s food database, giving broad packaged-food coverage.</li>
            <li><strong className="text-white">Brand recognition:</strong> One of the more viral AI-calorie apps of 2025–2026; you&apos;ll find plenty of user tips online.</li>
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
            <li><strong className="text-white">Nutrition + workouts in one place:</strong> Cal AI doesn&apos;t do workouts. Fitnivo does.</li>
            <li><strong className="text-white">Meal planning:</strong> Fitnivo builds meal ideas around your calorie and macro targets — Cal AI logs, but doesn&apos;t plan.</li>
            <li><strong className="text-white">AI coaching grounded in your data:</strong> Fitnivo turns tracked meals into recommendations, not just totals.</li>
            <li><strong className="text-white">Better value if you also work out:</strong> One subscription covers what Cal AI + a workout app would cost together.</li>
          </ul>
        </motion.div>
      </div>

      {/* Choose if */}
      <div className="grid md:grid-cols-2 gap-4 mb-14">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
          <h3 className="font-bold text-white mb-4">Choose {competitorName} if…</h3>
          <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
            <li>You only need a fast photo-to-calorie logger</li>
            <li>You already have a separate workout app you love</li>
            <li>You care most about brand familiarity in calorie apps</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[#FF6A00]/30 bg-[#FF6A00]/[0.04] p-6">
          <h3 className="font-bold text-white mb-4">Choose Fitnivo if…</h3>
          <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
            <li>You want food scanning + workouts + coaching in one app</li>
            <li>You&apos;re trying to lose fat or gain muscle (nutrition + training)</li>
            <li>You want meal planning around your macro targets</li>
            <li>You want a real free tier to start and a single $10/mo (or $60/yr) Pro plan instead of paying for both a calorie app and a workout app</li>
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
        headline="Try Fitnivo instead of Cal AI — free tier available"
        subheading="AI food scanning + workouts + meal planning in one app. Free tier includes 3 AI food scans/day, 15 AI coach messages/day, and unlimited workout logger."
        primaryHref="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
        primaryText="Download Fitnivo"
      />

      {/* Related links */}
      <div className="mt-10">
        <h3 className="text-xs uppercase tracking-widest font-mono text-white/40 mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="/blog/best-ai-fitness-apps-2026" className="text-[#FF6A00] hover:underline">Best AI Fitness Apps in 2026</Link></li>
          <li><Link href="/blog/fitnivo-vs-fitbod" className="text-[#FF6A00] hover:underline">Fitnivo vs Fitbod</Link></li>
          <li><Link href="/ai-food-scanner" className="text-[#FF6A00] hover:underline">Fitnivo AI Food Scanner</Link></li>
          <li><Link href="/ai-nutrition-coach" className="text-[#FF6A00] hover:underline">Fitnivo AI Nutrition Coach</Link></li>
        </ul>
      </div>
    </>
  );
}
