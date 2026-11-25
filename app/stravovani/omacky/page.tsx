import type { Metadata } from "next";
import { SauceGuide } from "@/components/nutrition/sauce-guide";

export const metadata: Metadata = { title: "Omáčky | Vlastní směr" };

export default function SaucePage() {
  return <SauceGuide language="cs" />;
}
