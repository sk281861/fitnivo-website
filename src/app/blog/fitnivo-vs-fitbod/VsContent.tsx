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
    ['AI workout generation', 'Yes', 'Yes'],
    ['Equipment-aware plans', 'Yes', 'Yes'],
    ['Workout logging & history', 'Yes', 'Yes'],
    ['Progressive overload tracking', 'Yes', 'Yes'],
    ['Exercise video library', 'Yes', 'Extensive'],
    ['Calorie & macro tracking', 'Yes', 'No'],
    ['AI food scanner', 'Yes', 'No'],
    ['Meal planner', 'Yes', 'No'],
    ['Free tier', 'Yes (unlimited workout logger + water + 3 scans/day + 15 AI messages/day)', 'Limited trial only'],
    ['Pro price', '$10/mo · $60/yr', '~$12.99/mo · ~$79.99/yr'],
    ['Platforms', 'Android, iOS', 'iOS, Android'],
  ];

  const faqs = [
    {
      q: 'Is Fitbod better than Fitnivo?',
      a: 'For pure strength-workout generation, Fitbod is a mature and excellent choice. For an all-in-one AI fitness and nutrition app, Fitnivo is designed for that job.',
    },
    {
      q: 'Does Fitbod track macros?',
      a: 'No. Fitbod is strictly a workout app. Users who want nutrition tracking pair it with MyFitnessPal, Cronometer, or MacroFactor — or switch to an all-in-one like Fitnivo.',
    },
    {
      q: 'Is Fitnivo cheaper than Fitbod?',
      a: 'Yes. Fitnivo has a real free tier (unlimited workout logger + water + 3 AI food scans/day + 15 AI coach messages/day). Fitnivo Pro is $10/month or $60/year (effectively $5/month on annual); Fitbod is around $12.99/month or $79.99/year. When you add a separate calorie-tracker subscription on top of Fitbod, the combined cost is significantly higher than Fitnivo Pro alone.',
    },
    {
      q: 'Which is better for beginners?',
      a: 'Both are beginner-friendly. Fitnivo edges ahead if you also want help with nutrition — which most beginners need alongside training.',
    },
    {
      q: 'Which is better for home workouts?',
      a: 'Both handle home workouts well because both are equipment-aware. Pick based on whether you want nutrition tracking (Fitnivo) or the deeper exercise library (Fitbod).',
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
            Choose <strong>Fitbod</strong> if your only priority is strength-workout generation and you already use another app for calories. Choose <strong>Fitnivo</strong> if you want workouts, calorie &amp; macro tracking, AI food scanning, and meal planning in one app. Fitnivo has a free tier that&apos;s actually usable daily (3 AI scans/day, 15 AI coach messages/day, unlimited workout logger); Pro unlocks unlimited at $10/month or $60/year.
          </p>
        </div>
      </motion.div>

      <p className="text-sm text-[#B4B4B4] mb-8">
        Reviewed by the <Link href="/about" className="text-[#FF6A00] hover:underline">Fitnivo Editorial Team</Link>. This is our own comparison — we&apos;re transparent that Fitnivo is our product; we still call out where Fitbod is the better choice.
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
            <li><strong className="text-white">Exercise library depth:</strong> Fitbod has one of the largest, most polished exercise libraries with clear demo videos and variations.</li>
            <li><strong className="text-white">Strength-focused workflows:</strong> Fitbod is built by and for people who care about progressive overload on barbell lifts. It shows.</li>
            <li><strong className="text-white">Track record:</strong> Fitbod has been iterating on its AI workout generation for years — mature, stable, well-reviewed.</li>
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
            <li><strong className="text-white">Nutrition in the same app:</strong> Calorie and macro tracking sit next to your workouts. No second subscription, no context-switching.</li>
            <li><strong className="text-white">AI food scanner:</strong> Snap a photo of your meal and get calorie/macro estimates in seconds. Fitbod has no equivalent.</li>
            <li><strong className="text-white">Meal planner:</strong> Meals suggested around your daily calorie and protein targets.</li>
            <li><strong className="text-white">Real free tier:</strong> Unlimited workout logging, water tracking, plus daily AI usage (3 food scans, 15 AI coach messages/day).</li>
            <li><strong className="text-white">Better for fat loss:</strong> Fat loss is 80% nutrition. A workout-only app can&apos;t close that loop; Fitnivo can.</li>
          </ul>
        </motion.div>
      </div>

      {/* Choose if */}
      <div className="grid md:grid-cols-2 gap-4 mb-14">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
          <h3 className="font-bold text-white mb-4">Choose {competitorName} if…</h3>
          <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
            <li>You only care about strength-workout generation</li>
            <li>You&apos;re already happy with another calorie tracker</li>
            <li>You want the deepest strength-focused exercise library</li>
            <li>You lift primarily with barbells and machines</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[#FF6A00]/30 bg-[#FF6A00]/[0.04] p-6">
          <h3 className="font-bold text-white mb-4">Choose Fitnivo if…</h3>
          <ul className="text-[#B4B4B4] text-sm space-y-2 list-disc pl-5">
            <li>You want one app for training <em>and</em> nutrition</li>
            <li>You&apos;re trying to lose fat or gain lean mass</li>
            <li>You want to log meals by photo, not database search</li>
            <li>You want meal planning built around your macros</li>
            <li>You want a real free tier to try before paying — Pro is $10/mo or $60/yr</li>
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
        headline="Try Fitnivo instead of Fitbod — free tier available"
        subheading="Workouts + calorie tracking + AI food scanner in one app. Free tier includes unlimited workout logger, 3 AI food scans/day, and 15 AI coach messages/day."
        primaryHref="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
        primaryText="Download Fitnivo"
      />

      {/* Related links */}
      <div className="mt-10">
        <h3 className="text-xs uppercase tracking-widest font-mono text-white/40 mb-4">Related</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="/blog/best-ai-fitness-apps-2026" className="text-[#FF6A00] hover:underline">Best AI Fitness Apps in 2026</Link></li>
          <li><Link href="/blog/fitnivo-vs-cal-ai" className="text-[#FF6A00] hover:underline">Fitnivo vs Cal AI — AI food scanner comparison</Link></li>
          <li><Link href="/blog/best-fitbod-alternatives" className="text-[#FF6A00] hover:underline">Best Fitbod alternatives</Link></li>
          <li><Link href="/ai-fitness-coach" className="text-[#FF6A00] hover:underline">Fitnivo AI Fitness Coach</Link></li>
        </ul>
      </div>
    </>
  );
}
