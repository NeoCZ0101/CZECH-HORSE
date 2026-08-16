import Image from "next/image";
import { MapPin, Monitor, ShieldCheck } from "lucide-react";
import type { Expert } from "@/lib/types";
import { topicLabel } from "@/lib/utils";

export function ExpertCard({ expert }: { expert: Expert }) {
  return (
    <article className="overflow-hidden rounded-[6px] border border-sand bg-surface shadow-sm transition hover:-translate-y-0.5 hover:border-terracotta/60 hover:shadow-md">
      <div className="grid md:grid-cols-[180px_1fr]">
        <div className="relative h-64 md:h-full md:min-h-[420px]">
          <Image src={expert.image} alt={expert.name} fill sizes="(min-width: 768px) 180px, 100vw" className="object-cover" />
        </div>
        <div className="p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-ink">{expert.name}</h3>
              <p className="mt-1 text-sm font-medium text-forest">{expert.profession}</p>
            </div>
            <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-muted">
              {expert.cooperation}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-muted">
            <span className="inline-flex items-center gap-1 rounded-full bg-cream px-3 py-1">
              <MapPin aria-hidden size={14} />
              {expert.location.city}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-cream px-3 py-1">
              <Monitor aria-hidden size={14} />
              {expert.mode}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-mist px-3 py-1 text-forest">
              <ShieldCheck aria-hidden size={14} />
              ověřeno
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-muted">
            Pomáhá s: {expert.helpsWith.join(", ")}.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold text-ink">Vyhovuje, když</h4>
              <ul className="mt-2 grid gap-2 text-sm text-muted">
                {expert.goodFit.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-ink">Nemusí sedět, když</h4>
              <ul className="mt-2 grid gap-2 text-sm text-muted">
                {expert.notFit.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {expert.areas.map((area) => (
              <span key={area} className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-muted">
                {topicLabel(area)}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-sand pt-4 text-sm">
            <span className="font-semibold text-ink">{expert.price}</span>
            <span className="text-muted">{expert.availability}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
