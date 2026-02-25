import { TerminalApp } from '@/components/terminal-app'
import { Terminal, TerminalCommand } from '@/components/terminal'
import { TerminalTree } from '@/components/terminal-tree'

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
        <h2 className="font-mono text-sm text-[var(--term-fg-dim)]">TerminalTree Demo</h2>
        <Terminal title="tree src">
          <TerminalCommand>tree src</TerminalCommand>
          <TerminalTree
            data={{
              src: {
                components: ['terminal.tsx', 'terminal-tree.tsx'],
                app: ['page.tsx', 'layout.tsx'],
                lib: ['utils.ts'],
              },
              'package.json': null,
            }}
          />
        </Terminal>
      </section>
    </main>
  )
}
