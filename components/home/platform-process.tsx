import { Search, SlidersHorizontal, UserRoundCheck, Waypoints } from "lucide-react";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { platformSteps } from "@/lib/homepage-data";

const stepIcons = [Search, SlidersHorizontal, UserRoundCheck, Waypoints];

export function PlatformProcess() {
  return (
    <section id="jak-platforma-funguje" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Jak bude platforma fungovat"
            title="Nejdřív potřebujeme pochopit problém."
            description="Teprve potom dává smysl hledat konkrétní službu nebo člověka."
          />
        </ScrollReveal>

        <ScrollReveal className="mt-12">
          <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
            <span className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-sand md:block" aria-hidden="true" />
            {platformSteps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <li key={step.number} className="relative min-w-0">
                  <span className="relative grid h-12 w-12 place-items-center rounded-full border border-sand bg-cream text-forest shadow-[0_6px_18px_rgba(23,63,53,0.08)]">
                    <Icon aria-hidden size={20} />
                  </span>
                  <p className="mt-5 text-xs font-semibold tracking-[0.12em] text-terracotta">{step.number}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-6 text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
                </li>
              );
            })}
          </ol>
        </ScrollReveal>
      </div>
    </section>
  );
}
