import type { Metadata } from "next";
import { KitchenGuide } from "@/components/nutrition/kitchen-guide";

export const metadata: Metadata = { title: "Nápoje | Vlastní směr" };

const sections = [
  {
    title: "Nealkoholické nápoje",
    items: [
      {
        title: "Voda",
        text: "K výrazně kořeněnému jídlu zkus čistou vodu. Pro obměnu přidej pár plátků okurky nebo snítku máty přímo do karafy."
      },
      {
        title: "Čaj",
        text: "Černý čaj zkus k vydatné snídani, mátový nálev po obědě. Při louhování se řiď druhem čaje a po uplynutí času lístky vyndej."
      },
      {
        title: "Káva",
        text: "Na delší kávu dolij espresso horkou vodou. Na ledovou verzi dej do sklenice led a studenou vodu, potom přilij espresso."
      },
      {
        title: "Mléko",
        text: "Podávej ho vychlazené, ohřej s kakaem nebo našlehej do kávy."
      },
      {
        title: "Džusy a mošty",
        text: "Ke snídani zkus pomerančový džus. Jablečný mošt můžeš smíchat s perlivou vodou."
      }
    ]
  },
  {
    title: "Pivo a víno",
    items: [
      {
        title: "Pivo",
        text: "Světlý ležák a tmavý stout se liší nejen barvou. U prvního často vynikne hořkost chmele, u druhého pražená chuť sladu."
      },
      {
        title: "Tichá a šumivá vína",
        text: "Víno může být bílé, růžové i červené. Mezi šumivá vína patří třeba prosecco nebo šampaňské z francouzské oblasti Champagne."
      }
    ]
  },
  {
    title: "Destiláty",
    items: [
      {
        title: "Whisky",
        text: "Obilný destilát zrající v dřevěných sudech. Podle stylu v něm můžeš cítit obilí, vanilku nebo kouř."
      },
      {
        title: "Rum",
        text: "Vyrábí se ze šťávy cukrové třtiny nebo z melasy. V kuchyni se používá třeba k ovonění rozinek do pečiva."
      }
    ]
  }
];

export default function GuidePage() {
  return <KitchenGuide language="cs" title="Nápoje" image="/drinks-with-wine.webp" sections={sections} />;
}
