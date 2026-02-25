import Link from 'next/link'
import { InteractiveTerminal } from '@/components/interactive-terminal'

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold">terminal-ui</h1>
          <p className="text-[var(--term-fg-dim)]">
            Basic and functional terminal-style components for React.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Link
              href="/playground"
              className="rounded-md border border-[var(--glass-border)] px-3 py-2 hover:bg-[var(--glass-bg)]"
            >
              Open playground
            </Link>
            <a
              href="https://github.com/OpenKnots/terminal-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-[var(--glass-border)] px-3 py-2 hover:bg-[var(--glass-bg)]"
            >
              GitHub
            </a>
          </div>
        </header>

        <section className="space-y-3 rounded-lg border border-[var(--glass-border)] bg-[var(--term-bg-light)] p-4">
          <h2 className="text-xl font-semibold">Interactive demo</h2>
          <p className="text-sm text-[var(--term-fg-dim)]">
            Type commands and press Enter. Start with <code>help</code>.
          </p>
          <InteractiveTerminal />
        </section>

        <section className="space-y-3 rounded-lg border border-[var(--glass-border)] bg-[var(--term-bg-light)] p-4">
          <h2 className="text-xl font-semibold">Quick start</h2>
          <pre className="overflow-x-auto rounded bg-[var(--term-bg)] p-3 text-sm">
            <code>pnpm add @openknots/terminal-ui</code>
          </pre>
        </section>
      </div>
    </main>
  )
}
