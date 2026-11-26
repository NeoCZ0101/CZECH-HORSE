import type { Metadata } from "next";
import { KitchenGuide } from "@/components/nutrition/kitchen-guide";

export const metadata: Metadata = { title: "Herbs and spices | Vlastní směr" };

export default function GuidePage() {
  return <KitchenGuide language="en" title="Herbs and spices" image="/herbs-spices.webp" sections={[
    { title: "Fresh herbs", text: "Tear basil over tomatoes just before serving. Stir dill into a finished sauce off the heat to keep its aroma." },
    { title: "Whole spices", text: "Lightly crush caraway seeds for roast potatoes. Add whole peppercorns to stock and strain them out before serving." },
    { title: "Ground spices", text: "For a paprika sauce, take the softened onions off the heat, stir in sweet paprika and immediately add stock. Paprika can turn bitter in very hot fat." },
  ]} />;
}
