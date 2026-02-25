'use client'

interface TreeDirectory {
  [name: string]: TreeNode
}

type TreeNode = TreeDirectory | string[] | null
type TreeData = TreeDirectory
interface TreeLine {
  key: string
  text: string
}

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
      {lines.map((line) => (
        <div key={line.key} className="whitespace-pre">
          {line.text}
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

function renderTree(data: TreeData): TreeLine[] {
  const rootEntries = Object.entries(data)
  const lines: TreeLine[] = []

  rootEntries.forEach(([name, node], index) => {
    const isLast = index === rootEntries.length - 1
    const nodePath = name
    const line = `${isLast ? '└──' : '├──'} ${name}${isDirectoryLike(node) ? '/' : ''}`
    lines.push({ key: nodePath, text: line })

    // For child levels, continue the vertical rail only when there are siblings below.
    const childPrefix = isLast ? '    ' : '│   '

    if (Array.isArray(node)) {
      lines.push(...renderArrayChildren(node, childPrefix, nodePath))
    } else if (isDirectory(node)) {
      lines.push(...renderDirectoryChildren(node, childPrefix, nodePath))
    }
  })

  return lines
}

function renderArrayChildren(items: string[], prefix: string, basePath: string): TreeLine[] {
  return items.map((item, index) => {
    const isLast = index === items.length - 1
    return {
      key: `${basePath}/${item}:${index}`,
      text: `${prefix}${isLast ? '└──' : '├──'} ${item}`,
    }
  })
}

function renderDirectoryChildren(directory: TreeDirectory, prefix: string, basePath: string): TreeLine[] {
  const entries = Object.entries(directory)
  const lines: TreeLine[] = []

  entries.forEach(([name, node], index) => {
    const isLast = index === entries.length - 1
    const nodePath = `${basePath}/${name}`
    const branch = `${prefix}${isLast ? '└──' : '├──'} ${name}${isDirectoryLike(node) ? '/' : ''}`
    lines.push({ key: nodePath, text: branch })

    // Child indentation is one level deeper. Last nodes switch to spaces.
    const nestedPrefix = isLast ? `${prefix}    ` : `${prefix}│   `

    if (Array.isArray(node)) {
      lines.push(...renderArrayChildren(node, nestedPrefix, nodePath))
    } else if (isDirectory(node)) {
      lines.push(...renderDirectoryChildren(node, nestedPrefix, nodePath))
    }
  })

  return lines
}
