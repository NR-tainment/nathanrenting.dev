"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LOCALES,
  LOCALE_LABEL,
  DEFAULT_LOCALE,
  isLocale,
  type Locale,
} from "@/content/config";
import type { CommonDict } from "@/content/common/types";

/**
 * 4-way language switcher that preserves the current sub-path. Swapping the
 * leading locale segment keeps the visitor on the same page in the new
 * language (the GEO requirement: switching language must not bounce to home).
 */
export function LanguageToggle({
  locale,
  common,
}: {
  locale: Locale;
  common: CommonDict;
}) {
  const pathname = usePathname() ?? `/${locale}`;

  // Strip the current locale prefix to get the shared sub-path, then re-prefix
  // with each target locale. e.g. "/nl/projects/echo" -> "/projects/echo".
  const segments = pathname.split("/"); // ["", "<locale>", "projects", "echo"]
  const first = segments[1];
  const subPath = isLocale(first) ? "/" + segments.slice(2).join("/") : pathname;
  const cleanSub = subPath === "/" ? "" : subPath.replace(/\/$/, "");

  return (
    <span className="flex items-center gap-0.5 sm:gap-1">
      {LOCALES.map((target) => {
        const href = `/${target}${cleanSub}`;
        const isActive = target === locale;
        return (
          <Link
            key={target}
            href={href}
            hrefLang={target === DEFAULT_LOCALE ? "nl-NL" : target}
            aria-current={isActive ? "true" : undefined}
            aria-label={common.switcher.switchTo[target]}
            title={common.switcher.switchTo[target]}
            className={
              "text-[10px] sm:text-xs md:text-sm uppercase tracking-widest px-1 sm:px-1.5 py-1 font-mono transition-colors " +
              (isActive ? "text-cyan-400" : "text-zinc-500 hover:text-cyan-400") +
              (target === "de" || target === "fr" ? " hidden sm:inline" : "")
            }
          >
            {LOCALE_LABEL[target]}
          </Link>
        );
      })}
    </span>
  );
}
