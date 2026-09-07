import React from 'react';
import Image from 'next/image';

type Props = {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const SIZE_PX = { sm: 32, md: 40, lg: 56 };
const SIZE_CLASS = {
  sm: 'w-8 h-8 rounded-md',
  md: 'w-10 h-10 rounded-lg',
  lg: 'w-14 h-14 rounded-xl',
};

// Simplified brandmarks — evocative of each app's identity without copying
// the exact trademark. Real Fitnivo logo used from /favicon.webp.
function Brandmark({ name, px }: { name: string; px: number }) {
  const s = px;
  const stroke = Math.max(1.5, s / 22);

  switch (name) {
    case 'Fitbod':
      // Dumbbell mark on Fitbod blue
      return (
        <div className="w-full h-full flex items-center justify-center bg-[#1F4FE0]">
          <svg viewBox="0 0 24 24" width={s * 0.6} height={s * 0.6} fill="none" stroke="white" strokeWidth={stroke} strokeLinecap="round">
            <path d="M5 9v6M8 7v10M16 7v10M19 9v6M8 12h8" />
          </svg>
        </div>
      );
    case 'Freeletics':
      // Bold F on Freeletics yellow
      return (
        <div className="w-full h-full flex items-center justify-center bg-[#F5C518] text-black font-black italic" style={{ fontSize: s * 0.55, fontFamily: 'system-ui, sans-serif' }}>
          f
        </div>
      );
    case 'FitnessAI':
      // "AI" wordmark on deep purple
      return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] text-white font-black" style={{ fontSize: s * 0.36, letterSpacing: -0.5, fontFamily: 'system-ui, sans-serif' }}>
          AI
        </div>
      );
    case 'Caliber':
      // Barbell plate on Caliber red
      return (
        <div className="w-full h-full flex items-center justify-center bg-[#DC2626]">
          <svg viewBox="0 0 24 24" width={s * 0.65} height={s * 0.65} fill="none" stroke="white" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="7" />
            <path d="M12 5v14M5 12h14" opacity="0.5" />
          </svg>
        </div>
      );
    case 'Ray':
      // Radar/wave arcs on cyan
      return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#06B6D4] to-[#0284C7]">
          <svg viewBox="0 0 24 24" width={s * 0.65} height={s * 0.65} fill="none" stroke="white" strokeWidth={stroke} strokeLinecap="round">
            <path d="M12 21a9 9 0 0 1-9-9" />
            <path d="M12 21a5 5 0 0 1-5-5" />
            <circle cx="12" cy="21" r="1.2" fill="white" stroke="none" />
          </svg>
        </div>
      );
    case 'SensAI':
      // Heart pulse on green
      return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#10B981] to-[#059669]">
          <svg viewBox="0 0 24 24" width={s * 0.7} height={s * 0.7} fill="none" stroke="white" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12h4l2-5 3 10 3-8 2 3h4" />
          </svg>
        </div>
      );
    case 'JuggernautAI':
      // Weight-plate stack on navy
      return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
          <svg viewBox="0 0 24 24" width={s * 0.65} height={s * 0.65} fill="none" stroke="#FFB56B" strokeWidth={stroke} strokeLinecap="round">
            <rect x="4" y="7" width="2" height="10" rx="1" />
            <rect x="18" y="7" width="2" height="10" rx="1" />
            <rect x="8" y="5" width="2" height="14" rx="1" />
            <rect x="14" y="5" width="2" height="14" rx="1" />
            <rect x="11" y="11" width="2" height="2" />
          </svg>
        </div>
      );
    case 'MyFitnessPal':
      return (
        <div className="w-full h-full flex items-center justify-center bg-[#0072CE]">
          <svg viewBox="0 0 24 24" width={s * 0.65} height={s * 0.65} fill="none" stroke="white" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21s-7-4.5-9-9c-1.5-3.5 1-8 5-8 2 0 3 1 4 2 1-1 2-2 4-2 4 0 6.5 4.5 5 8-2 4.5-9 9-9 9z" />
          </svg>
        </div>
      );
    case 'MacroFactor':
      return (
        <div className="w-full h-full flex items-center justify-center bg-[#EA580C]">
          <svg viewBox="0 0 24 24" width={s * 0.65} height={s * 0.65} fill="none" stroke="white" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 20V8l4-3 4 3 4-3 4 3v12" />
            <path d="M4 20h16" />
          </svg>
        </div>
      );
    case 'Cal AI':
      return (
        <div className="w-full h-full flex items-center justify-center bg-black text-white font-black" style={{ fontSize: s * 0.34, fontFamily: 'system-ui, sans-serif' }}>
          cal
        </div>
      );
    case 'Cronometer':
      return (
        <div className="w-full h-full flex items-center justify-center bg-[#8B5CF6]">
          <svg viewBox="0 0 24 24" width={s * 0.7} height={s * 0.7} fill="none" stroke="white" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="8" />
            <path d="M12 8v4l3 2" />
          </svg>
        </div>
      );
    case 'Noom':
      return (
        <div className="w-full h-full flex items-center justify-center bg-[#FBBF24] text-black font-black italic" style={{ fontSize: s * 0.36, fontFamily: 'system-ui, sans-serif' }}>
          noom
        </div>
      );
    default:
      return (
        <div className="w-full h-full flex items-center justify-center bg-white/10 text-white font-black font-mono" style={{ fontSize: s * 0.4 }}>
          {name.charAt(0).toUpperCase()}
        </div>
      );
  }
}

export default function AppIcon({ name, size = 'md', className = '' }: Props) {
  const px = SIZE_PX[size];
  const cls = SIZE_CLASS[size];

  // Real Fitnivo logo from repo
  if (name === 'Fitnivo') {
    return (
      <span
        className={`inline-flex items-center justify-center overflow-hidden bg-[#FF6A00] ring-1 ring-[#FF6A00]/60 shadow-[0_0_20px_-4px_rgba(255,106,0,0.5)] ${cls} ${className}`}
        aria-hidden="true"
      >
        <Image src="/favicon.webp" alt="" width={px} height={px} className="w-full h-full object-contain p-1" />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center justify-center overflow-hidden ring-1 ring-white/10 ${cls} ${className}`}
      aria-hidden="true"
    >
      <Brandmark name={name} px={px} />
    </span>
  );
}
