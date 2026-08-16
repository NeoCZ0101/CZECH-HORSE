# Vlastní směr

První funkční návrh webové platformy pro muže, kteří chtějí lépe porozumět své aktuální životní situaci, rozvíjet schopnosti a postupně si stavět život podle sebe.

## Informační architektura

Primární navigace začíná situací člověka, ne oborem odborníka. Hlavní proud je: situace -> otázky a první kroky -> obsah -> vhodný typ podpory -> komunita nebo událost.

Sekundární organizace pracuje s oblastmi: směr, psychika, komunikace, práce, vztahy, tělo, vzhled a samostatnost.

## Routy

- `/` domovská stránka
- `/co-resim` přehled životních situací s filtrováním
- `/situace/ziju-podle-ocekavani-ostatnich` ukázkový detail životní situace
- `/cesty` životní cesty
- `/odbornici` katalog odborníků a služeb
- `/komunita` moderované skupiny a události
- `/pro-odborniky` B2B stránka s formulářem pro partnerství
- `/o-platforme` hodnotový základ platformy

## Komponenty

Projekt obsahuje znovupoužitelné komponenty: `Header`, `MobileNavigation`, `Footer`, `HeroSection`, `SituationCard`, `JourneyCard`, `ExpertCard`, `EventCard`, `CommunityGroupCard`, `ContentCard`, `FilterBar`, `Breadcrumbs`, `StepTimeline`, `TestimonialCard`, `PartnerCTA` a `NewsletterSection`.

## Mock data

Lokální data jsou v `lib/data.ts`. Typy jsou v `lib/types.ts` a pokrývají `Situation`, `LifeJourney`, `Expert`, `Service`, `Article`, `Event`, `CommunityGroup`, `Topic`, `Qualification` a `Location`.

## Vizuální systém

Základ tvoří tmavá neutrální plocha pro úvodní a navigační části, světlé dobře čitelné obsahové sekce, tlumený zelený akcent, ostrá typografie, čisté karty a střídmé mikrointerakce. Vizuál se drží dál od fitness, luxusních a agresivně maskulinních klišé.

## Spuštění

```bash
npm install
npm run dev
```

Výchozí lokální adresa je `http://localhost:3010`.
