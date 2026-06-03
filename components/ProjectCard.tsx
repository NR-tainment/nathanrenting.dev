import Link from "next/link";

type Props = {
  href: string;
  title: string;
  oneLiner: string;
  tags: string[];
  status?: string;
};

export function ProjectCard({ href, title, oneLiner, tags, status }: Props) {
  return (
    <Link
      href={href}
      className="group block border border-zinc-800 rounded-md p-6 hover:border-cyan-700 hover:bg-zinc-900/40 transition-all"
    >
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        {status && (
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
            {status}
          </span>
        )}
      </div>
      <p className="text-sm text-zinc-400 leading-relaxed mb-4">{oneLiner}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 text-xs font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
        read the case →
      </div>
    </Link>
  );
}
