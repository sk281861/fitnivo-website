'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current!.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20"
      data-section="hero"
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00F2FF]/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-[#BF00FF]/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[#00F2FF]/10 border border-[#00F2FF]/30 text-[#00F2FF] text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
          Next-Gen Fitness Intelligence
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Fitnivo: Your Ultimate{' '}
          <span className="gradient-text-fitness">AI Fitness Coach</span> &
          <br className="hidden md:block" /> Nutrition Advisor
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#A1A1A6] mb-10 max-w-3xl mx-auto leading-relaxed">
          Transform your body with an intelligent digital personal trainer that
          dynamically adapts to your body, builds custom workout plans, and
          delivers{' '}
          <span className="text-white font-medium">PhD-level nutrition insights</span>.
          Push past your plateaus with real-time tracking, zero gym decision
          fatigue, and 24/7 smart accountability.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#00F2FF] to-[#007AFF] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,242,255,0.3)] hover:scale-[1.02] w-full sm:w-auto"
          >
            <span className="relative z-10">Download App</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00F2FF] to-[#007AFF] opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
          </a>
          <a
            href="#features"
            className="px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 w-full sm:w-auto border border-white/10"
          >
            Try for Free
          </a>
        </div>
      </div>
    </section>
  );
}
