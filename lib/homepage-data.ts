export type HomeAreaPillar = "body" | "mind" | "bridge";

export type HomeArea = {
  id: string;
  pillar: HomeAreaPillar;
  title: string;
  shortTitle: string;
  description: string;
  topics: string[];
};

export const bodyAreas: HomeArea[] = [
  {
    id: "vlasy-a-vousy",
    pillar: "body",
    title: "Vlasy a vousy",
    shortTitle: "Vlasy a vousy",
    description: "Najít střih a péči, které odpovídají obličeji, vlasům, věku a každodennímu životu.",
    topics: ["účes", "stav vlasů", "vousy", "péče", "barber nebo kadeřník"],
  },
  {
    id: "plet-a-pece",
    pillar: "body",
    title: "Pleť a péče",
    shortTitle: "Pleť a péče",
    description: "Pochopit, co tvoje pleť skutečně potřebuje, bez zbytečně složité kosmetické rutiny.",
    topics: ["základní péče", "akné", "podráždění", "holení", "služby a produkty"],
  },
  {
    id: "telo-pohyb",
    pillar: "body",
    title: "Tělo, svaly a pohyb",
    shortTitle: "Pohyb a kondice",
    description: "Zlepšit fyzickou funkci těla podle skutečného výchozího stavu, ne podle fitness sociálních sítí, a podpořit ji spánkem a regenerací.",
    topics: ["síla", "kondice", "svaly", "pohyblivost", "držení těla", "spánek a regenerace", "bolesti", "trenér a fyzioterapie"],
  },
  {
    id: "stravovani",
    pillar: "body",
    title: "Stravování",
    shortTitle: "Stravování",
    description: "Najít způsob stravování, který odpovídá cíli, rozpočtu i běžnému životu.",
    topics: ["běžný jídelní režim", "hubnutí", "nabírání", "energie", "výživový poradce", "udržitelné změny"],
  },
  {
    id: "zuby-a-usmev",
    pillar: "body",
    title: "Zuby a úsměv",
    shortTitle: "Zuby a úsměv",
    description: "Řešit zdraví i vzhled zubů dřív, než se z malého problému stane drahá komplikace.",
    topics: ["zubní péče", "dentální hygiena", "vzhled zubů", "prevence", "vhodný zubař"],
  },
];

export const mindAreas: HomeArea[] = [
  {
    id: "psychicka-pohoda",
    pillar: "mind",
    title: "Psychická pohoda",
    shortTitle: "Psychická pohoda",
    description: "Lépe pochopit, co se děje, co může člověk začít měnit sám a kdy už dává smysl odborná pomoc.",
    topics: ["dlouhodobě špatná nálada", "stres", "přetížení", "úzkost", "vnitřní tlak", "psycholog nebo terapeut"],
  },
  {
    id: "komunikace",
    pillar: "mind",
    title: "Komunikace",
    shortTitle: "Komunikace",
    description: "Dokázat říct, co si myslíš a potřebuješ, bez zbytečného hraní role.",
    topics: ["vyjádření názoru", "naslouchání", "nervozita při rozhovoru", "obtížné rozhovory", "běžný kontakt"],
  },
  {
    id: "sebejistota",
    pillar: "mind",
    title: "Sebejistota a vystupování",
    shortTitle: "Sebejistota",
    description: "Nejde o to být nejhlasitější v místnosti. Jde o klidnější a jistější způsob, jak se projevovat.",
    topics: ["působení mezi lidmi", "hlas", "řeč těla", "nejistota", "stát si za svým"],
  },
  {
    id: "vztahy-a-hranice",
    pillar: "mind",
    title: "Vztahy a hranice",
    shortTitle: "Vztahy a hranice",
    description: "Rozlišit, co je zdravý kompromis a kde člověk dlouhodobě ustupuje proti sobě.",
    topics: ["nastavování hranic", "konflikty", "odmítnutí", "vztahy s okolím", "schopnost říct ne"],
  },
  {
    id: "socialni-kontakt",
    pillar: "mind",
    title: "Sociální kontakt a osamělost",
    shortTitle: "Sociální kontakt",
    description: "Hledat cestu k lidem bez návodu na manipulaci a bez předstírání cizí osobnosti.",
    topics: ["uzavírání se do sebe", "seznamování", "budování kontaktů", "osamělost", "fungování ve skupině"],
  },
  {
    id: "emoce-a-tlak",
    pillar: "mind",
    title: "Emoce a zvládání tlaku",
    shortTitle: "Emoce a tlak",
    description: "Lépe rozpoznat vlastní reakce a naučit se s nimi pracovat dřív, než začnou řídit celé chování.",
    topics: ["vztek", "frustrace", "strach", "zahlcení", "reakce pod tlakem"],
  },
];

export const founderMilestones = [
  { title: "Výchozí stav", text: "Popsat, co Davida omezuje dnes a co chce změnit jako první." },
  { title: "Co se právě řeší", text: "Vybrat jednu oblast a oddělit domněnky od konkrétního problému." },
  { title: "Navštívené služby", text: "Zaznamenat průběh, cenu, komunikaci a pro koho může služba dávat smysl." },
  { title: "Zkušenosti", text: "Srovnat očekávání s realitou a pojmenovat, co bylo užitečné i co ne." },
  { title: "Výsledky", text: "Sledovat změny v čase bez slibů rychlé proměny nebo univerzálního výsledku." },
  { title: "Další krok", text: "Navázat další oblastí podle toho, co se ukázalo jako důležité." },
] as const;

export const platformSteps = [
  { number: "01", title: "Popíšeš, co chceš řešit.", text: "Začínáš vlastní situací, ne názvem odbornosti." },
  { number: "02", title: "Zorientuješ se v možnostech.", text: "Rozlišíš, co si můžeš projít sám a kde už dává smysl pomoc." },
  { number: "03", title: "Najdeš vhodnou službu nebo odborníka.", text: "Až když víš, co hledáš, můžeš porovnat konkrétní možnosti." },
  { number: "04", title: "Získáš zkušenosti a sleduješ výsledek.", text: "Důležité jsou skutečné souvislosti, ne reklamní sliby." },
] as const;

export type FocusStatus = "Připravujeme" | "Právě testujeme" | "Hledáme odborníka" | "Zkušenost zveřejněna";

export const currentFocusAreas = [
  { title: "Vhodný účes a péče o vlasy", pillar: "Tělo", status: "Právě testujeme" as FocusStatus },
  { title: "Základní péče o pleť", pillar: "Tělo", status: "Připravujeme" as FocusStatus },
  { title: "Výchozí fyzický stav a kondice", pillar: "Tělo", status: "Právě testujeme" as FocusStatus },
  { title: "Stravovací režim", pillar: "Tělo", status: "Připravujeme" as FocusStatus },
  { title: "Zuby a dentální péče", pillar: "Tělo", status: "Hledáme odborníka" as FocusStatus },
  { title: "Psychická pohoda", pillar: "Psychika", status: "Připravujeme" as FocusStatus },
  { title: "Komunikace a vystupování", pillar: "Psychika", status: "Právě testujeme" as FocusStatus },
] as const;

export const visitorFormAreas = [...bodyAreas, ...mindAreas].map((area) => ({
  value: area.id,
  label: area.title,
  pillar: area.pillar,
}));
