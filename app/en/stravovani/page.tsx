import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EnglishNutritionPlanner } from "@/components/nutrition/english-nutrition-planner";

export const metadata: Metadata = {
  title: "Food and nutrition | Vlastní směr",
  description: "Build your own day, explore foods and find a more sustainable way to eat.",
};

export default function EnglishNutritionPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8"><Breadcrumbs items={[{ label: "Home", href: "/en" }, { label: "Whole-person map", href: "/en#mapa-cloveka" }, { label: "Food and nutrition" }]} /></div>
      <EnglishNutritionPlanner />
    </>
  );
}
