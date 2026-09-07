'use client';

import React, { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  poster?: string;
  className?: string;
};

export default function HeroVideo({ src, poster, className = '' }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative w-full aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-[#FF6A00]/10 ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
      {!isVisible && (
        <div className="absolute inset-x-0 bottom-3 flex justify-center pointer-events-none">
          <span className="text-[10px] uppercase tracking-widest font-mono text-white/40 px-2 py-1 rounded bg-black/40 backdrop-blur-sm">
            Auto-plays on view
          </span>
        </div>
      )}
    </div>
  );
}
