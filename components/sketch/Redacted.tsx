/**
 * Renders text that's visually obscured — as if wiped from a blackboard
 * or blurred-out for NDA reasons.
 *
 * variant "blur"  — soft out-of-focus chalk effect (default)
 * variant "block" — solid chalk bar over text (heaviest redaction)
 * variant "wipe"  — blur + horizontal chalk-smear overlay (most "wiped" look)
 *
 * The text inside SHOULD be safe-to-leak placeholder copy, not the real
 * secret — CSS effects can be defeated by disabling stylesheets. Treat
 * this as visual signalling, not security.
 */
export function Redacted({
  children,
  variant = "blur",
  title = "Onder NDA — vraag ernaar",
}: {
  children: React.ReactNode;
  variant?: "blur" | "block" | "wipe";
  title?: string;
}) {
  const className = {
    blur: "redacted-blur",
    block: "redacted-block",
    wipe: "redacted-wipe",
  }[variant];

  return (
    <span
      className={className}
      title={title}
      aria-label={`onder NDA — ${title}`}
    >
      {children}
    </span>
  );
}
