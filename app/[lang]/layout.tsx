import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Geist, Geist_Mono, Architects_Daughter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LOCALES, OG_LOCALE, type Locale } from "@/content/config";
import { hasLocale, getDictionary } from "@/content/dictionaries";
import { buildAlternates, entityGraph, jsonLd, SITE_URL } from "@/lib/seo";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const architectsDaughter = Architects_Daughter({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Prerender exactly the four locales; anything else 404s.
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const locale = lang as Locale;

  const isNl = locale === "nl";
  // Per-locale root metadata. NL keeps the original Dutch defaults; the others
  // get an English-ish fallback until their dicts land (content-only; the
  // structural SEO — lang/canonical/hreflang/og:locale — is correct now).
  const title = isNl
    ? "Nathan Renting — AI-agent & real-time audio developer"
    : "Nathan Renting — AI agent & real-time audio developer";
  const description = isNl
    ? "Nathan Renting: solo developer uit Eindhoven (NL). Bouwt AI-agent systemen (LLM-orchestratie, RAG) en real-time audio engines. ZZP-inhuur, EU remote."
    : "Nathan Renting: solo developer from Eindhoven (NL). Builds AI-agent systems (LLM orchestration, RAG) and real-time audio engines. Available for contract (ZZP), EU remote.";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: "%s · nathanrenting.dev",
    },
    description,
    alternates: buildAlternates("", locale),
    openGraph: {
      title:
        "Nathan Renting — Solo AI engineer + real-time audio. Eindhoven, NL.",
      description,
      url: `${SITE_URL}/${locale}`,
      siteName: "nathanrenting.dev",
      locale: OG_LOCALE[locale],
      type: "website",
      images: [
        {
          url: "/nathan-portret.png",
          alt: "Nathan Renting — solo AI-agent & real-time audio developer, Eindhoven",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Nathan Renting — Solo AI engineer + real-time audio. Eindhoven, NL.",
      description,
      images: ["/nathan-portret.png"],
    },
    authors: [{ name: "Nathan Renting", url: SITE_URL }],
    creator: "Nathan Renting",
    publisher: "Nathan Renting",
  };
}

export default async function LocaleRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;

  const common = await getDictionary(locale, "common");

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${architectsDaughter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 notebook-bg">
        {/* Shared identity @graph (WebSite + Org + Person). Stable @id's across
            locales; inLanguage varies per locale. XSS-scrubbed JSON-LD. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(entityGraph(locale)) }}
        />

        {/* Vercel Analytics — page views + speed insights, anoniem, geen cookie-banner */}
        <Analytics />

        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}

        <Header locale={locale} common={common} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} common={common} />
      </body>
    </html>
  );
}
