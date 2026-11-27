import { PoultryLinks, PoultryGuide } from "./poultry-guide";
import { CutMap } from "./cut-map";
import { MeatProfileLinks, MeatProfiles } from "./meat-profiles";
import { LegacyRecipeRedirect } from "./legacy-recipe-redirect";
import { RawMeatGallery } from "./raw-meat-gallery";
import { SalmonProfile } from "./salmon-profile";
import Link from "next/link";
import { ArrowLeft, CircleAlert, Globe2, Utensils } from "lucide-react";

type GuideLanguage = "cs" | "en";

const guideContent = {
  cs: {
    back: "Zpět na stravování",
    title: "Maso a ryby mají svůj příběh.",
    intro: "Nejde jen o to, co má kolik bílkovin. Důležitý je také původ, cena, dostupnost, způsob chovu, kulturní kontext a to, jakou roli může daná potravina hrát na talíři.",
    noteTitle: "Jak s přehledem pracovat",
    note: "Ber ho jako orientaci, ne jako žebříček hodnoty. Rozhodnutí může ovlivnit rozpočet, chuť, etika, dostupnost i tvoje vlastní potřeby.",
    related: "Zpět na stravování",
    cards: [
      { illustration: "poultry", alt: "Slepice, krocan a bílá kachna", title: "Drůbeží", subtitle: "Kuře · krůta · kachna · husa", text: "Jedna z nejrozšířenějších skupin masa na světě. Bývá cenově dostupná, rychle se připravuje a v mnoha kulturách nemá výrazné náboženské bariéry. Kuřecí a krůtí jsou lehčí volby, kachní a husí maso je výraznější a tučnější.", places: "Evropa, Amerika, Asie i Afrika", use: "rychlé obědy, pečení, vývary", caution: "U drůbeže je důležitá hygiena a důkladná tepelná úprava." },
      { illustration: "pork", alt: "Prase domácí z boku", title: "Vepřové", subtitle: "Prase domácí", text: "Výrazná součást evropské a východoasijské kuchyně. Nabízí širokou škálu řezů od libového masa po tučnější části a funguje v rychlé pánvi, pečení i dlouhém vaření.", places: "Čína, Evropa a východní Asie", use: "pečení, omáčky, fermentované výrobky", caution: "V islámském světě a judaismu je vepřové maso z náboženských důvodů vyloučené." },
      { illustration: "beef", alt: "Kráva s teletem", title: "Hovězí a telecí", subtitle: "Dospělý skot · tele", text: "Celosvětově známá skupina s velkým rozdílem mezi jednotlivými řezy a způsoby chovu. Od amerických steaků a argentinského asada po japonské Wagyu nabízí výraznou chuť, ale často i vyšší cenu.", places: "Amerika, Argentina, Evropa, Japonsko", use: "steaky, pomalé vaření, vývary", caution: "V Indii je hovězí z náboženských důvodů pro mnoho lidí tabu." },
      { illustration: "lamb", alt: "Ovce s jehnětem", title: "Skopové a jehněčí", subtitle: "Dospělá ovce · jehně", text: "Důležitá součást kuchyní Blízkého východu, Afriky, Středomoří, Nového Zélandu a Austrálie. Hodí se do oblastí, kde mohou ovce využívat i méně úrodné pastviny, a dobře snáší výrazné koření i pomalou přípravu.", places: "Blízký východ, Afrika, Středomoří, Austrálie", use: "dušení, grilování, kořeněná jídla", caution: "Jehněčí bývá jemnější, skopové má výraznější chuť a vyžaduje jiný přístup k přípravě." },
      { speciesAnchor: "losos", illustration: "seafood", alt: "Losos, kreveta a dvě slávky", title: "Ryby a mořské plody", subtitle: "Ryby · korýši · měkkýši", text: "Ryby rozšiřují výběr bílkovin o druhy s různým obsahem tuku, chutí i původem. Losos, sardinky nebo makrela přinášejí omega-3 mastné kyseliny, zatímco bílé ryby bývají jemnější a lehčí.", places: "Pobřeží, řeky, jezera a rybí farmy po celém světě", use: "pečení, pánev, gril, studená kuchyně", caution: "Střídej druhy a sleduj původ, způsob chovu a doporučení k větším dravým rybám." },
    ],
  },
  en: {
    back: "Back to food and nutrition",
    title: "Meat and fish have a story.",
    intro: "It is not only about protein. Origin, price, availability, farming, cultural context and the role a food plays on your plate all matter too.",
    noteTitle: "How to use this overview",
    note: "Treat it as orientation, not a ranking. Budget, taste, ethics, availability and your own needs can all shape a good choice.",
    related: "Back to food and nutrition",
    cards: [
      { illustration: "poultry", alt: "A hen, a turkey and a white duck", title: "Poultry", subtitle: "Chicken · turkey · duck · goose", text: "One of the most widespread meat groups in the world. It is often affordable, quick to prepare and accepted across many cultures. Chicken and turkey are lighter options, while duck and goose are richer and fattier.", places: "Europe, the Americas, Asia and Africa", use: "quick meals, roasting, stocks", caution: "Food hygiene and thorough cooking matter especially with poultry." },
      { illustration: "pork", alt: "A domestic pig in profile", title: "Pork", subtitle: "Domestic pig", text: "A major part of European and East Asian cooking. It offers a wide range of cuts, from lean meat to richer pieces, and works in quick pans, roasts and long cooking.", places: "China, Europe and East Asia", use: "roasting, sauces, fermented foods", caution: "Pork is excluded for religious reasons in Islam and Judaism." },
      { illustration: "beef", alt: "A cow and a calf", title: "Beef and veal", subtitle: "Adult cattle · calf", text: "A globally recognised group with major differences between cuts and farming systems. From American steaks and Argentine asado to Japanese Wagyu, it offers strong flavour and often a higher price.", places: "The Americas, Argentina, Europe and Japan", use: "steaks, slow cooking, stocks", caution: "In India, beef is taboo for many people for religious reasons." },
      { illustration: "lamb", alt: "A ewe and a lamb", title: "Mutton and lamb", subtitle: "Adult sheep · lamb", text: "Important in the cuisines of the Middle East, Africa, the Mediterranean, New Zealand and Australia. It suits regions where sheep can use less fertile pasture and works well with bold spices and slow cooking.", places: "Middle East, Africa, Mediterranean, Australia", use: "braising, grilling, spiced dishes", caution: "Lamb is usually milder; mutton has a stronger flavour and needs a different approach." },
      { speciesAnchor: "salmon", illustration: "seafood", alt: "A salmon, a shrimp and two mussels", title: "Fish and seafood", subtitle: "Fish · crustaceans · molluscs", text: "Fish widen the protein choices with different fat levels, flavours and origins. Salmon, sardines and mackerel provide omega-3 fatty acids, while white fish are often milder and lighter.", places: "Coasts, rivers, lakes and fish farms worldwide", use: "baking, pan cooking, grilling, cold dishes", caution: "Vary species and check origin, farming method and guidance for larger predatory fish." },
    ],
  },
} as const;

export function MeatAndFishGuide({ language }: { language: GuideLanguage }) {
  const content = guideContent[language];
  const homeHref = language === "en" ? "/en/stravovani" : "/stravovani";

  return (
    <main className="bg-surface">
      <section className="border-b border-sand bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href={homeHref} className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-forest"><ArrowLeft aria-hidden size={17} />{content.back}</Link>
          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.62fr)] lg:items-end">
            <div>
              <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.04] text-forest-deep sm:text-6xl">{content.title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">{content.intro}</p>
            </div>
            <RawMeatGallery language={language} />
          </div>
        </div>
      </section>
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8 xl:grid-cols-3">
          {content.cards.map((card) => (
            <article key={card.title} id={card.illustration === "poultry" ? (language === "cs" ? "drubez" : "poultry") : card.illustration === "pork" ? (language === "cs" ? "veprove" : "pork") : undefined} className="scroll-mt-24 min-w-0 overflow-hidden border border-sand bg-cream">
              <CutMap animal={card.illustration} alt={card.alt} language={language} />
              <div className="p-5 sm:p-6">
                <h2 className="font-display text-2xl font-semibold text-ink">{card.title}</h2>
                {card.illustration === "poultry" ? <PoultryLinks language={language} /> : <p className="mt-1 text-sm font-semibold text-olive">{card.subtitle}</p>}
                <p className="mt-3 text-sm leading-6 text-muted">{card.text}</p>
                <div className="mt-5 grid gap-3 border-t border-sand pt-4 text-sm">
                  <p className="flex gap-2 text-muted"><Globe2 className="mt-0.5 shrink-0 text-petrol" aria-hidden size={16} /><span><strong className="font-semibold text-ink">{language === "en" ? "Where:" : "Kde:"}</strong> {card.places}</span></p>
                  <p className="flex gap-2 text-muted"><Utensils className="mt-0.5 shrink-0 text-olive" aria-hidden size={16} /><span><strong className="font-semibold text-ink">{language === "en" ? "Works well for:" : "Hodí se na:"}</strong> {card.use}</span></p>
                  <p className="flex gap-2 text-muted"><CircleAlert className="mt-0.5 shrink-0 text-terracotta" aria-hidden size={16} /><span><strong className="font-semibold text-ink">{language === "en" ? "Keep in mind:" : "Pozor na:"}</strong> {card.caution}</span></p>
                </div>
                <MeatProfileLinks animal={card.illustration} language={language} />
                {"speciesAnchor" in card && <a className="mt-4 inline-block font-semibold text-forest underline underline-offset-4" href={`#${card.speciesAnchor}`}>{language === "cs" ? "Losos atlantský" : "Atlantic salmon"}</a>}
              </div>
            </article>
          ))}
        </div>
      </section>
      <PoultryGuide language={language} />
      <MeatProfiles language={language} />
      <SalmonProfile language={language} />
      <LegacyRecipeRedirect language={language} />
      <section className="border-t border-sand bg-mist py-12"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><div><p className="text-sm font-semibold text-terracotta">{content.noteTitle}</p><p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{content.note}</p></div><Link href={homeHref} className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-forest transition hover:text-terracotta">{content.related}<ArrowLeft className="rotate-180" aria-hidden size={16} /></Link></div></section>
    </main>
  );
}
