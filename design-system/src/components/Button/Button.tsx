import React from 'react';

export type ButtonVariant = 'primary' | 'primaryAuth' | 'inverse' | 'outline';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

/**
 * primary: gradient CTA (Pro upsell) · primaryAuth: gradient CTA (auth submit, different hue)
 * inverse: white pill on a gradient card (secondary action) · outline: bordered (SSO buttons)
 */
export function Button({ variant = 'primary', fullWidth, style, children, ...rest }: ButtonProps) {
  const base: React.CSSProperties = {
    borderRadius: 'var(--ds-radius-button)',
    font: '600 15px var(--ds-font-family)',
    cursor: 'pointer',
    border: 'none',
    width: fullWidth ? '100%' : undefined,
  };

  const variants: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      ...base,
      padding: '15px',
      background: 'var(--ds-gradient-pro)',
      color: '#fff',
      boxShadow: 'var(--ds-shadow-cta-pro)',
    },
    primaryAuth: {
      ...base,
      padding: '15px',
      background: 'var(--ds-gradient-blue)',
      color: '#fff',
      boxShadow: 'var(--ds-shadow-cta-auth)',
    },
    inverse: {
      ...base,
      padding: '8px 16px',
      borderRadius: 'var(--ds-radius-badge)',
      background: '#fff',
      color: '#2a4d7a',
      font: '600 13px var(--ds-font-family)',
    },
    outline: {
      ...base,
      padding: '13px',
      borderRadius: 'var(--ds-radius-input)',
      background: '#fff',
      border: '1.5px solid var(--ds-color-border)',
      color: '#37434f',
      font: '600 13px var(--ds-font-family)',
    },
  };

  return (
    <button type="button" style={{ ...variants[variant], ...style }} {...rest}>
      {children}
    </button>
  );
}
