import { RecipeCollection } from "@/components/nutrition/recipe-collection";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FoodGuideLinks } from "@/components/nutrition/food-guide-links";

export const metadata: Metadata = {
  title: "Stravování | Vlastní směr",
  description: "Průvodci surovinami od masa a ryb přes přílohy a dochucení až po nápoje.",
};

export default function NutritionPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8"><Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-forest"><ArrowLeft aria-hidden size={17} />Zpět</Link></div>
      <main id="sestavit" className="border-b border-sand bg-cream py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FoodGuideLinks language="cs" />
        </div>
        <RecipeCollection language="cs" />
      </main>
    </>
  );
}
