import React from 'react';

export type BadgeTone = 'success' | 'warning' | 'danger' | 'neutral';

export interface BadgeProps {
  tone: BadgeTone;
  children: React.ReactNode;
  /** Shows a small color dot before the label (used for status/level chips). */
  dot?: boolean;
}

const TONE_STYLE: Record<BadgeTone, { bg: string; fg: string }> = {
  success: { bg: 'var(--ds-color-success-bg)', fg: 'var(--ds-color-success-fg)' },
  warning: { bg: 'var(--ds-color-warning-bg)', fg: 'var(--ds-color-warning-fg)' },
  danger: { bg: '#fce8e5', fg: 'var(--ds-color-danger-solid)' },
  neutral: { bg: 'var(--ds-tint-heat-bg)', fg: 'var(--ds-color-warning-fg)' },
};

/** Pill status chip. One shape (border-radius:20px) across all severities — only bg/fg vary. */
export function Badge({ tone, children, dot }: BadgeProps) {
  const { bg, fg } = TONE_STYLE[tone];
  return (
    <div
      role="status"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        background: bg,
        color: fg,
        font: '700 11px var(--ds-font-family)',
        padding: '5px 10px',
        borderRadius: 'var(--ds-radius-badge)',
      }}
    >
      {dot && <span style={{ width: 7, height: 7, borderRadius: '50%', background: fg }} />}
      {children}
    </div>
  );
}
