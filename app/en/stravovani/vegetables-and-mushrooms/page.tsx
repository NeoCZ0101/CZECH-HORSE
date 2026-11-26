import type { Metadata } from "next";
import { KitchenGuide } from "@/components/nutrition/kitchen-guide";

export const metadata: Metadata = { title: "Vegetables, fruit and mushrooms | Vlastní směr" };

const sections = [
  {
    title: "Vegetables",
    items: [
      {
        title: "Root vegetables",
        text: "Cut carrots and parsnips into even batons and leave a little space between them on the roasting tray so the edges brown."
      },
      {
        title: "Broccoli and cauliflower",
        text: "Separate the florets into bite-sized pieces. Peel the stalk, slice it thinly and roast it alongside the florets. Finish with lemon juice."
      },
      {
        title: "Peppers and tomatoes",
        text: "Use them raw for a crisp, juicy salad. For a warm side, sauté strips of pepper first and add the tomatoes near the end so they hold their shape."
      }
    ]
  },
  {
    title: "Fruit",
    items: [
      {
        title: "Apples",
        text: "Dice a crisp apple into a cabbage salad or soften sliced apples in a pan for porridge."
      },
      {
        title: "Grapes",
        text: "Serve a small bunch alongside cheese, or halve the grapes and fold them into plain yoghurt."
      }
    ]
  },
  {
    title: "Mushrooms",
    text: "Slice button mushrooms thickly and tear oyster mushrooms along the gills. Brown them in a single layer in a wide pan. Fold some into risotto or spoon them onto toast."
  }
];

export default function GuidePage() {
  return <KitchenGuide language="en" title="Vegetables, fruit and mushrooms" image="/produce.webp" sections={sections} />;
}
