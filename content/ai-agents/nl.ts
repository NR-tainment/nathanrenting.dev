import type { AiAgentsDict } from "./types";

const nl: AiAgentsDict = {
  meta: {
    title: "AI agents bouwen — freelance, Nederland en EU remote",
    description:
      "AI agent ontwikkelaar voor het MKB. LLM-orchestratie, tool-calling, RAG en Claude API. Productie-agents van prompt tot werkend onderdeel van je product. ZZP-inhuur, Eindhoven en EU remote.",
  },
  eyebrow: "Dienst · freelance AI engineer",
  h1Lead: "AI agents bouwen. ",
  h1Accent: "Productie — niet demo",
  h1Tail: ".",
  intro:
    "Ik bouw AI agent systemen die echt draaien — end-to-end. LLM-orchestratie, tool-calling, RAG, en de integratie in je bestaande stack. Solo, vanuit Eindhoven, beschikbaar 2-3 dagen per week voor klanten in Nederland en de EU.",
  ctaPrimary: "Plan een call →",
  ctaSecondary: "Zie ECHO als referentie",
  help: {
    heading: "Waar ik mee help",
    lead: "De projecten waar ik het meeste waarde toevoeg:",
    bullets: [
      {
        strong: "Agent vanaf nul opzetten.",
        body: "LLM-orchestratie · tool-calling · geheugen-laag · de hele architectuur. Niet een chatbot die alleen praat, wel een agent die taken uitvoert en doorgaat waar je gisteren stopte.",
      },
      {
        strong: "Bestaande LLM-integratie verbeteren.",
        body: "Routing tussen modellen, kosten omlaag, latency omlaag, betrouwbaarheid omhoog. Vaak met multi-tier fallback en lokale modellen voor de goedkope vragen.",
      },
      {
        strong: "RAG opzetten op je eigen documenten.",
        body: 'Embeddings, chunking, retrieval-strategie, evaluatie. Geen generieke "load and chat" — wel geconfigureerd op jouw corpus en jouw vragen.',
      },
      {
        strong: "Claude API integratie.",
        body: "Tool-use, MCP-servers, streaming, prompt caching. Voor teams die van een prototype naar productie willen zonder de standaard valkuilen tegen te komen.",
      },
      {
        strong: "Workflow-automatisering met agents.",
        body: "SDR-agents, support-flows, factuurverwerking, content-pipelines. Met de juiste guardrails en monitoring zodat het niet stilletjes kapot gaat.",
      },
    ],
  },
  stack: {
    heading: "De stack die ik pak",
    leadHighlight: "Stack volgt het probleem",
    leadAfter:
      ", maar dit is wat ik in praktijk het meeste raak voor agent-werk:",
    rows: [
      {
        label: "LLM",
        body: "Anthropic Claude (Sonnet · Haiku · Opus). Lokaal Ollama (Qwen 2.5, Llama 3.2) voor goedkope routes en offline-fallback.",
      },
      {
        label: "Backend",
        body: "Python en FastAPI. Async I/O · tool-registry · streaming. Rust waar latency telt.",
      },
      {
        label: "Tooling",
        body: "Tool-calling · MCP · agentskills.io-patroon (OpenClaw-compatibel). Multi-tier fallback voor productie-betrouwbaarheid.",
      },
      {
        label: "Memory",
        body: "Obsidian-vault als context-repository (Letta-stijl), ADD-only extraction, optionele Qdrant voor vector-recall.",
      },
      {
        label: "Infra",
        body: "Supabase EU · Cloudflare R2 · Sentry EU · Stripe. Vercel of een eigen VPS met Coolify als het past.",
      },
      {
        label: "Niet",
        body: "Geen vendor lock-in zonder reden. Geen LangChain-spaghetti. Geen agent-framework als 100 regels Python het ook doet.",
      },
    ],
  },
  proof: {
    heading: "Bewijs — ECHO",
    marginNote: "(geen pitch-deck — live in een call)",
    p1: "Ik bouw niet alleen voor klanten — ik bouw voor mezelf. ECHO is mijn eigen agent-orchestrator die dagelijks draait op mijn bureau. Voice-first, routed tussen lokaal Ollama en Claude, eigen geheugen in een Obsidian-vault, live HUD met system stats. Tien jaar audio-DNA eronder voor de voice-laag.",
    p2Before: "Wat ECHO bewijst voor klantwerk: ",
    p2Highlight:
      "ik weet waar agents breken in productie, en hoe je dat voorkomt",
    p2After:
      ". De architectuur-keuzes die je vroeg maakt (memory-laag, routing, tool-registry, fallback-strategie) bepalen of je over zes maanden nog steeds blij bent met de codebase — of dat je opnieuw begint.",
    link: "→ Lees over ECHO",
  },
  forWho: {
    heading: "Voor wie dit het beste werkt",
    bullets: [
      {
        strong: "SaaS-bedrijven",
        body: " die een AI-feature naar productie willen krijgen zonder een vast team aan te nemen. Eén of twee sprints van mij is vaak genoeg om het werkend te krijgen.",
      },
      {
        strong: "MKB met interne automatisering.",
        body: " Agents voor support, sales-development, factuurverwerking, content-flows. Werk dat anders blijft liggen omdat er geen team voor is.",
      },
      {
        strong: "Solo founders en kleine teams",
        body: " die de AI-laag onder hun product willen, maar liever niet zelf de hele LLM-economie hoeven uit te zoeken.",
      },
    ],
  },
  how: {
    heading: "Hoe het werkt",
    marginNote: "(eerlijk = minder verrassingen later)",
    steps: [
      {
        strong: "Korte mail of bericht.",
        body: "Wat het probleem is, ruwe vorm van wat je zoekt, tijdshorizon. Eén alinea is genoeg.",
      },
      {
        strong: "Call van 30 minuten.",
        body: "Klikt het, scopen we het. Klikt het niet, zeg ik dat ook. ECHO laat ik live zien als je dat wil.",
      },
      {
        strong: "Eén betaalde week eerst.",
        body: "Voor langere engagements: één week werken om het ritme te checken voordat we doortrekken.",
      },
    ],
  },
  cta: {
    heading: "Klaar om te starten?",
    body: "Tarief, beschikbaarheid en het formulier staan op de hire-pagina. Beschikbaar voor klanten in Nederland en EU remote, 2-3 dagen per week, vanuit Eindhoven.",
    link: "→ Naar /hire (tarief + contact)",
  },
};

export default nl;
