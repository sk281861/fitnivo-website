import { Easing } from 'remotion';

export const theme = {
  colors: {
    bg: '#0A0A0F',
    bgAlt: '#12121A',
    primary: '#FF6A00',       // Fitnivo orange — hero color, max one hero element per frame
    accent: '#FFB56B',
    green: '#10B981',
    text: '#F4F4F5',
    textDim: '#A1A1AA',
    textFaint: '#71717A',
    glow: 'rgba(255, 106, 0, 0.4)',
    card: 'rgba(255, 255, 255, 0.04)',
    cardBorder: 'rgba(255, 255, 255, 0.08)',
  },
  fonts: {
    display: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    body: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    mono: 'ui-monospace, "JetBrains Mono", Consolas, monospace',
  },
  ease: {
    out: Easing.bezier(0.16, 1, 0.3, 1),
    inOut: Easing.bezier(0.83, 0, 0.17, 1),
    in: Easing.bezier(0.7, 0, 0.84, 0),
  },
  spring: {
    snappy: { damping: 14, stiffness: 160, mass: 0.6 },
    smooth: { damping: 20, stiffness: 90, mass: 1 },
    bouncy: { damping: 11, stiffness: 170, mass: 0.7 },
  },
} as const;
