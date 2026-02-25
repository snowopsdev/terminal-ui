import { TerminalApp } from '@/components/terminal-app'

export const metadata = {
  title: 'Playground',
}

export default function PlaygroundPage() {
  return (
    <main className="h-screen p-2">
      <TerminalApp className="h-full" />
    </main>
  )
}
