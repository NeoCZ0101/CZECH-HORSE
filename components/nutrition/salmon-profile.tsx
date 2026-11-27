import Image from "next/image";
import { NutrientValues } from "./nutrient-values";

const content = {
  cs: {
    title: "Losos atlantský",
    alt: "Syrový filet z lososa bez kůže se světlým tukovým žilkováním",
    type: "Druh a původ",
    origin: "Na etiketě hledej latinský název Salmo salar. Označuje druh, nikoli způsob produkce: může jít o rybu z chovu i z volné přírody. Odkud pochází konkrétní filet, zjistíš z údaje o zemi chovu nebo oblasti odlovu.",
    buy: "Na co se dívat při nákupu",
    choice: "U chlazeného filetu hledej pevné maso a jemnou vůni. Výrazně kyselý nebo čpavkový pach je důvod rybu nekupovat. Samotný odstín růžové o čerstvosti nerozhoduje.",
    cook: "Z lednice na pánev",
    kitchen: "Zmrazený filet nech rozmrazit v lednici podle pokynů na obalu. Při opékání sleduj silnější konec: ten bývá hotový později než tenký okraj. Teploměr zasuň do nejsilnější části a ověř, že dosáhla 63 °C.",
    scope: "Hodnoty platí pro syrové maso bez kůže. Pro uzeného lososa se řiď údaji na jeho obalu.",
  },
  en: {
    title: "Atlantic salmon",
    alt: "A raw skinless salmon fillet with pale fat lines",
    type: "Species and origin",
    origin: "Look for Salmo salar on the label. It identifies the species, not the production method: both wild and farmed Atlantic salmon belong to it. Check the country of farming or the catch area to find out where a particular fillet came from.",
    buy: "Choosing a fillet",
    choice: "Look for firm flesh and a mild smell at the fish counter. Avoid fish with a sour or ammonia-like odour. The shade of pink alone cannot tell you whether a fillet is fresh.",
    cook: "From fridge to pan",
    kitchen: "Thaw frozen fillets in the fridge according to the pack instructions. When pan-frying, watch the thick end: it takes longer than the thin edge. Insert a food thermometer into the thickest part and check it reaches 63°C (145°F).",
    scope: "These figures refer to raw flesh without the skin. For smoked salmon, use the values on its pack.",
  },
};

export function SalmonProfile({ language }: { language: "cs" | "en" }) {
  const t = content[language];
  return (
    <section id={language === "cs" ? "losos" : "salmon"} className="scroll-mt-24 border-t border-sand py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-ink">{t.title}</h2>
        <p className="mt-1 italic text-muted">Salmo salar</p>
        <a href={language === "cs" ? "/stravovani#recept-losos" : "/en/stravovani#salmon-recipe"} className="mt-3 inline-block text-sm font-semibold text-forest underline underline-offset-4">{language === "cs" ? "Recept: pečený losos s bramborami" : "Recipe: roast salmon with potatoes"}</a>
        <div className="mt-6 grid items-start gap-8 md:grid-cols-[minmax(15rem,0.7fr)_1fr]">
          <div>
            <Image src="/guide-salmon.webp" width={660} height={440} sizes="(min-width: 768px) 32vw, 92vw" alt={t.alt} className="h-auto w-full max-w-sm" />
            <NutrientValues id="salmon" language={language} />
            <p className="px-4 text-xs leading-5 text-muted">{t.scope}</p>
          </div>
          <div className="space-y-5">
            {[[t.type, t.origin], [t.buy, t.choice], [t.cook, t.kitchen]].map(([title, text]) => (
              <div key={title}><h3 className="font-display text-xl font-semibold">{title}</h3><p className="mt-1 leading-6 text-muted">{text}</p></div>
            ))}
            <p className="text-sm text-muted">{language === "cs" ? "Zdroje: " : "Sources: "}
              <a className="underline" href="https://www.fisheries.noaa.gov/species/atlantic-salmon">NOAA Fisheries</a>{" · "}
              <a className="underline" href="https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely">FDA</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
