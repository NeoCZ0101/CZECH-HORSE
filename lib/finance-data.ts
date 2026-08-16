export type FinanceArea = {
  id: string;
  pillar: "finance";
  title: string;
  shortTitle: string;
  description: string;
  topics: string[];
};

export const financeAreas: FinanceArea[] = [
  {
    id: "rozpocet-a-kalkulacka",
    pillar: "finance",
    title: "Rozpočet a kalkulačka",
    shortTitle: "Rozpočet a kalkulačka",
    description: "Udělat si jednoduchý přehled o tom, kolik každý měsíc přichází, odchází a zbývá.",
    topics: ["příjmy", "výdaje", "měsíční přehled", "kalkulačka"],
  },
  {
    id: "bydleni-a-hypoteka",
    pillar: "finance",
    title: "Bydlení a hypotéka",
    shortTitle: "Bydlení a hypotéka",
    description: "Zorientovat se v nákladech na bydlení, hypotéce, nájmu a dalších pravidelných závazcích.",
    topics: ["nájem", "hypotéka", "energie", "rezerva na bydlení"],
  },
  {
    id: "pojisteni-a-ochrana",
    pillar: "finance",
    title: "Pojištění a ochrana",
    shortTitle: "Pojištění a ochrana",
    description: "Pojmenovat, co má smysl chránit a kterým rizikům je dobré předcházet bez zbytečných produktů.",
    topics: ["pojištění", "rizika", "rodina", "majetek"],
  },
  {
    id: "prace-a-prijem",
    pillar: "finance",
    title: "Práce a příjem",
    shortTitle: "Práce a příjem",
    description: "Propojit pracovní směr, cenu vlastní práce a stabilitu příjmu s tím, co chceš dlouhodobě žít.",
    topics: ["zaměstnání", "výdělek", "změna práce", "vyjednávání"],
  },
  {
    id: "vzdelavani-a-rozvoj",
    pillar: "finance",
    title: "Vzdělávání a rozvoj",
    shortTitle: "Vzdělávání a rozvoj",
    description: "Vybírat kurzy, dovednosti a další kroky podle reálného přínosu, ne podle slibu rychlého výsledku.",
    topics: ["kurzy", "dovednosti", "kariéra", "dlouhodobý růst"],
  },
];
