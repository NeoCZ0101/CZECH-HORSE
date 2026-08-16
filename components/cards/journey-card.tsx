import Link from "next/link";
import { ArrowRight, Route } from "lucide-react";
import type { LifeJourney } from "@/lib/types";
import { topicLabel } from "@/lib/utils";

export function JourneyCard({ journey }: { journey: LifeJourney }) {
  return (
    <article className="group flex h-full flex-col rounded-[6px] border border-sand bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-terracotta/60 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-ink">{journey.title}</h3>
        <Route className="text-terracotta" aria-hidden size={22} />
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">{journey.startingPoint}</p>
      <div className="mt-5 border-l-2 border-terracotta pl-4 text-sm font-medium text-ink">
        Směřuje k tomu, abys: {journey.outcome}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-forest">{journey.duration}</span>
        {journey.areas.map((area) => (
          <span key={area} className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-muted">
            {topicLabel(area)}
          </span>
        ))}
      </div>
      <div className="mt-6 grid gap-2 text-sm text-muted">
        {journey.stages.slice(0, 3).map((stage) => (
          <div key={stage.title} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
            <span>{stage.title}</span>
          </div>
        ))}
      </div>
      <Link href="/cesty" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-forest transition group-hover:text-terracotta">
        Zobrazit cestu
        <ArrowRight aria-hidden size={16} />
      </Link>
    </article>
  );
}
