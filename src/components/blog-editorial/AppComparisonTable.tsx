'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AppIcon from './AppIcon';

export type CompColumn = { key: string; label: string };
export type CompRow = {
  name: string;
  bestFor: string;
  values: Record<string, string>;
  price: string;
  isOurPick?: boolean;
};

type Props = {
  columns: CompColumn[];
  rows: CompRow[];
  title?: string;
  subtitle?: string;
};

function Cell({ value }: { value: string }) {
  const v = value.trim();
  if (v === '✓' || v === 'yes' || v === 'true') {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/15 border border-emerald-400/40 transition group-hover/row:bg-emerald-500/25 group-hover/row:border-emerald-400/70 group-hover/row:scale-110">
        <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (v === '—' || v === '-' || v === 'no' || v === 'false') {
    return <span className="text-white/25 font-mono">—</span>;
  }
  if (v.startsWith('✓')) {
    // "✓ (human)" or "✓ (voice)" — pack ✓ badge + small annotation on ONE line
    const annotation = v.slice(1).trim();
    return (
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-400/40 shrink-0">
          <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="text-emerald-400 text-[11px] font-mono">{annotation}</span>
      </span>
    );
  }
  // "✓ (basic)" style handled above; plain text (rare) falls here.
  return <span className="text-white/70 text-xs whitespace-nowrap">{v}</span>;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

const rowVariant = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function AppComparisonTable({ columns, rows, title = 'Quick Comparison', subtitle }: Props) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={container}
      className="mb-16 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent overflow-hidden"
    >
      <header className="px-6 md:px-8 py-6 border-b border-white/10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{title}</h2>
          {subtitle && <p className="text-sm text-white/50">{subtitle}</p>}
        </div>
        <a href="#detailed-reviews" className="text-xs uppercase tracking-wider font-mono text-white/60 hover:text-[#FF6A00] transition inline-flex items-center gap-1">
          See Detailed Review <span>↓</span>
        </a>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm min-w-[860px] table-fixed">
          <colgroup>
            <col style={{ width: '48px' }} />
            <col style={{ width: '184px' }} />
            <col style={{ width: '160px' }} />
            {columns.map((c) => (
              <col key={c.key} style={{ width: '96px' }} />
            ))}
            <col style={{ width: '168px' }} />
          </colgroup>
          <thead>
            <tr className="text-[10px] uppercase tracking-widest text-white/40 font-mono">
              <th className="px-4 md:px-6 py-4 font-normal">#</th>
              <th className="px-4 py-4 font-normal">App</th>
              <th className="px-4 py-4 font-normal">Best For</th>
              {columns.map((c) => (
                <th key={c.key} className="px-3 py-4 font-normal text-center whitespace-nowrap">{c.label}</th>
              ))}
              <th className="px-4 md:px-6 py-4 font-normal text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const pick = row.isOurPick;
              const stripe = i % 2 === 1 ? 'bg-white/[0.015]' : '';
              const pickClass = pick
                ? 'bg-[#FF6A00]/[0.06] outline outline-1 outline-[#FF6A00]/40 shadow-[inset_0_0_0_1px_rgba(255,106,0,0.12)]'
                : stripe;
              return (
                <motion.tr
                  key={row.name}
                  variants={rowVariant}
                  className={`group/row border-t border-white/5 transition-colors hover:bg-white/[0.04] ${pickClass}`}
                >
                  <td className="px-4 md:px-6 py-4 text-white/40 font-mono text-xs group-hover/row:text-white/70 transition align-middle">{i + 1}</td>
                  <td className="px-4 py-4 align-middle">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="transition-transform group-hover/row:scale-110 group-hover/row:rotate-[-4deg] shrink-0">
                        <AppIcon name={row.name} size="md" />
                      </span>
                      <div className="flex flex-col min-w-0 gap-1">
                        <span className={`font-semibold truncate ${pick ? 'text-white' : 'text-white/90'}`}>{row.name}</span>
                        {pick && (
                          <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-widest font-bold font-mono px-2 py-0.5 rounded-full bg-[#FF6A00] text-black whitespace-nowrap w-fit">
                            <span className="w-1 h-1 rounded-full bg-black" />
                            Our Pick
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-white/60 text-xs align-middle leading-snug">{row.bestFor}</td>
                  {columns.map((c) => (
                    <td key={c.key} className="px-3 py-4 text-center align-middle">
                      <Cell value={row.values[c.key] ?? '—'} />
                    </td>
                  ))}
                  <td className={`px-4 md:px-6 py-4 text-right font-mono text-xs align-middle whitespace-nowrap ${pick ? 'text-[#FF6A00] font-bold' : 'text-white/70'}`}>
                    {row.price}
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}
