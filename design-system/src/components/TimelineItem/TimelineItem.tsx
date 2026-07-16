import React from 'react';
import { IconSquare } from '../IconSquare/IconSquare';

export type TimelineStatus = 'past' | 'now' | 'next' | 'upcoming';

export interface TimelineItemProps {
  icon: string;
  iconBg: string;
  iconFg: string;
  title: string;
  subtitle: string;
  time: string;
  status: TimelineStatus;
  detail?: string;
  open?: boolean;
  onToggle?: () => void;
}

/** Rail dot + card. `now` gets an accent ring; past/now dots are filled, upcoming dots are hollow. */
export function TimelineItem({ icon, iconBg, iconFg, title, subtitle, time, status, detail, open, onToggle }: TimelineItemProps) {
  const filled = status === 'past' || status === 'now';
  const now = status === 'now';
  return (
    <div style={{ display: 'flex', gap: 13 }}>
      <div style={{ position: 'relative', width: 22, flex: 'none', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, width: 2, background: '#e5e9ed' }} />
        <div
          style={{
            position: 'relative',
            width: 14,
            height: 14,
            borderRadius: '50%',
            background: filled ? iconFg : '#fff',
            border: `2.5px solid ${iconFg}`,
            marginTop: 19,
            zIndex: 1,
          }}
        />
      </div>
      <button
        type="button"
        onClick={onToggle}
        style={{
          flex: 1,
          textAlign: 'left',
          background: '#fff',
          border: 'none',
          borderRadius: 'var(--ds-radius-card-sm)',
          padding: '13px 14px',
          marginBottom: 11,
          boxShadow: now ? `0 0 0 1.5px ${iconFg}` : 'var(--ds-shadow-timeline-default)',
          cursor: onToggle ? 'pointer' : 'default',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <IconSquare icon={icon} bg={iconBg} fg={iconFg} size="sm" />
          <div style={{ flex: 1 }}>
            <div style={{ font: '600 14px var(--ds-font-family)', color: '#26333f' }}>{title}</div>
            <div style={{ font: '400 12px var(--ds-font-family)', color: '#83909c' }}>{subtitle}</div>
          </div>
          <div style={{ font: '600 12px var(--ds-font-family)', color: now ? iconFg : '#93a0ac', textAlign: 'right', whiteSpace: 'nowrap' }}>
            {time}
          </div>
        </div>
        {open && detail && (
          <div
            style={{
              font: '400 12.5px var(--ds-font-family)',
              lineHeight: 1.5,
              color: '#6b7682',
              marginTop: 11,
              paddingTop: 11,
              borderTop: '1px solid var(--ds-color-divider)',
            }}
          >
            {detail}
          </div>
        )}
      </button>
    </div>
  );
}
