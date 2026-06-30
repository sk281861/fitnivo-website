"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Activity, Wind } from 'lucide-react';

const screenshots = [
  { src: '/images/mockup/ai-fitness-coach-chat-workout-planner.webp', alt: 'Fitnivo interactive AI fitness coach chat interface generating a custom workout plan' },
  { src: '/images/mockup/personal-ai-trainer-custom-workout-routine.webp', alt: 'Personal AI trainer screen showcasing a fully customized workout schedule' },
  { src: '/images/mockup/equipment-aware-gym-workout-logger.webp', alt: 'Equipment-aware gym workout logger tracking exact sets, reps, and volume' },
  { src: '/images/mockup/custom-workout-creator-exercise-builder.webp', alt: 'Custom workout creator tool for building personalized lifting routines' },
  { src: '/images/mockup/exercise-form-guide-visual-instructions.webp', alt: 'Step-by-step exercise form guide detailing exact workout mechanics' },
  { src: '/images/mockup/fitness-analytics-dashboard-performance-lab.webp', alt: 'Fitnivo Performance Lab dashboard displaying historical workout analytics' },
  { src: '/images/mockup/ai-food-scanner-calorie-macro-tracker.webp', alt: 'AI food camera scanner tracking calories and macronutrients instantly' },
  { src: '/images/mockup/personalized-ai-meal-plan-dashboard.webp', alt: 'Custom personalized AI meal plan and diet dashboard interface' },
  { src: '/images/mockup/nutrition-stats-bmi-tracking-dashboard.webp', alt: 'Fitness analytics showing BMI metrics alongside custom nutrition plans' }
];

export default function DeviceSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const index = Math.round(container.scrollLeft / container.clientWidth);
    setActiveIndex(index);
  };

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({
      left: width * index,
      behavior: 'smooth'
    });
  };

  const totalSlides = 1 + screenshots.length; // 1 custom mockup + 9 screenshots

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-[320px]">
      {/* Scrollbar hide helper styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}} />

      {/* iPhone Frame Container */}
      <div className="relative w-full aspect-[9/19.5] border-[8px] border-[#1a1a1a] rounded-[3rem] shadow-[0_0_50px_rgba(0,242,254,0.15)] bg-black overflow-hidden select-none">
        
        {/* Flex Scroll snap container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Slide 1: Original Mockup Screen */}
          <div className="min-w-full h-full snap-center relative bg-[#050505] text-white flex flex-col justify-between" style={{ padding: "32px 20px 80px 20px" }}>
            
            {/* Top Bar Header */}
            <div className="flex justify-between items-center mt-6">
              <div>
                <div className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-wider">Thursday, April 23</div>
                <div className="text-xl font-bold">Hello, Alex</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-xs">A</div>
            </div>

            {/* SVG Progress Rings */}
            <div className="flex justify-center my-4">
              <div className="relative w-44 h-44">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="88" cy="88" r="80" stroke="rgba(255,255,255,0.03)" strokeWidth="8" fill="transparent" />
                  <motion.circle 
                    cx="88" cy="88" r="80" stroke="#60A5FA" strokeWidth="8" fill="transparent" 
                    strokeDasharray="502.65" 
                    initial={{ strokeDashoffset: 502.65 }}
                    whileInView={{ strokeDashoffset: 120 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    strokeLinecap="round" 
                  />
                  <circle cx="88" cy="88" r="64" stroke="rgba(255,255,255,0.03)" strokeWidth="8" fill="transparent" />
                  <motion.circle 
                    cx="88" cy="88" r="64" stroke="#A855F7" strokeWidth="8" fill="transparent" 
                    strokeDasharray="402.12" 
                    initial={{ strokeDashoffset: 402.12 }}
                    whileInView={{ strokeDashoffset: 180 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                    strokeLinecap="round" 
                  />
                  <circle cx="88" cy="88" r="48" stroke="rgba(255,255,255,0.03)" strokeWidth="8" fill="transparent" />
                  <motion.circle 
                    cx="88" cy="88" r="48" stroke="#4ADE80" strokeWidth="8" fill="transparent" 
                    strokeDasharray="301.59" 
                    initial={{ strokeDashoffset: 301.59 }}
                    whileInView={{ strokeDashoffset: 90 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    strokeLinecap="round" 
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[9px] text-zinc-500 font-extrabold tracking-wider">TOTAL SCORE</span>
                  <span className="text-3xl font-extrabold text-white">942</span>
                </div>
              </div>
            </div>

            {/* Session Cards */}
            <div className="flex flex-col gap-3">
              <div className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-2xl flex items-center gap-4">
                <div className="w-9 h-9 bg-blue-500/15 rounded-xl flex items-center justify-center text-blue-400">
                  <Activity size={18} />
                </div>
                <div>
                  <div className="text-[8px] font-black uppercase tracking-wider text-zinc-500">Body</div>
                  <div className="text-xs font-bold">Leg Day Phase 1</div>
                </div>
              </div>
              <div className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-2xl flex items-center gap-4">
                <div className="w-9 h-9 bg-green-500/15 rounded-xl flex items-center justify-center text-green-400">
                  <Wind size={18} />
                </div>
                <div>
                  <div className="text-[8px] font-black uppercase tracking-wider text-zinc-500">Mind</div>
                  <div className="text-xs font-bold">Deep Focus Session</div>
                </div>
              </div>
            </div>

          </div>

          {/* Screenshot Slides */}
          {screenshots.map((screenshot, index) => (
            <div key={screenshot.src} className="min-w-full h-full snap-center relative aspect-[9/19.5] bg-black">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                loading="lazy"
                sizes="(max-width: 320px) 100vw, 320px"
                className="object-cover pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls (Arrows + Dots) */}
      <div className="flex items-center gap-4 py-2">
        <button
          onClick={() => scrollToSlide(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="w-10 h-10 flex items-center justify-center border border-zinc-800 hover:border-cyan-400 text-[#00f2fe] disabled:opacity-30 disabled:hover:border-zinc-800 disabled:text-zinc-600 font-bold font-mono transition-all bg-black hover:bg-cyan-950/20"
          aria-label="Previous slide"
        >
          ←
        </button>

        <div className="flex gap-2 justify-center">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-cyan-400 w-4' : 'bg-zinc-700 hover:bg-zinc-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => scrollToSlide(activeIndex + 1)}
          disabled={activeIndex === totalSlides - 1}
          className="w-10 h-10 flex items-center justify-center border border-zinc-800 hover:border-cyan-400 text-[#00f2fe] disabled:opacity-30 disabled:hover:border-zinc-800 disabled:text-zinc-600 font-bold font-mono transition-all bg-black hover:bg-cyan-950/20"
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </div>
  );
}
