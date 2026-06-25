export type DienstItem = {
  href: string; // path without locale prefix
  title: string;
  oneLiner: string;
  tags: string[];
  wip?: boolean; // renders "vraag aan" badge; href links to /hire?topic=...
};

export type DienstenDict = {
  meta: { title: string; description: string };
  h1: string;
  introBefore: string; // text before /hire link
  introLinkLabel: string; // "/hire"
  introAfter: string; // "."
  marginNote: string;
  items: DienstItem[];
  wipBadgeLabel: string; // shown on cards where wip: true
  outro: string;
};
