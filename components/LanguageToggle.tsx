"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageToggle() {
  const pathname = usePathname();
  const onEnglishPage = pathname?.startsWith("/en");

  return (
    <Link
      href={onEnglishPage ? "/" : "/en"}
      className="text-xs md:text-sm uppercase tracking-widest text-zinc-500 hover:text-cyan-400 transition-colors px-2 py-1 font-mono"
      title={onEnglishPage ? "Lees in het Nederlands" : "Read in English"}
      aria-label={onEnglishPage ? "Switch to Dutch" : "Switch to English"}
    >
      {onEnglishPage ? "NL" : "EN"}
    </Link>
  );
}
