import React from 'react';
import { Button } from '@airdog/design-system';

export function Primary() {
  return <Button variant="primary" fullWidth>7 Tage gratis testen</Button>;
}

export function PrimaryAuth() {
  return <Button variant="primaryAuth" fullWidth>Login</Button>;
}

export function Inverse() {
  return <Button variant="inverse">Pro testen</Button>;
}

export function Outline() {
  return <Button variant="outline">Mit Google anmelden</Button>;
}
