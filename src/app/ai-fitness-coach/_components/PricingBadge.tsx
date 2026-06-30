"use client";

import { useEffect, useState } from 'react';

type PricingProps = {
  type?: 'badge' | 'text' | 'inline';
};

export default function PricingBadge({ type = 'badge' }: PricingProps) {
  const [pricingText, setPricingText] = useState('$9.99 / month');

  useEffect(() => {
    const lang = navigator.language || '';
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';

    const isUAE =
      lang.includes('AE') ||
      lang.toLowerCase().startsWith('ae') ||
      timeZone.includes('Dubai') ||
      timeZone.includes('Abu_Dhabi');
    const isUK =
      lang.includes('GB') ||
      lang.toLowerCase().startsWith('gb') ||
      timeZone.includes('London');

    if (isUAE) {
      setPricingText('AED 39.99 / month');
    } else if (isUK) {
      setPricingText('£8.99 / month');
    } else {
      setPricingText('$9.99 / month');
    }
  }, []);

  if (type === 'inline') {
    return <strong className="text-cyan-400 font-mono">{pricingText}</strong>;
  }

  if (type === 'text') {
    return <span className="font-mono">{pricingText}</span>;
  }

  // default 'badge' style: a premium neon cyan border and glowing container
  return (
    <div className="inline-flex items-center gap-2 border border-cyan-400 bg-cyan-950/20 px-4 py-2 text-cyan-400 text-sm font-semibold tracking-wider font-mono uppercase shadow-[0_0_15px_rgba(0,242,254,0.15)] rounded-none">
      <span>⚡ {pricingText}</span>
    </div>
  );
}
