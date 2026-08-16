import { ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/home/scroll-reveal";

const boundaries = [
  "Platforma neposkytuje lékařské diagnózy.",
  "Nenahrazuje lékaře, psychologa ani jiného odborníka.",
  "Zkušenosti jednotlivých lidí nejsou univerzálním návodem.",
  "Cílem je orientace, transparentnost a propojení s vhodnou pomocí.",
];

export function PlatformBoundaries() {
  return (
    <section className="bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid gap-6 border-l-4 border-terracotta bg-cream px-5 py-6 sm:px-7 md:grid-cols-[auto_1fr] md:items-start">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-terracotta/10 text-terracotta"><ShieldCheck aria-hidden size={21} /></span>
            <div>
              <h2 className="text-lg font-semibold text-ink">Hranice platformy</h2>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted sm:grid-cols-2 sm:gap-x-8">
                {boundaries.map((boundary) => <li key={boundary}>{boundary}</li>)}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
