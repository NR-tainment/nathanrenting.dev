import type { HireDict } from "./types";

const de: HireDict = {
  meta: {
    title: "Engagiere mich",
    description:
      "Freelance-Einsatz über Einzelunternehmen, 2-3 Tage pro Woche, 110-130 €/Std. Agenten-Systeme, KI-Automatisierung, Audio/Mobile, EU-konforme Infrastruktur.",
  },
  h1: "Engagiere mich",
  availability: "Verfügbar · 2-3 Tage pro Woche",
  what: {
    heading: "Was ich für Kunden mache",
    lead: "Technische Aufgaben, bei denen das Team klein ist – oder bei denen das Team eigentlich nur aus dir besteht. Die Form, in der ich am besten arbeite:",
    bullets: [
      {
        strong: "Agenten-Systeme aufbauen oder erweitern.",
        body: "Tool-Dispatch, das agentskills.io-Muster, vault-gestütztes Memory, Claude-Tooling, das auch wirklich wartbar bleibt.",
      },
      {
        strong: "KI-Automatisierung.",
        body: "Interne Tools, Integrationen, ERP-Erweiterungen, agent-augmented Ops. Python-first.",
      },
      {
        strong: "Echtzeit-Audio und Mobile.",
        body: "Rust-Audio-Engines mit FFI, plattformübergreifendes Android (NDK), React Native mit Bezahl-Flows. Über zehn Jahre Hintergrund als Audio-Producer, also verstehe ich auch, was ein Musiker oder Producer auf der UI-Seite erwartet.",
      },
      {
        strong: "EU-konforme Infrastruktur.",
        body: "Supabase EU, Sentry EU, Disziplin beim Verarbeitungsverzeichnis, DPA-Praxis.",
      },
    ],
  },
  practical: {
    heading: "Praktisch",
    marginNote: "(diese Tabelle ist die Abmachung. kein Kleingedrucktes)",
    rows: [
      {
        label: "Verfügbarkeit",
        body: "2-3 Tage pro Woche. Ein Platz ist aktuell frei.",
      },
      {
        label: "Honorar",
        highlight: "110-130 €/Std. freiberuflich",
        body: ". Längere Engagements verhandelbar mit Rabatt.",
      },
      {
        label: "Einsatzform",
        body: "Freelance-Einsatz über mein Einzelunternehmen. NL-Rechnungen mit Mehrwertsteuer.",
      },
      {
        label: "Standort",
        body: "Remote bevorzugt aus Eindhoven. Ganz die Niederlande erreichbar für ein Kickoff oder ein kritisches Review.",
      },
      {
        label: "Stack",
        body: "Python, Rust, TypeScript, React Native, agentskills.io-Stack (OpenClaw-kompatibel · Multi-Model: Claude / Perplexity / ChatGPT / lokal), Supabase, Stripe.",
      },
      {
        label: "Was ich nicht mache",
        body: "Reine Beratung ohne Bauen. Generischer CMS-Bau. Vollzeit-Personalvermittlung.",
      },
    ],
  },
  start: {
    heading: "Wie es losgeht",
    steps: [
      {
        strong: "Schreib mir kurz.",
        body: "Was das Problem ist, die grobe Form dessen, was du suchst, dein Zeithorizont. Ein Absatz reicht.",
      },
      {
        strong: "Kurzes Gespräch (~30 Min.).",
        body: "Passt es, scopen wir es. Passt es nicht, sage ich das auch.",
      },
      {
        strong: "Zuerst eine bezahlte Woche.",
        body: "Für längere Engagements: eine Woche Arbeit, um den Rhythmus zu prüfen, bevor wir weitermachen.",
      },
    ],
  },
  contact: {
    heading: "Schreib mir kurz",
    body: "Ein Absatz reicht. Was das Problem ist, die grobe Form dessen, was du suchst, dein Zeithorizont. Ich antworte meist innerhalb eines Werktags.",
    marginNote: "(alles oben ist, wie ich arbeite. kein Verkaufsgerede)",
  },
};

export default de;
