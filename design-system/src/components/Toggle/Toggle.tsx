import React from 'react';

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}

/** Pill-track switch. Track 44x26, knob 22x22. Green `on`, gray `off`. */
export function Toggle({ checked, onChange, disabled, label }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      style={{
        width: 44,
        height: 26,
        borderRadius: 20,
        background: checked ? 'var(--ds-color-success-solid)' : 'var(--ds-color-track-off)',
        position: 'relative',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background .2s',
        flex: 'none',
        padding: 0,
      }}
    >
      <span
        style={{
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: '#fff',
          position: 'absolute',
          top: 2,
          left: 0,
          transform: checked ? 'translateX(20px)' : 'translateX(2px)',
          transition: 'transform .2s',
          boxShadow: 'var(--ds-shadow-knob)',
          display: 'block',
        }}
      />
    </button>
  );
}
