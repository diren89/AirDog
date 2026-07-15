import React from 'react';

export type CardSize = 'default' | 'compact';
export type CardTone = 'neutral' | 'blue' | 'success' | 'danger' | 'pro';

export interface CardProps {
  size?: CardSize;
  tone?: CardTone;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const TONE_GRADIENT: Record<Exclude<CardTone, 'neutral'>, string> = {
  blue: 'var(--ds-gradient-blue)',
  success: 'var(--ds-gradient-success)',
  danger: 'var(--ds-gradient-danger)',
  pro: 'var(--ds-gradient-pro)',
};

const TONE_SHADOW: Record<Exclude<CardTone, 'neutral'>, string> = {
  blue: 'var(--ds-shadow-hero-blue)',
  success: 'var(--ds-shadow-hero-success)',
  danger: 'var(--ds-shadow-hero-danger)',
  pro: 'var(--ds-shadow-hero-pro)',
};

/**
 * Base surface. `neutral` tone = white card (default 20px/16px radius, compact 16px/14px).
 * Any other tone = gradient hero variant (22px radius, colored shadow, white text).
 */
export function Card({ size = 'default', tone = 'neutral', children, style }: CardProps) {
  if (tone !== 'neutral') {
    return (
      <div
        style={{
          borderRadius: 22,
          padding: 18,
          background: TONE_GRADIENT[tone],
          color: '#fff',
          boxShadow: TONE_SHADOW[tone],
          position: 'relative',
          overflow: 'hidden',
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
  const radius = size === 'compact' ? 'var(--ds-radius-card-sm)' : 'var(--ds-radius-card-lg)';
  const padding = size === 'compact' ? '14px' : '16px';
  return (
    <div
      style={{
        background: 'var(--ds-color-surface)',
        borderRadius: radius,
        padding,
        boxShadow: 'var(--ds-shadow-card)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
