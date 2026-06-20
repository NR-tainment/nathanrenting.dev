import type { CommonDict } from "./types";

// FR chrome â€” needed now so the nav/footer/switcher render in French on /fr.
const fr: CommonDict = {
  nav: {
    home: "Accueil",
    work: "RÃ©alisations",
    services: "Services",
    patterns: "Patterns",
    about: "Ã€ propos",
    hire: "Me recruter",
  },
  footer: {
    inhuur: "Me recruter",
    builtWith: "ConÃ§u en solo. Next.js, MDX, cafÃ©. Source sur ",
    sourceLinkLabel: "github.com/NR-tainment",
    builtWithSuffix: ".",
  },
  switcher: {
    switchTo: {
      nl: "Passer au nÃ©erlandais",
      en: "Passer Ã  lâ€™anglais",
      de: "Passer Ã  lâ€™allemand",
      fr: "Passer au franÃ§ais",
    },
  },
};

export default fr;
