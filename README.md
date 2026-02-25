# 🖥️ terminal-ui

> Beautiful terminal-like UI components for the web. Build CLI experiences in React.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## 🎯 What is this?

A collection of React components that bring the elegance of terminal UIs to the browser. Perfect for:

- 🤖 AI agent interfaces (like OpenClaw)
- 📚 Interactive CLI tutorials
- 🎮 Developer tools and dashboards
- 🎨 Retro-futuristic web apps

## ✨ Features

- 🎨 **Beautiful out of the box** - Glassmorphic design with smooth animations
- ⚡ **Lightweight** - No heavy dependencies
- 🎹 **Keyboard-first** - Full keyboard navigation support
- 🌈 **Syntax highlighting** - Built-in code formatting
- 📱 **Responsive** - Works on desktop and mobile
- 🎭 **Customizable** - Theming system with CSS variables

## 🚀 Quick Start

```bash
pnpm add @openknots/terminal-ui
```

```tsx
import { Terminal, TerminalCommand } from '@openknots/terminal-ui'

export default function App() {
  return (
    <Terminal prompt="user@demo">
      <TerminalCommand>npm install terminal-ui</TerminalCommand>
      <TerminalOutput>✓ Installed terminal-ui@0.1.0</TerminalOutput>
    </Terminal>
  )
}
```

## 📦 Components

- **Terminal** - Main container with window chrome
- **TerminalCommand** - Render a command with prompt
- **TerminalOutput** - Format command output
- **TerminalSpinner** - Loading indicators
- **TerminalProgress** - Progress bars
- **TerminalTable** - Render tables
- **TerminalTree** - File tree views
- **TerminalPrompt** - Interactive input

## 🎮 Live Demo

[**→ View the Playground**](https://terminal-ui.vercel.app)

## 🤝 Contributing

We **love** contributions! This repo is designed for practice PRs.

**Good first issues:**
- 🎨 Add a new color theme
- 📦 Create a new component
- 📚 Improve documentation
- 🐛 Fix a bug
- ✨ Add an example

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 🎯 Project Goals

1. **Make CLI UIs accessible** - Bring terminal aesthetics to the web
2. **Practice PR workflow** - Perfect for testing tools like [code-flow](https://github.com/OpenKnots/code-flow)
3. **Build community** - Create a library together

## 📜 License

MIT © OpenKnots

---

Built with ❤️ by the OpenClaw community
