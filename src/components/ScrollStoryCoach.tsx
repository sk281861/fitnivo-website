"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, AlertTriangle, X, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ScrollStoryCoach() {
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

  // 6. Chat Bubbles staggered animation (80% timeline)
  const chat1Opacity = useTransform(smoothProgress, [0.75, 0.78], [0, 1]);
  const chat1Y = useTransform(smoothProgress, [0.75, 0.78], [12, 0]);

  const chat2Opacity = useTransform(smoothProgress, [0.78, 0.81], [0, 1]);
  const chat2Y = useTransform(smoothProgress, [0.78, 0.81], [12, 0]);

  const chat3Opacity = useTransform(smoothProgress, [0.81, 0.84], [0, 1]);
  const chat3Y = useTransform(smoothProgress, [0.81, 0.84], [12, 0]);

  const chat4Opacity = useTransform(smoothProgress, [0.84, 0.87], [0, 1]);
  const chat4Y = useTransform(smoothProgress, [0.84, 0.87], [12, 0]);

  // 7. CTA Subtle Glow (95%)
  const ctaShadow = useTransform(
    smoothProgress,
    [0.0, 0.92, 0.96],
    ["0px 0px 0px rgba(0, 212, 255, 0)", "0px 0px 0px rgba(0, 212, 255, 0)", "0px 8px 30px rgba(0, 212, 255, 0.35)"]
  );

  return (
    <div ref={sectionRef} className="scroll-story-coach-section relative w-full h-[400vh] bg-[#0B0F17]">
      
      {/* Desktop-Only Viewport */}
      <div ref={containerRef} className="sticky top-0 h-[100vh] w-full flex items-center justify-center overflow-hidden pt-[90px] desktop-storyboard-coach">
        
        {/* Full-width Background (blurred depth-of-field office images) */}
        <motion.div 
          style={{ opacity: imgOpacity, scale: imgScaleInit }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          {/* Pose 1: Frustrated Office Late Night Coach Inaccessibility */}
          <motion.div 
            style={{ 
              opacity: img1Opacity,
              scale: imgScale,
              filter: imgBlur
            }} 
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src="/images/solution/personal_coach_fees.webp" 
              alt="Expensive Coaching Discomfort" 
              fill 
              className="object-cover object-top"
              priority
            />
          </motion.div>
          
          {/* Pose 2: Solved AI Coach Active Assist */}
          <motion.div 
            style={{ 
              opacity: img2Opacity,
              scale: imgScale,
              filter: imgBlur
            }} 
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src="/images/solution/fitnivo_coach.webp" 
              alt="AI Coach Accessibility Workspace" 
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
              className="absolute inset-0 rounded-[24px] p-8 border border-[#FF5A5A]/20 bg-[rgba(20,24,34,0.75)] backdrop-blur-[20px] shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-[6px] hover:border-white/20 hover:shadow-2xl group"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 text-[#FF5A5A] font-mono text-xs font-bold tracking-widest">
                  <AlertTriangle className="w-4 h-4" /> THE PROBLEM
                </div>
                <h3 className="text-[32px] font-bold text-white leading-[1.2] mb-6">
                  Expert guidance<br />is painfully<br />expensive.
                </h3>

                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                    <span className="text-white/95 font-medium">Human Trainer $300+/mo</span>
                    <X className="w-4 h-4 text-[#FF5A5A] shrink-0" />
                  </div>
                  <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                    <span className="text-white/95 font-medium">Restaurant Decisions</span>
                    <X className="w-4 h-4 text-[#FF5A5A] shrink-0" />
                  </div>
                  <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                    <span className="text-white/95 font-medium">Late Night Workout</span>
                    <X className="w-4 h-4 text-[#FF5A5A] shrink-0" />
                  </div>
                  <div className="flex items-center justify-between text-sm py-1">
                    <span className="text-white/95 font-medium">Need Help Right Now</span>
                    <X className="w-4 h-4 text-[#FF5A5A] shrink-0" />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 text-xs text-[#FF5A5A]/90 font-medium">
                ⚠️ Expert help isn't there when you need it.
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
                    <Sparkles className="w-4 h-4" /> 24/7 AI CHAT
                  </div>
                  <h3 className="text-[28px] font-bold text-white leading-[1.2] mb-4">
                    Instant AI<br />Accessibility.
                  </h3>
                </div>

                {/* Chat Timeline Container */}
                <div className="flex flex-col gap-2.5 overflow-hidden max-h-[260px] pr-1 scrollbar-none py-1">
                  
                  {/* Chat 1 */}
                  <motion.div style={{ opacity: chat1Opacity, y: chat1Y }} className="flex flex-col gap-1">
                    <div className="self-end max-w-[85%] bg-white/5 border border-white/5 rounded-2xl rounded-br-none px-3.5 py-1.5 text-[11px] text-slate-300">
                      "What should I eat here?"
                    </div>
                    <div className="self-start max-w-[85%] bg-cyan-955/35 border border-[#00D4FF]/25 rounded-2xl rounded-bl-none px-3.5 py-1.5 text-[11px] text-[#00D4FF]">
                      "Grilled chicken, vegetables and rice fit your macros."
                    </div>
                  </motion.div>

                  {/* Chat 2 */}
                  <motion.div style={{ opacity: chat2Opacity, y: chat2Y }} className="flex flex-col gap-1">
                    <div className="self-end max-w-[85%] bg-white/5 border border-white/5 rounded-2xl rounded-br-none px-3.5 py-1.5 text-[11px] text-slate-300">
                      "My gym is crowded."
                    </div>
                    <div className="self-start max-w-[85%] bg-cyan-955/35 border border-[#00D4FF]/25 rounded-2xl rounded-bl-none px-3.5 py-1.5 text-[11px] text-[#00D4FF]">
                      "I've rebuilt today's workout using available equipment."
                    </div>
                  </motion.div>

                  {/* Chat 3 */}
                  <motion.div style={{ opacity: chat3Opacity, y: chat3Y }} className="flex flex-col gap-1">
                    <div className="self-end max-w-[85%] bg-white/5 border border-white/5 rounded-2xl rounded-br-none px-3.5 py-1.5 text-[11px] text-slate-300">
                      "I'm working out at 11 PM."
                    </div>
                    <div className="self-start max-w-[85%] bg-cyan-955/35 border border-[#00D4FF]/25 rounded-2xl rounded-bl-none px-3.5 py-1.5 text-[11px] text-[#00D4FF]">
                      "I'm here. Let's get started."
                    </div>
                  </motion.div>

                  {/* Chat 4 */}
                  <motion.div style={{ opacity: chat4Opacity, y: chat4Y }} className="flex flex-col gap-1">
                    <div className="self-end max-w-[85%] bg-white/5 border border-white/5 rounded-2xl rounded-br-none px-3.5 py-1.5 text-[11px] text-slate-300">
                      "I need motivation."
                    </div>
                    <div className="self-start max-w-[85%] bg-cyan-955/35 border border-[#00D4FF]/25 rounded-2xl rounded-bl-none px-3.5 py-1.5 text-[11px] text-[#00D4FF]">
                      "You've already shown up. Let's finish strong."
                    </div>
                  </motion.div>

                </div>

                <motion.button 
                  onClick={handleScrollToApp}
                  style={{ boxShadow: ctaShadow }}
                  className="w-full py-3.5 px-4 mt-2 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#6B5CFF] text-white font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-all flex items-center justify-center gap-1.5"
                >
                  Chat With AI <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Mobile-Only Optimized Layout (No complex scroll animations, stacked flow) */}
      <div className="mobile-storyboard-coach">
        <div className="flex flex-col gap-8 max-w-[500px] mx-auto px-4 py-12">
          
          {/* Step 1: The Problem Card */}
          <div className="rounded-[24px] p-6 border border-[#FF5A5A]/20 bg-[rgba(20,24,34,0.75)] shadow-lg flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4 text-[#FF5A5A] font-mono text-xs font-bold tracking-widest">
              <AlertTriangle className="w-4 h-4" /> THE PROBLEM
            </div>
            <h3 className="text-2xl font-bold text-white leading-tight mb-4">
              Expert guidance is painfully expensive.
            </h3>
            
            {/* Inline Back Pain Image */}
            <div className="story-img-wrap relative w-full h-[240px] rounded-2xl overflow-hidden mb-5 border border-white/5">
              <Image 
                src="/images/solution/personal_coach_fees.webp" 
                alt="Expensive Personal Coach Fees" 
                fill 
                className="object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-3.5 mb-4">
              <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                <span className="text-white/95">Human Trainer $300+/month</span>
                <X className="w-4 h-4 text-[#FF5A5A]" />
              </div>
              <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                <span className="text-white/95">Restaurant Decisions</span>
                <X className="w-4 h-4 text-[#FF5A5A]" />
              </div>
              <div className="flex items-center justify-between text-sm py-1 border-b border-white/5">
                <span className="text-white/95">Late Night Workout</span>
                <X className="w-4 h-4 text-[#FF5A5A]" />
              </div>
            </div>
            <div className="pt-3 border-t border-white/5 text-xs text-[#FF5A5A]/90 font-medium text-center">
              ⚠️ Expert help isn't there when you need it.
            </div>
          </div>

          {/* Transition Line */}
          <div className="flex justify-center items-center">
            <div className="w-0.5 h-10 bg-gradient-to-b from-[#FF5A5A]/30 to-[#00D4FF]/30" />
          </div>

          {/* Step 2: The Solution Card */}
          <div className="rounded-[24px] p-6 border border-[#00D4FF]/20 bg-[rgba(20,24,34,0.75)] shadow-lg flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4 text-[#00D4FF] font-mono text-xs font-bold tracking-widest">
              <Sparkles className="w-4 h-4" /> 24/7 AI CHAT
            </div>
            <h3 className="text-2xl font-bold text-white leading-tight mb-4">
              24/7 AI Chat Accessibility.
            </h3>
            
            {/* Inline Solved Exercise Image */}
            <div className="story-img-wrap relative w-full h-[240px] rounded-2xl overflow-hidden mb-5 border border-white/5">
              <Image 
                src="/images/solution/fitnivo_coach.webp" 
                alt="Fitnivo AI Coach Interface Active" 
                fill 
                className="object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-3 mb-6">
              <div className="flex flex-col gap-1">
                <div className="bg-white/5 rounded-xl px-3 py-1.5 text-xs text-slate-300 self-end">
                  "What should I eat here?"
                </div>
                <div className="bg-cyan-950/20 border border-[#00D4FF]/20 rounded-xl px-3 py-1.5 text-xs text-[#00D4FF] font-medium">
                  "Grilled chicken, vegetables and rice fit your macros."
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="bg-white/5 rounded-xl px-3 py-1.5 text-xs text-slate-300 self-end">
                  "My gym is crowded."
                </div>
                <div className="bg-cyan-950/20 border border-[#00D4FF]/20 rounded-xl px-3 py-1.5 text-xs text-[#00D4FF] font-medium">
                  "I've rebuilt today's workout using available equipment."
                </div>
              </div>
            </div>

            <button onClick={handleScrollToApp} className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#6B5CFF] text-white font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/20">
              Chat With AI <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
