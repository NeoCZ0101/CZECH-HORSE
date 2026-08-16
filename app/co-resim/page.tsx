import type { Metadata } from "next";
import { BreadcrumbTrail } from "@/components/breadcrumbs";
import { SituationExplorer } from "@/components/situation-explorer";
import { SectionHeading } from "@/components/sections/section-heading";
import { topics } from "@/lib/data";

export const metadata: Metadata = {
  title: "Co právě řeším | Vlastní směr",
  description: "Konkrétní životní situace propojené s praktickými kroky, obsahem a vhodnou podporou."
};

export default function SituationsPage() {
  return (
    <main className="bg-cream">
      <section className="bg-forest-deep text-cream">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <BreadcrumbTrail dark items={[{ href: "/", label: "Domů" }, { label: "Co právě řeším" }]} />
          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold text-sand">Životní situace</p>
            <h1 className="mt-3 max-w-[17ch] font-display text-4xl font-semibold leading-tight md:text-6xl">Nemusíš vědět, jaký obor hledáš.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/75">
              Vyber, co se teď děje. Situace může propojit psychiku, práci, vztahy, tělo, zdraví, stravu i osobní prezentaci a ukáže, který krok má přijít první.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SituationExplorer />
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Mapa souvislostí"
            title="Oblasti pomáhají filtrovat. Situace je ale propojuje."
            description="Tělo není jen fitness, vzhled není jen oblečení a únava není automaticky slabá vůle. U každé situace proto uvidíš více souvisejících vrstev."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <article key={topic.id} className="rounded-[6px] border border-sage/60 bg-surface p-5">
                <h2 className="text-lg font-semibold text-forest-deep">{topic.label}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{topic.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
