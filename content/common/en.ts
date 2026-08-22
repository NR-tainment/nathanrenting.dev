import type { CommonDict } from "./types";

// EN chrome — needed now so the nav/footer/switcher render in English on /en.
const en: CommonDict = {
  nav: {
    home: "Home",
    work: "Work",
    services: "Services",
    patterns: "Patterns",
    about: "About",
    hire: "Hire",
  },
  footer: {
    inhuur: "Hire",
    kvkLabel: "KvK",
    vatLabel: "VAT ID",
    builtWith: "Built solo. Next.js, MDX, coffee. Source at ",
    sourceLinkLabel: "github.com/NR-tainment",
    builtWithSuffix: ".",
  },
  switcher: {
    switchTo: {
      nl: "Switch to Dutch",
      en: "Switch to English",
      de: "Switch to German",
      fr: "Switch to French",
    },
  },
};

export default en;
