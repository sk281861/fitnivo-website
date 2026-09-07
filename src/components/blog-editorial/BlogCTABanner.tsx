import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  headline?: string;
  subheading?: string;
  primaryHref?: string;
  primaryText?: string;
  secondaryHref?: string;
  secondaryText?: string;
};

export default function BlogCTABanner({
  headline = 'Ready to Build a Better You?',
  subheading = 'Join the early community — tracking workouts, meals, and progress with Fitnivo.',
  primaryHref = 'https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en',
  primaryText = 'Download Fitnivo',
}: Props) {
  return (
    <section className="relative rounded-3xl overflow-hidden border border-[#FF6A00]/30 my-12 shadow-[0_0_80px_-30px_rgba(255,106,0,0.5)]">
      <div className="absolute inset-0">
        <Image
          src="/images/mascot/banner-cta-scene.png"
          alt=""
          fill
          className="object-cover object-left"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/60 to-black/85 md:from-transparent md:via-black/40 md:to-black/85" />
      </div>

      <div className="relative grid md:grid-cols-2 gap-6 items-center min-h-[220px] md:min-h-[280px] px-6 md:px-10 py-10">
        <div className="hidden md:block" aria-hidden="true" />
        <div className="text-left md:text-right">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
            {headline}
          </h3>
          <p className="text-sm text-white/70 mb-6 max-w-md md:ml-auto leading-relaxed">
            {subheading}
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF6A00] text-black font-bold text-sm hover:bg-[#FF8524] transition shadow-lg shadow-[#FF6A00]/30"
            >
              {primaryText} <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
