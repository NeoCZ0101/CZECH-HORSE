import type { Metadata } from "next";
import { KitchenGuide } from "@/components/nutrition/kitchen-guide";

export const metadata: Metadata = { title: "Drinks | Vlastní směr" };

const sections = [
  {
    title: "Non-alcoholic drinks",
    items: [
      {
        title: "Water",
        text: "Try plain water with a boldly spiced meal. For a change, put a few cucumber slices or a sprig of mint straight into the jug."
      },
      {
        title: "Tea",
        text: "Try black tea with a hearty breakfast or mint tea after lunch. Follow the steeping time for your particular tea, then remove the leaves."
      },
      {
        title: "Coffee",
        text: "For a longer coffee, top an espresso with hot water. For an iced version, put ice and cold water in the glass first, then pour in the espresso."
      },
      {
        title: "Milk",
        text: "Serve it chilled, warm it with cocoa or froth it for coffee."
      },
      {
        title: "Juice",
        text: "Try orange juice with breakfast or mix apple juice with sparkling water."
      }
    ]
  },
  {
    title: "Beer and wine",
    items: [
      {
        title: "Beer",
        text: "From a pale lager to a dark stout, beers range from crisp and bitter to roasted and malty."
      },
      {
        title: "Still and sparkling wine",
        text: "Red, white and rosé wines can be still or sparkling. Champagne is a sparkling wine from the Champagne region of France."
      }
    ]
  },
  {
    title: "Spirits",
    items: [
      {
        title: "Whisky",
        text: "A grain spirit aged in wooden casks. Depending on the style, it can have notes of vanilla, grain or smoke."
      },
      {
        title: "Rum",
        text: "Made from sugar cane juice or molasses. In the kitchen, a little rum can flavour raisins for a cake."
      }
    ]
  }
];

export default function GuidePage() {
  return <KitchenGuide language="en" title="Drinks" image="/drinks-with-wine.webp" sections={sections} />;
}
