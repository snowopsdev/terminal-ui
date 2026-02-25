## Description

Add the popular Dracula color scheme to the terminal UI.

## Difficulty

⭐ Easy

## Files to Edit

- `app/globals.css`

## What to Do

Add a new CSS custom properties block for Dracula theme after the `:root` block:

```css
[data-theme="dracula"] {
  --term-bg: #282a36;
  --term-bg-light: #343746;
  --term-fg: #f8f8f2;
  --term-fg-dim: #6272a4;
  --term-green: #50fa7b;
  --term-blue: #8be9fd;
  --term-yellow: #f1fa8c;
  --term-red: #ff5555;
  --term-purple: #bd93f9;
  --term-cyan: #8be9fd;
}
```

## Acceptance Criteria

- [ ] Dracula theme variables added to `app/globals.css`
- [ ] Colors match official Dracula spec: https://draculatheme.com/contribute
- [ ] Theme can be toggled with `data-theme="dracula"` attribute on `<html>` tag
- [ ] Screenshot added to PR showing the theme in action

## Resources

- Dracula official colors: https://draculatheme.com/contribute
- Example theme in `globals.css` (search for `:root`)

## Getting Started

1. Fork the repo
2. `git clone https://github.com/YOUR_USERNAME/terminal-ui.git`
3. `cd terminal-ui && pnpm install`
4. `git checkout -b theme/dracula`
5. Edit `app/globals.css`
6. Test locally: Add `data-theme="dracula"` to `<html>` tag in `app/layout.tsx`
7. `pnpm run dev` and check http://localhost:3000
8. Take a screenshot
9. Open PR!

## Questions?

Comment on this issue or ask in [Discussions](https://github.com/OpenKnots/terminal-ui/discussions)!
