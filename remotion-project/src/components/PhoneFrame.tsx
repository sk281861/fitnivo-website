import React from 'react';
import { theme } from '../theme';

type Props = {
  width?: number;
  height?: number;
  children: React.ReactNode;
};

export const PhoneFrame: React.FC<Props> = ({ width = 480, height = 900, children }) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 56,
        background: '#000',
        border: '3px solid rgba(255,255,255,0.12)',
        boxShadow:
          '0 60px 120px -20px rgba(0,0,0,0.7), 0 0 100px -10px rgba(255,106,0,0.35), inset 0 0 0 8px #000',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Notch */}
      <div
        style={{
          position: 'absolute',
          top: 18,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 110,
          height: 28,
          background: '#000',
          borderRadius: 20,
          zIndex: 30,
        }}
      />
      {/* Screen */}
      <div
        style={{
          position: 'absolute',
          inset: 8,
          borderRadius: 48,
          background: theme.colors.bg,
          overflow: 'hidden',
          fontFamily: theme.fonts.body,
          color: theme.colors.text,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const StatusBar: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 56,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 32px',
      color: theme.colors.text,
      fontSize: 14,
      fontWeight: 600,
      zIndex: 20,
      pointerEvents: 'none',
    }}
  >
    <span>9:41</span>
    <span style={{ opacity: 0 }}>notch</span>
    <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
      <span style={{ fontSize: 11 }}>●●●●</span>
      <span style={{ width: 22, height: 11, border: '1.5px solid white', borderRadius: 3, padding: 1 }}>
        <span
          style={{
            display: 'block',
            width: '85%',
            height: '100%',
            background: 'white',
            borderRadius: 1,
          }}
        />
      </span>
    </span>
  </div>
);
