# Using OpenClaw with terminal-ui

How to point your OpenClaw agent at this repository to automatically generate PRs.

---

## 🎯 Quick Start

```
@openclaw Browse https://github.com/OpenKnots/terminal-ui/issues?q=is%3Aissue+is%3Aopen+label%3A%22good-first-issue%22 and pick an issue to work on. Read AGENTS.md first, then implement the issue and open a PR.
```

---

## 📋 Step-by-Step Guide

### 1. Point OpenClaw at the Repository

**In your OpenClaw chat:**

```
Clone and explore the terminal-ui repository:
https://github.com/OpenKnots/terminal-ui

Read these files first:
- README.md (project overview)
- AGENTS.md (agent contribution guide)
- .github/STARTER_ISSUES.md (pre-written issues)
```

### 2. Pick an Issue

**Option A: Let OpenClaw Choose**

```
Browse the good-first-issue label and pick the easiest one to implement:
https://github.com/OpenKnots/terminal-ui/issues?q=is%3Aissue+is%3Aopen+label%3A%22good-first-issue%22

Implement it following AGENTS.md guidelines.
```

**Option B: Specific Issue**

```
Read issue #1 (Add Dracula theme):
https://github.com/OpenKnots/terminal-ui/issues/1

Implement the Dracula color theme following the issue instructions and AGENTS.md.
```

### 3. Generate the PR

**After implementation:**

```
You've implemented the Dracula theme. Now:
1. Run pnpm run build to verify it works
2. Create a PR following the template in .github/pull_request_template.md
3. Include a screenshot of the theme
```

---

## 🎨 Example Prompts

### Add a Color Theme

```
Task: Add the Nord color theme to terminal-ui

Steps:
1. Read AGENTS.md section "Adding a Color Theme"
2. Find the official Nord color palette at nordtheme.com
3. Add the theme to app/globals.css
4. Test locally by adding data-theme="nord" to app/layout.tsx
5. Take a screenshot
6. Open a PR with title "feat: add Nord color theme"

Follow the PR checklist in AGENTS.md.
```

### Create a Component

```
Task: Create the TerminalProgress component

Requirements:
1. Read AGENTS.md section "Creating a Component"
2. Implement TerminalProgress in components/terminal-progress.tsx
3. Export it from components/terminal.tsx
4. Add example to app/playground/page.tsx
5. Include JSDoc comments
6. Open PR with title "feat: create TerminalProgress component"

See issue #2 for full requirements.
```

### Fix a Bug

```
Task: Fix mobile scrolling issue

Steps:
1. Read issue #7: https://github.com/OpenKnots/terminal-ui/issues/7
2. Review AGENTS.md for testing guidelines
3. Add -webkit-overflow-scrolling: touch to terminal content
4. Test in responsive mode
5. Open PR with title "fix: mobile scrolling on iOS"
```

---

## 🤖 OpenClaw Workflow

**Typical agent workflow:**

```mermaid
1. Read AGENTS.md → Understand project structure
2. Browse issues → Pick good-first-issue
3. Read issue → Get specific requirements
4. Implement → Follow AGENTS.md guidelines
5. Test → Run pnpm run build
6. Screenshot → Capture visual changes
7. Open PR → Use template, include checklist
8. Respond → Address review comments
```

---

## 📚 Files OpenClaw Should Read

**Before starting ANY work:**

1. **AGENTS.md** - Complete agent guide (13KB, read this first!)
2. **README.md** - Project overview
3. **app/globals.css** - See existing themes (for theme PRs)
4. **components/terminal.tsx** - See existing components
5. **app/playground/page.tsx** - See example patterns

**For specific tasks:**

- Adding theme → Read `:root` section in `app/globals.css`
- Adding component → Read an existing component in `components/`
- Fixing bug → Read the issue + related component file

---

## ✅ PR Quality Checklist

**OpenClaw should verify before opening PR:**

- [ ] Read AGENTS.md and followed guidelines
- [ ] Implemented exactly what the issue requested
- [ ] All required files modified:
  - Theme: `app/globals.css` updated
  - Component: component file, export, playground example
- [ ] JSDoc comments added (for components)
- [ ] Build passes (`pnpm run build`)
- [ ] Screenshot included (for visual changes)
- [ ] PR follows conventional commit format
- [ ] PR description uses template from `.github/pull_request_template.md`
- [ ] References issue number (`Closes #N`)

---

## 🎯 Good First Tasks for Agents

**Easiest (5-10 min):**

1. Add Dracula color theme
2. Add Nord color theme
3. Add Monokai color theme
4. Add GitHub Dark color theme
5. Add JSDoc comments to Terminal component

**Medium (15-30 min):**

6. Create TerminalProgress component
7. Create TerminalTree component
8. Add copy button to Terminal
9. Fix mobile scrolling

**Advanced (45-60 min):**

10. Create TerminalTable component
11. Create TerminalPrompt component (interactive)

See `.github/STARTER_ISSUES.md` for full details on each.

---

## 🚨 Common Agent Mistakes to Avoid

**❌ Don't:**

1. **Skip AGENTS.md** - Read it first! Contains all the patterns.
2. **Add dependencies** - Keep it lightweight, no new packages.
3. **Change architecture** - Follow existing patterns exactly.
4. **Use inline styles** - Use Tailwind classes and CSS variables.
5. **Forget TypeScript** - All components need typed props.
6. **Skip the playground** - New components need examples.
7. **Forget screenshots** - Visual changes need visual proof.
8. **Ignore the template** - Use `.github/pull_request_template.md`.

---

## 💬 Example OpenClaw Conversation

**User:**
```
Create a PR for terminal-ui adding the Dracula color theme
```

**OpenClaw (good response):**
```
I'll add the Dracula color theme to terminal-ui. Let me:

1. Read AGENTS.md to understand the project structure
2. Get the official Dracula colors from draculatheme.com
3. Add the theme to app/globals.css
4. Test it locally
5. Take a screenshot
6. Open a PR

[Reads AGENTS.md...]
[Implements theme...]
[Runs pnpm run build...]
[Takes screenshot...]

PR opened: https://github.com/OpenKnots/terminal-ui/pull/13

✅ Checklist:
- All 11 CSS variables defined
- Colors match official Dracula spec
- Screenshot included
- Build passes
- Follows PR template
```

---

## 🔧 Testing Before PR

**OpenClaw should verify:**

```bash
# 1. Install dependencies
pnpm install

# 2. Start dev server (optional, for testing)
pnpm run dev
# → Verify at http://localhost:3000

# 3. Build (REQUIRED)
pnpm run build
# → Must complete without errors

# 4. Check TypeScript (implicit in build)
# Build includes type checking
```

**If build fails:**
- Fix TypeScript errors
- Check for syntax errors
- Ensure all imports are correct
- Verify no missing dependencies

---

## 📸 Screenshot Guidelines

**For theme PRs:**
- Capture the full terminal window
- Show multiple output types (success, error, info)
- Include the theme name in filename: `dracula-theme.png`

**For component PRs:**
- Show the component in action
- Include different states (0%, 50%, 100% for progress bars)
- Capture from playground page

**How to take:**
- Local: Use browser screenshot (Cmd+Shift+4 on Mac)
- Include in PR description: `![Screenshot](./screenshot.png)`

---

## 🎉 Success Metrics

**A good agent-generated PR:**

✅ References an issue (`Closes #N`)  
✅ Follows conventional commit format  
✅ Includes all checklist items  
✅ Has screenshot (if visual)  
✅ Builds successfully  
✅ Follows existing patterns  
✅ Includes JSDoc (for components)  
✅ Adds playground example (for components)  

**Result:** Likely to be merged within 24 hours! 🚀

---

## 🆘 If OpenClaw Gets Stuck

**Troubleshooting:**

1. **Can't find the pattern?**
   - Re-read AGENTS.md section for that task type
   - Look at existing similar code (e.g., other themes, other components)

2. **Build fails?**
   - Check TypeScript errors
   - Ensure all imports are correct
   - Verify props interface is complete

3. **Not sure what to do?**
   - Check if there's a pre-written issue in `.github/STARTER_ISSUES.md`
   - Read similar closed PRs for examples

4. **Theme colors wrong?**
   - Find the official color spec URL
   - Copy colors exactly (no approximation)

---

## 🔗 Quick Links

| Resource | URL |
|----------|-----|
| Issues | https://github.com/OpenKnots/terminal-ui/issues |
| Good First Issues | https://github.com/OpenKnots/terminal-ui/issues?q=label%3A%22good-first-issue%22 |
| AGENTS.md | https://github.com/OpenKnots/terminal-ui/blob/main/AGENTS.md |
| Starter Issues | https://github.com/OpenKnots/terminal-ui/blob/main/.github/STARTER_ISSUES.md |
| Contributing | https://github.com/OpenKnots/terminal-ui/blob/main/CONTRIBUTING.md |

---

## 📝 Summary

**To use OpenClaw with terminal-ui:**

1. Point it at the repo
2. Have it read **AGENTS.md** first
3. Pick a `good-first-issue`
4. Follow the AGENTS.md guide for that task type
5. Build, test, screenshot
6. Open PR with template + checklist

**Result:** High-quality automated PRs that are likely to be merged! 🎉

---

_For questions about agent usage, open a Discussion: https://github.com/OpenKnots/terminal-ui/discussions_
