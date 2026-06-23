import { NextResponse, type NextRequest } from "next/server";
import { LOCALES, DEFAULT_LOCALE } from "@/content/config";

/**
 * Proxy (Next 16's renamed Middleware).
 *
 * The site is fully locale-prefixed (Option A): every public page lives under
 * /nl, /en, /de or /fr. This proxy guarantees that invariant by 308-redirecting
 * any legacy unprefixed URL to its default-locale equivalent, so nothing that
 * used to resolve (/, /about, /projects/echo, ...) now 404s.
 *
 * Legacy /en, /en/* already match the new [lang] segment (en is a real locale),
 * so they pass through untouched — the old English homepage URL keeps working.
 *
 * 308 (permanent) preserves the request method and tells crawlers the move is
 * canonical, consolidating link equity onto the prefixed URLs.
 */

const PUBLIC_FILE = /\.[^/]+$/; // has a file extension (e.g. .png, .xml, .txt)

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already locale-prefixed? (/nl, /en, /de, /fr or /<locale>/...)
  const hasLocalePrefix = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocalePrefix) return NextResponse.next();

  // Redirect everything else (legacy unprefixed) to the default locale.
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Run on all paths EXCEPT Next internals, the API, metadata files and any
  // request that already targets a static file with an extension. sitemap.xml,
  // robots.txt, icons etc. must stay unprefixed.
  matcher: [
    "/((?!_next/|api/|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\..*).*)",
  ],
};
