import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';
import { PhoneFrame, StatusBar } from '../components/PhoneFrame';

const macros = [
  { label: 'Protein', value: 42, unit: 'g', color: theme.colors.primary },
  { label: 'Carbs',   value: 55, unit: 'g', color: theme.colors.accent },
  { label: 'Fat',     value: 18, unit: 'g', color: theme.colors.green },
];

const Entrance: React.FC<{ delay?: number; children: React.ReactNode }> = ({ delay = 0, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: theme.spring.smooth });
  return (
    <div
      style={{
        opacity: p,
        transform: `translateY(${interpolate(p, [0, 1], [30, 0])}px) scale(${interpolate(p, [0, 1], [0.95, 1])})`,
      }}
    >
      {children}
    </div>
  );
};

const AnimatedCounter: React.FC<{ target: number; delay?: number; suffix?: string; style?: React.CSSProperties }> = ({
  target,
  delay = 0,
  suffix = '',
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: { damping: 30, stiffness: 55 } });
  const v = interpolate(p, [0, 1], [0, target]);
  return (
    <span style={{ fontVariantNumeric: 'tabular-nums', ...style }}>
      {Math.round(v)}
      {suffix}
    </span>
  );
};

export const SceneFoodScan: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Enter from below
  const enterY = interpolate(frame, [0, 20], [80, 0], {
    easing: theme.ease.out,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const enterO = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const exitY = interpolate(frame, [durationInFrames - 12, durationInFrames - 2], [0, -60], {
    easing: theme.ease.in,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const exitO = interpolate(frame, [durationInFrames - 12, durationInFrames - 2], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Camera flash on capture (frame 20-25)
  const flashO = interpolate(frame, [20, 24, 34], [0, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Idle breath on phone
  const breathe = 1 + Math.sin(frame / 22) * 0.008;

  // Scan reticle sweep 0-20
  const sweep = interpolate(frame, [0, 20], [0, 100], {
    easing: theme.ease.inOut,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Reveal card slides up after flash (frame 30+)
  const cardP = spring({ frame: frame - 30, fps, config: theme.spring.smooth });

  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        transform: `translateY(${enterY + exitY}px)`,
        opacity: enterO * exitO,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 60 }}>
        {/* Phone */}
        <div style={{ transform: `scale(${breathe})` }}>
          <PhoneFrame width={440} height={880}>
            <StatusBar />

            {/* Header */}
            <div style={{ padding: '72px 28px 12px' }}>
              <div
                style={{
                  fontSize: 13,
                  letterSpacing: 2.5,
                  textTransform: 'uppercase',
                  color: theme.colors.primary,
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                AI Food Scanner
              </div>
              <div style={{ fontSize: 30, fontWeight: 800, color: theme.colors.text }}>
                Point &amp; Track
              </div>
            </div>

            {/* Camera viewport */}
            <div
              style={{
                margin: '10px 22px 16px',
                borderRadius: 24,
                overflow: 'hidden',
                position: 'relative',
                aspectRatio: '1 / 1',
                background:
                  'radial-gradient(ellipse at 30% 30%, #6b4423 0%, #3a2515 60%, #1a0f08 100%)',
              }}
            >
              {/* Food representation — grilled chicken bowl */}
              <div
                style={{
                  position: 'absolute',
                  inset: '18%',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle at 40% 35%, #d4a574 0%, #a67840 45%, #6b4423 100%)',
                  boxShadow: 'inset 0 -10px 30px rgba(0,0,0,0.4), 0 8px 20px rgba(0,0,0,0.5)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '28%',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle at 45% 40%, #f4e4bc 0%, #d4b57c 40%, #8b6b3a 100%)',
                }}
              />
              {/* Green highlights */}
              <div
                style={{
                  position: 'absolute',
                  top: '32%',
                  left: '35%',
                  width: '18%',
                  height: '10%',
                  background: '#4a7c2a',
                  borderRadius: '50%',
                  transform: 'rotate(15deg)',
                  opacity: 0.85,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '52%',
                  right: '32%',
                  width: '14%',
                  height: '8%',
                  background: '#4a7c2a',
                  borderRadius: '50%',
                  transform: 'rotate(-25deg)',
                  opacity: 0.7,
                }}
              />

              {/* Scan reticle corners */}
              {[
                { top: 20, left: 20, borderTop: true, borderLeft: true },
                { top: 20, right: 20, borderTop: true, borderRight: true },
                { bottom: 20, left: 20, borderBottom: true, borderLeft: true },
                { bottom: 20, right: 20, borderBottom: true, borderRight: true },
              ].map((corner, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: 32,
                    height: 32,
                    top: corner.top,
                    left: corner.left,
                    right: corner.right,
                    bottom: corner.bottom,
                    borderTop: corner.borderTop ? `3px solid ${theme.colors.primary}` : 'none',
                    borderLeft: corner.borderLeft ? `3px solid ${theme.colors.primary}` : 'none',
                    borderRight: corner.borderRight ? `3px solid ${theme.colors.primary}` : 'none',
                    borderBottom: corner.borderBottom ? `3px solid ${theme.colors.primary}` : 'none',
                    borderRadius: 4,
                    filter: `drop-shadow(0 0 6px ${theme.colors.glow})`,
                  }}
                />
              ))}

              {/* Scanning sweep line */}
              <div
                style={{
                  position: 'absolute',
                  left: 20,
                  right: 20,
                  top: `${sweep}%`,
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${theme.colors.primary}, transparent)`,
                  boxShadow: `0 0 12px ${theme.colors.primary}, 0 0 24px ${theme.colors.primary}80`,
                  opacity: frame < 20 ? 1 : 0,
                }}
              />

              {/* Flash */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: '#fff',
                  opacity: flashO,
                }}
              />
            </div>

            {/* Reveal card */}
            <div
              style={{
                margin: '0 22px',
                opacity: cardP,
                transform: `translateY(${interpolate(cardP, [0, 1], [20, 0])}px)`,
              }}
            >
              <div
                style={{
                  background: theme.colors.card,
                  border: `1px solid ${theme.colors.cardBorder}`,
                  borderRadius: 20,
                  padding: '16px 20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 12,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 11, letterSpacing: 2, color: theme.colors.textDim, fontWeight: 600 }}>
                      IDENTIFIED
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: theme.colors.text, marginTop: 2 }}>
                      Grilled Chicken Bowl
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div
                      style={{
                        fontSize: 26,
                        fontWeight: 900,
                        color: theme.colors.primary,
                        lineHeight: 1,
                        fontFamily: theme.fonts.mono,
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      <AnimatedCounter target={520} delay={35} />
                    </div>
                    <div style={{ fontSize: 11, color: theme.colors.textDim, marginTop: 2, letterSpacing: 1 }}>
                      KCAL
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 8 }}>
                  {macros.map((m, i) => (
                    <div
                      key={m.label}
                      style={{
                        flex: 1,
                        background: 'rgba(0,0,0,0.3)',
                        borderRadius: 12,
                        padding: '10px 8px',
                        textAlign: 'center',
                        opacity: spring({ frame: frame - (40 + i * 4), fps, config: theme.spring.snappy }),
                      }}
                    >
                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 800,
                          color: m.color,
                          fontFamily: theme.fonts.mono,
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        <AnimatedCounter target={m.value} delay={40 + i * 4} suffix={m.unit} />
                      </div>
                      <div style={{ fontSize: 10, color: theme.colors.textDim, letterSpacing: 1.2, marginTop: 2 }}>
                        {m.label.toUpperCase()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PhoneFrame>
        </div>

        {/* Right: big text callout */}
        <div style={{ maxWidth: 420 }}>
          <Entrance delay={4}>
            <div
              style={{
                fontSize: 20,
                letterSpacing: 4,
                textTransform: 'uppercase',
                color: theme.colors.primary,
                fontWeight: 700,
                marginBottom: 16,
                fontFamily: theme.fonts.mono,
              }}
            >
              02 · Snap &amp; scan
            </div>
            <div
              style={{
                fontSize: 68,
                fontWeight: 800,
                color: theme.colors.text,
                lineHeight: 1.02,
                letterSpacing: -1.5,
              }}
            >
              <span style={{ color: theme.colors.primary }}>AI food</span>
              <br />
              scanner
            </div>
            <div style={{ fontSize: 22, color: theme.colors.textDim, marginTop: 20, lineHeight: 1.4 }}>
              Calories &amp; macros in
              <br />
              under a second.
            </div>
          </Entrance>
        </div>
      </div>
    </AbsoluteFill>
  );
};
