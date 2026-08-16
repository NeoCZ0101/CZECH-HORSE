"use client";

import { useMemo, useState } from "react";
import { RotateCcw, Search } from "lucide-react";
import { experts, topics } from "@/lib/data";
import type { TopicId } from "@/lib/types";
import { ExpertCard } from "@/components/cards/expert-card";

function unique(values: string[]) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b, "cs"));
}

const selectClassName = "min-h-11 w-full min-w-0 rounded-[4px] border border-sand bg-cream px-3 text-sm text-ink outline-none focus:border-terracotta";

export function ExpertDirectory() {
  const [area, setArea] = useState("all");
  const [situation, setSituation] = useState("all");
  const [mode, setMode] = useState("all");
  const [city, setCity] = useState("all");
  const [service, setService] = useState("all");
  const [cooperation, setCooperation] = useState("all");

  const cities = useMemo(() => unique(experts.map((expert) => expert.location.city)), []);
  const serviceTypes = useMemo(() => unique(experts.map((expert) => expert.serviceType)), []);
  const situationOptions = useMemo(() => unique(experts.flatMap((expert) => expert.relatedSituations)), []);

  const filtered = useMemo(() => {
    return experts.filter((expert) => {
      const matchesArea = area === "all" || expert.areas.includes(area as TopicId);
      const matchesSituation = situation === "all" || expert.relatedSituations.includes(situation);
      const matchesMode = mode === "all" || expert.mode === mode;
      const matchesCity = city === "all" || expert.location.city === city;
      const matchesService = service === "all" || expert.serviceType === service;
      const matchesCooperation = cooperation === "all" || expert.cooperation === cooperation;

      return matchesArea && matchesSituation && matchesMode && matchesCity && matchesService && matchesCooperation;
    });
  }, [area, city, cooperation, mode, service, situation]);

  function resetFilters() {
    setArea("all");
    setSituation("all");
    setMode("all");
    setCity("all");
    setService("all");
    setCooperation("all");
  }

  return (
    <div className="grid gap-8">
      <div className="grid gap-3 rounded-[6px] border border-sand bg-surface p-4 shadow-sm md:grid-cols-3 lg:grid-cols-6">
        <label className="grid min-w-0 gap-2 text-sm font-medium text-ink">
          Oblast
          <select className={selectClassName} value={area} onChange={(event) => setArea(event.target.value)}>
            <option value="all">Všechny</option>
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>{topic.shortLabel}</option>
            ))}
          </select>
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-medium text-ink">
          Situace
          <select className={selectClassName} value={situation} onChange={(event) => setSituation(event.target.value)}>
            <option value="all">Všechny</option>
            {situationOptions.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-medium text-ink">
          Forma
          <select className={selectClassName} value={mode} onChange={(event) => setMode(event.target.value)}>
            <option value="all">Vše</option>
            <option value="Online">Online</option>
            <option value="Osobně">Osobně</option>
            <option value="Hybridně">Hybridně</option>
          </select>
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-medium text-ink">
          Město
          <select className={selectClassName} value={city} onChange={(event) => setCity(event.target.value)}>
            <option value="all">Všechna</option>
            {cities.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-medium text-ink">
          Služba
          <select className={selectClassName} value={service} onChange={(event) => setService(event.target.value)}>
            <option value="all">Všechny</option>
            {serviceTypes.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-medium text-ink">
          Spolupráce
          <select className={selectClassName} value={cooperation} onChange={(event) => setCooperation(event.target.value)}>
            <option value="all">Vše</option>
            <option value="Individuální">Individuální</option>
            <option value="Skupinová">Skupinová</option>
            <option value="Obojí">Obojí</option>
          </select>
        </label>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted">
        <Search aria-hidden size={17} />
        Zobrazeno {filtered.length} profilů. Pořadí v prototypu není placené.
      </div>

      <div className="grid gap-5">
        {filtered.map((expert) => (
          <ExpertCard key={expert.slug} expert={expert} />
        ))}
        {filtered.length === 0 ? (
          <div className="grid min-h-52 place-items-center rounded-[6px] border border-dashed border-sage bg-surface p-8 text-center">
            <div>
              <Search className="mx-auto text-terracotta" aria-hidden size={24} />
              <p className="mt-4 text-sm text-muted">Této kombinaci zatím neodpovídá žádný profil.</p>
              <button type="button" onClick={resetFilters} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-[6px] bg-forest px-4 py-2 text-sm font-semibold text-cream transition hover:bg-forest-deep">
                <RotateCcw aria-hidden size={17} />
                Zrušit filtry
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
