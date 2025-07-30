# IntelliMock UI Tokens and Implementation Notes

## Color System
- **Primary Gradient:** Use for headers, hero, and navigation backgrounds.
  - `--color-gradient-left`: #283593
  - `--color-gradient-center`: #5e35b1
  - `--color-gradient-right`: #d81b60
- **Accent Yellow:** Use sparingly (e.g., main button, active states, notice icons).
  - `--color-accent-yellow`: #ffce00
- **White & Pattern BG:** Main content areas, keep high contrast with text.
  - `--color-main-bg`: #ffffff (light), #1a1a1a (dark)
  - `--color-pattern-bg`: #f5f5fa (light), #24233a (dark)
- **Subtle border/text:** See `--color-grey-text` and `--color-border`

## Typography
- **Font Stack:** `Helvetica Neue, Arial, sans-serif`
- **Heading/Branding:** Bold, uppercase, increased letter-spacing.
- **Body/Secondary:** Medium/semibold, sentence case, smaller for labels.
- **Suggested sizes:** xs (12px) to xl (32px)
- **Accessible contrast:** Always check WCAG for text against gradients!

## Spacing
- **Scale:** Follows 4px base (`0.25rem`); suggested increments—4, 8, 12, 16, 20, 24, 32, 40, 48, 64px.
- **Use large padding (32–48px) in section padding, moderate (12–16px) in compact UI.**

## Shape & Elevation
- **Border Radius:** Use 8px for controls/buttons (`.btn-radius`), 16–24px or `1.5rem` for cards or containers.
- **Shadow:** Subtle blur for elevation on gradient headers and cards.

## Accessibility
- For all interactive elements, ensure:
  - At least 4.5:1 contrast (yellow on black/white may need bolder font or outline for focus).
  - Keyboard focus rings (use `outline`).
  - Consider colorblind-safe pairings.

## Example
Import tokens as needed in CSS:
```css
@import './design-tokens.css';

.button-primary {
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
  border-radius: var(--button-border-radius);
}
```

Or, for Tailwind, copy/paste config section from `tailwind-intellimock-tokens.js`.

---

> All tokens subject to brand/design team feedback and WCAG AA guidelines.
