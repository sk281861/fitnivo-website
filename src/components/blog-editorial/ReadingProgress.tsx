'use client';

import React, { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#FF6A00] via-[#FF8524] to-[#FFB56B] transition-[width] duration-100 ease-out shadow-[0_0_10px_rgba(255,106,0,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
