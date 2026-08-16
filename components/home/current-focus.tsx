import { Circle } from "lucide-react";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { currentFocusAreas, type FocusStatus } from "@/lib/homepage-data";

function getStatusClass(status: FocusStatus) {
  if (status === "Právě testujeme") return "border-olive/40 bg-olive/10 text-forest-deep";
  if (status === "Hledáme odborníka") return "border-terracotta/40 bg-terracotta/10 text-terracotta";
  if (status === "Zkušenost zveřejněna") return "border-petrol/35 bg-petrol/10 text-petrol";
  return "border-sand bg-surface text-muted";
}

export function CurrentFocus() {
  return (
    <section id="aktualne-resime" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-6 border-b border-sand pb-9 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Aktuálně řešené oblasti"
              title="Obsah vzniká od konkrétních kroků."
              description="Toto je pracovní přehled toho, co se bude postupně doplňovat o zkušenosti, srovnání služeb a ověřené souvislosti."
            />
            <p className="max-w-xs text-sm leading-6 text-muted">Stavy jsou připravené jako struktura pro budoucí obsah. Zatím neslibují výsledky ani dostupnost partnerů.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-8">
          <ul className="grid border-t border-sand md:grid-cols-2 md:divide-x md:divide-sand">
            {currentFocusAreas.map((area, index) => (
              <li key={area.title} className={`flex min-w-0 items-center justify-between gap-4 border-b border-sand py-5 ${index % 2 === 0 ? "md:pr-6" : "md:pl-6"}`}>
                <div className="min-w-0">
                  <p className={area.pillar === "Psychika" ? "text-xs font-semibold uppercase tracking-[0.1em] text-petrol" : "text-xs font-semibold uppercase tracking-[0.1em] text-olive"}>{area.pillar}</p>
                  <h3 className="mt-1 text-base font-semibold text-ink">{area.title}</h3>
                </div>
                <span className={`inline-flex shrink-0 items-center gap-1.5 border px-2.5 py-1.5 text-xs font-semibold ${getStatusClass(area.status)}`}>
                  <Circle aria-hidden size={7} fill="currentColor" />
                  {area.status}
                </span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
