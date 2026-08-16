import type { Metadata } from "next";
import { CircleDollarSign, Dumbbell, ShieldCheck, Smile, Utensils } from "lucide-react";
import { BreadcrumbTrail } from "@/components/breadcrumbs";
import { ExpertDirectory } from "@/components/expert-directory";
import { SectionHeading } from "@/components/sections/section-heading";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Odborníci a služby | Vlastní směr",
  description: "Ověřené profily a služby filtrované podle konkrétní životní situace a vhodnosti spolupráce."
};

const professionGroups = [
  {
    icon: Dumbbell,
    title: "Pohyb a funkce těla",
    text: "Fyzioterapie a osobní trénink mají jiný rozsah práce. Profil ukazuje vzdělání, zkušenost i hranici, za kterou má navázat zdravotník.",
  },
  {
    icon: Utensils,
    title: "Strava a energie",
    text: "U každého profilu vidíš konkrétní dosažené vzdělání, témata, se kterými pracuje, a situace, které už vyžadují jiný typ péče.",
  },
  {
    icon: Smile,
    title: "Zuby a úsměv",
    text: "Dentální hygiena, zubní lékař a ortodontista nejsou jedna služba. Cesta ukazuje jejich možné pořadí podle skutečného stavu.",
  },
];

export default function ExpertsPage() {
  return (
    <main className="bg-cream">
      <section className="bg-forest-deep text-cream">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <BreadcrumbTrail dark items={[{ href: "/", label: "Domů" }, { label: "Odborníci a služby" }]} />
          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold text-sand">Ověřená síť podpory</p>
            <h1 className="mt-3 max-w-[18ch] font-display text-4xl font-semibold leading-tight md:text-6xl">Hledej vhodnost pro situaci, ne nejvyšší hodnocení.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/75">
              Profil ukazuje kvalifikaci, praxi, rozsah služby, cenu, dostupnost i to, komu přístup pravděpodobně nesedne. Pořadí není soutěž popularity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ExpertDirectory />
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Profese mají různé role"
            title="Stejná situace neznamená stejnou kompetenci."
            description="Síť neslučuje všechny profese do jednoho seznamu. Ukazuje, co konkrétní člověk vystudoval, s čím pracuje, kde jeho role končí a kdo může navázat."
          />
          <div className="mt-10 grid border-y border-forest/20 lg:grid-cols-3 lg:divide-x lg:divide-forest/20">
            {professionGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className="border-b border-forest/20 py-7 last:border-b-0 lg:border-b-0 lg:px-7 lg:first:pl-0 lg:last:pr-0">
                  <Icon className="text-terracotta" aria-hidden size={24} />
                  <h2 className="mt-5 font-display text-2xl font-semibold text-forest-deep">{group.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{group.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <SectionHeading
            eyebrow="Transparentnost"
            title="Kvalifikace, praxe a osobní zkušenost nejsou totéž."
            description="Profil jasně odděluje odborné vzdělání, profesní praxi a osobní zkušenost. Komerční nabídky jsou označené a doporučení nevzniká placeným pořadím."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.id} className="rounded-[6px] border border-sand bg-cream p-5">
                <ShieldCheck className="text-forest" aria-hidden size={22} />
                <h2 className="mt-4 text-lg font-semibold text-forest-deep">{service.name}</h2>
                <p className="mt-2 text-sm text-muted">{service.type}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                  <CircleDollarSign aria-hidden size={17} />
                  {service.price}
                </p>
                <p className="mt-2 text-sm text-muted">{service.delivery}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
