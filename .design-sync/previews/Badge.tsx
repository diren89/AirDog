import React from 'react';
import { Badge } from '@airdog/design-system';

export function Success() {
  return <Badge tone="success" dot>Jetzt lüften!</Badge>;
}

export function Warning() {
  return <Badge tone="warning" dot>Fenster zu halten</Badge>;
}

export function Danger() {
  return <Badge tone="danger" dot>Sehr hoch</Badge>;
}

export function Neutral() {
  return <Badge tone="neutral">PRO</Badge>;
}
