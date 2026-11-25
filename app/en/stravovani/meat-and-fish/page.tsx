import type { Metadata } from "next";
import { MeatAndFishGuide } from "@/components/nutrition/meat-and-fish-guide";

export const metadata: Metadata = {
  title: "Meat and fish | Vlastní směr",
  description: "An overview of meat and fish in cultural, practical and nutrition context.",
};

export default function EnglishMeatAndFishPage() {
  return <MeatAndFishGuide language="en" />;
}
