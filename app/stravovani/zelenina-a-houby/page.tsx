import type { Metadata } from "next";
import { KitchenGuide } from "@/components/nutrition/kitchen-guide";

export const metadata: Metadata = { title: "Zelenina a houby | Vlastní směr" };

export default function GuidePage() {
  return <KitchenGuide language="cs" title="Zelenina a houby" image="/vegetables-mushrooms.webp" sections={[
    { title: "Kořenová zelenina", text: "Mrkev a petržel nakrájej na podobně silné hranolky. Na plechu je rozlož vedle sebe, aby se opekly i na okrajích." },
    { title: "Brokolice a květák", text: "Růžičky rozděl na sousta. Oloupaný košťál nakrájej na tenké plátky a opeč spolu s nimi. Nakonec přidej citronovou šťávu." },
    { title: "Papriky a rajčata", text: "Syrové přidají salátu šťávu a křupavost. Na teplou přílohu nejdřív opeč proužky papriky a rajčata přidej až ke konci, aby se úplně nerozpadla." },
    { title: "Houby", text: "Žampiony nakrájej na silnější plátky, hlívu natrhej podél lupenů. Opékej je v jedné vrstvě na široké pánvi. Část přidej do rizota, zbytek se hodí na topinku." },
  ]} />;
}
