import type { Metadata } from "next";
import { BreadcrumbTrail } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "O platformě | Vlastní směr",
  description: "Vlastní směr jsem začal dělat hlavně pro sebe. Vedle péče o tělo řeším práci, sebevědomí a peníze.",
};

export default function AboutPage() {
  return (
    <main className="bg-cream text-ink">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
        <BreadcrumbTrail items={[{ href: "/", label: "Domů" }, { label: "O platformě" }]} />
        <h1 className="mt-8 font-display text-4xl font-semibold leading-tight text-forest-deep">
          Proč vzniká Vlastní směr
        </h1>
        <div className="mt-6 space-y-5 text-lg leading-8">
          <p>Vlastní směr jsem začal dělat hlavně pro sebe. Chtěl jsem se líp starat o pleť, vlasy a zuby, zesílit a naučit se vařit pár jídel, ke kterým se budu rád vracet. Vedle toho řeším práci, sebevědomí a peníze. Na webu jsou to tři oblasti. V mém životě je to ale pořád jeden člověk.</p>
          <p>Dávám sem věci, které chci sám pochopit a vyzkoušet. Když mě zajímá losos, chci vědět, na co se dívat při nákupu, ale taky co s ním doma udělat, aby z něj byla dobrá večeře. A když řeším peníze, první otázka není, kam investovat. Je to: kolik mi po zaplacení běžného měsíce vlastně zbývá?</p>
          <p>Tenhle web dávám ven už teď, protože podobné otázky možná řešíš taky. Nemusíme mít stejné cíle, aby se nám hodil stejný recept.</p>
        </div>
      </article>
    </main>
  );
}
