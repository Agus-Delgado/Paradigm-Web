type TerminalBlockProps = {
  lines: readonly string[]
  caption?: string
}

export function TerminalBlock({ lines, caption }: TerminalBlockProps) {
  return (
    <figure className="terminal-block">
      {caption ? <figcaption className="terminal-caption">{caption}</figcaption> : null}
      <div className="terminal-window">
        <div className="terminal-titlebar" aria-hidden="true">
          <span className="terminal-dot terminal-dot--close" />
          <span className="terminal-dot terminal-dot--minimize" />
          <span className="terminal-dot terminal-dot--maximize" />
        </div>
        <pre className="terminal-pre" role="region" aria-label="Shell commands">
          <code>
            {lines.map((line) => (
              <span key={line} className="terminal-line">
                <span className="terminal-prompt" aria-hidden="true">
                  $
                  {' '}
                </span>
                <span className="terminal-cmd">{line}</span>
                {'\n'}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </figure>
  )
}
