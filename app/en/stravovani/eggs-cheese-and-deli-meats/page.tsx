import type { Metadata } from "next";
import { KitchenGuide } from "@/components/nutrition/kitchen-guide";

export const metadata: Metadata = { title: "Eggs, cheese and deli meats | Vlastní směr" };

const sections = [
  {
    title: "Eggs",
    text: "Slice a hard-boiled egg over bread with chives. For a warm lunch, fold leftover roast vegetables into an omelette."
  },
  {
    title: "Cheese",
    text: "Crumble fresh goat’s cheese over beetroot. For pasta, grate an aged cheese finely and add it off the heat."
  },
  {
    title: "Deli meats",
    text: "Use thin slices of ham in a sandwich. For lentils, dice a little smoked meat and brown it with the onions before adding the pulses."
  }
];

export default function GuidePage() {
  return <KitchenGuide language="en" title="Eggs, cheese and deli meats" image="/eggs-cheese-deli.webp" sections={sections} />;
}
