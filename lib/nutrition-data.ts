export type NutritionCategory = "Základ" | "Bílkoviny" | "Vláknina" | "Tuky";

export type NutritionFood = {
  id: string;
  name: string;
  category: NutritionCategory;
  image: string;
  summary: string;
  benefits: string[];
  cautions: string[];
  origin: string;
  season: string;
  portions: string;
  price: "nižší" | "střední" | "vyšší";
  tags: string[];
};

export const nutritionFoods: NutritionFood[] = [
  {
    id: "ovesne-vlocky",
    name: "Ovesné vločky",
    category: "Základ",
    image: "/food-oats.png",
    summary: "Praktický základ snídaně, který se dá upravit podle cíle, času i rozpočtu.",
    benefits: ["vláknina a beta-glukany", "stabilnější energie", "snadné spojení s ovocem nebo jogurtem"],
    cautions: ["u citlivého trávení začít menší porcí", "hlídat ochucené směsi s přidaným cukrem", "při celiakii vybírat certifikované bezlepkové vločky"],
    origin: "Pěstují se hlavně v mírném pásu Evropy, Kanady a severu USA.",
    season: "Skladovatelná plodina, dostupná celý rok.",
    portions: "50–80 g suchých vloček",
    price: "nižší",
    tags: ["snídaně", "energie", "rozpočet"],
  },
  {
    id: "vejce",
    name: "Vejce",
    category: "Bílkoviny",
    image: "/food-eggs.png",
    summary: "Dostupný zdroj bílkovin, který funguje jako rychlá snídaně i součást hlavního jídla.",
    benefits: ["plnohodnotné bílkoviny", "vitamin B12 a cholin", "rychlá příprava a dobrá sytivost"],
    cautions: ["u alergie na vejce je potřeba vynechat", "dbát na hygienu a dostatečnou tepelnou úpravu", "individuální zdravotní omezení řešit s odborníkem"],
    origin: "Chov probíhá v mnoha zemích; rozdíl dělá způsob chovu a původ konkrétního balení.",
    season: "Dostupná po celý rok.",
    portions: "1–3 vejce podle jídla",
    price: "nižší",
    tags: ["bílkoviny", "snídaně", "rychlé"],
  },
  {
    id: "cocka",
    name: "Čočka",
    category: "Vláknina",
    image: "/food-lentils.png",
    summary: "Nenápadná surovina pro sytá jídla, která dobře drží rozpočet i rostlinný jídelníček.",
    benefits: ["rostlinné bílkoviny a vláknina", "zdroj folátu a železa", "dlouhá trvanlivost a nízká cena"],
    cautions: ["větší porce mohou nadýmat", "začít postupně a dobře uvařit", "při specifické dietě hlídat celkovou skladbu bílkovin"],
    origin: "Pěstuje se mimo jiné v Kanadě, Indii, Turecku a dalších suchých oblastech.",
    season: "Sušená čočka je dostupná celý rok; čerstvá sklizeň se liší podle regionu.",
    portions: "60–90 g suché čočky",
    price: "nižší",
    tags: ["rostlinné", "vláknina", "rozpočet"],
  },
  {
    id: "losos",
    name: "Losos",
    category: "Tuky",
    image: "/food-salmon.png",
    summary: "Výrazná potravina pro jídla, kde chceš spojit bílkoviny, chuť a kvalitní tuky.",
    benefits: ["bílkoviny a omega-3 mastné kyseliny", "vitamin D a B12", "snadná příprava v troubě nebo na pánvi"],
    cautions: ["vyšší cena a rozdílná kvalita podle původu", "u alergie na ryby vynechat", "střídat druhy ryb a sledovat doporučení k původu"],
    origin: "Divoký i chovaný losos se dostává hlavně ze severního Atlantiku, Pacifiku a Chile.",
    season: "Dostupný celý rok; původ a způsob chovu se liší podle nabídky.",
    portions: "120–180 g porce",
    price: "vyšší",
    tags: ["bílkoviny", "omega-3", "hlavní jídlo"],
  },
];

export const nutritionPlans = [
  { title: "Jednoduchý začátek", label: "3 jídla · nízký rozpočet", items: ["Ovesné vločky", "Vejce", "Čočka"], description: "Základní den pro člověka, který nechce vařit složitě a chce nejprve získat rytmus." },
  { title: "Více bílkovin", label: "3 jídla · vyvážený rozpočet", items: ["Vejce", "Čočka", "Losos"], description: "Inspirace pro den, kde má každé hlavní jídlo jasný zdroj bílkovin." },
  { title: "Příprava na týden", label: "vaření do zásoby", items: ["Ovesné vločky", "Čočka", "Vejce"], description: "Návrh, který stojí na surovinách s dobrou trvanlivostí a jednoduchou přípravou." },
] as const;
