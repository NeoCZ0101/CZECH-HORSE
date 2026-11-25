import type { Metadata } from "next";
import { SauceGuide } from "@/components/nutrition/sauce-guide";

export const metadata: Metadata = { title: "Sauces | Vlastní směr" };

export default function SaucePage() {
  return <SauceGuide language="en" />;
}
