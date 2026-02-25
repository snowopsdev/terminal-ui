import Link from 'next/link'
import { InteractiveTerminal } from '@/components/interactive-terminal'
import { Terminal, TerminalCommand, TerminalOutput } from '@/components/terminal'

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <Link
            href="/"
            className="inline-flex rounded-md border border-[var(--glass-border)] px-3 py-2 text-sm hover:bg-[var(--glass-bg)]"
          >
            Back to home
          </Link>
          <h1 className="text-3xl font-bold">Playground</h1>
          <p className="text-[var(--term-fg-dim)]">
            Basic, working examples for the terminal components.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Interactive terminal</h2>
          <InteractiveTerminal />
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Static example</h2>
          <Terminal title="example.sh">
            <TerminalCommand>echo "Hello from terminal-ui"</TerminalCommand>
            <TerminalOutput type="success">Hello from terminal-ui</TerminalOutput>
          </Terminal>
        </section>
      </div>
    </main>
  )
}
