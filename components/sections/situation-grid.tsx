import { SituationCard } from "@/components/cards/situation-card";
import type { HomepageSituation } from "@/lib/types";

export function SituationGrid({ situations }: { situations: HomepageSituation[] }) {
  return (
    <div className="mt-10 grid gap-4 lg:grid-cols-6">
      {situations.map((situation, index) => (
        <SituationCard
          key={situation.slug}
          situation={situation}
          category={situation.category}
          ctaLabel={situation.ctaLabel}
          tone={situation.tone}
          className={
            situation.featured
              ? "lg:col-span-4"
              : index >= situations.length - 2
                ? "lg:col-span-3"
                : "lg:col-span-2"
          }
        />
      ))}
    </div>
  );
}
