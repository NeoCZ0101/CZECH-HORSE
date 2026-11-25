import type { Metadata } from "next";
import { MeatAndFishGuide } from "@/components/nutrition/meat-and-fish-guide";

export const metadata: Metadata = {
  title: "Maso a ryby | Vlastní směr",
  description: "Přehled druhů masa a ryb v kulturním, praktickém a výživovém kontextu.",
};

export default function MeatAndFishPage() {
  return <MeatAndFishGuide language="cs" />;
}
