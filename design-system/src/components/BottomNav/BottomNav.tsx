import React from 'react';

export interface BottomNavItem {
  key: string;
  label: string;
  /** Material Symbols Rounded icon name. */
  icon: string;
}

export interface BottomNavProps {
  items: BottomNavItem[];
  activeKey: string;
  onChange: (key: string) => void;
}

/** Fixed 4-tab bottom navigation. Pins to viewport bottom; labels never wrap. */
export function BottomNav({ items, activeKey, onChange }: BottomNavProps) {
  return (
    <div
      role="tablist"
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 76,
        background: 'rgba(255,255,255,.93)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid #e9ecf0',
        display: 'flex',
        padding: '9px 12px 16px',
        overflow: 'hidden',
      }}
    >
      {items.map((item) => {
        const active = item.key === activeKey;
        const color = active ? 'var(--ds-color-accent)' : 'var(--ds-color-text-muted)';
        return (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(item.key)}
            style={{
              flex: 1,
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0,
            }}
          >
            <span
              className="ds-ms"
              style={{
                fontFamily: 'var(--ds-icon-family)',
                fontSize: 25,
                lineHeight: 1,
                color,
                fontVariationSettings: `'FILL' ${active ? 1 : 0}`,
              }}
            >
              {item.icon}
            </span>
            <span
              style={{
                font: '500 11px var(--ds-font-family)',
                color,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
