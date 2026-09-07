import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';
import { ProgressRing } from '../components/ProgressRing';

const rings = [
  { label: 'Move',        target: 92, color: '#FF6A00', size: 300, stroke: 24 },
  { label: 'Nutrition',   target: 78, color: '#FFB56B', size: 230, stroke: 20 },
  { label: 'Consistency', target: 64, color: '#10B981', size: 160, stroke: 16 },
];

const Entrance: React.FC<{ delay?: number; children: React.ReactNode }> = ({ delay = 0, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: theme.spring.smooth });
  return (
    <div
      style={{
        opacity: p,
        transform: `translateY(${interpolate(p, [0, 1], [40, 0])}px) scale(${interpolate(p, [0, 1], [0.94, 1])})`,
      }}
    >
      {children}
    </div>
  );
};

export const SceneProgress: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Enter
  const enterY = interpolate(frame, [0, 20], [60, 0], {
    easing: theme.ease.out,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const enterO = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Big counter animate 0 → 78
  const counterP = spring({
    frame: frame - 20,
    fps,
    config: { damping: 30, stiffness: 55 },
  });
  const counterValue = Math.round(interpolate(counterP, [0, 1], [0, 78]));

  // Fitnivo logo entrance
  const logoP = spring({ frame: frame - 55, fps, config: theme.spring.bouncy });

  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        transform: `translateY(${enterY}px)`,
        opacity: enterO,
      }}
    >
      {/* Header */}
      <div style={{ position: 'absolute', top: 100, left: 0, right: 0, textAlign: 'center' }}>
        <Entrance delay={4}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: theme.colors.primary,
              fontWeight: 700,
              marginBottom: 12,
              fontFamily: theme.fonts.mono,
            }}
          >
            03 · Watch it add up
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 900,
              color: theme.colors.text,
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            Your <span style={{ color: theme.colors.primary }}>progress</span>
          </div>
        </Entrance>
      </div>

      {/* Concentric rings */}
      <div style={{ position: 'relative', width: 320, height: 320 }}>
        {rings.map((ring, i) => {
          const p = spring({ frame: frame - (18 + i * 3), fps, config: theme.spring.smooth });
          return (
            <div
              key={ring.label}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) scale(${interpolate(p, [0, 1], [0.6, 1])})`,
                opacity: p,
              }}
            >
              <ProgressRing
                size={ring.size}
                stroke={ring.stroke}
                target={ring.target}
                color={ring.color}
                delay={22}
              />
            </div>
          );
        })}
        {/* Center counter — overrides innermost ring's value */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: theme.colors.text,
              fontVariantNumeric: 'tabular-nums',
              lineHeight: 1,
              textShadow: `0 0 30px ${theme.colors.glow}`,
            }}
          >
            {counterValue}%
          </div>
          <div
            style={{
              fontSize: 12,
              color: theme.colors.textDim,
              letterSpacing: 3,
              textTransform: 'uppercase',
              marginTop: 6,
              fontWeight: 600,
            }}
          >
            Weekly Goal
          </div>
        </div>
      </div>

      {/* Ring legend */}
      <div
        style={{
          position: 'absolute',
          bottom: 240,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: 32,
        }}
      >
        {rings.map((ring, i) => (
          <Entrance key={ring.label} delay={40 + i * 4}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: ring.color,
                  boxShadow: `0 0 10px ${ring.color}80`,
                }}
              />
              <span style={{ fontSize: 14, color: theme.colors.textDim, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 }}>
                {ring.label}
              </span>
            </div>
          </Entrance>
        ))}
      </div>

      {/* Logo + tagline */}
      <div
        style={{
          position: 'absolute',
          bottom: 100,
          left: 0,
          right: 0,
          textAlign: 'center',
          opacity: logoP,
          transform: `translateY(${interpolate(logoP, [0, 1], [30, 0])}px) scale(${interpolate(logoP, [0, 1], [0.85, 1])})`,
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 14,
            padding: '14px 24px',
            borderRadius: 999,
            background: theme.colors.primary,
            color: '#000',
            boxShadow: `0 20px 60px -10px ${theme.colors.glow}`,
          }}
        >
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: '#000',
              color: theme.colors.primary,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              fontWeight: 900,
            }}
          >
            F
          </span>
          <span style={{ fontSize: 28, fontWeight: 900, letterSpacing: -0.5 }}>FITNIVO</span>
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 16,
            color: theme.colors.textDim,
            letterSpacing: 3,
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Discipline Builds Freedom
        </div>
      </div>
    </AbsoluteFill>
  );
};
