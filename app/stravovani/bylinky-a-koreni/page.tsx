import type { Metadata } from "next";
import { KitchenGuide } from "@/components/nutrition/kitchen-guide";

export const metadata: Metadata = { title: "Bylinky a koření | Vlastní směr" };

export default function GuidePage() {
  return <KitchenGuide language="cs" title="Bylinky a koření" image="/herbs-spices.webp" sections={[
    { title: "Čerstvé bylinky", text: "Bazalku natrhej na rajčata až při podávání. Kopr vmíchej do hotové omáčky mimo plotnu, aby si zachoval vůni." },
    { title: "Celé koření", text: "Kmín lehce podrť a přidej k pečeným bramborám. Celý pepř můžeš dát do vývaru a před podáváním ho scedit." },
    { title: "Mleté koření", text: "Na paprikový základ odstav pánev s cibulkou z plotny, vmíchej sladkou papriku a hned podlij vývarem. Na příliš horkém tuku paprika snadno zhořkne." },
  ]} />;
}
