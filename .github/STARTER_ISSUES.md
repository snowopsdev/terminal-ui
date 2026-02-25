# Starter Issues for terminal-ui

Copy-paste these into GitHub Issues after creating the repository.

---

## Issue #1: Add Dracula Color Theme

**Title:** Add Dracula color theme  
**Labels:** `good-first-issue`, `theme`, `help-wanted`

### Description

Add the popular Dracula color scheme to the terminal UI.

### Difficulty

⭐ Easy

### Files to Edit

- `app/globals.css`

### What to Do

Add a new CSS custom properties block for Dracula theme:

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

### Acceptance Criteria

- [ ] Dracula theme variables added to `globals.css`
- [ ] Colors match official Dracula spec: https://draculatheme.com/contribute
- [ ] Theme can be toggled with `data-theme="dracula"` attribute
- [ ] Screenshot added to PR showing the theme

### Resources

- Dracula official colors: https://draculatheme.com/contribute
- Example theme in `globals.css` (search for `:root`)

---

## Issue #2: Create TerminalProgress Component

**Title:** Create TerminalProgress component for progress bars  
**Labels:** `good-first-issue`, `component`, `help-wanted`

### Description

Create a component to display progress bars (like npm install).

### Difficulty

⭐⭐ Medium

### Files to Create

- `components/terminal-progress.tsx`

### What to Do

Build a component that renders an ASCII-style progress bar:

```tsx
<TerminalProgress percent={75} label="Installing..." />
// Output: Installing... [████████░░] 75%
```

**Component Spec:**

```tsx
interface TerminalProgressProps {
  percent: number  // 0-100
  label?: string
  width?: number   // Default: 20 chars
  filled?: string  // Default: '█'
  empty?: string   // Default: '░'
}
```

### Acceptance Criteria

- [ ] Component created in `components/terminal-progress.tsx`
- [ ] Exports named function `TerminalProgress`
- [ ] TypeScript props interface defined
- [ ] JSDoc comments added
- [ ] Percent clamped to 0-100 range
- [ ] Example added to `app/playground/page.tsx`
- [ ] Component exported from `components/terminal.tsx`

### Example Code

```tsx
export function TerminalProgress({
  percent,
  label,
  width = 20,
  filled = '█',
  empty = '░',
}: TerminalProgressProps) {
  const clampedPercent = Math.max(0, Math.min(100, percent))
  const filledCount = Math.round((clampedPercent / 100) * width)
  const emptyCount = width - filledCount
  
  const bar = filled.repeat(filledCount) + empty.repeat(emptyCount)
  
  return (
    <div className="flex items-center gap-2 text-[var(--term-fg)]">
      {label && <span>{label}</span>}
      <span>[{bar}]</span>
      <span>{clampedPercent}%</span>
    </div>
  )
}
```

---

## Issue #3: Add Nord Color Theme

**Title:** Add Nord color theme  
**Labels:** `good-first-issue`, `theme`, `help-wanted`

### Description

Add the Nord color scheme (popular in developer tools).

### Difficulty

⭐ Easy

### Files to Edit

- `app/globals.css`

### What to Do

```css
[data-theme="nord"] {
  --term-bg: #2e3440;
  --term-bg-light: #3b4252;
  --term-fg: #eceff4;
  --term-fg-dim: #4c566a;
  --term-green: #a3be8c;
  --term-blue: #81a1c1;
  --term-yellow: #ebcb8b;
  --term-red: #bf616a;
  --term-purple: #b48ead;
  --term-cyan: #88c0d0;
}
```

### Acceptance Criteria

- [ ] Nord theme variables added
- [ ] Colors match https://www.nordtheme.com/
- [ ] Screenshot in PR

### Resources

- Nord colors: https://www.nordtheme.com/docs/colors-and-palettes

---

## Issue #4: Create TerminalTable Component

**Title:** Create TerminalTable component for data tables  
**Labels:** `good-first-issue`, `component`, `help-wanted`

### Difficulty

⭐⭐⭐ Advanced

### Description

Build a component to render tabular data in terminal style.

### Files to Create

- `components/terminal-table.tsx`

### What to Do

```tsx
<TerminalTable
  headers={['Name', 'Version', 'Size']}
  rows={[
    ['react', '18.2.0', '142 kB'],
    ['next', '14.0.0', '540 kB'],
  ]}
/>
```

**Output:**
```
┌─────────┬─────────┬─────────┐
│ Name    │ Version │ Size    │
├─────────┼─────────┼─────────┤
│ react   │ 18.2.0  │ 142 kB  │
│ next    │ 14.0.0  │ 540 kB  │
└─────────┴─────────┴─────────┘
```

### Acceptance Criteria

- [ ] Component created with TypeScript
- [ ] Auto-calculates column widths
- [ ] Uses box-drawing characters (┌─┐│├┼┤└─┘)
- [ ] Supports optional alignment per column
- [ ] Example in playground
- [ ] JSDoc comments

### Hints

- Use Unicode box-drawing: `┌─┬─┐│├┼┤└┴┘`
- Calculate max width per column
- Pad strings with spaces
- Use monospace font (`font-mono`)

---

## Issue #5: Add Copy Button to Terminal

**Title:** Add copy button to Terminal component  
**Labels:** `good-first-issue`, `enhancement`, `help-wanted`

### Difficulty

⭐ Easy

### Description

Add a copy button to the terminal header to copy all content.

### Files to Edit

- `components/terminal.tsx`

### What to Do

1. Add a copy icon button to the terminal chrome (next to the traffic lights)
2. Use `navigator.clipboard.writeText()` to copy content
3. Show a checkmark for 2 seconds after copying

### Acceptance Criteria

- [ ] Copy button appears in top-right of terminal
- [ ] Button uses `Copy` icon from `lucide-react`
- [ ] Clicking copies all terminal content
- [ ] Shows `Check` icon for 2 seconds after copy
- [ ] Works on playground page

### Example Code

```tsx
const [copied, setCopied] = useState(false)

const handleCopy = () => {
  // Get all text content from children
  const text = // ... extract text from children
  navigator.clipboard.writeText(text)
  setCopied(true)
  setTimeout(() => setCopied(false), 2000)
}
```

---

## Issue #6: Add Monokai Theme

**Title:** Add Monokai color theme  
**Labels:** `good-first-issue`, `theme`, `help-wanted`

### Difficulty

⭐ Easy

### Files to Edit

- `app/globals.css`

### What to Do

Add Monokai theme (used in Sublime Text):

```css
[data-theme="monokai"] {
  --term-bg: #272822;
  --term-bg-light: #3e3d32;
  --term-fg: #f8f8f2;
  --term-fg-dim: #75715e;
  --term-green: #a6e22e;
  --term-blue: #66d9ef;
  --term-yellow: #e6db74;
  --term-red: #f92672;
  --term-purple: #ae81ff;
  --term-cyan: #66d9ef;
}
```

### Acceptance Criteria

- [ ] Theme added to `globals.css`
- [ ] Screenshot in PR

---

## Issue #7: Improve Mobile Scrolling

**Title:** Fix terminal scrolling on mobile devices  
**Labels:** `bug`, `mobile`, `help-wanted`

### Difficulty

⭐⭐ Medium

### Description

Terminal content doesn't scroll smoothly on iOS Safari.

### Files to Edit

- `components/terminal.tsx`
- `app/globals.css`

### What to Do

1. Add `-webkit-overflow-scrolling: touch` to terminal content
2. Set `overscroll-behavior: contain`
3. Test on iOS Safari (or use browser dev tools)

### Acceptance Criteria

- [ ] Smooth scrolling on iOS
- [ ] No rubber-band effect
- [ ] Works on Android Chrome
- [ ] Tested in responsive mode

---

## Issue #8: Add JSDoc to All Components

**Title:** Add JSDoc comments to all components  
**Labels:** `good-first-issue`, `docs`, `help-wanted`

### Difficulty

⭐ Easy

### Description

Add TypeScript JSDoc comments for better IDE autocomplete.

### Files to Edit

- `components/terminal.tsx`

### What to Do

Add JSDoc to each exported component:

```tsx
/**
 * Displays a terminal window with syntax highlighting
 * @param title - Window title shown in the chrome
 * @param prompt - Command prompt symbol (default: '$')
 * @param children - Terminal content (commands and output)
 * @example
 * ```tsx
 * <Terminal title="my-app" prompt="user@host">
 *   <TerminalCommand>echo "Hello"</TerminalCommand>
 * </Terminal>
 * ```
 */
export function Terminal({ title, prompt, children }: TerminalProps) {
  // ...
}
```

### Acceptance Criteria

- [ ] All exported functions have JSDoc
- [ ] Includes `@param` for each prop
- [ ] Includes `@example` with code
- [ ] Build passes (`pnpm run build`)

---

## Issue #9: Create TerminalTree Component

**Title:** Create TerminalTree component for file trees  
**Labels:** `good-first-issue`, `component`, `help-wanted`

### Difficulty

⭐⭐ Medium

### Description

Display file/folder structures in tree format.

### Files to Create

- `components/terminal-tree.tsx`

### Example Usage

```tsx
<TerminalTree
  data={{
    src: {
      components: ['Button.tsx', 'Input.tsx'],
      app: ['page.tsx'],
    },
    'package.json': null,
  }}
/>
```

**Output:**
```
src/
├── components/
│   ├── Button.tsx
│   └── Input.tsx
├── app/
│   └── page.tsx
└── package.json
```

### Acceptance Criteria

- [ ] Renders nested objects as folders
- [ ] Renders strings/null as files
- [ ] Uses tree characters: `├──└──│`
- [ ] Indents properly
- [ ] Example in playground

---

## Issue #10: Add GitHub Dark Theme

**Title:** Add GitHub Dark color theme  
**Labels:** `good-first-issue`, `theme`, `help-wanted`

### Difficulty

⭐ Easy

### Files to Edit

- `app/globals.css`

### What to Do

Add GitHub's dark theme colors:

```css
[data-theme="github-dark"] {
  --term-bg: #0d1117;
  --term-bg-light: #161b22;
  --term-fg: #c9d1d9;
  --term-fg-dim: #8b949e;
  --term-green: #3fb950;
  --term-blue: #58a6ff;
  --term-yellow: #d29922;
  --term-red: #f85149;
  --term-purple: #bc8cff;
  --term-cyan: #39c5cf;
}
```

### Acceptance Criteria

- [ ] Theme added
- [ ] Screenshot in PR
- [ ] Colors match GitHub.com dark mode

---

## Issue #11: Add README Screenshots

**Title:** Add screenshots to README  
**Labels:** `good-first-issue`, `docs`, `help-wanted`

### Difficulty

⭐ Easy

### Description

README needs visual examples of the components.

### Files to Edit

- `README.md`
- Create `public/screenshots/` folder

### What to Do

1. Take screenshots of the playground
2. Add to `public/screenshots/`
3. Embed in README after "Quick Start" section

### Acceptance Criteria

- [ ] At least 3 screenshots
- [ ] Shows different output types
- [ ] High quality (2x retina)
- [ ] Dark theme
- [ ] Compressed (< 200KB each)

---

## Issue #12: Create TerminalPrompt Component

**Title:** Create interactive TerminalPrompt component  
**Labels:** `component`, `help-wanted`, `advanced`

### Difficulty

⭐⭐⭐ Advanced

### Description

Interactive command input with history (up/down arrows).

### Files to Create

- `components/terminal-prompt.tsx`

### Example

```tsx
<TerminalPrompt
  prompt="$"
  onCommand={(cmd) => console.log(cmd)}
  history={['ls', 'cd src']}
/>
```

### Acceptance Criteria

- [ ] Input field with prompt
- [ ] Up/down arrows cycle through history
- [ ] Enter submits command
- [ ] Tab for autocomplete (optional)
- [ ] Cursor blinks
- [ ] Example in playground

---

## Instructions for Creating Issues

After pushing the repo to GitHub:

1. Go to https://github.com/OpenKnots/terminal-ui/issues/new
2. Copy-paste each issue above
3. Add appropriate labels:
   - `good-first-issue` - For beginners
   - `help-wanted` - Need contributors
   - `theme` - Color schemes
   - `component` - New components
   - `docs` - Documentation
   - `bug` - Bug fixes
   - `enhancement` - Improvements
4. Save each issue

---

**Labels to Create:**

- `good-first-issue` (green)
- `help-wanted` (green)
- `theme` (purple)
- `component` (blue)
- `docs` (yellow)
- `bug` (red)
- `enhancement` (cyan)
- `mobile` (orange)
- `advanced` (dark gray)
