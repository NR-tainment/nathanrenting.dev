/**
 * Renders a list of label/value pairs in a clean, human-readable layout.
 * Used on project pages for Stack/Tech sections — replaces markdown tables
 * with something that breathes better on mobile (label stacks above value
 * at small widths) and looks intentional rather than auto-rendered.
 */
type Row = {
  label: string;
  value: React.ReactNode;
};

export function StackTable({
  rows,
  className = "",
}: {
  rows: Row[];
  className?: string;
}) {
  return (
    <div
      className={`my-8 border border-zinc-800 rounded-md divide-y divide-zinc-800 ${className}`}
    >
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-1 md:gap-6 px-4 py-3"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 self-start">
            {row.label}
          </div>
          <div className="text-zinc-300 text-sm leading-relaxed">
            {row.value}
          </div>
        </div>
      ))}
    </div>
  );
}
