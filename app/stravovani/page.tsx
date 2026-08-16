import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { NutritionPlanner } from "@/components/nutrition/nutrition-planner";

export const metadata: Metadata = {
  title: "Stravování | Vlastní směr",
  description: "Sestav si vlastní den, prozkoumej potraviny a najdi udržitelnější způsob stravování.",
};

export default function NutritionPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8"><Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Hlavní mapa člověka", href: "/#mapa-cloveka" }, { label: "Stravování" }]} /></div>
      <NutritionPlanner />
    </>
  );
}
