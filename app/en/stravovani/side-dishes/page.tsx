import type { Metadata } from "next";
import { SideDishGuide } from "@/components/nutrition/side-dish-guide";

export const metadata: Metadata = { title: "Side dishes | Vlastní směr" };

export default function SideDishPage() {
  return <SideDishGuide language="en" />;
}
