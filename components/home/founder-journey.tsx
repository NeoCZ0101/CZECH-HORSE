import Link from "next/link";
import { ArrowRight, Route } from "lucide-react";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { founderMilestones } from "@/lib/homepage-data";

export function FounderJourney() {
  return (
    <section id="cesta-davida" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.62fr)] lg:items-end">
            <SectionHeading
              eyebrow="První testovací cesta"
              title="Nezačínáme teorií. Začínáme na sobě."
              description="První cestu vytváří David. Postupně řeší svůj vzhled, fyzický stav, psychickou pohodu a komunikaci. Zkouší služby, mluví s odborníky a zaznamenává, co skutečně pomáhá, kolik to stojí a pro koho může mít daná zkušenost hodnotu."
            />
            <div className="border-l-2 border-terracotta pl-4 text-sm leading-6 text-muted">
              Nejde o univerzální návod ani o tvrzení, že jedna zkušenost platí pro každého. Je to první případ, na kterém vzniká způsob hodnocení služeb a odborníků.
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12">
          <div className="flex items-center gap-2 text-sm font-semibold text-forest">
            <Route aria-hidden size={18} />
            Cesta je průběžný pracovní záznam, ne osobní influencer profil.
          </div>
          <ol className="relative mt-6 grid gap-x-6 gap-y-8 border-t border-forest/20 pt-6 sm:grid-cols-2 xl:grid-cols-6">
            {founderMilestones.map((milestone, index) => (
              <li key={milestone.title} className="relative min-w-0">
                <span className="absolute -top-[31px] left-0 h-3 w-3 rounded-full border-2 border-mist bg-terracotta" aria-hidden="true" />
                <p className="text-xs font-semibold tracking-[0.12em] text-terracotta">0{index + 1}</p>
                <h3 className="mt-2 text-base font-semibold text-ink">{milestone.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{milestone.text}</p>
              </li>
            ))}
          </ol>
          <Link href="#aktualne-resime" className="mt-10 inline-flex min-h-11 items-center gap-2 rounded-[6px] bg-forest px-5 py-3 text-sm font-semibold text-cream transition duration-200 hover:-translate-y-0.5 hover:bg-forest-deep">
            Sledovat první cestu
            <ArrowRight aria-hidden size={17} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
