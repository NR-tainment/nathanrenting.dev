export type DienstItem = {
  href: string; // path without locale prefix
  title: string;
  oneLiner: string;
  deliverable: string; // one line: scope + timeline, e.g. "2 weken · vaste prijs"
  tags: string[];
  wip?: boolean; // renders "vraag aan" badge; href links to /hire?topic=...
};

export type DienstenDict = {
  meta: { title: string; description: string };
  h1: string;
  introBefore: string; // text before /hire link
  introLinkLabel: string; // "/hire"
  introAfter: string; // "."
  responseTime: string; // small reassurance line, e.g. "Antwoord binnen 2 werkdagen."
  marginNote: string;
  items: DienstItem[];
  wipBadgeLabel: string; // shown on cards where wip: true
  outro: string;
};
