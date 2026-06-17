import Link from "next/link";
import { LanguageToggle } from "@/components/LanguageToggle";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Werk" },
  { href: "/diensten", label: "Diensten" },
  { href: "/patterns", label: "Patterns" },
  { href: "/about", label: "Over" },
  { href: "/hire", label: "Inhuur" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-2">
        <Link
          href="/"
          className="font-mono text-xs sm:text-sm text-zinc-100 hover:text-cyan-400 transition-colors shrink-0"
        >
          nathanrenting<span className="text-cyan-400">.dev</span>
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-1 md:gap-4">
          {NAV_ITEMS.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors px-1 sm:px-2 py-1"
            >
              {item.label}
            </Link>
          ))}
          <span className="text-zinc-700 mx-0.5 sm:mx-1 text-[10px] sm:text-xs">·</span>
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
}
