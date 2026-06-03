import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-24 py-10">
      <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-3">
          <span>
            © {new Date().getFullYear()} Jonathan David Renting · Eindhoven, NL
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/NR-tainment"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors uppercase tracking-widest"
          >
            GitHub
          </a>
          <a
            href="mailto:contact@nathanrenting.dev"
            className="hover:text-cyan-400 transition-colors uppercase tracking-widest"
          >
            Mail
          </a>
          <Link
            href="/hire"
            className="hover:text-cyan-400 transition-colors uppercase tracking-widest"
          >
            Inhuur
          </Link>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 mt-6">
        <p className="text-[10px] font-mono text-zinc-600 italic">
          Solo gebouwd. Next.js, MDX, koffie. Source op{" "}
          <a
            href="https://github.com/NR-tainment/nathanrenting.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors not-italic"
          >
            github.com/NR-tainment
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
