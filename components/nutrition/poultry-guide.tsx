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
              <a href={(cs ? "/stravovani#" : "/en/stravovani#") + recipeId} className={linkClass}>{cs ? "Recept: " : "Recipe: "}{t.title}</a>
            </div>
          </div>
        </div>
      </article>
    );
  });
}
