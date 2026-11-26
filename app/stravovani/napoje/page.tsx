import type { Metadata } from "next";
import { KitchenGuide } from "@/components/nutrition/kitchen-guide";

export const metadata: Metadata = { title: "Nápoje | Vlastní směr" };

export default function GuidePage() {
  return <KitchenGuide language="cs" title="Nápoje" image="/drinks.webp" sections={[
    { title: "Voda", text: "K výrazně kořeněnému jídlu zkus čistou vodu. Pro obměnu přidej pár plátků okurky nebo snítku máty přímo do karafy." },
    { title: "Čaj", text: "Černý čaj zkus k vydatné snídani, mátový nálev po obědě. Při louhování se řiď druhem čaje a po uplynutí času lístky vyndej." },
    { title: "Káva", text: "Na delší kávu dolij espresso horkou vodou. Na ledovou verzi dej do sklenice led a studenou vodu, potom přilij espresso." },
  ]} />;
}
