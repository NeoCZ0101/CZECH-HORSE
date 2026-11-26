import Image from "next/image";
import { poultry } from "@/lib/poultry-data";
import { NutrientValues } from "./nutrient-values";
import styles from "./poultry-guide.module.css";

type Props = { language: "cs" | "en" };
const linkClass = "font-semibold text-forest underline decoration-olive/50 underline-offset-4 hover:decoration-forest";

export function PoultryLinks({ language }: Props) {
  return (
    <ul className="mt-1 flex flex-wrap gap-x-2 text-sm">
      {poultry.map((bird, i) => (
        <li key={bird.key}>{i > 0 && <span aria-hidden className="mr-2 text-olive">·</span>}
          <a href={"#" + bird[language].id} className={linkClass}>{bird[language].label}</a>
        </li>
      ))}
    </ul>
  );
}

export function PoultryGuide({ language }: Props) {
  const cs = language === "cs";
  return poultry.map(bird => {
    const t = bird[language];
    const recipeId = cs ? "recept-" + t.id : t.id + "-recipe";
    return (
      <article key={bird.key} id={t.id} tabIndex={-1} className={styles.profile + " scroll-mt-24 border-t border-sand"}>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <a href={cs ? "#drubez" : "#poultry"} className={linkClass}>{cs ? "Zpět na drůbež" : "Back to poultry"}</a>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink">{t.label}</h2>
          <div className="mt-5 grid items-start gap-6 md:grid-cols-2">
            <Image src={`/poultry-${bird.key}-raw.webp`} alt={t.label + ": " + t.cut} width={540} height={410} sizes="(min-width: 768px) 36vw, 92vw" className="h-auto w-full max-w-md" />
            <div>
              <p className="mb-4 leading-6 text-muted">{t.intro}</p>
              <NutrientValues id={bird.key} language={language} />
              <a href={"#" + recipeId} className={linkClass}>{cs ? "Recept: " : "Recipe: "}{t.title}</a>
            </div>
          </div>
        </div>
        <section id={recipeId} tabIndex={-1} className="scroll-mt-24 border-y border-sand bg-cream">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-olive">{cs ? "Recept" : "Recipe"} · {bird.time} · {bird.servings} {cs ? "porce" : bird.servings === 1 ? "serving" : "servings"}</p>
            <h3 className="mt-2 font-display text-3xl font-semibold">{t.title}</h3>
            <div className="mt-6 grid items-start gap-7 lg:grid-cols-[minmax(15rem,0.7fr)_1fr]">
              <div>
                <Image src={`/poultry-${bird.key}-plate.webp`} alt={t.title} width={540} height={410} sizes="(min-width: 1024px) 36vw, 92vw" className="mb-3 h-auto w-full max-w-md" />
                <a href={"#" + t.id} className={linkClass}>{cs ? "Zpět k surovině" : "Back to the ingredient"}</a>
              </div>
              <div>
                <h4 className="font-display text-xl font-semibold">{cs ? "Suroviny" : "Ingredients"}</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5">{t.ingredients.map(item => <li key={item}>{item}</li>)}</ul>
                <h4 className="mt-5 font-display text-xl font-semibold">{cs ? "Pomůcky" : "Equipment"}</h4>
                <p className="mt-2 text-muted">{t.tools}</p>
                <h4 className="mt-5 font-display text-xl font-semibold">{cs ? "Postup" : "Method"}</h4>
                <ol className="mt-2 list-decimal space-y-3 pl-5">{t.steps.map(step => <li key={step}>{step}</li>)}</ol>
                <a href="https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures" className="mt-4 inline-block text-xs text-muted underline">{cs ? "Bezpečná teplota drůbeže: FoodSafety.gov" : "Safe poultry temperature: FoodSafety.gov"}</a>
              </div>
            </div>
          </div>
        </section>
      </article>
    );
  });
}
