"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Activity, ArrowRight, BookOpen, ChevronDown, Pause, Play, CircleDollarSign, Landmark, ReceiptText, Scissors, ShieldCheck, Smile, Sparkles, Target, Utensils } from "lucide-react";
import { bodyAreas } from "@/lib/homepage-data";
import { financeAreas } from "@/lib/finance-data";
import { FinanceCalculator } from "./finance-calculator";
import { MindNotes } from "./mind-notes";

import art from "./pillar-art.module.css";

type Area = { id: string; shortTitle: string; description: string; topics: string[] };
type Language = "cs" | "en";
type Pillar = "body" | "mind" | "finance";

const headings = {
  cs: { body: ["Tělo", "Pohyb a každodenní péče."], mind: ["Mysl", "Co mi dělá dobře."], finance: ["Finance", "Přehled. Rezerva. Klid."] },
  en: { body: ["Body", "Movement and everyday care."], mind: ["Mind", "What lifts my mood."], finance: ["Finance", "Clarity. Reserve. Calm."] },
};

const areaIcons = {
  "vlasy-a-vousy": Scissors, "hair-and-beard": Scissors, "plet-a-pece": Sparkles, "skin-and-care": Sparkles,
  "telo-pohyb": Activity, "movement-and-fitness": Activity, stravovani: Utensils, "food-and-nutrition": Utensils,
  "zuby-a-usmev": Smile, "teeth-and-smile": Smile, "rozpocet-a-kalkulacka": ReceiptText, "budget-and-calculator": ReceiptText,
  "bydleni-a-hypoteka": Landmark, "home-and-mortgage": Landmark, pojisteni: ShieldCheck, "pojisteni-a-ochrana": ShieldCheck, "insurance-and-protection": ShieldCheck,
  "prace-a-prijem": CircleDollarSign, "work-and-income": CircleDollarSign, "vzdelavani-a-rozvoj": Target, "learning-and-growth": Target,
};

function PillarHeading({ pillar, language, onReady }: { pillar: Pillar; language: Language; onReady: (id: string) => void }) {
  const [title, line] = headings[language][pillar];
  const border = { body: "border-olive", mind: "border-amber", finance: "border-petrol" }[pillar];
  return <header className={`mb-4 flex items-center gap-4 border-b-2 pb-3 md:mb-5 md:block ${border}`}>
    <div aria-hidden className="relative size-[104px] shrink-0 overflow-hidden md:aspect-square md:h-auto md:w-full">
      {["studio", "print"].map(set => (
        <Image key={set} src={`/pillar-${pillar}${set === "studio" ? "-studio" : ""}.webp`}
          width={720} height={720} sizes="(min-width:1280px) 390px, (min-width:768px) 31vw, 104px"
          loading="eager" onLoad={() => onReady(pillar + set)} alt=""
          className={set === "studio" ? "block size-full object-cover" : art.print} />
      ))}
    </div>
    <div className="min-w-0 md:pt-4">
      <h2 className="font-display text-3xl font-semibold leading-tight text-forest-deep">{title}</h2>
      <p className="mt-1 text-sm leading-5 text-muted">{line}</p>
    </div>
  </header>;
}

function TopicList({ areas, pillar, language }: { areas: Area[]; pillar: "body" | "finance"; language: Language }) {
  const calculator = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    if (!calculator.current) return;
    const reveal = () => { if (location.hash === "#finance-kalkulacka" && calculator.current) calculator.current.open = true; };
    reveal();
    window.addEventListener("hashchange", reveal);
    return () => window.removeEventListener("hashchange", reveal);
  }, []);
  const cs = language === "cs";
  const nutrition = cs ? "/stravovani" : "/en/stravovani";
  const tone = pillar === "body" ? "border-olive/35 hover:border-olive open:bg-olive/5" : "border-petrol/35 hover:border-petrol open:bg-petrol/5";
  const row = "flex min-h-[4.5rem] w-full cursor-pointer list-none items-center gap-3 p-3 text-left";
  return <div className="grid gap-3">{areas.map(area => {
    const food = area.id === "stravovani" || area.id === "food-and-nutrition";
    const budget = area.id === "rozpocet-a-kalkulacka" || area.id === "budget-and-calculator";
    const Icon = areaIcons[area.id as keyof typeof areaIcons] ?? BookOpen;
    const label = <>
      <span className={`grid size-9 shrink-0 place-items-center rounded-full ${pillar === "body" ? "bg-olive/10 text-olive" : "bg-petrol/10 text-petrol"}`}><Icon size={18} aria-hidden /></span>
      <span><strong className="block text-sm">{area.shortTitle}</strong><span className="mt-1 block text-xs text-muted">{area.topics.slice(0,2).join(" · ")}</span></span>
    </>;
    return food ? <Link key={area.id} href={nutrition} className={`${row} rounded-[6px] border bg-surface ${tone}`}>{label}<ArrowRight size={16} aria-hidden className="ml-auto shrink-0" /></Link> :
      <details key={area.id} id={budget ? "finance-kalkulacka" : undefined} ref={budget ? calculator : undefined} className={`group scroll-mt-24 rounded-[6px] border bg-surface ${tone}`}>
        <summary className={row}>{label}<ChevronDown size={16} aria-hidden className="ml-auto shrink-0 group-open:rotate-180" /></summary>
        {budget ? <div className="rounded-b-[5px] bg-petrol pt-4 text-cream"><FinanceCalculator language={language} /></div> : <p className="px-4 pb-4 text-sm leading-6 text-forest">{area.description}</p>}
      </details>;
  })}</div>;
}

export function BodyMindMap({ language = "cs", body = bodyAreas, finance = financeAreas }: { language?: Language; body?: Area[]; finance?: Area[] }) {
  const cs = language === "cs";
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const loaded = useRef(new Set<string>());
  function markLoaded(id: string) {
    loaded.current.add(id);
    if (loaded.current.size === 6) setReady(true);
  }
  const motionLabel = paused ? (cs ? "Spustit střídání obrázků" : "Play image rotation") : (cs ? "Pozastavit střídání obrázků" : "Pause image rotation");
  return <section data-art-ready={ready} data-art-paused={paused} id="mapa-cloveka" aria-labelledby="map-title" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-14 pt-6 sm:px-6 lg:px-8 lg:pt-8">
    <div className="mb-5 flex items-center justify-between gap-4 sm:mb-7">
      <h1 id="map-title" className="font-display text-4xl font-semibold text-forest-deep sm:text-5xl">Vlastní směr</h1>
      <button type="button" onClick={() => setPaused(p => !p)} disabled={!ready} aria-label={motionLabel} title={motionLabel}
        className="inline-grid size-11 shrink-0 place-items-center rounded-full border border-sand text-forest hover:bg-surface disabled:opacity-50 motion-reduce:hidden">
        {paused ? <Play size={16} aria-hidden /> : <Pause size={16} aria-hidden />}
      </button>
    </div>
    <nav aria-label={cs ? "Oblasti" : "Areas"} className="mb-5 flex justify-between border-y border-sand md:hidden">
      {(["body", "mind", "finance"] as const).map(p => <a key={p} href={`#map-${p}`} className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-forest">{headings[language][p][0]}<ChevronDown size={14} aria-hidden /></a>)}
    </nav>
    <div className="grid items-start gap-8 md:grid-cols-3 md:gap-4 xl:gap-6">
      {(["body", "mind", "finance"] as const).map(p => <section key={p} id={`map-${p}`} className="min-w-0 scroll-mt-24">
        <PillarHeading pillar={p} language={language} onReady={markLoaded} />
        {p === "mind" ? <MindNotes language={language} /> : <TopicList pillar={p} language={language} areas={p === "body" ? body : finance} />}
        {p === "body" && <Link href={cs ? "/stravovani#recepty" : "/en/stravovani#recipes"} className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-forest hover:underline"><BookOpen size={16} aria-hidden />{cs ? "Recepty" : "Recipes"}</Link>}
      </section>)}
    </div>
  </section>;
}
