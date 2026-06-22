import type { AiAgentsDict } from "./types";

const de: AiAgentsDict = {
  meta: {
    title: "KI-Agenten bauen — freiberuflich, Niederlande und EU-remote",
    description:
      "KI-Agenten-Entwickler für den Mittelstand. LLM-Orchestrierung, Tool-Calling, RAG und Claude API. Produktionsreife Agenten vom Prompt bis zum funktionierenden Teil deines Produkts. Freelance-Einsatz, Eindhoven und EU-remote.",
  },
  eyebrow: "Leistung · freiberuflicher AI Engineer",
  h1Lead: "KI-Agenten bauen. ",
  h1Accent: "Produktion — keine Demo",
  h1Tail: ".",
  intro:
    "Ich baue KI-Agenten-Systeme, die wirklich laufen — end-to-end. LLM-Orchestrierung, Tool-Calling, RAG und die Integration in deinen bestehenden Stack. Solo, aus Eindhoven, verfügbar 2-3 Tage pro Woche für Kunden in den Niederlanden und der EU.",
  ctaPrimary: "Call vereinbaren →",
  ctaSecondary: "ECHO als Referenz ansehen",
  help: {
    heading: "Womit ich helfe",
    lead: "Die Projekte, bei denen ich den größten Mehrwert schaffe:",
    bullets: [
      {
        strong: "Agenten von Grund auf aufsetzen.",
        body: "LLM-Orchestrierung · Tool-Calling · Memory-Layer · die gesamte Architektur. Kein Chatbot, der nur redet, sondern ein Agent, der Aufgaben erledigt und dort weitermacht, wo du gestern aufgehört hast.",
      },
      {
        strong: "Bestehende LLM-Integration verbessern.",
        body: "Routing zwischen Modellen, niedrigere Kosten, niedrigere Latenz, höhere Zuverlässigkeit. Oft mit Multi-Tier-Fallback und lokalen Modellen für die günstigen Anfragen.",
      },
      {
        strong: "RAG auf deinen eigenen Dokumenten aufsetzen.",
        body: 'Embeddings, Chunking, Retrieval-Strategie, Evaluierung. Kein generisches "Load and Chat" — sondern abgestimmt auf deinen Korpus und deine Fragen.',
      },
      {
        strong: "Claude API-Integration.",
        body: "Tool-Use, MCP-Server, Streaming, Prompt Caching. Für Teams, die von einem Prototyp in die Produktion wollen, ohne in die üblichen Fallstricke zu geraten.",
      },
      {
        strong: "Workflow-Automatisierung mit Agenten.",
        body: "SDR-Agenten, Support-Flows, Rechnungsverarbeitung, Content-Pipelines. Mit den richtigen Guardrails und Monitoring, damit nichts stillschweigend kaputtgeht.",
      },
    ],
  },
  stack: {
    heading: "Der Stack, zu dem ich greife",
    leadHighlight: "Der Stack folgt dem Problem",
    leadAfter:
      ", aber das ist, was ich in der Praxis bei Agenten-Arbeit am häufigsten anfasse:",
    rows: [
      {
        label: "LLM",
        body: "Anthropic Claude (Sonnet · Haiku · Opus). Lokal Ollama (Qwen 2.5, Llama 3.2) für günstige Routen und Offline-Fallback.",
      },
      {
        label: "Backend",
        body: "Python und FastAPI. Async I/O · Tool-Registry · Streaming. Rust, wo Latenz zählt.",
      },
      {
        label: "Tooling",
        body: "Tool-Calling · MCP · agentskills.io-Pattern (OpenClaw-kompatibel). Multi-Tier-Fallback für Produktionszuverlässigkeit.",
      },
      {
        label: "Memory",
        body: "Obsidian-Vault als Context-Repository (Letta-Stil), ADD-only-Extraction, optional Qdrant für Vector-Recall.",
      },
      {
        label: "Infra",
        body: "Supabase EU · Cloudflare R2 · Sentry EU · Stripe. Vercel oder ein eigener VPS mit Coolify, wenn es passt.",
      },
      {
        label: "Nicht",
        body: "Kein Vendor-Lock-in ohne Grund. Kein LangChain-Spaghetti. Kein Agenten-Framework, wenn 100 Zeilen Python es auch tun.",
      },
    ],
  },
  proof: {
    heading: "Beweis — ECHO",
    marginNote: "(kein Pitch-Deck — live im Call)",
    p1: "Ich baue nicht nur für Kunden — ich baue für mich selbst. ECHO ist mein eigener Agenten-Orchestrator, der täglich auf meinem Schreibtisch läuft. Voice-first, geroutet zwischen lokalem Ollama und Claude, eigenes Gedächtnis in einem Obsidian-Vault, ein Live-HUD mit System-Stats. Zehn Jahre Audio-DNA darunter für die Voice-Ebene.",
    p2Before: "Was ECHO für die Kundenarbeit beweist: ",
    p2Highlight:
      "Ich weiß, wo Agenten in der Produktion brechen, und wie man das verhindert",
    p2After:
      ". Die Architektur-Entscheidungen, die du früh triffst (Memory-Layer, Routing, Tool-Registry, Fallback-Strategie), bestimmen, ob du in sechs Monaten noch mit der Codebase zufrieden bist — oder ob du von vorne anfängst.",
    link: "→ Über ECHO lesen",
  },
  forWho: {
    heading: "Für wen das am besten funktioniert",
    bullets: [
      {
        strong: "SaaS-Unternehmen",
        body: ", die ein KI-Feature in die Produktion bringen wollen, ohne ein festes Team einzustellen. Ein oder zwei Sprints von mir reichen oft, um es zum Laufen zu bringen.",
      },
      {
        strong: "Mittelstand mit interner Automatisierung.",
        body: " Agenten für Support, Sales-Development, Rechnungsverarbeitung, Content-Flows. Arbeit, die sonst liegen bleibt, weil es kein Team dafür gibt.",
      },
      {
        strong: "Solo-Gründer und kleine Teams",
        body: ", die die KI-Ebene unter ihrem Produkt wollen, aber lieber nicht die gesamte LLM-Ökonomie selbst durchdringen müssen.",
      },
    ],
  },
  how: {
    heading: "Wie es abläuft",
    marginNote: "(ehrlich = weniger Überraschungen später)",
    steps: [
      {
        strong: "Eine kurze Mail oder Nachricht.",
        body: "Was das Problem ist, eine grobe Vorstellung dessen, was du suchst, der Zeithorizont. Ein Absatz reicht.",
      },
      {
        strong: "Ein Call von 30 Minuten.",
        body: "Passt es, scopen wir es. Passt es nicht, sage ich das auch. ECHO zeige ich live, wenn du willst.",
      },
      {
        strong: "Zuerst eine bezahlte Woche.",
        body: "Für längere Engagements: eine Woche Arbeit, um den Rhythmus zu prüfen, bevor wir weitermachen.",
      },
    ],
  },
  cta: {
    heading: "Bereit loszulegen?",
    body: "Tarif, Verfügbarkeit und das Formular stehen auf der Hire-Seite. Verfügbar für Kunden in den Niederlanden und EU-remote, 2-3 Tage pro Woche, aus Eindhoven.",
    link: "→ Zu /hire (Tarif + Kontakt)",
  },
};

export default de;
