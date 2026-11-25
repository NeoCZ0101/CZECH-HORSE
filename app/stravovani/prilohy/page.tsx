import type { Metadata } from "next";
import { SideDishGuide } from "@/components/nutrition/side-dish-guide";

export const metadata: Metadata = { title: "Přílohy | Vlastní směr" };

export default function SideDishPage() {
  return <SideDishGuide language="cs" />;
}
