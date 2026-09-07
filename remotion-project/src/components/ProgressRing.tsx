import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';

type Props = {
  size?: number;
  stroke?: number;
  target: number; // 0-100
  color?: string;
  trackColor?: string;
  delay?: number;
  label?: string;
  value?: string;
};

export const ProgressRing: React.FC<Props> = ({
  size = 220,
  stroke = 16,
  target,
  color = theme.colors.primary,
  trackColor = 'rgba(255,255,255,0.08)',
  delay = 0,
  label,
  value,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({
    frame: frame - delay,
    fps,
    config: { damping: 30, stiffness: 60 },
  });
  const progress = interpolate(p, [0, 1], [0, target]);
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (progress / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
          style={{ filter: `drop-shadow(0 0 12px ${color}80)` }}
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: size * 0.24,
            fontWeight: 800,
            color: theme.colors.text,
            fontVariantNumeric: 'tabular-nums',
            lineHeight: 1,
          }}
        >
          {value !== undefined ? value : `${Math.round(progress)}%`}
        </span>
        {label && (
          <span
            style={{
              fontSize: size * 0.07,
              color: theme.colors.textDim,
              marginTop: 6,
              textTransform: 'uppercase',
              letterSpacing: 2,
              fontWeight: 600,
            }}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
};
