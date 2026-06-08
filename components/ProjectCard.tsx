import Link from "next/link";

type Props = {
  href: string;
  title: string;
  oneLiner: string;
  tags: string[];
  status?: string;
  externalUrl?: string;
};

export function ProjectCard({
  href,
  title,
  oneLiner,
  tags,
  status,
  externalUrl,
}: Props) {
  return (
    <div className="group relative border border-zinc-800 rounded-md p-6 hover:border-cyan-700 hover:bg-zinc-900/40 transition-all">
      <Link href={href} className="absolute inset-0 rounded-md" aria-label={`Open case study voor ${title}`}>
        <span className="sr-only">{title}</span>
      </Link>

      <div className="relative flex items-baseline justify-between mb-3 gap-2">
        <h3 className="text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-3 shrink-0">
          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 text-[10px] font-mono uppercase tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              ↗ {externalUrl.replace(/^https?:\/\//, "")}
            </a>
          )}
          {status && (
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
              {status}
            </span>
          )}
        </div>
      </div>
      <p className="relative text-sm text-zinc-400 leading-relaxed mb-4">
        {oneLiner}
      </p>
      <div className="relative flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="relative mt-4 text-xs font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
        read the case →
      </div>
    </div>
  );
}
