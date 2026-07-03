export type ProjectCardContent = {
  href: string; // path without locale prefix
  title: string;
  oneLiner: string;
  tags: string[];
  status: string;
  externalUrl?: string;
};

export type ProjectsDict = {
  meta: { title: string; description: string };
  h1: string;
  introBefore: string; // text before the /patterns link
  introLinkLabel: string; // "/patterns"
  introAfter: string; // "."
  cards: {
    echo: ProjectCardContent;
    therapyvault: ProjectCardContent;
    audiolab: ProjectCardContent;
    audiolaunch: ProjectCardContent;
    captioncompass: ProjectCardContent;
    photoflow: ProjectCardContent;
    familykart: ProjectCardContent;
  };
  stealth: {
    label: string;
    marginNote: string;
    method: {
      category: string;
      status: string;
      part1: string;
      redacted1: string;
      part2: string;
      redacted2: string;
      part3: string;
    };
    note: string;
  };
};
