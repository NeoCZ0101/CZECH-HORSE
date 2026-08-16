import { Calendar, MapPin } from "lucide-react";
import type { Event } from "@/lib/types";
import { topicLabel } from "@/lib/utils";

export function EventCard({ event }: { event: Event }) {
  return (
    <article className="rounded-[6px] border border-sand bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-terracotta/60 hover:shadow-md">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-forest">{event.format}</span>
        {event.commercial ? (
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">komerční obsah</span>
        ) : null}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-ink">{event.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{event.description}</p>
      <div className="mt-5 grid gap-2 text-sm text-muted">
        <span className="inline-flex items-center gap-2">
          <Calendar aria-hidden size={16} />
          {event.date}
        </span>
        <span className="inline-flex items-center gap-2">
          <MapPin aria-hidden size={16} />
          {event.location}
        </span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {event.areas.map((area) => (
          <span key={area} className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-muted">
            {topicLabel(area)}
          </span>
        ))}
      </div>
    </article>
  );
}
