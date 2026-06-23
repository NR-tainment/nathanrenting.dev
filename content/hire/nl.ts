import type { HireDict } from "./types";

const nl: HireDict = {
  meta: {
    title: "Huur me in",
    description:
      "ZZP-inhuur via eenmanszaak, 2-3 dagen per week, €110-130/u. Agent-systemen, AI-automatisering, audio/mobile, EU-compliante infra.",
  },
  h1: "Huur me in",
  availability: "Beschikbaar · 2-3 dagen per week",
  what: {
    heading: "Wat ik voor klanten doe",
    lead: "Technische klussen waar het team klein is, of waar het team eigenlijk gewoon jij bent. De vorm waarin ik het beste werk:",
    bullets: [
      {
        strong: "Agent-systemen opzetten of uitbreiden.",
        body: "Tool-dispatch, agentskills.io-patroon, vault-backed memory, Claude-tooling die ook echt onderhoudbaar blijft.",
      },
      {
        strong: "AI-automatisering.",
        body: "Interne tooling, integraties, ERP-extensies, agent-augmented ops. Python-first.",
      },
      {
        strong: "Realtime audio en mobile.",
        body: "Rust audio-engines met FFI, cross-platform Android (NDK), React Native met betaal-flows. Tien jaar plus achtergrond als audio-producer, dus ik snap ook wat een muzikant of producer aan de UI-kant verwacht.",
      },
      {
        strong: "EU-compliante infrastructuur.",
        body: "Supabase EU, Sentry EU, Verwerkingsregister-discipline, DPA-praktijk.",
      },
    ],
  },
  practical: {
    heading: "Praktisch",
    marginNote: "(deze tabel is de afspraak. geen kleine lettertjes)",
    rows: [
      {
        label: "Beschikbaarheid",
        body: "2-3 dagen per week. Plek is op dit moment open.",
      },
      {
        label: "Tarief",
        highlight: "€110-130/u ZZP",
        body: ". Langere engagements bespreekbaar met korting.",
      },
      {
        label: "Inhuurvorm",
        body: "ZZP-inhuur via mijn eenmanszaak. NL-facturen met BTW.",
      },
      {
        label: "Locatie",
        body: "Remote-preferred vanuit Eindhoven. Heel NL bereikbaar voor kickoff of een kritische review.",
      },
      {
        label: "Stack",
        body: "Python, Rust, TypeScript, React Native, agentskills.io-stack (OpenClaw-compatibel · multi-model: Claude / Perplexity / ChatGPT / lokaal), Supabase, Stripe.",
      },
      {
        label: "Wat ik niet doe",
        body: "Pure consulting zonder bouwen. Generieke CMS-bouw. Fulltime detachering.",
      },
    ],
  },
  start: {
    heading: "Hoe te starten",
    steps: [
      {
        strong: "Schrijf me wat.",
        body: "Wat het probleem is, ruwe vorm van wat je zoekt, tijdshorizon. Eén alinea is genoeg.",
      },
      {
        strong: "Korte call (~30 min).",
        body: "Klikt het, scopen we het. Klikt het niet, zeg ik dat ook.",
      },
      {
        strong: "Eén betaalde week eerst.",
        body: "Voor langere engagements: één week werken om het ritme te checken voordat we doortrekken.",
      },
    ],
  },
  contact: {
    heading: "Schrijf me wat",
    body: "Eén alinea is genoeg. Wat het probleem is, ruwe vorm van wat je zoekt, tijdshorizon. Ik reageer meestal binnen één werkdag.",
    marginNote: "(alles hierboven is hoe ik werk. geen verkooppraat)",
  },
};

export default nl;
