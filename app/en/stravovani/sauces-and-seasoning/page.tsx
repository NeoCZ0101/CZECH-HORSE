import type { Metadata } from "next";
import { KitchenGuide } from "@/components/nutrition/kitchen-guide";

export const metadata: Metadata = { title: "Sauces and seasoning | Vlastní směr" };

const sections = [
  {
    title: "Sauces",
    text: "Start with a tomato sauce, make a mushroom gravy or stir basil pesto into hot pasta.",
    href: "/en/stravovani/sauces"
  },
  {
    title: "Herbs and spices",
    text: "Which herbs go in just before serving? When should paprika go into the pan?",
    href: "/en/stravovani/herbs-and-spices"
  },
  {
    title: "Honey",
    text: "Whisk a teaspoon of honey with mustard and a splash of vinegar, then whisk in oil. Spoon the dressing over roasted root vegetables."
  }
];

export default function GuidePage() {
  return <KitchenGuide language="en" title="Sauces and seasoning" image="/sauces-seasoning.webp" sections={sections} />;
}
