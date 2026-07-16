import React, { useState } from 'react';
import { BottomNav } from '@airdog/design-system';

const ITEMS = [
  { key: 'heute', label: 'Heute', icon: 'wb_sunny' },
  { key: 'verlauf', label: 'Verlauf', icon: 'calendar_today' },
  { key: 'hund', label: 'Hund', icon: 'pets' },
  { key: 'profil', label: 'Profil', icon: 'tune' },
];

export function Default() {
  const [active, setActive] = useState('heute');
  return (
    <div style={{ position: 'relative', width: 390, height: 96, background: '#f5f6f8' }}>
      <BottomNav items={ITEMS} activeKey={active} onChange={setActive} />
    </div>
  );
}

export function HundActive() {
  const [active, setActive] = useState('hund');
  return (
    <div style={{ position: 'relative', width: 390, height: 96, background: '#f5f6f8' }}>
      <BottomNav items={ITEMS} activeKey={active} onChange={setActive} />
    </div>
  );
}
