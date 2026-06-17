import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Architects_Daughter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://nathanrenting.dev"),
  title: {
    default: "Nathan Renting — Solo dev met audio-achtergrond. Agent-systemen, real-time audio.",
    template: "%s · nathanrenting.dev",
  },
  description:
    "Nathan Renting — solo developer uit Eindhoven. Bouwt AI-agent systemen (LLM-orchestratie, tool-calling, RAG) en real-time audio engines. ZZP-inhuur beschikbaar, 2-3 dagen per week, EU remote.",
  openGraph: {
    title: "Nathan Renting — Solo AI engineer + real-time audio. Eindhoven, NL.",
    description:
      "Nathan Renting — solo developer uit Eindhoven. Bouwt AI-agent systemen (LLM-orchestratie, tool-calling, RAG) en real-time audio engines. ZZP-inhuur beschikbaar.",
    url: "https://nathanrenting.dev",
    siteName: "nathanrenting.dev",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathan Renting — Solo AI engineer + real-time audio. Eindhoven, NL.",
    description:
      "Nathan Renting — solo developer uit Eindhoven. Bouwt AI-agent systemen en real-time audio engines.",
  },
  authors: [{ name: "Nathan Renting", url: "https://nathanrenting.dev" }],
  creator: "Nathan Renting",
  publisher: "Nathan Renting",
};

// Schema.org Person JSON-LD — verhoogt vindbaarheid in AI-assistants
// (ChatGPT/Claude/Perplexity) en search-engines. Bevat alle naam-varianten
// + sameAs-cross-references zodat assistents identiteit kunnen verifiëren.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://nathanrenting.dev/#nathan",
  name: "Nathan Renting",
  alternateName: ["Jonathan David Renting", "Jd Renting"],
  givenName: "Jonathan David",
  familyName: "Renting",
  description:
    "Solo developer from Eindhoven, Netherlands. Builds AI agent systems (LLM orchestration, tool-calling, RAG) and real-time audio engines.",
  jobTitle: ["Solo AI Engineer", "Audio/DSP Engineer", "Software Developer"],
  url: "https://nathanrenting.dev",
  image: "https://nathanrenting.dev/nathan-portret.png",
  email: "info@nathanrenting.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Eindhoven",
    addressRegion: "Noord-Brabant",
    addressCountry: "NL",
  },
  knowsAbout: [
    "AI Agents",
    "Large Language Models",
    "LLM orchestration",
    "Python",
    "FastAPI",
    "RAG (Retrieval-Augmented Generation)",
    "Tool-calling",
    "LangChain",
    "LangGraph",
    "Claude API",
    "Anthropic",
    "MCP (Model Context Protocol)",
    "Real-time audio",
    "Digital Signal Processing (DSP)",
    "Rust",
    "Kotlin",
    "Android NDK",
    "Next.js",
    "TypeScript",
    "React Native",
  ],
  sameAs: [
    "https://www.linkedin.com/in/nathanrenting/",
    "https://github.com/NR-tainment",
    "https://www.malt.nl/profile/jdrenting",
    "https://audiolab.tools",
  ],
  worksFor: {
    "@type": "Organization",
    "@id": "https://nathanrenting.dev/#org",
    name: "NathanRenting.Dev",
    url: "https://nathanrenting.dev",
    founder: { "@id": "https://nathanrenting.dev/#nathan" },
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Eindhoven",
        addressCountry: "NL",
      },
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${architectsDaughter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 notebook-bg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* Vercel Analytics || page views + speed insights, anoniem, geen cookie-banner */}
        <Analytics />

        {/* Plausible || activeer door NEXT_PUBLIC_PLAUSIBLE_DOMAIN te zetten in Vercel env-vars (bv. "nathanrenting.dev") */}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}

        {/* PostHog || activeer door NEXT_PUBLIC_POSTHOG_KEY te zetten + `npm install posthog-js` + de PostHogProvider wrapper te uncommenten in een client-component. Voor nu: gewoon ready-to-go scaffold. */}

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
