# 🖥️ terminal-ui — Open for Contributors

> React component library for building terminal-style UIs in the browser  
> Stack: Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui  
> Repo: https://github.com/OpenKnots/terminal-ui

---

## What is it?

A set of React components that look like a terminal: commands, output, progress bars, tables, and more. Use it for AI agent UIs, CLI tutorials, dev tools, or retro-style interfaces.

---

## Want to contribute? Here's how.

### Opening an issue

- Browse open issues or suggest something new
- Use labels: `good-first-issue` (beginner-friendly), `help-wanted`, `theme`, `component`, `docs`, `bug`, `enhancement`
- Describe what you want to add or fix and how you'd approach it
- Check existing issues to avoid duplicates

---

## Types of issues we're looking for

### ⭐ Easy (5–15 min)

- Add color themes (Dracula, Nord, Monokai, GitHub Dark, etc.) — edit `globals.css`
- Add JSDoc comments to components
- Add copy button to Terminal
- Add screenshots to README

### ⭐⭐ Medium (15–45 min)

- New components: TerminalProgress, TerminalTree
- Fix mobile scrolling on iOS
- Improve accessibility (ARIA, keyboard nav)

### ⭐⭐⭐ Advanced (1+ hour)

- TerminalTable (box-drawing tables)
- TerminalPrompt (interactive input with history)

---

## PR workflow

1. Fork the repo and clone it
2. Create a branch: `feat/your-feature` or `fix/your-fix`
3. Install deps: `pnpm install` (pnpm only)
4. Make your changes and test with `pnpm run dev`
5. Ensure build passes: `pnpm run build`
6. Open a PR and reference the issue (e.g. `Closes #3`)
7. Include a screenshot for visual changes

---

## PR checklist

- [ ] Code follows existing style (functional components, TypeScript)
- [ ] New components have JSDoc comments
- [ ] New components have an example in the playground
- [ ] Build passes (`pnpm run build`)
- [ ] No new heavy dependencies
- [ ] Screenshot included for visual changes
- [ ] Issue number referenced in the PR

---

## Where to look

- **AGENTS.md** — detailed guide for contributors (themes, components, workflow)
- **.github/STARTER_ISSUES.md** — pre-written issues with acceptance criteria
- **app/playground/page.tsx** — add examples for new components
- **app/globals.css** — add themes via `[data-theme="..."]` blocks

---

## Commit format

Use conventional commits: `feat: add Nord theme`, `fix: mobile scrolling`, `docs: add JSDoc to Terminal`

---

## Questions?

Open a discussion or comment on an issue. We aim for &lt;24h review. 🚀
