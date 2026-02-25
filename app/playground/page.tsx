'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Terminal, TerminalCommand, TerminalOutput, TerminalSpinner } from '@/components/terminal'
import { ArrowLeft, Copy, Check } from 'lucide-react'

export default function Playground() {
  const [copied, setCopied] = useState(false)

  const exampleCode = `import { Terminal, TerminalCommand, TerminalOutput } from '@openknots/terminal-ui'

export default function App() {
  return (
    <Terminal title="my-app.sh" prompt="user@app">
      <TerminalCommand>echo "Hello, World!"</TerminalCommand>
      <TerminalOutput type="success">Hello, World!</TerminalOutput>
    </Terminal>
  )
}`

  const copyCode = () => {
    navigator.clipboard.writeText(exampleCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--term-fg-dim)] hover:text-[var(--term-fg)] transition mb-4"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">Playground</h1>
          <p className="text-[var(--term-fg-dim)]">
            Try out the components and copy the code
          </p>
        </div>

        {/* Examples Grid */}
        <div className="space-y-8">
          {/* Basic Terminal */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Basic Terminal</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Terminal title="example.sh">
                  <TerminalCommand>ls -la</TerminalCommand>
                  <TerminalOutput>drwxr-xr-x  5 user  staff   160 Dec 25 10:30 .</TerminalOutput>
                  <TerminalOutput>drwxr-xr-x  8 user  staff   256 Dec 24 09:15 ..</TerminalOutput>
                  <TerminalOutput>-rw-r--r--  1 user  staff  1234 Dec 25 10:25 README.md</TerminalOutput>
                  <TerminalOutput>drwxr-xr-x  3 user  staff    96 Dec 25 10:20 src</TerminalOutput>
                  <TerminalOutput>-rw-r--r--  1 user  staff   567 Dec 25 10:30 package.json</TerminalOutput>
                </Terminal>
              </div>
              <div className="bg-[var(--term-bg-light)] border border-[var(--glass-border)] rounded-lg p-4 relative">
                <button
                  onClick={copyCode}
                  className="absolute top-4 right-4 p-2 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded hover:bg-[rgba(255,255,255,0.08)] transition"
                  title="Copy code"
                >
                  {copied ? <Check size={16} className="text-[var(--term-green)]" /> : <Copy size={16} />}
                </button>
                <pre className="text-xs overflow-x-auto">
                  <code>{exampleCode}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Output Types */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Output Types</h2>
            <Terminal title="outputs.sh">
              <TerminalCommand>test-outputs</TerminalCommand>
              <TerminalOutput type="normal">This is normal output</TerminalOutput>
              <TerminalOutput type="success">✓ This is a success message</TerminalOutput>
              <TerminalOutput type="error">✗ This is an error message</TerminalOutput>
              <TerminalOutput type="info">ℹ This is an info message</TerminalOutput>
              <TerminalOutput type="warning">⚠ This is a warning message</TerminalOutput>
            </Terminal>
          </section>

          {/* Loading States */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Loading States</h2>
            <Terminal title="loading.sh">
              <TerminalCommand>npm install heavy-package</TerminalCommand>
              <TerminalSpinner text="Installing dependencies..." />
            </Terminal>
          </section>

          {/* Custom Prompt */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Custom Prompt</h2>
            <Terminal title="custom.sh" prompt="admin@prod">
              <TerminalCommand prompt="admin@prod">systemctl status nginx</TerminalCommand>
              <TerminalOutput type="success">● nginx.service - nginx - high performance web server</TerminalOutput>
              <TerminalOutput>   Loaded: loaded (/lib/systemd/system/nginx.service; enabled)</TerminalOutput>
              <TerminalOutput>   Active: active (running) since Mon 2024-12-25 10:00:00 UTC</TerminalOutput>
              <TerminalOutput>     Docs: https://nginx.org/en/docs/</TerminalOutput>
              <TerminalOutput> Main PID: 1234 (nginx)</TerminalOutput>
            </Terminal>
          </section>

          {/* Code Display */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Code Display</h2>
            <Terminal title="code.sh">
              <TerminalCommand>cat hello.ts</TerminalCommand>
              <TerminalOutput>
                <pre className="text-sm">
{`export function greet(name: string): string {
  return \`Hello, \${name}!\`
}

console.log(greet('World'))`}
                </pre>
              </TerminalOutput>
            </Terminal>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center bg-[var(--term-bg-light)] border border-[var(--glass-border)] p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Want to add more examples?</h2>
          <p className="text-[var(--term-fg-dim)] mb-6">
            This playground is open for contributions! Add new component examples, improve the docs, or suggest features.
          </p>
          <a
            href="https://github.com/OpenKnots/terminal-ui/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--term-green)] text-[var(--term-bg)] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Browse Issues
          </a>
        </div>
      </div>
    </main>
  )
}
