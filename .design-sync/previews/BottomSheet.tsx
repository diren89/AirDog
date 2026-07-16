import React, { useState } from 'react';
import { BottomSheet, Button } from '@airdog/design-system';

export function Open() {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ position: 'relative', width: 390, height: 420, background: '#eef1f4' }}>
      <BottomSheet open={open} onClose={() => setOpen(false)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <div style={{ width: 38, height: 38, borderRadius: 11, background: 'linear-gradient(135deg,#3b6ea5,#2a4d7a)' }} />
          <div>
            <div style={{ font: '700 18px Outfit', color: '#23303d' }}>AirDog Pro</div>
            <div style={{ font: '400 12px Outfit', color: '#7d8995' }}>Hol das Maximum aus deiner Wohnung</div>
          </div>
        </div>
        <div style={{ marginTop: 18 }}>
          <Button variant="primary" fullWidth>7 Tage gratis testen</Button>
        </div>
      </BottomSheet>
    </div>
  );
}
