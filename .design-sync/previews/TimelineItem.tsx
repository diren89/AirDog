import React, { useState } from 'react';
import { TimelineItem } from '@airdog/design-system';

export function Past() {
  return (
    <TimelineItem
      icon="air" iconBg="#e4f2fb" iconFg="#1f8fcf"
      title="Morgenlüften" subtitle="Kühle Nachtluft · 17° außen" time="05:30 – 07:30"
      status="past"
    />
  );
}

export function Now() {
  const [open, setOpen] = useState(true);
  return (
    <TimelineItem
      icon="wb_sunny" iconBg="#fbecd6" iconFg="#d98a2b"
      title="Hitze draußen halten" subtitle="28° außen · 24° innen" time="jetzt · 14:00"
      status="now"
      detail="Außen wärmer als innen — jedes offene Fenster heizt auf. Alles zu, Rollos unten. Nächstes Lüften ab 21:30."
      open={open}
      onToggle={() => setOpen(!open)}
    />
  );
}

export function Upcoming() {
  return (
    <TimelineItem
      icon="pets" iconBg="#e6f3ec" iconFg="#469a6b"
      title="Gute Gassi-Zeit" subtitle="Abkühlung · Pfoten safe" time="ab 20:30"
      status="upcoming"
    />
  );
}
