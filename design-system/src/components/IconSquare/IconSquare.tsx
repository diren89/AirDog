import React from 'react';

export type IconSquareSize = 'xs' | 'sm' | 'md' | 'lg';

export interface IconSquareProps {
  /** Material Symbols Rounded icon name. */
  icon: string;
  bg: string;
  fg: string;
  size?: IconSquareSize;
  filled?: boolean;
}

const SIZE: Record<IconSquareSize, { box: number; radius: number; font: number }> = {
  xs: { box: 34, radius: 10, font: 19 },
  sm: { box: 37, radius: 11, font: 20 },
  md: { box: 40, radius: 12, font: 22 },
  lg: { box: 42, radius: 13, font: 23 },
};

/** Colored square icon container. Always pair a tint `bg` with a matching `fg` icon color. */
export function IconSquare({ icon, bg, fg, size = 'lg', filled = true }: IconSquareProps) {
  const s = SIZE[size];
  return (
    <div
      style={{
        width: s.box,
        height: s.box,
        borderRadius: s.radius,
        background: bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: fg,
        flex: 'none',
      }}
    >
      <span
        className="ds-ms"
        style={{
          fontFamily: 'var(--ds-icon-family)',
          fontSize: s.font,
          fontVariationSettings: filled ? "'FILL' 1" : undefined,
        }}
      >
        {icon}
      </span>
    </div>
  );
}
