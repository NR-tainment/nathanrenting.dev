import type { CommonDict } from "./types";

// FR chrome — needed now so the nav/footer/switcher render in French on /fr.
const fr: CommonDict = {
  nav: {
    home: "Accueil",
    work: "Réalisations",
    services: "Services",
    patterns: "Patterns",
    about: "À propos",
    hire: "Me recruter",
  },
  footer: {
    inhuur: "Me recruter",
    builtWith: "Conçu en solo. Next.js, MDX, café. Source sur ",
    sourceLinkLabel: "github.com/NR-tainment",
    builtWithSuffix: ".",
  },
  switcher: {
    switchTo: {
      nl: "Passer au néerlandais",
      en: "Passer à l'anglais",
      de: "Passer à l'allemand",
      fr: "Passer au français",
    },
  },
};

export default fr;
