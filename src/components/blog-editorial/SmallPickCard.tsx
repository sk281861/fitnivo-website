'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AppIcon from './AppIcon';

type Props = {
  rank: number;
  name: string;
  bestFor: string;
  price: string;
  description?: string;
  url: string;
  internal?: boolean;
};

export default function SmallPickCard({ rank, name, bestFor, price, description, url, internal }: Props) {
  const linkProps = internal
    ? { href: url }
    : { href: url, target: '_blank' as const, rel: 'noopener noreferrer' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-[#FF6A00]/40 hover:bg-white/[0.04] transition-colors h-full flex flex-col cursor-default"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6A00]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative flex items-start gap-3 mb-3">
        <div className="text-white/30 font-mono text-xs mt-1 shrink-0 group-hover:text-[#FF6A00] transition">#{rank}</div>
        <span className="transition-transform group-hover:scale-110 group-hover:-rotate-3">
          <AppIcon name={name} size="md" />
        </span>
        <div className="min-w-0">
          <h4 className="font-bold text-white text-sm truncate">{name}</h4>
          <p className="text-[11px] uppercase tracking-wider text-white/40 font-mono mt-0.5 truncate">{bestFor}</p>
        </div>
      </div>

      {description && (
        <p className="relative text-xs text-white/60 leading-relaxed mb-4 line-clamp-3">{description}</p>
      )}

      <div className="relative mt-auto flex items-center justify-between pt-3 border-t border-white/5">
        <span className="text-[11px] font-mono text-white/50">{price}</span>
        <Link
          {...linkProps}
          className="text-[11px] uppercase tracking-wider font-bold text-[#FF6A00] hover:text-[#FF8524] transition inline-flex items-center gap-1 group/link"
        >
          Visit <span className="transition-transform group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </motion.div>
  );
}
