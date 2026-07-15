## AirDog Design System — conventions

**No provider/wrapper needed.** Components read no React context and need no theme provider — just import from `@airdog/design-system` and use them directly. All visual values (color, radius, shadow) are already baked into each component via inline styles referencing CSS custom properties from the bundled `styles.css` — nothing to wrap, no theme object to configure.

**Styling idiom: CSS custom properties (`--ds-*`), not utility classes.** Components carry their own look via props (`tone`, `variant`, `size`) — you rarely write raw CSS for them. When composing your OWN layout glue around them (page background, spacing between cards, a one-off accent), pull from these real tokens rather than inventing new hex values:

| Category | Real tokens |
|---|---|
| Severity color (success/warning/danger) | `--ds-color-success-fg` `--ds-color-success-bg` · `--ds-color-warning-fg` `--ds-color-warning-bg` · `--ds-color-danger-solid` |
| Severity ramp (pollen/tick, 5-step) | `--ds-color-severity-1` … `--ds-color-severity-5` (green→red) |
| Brand accent | `--ds-color-accent` (`#1f8fcf`), `--ds-color-accent-bg` |
| Icon tint pairs (bg + fg, always use together) | `--ds-tint-heat-bg/fg` · `--ds-tint-dog-bg/fg` · `--ds-tint-pollen-bg/fg` · `--ds-tint-tick-bg/fg` · `--ds-tint-water-bg/fg` |
| Gradients (hero cards, CTAs) | `--ds-gradient-blue` · `--ds-gradient-success` · `--ds-gradient-danger` · `--ds-gradient-pro` |
| Radii | `--ds-radius-card-lg` (20px) · `--ds-radius-card-sm` (16px) · `--ds-radius-badge` (20px, all severities) · `--ds-radius-button` (16px) · `--ds-radius-sheet` (26px) · `--ds-radius-input` (14px) |
| Shadows | `--ds-shadow-card` (default card) · `--ds-shadow-hero-blue/success/danger/pro` (gradient hero cards) · `--ds-shadow-cta-pro` |
| Font | `--ds-font-family` = Outfit (loaded via Google Fonts `@import`, already in the bundle — no local file to ship) |
| Icons | `--ds-icon-family` = Material Symbols Rounded. Pass the icon's Material Symbols name as plain text content, e.g. `<IconSquare icon="wb_sunny" .../>` |

**Where the truth lives.** Read `styles.css` (imports the full token set) and each component's `.d.ts`/`.prompt.md` before styling anything — the table above is a summary, the stylesheet is authoritative. `IconSquare`'s `bg`/`fg` props are always a matched pair from the tint table above; never mix tints from different pairs.

**One idiomatic build snippet** (a settings row, adapted from a verified preview — Card + IconSquare + Toggle composed together):

```tsx
import { Card, IconSquare, Toggle } from '@airdog/design-system';

function SettingsRow() {
  const [on, setOn] = useState(true);
  return (
    <Card>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <IconSquare icon="water_drop" bg="var(--ds-tint-water-bg)" fg="var(--ds-tint-water-fg)" />
        <div style={{ flex: 1 }}>
          <div style={{ font: '500 13.5px var(--ds-font-family)', color: '#37434f' }}>Trink-Alarm · alle 2 Std</div>
        </div>
        <Toggle checked={on} onChange={setOn} label="Trink-Alarm" />
      </div>
    </Card>
  );
}
```

**Known gap**: interactive components use real `<button>`/`<input>` + ARIA roles (an upgrade over the source prototype's plain `onclick` divs), but no hover/active states are defined beyond `Toggle`'s on/off — don't invent hover styling that isn't in the shipped CSS.
