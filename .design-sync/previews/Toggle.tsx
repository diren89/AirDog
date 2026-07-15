import React, { useState } from 'react';
import { Toggle } from '@airdog/design-system';

export function On() {
  const [checked, setChecked] = useState(true);
  return <Toggle checked={checked} onChange={setChecked} label="Smarte Rollos automatisch" />;
}

export function Off() {
  const [checked, setChecked] = useState(false);
  return <Toggle checked={checked} onChange={setChecked} label="Regen-Erinnerung" />;
}

export function Disabled() {
  return <Toggle checked={true} onChange={() => {}} disabled label="Trink-Alarm (gesperrt)" />;
}
