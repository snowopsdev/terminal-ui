'use client'

type ColumnAlign = 'left' | 'center' | 'right'

interface TerminalTableProps {
  /** Header row labels. */
  headers: string[]
  /** Body rows; values are coerced to string and padded by column width. */
  rows: Array<Array<string | number>>
  /** Optional per-column alignment. Missing values default to left alignment. */
  align?: ColumnAlign[]
  /** Optional additional class names. */
  className?: string
}

/**
 * Render a terminal-style table using box-drawing characters.
 *
 * @param headers - Header labels for each column.
 * @param rows - Row values for each column.
 * @param align - Optional alignment config per column.
 * @param className - Optional wrapper class names.
 * @example
 * ```tsx
 * <TerminalTable
 *   headers={['Name', 'Version', 'Size']}
 *   rows={[
 *     ['react', '19.0.0', '142 kB'],
 *     ['next', '16.1.6', '540 kB'],
 *   ]}
 *   align={['left', 'center', 'right']}
 * />
 * ```
 */
export function TerminalTable({
  headers,
  rows,
  align = [],
  className = '',
}: TerminalTableProps) {
  if (headers.length === 0) {
    return null
  }

  const columnCount = headers.length
  const normalizedRows = rows.map((row) =>
    Array.from({ length: columnCount }, (_, index) => String(row[index] ?? '')),
  )

  const widths = headers.map((header, columnIndex) => {
    const maxRowWidth = normalizedRows.reduce((max, row) => {
      return Math.max(max, row[columnIndex].length)
    }, 0)
    return Math.max(header.length, maxRowWidth)
  })

  const topBorder = `┌${widths.map((width) => '─'.repeat(width + 2)).join('┬')}┐`
  const middleBorder = `├${widths.map((width) => '─'.repeat(width + 2)).join('┼')}┤`
  const bottomBorder = `└${widths.map((width) => '─'.repeat(width + 2)).join('┴')}┘`

  const headerLine = `│ ${headers
    .map((cell, index) => formatCell(cell, widths[index], align[index] ?? 'left'))
    .join(' │ ')} │`

  const rowLines = normalizedRows.map((row) => {
    return `│ ${row
      .map((cell, index) => formatCell(cell, widths[index], align[index] ?? 'left'))
      .join(' │ ')} │`
  })

  const lines = [topBorder, headerLine, middleBorder, ...rowLines, bottomBorder]

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

function formatCell(value: string, width: number, align: ColumnAlign): string {
  const padding = width - value.length
  if (align === 'right') {
    return `${' '.repeat(padding)}${value}`
  }
  if (align === 'center') {
    const left = Math.floor(padding / 2)
    const right = padding - left
    return `${' '.repeat(left)}${value}${' '.repeat(right)}`
  }
  return `${value}${' '.repeat(padding)}`
}
