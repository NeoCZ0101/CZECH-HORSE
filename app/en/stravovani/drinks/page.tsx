import type { Metadata } from "next";
import { KitchenGuide } from "@/components/nutrition/kitchen-guide";

export const metadata: Metadata = { title: "Drinks | Vlastní směr" };

export default function GuidePage() {
  return <KitchenGuide language="en" title="Drinks" image="/drinks.webp" sections={[
    { title: "Water", text: "Try plain water with a boldly spiced meal. For a change, put a few cucumber slices or a sprig of mint straight into the jug." },
    { title: "Tea", text: "Try black tea with a hearty breakfast or mint tea after lunch. Follow the steeping time for your particular tea, then remove the leaves." },
    { title: "Coffee", text: "For a longer coffee, top an espresso with hot water. For an iced version, put ice and cold water in the glass first, then pour in the espresso." },
  ]} />;
}
