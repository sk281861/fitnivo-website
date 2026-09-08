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

// Real logo files served from /public/images/logo/
// Each entry: { src, bg (backdrop color), pad (inner padding class) }
const LOGOS: Record<string, { src: string; bg: string; pad?: string; ring?: string }> = {
  Fitnivo:      { src: '/images/logo/fitnivo.png',          bg: 'bg-black',      pad: 'p-1',   ring: 'ring-[#FF6A00]/60 shadow-[0_0_20px_-4px_rgba(255,106,0,0.5)]' },
  Fitbod:       { src: '/images/logo/fitbod.webp',          bg: 'bg-white',      pad: 'p-0.5' },
  Freeletics:   { src: '/images/logo/freeletics.png',       bg: 'bg-black',      pad: 'p-1' },
  FitnessAI:    { src: '/images/logo/fitnessai.png',        bg: 'bg-black',      pad: 'p-0.5' },
  Caliber:      { src: '/images/logo/caliber.png',          bg: 'bg-white',      pad: 'p-1' },
  Ray:          { src: '/images/logo/ray.png',              bg: 'bg-black',      pad: 'p-0.5' },
  SensAI:       { src: '/images/logo/sensai.png',           bg: 'bg-black',      pad: 'p-1' },
  JuggernautAI: { src: '/images/logo/juggernautai.webp',     bg: 'bg-black',      pad: 'p-0.5' },
  // Home/beginner/personal-trainer comparison apps
  'Nike Training Club': { src: '/images/logo/niketrainingclub.webp', bg: 'bg-black', pad: 'p-0' },
  Hevy:                 { src: '/images/logo/hevy.webp',             bg: 'bg-black', pad: 'p-0' },
  Planfit:              { src: '/images/logo/planfit.webp',          bg: 'bg-black', pad: 'p-0' },
  // Weight-loss & nutrition comparison apps
  MyFitnessPal: { src: '/images/logo/myfitnesspal.webp',     bg: 'bg-black',      pad: 'p-0' },
  Noom:         { src: '/images/logo/noom.webp',             bg: 'bg-black',      pad: 'p-0' },
  'Lose It!':   { src: '/images/logo/loseit.webp',           bg: 'bg-black',      pad: 'p-0' },
  'Cal AI':     { src: '/images/logo/calai.webp',            bg: 'bg-black',      pad: 'p-0' },
  MacroFactor:  { src: '/images/logo/macrofactor.webp',      bg: 'bg-black',      pad: 'p-0' },
  Welling:      { src: '/images/logo/welling.webp',          bg: 'bg-black',      pad: 'p-0' },
  Cronometer:   { src: '/images/logo/cronometer.webp',       bg: 'bg-black',      pad: 'p-0' },
  Nutrola:      { src: '/images/logo/nutrola.webp',          bg: 'bg-black',      pad: 'p-0' },
};

export default function AppIcon({ name, size = 'md', className = '' }: Props) {
  const px = SIZE_PX[size];
  const cls = SIZE_CLASS[size];
  const logo = LOGOS[name];

  if (logo) {
    const ringClass = logo.ring ?? 'ring-white/10';
    return (
      <span
        className={`inline-flex items-center justify-center overflow-hidden ring-1 ${logo.bg} ${ringClass} ${cls} ${className}`}
        aria-hidden="true"
      >
        <Image
          src={logo.src}
          alt=""
          width={px}
          height={px}
          className={`w-full h-full object-contain ${logo.pad ?? ''}`}
        />
      </span>
    );
  }

  // Fallback for unmapped apps: colored letter badge
  const letter = name.charAt(0).toUpperCase();
  return (
    <span
      className={`inline-flex items-center justify-center bg-white/10 text-white font-black font-mono ring-1 ring-white/10 ${cls} ${className}`}
      aria-hidden="true"
      style={{ fontSize: px * 0.4 }}
    >
      {letter}
    </span>
  );
}
