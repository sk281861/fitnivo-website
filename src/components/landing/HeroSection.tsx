'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroSectionProps {
  headline: string;
  subheading: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  comingSoon?: boolean;
}

export default function HeroSection({
  headline,
  subheading,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  comingSoon,
}: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current!.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[50vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
      data-section="hero"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        {comingSoon && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/35 text-indigo-400 text-xs md:text-sm font-semibold uppercase tracking-widest backdrop-blur-md">
            Coming Soon
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
          {headline}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href={primaryCTA.href}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            {primaryCTA.text}
          </a>

          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-colors duration-200 backdrop-blur-sm"
            >
              {secondaryCTA.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
