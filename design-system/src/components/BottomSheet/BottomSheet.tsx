import React, { useEffect } from 'react';

export interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

/** Overlay + slide-up sheet with drag handle. Shared shell for Pro upsell / location picker style sheets. */
export function BottomSheet({ open, onClose, children }: BottomSheetProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <div
        className="ds-sheet-overlay"
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--ds-color-overlay)',
          zIndex: 50,
        }}
      />
      <div
        className="ds-sheet-panel"
        role="dialog"
        aria-modal="true"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 51,
          background: '#fff',
          borderRadius: 'var(--ds-radius-sheet) var(--ds-radius-sheet) 0 0',
          padding: '10px 20px 26px',
        }}
      >
        <div
          style={{
            width: 40,
            height: 5,
            borderRadius: 3,
            background: 'var(--ds-color-handle)',
            margin: '4px auto 16px',
          }}
        />
        {children}
      </div>
    </>
  );
}
