import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://nathanrenting.dev"),
  title: {
    default: "Nathan Renting — Solo dev met audio-achtergrond. Agent-systemen, real-time audio.",
    template: "%s · nathanrenting.dev",
  },
  description:
    "Solo dev uit Eindhoven met 12 jaar entertainment- en audio-productie-achtergrond. Bouwt agent-systemen, real-time audio, en de infra eronder. ZZP-inhuur beschikbaar.",
  openGraph: {
    title: "Nathan Renting — Solo dev. Agent-systemen & real-time audio.",
    description:
      "Solo dev uit Eindhoven met 12 jaar entertainment- en audio-productie-achtergrond. Bouwt agent-systemen, real-time audio, en de infra eronder. ZZP-inhuur beschikbaar.",
    url: "https://nathanrenting.dev",
    siteName: "nathanrenting.dev",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathan Renting — Solo dev. Agent-systemen & real-time audio.",
    description:
      "Solo dev uit Eindhoven met 12 jaar entertainment- en audio-productie-achtergrond. Bouwt agent-systemen, real-time audio, en de infra eronder. ZZP-inhuur beschikbaar.",
  },
  authors: [{ name: "Jonathan David Renting" }],
  creator: "Jonathan David Renting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
