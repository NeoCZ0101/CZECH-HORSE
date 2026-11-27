import { RecipeCollection } from "@/components/nutrition/recipe-collection";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FoodGuideLinks } from "@/components/nutrition/food-guide-links";

export const metadata: Metadata = {
  title: "Food and nutrition | Vlastní směr",
  description: "Ingredient guides covering meat and fish, side dishes, seasoning, produce, eggs, cheese and drinks.",
};

export default function EnglishNutritionPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8"><Link href="/en" className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-forest"><ArrowLeft aria-hidden size={17} />Back</Link></div>
      <main id="build" className="border-b border-sand bg-cream py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FoodGuideLinks language="en" />
        </div>
        <RecipeCollection language="en" />
      </main>
    </>
  );
}
