import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck2,
  ClipboardList,
  MessageCircle,
  Smile,
  Stethoscope,
} from "lucide-react";

const pathway = [
  {
    icon: ClipboardList,
    label: "01 / Rozlišit překážku",
    title: "Co je stav zubů a co už je strach nebo stud?",
    text: "Pojmenuješ zvlášť obavu z bolesti, hodnocení, ceny a to, jak se kvůli úsměvu hlídáš mezi lidmi.",
    support: "otázky a krátký pracovní list",
  },
  {
    icon: Stethoscope,
    label: "02 / Získat skutečnou informaci",
    title: "První návštěva nemusí vyřešit všechno.",
    text: "Dentální hygiena nebo vstupní vyšetření nahradí domněnky konkrétním stavem a srozumitelným dalším krokem.",
    support: "dentální hygienistka nebo zubní lékař",
  },
  {
    icon: CalendarCheck2,
    label: "03 / Sestavit reálný plán",
    title: "Pořadí, čas a rozpočet místo jedné velké proměny.",
    text: "Podle nálezu se propojí péče, případná specializace a plán, který respektuje priority i finanční možnosti.",
    support: "léčebný plán, finance a termíny",
  },
  {
    icon: MessageCircle,
    label: "04 / Vrátit změnu do života",
    title: "Sebejistota nemusí čekat na dokonalý výsledek.",
    text: "Pokud stud zůstává, cesta pokračuje prací s jeho vnitřní a sociální částí, ne dalším skrýváním úsměvu.",
    support: "psychologická podpora nebo komunikační nácvik",
  },
];

export function PathwayExample() {
  return (
    <section className="bg-forest-deep py-20 text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-center gap-3 text-sm font-semibold text-sand">
            <Smile aria-hidden size={20} />
            Jedna situace v praxi
          </div>
          <h2 className="mt-5 max-w-[12ch] font-display text-4xl font-semibold leading-[1.08] sm:text-5xl">
            Stydím se usmát.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-cream/75">
            Nezačínáme otázkou, jakou službu ti prodat. Nejdřív zjistíme, co se v situaci skládá dohromady a který krok má přijít první.
          </p>

          <div className="mt-8 border-y border-cream/20 py-5 text-sm leading-6 text-cream/70">
            <p className="font-semibold text-cream">Situace → cesta → konkrétní změna → vhodná podpora</p>
            <p className="mt-2">Každá profese vstupuje až tam, kde její práce skutečně dává smysl.</p>
          </div>

          <Link
            href="/situace/stydim-se-usmat"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-[6px] bg-terracotta px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#a45f3f]"
          >
            Otevřít celou cestu
            <ArrowRight aria-hidden size={18} />
          </Link>
        </div>

        <ol className="border-t border-cream/20">
          {pathway.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.label} className="grid gap-4 border-b border-cream/20 py-7 sm:grid-cols-[52px_1fr] sm:py-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-sage/60 text-sand">
                  <Icon aria-hidden size={21} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-sage">{step.label}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-cream">{step.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-cream/70">{step.text}</p>
                  <p className="mt-4 text-sm font-semibold text-sand">Navazuje: {step.support}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
