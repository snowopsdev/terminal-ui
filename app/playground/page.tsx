import { TerminalApp } from '@/components/terminal-app'
import { Terminal, TerminalCommand } from '@/components/terminal'
import { TerminalTable } from '@/components/terminal-table'

export const metadata = {
  title: 'Playground',
}

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen space-y-6 p-4">
      <section>
        <h2 className="mb-3 font-mono text-sm text-[var(--term-fg-dim)]">Interactive Terminal App</h2>
        <div className="h-[560px]">
          <TerminalApp className="h-full" />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-mono text-sm text-[var(--term-fg-dim)]">TerminalTable Demo</h2>
        <Terminal title="npm ls --depth=0">
          <TerminalCommand>npm ls --depth=0</TerminalCommand>
          <TerminalTable
            headers={['Package', 'Version', 'Size']}
            rows={[
              ['react', '19.2.4', '142 kB'],
              ['next', '16.1.6', '540 kB'],
              ['typescript', '5.9.3', '22 MB'],
            ]}
            align={['left', 'center', 'right']}
          />
        </Terminal>
      </section>
    </main>
  )
}
