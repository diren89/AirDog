import React from 'react';
import { FormInput } from '@airdog/design-system';

export function EmailIconInset() {
  return (
    <div style={{ width: 300 }}>
      <FormInput icon="mail" label="E-Mail" hideLabel placeholder="E-Mail-Adresse" />
    </div>
  );
}

export function WithVisibleLabel() {
  return (
    <div style={{ width: 300 }}>
      <FormInput label="Name" placeholder="Dein Name" />
    </div>
  );
}
