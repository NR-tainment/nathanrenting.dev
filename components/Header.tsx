import Link from "next/link";
import { LanguageToggle } from "@/components/LanguageToggle";
import type { Locale } from "@/content/config";
import type { CommonDict } from "@/content/common/types";

export function Header({
  locale,
  common,
}: {
  locale: Locale;
  common: CommonDict;
}) {
  const { nav } = common;
  // Sub-paths are shared across locales; only the leading /{locale} differs.
  const navItems = [
    { href: `/${locale}/projects`, label: nav.work, mobile: true },
    { href: `/${locale}/diensten`, label: nav.services, mobile: true },
    { href: `/${locale}/patterns`, label: nav.patterns, mobile: false },
    { href: `/${locale}/about`, label: nav.about, mobile: false },
    { href: `/${locale}/hire`, label: nav.hire, mobile: true },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-2">
        <Link
          href={`/${locale}`}
          className="font-mono text-xs sm:text-sm text-zinc-100 hover:text-cyan-400 transition-colors shrink-0"
        >
          nathanrenting<span className="text-cyan-400">.dev</span>
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-1 md:gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors px-1 sm:px-2 py-1${item.mobile ? "" : " hidden sm:inline"}`}
            >
              {item.label}
            </Link>
          ))}
          <span className="text-zinc-700 mx-0.5 sm:mx-1 text-[10px] sm:text-xs">
            ·
          </span>
          <LanguageToggle locale={locale} common={common} />
        </nav>
      </div>
    </header>
  );
}
