# 🎯 Good First Issues

Looking for your first PR? Here are some ideas:

## 🎨 Add Color Themes

Create new color schemes in `app/globals.css`:

**Difficulty:** ⭐ Easy  
**Files to edit:** `app/globals.css`  
**Example:**

```css
/* Add a new theme */
[data-theme="dracula"] {
  --term-bg: #282a36;
  --term-fg: #f8f8f2;
  --term-green: #50fa7b;
  --term-blue: #8be9fd;
  /* ... */
}
```

**Themes we want:**
- [x] Default (dark)
- [ ] Dracula
- [ ] Nord
- [ ] Monokai
- [ ] Solarized Dark
- [ ] GitHub Dark
- [ ] One Dark
- [ ] Gruvbox

## 📦 Add New Components

### TerminalProgress - Progress Bar

**Difficulty:** ⭐⭐ Medium  
**Files to create:** `components/terminal-progress.tsx`  
**What it does:** Shows a progress bar (like npm install)

```tsx
<TerminalProgress percent={75} label="Installing dependencies..." />
// Output: Installing dependencies... [████████░░] 75%
```

### TerminalTable - Data Tables

**Difficulty:** ⭐⭐⭐ Advanced  
**Files to create:** `components/terminal-table.tsx`  
**What it does:** Renders data as a formatted table

```tsx
<TerminalTable
  headers={['Name', 'Version', 'Size']}
  rows={[
    ['react', '18.2.0', '142 kB'],
    ['next', '14.0.0', '540 kB'],
  ]}
/>
```

### TerminalTree - File Tree

**Difficulty:** ⭐⭐ Medium  
**Files to create:** `components/terminal-tree.tsx`  
**What it does:** Displays a file tree structure

```tsx
<TerminalTree
  data={{
    src: {
      components: ['Button.tsx', 'Input.tsx'],
      app: ['page.tsx', 'layout.tsx'],
    },
    'package.json': null,
  }}
/>
// Output:
// src/
// ├── components/
// │   ├── Button.tsx
// │   └── Input.tsx
// ├── app/
// │   ├── page.tsx
// │   └── layout.tsx
// └── package.json
```

### TerminalPrompt - Interactive Input

**Difficulty:** ⭐⭐⭐ Advanced  
**Files to create:** `components/terminal-prompt.tsx`  
**What it does:** Interactive command input with history

```tsx
<TerminalPrompt
  onCommand={(cmd) => console.log(cmd)}
  history={['ls', 'cd src', 'pwd']}
/>
```

## 📚 Documentation

### Add Component Examples

**Difficulty:** ⭐ Easy  
**Files to edit:** `app/playground/page.tsx`  
**What to do:** Add more examples to the playground

### Improve README

**Difficulty:** ⭐ Easy  
**Files to edit:** `README.md`  
**What to do:** Add more use cases, screenshots, or API docs

### Write TypeScript Docs

**Difficulty:** ⭐⭐ Medium  
**Files to edit:** All component files  
**What to do:** Add JSDoc comments

```tsx
/**
 * Displays a terminal window with syntax highlighting
 * @param title - Window title shown in the chrome
 * @param prompt - Command prompt symbol (default: '$')
 * @param children - Terminal content (commands and output)
 * @example
 * <Terminal title="my-app" prompt="user@host">
 *   <TerminalCommand>echo "Hello"</TerminalCommand>
 * </Terminal>
 */
export function Terminal({ title, prompt, children }: TerminalProps) {
  // ...
}
```

## 🐛 Bug Fixes

### Fix Mobile Scrolling

**Difficulty:** ⭐⭐ Medium  
**Issue:** Terminal content doesn't scroll well on mobile  
**Files:** `components/terminal.tsx`, `app/globals.css`

### Improve Accessibility

**Difficulty:** ⭐⭐ Medium  
**Issue:** Add ARIA labels and keyboard navigation  
**Files:** All component files

## ✨ Enhancements

### Add Syntax Highlighting

**Difficulty:** ⭐⭐⭐ Advanced  
**What:** Use a library like Prism.js for code syntax highlighting  
**Files:** `components/terminal.tsx`

### Add Animation Options

**Difficulty:** ⭐⭐ Medium  
**What:** Add optional typing animation for output  
**Files:** `components/terminal.tsx`

```tsx
<TerminalOutput animate delay={50}>
  This text types out character by character
</TerminalOutput>
```

### Add Copy Button

**Difficulty:** ⭐ Easy  
**What:** Add a "Copy" button to Terminal components  
**Files:** `components/terminal.tsx`

## 🎮 Interactive Examples

### Build a CLI Game

**Difficulty:** ⭐⭐⭐ Advanced  
**What:** Create an interactive game using the terminal components  
**Files:** Create `app/examples/game/page.tsx`  
**Ideas:** Text adventure, quiz, hangman

### OpenClaw Command Explorer

**Difficulty:** ⭐⭐ Medium  
**What:** Interactive guide to OpenClaw commands  
**Files:** Create `app/examples/openclaw/page.tsx`

---

## How to Claim an Issue

1. Comment on the issue: "I'd like to work on this!"
2. Fork the repo
3. Create a branch: `git checkout -b feat/your-feature`
4. Make your changes
5. Open a PR!

**Questions?** Open a [Discussion](https://github.com/OpenKnots/terminal-ui/discussions) or comment on the issue.
