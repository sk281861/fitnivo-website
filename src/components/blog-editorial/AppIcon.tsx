import React from 'react';

type Props = {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const PALETTE: Record<string, { bg: string; fg: string; border: string }> = {
  Fitnivo:      { bg: 'bg-[#FF6A00]',        fg: 'text-black',  border: 'border-[#FF6A00]/60' },
  Fitbod:       { bg: 'bg-[#1F4FE0]',        fg: 'text-white',  border: 'border-[#1F4FE0]/60' },
  Freeletics:   { bg: 'bg-[#F5C518]',        fg: 'text-black',  border: 'border-[#F5C518]/60' },
  FitnessAI:    { bg: 'bg-[#7C3AED]',        fg: 'text-white',  border: 'border-[#7C3AED]/60' },
  Caliber:      { bg: 'bg-[#DC2626]',        fg: 'text-white',  border: 'border-[#DC2626]/60' },
  Ray:          { bg: 'bg-[#06B6D4]',        fg: 'text-black',  border: 'border-[#06B6D4]/60' },
  SensAI:       { bg: 'bg-[#10B981]',        fg: 'text-black',  border: 'border-[#10B981]/60' },
  JuggernautAI: { bg: 'bg-[#111827]',        fg: 'text-white',  border: 'border-[#374151]' },
  MyFitnessPal: { bg: 'bg-[#0072CE]',        fg: 'text-white',  border: 'border-[#0072CE]/60' },
  MacroFactor:  { bg: 'bg-[#EA580C]',        fg: 'text-white',  border: 'border-[#EA580C]/60' },
  'Cal AI':     { bg: 'bg-[#000000]',        fg: 'text-white',  border: 'border-white/20' },
  Cronometer:   { bg: 'bg-[#8B5CF6]',        fg: 'text-white',  border: 'border-[#8B5CF6]/60' },
  Noom:         { bg: 'bg-[#FBBF24]',        fg: 'text-black',  border: 'border-[#FBBF24]/60' },
};

const FALLBACK = { bg: 'bg-white/10', fg: 'text-white', border: 'border-white/20' };

const SIZE_MAP = {
  sm: 'w-8 h-8 text-xs rounded-md',
  md: 'w-10 h-10 text-sm rounded-lg',
  lg: 'w-14 h-14 text-lg rounded-xl',
};

export default function AppIcon({ name, size = 'md', className = '' }: Props) {
  const palette = PALETTE[name] ?? FALLBACK;
  const letter = name.charAt(0).toUpperCase();
  const sizeClass = SIZE_MAP[size];

  return (
    <span
      className={`inline-flex items-center justify-center font-black font-mono border ${palette.bg} ${palette.fg} ${palette.border} ${sizeClass} ${className}`}
      aria-hidden="true"
    >
      {letter}
    </span>
  );
}
