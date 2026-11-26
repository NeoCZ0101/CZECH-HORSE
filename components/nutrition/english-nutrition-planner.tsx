"use client";

import { RecipeKitchen } from "./recipe-kitchen";
import { FoodGuideLinks } from "./food-guide-links";
import {
  ArrowRight,
  Bot,
  X,
} from "lucide-react";
import { useState } from "react";

type EnglishFood = {
  id: string;
  name: string;
  category: string;
  image: string;
  summary: string;
  benefits: string[];
  cautions: string[];
  origin: string;
  tags: string[];
};
type PlanItem = { foodId: string; meal: "Breakfast" | "Lunch" | "Dinner" };
const foods: EnglishFood[] = [
  {
    id: "oats",
    name: "Oats",
    category: "Carbohydrates",
    image: "/food-oats.png",
    summary:
      "A practical breakfast base that can fit your goal, time and budget.",
    benefits: [
      "fibre and beta-glucans",
      "steady energy",
      "easy to combine with fruit or yoghurt",
    ],
    cautions: [
      "start with a smaller portion if digestion is sensitive",
      "check flavoured mixes for added sugar",
    ],
    origin:
      "Grown mainly across the temperate regions of Europe, Canada and the northern United States.",
    tags: ["breakfast", "energy", "budget"],
  },
  {
    id: "eggs",
    name: "Eggs",
    category: "Protein",
    image: "/food-eggs.png",
    summary:
      "An accessible protein source for a quick breakfast or a main meal.",
    benefits: [
      "complete proteins",
      "vitamin B12 and choline",
      "quick to prepare and filling",
    ],
    cautions: [
      "avoid with an egg allergy",
      "use good food hygiene and cook safely",
    ],
    origin:
      "Produced in many countries; the farming system and pack origin matter more than a generic label.",
    tags: ["protein", "breakfast", "quick"],
  },
  {
    id: "lentils",
    name: "Lentils",
    category: "Fibre",
    image: "/food-lentils.png",
    summary:
      "A quiet staple for filling meals that supports a plant-based and budget-aware routine.",
    benefits: [
      "plant protein and fibre",
      "folate and iron",
      "long shelf life and low cost",
    ],
    cautions: [
      "larger portions may cause bloating",
      "introduce gradually and cook thoroughly",
    ],
    origin:
      "Grown, among other places, in Canada, India, Türkiye and other dry regions.",
    tags: ["plant-based", "fibre", "budget"],
  },
  {
    id: "salmon",
    name: "Salmon",
    category: "Protein",
    image: "/food-salmon.png",
    summary:
      "A flavourful option when you want protein and quality fats in one meal.",
    benefits: [
      "protein and omega-3 fatty acids",
      "vitamin D and B12",
      "simple oven or pan preparation",
    ],
    cautions: [
      "price and quality vary by source",
      "avoid with a fish allergy and vary your fish choices",
    ],
    origin:
      "Wild and farmed salmon commonly comes from the North Atlantic, Pacific and Chile.",
    tags: ["protein", "omega-3", "main meal"],
  },
  {
    id: "avocado",
    name: "Avocado",
    category: "Fats",
    image: "/food-avocado.png",
    summary:
      "A creamy addition that brings unsaturated fats, flavour and satiety.",
    benefits: [
      "unsaturated fatty acids",
      "fibre and potassium",
      "easy to use in salads or spreads",
    ],
    cautions: ["energy-dense food", "portion size still matters for your goal"],
    origin:
      "Grown mainly in Mexico, Peru, Colombia, Kenya and other warm regions.",
    tags: ["fats", "fibre", "no cooking"],
  },
];
const meals: PlanItem["meal"][] = ["Breakfast", "Lunch", "Dinner"];

export function EnglishNutritionPlanner() {
  const [plan, setPlan] = useState<PlanItem[]>([
    { foodId: "oats", meal: "Breakfast" },
  ]);
  const [notice, setNotice] = useState(
    "Add food you want to try during the day.",
  );
  function toggle(foodId: string) {
    setPlan((current) =>
      current.some((item) => item.foodId === foodId)
        ? current.filter((item) => item.foodId !== foodId)
        : [...current, { foodId, meal: "Lunch" }],
    );
  }
  function apply(items: string[], message: string) {
    setPlan(
      items.map((id, index) => ({
        foodId: id,
        meal: meals[index % meals.length],
      })),
    );
    setNotice(message);
  }

  return (
    <main className="bg-surface">
      <section id="build" className="border-b border-sand bg-cream py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FoodGuideLinks language="en" />
        </div>
      </section>
      <RecipeKitchen language="en" isAdded={id => plan.some(entry => entry.foodId === id)} onAdd={(item) => {
        if (!plan.some(entry => entry.foodId === item)) toggle(item);
      }} />
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8">
          <div>
            <div className="border border-sand bg-mist px-5 py-5">
              <div className="flex gap-3">
                <Bot
                  className="mt-0.5 shrink-0 text-petrol"
                  aria-hidden
                  size={21}
                />
                <div>
                  <p className="text-sm font-semibold text-ink">
                    AI as a first draft
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    Later, you can enter your goal, budget, time, preferences
                    and restrictions. AI can suggest a version you review and
                    change.
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      apply(
                        ["oats", "eggs", "lentils"],
                        "An AI draft is ready locally as a demonstration of the future feature.",
                      )
                    }
                    className="mt-4 inline-flex min-h-10 items-center gap-2 bg-petrol px-3.5 py-2.5 text-sm font-semibold text-cream transition hover:bg-forest"
                  >
                    <Bot aria-hidden size={16} />
                    Generate AI draft
                    <ArrowRight aria-hidden size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <aside className="h-fit border border-forest bg-forest-deep text-cream lg:sticky lg:top-28">
            <div className="border-b border-cream/15 px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber">
                MY DAY
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold">
                Meal plan in progress
              </h2>
              <p className="mt-3 text-sm leading-6 text-cream/65">{notice}</p>
            </div>
            <div className="px-5 py-5">
              {plan.length === 0 ? (
                <p className="border border-dashed border-cream/25 px-4 py-6 text-sm leading-6 text-cream/65">
                  Nothing here yet. Add a main ingredient from a recipe.
                </p>
              ) : (
                <div className="grid gap-3">
                  {plan.map((item) => {
                    const food = foods.find(
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
                              {food.category}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => toggle(food.id)}
                            aria-label={`Remove ${food.name}`}
                            className="text-cream/50 transition hover:text-amber"
                          >
                            <X aria-hidden size={16} />
                          </button>
                        </div>
                        <select
                          value={item.meal}
                          onChange={(event) =>
                            setPlan((current) =>
                              current.map((entry) =>
                                entry.foodId === food.id
                                  ? {
                                      ...entry,
                                      meal: event.target
                                        .value as PlanItem["meal"],
                                    }
                                  : entry,
                              ),
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
                {plan.length} items ·{" "}
                {new Set(plan.map((item) => item.meal)).size} parts of the day
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
