import type { DienstenDict } from "./types";

const de: DienstenDict = {
  meta: {
    title: "Leistungen",
    description:
      "Freiberufliche KI- und Software-Entwicklung aus Eindhoven. Agentensysteme bauen, LLM-Integration, Claude API, RAG und EU-konforme Infrastruktur. Freelancer-Buchung, 2-3 Tage pro Woche.",
  },
  h1: "Leistungen",
  introBefore:
    "Was ich freiberuflich mache — konkret. Pro Leistung eine Seite, damit du schnell siehst, ob es passt. Für Ablauf und Tarif: siehe ",
  introLinkLabel: "/hire",
  introAfter: ".",
  responseTime: "Antwort innerhalb von 2 Werktagen.",
  marginNote: "(eine Liste, kein Sales-Funnel)",
  items: [
    {
      href: "/diensten/ai-agents-bouwen-nederland",
      title: "AI Agents bauen",
      oneLiner:
        "Produktions-Agents vom Prompt bis zum funktionierenden Teil deines Produkts. LLM-Orchestrierung, Tool-Calling, RAG. ECHO als Live-Referenz.",
      deliverable: "2–4 Wochen · Prototyp bis Produktion",
      tags: ["AI Agents", "LLM", "Python"],
    },
    {
      href: "/hire?topic=claude-api",
      title: "Claude API Integration",
      oneLiner:
        "Claude in deinen Stack bringen, ohne dass es Spielerei bleibt. Streaming, Tool Use, Kosten im Griff. Zwei Wochen, nicht zwei Quartale.",
      deliverable: "2 Wochen · Festpreis",
      tags: ["Claude API", "Anthropic", "TypeScript"],
      wip: true,
    },
    {
      href: "/hire?topic=rag",
      title: "RAG auf deinem eigenen Wissen",
      oneLiner:
        "Deine Dokumente, Tickets oder FAQ für ein LLM durchsuchbar. EU-gehosteter Vector Store, wenn du DSGVO ernst nimmst. Kein Hype, sondern Antworten.",
      deliverable: "1–3 Wochen · deine Daten, deine Infra",
      tags: ["RAG", "Embeddings", "EU-Infra"],
      wip: true,
    },
    {
      href: "/hire?topic=workflows",
      title: "LLM-Workflows automatisieren",
      oneLiner:
        "Aufnahme, Reporting, Klassifizierung — die Arbeit, die niemand mag. Ein Agent übernimmt, du machst den Rest deines Tages.",
      deliverable: "1–2 Wochen pro Flow",
      tags: ["Automation", "Workflows", "Agents"],
      wip: true,
    },
    {
      href: "/hire?topic=eu-infra",
      title: "DSGVO-konforme KI-Infrastruktur",
      oneLiner:
        "Hosting in Frankfurt oder Amsterdam, keine Daten in die USA. Für Teams, die DSGVO als Design-Entscheidung sehen, nicht als Häkchen.",
      deliverable: "1 Woche Setup · monatliches Review",
      tags: ["EU", "DSGVO", "Hosting"],
      wip: true,
    },
    {
      href: "/hire?topic=devflow",
      title: "Claude Code in deinem Dev-Flow",
      oneLiner:
        "MCP-Server, Custom Skills, Agents, die dein Team wirklich nutzt. Keine Demo-Magie, dafür weniger repetitive Arbeit pro Sprint.",
      deliverable: "1 Woche Pilot · dein Repo",
      tags: ["Claude Code", "MCP", "DX"],
      wip: true,
    },
  ],
  wipBadgeLabel: "Anfragen →",
  outro:
    "Eine Leistung hat eine ausgearbeitete Seite, die anderen folgen wöchentlich. Passt jetzt schon etwas? Mail oder Anruf über /hire — ein Gespräch ist immer schneller.",
};

export default de;
