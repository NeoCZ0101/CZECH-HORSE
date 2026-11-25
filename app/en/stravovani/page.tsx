import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EnglishNutritionPlanner } from "@/components/nutrition/english-nutrition-planner";

export const metadata: Metadata = {
  title: "Food and nutrition | Vlastní směr",
  description: "Build your own day, explore foods and find a more sustainable way to eat.",
};

export default function EnglishNutritionPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8"><Link href="/en" className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-forest"><ArrowLeft aria-hidden size={17} />Back</Link></div>
      <EnglishNutritionPlanner />
    </>
  );
}
