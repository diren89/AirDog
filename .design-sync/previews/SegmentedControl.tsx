import React, { useState } from 'react';
import { SegmentedControl } from '@airdog/design-system';

export function ThumbLogin() {
  const [value, setValue] = useState('login');
  return (
    <SegmentedControl
      variant="thumb"
      value={value}
      onChange={setValue}
      options={[{ value: 'login', label: 'Login' }, { value: 'register', label: 'Registrieren' }]}
    />
  );
}

export function PillDirection() {
  const [value, setValue] = useState('S');
  return (
    <SegmentedControl
      variant="pill"
      value={value}
      onChange={setValue}
      options={[{ value: 'N', label: 'N' }, { value: 'O', label: 'O' }, { value: 'S', label: 'S' }, { value: 'W', label: 'W' }]}
    />
  );
}
