import type { Metadata } from "next";
import { Compass, Scale, ShieldCheck } from "lucide-react";
import { BreadcrumbTrail } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "O platformě | Vlastní směr",
  description: "Hodnotový základ platformy Vlastní směr."
};

const principles = [
  {
    title: "Ohleduplnost není život podle cizího scénáře",
    text: "Brát ohled na ostatní je zdravé. Problém začíná ve chvíli, kdy člověk dlouhodobě ruší vlastní potřeby jen proto, aby nevzniklo napětí."
  },
  {
    title: "Neprodáváme novou masku sebevědomého chlapa",
    text: "Cílem není vytvořit tvrdší, uhlazenější nebo hlasitější roli. Cílem je odstranit praktické i vnitřní překážky, kvůli kterým člověk svůj život nežije."
  },
  {
    title: "Psychika, schopnosti, vztahy, tělo a zdraví spolu souvisejí",
    text: "Strava, spánek, zuby, pohyb, práce i osobní prezentace nejsou izolované. Platforma je propojuje kolem konkrétní situace člověka."
  },
  {
    title: "Platforma začíná situací, ne prodejem služby",
    text: "Uživatel nejdřív potřebuje jazyk, otázky a první kroky. Doporučení odborníka má přijít až jako navazující možnost."
  },
  {
    title: "Kvalifikace, praxe a osobní zkušenost se nesmí míchat",
    text: "Důvěryhodnost stojí na transparentnosti. Jinou váhu má odborné vzdělání, jinou profesní praxe a jinou osobní příběh."
  }
];

export default function AboutPage() {
  return (
    <main className="bg-cream">
      <section className="bg-forest-deep text-cream">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <BreadcrumbTrail dark items={[{ href: "/", label: "Domů" }, { label: "O platformě" }]} />
          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold text-sand">Hodnotový základ</p>
            <h1 className="mt-3 max-w-[16ch] font-display text-4xl font-semibold leading-tight md:text-6xl">Neřekneme ti, jak má správný chlap žít.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/75">
              Pomůžeme ti zjistit, jak chceš žít ty a co k tomu potřebuješ. Platforma má podporovat vlastní rozhodování, ne závislost na další autoritě.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <SectionHeading
            eyebrow="Proč existuje"
            title="Spousta mužů nechce hrát tvrdší roli. Chce mít jasnější život."
            description="Vlastní směr není guru, další self-help magazín ani katalog placených doporučení. Je to praktická navigace od situace ke změně."
          />
          <div className="grid gap-4">
            {principles.map((principle) => (
              <article key={principle.title} className="rounded-[6px] border border-sand bg-cream p-5">
                <h2 className="font-display text-xl font-semibold text-forest-deep">{principle.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { icon: Compass, title: "Situace před oborem", text: "Navigace vychází z toho, co člověk řeší, ne z toho, jak se jmenuje služba." },
            { icon: Scale, title: "Bez diagnostikování", text: "Obsah pomáhá pojmenovat souvislosti, ale neurčuje člověku diagnózu." },
            { icon: ShieldCheck, title: "Odborná péče má své místo", text: "U citlivých témat platforma jasně říká, kdy má člověk hledat odbornou pomoc." }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-[6px] border border-sage/60 bg-surface p-6 shadow-sm">
                <Icon className="text-terracotta" aria-hidden size={24} />
                <h2 className="mt-5 text-xl font-semibold text-forest-deep">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
