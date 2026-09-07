"use client";

import React from 'react';
import { Quote, CheckCircle } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="py-12 bg-[#0B0B0F] relative z-10 border-t border-white/5 border-b border-white/5">
      <div className="container max-w-[1200px] mx-auto px-6 flex flex-col gap-10">

        {/* Single real testimonial */}
        <div className="glass rounded-3xl p-8 relative overflow-hidden border border-white/10 shadow-xl bg-white/[0.01] backdrop-blur-md">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#33F4FF]/5 blur-3xl rounded-full pointer-events-none" />

          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-white font-mono tracking-wider uppercase">Early user review</span>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/40 text-emerald-400 text-[10px] font-semibold tracking-wider font-mono border border-emerald-500/20">
              <CheckCircle className="w-3.5 h-3.5" /> Early access
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <Quote className="w-6 h-6 text-[#33F4FF]/20 shrink-0 transform -translate-y-1" />
              <p className="text-sm text-slate-300 leading-relaxed">
                Fitnivo has completely changed how I manage my fitness and nutrition. The AI coach gives me personalized workouts and meal plans that actually fit my schedule — and the food scanner makes tracking effortless. It&apos;s the only app I&apos;ve kept using past the first week.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <div className="w-10 h-10 rounded-full bg-cyan-950 border-2 border-cyan-400/30 flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                SJ
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Sandeep Jaiswar</h4>
                <p className="text-xs text-slate-400 font-medium">Biotechnologist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Honest community line — no fake avatar stack, no fake press logos */}
        <div className="flex items-center justify-center py-2 border-t border-white/5">
          <p className="text-xs text-slate-500 font-medium text-center">
            Join the early community — tracking workouts, meals, and progress with Fitnivo.
          </p>
        </div>

      </div>
    </section>
  );
}
