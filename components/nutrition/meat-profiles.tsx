import Image from "next/image";
import { meatProfiles } from "@/lib/meat-profiles";
import { NutrientValues } from "./nutrient-values";
import styles from "./poultry-guide.module.css";

type Language = "cs" | "en";
const link = "font-semibold text-forest underline underline-offset-4";
export function MeatProfileLinks({animal, language}: {animal: string; language: Language}) {
  const items = meatProfiles.filter(p => p.animal === animal);
  return items.length ? <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">{items.map(p => <li key={p.key}><a className={link} href={"#" + p[language].id}>{p[language].name}</a></li>)}</ul> : null;
}

export function MeatProfiles({language}: {language: Language}) {
  const cs = language === "cs";
  return meatProfiles.map(p => {
    const t = p[language];
    const recipe = p.animal === "seafood" ? (cs ? "recept-" + t.id : t.id + "-recipe") : p.animal === "pork" ? (cs ? "recept-veprova-kotleta" : "pork-chop-recipe") : p.animal === "beef" ? (cs ? "recept-kyta-na-cibuli" : "braised-round-recipe") : (cs ? "recept-kyta-na-cesneku" : "garlic-leg-recipe");
    return <article key={p.key} id={t.id} tabIndex={-1} className={styles.profile + " scroll-mt-24 border-t border-sand"}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold">{t.name}</h2><p className="italic text-muted">{p.species}</p>
        <div className="mt-5 grid items-start gap-8 md:grid-cols-[minmax(15rem,0.7fr)_1fr]">
          <div className="max-w-md"><Image src={`/cut-${p.key}.webp`} width={418} height={418} alt={t.name} className="h-auto w-full" /><NutrientValues id={p.key} language={language} /></div>
          <div className="space-y-5">
            {[[cs?"Druh a původ":"Species and origin",t.origin],[cs?"Při nákupu":"At the butcher’s",t.buy],[cs?"V kuchyni":"In the kitchen",t.cook]].map(([h,s])=><div key={h}><h3 className="font-display text-xl font-semibold">{h}</h3><p className="mt-1 leading-6 text-muted">{s}</p></div>)}
            <a href={(cs?"/stravovani#":"/en/stravovani#")+recipe} className={link}>{cs?"Recept: ":"Recipe: "}{p.animal==="seafood"?t.name:p.animal==="pork"?(cs?"kotleta na cibuli":"pork chops with onions"):p.animal==="beef"?(cs?"dušená kýta na cibuli":"round braised with onions"):(cs?"kýta na česneku":"leg braised with garlic")}</a>
            <p className="text-xs text-muted">{cs?"Zdroje: ":"Sources: "}{p.animal==="seafood" ? <a className="underline" href="https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely">FDA</a> : <a className="underline" href="https://mze.gov.cz/public/portal/mze/legislativa/vap85945-5433">MZe</a>} · <a className="underline" href="https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures">FoodSafety.gov</a></p>
          </div>
        </div>
      </div>
    </article>;
  });
}
