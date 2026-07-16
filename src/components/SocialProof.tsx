"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle, Quote, Flame } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  verified: boolean;
}

const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Busy Mom & Product Manager',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5,
    comment: 'Fitnivo literally replaced my personal trainer and three separate tracking apps. The AI coach is shockingly smart—it knew exactly when to suggest a light cardio recovery instead of a heavy run based on my poor sleep!',
    verified: true,
  },
  {
    id: '2',
    name: 'Marcus Vance',
    role: 'Amateur Marathon Runner',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5,
    comment: 'The real-time pace analysis and adaptive pacing strategy helped me cut 12 minutes off my half-marathon PR. Having direct audio suggestions that adapt on the fly is a game-changer.',
    verified: true,
  },
  {
    id: '3',
    name: 'Alex Rivera',
    role: 'Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5,
    comment: "I love metrics, and Fitnivo's dashboard is beautiful. The heart rate predictions are spot on and the workout planner updates dynamically. Recommending this to all my team.",
    verified: true,
  }
];

export default function SocialProof() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-12 bg-[#0B0B0F] relative z-10 border-t border-white/5 border-b border-white/5">
      <div className="container max-w-[1200px] mx-auto px-6 flex flex-col gap-10">
        {/* Dynamic Testimonials Module */}
        <div className="glass rounded-3xl p-8 relative overflow-hidden border border-white/10 shadow-xl bg-white/[0.01] backdrop-blur-md">
          {/* Subtle background glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#33F4FF]/5 blur-3xl rounded-full pointer-events-none" />
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
              ))}
              <span className="text-xs font-bold text-white ml-2 font-mono tracking-wider">4.9/5 RATING</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/40 text-emerald-400 text-[10px] font-semibold tracking-wider font-mono border border-emerald-500/20">
              <CheckCircle className="w-3.5 h-3.5" /> VERIFIED TRAINER VERDICT
            </div>
          </div>

          {/* Testimonial Content Wrapper */}
          <div className="min-h-[140px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-start gap-2">
                  <Quote className="w-6 h-6 text-[#33F4FF]/20 shrink-0 transform -translate-y-1" />
                  <p className="text-sm text-slate-300 leading-relaxed font-sans font-normal font-sans">
                    {REVIEWS[activeIdx].comment}
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <img
                    src={REVIEWS[activeIdx].avatar}
                    alt={REVIEWS[activeIdx].name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#33F4FF]/20"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{REVIEWS[activeIdx].name}</h4>
                    <p className="text-xs text-slate-400 font-medium">{REVIEWS[activeIdx].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators / Sliders */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIdx === idx ? 'w-8 bg-[#33F4FF]' : 'w-2.5 bg-white/10 hover:bg-white/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Member Avatar Stack & Media Featured Marquee */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 py-4 border-t border-white/5">
          {/* Left: Avatar Stack */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100&h=100',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
              ].map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`User ${index + 1}`}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#0B0B0F] ring-2 ring-white/5 shadow-sm"
                  referrerPolicy="no-referrer"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#33F4FF] to-[#007AFF] flex items-center justify-center border-2 border-[#0B0B0F] text-[10px] font-bold text-white shadow-sm font-mono">
                +15K
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-white">150,000+ members</span>
                <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
              </div>
              <span className="text-xs text-slate-400 font-medium">Tracking workouts & active stats</span>
            </div>
          </div>

          {/* Right: Media Logos Marquee */}
          <div className="logos-marquee-container" style={{ flexGrow: 1, maxWidth: "600px" }}>
            <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "2px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", whiteSpace: "nowrap" }} className="mr-4">
              Featured In
            </span>
            <div style={{ overflow: "hidden", width: "100%", position: "relative", maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)" }}>
              <div className="marquee-track" style={{ gap: "40px" }}>
                {/* Set of logos */}
                <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
                  {/* TechCrunch */}
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.4)" }}>
                    <svg width="20" height="13" viewBox="0 0 24 18" fill="currentColor">
                      <path d="M0 0h8v4H4v14H0V0zm10 0h14v4h-5v14h-4V4h-5V0z" />
                    </svg>
                    <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "-0.5px" }}>TechCrunch</span>
                  </div>

                  {/* Product Hunt */}
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "rgba(255,255,255,0.4)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.3" />
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M11.5 7.5H9.5v9h2v-3h1.5c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 4H9.5v-2h2v2z" fill="currentColor" />
                    </svg>
                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "-0.2px" }}>Product Hunt</span>
                  </div>

                  {/* Forbes */}
                  <div style={{ display: "flex", alignItems: "center", color: "rgba(255,255,255,0.4)" }}>
                    <span style={{ fontSize: "14px", fontFamily: "serif", fontWeight: "900", fontStyle: "italic", letterSpacing: "0.5px" }}>Forbes</span>
                  </div>

                  {/* Wired */}
                  <div style={{ display: "flex", alignItems: "center", color: "rgba(255,255,255,0.4)" }}>
                    <span style={{ fontSize: "11px", fontFamily: "sans-serif", fontWeight: "900", letterSpacing: "1.5px" }}>WIRED</span>
                  </div>

                  {/* Men's Health */}
                  <div style={{ display: "flex", alignItems: "center", color: "rgba(255,255,255,0.4)" }}>
                    <span style={{ fontSize: "11px", fontFamily: "sans-serif", fontWeight: "900", letterSpacing: "-0.5px", textTransform: "uppercase" }}>Men's Health</span>
                  </div>
                </div>

                {/* Duplicate set for seamless loop */}
                <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
                  {/* TechCrunch */}
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.4)" }}>
                    <svg width="20" height="13" viewBox="0 0 24 18" fill="currentColor">
                      <path d="M0 0h8v4H4v14H0V0zm10 0h14v4h-5v14h-4V4h-5V0z" />
                    </svg>
                    <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "-0.5px" }}>TechCrunch</span>
                  </div>

                  {/* Product Hunt */}
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "rgba(255,255,255,0.4)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.3" />
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M11.5 7.5H9.5v9h2v-3h1.5c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 4H9.5v-2h2v2z" fill="currentColor" />
                    </svg>
                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "-0.2px" }}>Product Hunt</span>
                  </div>

                  {/* Forbes */}
                  <div style={{ display: "flex", alignItems: "center", color: "rgba(255,255,255,0.4)" }}>
                    <span style={{ fontSize: "14px", fontFamily: "serif", fontWeight: "900", fontStyle: "italic", letterSpacing: "0.5px" }}>Forbes</span>
                  </div>

                  {/* Wired */}
                  <div style={{ display: "flex", alignItems: "center", color: "rgba(255,255,255,0.4)" }}>
                    <span style={{ fontSize: "11px", fontFamily: "sans-serif", fontWeight: "900", letterSpacing: "1.5px" }}>WIRED</span>
                  </div>

                  {/* Men's Health */}
                  <div style={{ display: "flex", alignItems: "center", color: "rgba(255,255,255,0.4)" }}>
                    <span style={{ fontSize: "11px", fontFamily: "sans-serif", fontWeight: "900", letterSpacing: "-0.5px", textTransform: "uppercase" }}>Men's Health</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
