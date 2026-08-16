import type {
  Article,
  CommunityGroup,
  Event,
  Expert,
  LifeJourney,
  Service,
  Situation,
  SituationGuide,
  Topic,
  HomepageSituation,
} from "@/lib/types";

export const platformName = "Vlastní směr";

export const topics: Topic[] = [
  {
    id: "smer",
    label: "Směr a rozhodování",
    shortLabel: "Směr",
    description: "Hodnoty, rozhodování, změna směru a vlastní cíle."
  },
  {
    id: "psychika",
    label: "Psychika a vnitřní jistota",
    shortLabel: "Jistota",
    description: "Sebepoznání, hranice, stud, odmítnutí a práce s tlakem okolí."
  },
  {
    id: "komunikace",
    label: "Komunikace",
    shortLabel: "Komunikace",
    description: "Rozhovory, asertivita, konflikty, seznamování a žádost o pomoc."
  },
  {
    id: "prace",
    label: "Práce a schopnosti",
    shortLabel: "Práce",
    description: "Profesní jistota, učení v dospělosti a praktické dovednosti."
  },
  {
    id: "vztahy",
    label: "Vztahy a společenský život",
    shortLabel: "Vztahy",
    description: "Přátelství, partnerství, rodina, lokální okruh lidí a samota."
  },
  {
    id: "telo",
    label: "Tělo, pohyb a regenerace",
    shortLabel: "Tělo",
    description: "Pohyb, kondice, držení těla, spánek, regenerace a návrat k funkčnímu režimu."
  },
  {
    id: "zdravi",
    label: "Zdraví a prevence",
    shortLabel: "Zdraví",
    description: "Prevence, zuby, kůže, vlasy, spánek a správná návaznost na zdravotní péči."
  },
  {
    id: "strava",
    label: "Strava a energie",
    shortLabel: "Strava",
    description: "Jídlo, energie, návyky a udržitelný režim bez dalšího internetového extrému."
  },
  {
    id: "vzhled",
    label: "Osobní prezentace",
    shortLabel: "Prezentace",
    description: "Oblečení, vlasy, vousy, péče, úsměv a první dojem bez kopírování cizí image."
  },
  {
    id: "samostatnost",
    label: "Samostatnost a životní fungování",
    shortLabel: "Fungování",
    description: "Každodenní systém, domácnost, práce s časem a praktická soběstačnost."
  }
];

export const situations: Situation[] = [
  {
    id: "s-01",
    slug: "ziju-podle-ocekavani-ostatnich",
    title: "Žiju svůj život, nebo plním cizí představu?",
    description: "Možná děláš všechno správně. Jenže správně hlavně podle lidí kolem tebe.",
    areas: ["smer", "psychika", "komunikace"],
    stepCount: 7,
    materialCount: 6,
    nextStep: "Oddělit vlastní volbu od tlaku okolí.",
    relatedExpertTypes: ["psychoterapeut", "kouč pro rozhodování", "komunikační trenér"]
  },
  {
    id: "s-02",
    slug: "nevim-co-chci-delat",
    title: "Nevím, co vlastně chci.",
    description: "Někdy nechybí motivace. Jen ses tak dlouho řídil tím, co bys měl, že už skoro neslyšíš, co chceš ty.",
    areas: ["smer", "prace", "samostatnost"],
    stepCount: 6,
    materialCount: 5,
    nextStep: "Zmapovat hodnoty, energii a reálné možnosti.",
    relatedExpertTypes: ["kariérní poradce", "mentor profesní změny"]
  },
  {
    id: "s-03",
    slug: "necitim-se-jiste-mezi-lidmi",
    title: "Proč jsem mezi lidmi pořád ve střehu?",
    description: "Hlídáš každé slovo, reakci i výraz a často kontroluješ, jestli jsi dost dobrý.",
    areas: ["komunikace", "psychika", "vztahy"],
    stepCount: 5,
    materialCount: 7,
    nextStep: "Začít s malými rozhovory bez hraní role.",
    relatedExpertTypes: ["komunikační trenér", "psychoterapeut", "vedená skupina"]
  },
  {
    id: "s-04",
    slug: "neumim-nastavovat-hranice",
    title: "Proč se nedokážu ozvat včas?",
    description: "Mlčíš, přizpůsobíš se a až později zjistíš, kolik klidu a energie tě to stojí.",
    areas: ["psychika", "komunikace", "vztahy"],
    stepCount: 4,
    materialCount: 4,
    nextStep: "Nacvičit jednoduché věty pro běžné situace.",
    relatedExpertTypes: ["psychoterapeut", "trenér asertivity"]
  },
  {
    id: "s-05",
    slug: "necitim-se-dobre-ve-svem-tele",
    title: "Necítím se dobře ve svém těle.",
    description: "Nejde jen o váhu nebo oblečení. Potřebuješ rozlišit pohyb, zdraví, režim, stud a způsob, jak se sám vnímáš.",
    areas: ["telo", "zdravi", "psychika", "vzhled"],
    stepCount: 8,
    materialCount: 9,
    nextStep: "Oddělit zdravotní, funkční a vnitřní část situace.",
    relatedExpertTypes: ["fyzioterapeut", "osobní trenér", "nutriční terapeut", "psychoterapeut"]
  },
  {
    id: "s-06",
    slug: "neumim-navazovat-pratelstvi",
    title: "Neumím navazovat přátelství a vztahy",
    description: "Potkáváš lidi, ale z kontaktů se málokdy stane opravdový vztah.",
    areas: ["vztahy", "komunikace", "psychika"],
    stepCount: 5,
    materialCount: 5,
    nextStep: "Najít opakované prostředí a konkrétní pozvánky.",
    relatedExpertTypes: ["vedená skupina", "komunikační trenér"]
  },
  {
    id: "s-07",
    slug: "chci-zmenit-praci-nebo-smer",
    title: "Chci změnit práci nebo životní směr",
    description: "Současné fungování už nesedí, ale nechceš udělat chaotický skok do neznáma.",
    areas: ["prace", "smer", "samostatnost"],
    stepCount: 7,
    materialCount: 6,
    nextStep: "Rozdělit změnu na ověřitelné kroky.",
    relatedExpertTypes: ["kariérní poradce", "mentor", "lektor"]
  },
  {
    id: "s-08",
    slug: "nevim-jaky-styl-mi-odpovida",
    title: "Chci vypadat dobře, ale pořád jako já.",
    description: "Styl nemá zakrývat, kdo jsi. Má ti pomoct cítit se ve vlastním těle jistěji.",
    areas: ["vzhled", "samostatnost", "komunikace"],
    stepCount: 5,
    materialCount: 6,
    nextStep: "Pojmenovat pracovní, volnočasové a společenské situace.",
    relatedExpertTypes: ["stylista", "barber", "odborník na péči"]
  },
  {
    id: "s-09",
    slug: "mam-sen-ale-nedokazu-se-pohnout",
    title: "Vím, co chci. Proč se pořád nehýbu?",
    description: "Sen bývá bezpečný, dokud zůstává jen v hlavě. Teď je čas rozlišit překážku od zvyku čekat.",
    areas: ["smer", "prace", "psychika"],
    stepCount: 6,
    materialCount: 5,
    nextStep: "Převést sen na první test bez velkého rizika.",
    relatedExpertTypes: ["mentor projektu", "kouč pro rozhodování"]
  },
  {
    id: "s-10",
    slug: "chybi-mi-lide-se-kterymi-jsem-sam-sebou",
    title: "Jsem mezi lidmi, ale stejně se cítím sám.",
    description: "Společnost ještě neznamená blízkost. Možná potřebuješ lidi, před kterými nemusíš nic hrát.",
    areas: ["vztahy", "psychika", "komunikace"],
    stepCount: 6,
    materialCount: 4,
    nextStep: "Vybrat komunitní formát s malým tlakem na výkon.",
    relatedExpertTypes: ["moderovaná skupina", "komunikační trenér"]
  },
  {
    id: "s-11",
    slug: "zacinam-znovu",
    title: "Začínám znovu a připadám si pozadu",
    description: "Nový začátek bývá nejistý a často vypadá méně přesvědčivě než životy lidí kolem.",
    areas: ["smer", "samostatnost", "prace"],
    stepCount: 7,
    materialCount: 5,
    nextStep: "Postavit nový začátek z jednoho stabilního bodu.",
    relatedExpertTypes: ["kariérní poradce", "mentor profesní změny", "moderovaná skupina"]
  },
  {
    id: "s-12",
    slug: "zacinam-v-nove-praci",
    title: "Začínám v nové práci a připadám si neschopný.",
    description: "Nové prostředí, nejasná očekávání a chyby snadno vypadají jako důkaz, že na to nemáš.",
    areas: ["prace", "psychika", "komunikace", "vzhled"],
    stepCount: 7,
    materialCount: 6,
    nextStep: "Rozlišit běžné začátečnictví od konkrétní mezery v dovednostech.",
    relatedExpertTypes: ["mentor", "lektor praktických dovedností", "komunikační trenér", "kariérní poradce"]
  },
  {
    id: "s-13",
    slug: "stydim-se-usmat",
    title: "Stydím se usmát.",
    description: "Za úsměvem může být stav zubů, strach z návštěvy, finance i stud, který zůstává déle než samotný problém.",
    areas: ["zdravi", "vzhled", "psychika", "komunikace"],
    stepCount: 6,
    materialCount: 5,
    nextStep: "Pojmenovat, jestli teď potřebuješ informaci, zdravotní krok nebo podporu se studem.",
    relatedExpertTypes: ["dentální hygienista", "zubní lékař", "ortodontista", "psychoterapeut"]
  },
  {
    id: "s-14",
    slug: "odpoledne-nemam-energii",
    title: "Odpoledne už nemám žádnou energii.",
    description: "Než přidáš další doplněk nebo přísný režim, stojí za to projít spánek, jídlo, pohyb, stres i zdravotní souvislosti.",
    areas: ["strava", "telo", "zdravi", "samostatnost"],
    stepCount: 6,
    materialCount: 7,
    nextStep: "Sedm dní sledovat energii, spánek, jídlo a pracovní rytmus bez hodnocení.",
    relatedExpertTypes: ["nutriční terapeut", "praktický lékař", "fyzioterapeut"]
  },
  {
    id: "s-15",
    slug: "chci-zhubnout-bez-diety",
    title: "Chci zhubnout, ale nechci celý život držet dietu.",
    description: "Hledáš režim, který přežije práci, víkendy i horší den a nebude postavený na studu nebo zákazu všeho normálního.",
    areas: ["strava", "telo", "psychika", "zdravi"],
    stepCount: 7,
    materialCount: 6,
    nextStep: "Najít jeden opakovatelný návyk místo další krátkodobé diety.",
    relatedExpertTypes: ["nutriční terapeut", "osobní trenér", "psychoterapeut", "praktický lékař"]
  },
  {
    id: "s-16",
    slug: "odkladam-zubare",
    title: "Odkládám zubaře, protože se stydím za stav svých zubů.",
    description: "Čím déle návštěvu odkládáš, tím větší bývá strach z hodnocení, ceny i samotného ošetření.",
    areas: ["zdravi", "psychika", "samostatnost"],
    stepCount: 5,
    materialCount: 4,
    nextStep: "Zjistit stav bez závazku vyřešit všechno v jedné návštěvě.",
    relatedExpertTypes: ["zubní lékař", "dentální hygienista", "psychoterapeut"]
  },
  {
    id: "s-17",
    slug: "boli-me-zada",
    title: "Bolí mě záda a nevím, kde začít.",
    description: "Internet nabízí stovky cviků, ale nejdřív potřebuješ vědět, co je bezpečný začátek právě pro tvoji situaci.",
    areas: ["telo", "zdravi", "samostatnost"],
    stepCount: 5,
    materialCount: 5,
    nextStep: "Rozlišit varovné příznaky, pracovní zátěž a vhodný první typ konzultace.",
    relatedExpertTypes: ["fyzioterapeut", "praktický lékař", "osobní trenér"]
  },
  {
    id: "s-18",
    slug: "zacinam-cvicit-ale-nevydrzim",
    title: "Začnu cvičit, ale nikdy u toho nevydržím.",
    description: "Možná nepotřebuješ víc vůle. Možná je plán příliš velký, prostředí ti nesedí nebo nepočítá s běžným týdnem.",
    areas: ["telo", "psychika", "samostatnost"],
    stepCount: 6,
    materialCount: 5,
    nextStep: "Postavit nejmenší verzi pohybu, která má své místo v týdnu.",
    relatedExpertTypes: ["osobní trenér", "fyzioterapeut", "vedená skupina"]
  }
];

export const homepageSituations: HomepageSituation[] = [
  {
    slug: "ziju-podle-ocekavani-ostatnich",
    category: "Směr",
    title: "Žiju svůj život, nebo plním cizí představu?",
    description: "Možná děláš všechno správně, ale hlavně podle lidí kolem tebe. Zkus zjistit, co by zůstalo, kdybys jejich očekávání na chvíli odložil.",
    stepCount: 7,
    ctaLabel: "Podívat se na vlastní směr",
    tone: "forest",
    featured: true
  },
  {
    slug: "nevim-co-chci-delat",
    category: "Jasno",
    title: "Nevím, co vlastně chci.",
    description: "Někdy nechybí motivace. Jen ses tak dlouho řídil tím, co bys měl, že už skoro neslyšíš, co chceš ty.",
    stepCount: 6,
    ctaLabel: "Začít si dělat jasno",
    tone: "cream"
  },
  {
    slug: "necitim-se-jiste-mezi-lidmi",
    category: "Jistota",
    title: "Proč jsem mezi lidmi pořád ve střehu?",
    description: "Hlídáš každé slovo, reakci i výraz. Možná nepotřebuješ být zajímavější, ale méně kontrolovat, jestli jsi dost dobrý.",
    stepCount: 5,
    ctaLabel: "Cítit se mezi lidmi jistěji",
    tone: "sage"
  },
  {
    slug: "zacinam-v-nove-praci",
    category: "Práce",
    title: "Začínám v nové práci a připadám si neschopný.",
    description: "Nové prostředí, nejasná očekávání a chyby snadno vypadají jako důkaz, že na to nemáš. Začátečnictví ale není totéž co neschopnost.",
    stepCount: 7,
    ctaLabel: "Získat oporu v nové práci",
    tone: "cream",
    featured: true
  },
  {
    slug: "necitim-se-dobre-ve-svem-tele",
    category: "Tělo",
    title: "Necítím se dobře ve svém těle.",
    description: "Nejde jen o váhu nebo oblečení. Tělo, zdraví, režim, stud a osobní prezentace se často potkávají v jedné situaci.",
    stepCount: 8,
    ctaLabel: "Rozlišit, co skutečně potřebuji",
    tone: "sage"
  },
  {
    slug: "stydim-se-usmat",
    category: "Zdraví a stud",
    title: "Stydím se usmát.",
    description: "Možná řešíš stav zubů, strach z návštěvy, peníze i stud před lidmi. Nemusíš vědět, který odborník má přijít první.",
    stepCount: 6,
    ctaLabel: "Projít cestu bez odsuzování",
    tone: "forest"
  },
  {
    slug: "neumim-nastavovat-hranice",
    category: "Hranice",
    title: "Proč se nedokážu ozvat včas?",
    description: "Mlčíš, přizpůsobíš se a řekneš si, že o nic nejde. Jenže ono se to postupně sčítá. Hranice nemusí znamenat konflikt.",
    stepCount: 4,
    ctaLabel: "Naučit se říct, co potřebuji",
    tone: "cream"
  },
  {
    slug: "odpoledne-nemam-energii",
    category: "Energie",
    title: "Odpoledne už nemám žádnou energii.",
    description: "Než přidáš další doplněk nebo přísný režim, projdi spánek, jídlo, pohyb, stres i možné zdravotní souvislosti.",
    stepCount: 6,
    ctaLabel: "Najít příčinu bez extrému",
    tone: "sage"
  },
  {
    slug: "chybi-mi-lide-se-kterymi-jsem-sam-sebou",
    category: "Blízkost",
    title: "Jsem mezi lidmi, ale stejně se cítím sám.",
    description: "Společnost ještě neznamená blízkost. Možná nepotřebuješ více kontaktů, ale lidi, před kterými nemusíš pořád něco hrát.",
    stepCount: 6,
    ctaLabel: "Najít vlastní okruh lidí",
    tone: "cream"
  }
];

export const lifeJourneys: LifeJourney[] = [
  {
    slug: "zacinam-znovu",
    title: "Začínám znovu",
    startingPoint: "Něco skončilo nebo přestalo dávat smysl a potřebuješ se znovu opřít o realitu.",
    outcome: "Máš přehled o tom, co teď drží život pohromadě a jaký další krok má smysl.",
    duration: "4 týdny",
    areas: ["smer", "samostatnost", "psychika"],
    stages: [
      { title: "Zastavit tlak", description: "Nejdřív oddělíš akutní věci od představ okolí.", task: "Sepsat tři rozhodnutí, která teď nespěchají." },
      { title: "Zmapovat oporu", description: "Podíváš se na lidi, režim, peníze a zdraví jako na praktický základ.", task: "Vybrat jednu oblast, která potřebuje stabilizovat." },
      { title: "První vlastní krok", description: "Navrhneš malý krok, který jde udělat bez velké deklarace.", task: "Naplánovat test na příštích sedm dní." }
    ],
    recommendedContent: ["Když změna není selhání", "Rozhodnutí pod tlakem"],
    services: ["kariérní konzultace", "krátká psychoterapeutická konzultace"],
    community: "Muži, kteří začínají znovu"
  },
  {
    slug: "chci-zit-vice-podle-sebe",
    title: "Chci žít více podle sebe",
    startingPoint: "Funguješ, ale často podle pravidel, která sis sám nevybral.",
    outcome: "Dokážeš poznat, kdy se rozhoduješ podle sebe a kdy jen držíš roli.",
    duration: "6 týdnů",
    areas: ["smer", "psychika", "komunikace"],
    stages: [
      { title: "Vlastní a cizí očekávání", description: "Pojmenuješ, odkud přichází tlak a co je opravdu tvoje.", task: "Vybrat jednu situaci, kde říkáš ano ze zvyku." },
      { title: "Hranice v praxi", description: "Připravíš si jednoduché věty pro práci, rodinu a vztahy.", task: "Zkusit jednu větu bez omlouvání." },
      { title: "Životní volby", description: "Přesuneš pozornost od image k běžným rozhodnutím.", task: "Vybrat jednu věc, kterou přestaneš dělat kvůli dojmu." }
    ],
    recommendedContent: ["Jak poznat tlak okolí", "Hranice bez tvrdosti"],
    services: ["psychoterapie", "komunikační trénink"],
    community: "Jak mluvit otevřeněji a přitom zůstat sám sebou"
  },
  {
    slug: "stydim-se-usmat",
    title: "Od studu k úsměvu bez schovávání",
    startingPoint: "Kvůli zubům se méně usmíváš, odkládáš péči nebo se v kontaktu s lidmi hlídáš.",
    outcome: "Znáš stav, máš realistický plán péče a víš, jak pracovat se studem i během změny.",
    duration: "první plán za 3 týdny",
    areas: ["zdravi", "vzhled", "psychika", "komunikace"],
    stages: [
      { title: "Překážka bez soudu", description: "Oddělíš stav zubů, strach z návštěvy, finance a stud před lidmi.", task: "Napsat, co přesně ti dnes brání objednat se nebo usmát." },
      { title: "Zjistit skutečný stav", description: "První konzultace nebo dentální hygiena nahradí domněnky konkrétní informací.", task: "Vybrat pracoviště, které předem vysvětluje průběh a cenu." },
      { title: "Navazující plán", description: "Podle nálezu se zapojí zubní lékař, případně ortodontista, a vznikne pořadí kroků.", task: "Rozdělit péči podle priority, času a rozpočtu." },
      { title: "Život během změny", description: "Úsměv nemusí čekat na dokonalý výsledek. Pracuješ i s dlouhodobým studem a komunikací.", task: "Zkusit jednu situaci, ve které se přestaneš automaticky schovávat." }
    ],
    recommendedContent: ["Jak se objednat bez omlouvání", "Co čekat od dentální hygieny"],
    services: ["dentální hygiena", "zubní nebo ortodontická konzultace", "podpora při dlouhodobém studu"],
    community: "Zdravotní restart bez studu"
  },
  {
    slug: "zacinam-v-nove-praci",
    title: "Začínám v nové práci a připadám si neschopný",
    startingPoint: "Jsi v novém prostředí, neznáš všechna pravidla a každá chyba vypadá větší, než je.",
    outcome: "Víš, na co se ptát, co se doučit a jak působit upraveně bez hraní zkušenější role.",
    duration: "5 týdnů",
    areas: ["prace", "komunikace", "psychika", "vzhled"],
    stages: [
      { title: "Začátečnictví není verdikt", description: "Rozlišíš běžné učení, nejasné zadání a skutečnou mezeru v dovednosti.", task: "Sepsat tři věci, které už umíš, a tři konkrétní otázky." },
      { title: "Ptát se včas", description: "Připravíš si způsob, jak ověřit očekávání u vedoucího a získat použitelnou zpětnou vazbu.", task: "Domluvit si krátké sladění priorit." },
      { title: "Doučit přesně to, co chybí", description: "Kurz nebo mentor naváže na reálný úkol, ne na obecný pocit nedostatečnosti.", task: "Vybrat jednu dovednost a nejmenší praktický trénink." },
      { title: "Působit připraveně, ne převlečeně", description: "Pracovní oblečení a osobní prezentace podpoří situaci bez nové masky sebejistoty.", task: "Připravit dvě jednoduché pracovní kombinace na běžný týden." }
    ],
    recommendedContent: ["Jak se ptát v práci", "Začátečnictví není neschopnost", "První dojem bez přetvářky"],
    services: ["mentor profesní dovednosti", "komunikační trénink", "praktický styling do práce"],
    community: "Nová práce bez zbytečného přetvařování"
  },
  {
    slug: "odpoledne-nemam-energii",
    title: "Více energie bez dalšího extrému",
    startingPoint: "Odpoledne vypínáš, jíš nahodile a nevíš, zda za tím je režim, stres nebo zdraví.",
    outcome: "Máš jednoduchý obraz svého týdne, první udržitelnou změnu a víš, kdy zapojit zdravotníka.",
    duration: "4 týdny",
    areas: ["strava", "telo", "zdravi", "samostatnost"],
    stages: [
      { title: "Sedm dní bez sebekritiky", description: "Sleduješ spánek, jídlo, energii, pohyb a pracovní rytmus bez okamžité diety.", task: "Zapsat tři krátké body ráno, po obědě a večer." },
      { title: "Jeden stabilní bod", description: "Vybereš změnu, která může fungovat i v náročném týdnu.", task: "Upravit jedno jídlo, čas spánku nebo krátkou pauzu na pohyb." },
      { title: "Správný typ podpory", description: "Podle situace rozlišíš nutriční terapii, pohybovou konzultaci a lékařské vyšetření.", task: "Připravit stručný přehled potíží pro konzultaci." },
      { title: "Vyhodnotit, ne hádat", description: "Po dvou týdnech porovnáš energii a rozhodneš o dalším kroku podle reality.", task: "Nechat jen změny, které jsou užitečné a udržitelné." }
    ],
    recommendedContent: ["Co je normální jídlo", "Energie není jen vůle", "Kdy únavu řešit s lékařem"],
    services: ["nutriční terapie", "fyzioterapie nebo pohybová konzultace", "praktický lékař"],
    community: "Režim bez extrémů"
  },
  {
    slug: "prirozenejsi-mezi-lidmi",
    title: "Přirozenější mezi lidmi",
    startingPoint: "V kontaktu s lidmi příliš kontroluješ dojem a ztrácíš vlastní hlas.",
    outcome: "Máš několik jednoduchých způsobů, jak být v kontaktu bez hraní role.",
    duration: "4 týdny",
    areas: ["komunikace", "vztahy", "psychika"],
    stages: [
      { title: "Méně výkonu", description: "Z rozhovoru odstraníš tlak být zajímavý za každou cenu.", task: "Vést jeden rozhovor s cílem jen dobře naslouchat." },
      { title: "Malá otevřenost", description: "Naučíš se říct něco osobního bez přehnaného odhalování.", task: "Přidat jednu skutečnou větu místo neutrální odpovědi." },
      { title: "Opakovaný kontakt", description: "Vybereš prostředí, kde se vztahy mohou přirozeně vracet.", task: "Přihlásit se na jednu opakovanou aktivitu." }
    ],
    recommendedContent: ["Běžný rozhovor není test", "Jak navázat na první kontakt"],
    services: ["komunikační trénink", "malá vedená skupina"],
    community: "Brno: společné aktivity a nová přátelství"
  },
  {
    slug: "vzhled-ve-kterem-se-poznavam",
    title: "Vzhled, ve kterém se poznávám",
    startingPoint: "Chceš o sebe lépe pečovat, ale nechceš se převlékat za někoho jiného.",
    outcome: "Máš základ šatníku, péče a režimu, který odpovídá tvému životu.",
    duration: "3 týdny",
    areas: ["vzhled", "telo", "samostatnost"],
    stages: [
      { title: "Reálný týden", description: "Vzhled začneš řešit podle situací, které skutečně žiješ.", task: "Vypsat tři typické dny a co v nich potřebuješ." },
      { title: "Základ bez trendů", description: "Vybereš střihy, barvy a péči, které jsou udržitelné.", task: "Vyřadit pět kusů, které nenosíš nebo ti nesedí." },
      { title: "Tělo jako součást dojmu", description: "Přidáš pohyb, spánek a držení těla bez extrému.", task: "Nastavit dvacetiminutový pohyb třikrát týdně." }
    ],
    recommendedContent: ["Styl podle života, ne podle trendu", "Péče o pleť bez složitosti"],
    services: ["stylista", "barber", "fyzioterapeut"],
    community: "Vlastní styl bez honění trendů"
  },
  {
    slug: "od-samoty-k-okruhu-lidi",
    title: "Od samoty k vlastnímu okruhu lidí",
    startingPoint: "Chybí ti lidé, se kterými se vídáš pravidelně a bez přetvářky.",
    outcome: "Máš konkrétní plán, kde a jak budovat nový okruh kontaktů.",
    duration: "5 týdnů",
    areas: ["vztahy", "komunikace", "samostatnost"],
    stages: [
      { title: "Typ vztahu", description: "Rozlišíš známé, kamarády, oporu a společné aktivity.", task: "Pojmenovat, jaký typ kontaktu ti teď chybí nejvíc." },
      { title: "Místo opakování", description: "Vybereš prostředí, kde potkáš stejné lidi víc než jednou.", task: "Najít dvě lokální aktivity s pravidelným termínem." },
      { title: "Pozvánka", description: "Nacvičíš konkrétní pozvání bez tlaku na druhého.", task: "Pozvat jednoho člověka na jednoduchou aktivitu." }
    ],
    recommendedContent: ["Přátelství v dospělosti", "Jak z kontaktu vzniká vztah"],
    services: ["moderovaná skupina", "komunikační trénink"],
    community: "Brno: společné aktivity a nová přátelství"
  },
  {
    slug: "od-snu-ke-konkretum",
    title: "Od snu ke konkrétním krokům",
    startingPoint: "Máš vlastní nápad, ale zatím žije hlavně v hlavě.",
    outcome: "Víš, jak udělat první test, co měřit a koho požádat o zpětnou vazbu.",
    duration: "4 týdny",
    areas: ["smer", "prace", "komunikace"],
    stages: [
      { title: "Jádro nápadu", description: "Oddělíš touhu, image a skutečnou potřebu.", task: "Napsat jednu větu, komu má nápad pomoct." },
      { title: "Malý test", description: "Navrhneš ověřitelný krok bez velké investice.", task: "Oslovit pět lidí s konkrétní otázkou." },
      { title: "Rozhodnutí", description: "Podle dat si řekneš, zda pokračovat, upravit směr nebo zavřít pokus.", task: "Vyhodnotit test ve třech bodech." }
    ],
    recommendedContent: ["Jak testovat nápad bez dramatu", "Zpětná vazba bez obrany"],
    services: ["mentor projektu", "lektor praktických dovedností"],
    community: "Společný projekt: první veřejný test"
  }
];

export const services: Service[] = [
  { id: "svc-01", name: "Úvodní orientační konzultace", type: "psychologická nebo kariérní konzultace", price: "900-1 500 Kč", delivery: "Online" },
  { id: "svc-02", name: "Trénink rozhovoru a hranic", type: "komunikační trénink", price: "1 200-2 000 Kč", delivery: "Hybridně" },
  { id: "svc-03", name: "Stylový základ bez trendů", type: "styling a péče", price: "2 500-4 500 Kč", delivery: "Osobně" },
  { id: "svc-04", name: "Režim pro sedavou práci", type: "fyzioterapie a kondiční plán", price: "1 000-1 800 Kč", delivery: "Hybridně" },
  { id: "svc-05", name: "První dentální restart", type: "dentální hygiena", price: "1 300-2 100 Kč", delivery: "Osobně" },
  { id: "svc-06", name: "Jídlo a energie bez extrému", type: "nutriční terapie", price: "1 200-1 900 Kč", delivery: "Hybridně" },
  { id: "svc-07", name: "Začít s pohybem bez přepálení", type: "osobní trénink", price: "900-1 500 Kč", delivery: "Osobně" }
];

export const articles: Article[] = [
  {
    slug: "jak-poznat-tlak-okoli",
    title: "Jak poznat, kdy se rozhoduješ podle tlaku okolí",
    type: "Článek",
    readingTime: "7 min",
    topic: "smer",
    summary: "Praktický rozbor běžných situací, ve kterých člověk zamění vlastní volbu za snahu nezklamat okolí."
  },
  {
    slug: "hranice-bez-tvrdosti",
    title: "Hranice bez tvrdosti",
    type: "Video",
    readingTime: "12 min",
    topic: "komunikace",
    summary: "Jak říct jasné ne a zároveň neztratit ohleduplnost ani vlastní klid."
  },
  {
    slug: "styl-podle-zivota",
    title: "Styl podle života, ne podle trendu",
    type: "Článek",
    readingTime: "6 min",
    topic: "vzhled",
    summary: "Základní způsob, jak přemýšlet o oblečení, péči a prvním dojmu bez honění cizí image.",
    commercial: true
  },
  {
    slug: "pratelstvi-v-dospelosti",
    title: "Přátelství v dospělosti nevzniká samo",
    type: "Pracovní list",
    readingTime: "20 min",
    topic: "vztahy",
    summary: "Krátké otázky a úkoly pro hledání míst, kde se vztahy mohou přirozeně opakovat."
  },
  {
    slug: "zacatecnictvi-neni-neschopnost",
    title: "Začátečnictví není neschopnost",
    type: "Článek",
    readingTime: "8 min",
    topic: "prace",
    summary: "Jak rozlišit skutečnou mezeru v dovednostech od toho, že se člověk teprve učí."
  },
  {
    slug: "co-je-normalni-jidlo",
    title: "Co je normální jídlo a co další internetový extrém",
    type: "Článek",
    readingTime: "9 min",
    topic: "strava",
    summary: "Jednoduchá orientace v běžném jídle, energii a návycích bez zákazů, zázračných režimů a morálního hodnocení."
  },
  {
    slug: "prvni-dentalni-hygiena-bez-studu",
    title: "První dentální hygiena bez studu",
    type: "Video",
    readingTime: "11 min",
    topic: "zdravi",
    summary: "Co se při návštěvě děje, na co se zeptat předem a jak pracovat se strachem z hodnocení."
  },
  {
    slug: "unava-neni-jen-slaba-vule",
    title: "Únava není jen slabá vůle",
    type: "Pracovní list",
    readingTime: "15 min",
    topic: "zdravi",
    summary: "Sedmidenní mapa spánku, jídla, pohybu a pracovního rytmu, která pomůže připravit další rozumný krok."
  },
  {
    slug: "prvni-pohyb-bez-prepaleni",
    title: "První pohyb bez přepálení",
    type: "Článek",
    readingTime: "7 min",
    topic: "telo",
    summary: "Jak začít dostatečně malým pohybem a kdy dává větší smysl fyzioterapeut než univerzální plán z internetu."
  }
];

export const experts: Expert[] = [
  {
    slug: "marek-vicha",
    name: "Marek Vícha",
    profession: "psychoterapeut ve výcviku a poradce pro životní změny",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    qualifications: [
      { kind: "Odborná kvalifikace", title: "Dlouhodobý psychoterapeutický výcvik", issuer: "akreditovaný institut" },
      { kind: "Profesní praxe", title: "7 let práce s dospělými klienty v tématech hranic a změny směru" }
    ],
    helpsWith: ["tlak okolí", "osobní hranice", "pocit zaseknutí", "životní změna"],
    goodFit: ["pro muže, kteří chtějí mluvit věcně a bez diagnóz", "pro člověka, který hledá souvislosti a malé kroky"],
    notFit: ["pro akutní krizové stavy", "pro požadavek na rychlou univerzální radu"],
    collaboration: "individuální konzultace 50 minut",
    serviceType: "psychoterapeutická konzultace",
    cooperation: "Individuální",
    price: "1 200 Kč / sezení",
    location: { city: "Praha", district: "Vinohrady", online: true },
    availability: "nová místa za 2-3 týdny",
    relatedContent: ["Jak poznat, kdy se rozhoduješ podle tlaku okolí", "Hranice bez tvrdosti"],
    relatedSituations: ["Žiju svůj život, nebo plním cizí představu?", "Proč se nedokážu ozvat včas?", "Stydím se usmát."],
    areas: ["psychika", "smer", "komunikace"],
    mode: "Hybridně"
  },
  {
    slug: "tomas-kral",
    name: "Tomáš Král",
    profession: "komunikační trenér",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
    qualifications: [
      { kind: "Profesní praxe", title: "10 let firemních a individuálních tréninků komunikace" },
      { kind: "Odborná kvalifikace", title: "výcvik v mediaci a vyjednávání" }
    ],
    helpsWith: ["asertivita", "rozhovory v práci", "konflikt", "otevřenější komunikace"],
    goodFit: ["pro člověka, který chce trénovat konkrétní věty", "pro praktický nácvik rozhovorů"],
    notFit: ["pro hlubokou terapeutickou práci", "pro hledání instantní charismatické masky"],
    collaboration: "individuální trénink nebo malá skupina",
    serviceType: "komunikační trénink",
    cooperation: "Obojí",
    price: "1 600 Kč / lekce",
    location: { city: "Brno", online: true },
    availability: "volné termíny v srpnu",
    relatedContent: ["Hranice bez tvrdosti"],
    relatedSituations: ["Proč jsem mezi lidmi pořád ve střehu?", "Proč se nedokážu ozvat včas?", "Začínám v nové práci a připadám si neschopný."],
    areas: ["komunikace", "prace", "vztahy"],
    mode: "Hybridně"
  },
  {
    slug: "jan-hruska",
    name: "Jan Hruška",
    profession: "stylista a barber konzultant",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80",
    qualifications: [
      { kind: "Profesní praxe", title: "12 let práce s pánským střihem, vousy a šatníkem" },
      { kind: "Osobní zkušenost", title: "dlouhodobý zájem o civilní styl pro běžný pracovní život" }
    ],
    helpsWith: ["základ šatníku", "vlasy a vousy", "první dojem", "styl bez trendů"],
    goodFit: ["pro muže, kteří chtějí jednoduchý a udržitelný vzhled", "pro lidi, kteří nechtějí luxusní estetiku"],
    notFit: ["pro výrazné módní experimenty", "pro kompletní image proměnu kvůli okolí"],
    collaboration: "osobní konzultace šatníku a péče",
    serviceType: "styling a péče",
    cooperation: "Individuální",
    price: "3 200 Kč / balíček",
    location: { city: "Praha", district: "Karlín", online: false },
    availability: "2 volné termíny tento měsíc",
    relatedContent: ["Styl podle života, ne podle trendu"],
    relatedSituations: ["Chci vypadat dobře, ale pořád jako já.", "Necítím se dobře ve svém těle.", "Začínám v nové práci a připadám si neschopný."],
    areas: ["vzhled", "samostatnost"],
    mode: "Osobně"
  },
  {
    slug: "eva-novotna",
    name: "Eva Novotná",
    profession: "fyzioterapeutka a kondiční poradkyně",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
    qualifications: [
      { kind: "Odborná kvalifikace", title: "Mgr. fyzioterapie", issuer: "FTVS UK" },
      { kind: "Profesní praxe", title: "8 let práce s bolestí zad, ergonomií a návratem k pohybu" }
    ],
    helpsWith: ["bolest zad", "sedavý režim", "návrat k pohybu", "držení těla"],
    goodFit: ["pro člověka, který chce funkční a dlouhodobý režim", "pro práci s tělem bez fitness extrémů"],
    notFit: ["pro závodní kulturistiku", "pro akutní zdravotní stav bez lékařského vyšetření"],
    collaboration: "diagnostika pohybu, plán a průběžná kontrola",
    serviceType: "fyzioterapie",
    cooperation: "Individuální",
    price: "1 400 Kč / konzultace",
    location: { city: "Olomouc", online: true },
    availability: "online konzultace do 10 dnů",
    relatedContent: ["První pohyb bez přepálení", "Únava není jen slabá vůle"],
    relatedSituations: ["Necítím se dobře ve svém těle.", "Bolí mě záda a nevím, kde začít.", "Začnu cvičit, ale nikdy u toho nevydržím.", "Odpoledne už nemám žádnou energii."],
    areas: ["telo", "zdravi", "samostatnost"],
    mode: "Hybridně"
  },
  {
    slug: "lucie-benesova",
    name: "Lucie Benešová",
    profession: "dentální hygienistka",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
    qualifications: [
      { kind: "Odborná kvalifikace", title: "Bc. dentální hygiena", issuer: "Masarykova univerzita" },
      { kind: "Profesní praxe", title: "6 let práce s klienty, kteří péči dlouho odkládali" }
    ],
    helpsWith: ["první návštěva bez studu", "dentální hygiena", "domácí péče", "orientace v dalším postupu"],
    goodFit: ["pro člověka, který potřebuje klidné vysvětlení krok po kroku", "pro návrat k péči po delší pauze"],
    notFit: ["pro zákroky, které patří zubnímu lékaři", "pro akutní bolest nebo otok bez rychlého lékařského vyšetření"],
    collaboration: "vstupní návštěva, hygiena a srozumitelný plán domácí péče",
    serviceType: "dentální hygiena",
    cooperation: "Individuální",
    price: "1 650 Kč / návštěva",
    location: { city: "Brno", district: "Veveří", online: false },
    availability: "nové termíny do 3 týdnů",
    relatedContent: ["První dentální hygiena bez studu"],
    relatedSituations: ["Stydím se usmát.", "Odkládám zubaře, protože se stydím za stav svých zubů."],
    areas: ["zdravi", "vzhled", "psychika"],
    mode: "Osobně"
  },
  {
    slug: "klara-vackova",
    name: "Klára Vacková",
    profession: "nutriční terapeutka",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    qualifications: [
      { kind: "Odborná kvalifikace", title: "Bc. nutriční terapie", issuer: "1. LF UK" },
      { kind: "Profesní praxe", title: "7 let ambulantní práce s běžným režimem, únavou a změnou hmotnosti" }
    ],
    helpsWith: ["energie během dne", "udržitelná změna jídla", "redukce bez extrémů", "orientace ve stravě"],
    goodFit: ["pro člověka, který chce vycházet z běžného týdne", "pro jasné rozlišení výživy a zdravotních souvislostí"],
    notFit: ["pro rychlou dietu s pevnými zákazy", "pro obtíže, které nejdřív potřebují akutní lékařské vyšetření"],
    collaboration: "vstupní rozbor, realistický plán a dvě navazující kontroly",
    serviceType: "nutriční terapie",
    cooperation: "Individuální",
    price: "1 500 Kč / vstupní konzultace",
    location: { city: "Praha", district: "Smíchov", online: true },
    availability: "online termín do 2 týdnů",
    relatedContent: ["Co je normální jídlo a co další internetový extrém", "Únava není jen slabá vůle"],
    relatedSituations: ["Odpoledne už nemám žádnou energii.", "Chci zhubnout, ale nechci celý život držet dietu.", "Necítím se dobře ve svém těle."],
    areas: ["strava", "zdravi", "telo"],
    mode: "Hybridně"
  },
  {
    slug: "david-prochazka",
    name: "David Procházka",
    profession: "osobní trenér pro začátečníky",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=80",
    qualifications: [
      { kind: "Odborná kvalifikace", title: "akreditovaný kurz instruktora fitness" },
      { kind: "Profesní praxe", title: "9 let práce s návratem k pohybu a první návštěvou posilovny" }
    ],
    helpsWith: ["první trénink", "udržitelný plán", "orientace v posilovně", "základ síly"],
    goodFit: ["pro úplného začátečníka bez potřeby výkonu", "pro plán postavený kolem práce a rodiny"],
    notFit: ["pro rehabilitaci akutního zranění", "pro léčbu zdravotního problému"],
    collaboration: "úvodní nácvik, jednoduchý plán a kontrola po dvou týdnech",
    serviceType: "osobní trénink",
    cooperation: "Obojí",
    price: "1 100 Kč / lekce",
    location: { city: "Ostrava", online: true },
    availability: "2 místa pro nové klienty",
    relatedContent: ["První pohyb bez přepálení"],
    relatedSituations: ["Začnu cvičit, ale nikdy u toho nevydržím.", "Necítím se dobře ve svém těle.", "Chci zhubnout, ale nechci celý život držet dietu."],
    areas: ["telo", "samostatnost", "psychika"],
    mode: "Hybridně"
  }
];

export const events: Event[] = [
  {
    slug: "otevreneji-bez-role",
    title: "Jak mluvit otevřeněji a přitom zůstat sám sebou",
    format: "malý vedený workshop",
    date: "12. 8. 2026",
    location: "Brno + online",
    description: "Praktický večer pro nácvik běžných vět, hranic a pozvánek bez přehrávání sebejistoty.",
    areas: ["komunikace", "vztahy", "psychika"]
  },
  {
    slug: "styl-bez-trendu",
    title: "Vlastní styl bez honění trendů",
    format: "praktický workshop",
    date: "20. 8. 2026",
    location: "Praha",
    description: "Civilní práce se šatníkem, vlasy a péčí podle reálného pracovního a společenského týdne.",
    areas: ["vzhled", "samostatnost"],
    commercial: true
  },
  {
    slug: "zacinam-znovu-setkani",
    title: "Muži, kteří začínají znovu",
    format: "moderovaná skupina",
    date: "každé druhé úterý",
    location: "Online",
    description: "Bez veřejných profilů a výkonu. Malá skupina zaměřená na orientaci, režim a další krok.",
    areas: ["smer", "psychika", "samostatnost"]
  },
  {
    slug: "zdravotni-krok-bez-studu",
    title: "První zdravotní krok bez studu",
    format: "online orientační večer",
    date: "27. 8. 2026",
    location: "Online",
    description: "Jak se připravit na odkládanou návštěvu, popsat obavy a zjistit další postup bez potřeby vyřešit všechno najednou.",
    areas: ["zdravi", "psychika", "komunikace"]
  },
  {
    slug: "prvni-posilovna-bez-vykonu",
    title: "Poprvé do posilovny bez tlaku na výkon",
    format: "malá praktická skupina",
    date: "5. 9. 2026",
    location: "Praha",
    description: "Seznámení s prostorem, základními pohyby a plánem, který nezačíná pěti tréninky týdně.",
    areas: ["telo", "psychika", "samostatnost"]
  }
];

export const communityGroups: CommunityGroup[] = [
  {
    slug: "nova-prace-bez-pretvarky",
    title: "Nová práce bez zbytečné přetvářky",
    format: "diskusní skupina",
    cadence: "1x týdně",
    city: "Online",
    description: "Pro muže, kteří řeší změnu práce, pohovory, nejistotu a vlastní způsob profesního růstu.",
    nextStep: "Přečíst pravidla skupiny a vybrat úvodní setkání.",
    areas: ["prace", "komunikace", "smer"]
  },
  {
    slug: "muzi-kteri-zacinaji-znovu",
    title: "Muži, kteří začínají znovu",
    format: "malá vedená skupina",
    cadence: "každé druhé úterý",
    city: "Online",
    description: "Místo pro praktické sdílení bez tlaku na rychlá řešení a veřejnou pózu.",
    nextStep: "Vyplnit krátký vstupní formulář pro moderátora.",
    areas: ["smer", "psychika", "samostatnost"]
  },
  {
    slug: "brno-aktivity-pratelstvi",
    title: "Brno: společné aktivity a nová přátelství",
    format: "lokální setkání",
    cadence: "2x měsíčně",
    city: "Brno",
    description: "Lehké aktivity, procházky, deskové hry a sport bez nutnosti být hned výřečný.",
    nextStep: "Vybrat nejbližší aktivitu podle energie a času.",
    areas: ["vztahy", "komunikace", "telo"]
  },
  {
    slug: "mluvit-otevreneji",
    title: "Jak mluvit otevřeněji a přitom zůstat sám sebou",
    format: "tematická výzva",
    cadence: "14 dní",
    city: "Online",
    description: "Krátké úkoly pro běžné rozhovory, žádosti, odmítnutí a navazování kontaktu.",
    nextStep: "Začít prvním úkolem: jedna pravdivější odpověď.",
    areas: ["komunikace", "psychika", "vztahy"]
  },
  {
    slug: "vlastni-styl",
    title: "Vlastní styl bez honění trendů",
    format: "společný workshop",
    cadence: "měsíčně",
    city: "Praha",
    description: "Praktická práce se základem šatníku a péče pro muže, kteří nechtějí kopírovat cizí image.",
    nextStep: "Přinést tři kusy oblečení, které nosíš nejčastěji.",
    areas: ["vzhled", "samostatnost"]
  },
  {
    slug: "rezim-bez-extremu",
    title: "Režim bez extrémů",
    format: "čtyřtýdenní vedená skupina",
    cadence: "1x týdně",
    city: "Online",
    description: "Pro muže, kteří chtějí dát řád spánku, jídlu a pohybu bez soutěžení, zákazů a veřejného měření výkonu.",
    nextStep: "Vybrat jeden stabilní bod, který chceš během čtyř týdnů ověřit.",
    areas: ["strava", "telo", "samostatnost"]
  },
  {
    slug: "zdravotni-restart-bez-studu",
    title: "Zdravotní restart bez studu",
    format: "moderované setkání",
    cadence: "2x měsíčně",
    city: "Online",
    description: "Bez sdílení diagnóz a bez rad na dálku. Pro praktickou přípravu odkládaného zdravotního kroku a vzájemnou podporu.",
    nextStep: "Přečíst hranice skupiny a připravit jednu konkrétní překážku.",
    areas: ["zdravi", "psychika", "samostatnost"]
  }
];

export const situationGuides: Record<string, SituationGuide> = {
  "ziju-podle-ocekavani-ostatnich": {
    slug: "ziju-podle-ocekavani-ostatnich",
  intro:
    "Možná funguješ, plníš povinnosti a zvenku nevypadá nic dramaticky. Jenže čím dál častěji máš pocit, že rozhodnutí děláš hlavně proto, aby byl klid, aby někdo nebyl zklamaný nebo aby ses vešel do představy, která ti už nesedí.",
  signals: [
    "Často říkáš ano dřív, než si stihneš uvědomit, co chceš.",
    "Máš problém pojmenovat vlastní názor, když se liší od rodiny, partnerky, přátel nebo kolegů.",
    "Volíš bezpečnou roli, i když tě stojí energii.",
    "Při rozhodování přemýšlíš hlavně nad tím, kdo bude nespokojený.",
    "Máš pocit, že tvůj život je správný na papíře, ale ne uvnitř."
  ],
  reflectionQuestions: [
    "Které rozhodnutí bys udělal jinak, kdyby se nikdo nemohl urazit?",
    "Kde si pleteš ohleduplnost s povinností potlačit sebe?",
    "Kdo v tvém okolí snese tvoje pravdivější rozhodnutí a kdo ne?",
    "Co by byl malý krok podle sebe, který nikomu neubližuje?",
    "Kdy naposledy ses cítil přirozeně a nemusel nic dokazovat?"
  ],
  selfSteps: [
    "Vyber jednu běžnou situaci, ve které automaticky vyhovuješ. Neřeš zatím celý život.",
    "Napiš si dvě verze odpovědi: tu, kterou říkáš ze zvyku, a tu, která je pravdivější.",
    "Zkus pravdivější odpověď v nízkém riziku. Krátce, bez dlouhého obhajování.",
    "Po rozhovoru si zapiš, co se opravdu stalo, ne jen čeho ses bál.",
    "Opakuj u jedné hranice tak dlouho, dokud se nestane běžnější."
  ],
  expertTypes: [
    "Psychoterapeut nebo psycholog, pokud se téma pojí s dlouhodobým strachem, studem nebo úzkostí.",
    "Komunikační trenér, pokud potřebuješ hlavně nácvik konkrétních rozhovorů.",
    "Kariérní poradce, pokud se tlak okolí nejvíc projevuje v práci nebo volbě směru."
  ],
  helpNotice:
    "Pokud máš dlouhodobé úzkosti, výrazné propady nálady, myšlenky na sebepoškození, násilí doma nebo pocit, že situaci nezvládáš, je vhodné vyhledat odbornou psychologickou, psychoterapeutickou nebo zdravotní pomoc. Tato platforma ji nenahrazuje."
  },
  "stydim-se-usmat": {
    slug: "stydim-se-usmat",
    intro:
      "Možná se usměješ jen opatrně, vyhýbáš se fotkám nebo už dlouho odkládáš návštěvu. Situace může mít praktickou zdravotní část, strach z ceny a ošetření i stud, který se přenesl do kontaktu s lidmi.",
    signals: [
      "Při smíchu si automaticky zakrýváš ústa nebo hlídáš výraz.",
      "Návštěvu odkládáš, protože čekáš kritiku za to, jak dlouho jsi nepřišel.",
      "Nevíš, zda začít dentální hygienou, zubním lékařem nebo jinou konzultací.",
      "Představuješ si cenu celého řešení dřív, než znáš skutečný stav.",
      "Stud zůstává i v situacích, kde si zubů pravděpodobně nikdo nevšímá."
    ],
    reflectionQuestions: [
      "Čeho se bojíš nejvíc: bolesti, hodnocení, ceny nebo výsledku vyšetření?",
      "Co o stavu zubů skutečně víš a co si zatím jen představuješ?",
      "Pomohlo by ti předem znát průběh první návštěvy a cenové rozpětí?",
      "Který první krok je zvládnutelný bez závazku vyřešit vše najednou?",
      "Jak stud ovlivňuje fotky, seznamování, práci nebo běžný rozhovor?"
    ],
    selfSteps: [
      "Sepiš zvlášť praktické překážky a obavy. Každá potřebuje jiný typ řešení.",
      "Vyber dvě pracoviště, která srozumitelně popisují první návštěvu, cenu a možnosti domluvy.",
      "Při objednání řekni jednu pravdivou větu: že jsi dlouho nebyl a potřebuješ klidné vysvětlení postupu.",
      "První cíl nastav jako zjištění stavu a pořadí kroků, ne okamžitou dokonalou proměnu.",
      "Pokud stud přetrvává i během péče, pracuj samostatně nebo s odborníkem také s jeho sociální částí."
    ],
    expertTypes: [
      "Dentální hygienista pro stav hygieny, nácvik domácí péče a orientaci v navazujících krocích.",
      "Zubní lékař pro vyšetření, diagnózu a léčebný plán; podle nálezu může doporučit další specializaci.",
      "Ortodontista, pokud je součástí situace postavení zubů nebo skusu a dává smysl odborné posouzení.",
      "Psychoterapeut nebo psycholog, pokud stud výrazně omezuje vztahy, práci nebo běžný kontakt i po zahájení péče."
    ],
    helpNotice:
      "Při akutní bolesti, otoku, úrazu, horečce nebo rychlém zhoršení nečekej na obsah platformy a obrať se na zubní zdravotní péči. Platforma neurčuje diagnózu ani nenahrazuje vyšetření."
  },
  "odpoledne-nemam-energii": {
    slug: "odpoledne-nemam-energii",
    intro:
      "Únava může souviset s běžným režimem, spánkem, jídlem, pohybem a stresem, ale někdy potřebuje zdravotní posouzení. Cílem není hádat příčinu z internetu, ale připravit užitečné informace a navazující krok.",
    signals: [
      "Po obědě se soustředíš jen silou a večer už nezbývá energie na běžný život.",
      "Jídlo přes den vynecháváš a doháníš ho pozdě večer.",
      "Spánek je krátký nebo nepravidelný, ale snažíš se to řešit hlavně kofeinem.",
      "Střídáš přísný režim s týdny, kdy se celý plán rozpadne.",
      "Únava se zhoršuje nebo trvá, i když ses pokusil upravit běžné návyky."
    ],
    reflectionQuestions: [
      "Kdy během dne energie nejčastěji padá a co tomu předchází?",
      "Jak vypadá běžný pracovní den, ne ideální den?",
      "Co se změnilo v posledních týdnech ve spánku, stresu, pohybu nebo jídle?",
      "Která malá změna je opakovatelná i ve špatném týdnu?",
      "Je únava nová, výrazná nebo spojená s dalšími potížemi, které patří k lékaři?"
    ],
    selfSteps: [
      "Sedm dní si třikrát denně stručně zaznamenej energii, jídlo, spánek a pohyb.",
      "Vyber jeden stabilní bod, třeba snídani, čas spánku nebo deset minut chůze.",
      "Nepřidávej současně přísnou dietu, intenzivní trénink a několik doplňků.",
      "Po týdnu si všimni vzorce a připrav si přehled pro vhodného odborníka.",
      "Pokud se stav nelepší nebo je neobvyklý, domluv zdravotní vyšetření."
    ],
    expertTypes: [
      "Nutriční terapeut pro odborné zhodnocení stravy a režimu včetně zdravotních souvislostí.",
      "Fyzioterapeut nebo vhodný pohybový odborník, pokud chybí bezpečný pohyb a regenerace.",
      "Praktický lékař, pokud je únava výrazná, nová, dlouhodobá nebo spojená s dalšími obtížemi."
    ],
    helpNotice:
      "Výraznou, novou nebo zhoršující se únavu a potíže jako dušnost, bolest na hrudi, mdloby či jiné neobvyklé příznaky řeš se zdravotníkem. Platforma nenahrazuje lékařské vyšetření."
  },
  "zacinam-v-nove-praci": {
    slug: "zacinam-v-nove-praci",
    intro:
      "Nová práce znamená neznámé postupy, vztahy i očekávání. Pocit neschopnosti často míchá běžné začátečnictví, chybějící informace, obavu ptát se a tlak působit zkušeněji, než se právě cítíš.",
    signals: [
      "Odkládáš otázku, protože máš pocit, že už bys odpověď měl znát.",
      "Jednu chybu bereš jako důkaz, že se na pozici nehodíš.",
      "Nevíš, podle čeho vedoucí hodnotí první týdny.",
      "Snažíš se působit jistě, místo abys včas ověřil zadání."
    ],
    reflectionQuestions: [
      "Co je běžná součást zaučení a co je skutečně tvoje odpovědnost?",
      "Které očekávání potřebuješ ověřit přímo u vedoucího?",
      "Jaká jedna dovednost by ti teď ulevila nejvíc?",
      "Kdo může být bezpečný člověk pro praktickou otázku nebo mentoring?"
    ],
    selfSteps: [
      "Sepiš otázky průběžně a jednou denně je ověř u správného člověka.",
      "Domluv si krátké sladění priorit místo čekání na velké hodnocení.",
      "Vyber jednu konkrétní dovednost k procvičení v reálném úkolu.",
      "Připrav si dvě jednoduché pracovní kombinace, ve kterých se cítíš upraveně a přirozeně."
    ],
    expertTypes: [
      "Mentor nebo zkušenější kolega pro konkrétní dovednosti a orientaci v praxi.",
      "Komunikační trenér pro otázky, zpětnou vazbu a náročné pracovní rozhovory.",
      "Kariérní poradce, pokud nejistota souvisí s širší volbou role nebo profesního směru."
    ],
    helpNotice:
      "Pokud pracovní tlak vede k dlouhodobé nespavosti, úzkosti, výraznému propadu nálady nebo pocitu, že situaci nezvládáš, vyhledej psychologickou, psychoterapeutickou nebo zdravotní pomoc."
  }
};
