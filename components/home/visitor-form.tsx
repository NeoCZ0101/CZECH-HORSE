"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, MapPin, MessageSquareText } from "lucide-react";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { visitorFormAreas } from "@/lib/homepage-data";

type PillarChoice = "body" | "mind" | "unknown";
type IntentChoice = "informace" | "zkušenosti" | "odborníka";

const pillarOptions: Array<{ value: PillarChoice; label: string; description: string }> = [
  { value: "body", label: "Tělo", description: "Vzhled, péče, pohyb, jídlo nebo zdraví." },
  { value: "mind", label: "Psychika", description: "Pohoda, vztahy, komunikace nebo tlak." },
  { value: "unknown", label: "Nevím", description: "Potíže se mohou týkat obou stran." },
];

const intentOptions: Array<{ value: IntentChoice; label: string }> = [
  { value: "informace", label: "Informace" },
  { value: "zkušenosti", label: "Zkušenosti" },
  { value: "odborníka", label: "Odborníka" },
];

export function VisitorForm() {
  const [pillar, setPillar] = useState<PillarChoice>("unknown");
  const [area, setArea] = useState("");
  const [intent, setIntent] = useState<IntentChoice>("informace");
  const [submitted, setSubmitted] = useState(false);

  const availableAreas = visitorFormAreas.filter((option) => {
    if (pillar === "unknown") return true;
    return option.pillar === pillar || option.pillar === "bridge";
  });

  const selectedArea = visitorFormAreas.find((option) => option.value === area)?.label;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="co-chces-resit" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(24rem,1fr)] lg:items-start lg:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold text-terracotta">První orientace</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">Co chceš řešit ty?</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            Popiš situaci svými slovy. Platforma bude později využívat podobný vstup pro orientaci v možnostech, zkušenostech a vhodném typu pomoci.
          </p>
          <div className="mt-8 flex items-start gap-3 border-t border-forest/15 pt-6 text-sm leading-6 text-muted">
            <MessageSquareText className="mt-0.5 shrink-0 text-forest" aria-hidden size={19} />
            <p>Formulář neslouží k lékařské ani psychologické diagnóze. Při akutních nebo vážných potížích je na místě obrátit se přímo na odbornou nebo zdravotní pomoc.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <form onSubmit={handleSubmit} className="border border-sand bg-surface p-5 shadow-[0_18px_42px_rgba(37,40,33,0.08)] sm:p-7">
            <fieldset>
              <legend className="text-sm font-semibold text-ink">Kde to teď cítíš nejvíc?</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {pillarOptions.map((option) => {
                  const selected = pillar === option.value;
                  return (
                    <label key={option.value} className={`cursor-pointer border p-3 transition duration-200 ${selected ? "border-forest bg-forest text-cream" : "border-sand bg-cream text-ink hover:border-forest/60"}`}>
                      <input
                        className="sr-only"
                        type="radio"
                        name="pillar"
                        value={option.value}
                        checked={selected}
                        onChange={() => {
                          setPillar(option.value);
                          setArea("");
                          setSubmitted(false);
                        }}
                      />
                      <span className="block text-sm font-semibold">{option.label}</span>
                      <span className={selected ? "mt-1 block text-xs leading-4 text-cream/75" : "mt-1 block text-xs leading-4 text-muted"}>{option.description}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Konkrétní oblast
                <select
                  required
                  value={area}
                  onChange={(event) => {
                    setArea(event.target.value);
                    setSubmitted(false);
                  }}
                  className="min-h-11 border border-sand bg-cream px-3 text-sm font-normal text-ink outline-none transition focus:border-forest"
                >
                  <option value="">Vyber oblast</option>
                  {availableAreas.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Lokalita
                <span className="relative">
                  <MapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" aria-hidden size={17} />
                  <input required name="location" placeholder="Město nebo online" className="min-h-11 w-full border border-sand bg-cream py-2 pl-9 pr-3 text-sm font-normal text-ink outline-none transition placeholder:text-muted focus:border-forest" />
                </span>
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-ink">
              Stručně popiš situaci
              <textarea required name="description" rows={5} placeholder="Co ti teď nejvíc komplikuje běžný život?" className="resize-y border border-sand bg-cream px-3 py-2.5 text-sm font-normal leading-6 text-ink outline-none transition placeholder:text-muted focus:border-forest" />
            </label>

            <fieldset className="mt-5">
              <legend className="text-sm font-semibold text-ink">Co teď hledáš?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {intentOptions.map((option) => {
                  const selected = intent === option.value;
                  return (
                    <label key={option.value} className={`cursor-pointer border px-3 py-2 text-sm font-medium transition duration-200 ${selected ? "border-petrol bg-petrol text-cream" : "border-sand bg-cream text-ink hover:border-petrol/60"}`}>
                      <input className="sr-only" type="radio" name="intent" value={option.value} checked={selected} onChange={() => { setIntent(option.value); setSubmitted(false); }} />
                      {option.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-ink">
              E-mail <span className="font-normal text-muted">(volitelné)</span>
              <input type="email" name="email" autoComplete="email" placeholder="tvuj@email.cz" className="min-h-11 border border-sand bg-cream px-3 text-sm font-normal text-ink outline-none transition placeholder:text-muted focus:border-forest" />
            </label>

            <button type="submit" className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[6px] bg-forest px-5 py-3 text-sm font-semibold text-cream transition duration-200 hover:-translate-y-0.5 hover:bg-forest-deep">
              Popsat svoji situaci
              <ArrowRight aria-hidden size={18} />
            </button>

            {submitted ? (
              <p role="status" className="mt-4 border-l-2 border-petrol bg-petrol/10 px-3 py-3 text-sm leading-6 text-ink">
                Náhled zadání je připravený: {selectedArea ?? "vybraná oblast"}, hledáš {intent}. V této ukázkové verzi se údaje nikam neodesílají; formulář je připravený pro budoucí napojení.
              </p>
            ) : null}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
