import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { ScrollReveal } from "@/components/home/scroll-reveal";

export function PartnerInvitation() {
  return (
    <section className="bg-forest-deep py-16 text-cream sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-8">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-sand">
            <BriefcaseBusiness aria-hidden size={18} />
            Pro budoucí partnery
          </div>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
            Pracuješ s muži v některé z těchto oblastí?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-cream/70">
            Hledáme odborníky, kteří umějí svou práci, komunikují otevřeně a chtějí být součástí platformy založené na skutečných zkušenostech, ne pouze na reklamních tvrzeních.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <Link href="/pro-odborniky" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-cream px-6 py-3 text-sm font-semibold text-forest-deep transition duration-200 hover:-translate-y-0.5 hover:bg-sand">
            Představit svoji práci
            <ArrowRight aria-hidden size={18} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
