import Link from 'next/link'
import { Terminal, TerminalCommand, TerminalOutput } from '@/components/terminal'
import { ArrowRight, Github, Terminal as TerminalIcon } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      {/* Hero */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <TerminalIcon size={48} className="text-[var(--term-green)]" />
            <h1 className="text-5xl md:text-6xl font-bold">
              terminal-ui
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-[var(--term-fg-dim)] max-w-2xl mx-auto mb-8">
            Beautiful terminal-like UI components for React. Build CLI experiences in the browser.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/playground"
              className="inline-flex items-center gap-2 bg-[var(--term-green)] text-[var(--term-bg)] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Try the Playground
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://github.com/OpenKnots/terminal-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--glass-bg)] border border-[var(--glass-border)] px-6 py-3 rounded-lg font-semibold hover:bg-[rgba(255,255,255,0.08)] transition"
            >
              <Github size={18} />
              View on GitHub
            </a>
          </div>
        </div>

        {/* Demo Terminal */}
        <div className="max-w-3xl mx-auto mb-16">
          <Terminal 
            title="demo.sh"
            prompt="user@demo"
          >
            <TerminalCommand>pnpm add @openknots/terminal-ui</TerminalCommand>
            <TerminalOutput type="success">✓ Installed @openknots/terminal-ui@0.1.0</TerminalOutput>
            <TerminalOutput type="info">Added 1 package in 2.3s</TerminalOutput>
            
            <div className="h-4" />
            
            <TerminalCommand>cat example.tsx</TerminalCommand>
            <TerminalOutput>
              <pre className="text-sm">
{`import { Terminal } from '@openknots/terminal-ui'

export default function App() {
  return (
    <Terminal prompt="user@app">
      <TerminalCommand>Hello, terminal-ui! 👋</TerminalCommand>
    </Terminal>
  )
}`}
              </pre>
            </TerminalOutput>
            
            <div className="h-4" />
            
            <TerminalCommand>pnpm run dev</TerminalCommand>
            <TerminalOutput type="success">✓ Ready on http://localhost:3000</TerminalOutput>
            <TerminalOutput>
              <span className="cursor"></span>
            </TerminalOutput>
          </Terminal>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: '🎨',
              title: 'Beautiful',
              desc: 'Glassmorphic design with smooth animations'
            },
            {
              icon: '⚡',
              title: 'Lightweight',
              desc: 'No heavy dependencies, just React'
            },
            {
              icon: '🎹',
              title: 'Keyboard-first',
              desc: 'Full keyboard navigation support'
            },
            {
              icon: '🌈',
              title: 'Syntax Highlighting',
              desc: 'Built-in code formatting'
            },
            {
              icon: '📱',
              title: 'Responsive',
              desc: 'Works on desktop and mobile'
            },
            {
              icon: '🎭',
              title: 'Customizable',
              desc: 'Theme with CSS variables'
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-[var(--glass-bg)] border border-[var(--glass-border)] p-6 rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-[var(--term-fg-dim)] text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-[var(--term-bg-light)] border border-[var(--glass-border)] p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to contribute?</h2>
          <p className="text-[var(--term-fg-dim)] mb-6 max-w-2xl mx-auto">
            This repo is designed for practice PRs. Add components, fix bugs, improve docs - all contributions welcome!
          </p>
          <Link
            href="https://github.com/OpenKnots/terminal-ui/blob/main/CONTRIBUTING.md"
            className="inline-flex items-center gap-2 bg-[var(--term-blue)] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Read Contributing Guide
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  )
}
