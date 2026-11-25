import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { NutritionPlanner } from "@/components/nutrition/nutrition-planner";

export const metadata: Metadata = {
  title: "Stravování | Vlastní směr",
  description: "Sestav si vlastní den, prozkoumej potraviny a najdi udržitelnější způsob stravování.",
};

export default function NutritionPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8"><Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-forest"><ArrowLeft aria-hidden size={17} />Zpět</Link></div>
      <NutritionPlanner />
    </>
  );
}
