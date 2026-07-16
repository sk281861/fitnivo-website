"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, AlertTriangle, X, Check, ArrowRight, Award, Flame, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function ScrollStoryConsistency() {
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

  // 1. Initial Image Entry (0% to 15%)
  const imgOpacity = useTransform(smoothProgress, [0.0, 0.15], [0, 1]);
  const imgScaleInit = useTransform(smoothProgress, [0.0, 0.15], [0.96, 1.0]);

  // 2. Problem Card Transitions (Slides in at 15%, fades to 0.35 at 60%)
  const problemOpacity = useTransform(
    smoothProgress,
    [0.0, 0.10, 0.18, 0.58, 0.65],
    [0, 0, 1, 1, 0.35]
  );
  const problemX = useTransform(
    smoothProgress,
    [0.0, 0.10, 0.18],
    [-80, -80, 0]
  );

  // 4. Female Pose Cross-Fade & Breathing (45% timeline: morphs 40% -> 52%)
  const img1Opacity = useTransform(smoothProgress, [0.0, 0.40, 0.52], [1, 1, 0]);
  const img2Opacity = useTransform(smoothProgress, [0.0, 0.40, 0.52], [0, 0, 1]);
  
  // Scale breathing: subtle push 1.0 -> 1.02 -> 1.0
  const imgScale = useTransform(
    smoothProgress,
    [0.0, 0.40, 0.46, 0.52, 1.0],
    [1.0, 1.0, 1.02, 1.0, 1.0]
  );
  const imgBlur = useTransform(
    smoothProgress,
    [0.0, 0.40, 0.46, 0.52, 1.0],
    ["blur(0px)", "blur(0px)", "blur(4px)", "blur(0px)", "blur(0px)"]
  );

  // 5. Solution Card Transitions (Slides in at 70%)
  const solutionOpacity = useTransform(smoothProgress, [0.0, 0.65, 0.72], [0, 0, 1]);
  const solutionX = useTransform(smoothProgress, [0.0, 0.65, 0.72], [80, 80, 0]);

  // 6. Habit widgets sequentially fade/scale-in (80% timeline)
  const widget1Scale = useTransform(smoothProgress, [0.75, 0.78], [0.92, 1]);
  const widget1Opacity = useTransform(smoothProgress, [0.75, 0.78], [0, 1]);

  const widget2Scale = useTransform(smoothProgress, [0.78, 0.81], [0.92, 1]);
  const widget2Opacity = useTransform(smoothProgress, [0.78, 0.81], [0, 1]);

  const widget3Scale = useTransform(smoothProgress, [0.81, 0.84], [0.92, 1]);
  const widget3Opacity = useTransform(smoothProgress, [0.81, 0.84], [0, 1]);

  const widget4Scale = useTransform(smoothProgress, [0.84, 0.87], [0.92, 1]);
  const widget4Opacity = useTransform(smoothProgress, [0.84, 0.87], [0, 1]);

  // 7. CTA Subtle Glow (95%)
  const ctaShadow = useTransform(
    smoothProgress,
    [0.0, 0.92, 0.96],
    ["0px 0px 0px rgba(0, 212, 255, 0)", "0px 0px 0px rgba(0, 212, 255, 0)", "0px 8px 30px rgba(0, 212, 255, 0.35)"]
  );

  return (
    <div ref={sectionRef} className="scroll-story-consistency-section relative w-full h-[400vh] bg-[#0B0F17]">
      
      {/* Desktop-Only Viewport */}
      <div ref={containerRef} className="sticky top-0 h-[100vh] w-full flex items-center justify-center overflow-hidden pt-[90px] desktop-storyboard-consistency">
        
        {/* Full-width Background (blurred depth-of-field apartment images) */}
        <motion.div 
          style={{ opacity: imgOpacity, scale: imgScaleInit }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          {/* Pose 1: Disappointed Bedroom/Office Late Evening */}
          <motion.div 
            style={{ 
              opacity: img1Opacity,
              scale: imgScale,
              filter: imgBlur
            }} 
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src="/images/solution/no_consistency.webp" 
              alt="Losing Consistency Gym Clothes Disappointment" 
              fill 
              className="object-cover object-top"
              priority
            />
          </motion.div>
          
          {/* Pose 2: Morning Refreshed Consistent Waking Up */}
          <motion.div 
            style={{ 
              opacity: img2Opacity,
              scale: imgScale,
              filter: imgBlur
            }} 
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src="/images/solution/Girl_waking_up.webp" 
              alt="Habit Building Success Consistency" 
              fill 
              className="object-cover object-top"
              priority
            />
          </motion.div>

          {/* Symmetrical Left/Right Vignettes (keeps center model 100% focused) */}
          <div 
            className="absolute inset-0 pointer-events-none z-1"
            style={{
              background: "linear-gradient(to right, #0B0F17 0%, rgba(11, 15, 23, 0.95) 20%, rgba(11, 15, 23, 0) 40%), linear-gradient(to left, #0B0F17 0%, rgba(11, 15, 23, 0.95) 20%, rgba(11, 15, 23, 0) 40%)"
            }}
          />
          <div 
            className="absolute inset-0 pointer-events-none z-1"
            style={{
              background: "linear-gradient(to top, #0B0F17 0%, rgba(11, 15, 23, 0.75) 12%, transparent 28%)"
            }}
          />
        </motion.div>

        {/* 3-Column Layout Grid */}
        <div className="relative z-10 grid grid-cols-[360px_1fr_360px] gap-[80px] items-center w-full max-w-[1350px] mx-auto px-10">
          
          {/* Left Column: Problem Card (Offset slightly higher) */}
          <div className="w-full h-[520px] relative">
            <motion.div 
              style={{ 
                opacity: problemOpacity, 
                x: problemX 
              }}
              className="absolute inset-0 rounded-[24px] p-8 border border-[#FF5C5C]/20 bg-[rgba(20,24,34,0.75)] backdrop-blur-[20px] shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-[6px] hover:border-white/20 hover:shadow-2xl group"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 text-[#FF5C5C] font-mono text-xs font-bold tracking-widest">
                  <AlertTriangle className="w-4 h-4" /> THE PROBLEM
                </div>
                <h3 className="text-[32px] font-bold text-white leading-[1.2] mb-6">
                  Consistency<br />is the hardest<br />part.
                </h3>

                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                    <span className="text-white/95 font-medium">Lost Motivation</span>
                    <X className="w-4 h-4 text-[#FF5C5C] shrink-0" />
                  </div>
                  <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                    <span className="text-white/95 font-medium">Skipped Workout</span>
                    <X className="w-4 h-4 text-[#FF5C5C] shrink-0" />
                  </div>
                  <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                    <span className="text-white/95 font-medium">No Accountability</span>
                    <X className="w-4 h-4 text-[#FF5C5C] shrink-0" />
                  </div>
                  <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                    <span className="text-white/95 font-medium">No Visible Progress</span>
                    <X className="w-4 h-4 text-[#FF5C5C] shrink-0" />
                  </div>
                  <div className="flex items-center justify-between text-sm py-1">
                    <span className="text-white/95 font-medium">Workout Streak Broken</span>
                    <X className="w-4 h-4 text-[#FF5C5C] shrink-0" />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 text-[11px] text-[#FF5C5C]/90 leading-normal font-medium">
                📢 Most people don't quit because they're weak. They quit because they stop showing up.
              </div>
            </motion.div>
          </div>

          {/* Center Column: Spacer (S-shape composition placeholder) */}
          <div className="relative w-full h-[520px] flex justify-center items-center pointer-events-none" />

          {/* Right Column: Solution Card (Offset slightly lower) */}
          <div className="w-full h-[520px] relative translate-y-[20px]">
            <motion.div 
              style={{ 
                opacity: solutionOpacity, 
                x: solutionX 
              }}
              className="absolute inset-0 rounded-[24px] p-8 border border-[#00D4FF]/20 bg-[rgba(20,24,34,0.75)] backdrop-blur-[20px] shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-[6px] hover:border-white/20 hover:shadow-2xl group"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-[#00D4FF] font-mono text-xs font-bold tracking-widest">
                    <Sparkles className="w-4 h-4" /> THE FITNIVO SOLUTION
                  </div>
                  <h3 className="text-[28px] font-bold text-white leading-[1.2] mb-4">
                    Stay Consistent.<br />Every Day.
                  </h3>
                </div>

                {/* Habit Widgets Stack */}
                <div className="flex flex-col gap-2 overflow-hidden max-h-[265px] py-0.5">
                  
                  {/* Widget 1: Streak */}
                  <motion.div 
                    style={{ opacity: widget1Opacity, scale: widget1Scale }} 
                    className="flex items-center justify-between p-2 rounded-xl bg-white/[0.03] border border-white/5"
                  >
                    <div className="flex items-center gap-2">
                      <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                      <div>
                        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Current Streak</div>
                        <div className="text-xs font-black text-white flex items-center gap-1">
                          12 Days <TrendingUp className="w-3 h-3 text-emerald-400" />
                        </div>
                      </div>
                    </div>
                    <div className="text-[9px] text-emerald-400 font-mono">+3 from yesterday</div>
                  </motion.div>

                  {/* Widget 2: Badge */}
                  <motion.div 
                    style={{ opacity: widget2Opacity, scale: widget2Scale }} 
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] border border-white/5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-indigo-950/40 border border-indigo-500/20 flex items-center justify-center">
                      <Award className="w-4 h-4 text-[#00D4FF]" />
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Unlocked</div>
                      <div className="text-xs font-black text-white">Consistency Badge</div>
                    </div>
                  </motion.div>

                  {/* Widget 3: AI Check-in */}
                  <motion.div 
                    style={{ opacity: widget3Opacity, scale: widget3Scale }} 
                    className="p-2.5 rounded-xl bg-cyan-950/20 border border-[#00D4FF]/25 flex flex-col gap-1 text-[10px] text-slate-200"
                  >
                    <div className="font-bold text-[#00D4FF] uppercase tracking-wider text-[8px]">AI Check-in</div>
                    <div>
                      "Hey Sarah 👋 You crushed yesterday. Let's finish today's workout together."
                    </div>
                  </motion.div>

                  {/* Widget 4 & 5: XP Progress & Habits */}
                  <motion.div 
                    style={{ opacity: widget4Opacity, scale: widget4Scale }} 
                    className="flex flex-col gap-1.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5"
                  >
                    <div className="flex justify-between items-center text-[9px] text-slate-400">
                      <span>XP Progress</span>
                      <span className="text-[#00D4FF] font-mono">Level 8</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#00D4FF] to-[#6A5CFF]" style={{ width: "80%" }} />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 mt-1 text-[9px] text-slate-300">
                      <div className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> Workout</div>
                      <div className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> Water</div>
                      <div className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> Protein Goal</div>
                      <div className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> Sleep Logged</div>
                    </div>
                  </motion.div>

                </div>

                <motion.button 
                  onClick={handleScrollToApp}
                  style={{ boxShadow: ctaShadow }}
                  className="w-full py-3.5 px-4 mt-2 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#6A5CFF] text-white font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-all flex items-center justify-center gap-1.5"
                >
                  Keep My Streak <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Mobile-Only Optimized Layout (No complex scroll animations, stacked flow) */}
      <div className="mobile-storyboard-consistency">
        <div className="flex flex-col gap-8 max-w-[500px] mx-auto px-4 py-12">
          
          {/* Step 1: The Problem Card */}
          <div className="rounded-[24px] p-6 border border-[#FF5C5C]/20 bg-[rgba(20,24,34,0.75)] shadow-lg flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4 text-[#FF5C5C] font-mono text-xs font-bold tracking-widest">
              <AlertTriangle className="w-4 h-4" /> THE PROBLEM
            </div>
            <h3 className="text-2xl font-bold text-white leading-tight mb-4">
              Consistency is the hardest part.
            </h3>
            
            {/* Inline Disappointed Image */}
            <div className="story-img-wrap relative w-full h-[240px] rounded-2xl overflow-hidden mb-5 border border-white/5">
              <Image 
                src="/images/solution/no_consistency.webp" 
                alt="Gym Routine Motivation Broken" 
                fill 
                className="object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-3.5 mb-4">
              <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                <span className="text-white/95">Lost Motivation</span>
                <X className="w-4 h-4 text-[#FF5C5C]" />
              </div>
              <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                <span className="text-white/95">Skipped Workout</span>
                <X className="w-4 h-4 text-[#FF5C5C]" />
              </div>
              <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                <span className="text-white/95">Workout Streak Broken</span>
                <X className="w-4 h-4 text-[#FF5C5C]" />
              </div>
            </div>
            <div className="pt-3 border-t border-white/5 text-xs text-[#FF5C5C]/90 font-medium text-center">
              ⚠️ Most people don't quit because they're weak. They quit because they stop showing up.
            </div>
          </div>

          {/* Transition Line */}
          <div className="flex justify-center items-center">
            <div className="w-0.5 h-10 bg-gradient-to-b from-[#FF5C5C]/30 to-[#00D4FF]/30" />
          </div>

          {/* Step 2: The Solution Card */}
          <div className="rounded-[24px] p-6 border border-[#00D4FF]/20 bg-[rgba(20,24,34,0.75)] shadow-lg flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4 text-[#00D4FF] font-mono text-xs font-bold tracking-widest">
              <Sparkles className="w-4 h-4" /> THE FITNIVO SOLUTION
            </div>
            <h3 className="text-2xl font-bold text-white leading-tight mb-4">
              Stay Consistent. Every Day.
            </h3>
            
            {/* Inline Consistent Image */}
            <div className="story-img-wrap relative w-full h-[240px] rounded-2xl overflow-hidden mb-5 border border-white/5">
              <Image 
                src="/images/solution/Girl_waking_up.webp" 
                alt="Consistent Habits Success Waking Up" 
                fill 
                className="object-cover object-top"
              />
            </div>

            {/* Streak Widget on Mobile */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                <div>
                  <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Current Streak</div>
                  <div className="text-xs font-black text-white flex items-center gap-1">12 Days <TrendingUp className="w-3 h-3 text-emerald-400" /></div>
                </div>
              </div>
              <div className="text-[9px] text-emerald-400 font-mono">+3 from yesterday</div>
            </div>

            <div className="bg-[#0B0F17]/80 border border-white/5 rounded-2xl p-4 flex flex-col gap-2 mb-6">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Workout Habit</span>
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-400" /></div>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Daily Water goal</span>
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-400" /></div>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Protein Goal reached</span>
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-400" /></div>
              </div>
            </div>

            <button onClick={handleScrollToApp} className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#6A5CFF] text-white font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/20">
              Keep My Streak <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
