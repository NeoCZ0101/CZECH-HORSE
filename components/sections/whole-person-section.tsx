import { Brain, HeartPulse, Workflow } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { topics } from "@/lib/data";
import type { TopicId } from "@/lib/types";

const groups: Array<{
  icon: typeof Brain;
  title: string;
  description: string;
  ids: TopicId[];
}> = [
  {
    icon: Brain,
    title: "Vnitřní směr a vztahy",
    description: "Co chceš, jak jednáš pod tlakem a jak zůstáváš v kontaktu s lidmi bez hraní role.",
    ids: ["smer", "psychika", "komunikace", "vztahy"],
  },
  {
    icon: Workflow,
    title: "Schopnosti a každodenní fungování",
    description: "Práce, učení, čas, jídlo a návyky, které musí obstát v běžném týdnu.",
    ids: ["prace", "samostatnost", "strava"],
  },
  {
    icon: HeartPulse,
    title: "Tělo, zdraví a prezentace",
    description: "Pohyb, spánek, prevence, zuby, péče i první dojem jako propojené části jednoho života.",
    ids: ["telo", "zdravi", "vzhled"],
  },
];

export function WholePersonSection() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Celý člověk, ne katalog služeb"
          title="Tělo a vzhled nekončí u oblečení."
          description="Spánek, zuby, jídlo, pohyb, držení těla, péče, práce i vztahy se navzájem ovlivňují. Oblasti proto používáme jako mapu souvislostí, ne jako oddělené regály."
        />

        <div className="mt-10 grid border-y border-forest/20 lg:grid-cols-3 lg:divide-x lg:divide-forest/20">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.title} className="border-b border-forest/20 py-7 last:border-b-0 lg:border-b-0 lg:px-7 lg:first:pl-0 lg:last:pr-0">
                <Icon className="text-terracotta" aria-hidden size={25} />
                <h3 className="mt-5 max-w-[22ch] font-display text-2xl font-semibold leading-tight text-forest-deep">
                  {group.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted">{group.description}</p>
                <ul className="mt-6 grid gap-2 border-t border-forest/15 pt-5">
                  {group.ids.map((id) => {
                    const topic = topics.find((item) => item.id === id);
                    return topic ? (
                      <li key={topic.id} className="flex items-center justify-between gap-4 text-sm text-ink">
                        <span>{topic.label}</span>
                        <span className="h-px w-6 shrink-0 bg-sage" aria-hidden="true" />
                      </li>
                    ) : null;
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
