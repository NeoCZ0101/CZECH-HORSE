import type { Metadata } from "next";
import { KitchenGuide } from "@/components/nutrition/kitchen-guide";

export const metadata: Metadata = { title: "Omáčky a dochucení | Vlastní směr" };

const sections = [
  {
    title: "Omáčky",
    text: "Vyber si základ k těstovinám nebo masu: rajčatovou, koprovou, houbovou nebo bazalkové pesto.",
    href: "/stravovani/omacky"
  },
  {
    title: "Bylinky a koření",
    text: "Které bylinky přidat až při podávání a jak na pánvi zacházet s mletou paprikou?",
    href: "/stravovani/bylinky-a-koreni"
  },
  {
    title: "Med",
    text: "Rozmíchej lžičku medu s hořčicí a trochou octa, pak vmíchej olej. Zálivka se hodí k pečené kořenové zelenině."
  }
];

export default function GuidePage() {
  return <KitchenGuide language="cs" title="Omáčky a dochucení" image="/sauces-seasoning.webp" sections={sections} />;
}
