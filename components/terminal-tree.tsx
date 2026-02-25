'use client'

interface TreeDirectory {
  [name: string]: TreeNode
}

type TreeNode = TreeDirectory | string[] | null
type TreeData = TreeDirectory

interface TerminalTreeProps {
  /**
   * Nested file tree data where objects are directories,
   * string arrays are directory file lists, and null means a file.
   */
  data: TreeData
  /** Optional additional class names. */
  className?: string
}

/**
 * Render a terminal-style file tree using box-drawing characters.
 *
 * @param data - Tree structure to render.
 * @param className - Optional custom class names for the wrapper.
 * @example
 * ```tsx
 * <TerminalTree
 *   data={{
 *     src: {
 *       components: ['Button.tsx', 'Input.tsx'],
 *       app: ['page.tsx', 'layout.tsx'],
 *     },
 *     'package.json': null,
 *   }}
 * />
 * ```
 */
export function TerminalTree({ data, className = '' }: TerminalTreeProps) {
  const lines = renderTree(data)

  return (
    <div className={`space-y-0.5 font-mono text-sm text-[var(--term-fg)] ${className}`}>
      {lines.map((line, index) => (
        <div key={`${line}-${index}`} className="whitespace-pre">
          {line}
        </div>
      ))}
    </div>
  )
}

function isDirectory(node: TreeNode): node is TreeDirectory {
  return node !== null && typeof node === 'object' && !Array.isArray(node)
}

function isDirectoryLike(node: TreeNode): boolean {
  return Array.isArray(node) || isDirectory(node)
}

function renderTree(data: TreeData): string[] {
  const rootEntries = Object.entries(data)
  const lines: string[] = []

  rootEntries.forEach(([name, node], rootIndex) => {
    const isRootLast = rootIndex === rootEntries.length - 1
    const rootLine = rootIndex === 0
      ? `${name}${isDirectoryLike(node) ? '/' : ''}`
      : `${isRootLast ? '└──' : '├──'} ${name}${isDirectoryLike(node) ? '/' : ''}`
    lines.push(rootLine)

    const childPrefix = rootIndex === 0
      ? isRootLast ? '    ' : '│   '
      : isRootLast ? '    ' : '│   '

    if (Array.isArray(node)) {
      lines.push(...renderArrayChildren(node, childPrefix))
    } else if (isDirectory(node)) {
      lines.push(...renderDirectoryChildren(node, childPrefix))
    }
  })

  return lines
}

function renderArrayChildren(items: string[], prefix: string): string[] {
  return items.map((item, index) => {
    const isLast = index === items.length - 1
    return `${prefix}${isLast ? '└──' : '├──'} ${item}`
  })
}

function renderDirectoryChildren(directory: TreeDirectory, prefix: string): string[] {
  const entries = Object.entries(directory)
  const lines: string[] = []

  entries.forEach(([name, node], index) => {
    const isLast = index === entries.length - 1
    const branch = `${prefix}${isLast ? '└──' : '├──'} ${name}${isDirectoryLike(node) ? '/' : ''}`
    lines.push(branch)

    const nestedPrefix = `${prefix}${isLast ? '    ' : '│   '}`

    if (Array.isArray(node)) {
      lines.push(...renderArrayChildren(node, nestedPrefix))
    } else if (isDirectory(node)) {
      lines.push(...renderDirectoryChildren(node, nestedPrefix))
    }
  })

  return lines
}
