export type DienstItem = {
  href: string; // path without locale prefix
  title: string;
  oneLiner: string;
  tags: string[];
};

export type DienstenDict = {
  meta: { title: string; description: string };
  h1: string;
  introBefore: string; // text before /hire link
  introLinkLabel: string; // "/hire"
  introAfter: string; // "."
  marginNote: string;
  items: DienstItem[];
  outro: string;
};
