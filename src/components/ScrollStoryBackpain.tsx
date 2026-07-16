"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, AlertTriangle, X, Check, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ScrollStoryBackpain() {
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

  // 6. Workout Replacement Rows staggered checkmark scale (80%)
  const row1Scale = useTransform(smoothProgress, [0.78, 0.81], [0, 1]);
  const row2Scale = useTransform(smoothProgress, [0.81, 0.84], [0, 1]);
  const row3Scale = useTransform(smoothProgress, [0.84, 0.87], [0, 1]);
  const row4Scale = useTransform(smoothProgress, [0.87, 0.90], [0, 1]);

  // 7. CTA Subtle Glow (95%)
  const ctaShadow = useTransform(
    smoothProgress,
    [0.0, 0.92, 0.96],
    ["0px 0px 0px rgba(0, 212, 255, 0)", "0px 0px 0px rgba(0, 212, 255, 0)", "0px 8px 30px rgba(0, 212, 255, 0.35)"]
  );

  return (
    <div ref={sectionRef} className="scroll-story-backpain-section relative w-full h-[400vh] bg-[#0B0F17]">
      
      {/* Desktop-Only Viewport */}
      <div ref={containerRef} className="sticky top-0 h-[100vh] w-full flex items-center justify-center overflow-hidden pt-[90px] desktop-storyboard-backpain">
        
        {/* Full-width Background (blurred depth-of-field office images) */}
        <motion.div 
          style={{ opacity: imgOpacity, scale: imgScaleInit }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          {/* Pose 1: Frustrated Office Back Pain */}
          <motion.div 
            style={{ 
              opacity: img1Opacity,
              scale: imgScale,
              filter: imgBlur
            }} 
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src="/images/solution/backpain_workout.webp" 
              alt="Workspace Back Pain Discomfort" 
              fill 
              className="object-cover object-top"
              priority
            />
          </motion.div>
          
          {/* Pose 2: Solved Relief Exercise */}
          <motion.div 
            style={{ 
              opacity: img2Opacity,
              scale: imgScale,
              filter: imgBlur
            }} 
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src="/images/solution/injury_prevented_exercise.webp" 
              alt="Workspace Relief Prevention Exercise" 
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
                  Generic routines<br />don't care<br />about you.
                </h3>

                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                    <span className="text-white/95 font-medium">12 Week Plan</span>
                    <X className="w-4 h-4 text-[#FF5C5C] shrink-0" />
                  </div>
                  <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                    <span className="text-white/95 font-medium">No Flexibility</span>
                    <X className="w-4 h-4 text-[#FF5C5C] shrink-0" />
                  </div>
                  <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                    <span className="text-white/95 font-medium">Injuries</span>
                    <X className="w-4 h-4 text-[#FF5C5C] shrink-0" />
                  </div>
                  <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                    <span className="text-white/95 font-medium">Poor Recovery</span>
                    <X className="w-4 h-4 text-[#FF5C5C] shrink-0" />
                  </div>
                  <div className="flex items-center justify-between text-sm py-1">
                    <span className="text-white/95 font-medium">Plateaus</span>
                    <X className="w-4 h-4 text-[#FF5C5C] shrink-0" />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 text-xs text-[#FF5C5C]/90 font-medium">
                ⚠️ Static plans lead to injuries.
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
              <div>
                <div className="flex items-center gap-2 mb-4 text-[#00D4FF] font-mono text-xs font-bold tracking-widest">
                  <Sparkles className="w-4 h-4" /> THE FITNIVO SOLUTION
                </div>
                <h3 className="text-[32px] font-bold text-white leading-[1.2] mb-5">
                  Dynamic AI<br />Adjustments.
                </h3>

                {/* Micro-Chat Interface */}
                <div className="flex flex-col gap-2.5 mb-5">
                  <div className="self-start max-w-[85%] bg-white/5 border border-white/5 rounded-2xl rounded-bl-none px-3.5 py-2 text-xs text-slate-300">
                    "My lower back is tight today."
                  </div>
                  <div className="self-end max-w-[85%] bg-cyan-955/35 border border-[#00D4FF]/20 rounded-2xl rounded-br-none px-3.5 py-2 text-xs text-[#00D4FF] font-medium">
                    "I've adjusted today's workout."
                  </div>
                </div>

                {/* Workout Replacement List */}
                <div className="bg-[#0B0F17]/80 border border-white/5 rounded-2xl p-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[11px] py-0.5">
                    <span className="text-slate-400">Goblet Squat</span>
                    <span className="text-slate-400">→</span>
                    <span className="text-white font-medium">Leg Press</span>
                    <motion.div style={{ scale: row1Scale }} className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-400" /></motion.div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] py-0.5">
                    <span className="text-slate-400">Barbell Row</span>
                    <span className="text-slate-400">→</span>
                    <span className="text-white font-medium">Chest Supported</span>
                    <motion.div style={{ scale: row2Scale }} className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-400" /></motion.div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] py-0.5">
                    <span className="text-slate-400">Deadlift</span>
                    <span className="text-slate-400">→</span>
                    <span className="text-white font-medium">Hip Thrust</span>
                    <motion.div style={{ scale: row3Scale }} className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-400" /></motion.div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] py-0.5">
                    <span className="text-slate-400">Bird Dog</span>
                    <span className="text-slate-400">→</span>
                    <span className="text-white font-medium">Core Stability</span>
                    <motion.div style={{ scale: row4Scale }} className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-400" /></motion.div>
                  </div>
                </div>
              </div>

              <motion.button 
                onClick={handleScrollToApp}
                style={{ boxShadow: ctaShadow }}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#6A5CFF] text-white font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-all flex items-center justify-center gap-1.5"
              >
                See Adjusted Plan <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Mobile-Only Optimized Layout (No complex scroll animations, stacked flow) */}
      <div className="mobile-storyboard-backpain">
      <div className="flex flex-col gap-8 max-w-[500px] mx-auto px-4 py-12">
          
          {/* Step 1: The Problem Card */}
          <div className="rounded-[24px] p-6 border border-[#FF5C5C]/20 bg-[rgba(20,24,34,0.75)] shadow-lg flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4 text-[#FF5C5C] font-mono text-xs font-bold tracking-widest">
              <AlertTriangle className="w-4 h-4" /> THE PROBLEM
            </div>
            <h3 className="text-2xl font-bold text-white leading-tight mb-4">
              Generic routines don't care about you.
            </h3>
            
            {/* Inline Back Pain Image */}
            <div className="story-img-wrap relative w-full h-[240px] rounded-2xl overflow-hidden mb-5 border border-white/5">
              <Image 
                src="/images/solution/backpain_workout.webp" 
                alt="Lower Back Discomfort" 
                fill 
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-3.5 mb-4">
              <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                <span className="text-white/95">12 Week Plan</span>
                <X className="w-4 h-4 text-[#FF5C5C]" />
              </div>
              <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                <span className="text-white/95">No Flexibility</span>
                <X className="w-4 h-4 text-[#FF5C5C]" />
              </div>
              <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                <span className="text-white/95">Injuries</span>
                <X className="w-4 h-4 text-[#FF5C5C]" />
              </div>
            </div>
            <div className="pt-3 border-t border-white/5 text-xs text-[#FF5C5C]/90 font-medium text-center">
              ⚠️ Static plans lead to injuries.
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
              Dynamic AI Adjustments.
            </h3>
            
            {/* Inline Solved Exercise Image */}
            <div className="story-img-wrap relative w-full h-[240px] rounded-2xl overflow-hidden mb-5 border border-white/5">
              <Image 
                src="/images/solution/injury_prevented_exercise.webp" 
                alt="Injury Prevented Workout Exercise" 
                fill 
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <div className="bg-white/5 rounded-xl px-3 py-1.5 text-xs text-slate-300">
                "My lower back is tight today."
              </div>
              <div className="bg-cyan-950/20 border border-[#00D4FF]/20 rounded-xl px-3 py-1.5 text-xs text-[#00D4FF] font-medium self-end">
                "Adjusting Goblet Squat to Leg Press..."
              </div>
            </div>

            <div className="bg-[#0B0F17]/80 border border-white/5 rounded-2xl p-4 flex flex-col gap-2 mb-6">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Goblet Squat</span>
                <span className="text-slate-400">→</span>
                <span className="text-white font-medium">Leg Press</span>
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-400" /></div>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Deadlift</span>
                <span className="text-slate-400">→</span>
                <span className="text-white font-medium">Hip Thrust</span>
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-400" /></div>
              </div>
            </div>

            <button onClick={handleScrollToApp} className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#6A5CFF] text-white font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/20">
              See Adjusted Plan <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
