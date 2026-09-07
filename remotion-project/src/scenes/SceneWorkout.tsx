import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';
import { PhoneFrame, StatusBar } from '../components/PhoneFrame';
import { ProgressRing } from '../components/ProgressRing';

const exercises = [
  { name: 'Bench Press',    sets: '4 × 8',  weight: '185 lb' },
  { name: 'Barbell Squat',  sets: '4 × 6',  weight: '245 lb' },
  { name: 'Deadlift',       sets: '3 × 5',  weight: '315 lb' },
];

const Entrance: React.FC<{ delay?: number; children: React.ReactNode; from?: 'y' | 'x' }> = ({
  delay = 0,
  children,
  from = 'y',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: theme.spring.smooth });
  const ty = from === 'y' ? interpolate(p, [0, 1], [30, 0]) : 0;
  const tx = from === 'x' ? interpolate(p, [0, 1], [-30, 0]) : 0;
  return (
    <div
      style={{
        opacity: p,
        transform: `translate(${tx}px, ${ty}px) scale(${interpolate(p, [0, 1], [0.95, 1])})`,
      }}
    >
      {children}
    </div>
  );
};

export const SceneWorkout: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Big label entrance
  const labelP = spring({ frame, fps, config: theme.spring.snappy });
  // Exit for whole phone frame
  const exitY = interpolate(frame, [durationInFrames - 12, durationInFrames - 2], [0, -60], {
    easing: theme.ease.in,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const exitO = interpolate(frame, [durationInFrames - 12, durationInFrames - 2], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  // Idle breath
  const breathe = 1 + Math.sin(frame / 22) * 0.008;

  // Volume counter (0 → 4,750 lb over 60 frames starting at 30)
  const volSpring = spring({
    frame: frame - 30,
    fps,
    config: { damping: 30, stiffness: 55 },
  });
  const totalVolume = Math.round(interpolate(volSpring, [0, 1], [0, 4750]));

  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        transform: `translateY(${exitY}px)`,
        opacity: exitO,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 60 }}>
        {/* Left column: big text callout */}
        <div style={{ maxWidth: 420, textAlign: 'right' }}>
          <div
            style={{
              opacity: labelP,
              transform: `translateY(${interpolate(labelP, [0, 1], [30, 0])}px)`,
            }}
          >
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
              01 · Log every set
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
              Track your
              <br />
              <span style={{ color: theme.colors.primary }}>workouts</span>
            </div>
            <div
              style={{
                fontSize: 22,
                color: theme.colors.textDim,
                marginTop: 20,
                lineHeight: 1.4,
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              <span style={{ color: theme.colors.text, fontWeight: 700 }}>
                {totalVolume.toLocaleString()}
              </span>{' '}
              lb total volume today
            </div>
          </div>
        </div>

        {/* Phone mockup */}
        <div style={{ transform: `scale(${breathe})` }}>
          <PhoneFrame width={440} height={880}>
            <StatusBar />

            {/* Header */}
            <div style={{ padding: '72px 28px 20px' }}>
              <Entrance delay={4}>
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
                  Push Day · Week 4
                </div>
                <div style={{ fontSize: 32, fontWeight: 800, color: theme.colors.text }}>
                  Today&rsquo;s Workout
                </div>
              </Entrance>
            </div>

            {/* Volume ring */}
            <Entrance delay={12}>
              <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0 20px' }}>
                <ProgressRing
                  size={190}
                  stroke={14}
                  target={68}
                  delay={20}
                  label="Session Complete"
                />
              </div>
            </Entrance>

            {/* Exercise list — staggered */}
            <div style={{ padding: '0 22px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {exercises.map((ex, i) => (
                <Entrance key={ex.name} delay={26 + i * 6} from="x">
                  <div
                    style={{
                      background: theme.colors.card,
                      border: `1px solid ${theme.colors.cardBorder}`,
                      borderRadius: 20,
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 17, fontWeight: 700, color: theme.colors.text }}>
                        {ex.name}
                      </div>
                      <div style={{ fontSize: 13, color: theme.colors.textDim, marginTop: 3 }}>
                        {ex.sets}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 800,
                        color: theme.colors.primary,
                        fontFamily: theme.fonts.mono,
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {ex.weight}
                    </div>
                  </div>
                </Entrance>
              ))}
            </div>

            {/* Bottom action */}
            <Entrance delay={50}>
              <div style={{ padding: '20px 22px 32px' }}>
                <div
                  style={{
                    background: theme.colors.primary,
                    color: '#000',
                    borderRadius: 22,
                    padding: '18px 24px',
                    textAlign: 'center',
                    fontWeight: 800,
                    fontSize: 17,
                    letterSpacing: 0.5,
                    boxShadow: `0 12px 40px -8px ${theme.colors.glow}`,
                  }}
                >
                  + Log next set
                </div>
              </div>
            </Entrance>
          </PhoneFrame>
        </div>
      </div>
    </AbsoluteFill>
  );
};
