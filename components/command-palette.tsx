'use client'

import { useEffect, useState } from 'react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import {
  Plus,
  Columns2,
  Trash2,
  Palette,
  Home,
  Play,
} from 'lucide-react'
import { THEMES, useTheme, type ThemeId } from '@/components/terminal-themes'

interface CommandPaletteProps {
  onNewTab?: () => void
  onSplit?: () => void
  onClear?: () => void
}

export function CommandPalette({
  onNewTab,
  onSplit,
  onClear,
}: CommandPaletteProps) {
  const [open, setOpen] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    const down = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const run = (fn?: () => void) => {
    setOpen(false)
    fn?.()
  }

  const switchTheme = (id: ThemeId) => {
    setOpen(false)
    setTheme(id)
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Type a command..."
        className="font-mono text-sm"
      />
      <CommandList>
        <CommandEmpty className="py-6 text-center text-sm text-[var(--term-fg-dim)]">
          No results found.
        </CommandEmpty>

        <CommandGroup heading="Terminal">
          <CommandItem onSelect={() => run(onNewTab)} className="gap-2">
            <Plus size={14} />
            New Tab
          </CommandItem>
          <CommandItem onSelect={() => run(onSplit)} className="gap-2">
            <Columns2 size={14} />
            Split Pane
          </CommandItem>
          <CommandItem onSelect={() => run(onClear)} className="gap-2">
            <Trash2 size={14} />
            Clear Terminal
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Theme">
          {THEMES.map((t) => (
            <CommandItem
              key={t.id}
              onSelect={() => switchTheme(t.id)}
              className="gap-2"
            >
              <Palette size={14} />
              {t.name}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Navigation">
          <CommandItem
            onSelect={() => {
              setOpen(false)
              window.location.href = '/'
            }}
            className="gap-2"
          >
            <Home size={14} />
            Home
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setOpen(false)
              window.location.href = '/playground'
            }}
            className="gap-2"
          >
            <Play size={14} />
            Playground
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
