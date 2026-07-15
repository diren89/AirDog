import React from 'react';
import { IconSquare } from '@airdog/design-system';

export function Large() {
  return <IconSquare icon="wb_sunny" bg="#fbecd6" fg="#d98a2b" size="lg" />;
}

export function Medium() {
  return <IconSquare icon="pets" bg="#f7e6da" fg="#c0673c" size="md" />;
}

export function Small() {
  return <IconSquare icon="filter_vintage" bg="#eaf3e2" fg="#6a9a3e" size="sm" />;
}

export function ExtraSmall() {
  return <IconSquare icon="pest_control" bg="#f2e7da" fg="#a06a35" size="xs" />;
}

export function Row() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <IconSquare icon="wb_sunny" bg="#fbecd6" fg="#d98a2b" size="lg" />
      <IconSquare icon="pets" bg="#f7e6da" fg="#c0673c" size="lg" />
      <IconSquare icon="filter_vintage" bg="#eaf3e2" fg="#6a9a3e" size="lg" />
      <IconSquare icon="water_drop" bg="#e4f2fb" fg="#1f8fcf" size="lg" />
    </div>
  );
}
