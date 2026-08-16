import { ArrowRight, Users } from "lucide-react";
import type { CommunityGroup } from "@/lib/types";
import { topicLabel } from "@/lib/utils";

export function CommunityGroupCard({ group }: { group: CommunityGroup }) {
  return (
    <article className="group rounded-[6px] border border-sand bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-terracotta/60 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-sm font-semibold text-forest">{group.format} / {group.cadence}</span>
          <h3 className="mt-2 text-xl font-semibold text-ink">{group.title}</h3>
        </div>
        <Users className="text-terracotta" aria-hidden size={22} />
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">{group.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-muted">{group.city}</span>
        {group.areas.map((area) => (
          <span key={area} className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-muted">
            {topicLabel(area)}
          </span>
        ))}
      </div>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest">
        {group.nextStep}
        <ArrowRight aria-hidden size={16} />
      </div>
    </article>
  );
}
