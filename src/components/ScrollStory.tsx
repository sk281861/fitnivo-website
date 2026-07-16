"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CheckCircle, Sparkles, Flame, Droplet, Moon, Dumbbell, AlertTriangle } from "lucide-react";
import Image from "next/image";

export default function ScrollStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within the storyboard section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Apply a smooth spring to avoid scroll jitters
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001
  });

  // 1. Problem Card Transitions
  const problemOpacity = useTransform(smoothProgress, [0.0, 0.05, 0.2, 0.64, 0.70], [0, 0, 1, 1, 0]);
  const problemX = useTransform(smoothProgress, [0.0, 0.05, 0.2, 0.64, 0.70], [-150, -150, 0, 0, -250]);

  // 2. Floating Widgets Fade-In
  const caloriesOpacity = useTransform(smoothProgress, [0.2, 0.25, 0.8, 0.85], [0, 1, 1, 0.3]);
  const workoutOpacity = useTransform(smoothProgress, [0.23, 0.28, 0.8, 0.85], [0, 1, 1, 0.3]);
  const waterOpacity = useTransform(smoothProgress, [0.26, 0.31, 0.8, 0.85], [0, 1, 1, 0.3]);
  const sleepOpacity = useTransform(smoothProgress, [0.29, 0.34, 0.8, 0.85], [0, 1, 1, 0.3]);

  // 4. Image Cross-Fade & Morph
  const img1Opacity = useTransform(smoothProgress, [0.0, 0.5, 0.62], [1, 1, 0]);
  const img2Opacity = useTransform(smoothProgress, [0.0, 0.5, 0.62], [0, 0, 1]);
  
  const imgScale = useTransform(smoothProgress, [0.0, 0.5, 0.56, 0.62, 1.0], [1.0, 1.0, 1.05, 1.0, 1.0]);
  const imgBlur = useTransform(smoothProgress, [0.0, 0.5, 0.56, 0.62, 1.0], ["blur(0px)", "blur(0px)", "blur(12px)", "blur(0px)", "blur(0px)"]);

  // 5. Solution Card Transitions
  const solutionOpacity = useTransform(smoothProgress, [0.0, 0.72, 0.78], [0, 0, 1]);
  const solutionX = useTransform(smoothProgress, [0.0, 0.72, 0.78], [150, 150, 0]);

  // 6. Dashboard Glow effect
  const solutionGlow = useTransform(smoothProgress, [0.0, 0.84, 0.92], ["rgba(51, 244, 255, 0)", "rgba(51, 244, 255, 0)", "rgba(51, 244, 255, 0.15)"]);

  const handleScrollToApp = () => {
    const el = document.getElementById("app");
    if (el) {
      const offset = 90; // Height of the floating glass navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div ref={sectionRef} className="scroll-story-section">
      <div ref={containerRef} className="scroll-story-sticky desktop-storyboard">
        
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div style={{ opacity: img1Opacity, scale: imgScale, filter: imgBlur }} className="absolute inset-0 w-full h-full">
            <Image src="/images/solution/sad_problem.webp" alt="Frustrated Runner" fill className="object-cover" priority />
          </motion.div>
          <motion.div style={{ opacity: img2Opacity, scale: imgScale, filter: imgBlur }} className="absolute inset-0 w-full h-full">
            <Image src="/images/solution/happy.webp" alt="Confident Runner" fill className="object-cover" priority />
          </motion.div>

          {/* Vignette overlays for legibility - None in the middle to keep model fully focused */}
          <div 
            className="absolute inset-0 pointer-events-none z-1"
            style={{
              background: "linear-gradient(to right, #0B0B0F 0%, rgba(11, 11, 15, 0.9) 20%, rgba(11, 11, 15, 0) 40%), linear-gradient(to left, #0B0B0F 0%, rgba(11, 11, 15, 0.9) 20%, rgba(11, 11, 15, 0) 40%)"
            }}
          />
          <div 
            className="absolute inset-0 pointer-events-none z-1"
            style={{
              background: "linear-gradient(to top, #0B0B0F 0%, rgba(11, 11, 15, 0.7) 12%, transparent 25%)"
            }}
          />
          
          {/* Subtle dots grid overlay */}
          <div 
            className="absolute inset-0 opacity-10 z-2"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
              backgroundSize: "24px 24px"
            }}
          />
        </div>

        <div className="scroll-story-grid">
          <div className="w-full h-[520px] relative">
            <motion.div style={{ opacity: problemOpacity, x: problemX }} className="problem-card glass-glow-red absolute inset-0">
              <div className="flex items-center gap-2 mb-4 text-red-500 font-mono text-xs font-bold tracking-widest">
                <AlertTriangle className="w-4 h-4" /> THE PROBLEM
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-6">
                Tracking fitness is a <span className="text-red-500">logistical nightmare.</span>
              </h3>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">🍴</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Meal Tracker</h4>
                    <p className="text-[11px] text-slate-400">Log your calories and macros</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">💪</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Workout App</h4>
                    <p className="text-[11px] text-slate-400">Track your sets, reps & progress</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">💧</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Water Reminder</h4>
                    <p className="text-[11px] text-slate-400">Stay hydrated throughout the day</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">🌙</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Sleep Tracker</h4>
                    <p className="text-[11px] text-slate-400">Monitor your sleep and recovery</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="scroll-story-center relative w-full h-[650px] flex justify-center items-center">
            <motion.div style={{ opacity: caloriesOpacity }} className="absolute widget calories-widget">
              <div className="w-7 h-7 rounded-md bg-orange-950/50 border border-orange-500/30 flex items-center justify-center text-orange-400"><Flame size={14} className="fill-orange-400" /></div>
              <div><div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Calories</div><div className="text-xs font-black text-white">1,200 <span className="text-[10px] text-slate-400 font-normal">kcal</span></div></div>
            </motion.div>
            <motion.div style={{ opacity: sleepOpacity }} className="absolute widget sleep-widget">
              <div className="w-7 h-7 rounded-md bg-indigo-950/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400"><Moon size={14} className="fill-indigo-400" /></div>
              <div><div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Sleep</div><div className="text-xs font-black text-white">7h 18m <span className="text-[10px] text-slate-400 font-normal">Last</span></div></div>
            </motion.div>
            <motion.div style={{ opacity: workoutOpacity }} className="absolute widget workout-widget">
              <div className="w-7 h-7 rounded-md bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400"><Dumbbell size={14} /></div>
              <div><div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Workout</div><div className="text-xs font-black text-white">Done <span className="text-[10px] text-slate-400 font-normal">(6 ex)</span></div></div>
            </motion.div>
            <motion.div style={{ opacity: waterOpacity }} className="absolute widget water-widget">
              <div className="w-7 h-7 rounded-md bg-blue-950/50 border border-blue-500/30 flex items-center justify-center text-blue-400"><Droplet size={14} className="fill-blue-400" /></div>
              <div><div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Water</div><div className="text-xs font-black text-white">2.3 L <span className="text-[10px] text-slate-400 font-normal">Today</span></div></div>
            </motion.div>
          </div>

          <div className="w-full h-[520px] relative">
            <motion.div style={{ opacity: solutionOpacity, x: solutionX, boxShadow: `0 0 40px 0 ${solutionGlow}` }} className="solution-card glass-glow-blue absolute inset-0">
              <div className="flex items-center gap-2 mb-4 text-[#33F4FF] font-mono text-xs font-bold tracking-widest">
                <Sparkles className="w-4 h-4" /> THE FITNIVO SOLUTION
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-4">The <span className="text-[#33F4FF]">Unified Dashboard.</span></h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">Fitnivo consolidates everything. Your macros, workouts, hydration, and recovery are housed in one beautiful, interconnected ecosystem.</p>
              <div className="bg-[#0B0B0F]/80 border border-white/5 rounded-2xl p-4 flex flex-col gap-2.5 mb-6">
                <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-1">Fitnivo Dashboard</div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-white/5"><div className="flex items-center gap-2"><span className="text-orange-400">🔥</span><span className="text-white font-medium">Calories & Macros</span></div><div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">1,829 / 2,200 kcal <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /></div></div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-white/5"><div className="flex items-center gap-2"><span className="text-emerald-400">💪</span><span className="text-white font-medium">Workout</span></div><div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">5/6 Completed <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /></div></div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-white/5"><div className="flex items-center gap-2"><span className="text-blue-400">💧</span><span className="text-white font-medium">Hydration</span></div><div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">2.3 / 3.0 L <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /></div></div>
                <div className="flex items-center justify-between text-xs py-1"><div className="flex items-center gap-2"><span className="text-indigo-400">🌙</span><span className="text-white font-medium">Sleep</span></div><div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">7h 18m <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /></div></div>
              </div>
              <button onClick={handleScrollToApp} className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#33F4FF] to-[#007AFF] text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/20">See Unified Dashboard →</button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile-Only Optimized Layout (Stacked flow) */}
      <div className="mobile-storyboard">
        <div className="flex flex-col gap-8 max-w-[500px] mx-auto px-4 py-12">
          
          {/* Step 1: The Problem Card */}
          <div className="rounded-[24px] p-6 border border-[#FF5C5C]/20 bg-[rgba(20,24,34,0.75)] shadow-lg flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4 text-[#FF5C5C] font-mono text-xs font-bold tracking-widest">
              <AlertTriangle className="w-4 h-4" /> THE PROBLEM
            </div>
            <h3 className="text-2xl font-bold text-white leading-tight mb-4">
              Tracking fitness is a logistical nightmare.
            </h3>
            
            {/* Inline Problem Image */}
            <div className="story-img-wrap relative w-full h-[240px] rounded-2xl overflow-hidden mb-5 border border-white/5">
              <Image 
                src="/images/solution/sad_problem.webp" 
                alt="Frustrated Runner" 
                fill 
                className="object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-3.5 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-950 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                  <span className="font-mono text-sm">🍽️</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white mb-0.5">Meal Tracker</div>
                  <div className="text-[10px] text-slate-400 leading-tight">Log your calories and macros</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <span className="font-mono text-sm">💪</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white mb-0.5">Workout App</div>
                  <div className="text-[10px] text-slate-400 leading-tight">Track your sets, reps & progress</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <span className="font-mono text-sm">💧</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white mb-0.5">Water Reminder</div>
                  <div className="text-[10px] text-slate-400 leading-tight">Stay hydrated throughout the day</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <span className="font-mono text-sm">🌙</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white mb-0.5">Sleep Tracker</div>
                  <div className="text-[10px] text-slate-400 leading-tight">Monitor your sleep and recovery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Transition Line */}
          <div className="flex justify-center items-center">
            <div className="w-0.5 h-10 bg-gradient-to-b from-[#FF5C5C]/30 to-[#33F4FF]/30" />
          </div>

          {/* Step 2: The Solution Card */}
          <div className="rounded-[24px] p-6 border border-[#33F4FF]/20 bg-[rgba(20,24,34,0.75)] shadow-lg flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4 text-[#33F4FF] font-mono text-xs font-bold tracking-widest">
              <Sparkles className="w-4 h-4" /> THE FITNIVO SOLUTION
            </div>
            <h3 className="text-2xl font-bold text-white leading-tight mb-4">
              The <span className="text-[#33F4FF]">Unified Dashboard.</span>
            </h3>
            
            {/* Inline Solution Image */}
            <div className="story-img-wrap relative w-full h-[240px] rounded-2xl overflow-hidden mb-5 border border-white/5">
              <Image 
                src="/images/solution/happy.webp" 
                alt="Confident Runner" 
                fill 
                className="object-cover object-top"
              />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
              Fitnivo consolidates everything. Your macros, workouts, hydration, and recovery are housed in one beautiful, interconnected ecosystem.
            </p>

            <div className="bg-[#0B0B0F]/80 border border-white/5 rounded-2xl p-4 flex flex-col gap-2.5 mb-6">
              <div className="flex items-center justify-between text-xs py-1 border-b border-white/5"><div className="flex items-center gap-2"><span className="text-orange-400">🔥</span><span className="text-white font-medium">Calories & Macros</span></div><div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">1,829 / 2,200 kcal <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /></div></div>
              <div className="flex items-center justify-between text-xs py-1 border-b border-white/5"><div className="flex items-center gap-2"><span className="text-emerald-400">💪</span><span className="text-white font-medium">Workout</span></div><div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">5/6 Completed <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /></div></div>
              <div className="flex items-center justify-between text-xs py-1 border-b border-white/5"><div className="flex items-center gap-2"><span className="text-blue-400">💧</span><span className="text-white font-medium">Hydration</span></div><div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">2.3 / 3.0 L <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /></div></div>
              <div className="flex items-center justify-between text-xs py-1"><div className="flex items-center gap-2"><span className="text-indigo-400">🌙</span><span className="text-white font-medium">Sleep</span></div><div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">7h 18m <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /></div></div>
            </div>

            <button onClick={handleScrollToApp} className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#33F4FF] to-[#007AFF] text-white font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/20">
              See Unified Dashboard →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
