import { RecipeCollection } from "@/components/nutrition/recipe-collection";
import type { Metadata } from "next";
import { FoodGuideLinks } from "@/components/nutrition/food-guide-links";

export const metadata: Metadata = {
  title: "Food and nutrition | Vlastní směr",
  description: "Ingredient guides covering meat and fish, side dishes, seasoning, produce, eggs, cheese and drinks.",
};

export default function EnglishNutritionPage() {
  return (
    <main id="build" className="border-b border-sand bg-cream py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FoodGuideLinks language="en" />
      </div>
      <RecipeCollection language="en" />
    </main>
  );
}
