import Link from 'next/link'
import { TerminalApp } from '@/components/terminal-app'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center px-4 pt-16 pb-12">
        <div className="mb-2 flex items-center gap-3">
          <img src="/logo.png" alt="OpenKnots" className="h-10 w-10" />
          <h1 className="text-4xl font-bold tracking-tight text-[var(--term-fg)]">
            terminal-ui
          </h1>
        </div>
        <p className="mb-6 max-w-md text-center text-[var(--term-fg-dim)]">
          Beautiful terminal-like UI components for the web.
          Build CLI experiences in React.
        </p>
        <div className="mb-10 flex items-center gap-3 text-sm">
          <Link
            href="/playground"
            className="rounded-md bg-[var(--term-green)] px-4 py-2 font-medium text-black transition-opacity hover:opacity-90"
          >
            Open Playground
          </Link>
          <a
            href="https://github.com/OpenKnots/terminal-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[var(--glass-border)] px-4 py-2 text-[var(--term-fg-dim)] transition-colors hover:bg-[var(--glass-bg)] hover:text-[var(--term-fg)]"
          >
            GitHub
          </a>
        </div>
        <div className="flex gap-6 text-xs text-[var(--term-fg-dim)]">
          <span className="flex items-center gap-1.5">
            <kbd className="rounded border border-[var(--glass-border)] bg-[var(--glass-bg)] px-1.5 py-0.5 font-mono text-[10px]">
              Ctrl+K
            </kbd>
            Command Palette
          </span>
          <span className="flex items-center gap-1.5">
            <kbd className="rounded border border-[var(--glass-border)] bg-[var(--glass-bg)] px-1.5 py-0.5 font-mono text-[10px]">
              Ctrl+T
            </kbd>
            New Tab
          </span>
          <span className="flex items-center gap-1.5">
            <kbd className="rounded border border-[var(--glass-border)] bg-[var(--glass-bg)] px-1.5 py-0.5 font-mono text-[10px]">
              Ctrl+D
            </kbd>
            Split Pane
          </span>
        </div>
      </section>

      {/* Live demo */}
      <section className="mx-auto w-full max-w-5xl flex-1 px-4 pb-8">
        <TerminalApp className="h-[480px]" />
      </section>

      {/* Quick start */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-16">
        <div className="rounded-lg border border-[var(--glass-border)] bg-[var(--term-bg-light)] p-6">
          <h2 className="mb-4 text-lg font-semibold">Quick Start</h2>
          <pre className="overflow-x-auto rounded-md bg-[var(--term-bg)] p-4 font-mono text-sm">
            <code>
              <span className="text-[var(--term-fg-dim)]">$</span>{' '}
              <span className="text-[var(--term-fg)]">
                pnpm add @openknots/terminal-ui
              </span>
            </code>
          </pre>
        </div>
      </section>
    </main>
  )
}
