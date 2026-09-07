'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AppIcon from './AppIcon';

type Props = {
  rank: number;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  ctaHref: string;
  ctaText?: string;
  mascotSrc?: string;
  quote?: string;
  badge?: string;
};

const bulletContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
};

const bulletItem = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function TopPickCard({
  rank,
  name,
  tagline,
  description,
  bullets,
  ctaHref,
  ctaText = 'Download Fitnivo',
  mascotSrc = '/images/mascot/male-standing-transparent.png',
  quote,
  badge = 'Our #1 Pick',
}: Props) {
  return (
    <section id="detailed-reviews" className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-baseline gap-3 flex-wrap">
        <span className="text-[#FF6A00]">{rank}.</span>
        <span>{name}</span>
        <span className="text-white/40 text-lg font-normal">— {tagline}</span>
      </h2>

      {/* OUTER wrapper — overflow-visible so mascot can pop out */}
      <div className="relative mt-24 md:mt-32 mb-4">
        {/* The actual card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl border border-[#FF6A00]/30 bg-gradient-to-br from-[#FF6A00]/[0.06] via-black to-black shadow-[0_0_60px_-20px_rgba(255,106,0,0.35)]"
        >
          {/* Corner glow — clipped to card */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-24 -right-24 w-80 h-80 bg-[#FF6A00]/15 blur-3xl rounded-full"
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/60 to-transparent" />

          <div className="relative grid md:grid-cols-[1.1fr_1fr_1.1fr] gap-6 md:gap-8 p-6 md:p-10">
            {/* Left: brand block */}
            <div className="flex flex-col relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <AppIcon name={name} size="lg" />
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">{name}</h3>
                  <span className="inline-block mt-1 text-[10px] uppercase tracking-widest font-bold font-mono px-2.5 py-1 rounded-full bg-[#FF6A00] text-black">
                    {badge}
                  </span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">{description}</p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF6A00] text-black font-bold text-sm hover:bg-[#FF8524] transition shadow-lg shadow-[#FF6A00]/20 w-full md:w-auto"
                >
                  {ctaText} <span>→</span>
                </Link>
              </motion.div>
            </div>

            {/* Middle: mascot slot — this cell just reserves space; the actual
                mascot is absolutely positioned on the OUTER wrapper so it can
                overflow the card border. */}
            <div className="hidden md:block" aria-hidden="true" />

            {/* Right: bullets */}
            <div className="flex flex-col justify-center relative z-10">
              <motion.ul
                variants={bulletContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {bullets.map((b) => (
                  <motion.li key={b} variants={bulletItem} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-400/40 shrink-0">
                      <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{b}</span>
                  </motion.li>
                ))}
              </motion.ul>
              {quote && (
                <motion.blockquote
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="mt-6 pt-6 border-t border-white/10 text-white/60 text-sm italic leading-relaxed"
                >
                  &ldquo;{quote}&rdquo;
                </motion.blockquote>
              )}
            </div>
          </div>
        </motion.div>

        {/* ─── 3D HOLOGRAM MASCOT — pops out of card ─── */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 pointer-events-none z-30" style={{ width: '46%', height: 'calc(100% + 180px)' }}>
          {/* Ground plate / hologram base */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] pointer-events-none">
            <div className="relative h-6">
              {/* Outer disc glow */}
              <div className="absolute inset-x-0 bottom-0 h-6 rounded-[100%] bg-[#FF6A00]/30 blur-2xl" />
              {/* Ring */}
              <div className="absolute inset-x-4 bottom-1 h-3 rounded-[100%] border border-[#FF6A00]/60 shadow-[0_0_30px_rgba(255,106,0,0.6)]" />
              {/* Inner disc */}
              <div className="absolute inset-x-8 bottom-1.5 h-2 rounded-[100%] bg-gradient-to-r from-transparent via-[#FF6A00]/80 to-transparent" />
            </div>
          </div>

          {/* Hologram scanline layer (behind mascot) */}
          <div
            className="absolute inset-x-0 bottom-4 top-0 opacity-30 mix-blend-screen"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, rgba(255,181,107,0.35) 0px, rgba(255,181,107,0.35) 1px, transparent 1px, transparent 4px)',
              WebkitMaskImage:
                'radial-gradient(ellipse 60% 80% at 50% 55%, black 40%, transparent 75%)',
              maskImage:
                'radial-gradient(ellipse 60% 80% at 50% 55%, black 40%, transparent 75%)',
            }}
          />

          {/* Mascot itself — floats + subtle rotate for hologram feel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-0 bottom-4"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full h-full"
            >
              {/* Chromatic aberration — orange copy */}
              <div className="absolute inset-0" style={{ transform: 'translate(3px, 0)' }}>
                <Image
                  src={mascotSrc}
                  alt=""
                  fill
                  className="object-contain object-bottom opacity-40 mix-blend-screen"
                  sizes="(max-width: 768px) 0px, 500px"
                  style={{ filter: 'hue-rotate(-8deg) saturate(2.5) brightness(1.2)' }}
                />
              </div>
              {/* Chromatic aberration — cyan copy */}
              <div className="absolute inset-0" style={{ transform: 'translate(-3px, 0)' }}>
                <Image
                  src={mascotSrc}
                  alt=""
                  fill
                  className="object-contain object-bottom opacity-30 mix-blend-screen"
                  sizes="(max-width: 768px) 0px, 500px"
                  style={{ filter: 'hue-rotate(150deg) saturate(2) brightness(1.3)' }}
                />
              </div>
              {/* Main crisp mascot on top */}
              <Image
                src={mascotSrc}
                alt="Fitnivo mascot"
                fill
                priority
                className="relative object-contain object-bottom drop-shadow-[0_30px_60px_rgba(255,106,0,0.4)]"
                sizes="(max-width: 768px) 0px, 500px"
              />
              {/* Top edge glow */}
              <div className="absolute inset-x-[20%] top-0 h-16 bg-[#FF6A00]/30 blur-2xl rounded-full pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile-only mascot (below card, not overflowing) */}
      <div className="md:hidden relative w-full h-64 mt-6 mb-4">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-3 rounded-[100%] bg-[#FF6A00]/40 blur-xl" />
        <Image
          src={mascotSrc}
          alt="Fitnivo mascot"
          fill
          className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(255,106,0,0.3)]"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
