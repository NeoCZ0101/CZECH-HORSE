import { RecipeCollection } from "@/components/nutrition/recipe-collection";
import type { Metadata } from "next";
import { FoodGuideLinks } from "@/components/nutrition/food-guide-links";

export const metadata: Metadata = {
  title: "Stravování | Vlastní směr",
  description: "Průvodci surovinami od masa a ryb přes přílohy a dochucení až po nápoje.",
};

export default function NutritionPage() {
  return (
    <main id="sestavit" className="border-b border-sand bg-cream py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FoodGuideLinks language="cs" />
      </div>
      <RecipeCollection language="cs" />
    </main>
  );
}
