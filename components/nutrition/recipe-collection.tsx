import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { poultry } from "@/lib/poultry-data";
import { boiledEggs } from "@/lib/boiled-eggs";
import { porkChop } from "@/lib/pork-chop";
import { seafoodRecipes } from "@/lib/seafood-recipes";
import { braises } from "@/lib/braised-meat";
import { salmonRecipe } from "@/lib/salmon-recipe";

export function RecipeCollection({ language }: { language: "cs" | "en" }) {
  const cs = language === "cs";
  const listId = cs ? "recepty" : "recipes";
  const salmon = salmonRecipe[language];
  const recipes = [
    { ...porkChop[language], image: "/pork-chop-onion.webp", isPoultry: false },
    { ...boiledEggs[language], image: "/food-eggs.png", isPoultry: false },
    {
      ...salmon, image: "/food-salmon.png", href: salmon.guide + "#" + salmon.profile,
      ingredient: cs ? "Losos atlantský" : "Atlantic salmon", isPoultry: false,
    },
    ...[...braises[language], ...seafoodRecipes[language]].map(t => ({ ...t, isPoultry: false })),
    ...poultry.map(bird => {
      const t = bird[language];
      return {
        ...t, id: cs ? "recept-" + t.id : t.id + "-recipe",
        href: salmon.guide + "#" + t.id, ingredient: t.label, isPoultry: true,
        alt: t.title, image: `/poultry-${bird.key}-plate.webp`,
        time: `${bird.time} · ${bird.servings} ${cs ? "porce" : bird.servings === 1 ? "serving" : "servings"}`,
      };
    }),
  ];
  return (
    <section id={listId} className="mx-auto mt-12 max-w-7xl scroll-mt-24 px-4 sm:px-6 lg:px-8">
      <h2 className="border-t border-sand pt-8 font-display text-3xl font-semibold">{cs ? "Recepty" : "Recipes"}</h2>
      <ul className="mt-5 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map(r => (
          <li key={r.id} className="border-b border-sand">
            <a href={"#" + r.id} className="group flex h-full items-center gap-3 py-3 text-forest">
              <Image src={r.image} alt="" width={80} height={80} sizes="80px" className="size-20 shrink-0 object-cover" />
              <span><span className="block text-xs text-muted">{r.time}</span><span className="mt-1 block font-semibold group-hover:underline">{r.title}</span></span>
              <ArrowRight size={16} aria-hidden className="ml-auto shrink-0" />
            </a>
          </li>
        ))}
      </ul>
      {recipes.map(r => (
        <article key={r.id} id={r.id} tabIndex={-1} className="mt-8 hidden scroll-mt-24 border-t border-sand pt-6 target:block">
          <a href={"#" + listId} className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:underline"><ArrowLeft size={16} aria-hidden />{cs ? "Všechny recepty" : "All recipes"}</a>
          <h3 className="mt-4 font-display text-3xl font-semibold">{r.title}</h3>
          <p className="mt-1 text-sm font-semibold text-olive">{r.time}</p>
          <div className="mt-6 grid items-start gap-8 lg:grid-cols-[minmax(15rem,0.7fr)_1fr]">
            <div>
              <Image src={r.image} alt={r.alt} width={r.isPoultry ? 540 : 640} height={r.isPoultry ? 410 : 640} sizes="(min-width: 1024px) 36vw, 92vw" className="h-auto w-full max-w-md" />
              <a href={r.href} className="mt-3 inline-block font-semibold text-forest underline underline-offset-4">{cs ? "O surovině: " : "About the ingredient: "}{r.ingredient}</a>
            </div>
            <div>
              <h4 className="font-display text-xl font-semibold">{cs ? "Suroviny" : "Ingredients"}</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5">{r.ingredients.map(item => <li key={item}>{item}</li>)}</ul>
              <h4 className="mt-5 font-display text-xl font-semibold">{cs ? "Pomůcky" : "Equipment"}</h4>
              <p className="mt-2 text-muted">{r.tools}</p>
              <h4 className="mt-5 font-display text-xl font-semibold">{cs ? "Postup" : "Method"}</h4>
              <ol className="mt-2 list-decimal space-y-3 pl-5">{r.steps.map(step => typeof step === "string" ? <li key={step}>{step}</li> : <li key={step[0]}><strong>{step[0]}.</strong> {step[1]}</li>)}</ol>
              {r.isPoultry && <a href="https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures" className="mt-4 inline-block text-xs text-muted underline">{cs ? "Bezpečná teplota drůbeže: FoodSafety.gov" : "Safe poultry temperature: FoodSafety.gov"}</a>}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
