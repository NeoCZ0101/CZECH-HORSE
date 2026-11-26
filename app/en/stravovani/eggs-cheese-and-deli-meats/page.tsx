import type { Metadata } from "next";
import { KitchenGuide } from "@/components/nutrition/kitchen-guide";

export const metadata: Metadata = { title: "Eggs, cheese and deli meats | Vlastní směr" };

const sections = [
  {
    title: "Eggs",
    nutrition: {
      id: "eggs",
      image: "/guide-raw-egg.webp",
      alt: "A whole hen’s egg in its shell beside a raw egg white and yolk.",
    },
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
