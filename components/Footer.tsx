import Link from "next/link";
import type { Locale } from "@/content/config";
import type { CommonDict } from "@/content/common/types";

export function Footer({
  locale,
  common,
}: {
  locale: Locale;
  common: CommonDict;
}) {
  const { footer } = common;
  return (
    <footer className="border-t border-zinc-800 mt-24 py-10">
      <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-3">
          <span>
            © {new Date().getFullYear()} Nathan Renting (Jonathan David Renting)
            · Eindhoven, NL
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            href="https://www.linkedin.com/in/nathanrenting/"
            target="_blank"
            rel="noopener noreferrer me"
            className="hover:text-cyan-400 transition-colors uppercase tracking-widest"
          >
            LinkedIn
          </a>
          <a
            href="https://www.malt.nl/profile/jdrenting"
            target="_blank"
            rel="noopener noreferrer me"
            className="hover:text-cyan-400 transition-colors uppercase tracking-widest"
          >
            Malt
          </a>
          <a
            href="https://github.com/NR-tainment"
            target="_blank"
            rel="noopener noreferrer me"
            className="hover:text-cyan-400 transition-colors uppercase tracking-widest"
          >
            GitHub
          </a>
          <a
            href="https://audiolab.tools"
            target="_blank"
            rel="noopener noreferrer me"
            className="hover:text-cyan-400 transition-colors uppercase tracking-widest"
          >
            AudioLab
          </a>
          <a
            href="mailto:info@nathanrenting.dev"
            className="hover:text-cyan-400 transition-colors uppercase tracking-widest"
          >
            Mail
          </a>
          <Link
            href={`/${locale}/hire`}
            className="hover:text-cyan-400 transition-colors uppercase tracking-widest"
          >
            {footer.inhuur}
          </Link>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 mt-6">
        <p className="text-[10px] font-mono text-zinc-600 italic">
          {footer.builtWith}
          <a
            href="https://github.com/NR-tainment/nathanrenting.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors not-italic"
          >
            {footer.sourceLinkLabel}
          </a>
          {footer.builtWithSuffix}
        </p>
      </div>
    </footer>
  );
}
