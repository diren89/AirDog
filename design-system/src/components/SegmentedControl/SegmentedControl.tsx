import React from 'react';

export interface SegmentedOption {
  value: string;
  label: string;
}

export interface SegmentedControlProps {
  options: SegmentedOption[];
  value: string;
  onChange: (value: string) => void;
  /** thumb: sliding white thumb on gray track (2 options). pill: filled pill per option (3+ options). */
  variant?: 'thumb' | 'pill';
}

/** Unifies the two ad-hoc segmented-control implementations found in the prototype (auth tab switch, room-direction picker). */
export function SegmentedControl({ options, value, onChange, variant = 'pill' }: SegmentedControlProps) {
  if (variant === 'thumb') {
    return (
      <div
        role="tablist"
        style={{
          display: 'flex',
          background: '#e9edf1',
          borderRadius: 'var(--ds-radius-segment)',
          padding: 4,
          gap: 4,
        }}
      >
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <button
              key={opt.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(opt.value)}
              style={{
                flex: 1,
                border: 'none',
                borderRadius: 11,
                padding: '9px 0',
                font: '600 13px var(--ds-font-family)',
                cursor: 'pointer',
                background: active ? '#fff' : 'transparent',
                color: active ? 'var(--ds-color-accent)' : '#8a96a2',
                boxShadow: active ? 'var(--ds-shadow-thumb)' : 'none',
                transition: 'all .15s',
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div role="radiogroup" style={{ display: 'flex', gap: 8 }}>
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(opt.value)}
            style={{
              flex: 1,
              textAlign: 'center',
              padding: '9px 0',
              borderRadius: 'var(--ds-radius-segment-option)',
              font: '600 13px var(--ds-font-family)',
              cursor: 'pointer',
              background: active ? 'var(--ds-color-accent)' : '#f1f4f7',
              color: active ? '#fff' : '#5b6772',
              border: active ? '1.5px solid var(--ds-color-accent)' : '1.5px solid var(--ds-color-border-light)',
              transition: 'all .15s',
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
