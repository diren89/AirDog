import React, { useId } from 'react';

export interface FormInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  /** Material Symbols Rounded icon shown inset on the left. */
  icon?: string;
  label: string;
  /** Hides the label visually but keeps it for screen readers (prototype relied on placeholder-only labels — fixed here). */
  hideLabel?: boolean;
  trailing?: React.ReactNode;
}

/** Icon-inset text/password field. 14px radius, 1.5px border, accent focus ring. */
export function FormInput({ icon, label, hideLabel, trailing, id, ...rest }: FormInputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  return (
    <div style={{ position: 'relative' }}>
      <label
        htmlFor={inputId}
        style={
          hideLabel
            ? { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }
            : { display: 'block', font: '500 12.5px var(--ds-font-family)', color: 'var(--ds-color-text-secondary)', marginBottom: 6 }
        }
      >
        {label}
      </label>
      {icon && (
        <span
          className="ds-ms"
          style={{
            position: 'absolute',
            left: 14,
            top: hideLabel ? '50%' : 'calc(50% + 12px)',
            transform: 'translateY(-50%)',
            fontFamily: 'var(--ds-icon-family)',
            fontSize: 20,
            color: 'var(--ds-color-text-muted)',
          }}
        >
          {icon}
        </span>
      )}
      <input
        id={inputId}
        className="ds-input"
        style={{
          width: '100%',
          border: '1.5px solid var(--ds-color-border)',
          background: '#fff',
          borderRadius: 'var(--ds-radius-input)',
          padding: `14px ${trailing ? 44 : 14}px 14px ${icon ? 44 : 14}px`,
          font: '400 14px var(--ds-font-family)',
          color: '#26333f',
          boxSizing: 'border-box',
        }}
        {...rest}
      />
      {trailing && (
        <span style={{ position: 'absolute', right: 14, top: hideLabel ? '50%' : 'calc(50% + 12px)', transform: 'translateY(-50%)' }}>
          {trailing}
        </span>
      )}
    </div>
  );
}
