import type { Metadata } from "next";
import { ArrowRight, BookOpen, Users } from "lucide-react";
import { BreadcrumbTrail } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/sections/section-heading";
import { StepTimeline } from "@/components/step-timeline";
import { lifeJourneys } from "@/lib/data";
import { topicLabel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Životní cesty | Vlastní směr",
  description: "Strukturované programy propojující více životních oblastí."
};

export default function JourneysPage() {
  return (
    <main className="bg-cream">
      <section className="bg-forest-deep text-cream">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <BreadcrumbTrail dark items={[{ href: "/", label: "Domů" }, { label: "Životní cesty" }]} />
          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold text-sand">Navazující cesty</p>
            <h1 className="mt-3 max-w-[18ch] font-display text-4xl font-semibold leading-tight md:text-6xl">Jedna situace často potřebuje víc než jeden obor.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/75">
              Cesta skládá otázky, vlastní kroky, obsah, odborníky a komunitu v pořadí, které odpovídá situaci člověka. Není to balíček náhodných služeb.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:px-8">
          {lifeJourneys.map((journey) => (
            <article key={journey.slug} className="rounded-[6px] border border-sand bg-surface p-6 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-forest">{journey.duration}</span>
                    {journey.areas.map((area) => (
                      <span key={area} className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-muted">
                        {topicLabel(area)}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-semibold text-forest-deep">{journey.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-muted">{journey.startingPoint}</p>
                  <div className="mt-5 border-l-2 border-terracotta pl-4 text-sm font-medium leading-6 text-ink">
                    Výsledek: {journey.outcome}
                  </div>
                  <div className="mt-6 grid gap-3 text-sm text-muted">
                    <p className="inline-flex items-center gap-2"><BookOpen aria-hidden size={17} /> Obsah: {journey.recommendedContent.join(", ")}</p>
                    <p className="inline-flex items-center gap-2"><ArrowRight aria-hidden size={17} /> Služby: {journey.services.join(", ")}</p>
                    <p className="inline-flex items-center gap-2"><Users aria-hidden size={17} /> Komunita: {journey.community}</p>
                  </div>
                </div>
                <StepTimeline steps={journey.stages} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Princip cest"
            title="Cesta nemá člověka připoutat k platformě."
            description="Cílem je pomoct rozlišit, co dává smysl udělat sám, kdy se učit, kdy hledat odborníka a kdy navázat kontakt s lidmi v podobné situaci. Cesta končí konkrétní změnou, ne závislostí na platformě."
          />
        </div>
      </section>
    </main>
  );
}
