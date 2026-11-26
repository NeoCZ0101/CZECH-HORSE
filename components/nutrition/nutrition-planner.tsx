"use client";

import { RecipeKitchen } from "./recipe-kitchen";
import { FoodGuideLinks } from "./food-guide-links";
import {
  ArrowRight,
  Bot,
  Sparkles,
  Trash2,
  Utensils,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  nutritionFoods,
  nutritionPlans,
} from "@/lib/nutrition-data";

type PlannerItem = { foodId: string; meal: "Snídaně" | "Oběd" | "Večeře" };
const meals: PlannerItem["meal"][] = ["Snídaně", "Oběd", "Večeře"];

export function NutritionPlanner() {
  const [planner, setPlanner] = useState<PlannerItem[]>([
    { foodId: nutritionFoods[0].id, meal: "Snídaně" },
  ]);
  const [notice, setNotice] = useState(
    "Přidej potraviny, které chceš během dne vyzkoušet.",
  );
  function toggleFood(foodId: string) {
    setPlanner((current) =>
      current.some((item) => item.foodId === foodId)
        ? current.filter((item) => item.foodId !== foodId)
        : [...current, { foodId, meal: "Oběd" }],
    );
    setNotice(
      "Tvůj den se průběžně skládá. U každé položky můžeš změnit jídlo.",
    );
  }

  function applyPlan(items: readonly string[], message: string) {
    setPlanner(
      items.map((name, index) => ({
        foodId:
          nutritionFoods.find((food) => food.name === name)?.id ??
          nutritionFoods[0].id,
        meal: meals[index % meals.length],
      })),
    );
    setNotice(message);
  }

  function updateMeal(foodId: string, meal: PlannerItem["meal"]) {
    setPlanner((current) =>
      current.map((item) =>
        item.foodId === foodId ? { ...item, meal } : item,
      ),
    );
  }


  return (
    <main className="bg-surface">
      <section id="sestavit" className="border-b border-sand bg-cream py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FoodGuideLinks language="cs" />
        </div>
      </section>

      <RecipeKitchen language="cs" isAdded={name => planner.some(entry => nutritionFoods.find(food => food.id === entry.foodId)?.name === name)} onAdd={(item) => {
        const food = nutritionFoods.find(entry => entry.name === item);
        if (food && !planner.some(entry => entry.foodId === food.id)) toggleFood(food.id);
      }} />
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-1 lg:px-8">
          <div>
            <div className="border border-sand bg-mist px-5 py-5 sm:px-6">
              <div className="flex gap-3">
                <Bot
                  className="mt-0.5 shrink-0 text-petrol"
                  aria-hidden
                  size={21}
                />
                <div>
                  <p className="text-sm font-semibold text-ink">
                    AI návrh jako první koncept
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    V další verzi zadáš cíl, rozpočet, čas, preference a
                    omezení. AI navrhne variantu, kterou si projdeš a upravíš.
                    Nenahrazuje odborné posouzení.
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      applyPlan(
                        ["Ovesné vločky", "Vejce", "Čočka"],
                        "AI koncept je připravený lokálně jako ukázka budoucí funkce.",
                      )
                    }
                    className="mt-4 inline-flex min-h-10 items-center gap-2 bg-petrol px-3.5 py-2.5 text-sm font-semibold text-cream transition hover:bg-forest"
                  >
                    <Bot aria-hidden size={16} />
                    Vygenerovat AI koncept
                    <ArrowRight aria-hidden size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <aside className="hidden">
            <div className="border-b border-cream/15 px-5 py-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber">
                    MŮJ DEN
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold">
                    Jídelníček v procesu
                  </h2>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-amber">
                  <Utensils aria-hidden size={18} />
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-cream/65">{notice}</p>
            </div>
            <div className="px-5 py-5">
              {planner.length === 0 ? (
                <div className="border border-dashed border-cream/25 px-4 py-6 text-sm leading-6 text-cream/65">
                  Zatím tu nic není. Přidej hlavní surovinu z receptu.
                </div>
              ) : (
                <div className="grid gap-3">
                  {planner.map((item) => {
                    const food = nutritionFoods.find(
                      (entry) => entry.id === item.foodId,
                    );
                    if (!food) return null;
                    return (
                      <div
                        key={item.foodId}
                        className="border border-cream/15 bg-cream/5 p-3"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-cream">
                              {food.name}
                            </p>
                            <p className="mt-1 text-xs text-cream/55">
                              {food.category} · {food.price} rozpočet
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleFood(food.id)}
                            aria-label={`Odebrat ${food.name}`}
                            className="text-cream/50 transition hover:text-amber"
                          >
                            <X aria-hidden size={16} />
                          </button>
                        </div>
                        <select
                          value={item.meal}
                          onChange={(event) =>
                            updateMeal(
                              food.id,
                              event.target.value as PlannerItem["meal"],
                            )
                          }
                          className="mt-3 min-h-9 w-full border border-cream/15 bg-forest px-2 text-xs text-cream outline-none focus:border-amber"
                        >
                          {meals.map((meal) => (
                            <option key={meal}>{meal}</option>
                          ))}
                        </select>
                      </div>
                    );
                  })}
                </div>
              )}
              <div className="mt-5 border-t border-cream/15 pt-4 text-xs leading-5 text-cream/55">
                {planner.length} položek ·{" "}
                {new Set(planner.map((item) => item.meal)).size} části dne
              </div>
            </div>
            <div className="border-t border-cream/15 px-5 py-5">
              <button
                type="button"
                onClick={() =>
                  applyPlan(
                    nutritionPlans[1].items,
                    "Vygenerovali jsme druhou inspiraci s větším důrazem na bílkoviny.",
                  )
                }
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 bg-amber px-4 py-3 text-sm font-semibold text-forest-deep transition hover:bg-cream"
              >
                <Sparkles aria-hidden size={17} />
                Vytvořit návrh dne
              </button>
              <p className="mt-3 text-center text-xs leading-5 text-cream/45">
                Koncept pro orientaci. Nezohledňuje individuální diagnózy ani
                léčbu.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
