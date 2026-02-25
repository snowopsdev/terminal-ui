import { TerminalApp } from '@/components/terminal-app'
import { Terminal, TerminalCommand, TerminalOutput } from '@/components/terminal'

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
        <h2 className="font-mono text-sm text-[var(--term-fg-dim)]">Syntax Highlighting Demo</h2>
        <Terminal title="package-info.json">
          <TerminalCommand>cat package.json | jq '.name, .version, .scripts'</TerminalCommand>
          <TerminalOutput language="json">
            {`{
  "name": "@openknots/terminal-ui",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  }
}`}
          </TerminalOutput>
        </Terminal>
      </section>
    </main>
  )
}
