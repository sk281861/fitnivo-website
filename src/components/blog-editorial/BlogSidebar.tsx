'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export type TocItem = { id: string; label: string };

type Props = {
  toc: TocItem[];
  takeaways?: string[];
  faqHref?: string;
};

export default function BlogSidebar({ toc, takeaways = [], faqHref = '#faq' }: Props) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const ids = toc.map((t) => t.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [toc]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 space-y-5">
        {/* Table of Contents */}
        <nav aria-label="Table of contents" className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <h3 className="text-xs uppercase tracking-widest font-bold font-mono text-white/50 mb-4">
            Table of Contents
          </h3>
          <ol className="space-y-1 text-sm">
            {toc.map((item, i) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    className={`group flex items-start gap-3 py-1.5 pl-3 pr-2 rounded-lg transition-all border-l-2 ${
                      isActive
                        ? 'border-[#FF6A00] bg-[#FF6A00]/[0.08] text-white'
                        : 'border-transparent hover:border-white/20 text-white/60 hover:text-white'
                    }`}
                  >
                    <span className={`font-mono text-xs w-5 shrink-0 pt-0.5 transition ${isActive ? 'text-[#FF6A00]' : 'text-white/30'}`}>
                      {i + 1}.
                    </span>
                    <span className="leading-snug">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Key Takeaways */}
        {takeaways.length > 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <h3 className="text-xs uppercase tracking-widest font-bold font-mono text-white/50 mb-4">
              Key Takeaways
            </h3>
            <ul className="space-y-3">
              {takeaways.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-xs text-white/70 leading-relaxed">
                  <span className="text-[#FF6A00] mt-0.5 shrink-0">◆</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* FAQ card */}
        <div className="rounded-2xl border border-[#FF6A00]/25 bg-gradient-to-br from-[#FF6A00]/10 to-transparent p-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex w-8 h-8 rounded-full bg-[#FF6A00]/20 items-center justify-center text-[#FF6A00] text-sm">?</span>
            <h3 className="text-sm font-bold text-white">Have a question?</h3>
          </div>
          <p className="text-xs text-white/60 leading-relaxed mb-3">
            Check the FAQ section below or drop us a message.
          </p>
          <Link href={faqHref} className="text-xs uppercase tracking-wider font-bold text-[#FF6A00] hover:text-[#FF8524] inline-flex items-center gap-1">
            Visit FAQs <span>→</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
