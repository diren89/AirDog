import React from 'react';
import { Card } from '@airdog/design-system';

export function Default() {
  return (
    <Card>
      <div style={{ font: '600 15px Outfit', color: '#23303d' }}>Jetzt abdunkeln</div>
      <div style={{ font: '400 12.5px Outfit', color: '#7d8995', marginTop: 4 }}>Süd- &amp; West-Rollos runter</div>
    </Card>
  );
}

export function Compact() {
  return (
    <Card size="compact">
      <div style={{ font: '600 14px Outfit', color: '#26333f' }}>Morgenlüften</div>
      <div style={{ font: '400 12px Outfit', color: '#83909c' }}>Kühle Nachtluft · 17° außen</div>
    </Card>
  );
}

export function BlueHero() {
  return (
    <Card tone="blue">
      <div style={{ font: '600 12px Outfit', textTransform: 'uppercase', letterSpacing: '.6px', color: '#dff1fb' }}>Nächstes Lüften</div>
      <div style={{ font: '600 40px Outfit', marginTop: 9 }}>21:30</div>
      <div style={{ font: '400 13.5px Outfit', color: '#eaf6fd', marginTop: 5 }}>Querlüften empfohlen — draußen kühlt auf 19°.</div>
    </Card>
  );
}

export function SuccessHero() {
  return (
    <Card tone="success">
      <div style={{ font: '600 12px Outfit', textTransform: 'uppercase', letterSpacing: '.6px', color: '#e6f3ec' }}>Gassi-Ampel</div>
      <div style={{ font: '600 25px Outfit', marginTop: 5 }}>Gute Gassi-Zeit</div>
    </Card>
  );
}

export function DangerHero() {
  return (
    <Card tone="danger">
      <div style={{ font: '600 12px Outfit', textTransform: 'uppercase', letterSpacing: '.6px', color: '#fbe2d4' }}>Gassi-Ampel</div>
      <div style={{ font: '600 25px Outfit', marginTop: 5 }}>Lieber warten</div>
    </Card>
  );
}

export function ProHero() {
  return (
    <Card tone="pro">
      <div style={{ font: '700 14px Outfit', display: 'flex', alignItems: 'center', gap: 8 }}>AirDog Pro</div>
      <div style={{ font: '400 13px Outfit', color: '#dbe7f3', marginTop: 7 }}>Abdunkelungs-Assistent nach Sonnenstand. Werbefrei.</div>
    </Card>
  );
}
