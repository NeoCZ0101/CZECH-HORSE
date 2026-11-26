import type { Metadata } from "next";
import { KitchenGuide } from "@/components/nutrition/kitchen-guide";

export const metadata: Metadata = { title: "Vejce, sýry a uzeniny | Vlastní směr" };

const sections = [
  {
    title: "Vejce",
    nutrition: {
      id: "vejce",
      image: "/guide-raw-egg.webp",
      alt: "Celé slepičí vejce ve skořápce a vedle něj syrový bílek se žloutkem.",
    },
  },
  {
    title: "Sýry",
    text: "Čerstvý kozí sýr rozdrob na pečenou řepu. Tvrdý zrající sýr nastrouhej najemno a přidej k těstovinám až po odstavení."
  },
  {
    title: "Uzeniny",
    text: "Tenké plátky šunky se hodí do sendviče. K čočce můžeš malé množství uzeného nakrájet na kostičky a opéct spolu s cibulí."
  }
];

export default function GuidePage() {
  return <KitchenGuide language="cs" title="Vejce, sýry a uzeniny" image="/eggs-cheese-deli.webp" sections={sections} />;
}
