# @airdog/design-system

React component library extracted from the AirDog prototype (`index.html`, `auth.html`). Ten components, faithful to the prototype's exact visual values (colors, radii, shadows, spacing) — see `.design-sync/` catalog for the source-of-truth values each component was built from.

## Components

`Toggle`, `Card`, `Badge`, `BottomNav`, `IconSquare`, `Button`, `BottomSheet`, `SegmentedControl`, `FormInput`, `TimelineItem`

## Build

```
npm install
npm run build
```

Outputs `dist/ds-bundle.js` (ESM, `react`/`react-dom` external), `dist/ds-bundle.css`, and per-component `.d.ts` files.

## Conventions

- All visual values are CSS custom properties defined in `src/tokens.css` (`--ds-*`) — no hardcoded hex/px in component code beyond structural layout.
- Icons use the `Material Symbols Rounded` font via the shared `.ds-ms` class; pass the icon's Material Symbols name as text content.
- Interactive elements are real `<button>`/`<input>` with ARIA roles (`switch`, `tab`, `radiogroup`, `dialog`) — a deliberate accessibility upgrade over the prototype's plain `onclick` divs (see priority gaps below).
- `SegmentedControl` unifies two separate ad-hoc implementations found in the prototype (auth tab switch, room-direction picker) into one component with a `variant` prop (`thumb` | `pill`).

## Known gaps (carried over from the prototype, flagged for follow-up)
- No hover/active/disabled visual states defined beyond `Toggle`'s on/off and `disabled` opacity.
- Severity ramp (pollen/tick) tokens exist (`--ds-color-severity-1..5`) but aren't yet wired into a dedicated `SeverityScale` component.
