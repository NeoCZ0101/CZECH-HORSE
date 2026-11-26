import type { Metadata } from "next";
import { KitchenGuide } from "@/components/nutrition/kitchen-guide";

export const metadata: Metadata = { title: "Zelenina, ovoce a houby | Vlastní směr" };

const sections = [
  {
    title: "Zelenina",
    items: [
      {
        title: "Kořenová zelenina",
        text: "Mrkev a petržel nakrájej na podobně silné hranolky. Na plechu je rozlož vedle sebe, aby se opekly i na okrajích."
      },
      {
        title: "Brokolice a květák",
        text: "Růžičky rozděl na sousta. Oloupaný košťál nakrájej na tenké plátky a opeč spolu s nimi. Nakonec přidej citronovou šťávu."
      },
      {
        title: "Papriky a rajčata",
        text: "Syrové přidají salátu šťávu a křupavost. Na teplou přílohu nejdřív opeč proužky papriky a rajčata přidej až ke konci, aby se úplně nerozpadla."
      }
    ]
  },
  {
    title: "Ovoce",
    items: [
      {
        title: "Jablka",
        text: "Křupavé jablko nakrájej na kostičky do zelného salátu. Na kaši ho zkus nakrájet na plátky a krátce podusit na pánvi."
      },
      {
        title: "Hrozny",
        text: "Hrozen rozděl na menší střapce k sýrům nebo bobule rozpůl a vmíchej do bílého jogurtu."
      }
    ]
  },
  {
    title: "Houby",
    text: "Žampiony nakrájej na silnější plátky, hlívu natrhej podél lupenů. Opékej je v jedné vrstvě na široké pánvi. Část přidej do rizota, zbytek se hodí na topinku."
  }
];

export default function GuidePage() {
  return <KitchenGuide language="cs" title="Zelenina, ovoce a houby" image="/produce.webp" sections={sections} />;
}
