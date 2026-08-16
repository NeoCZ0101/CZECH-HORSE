"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Activity,
  ArrowRight,
  ChevronDown,
  CircleDollarSign,
  CircleDot,
  CloudLightning,
  HeartHandshake,
  Landmark,
  MessageCircle,
  ReceiptText,
  Scissors,
  ShieldCheck,
  Smile,
  Sparkles,
  Target,
  UsersRound,
  Utensils,
} from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { financeAreas, type FinanceArea } from "@/lib/finance-data";
import { bodyAreas, mindAreas, type HomeArea } from "@/lib/homepage-data";

type MapArea = HomeArea | FinanceArea;

function AreaIcon({ areaId, size }: { areaId: string; size: number }) {
  const props = { "aria-hidden": true, size };

  if (areaId === "vlasy-a-vousy") return <Scissors {...props} />;
  if (areaId === "plet-a-pece") return <Sparkles {...props} />;
  if (areaId === "telo-pohyb") return <Activity {...props} />;
  if (areaId === "stravovani") return <Utensils {...props} />;
  if (areaId === "zuby-a-usmev") return <Smile {...props} />;
  if (areaId === "psychicka-pohoda" || areaId === "vztahy-a-hranice") return <HeartHandshake {...props} />;
  if (areaId === "komunikace") return <MessageCircle {...props} />;
  if (areaId === "socialni-kontakt") return <UsersRound {...props} />;
  if (areaId === "emoce-a-tlak") return <CloudLightning {...props} />;
  return <CircleDot {...props} />;
}

function FinanceIcon({ areaId, size }: { areaId: string; size: number }) {
  const props = { "aria-hidden": true, size };

  if (areaId === "rozpocet-a-kalkulacka") return <ReceiptText {...props} />;
  if (areaId === "bydleni-a-hypoteka") return <Landmark {...props} />;
  if (areaId === "pojisteni-a-ochrana") return <ShieldCheck {...props} />;
  if (areaId === "prace-a-prijem") return <CircleDollarSign {...props} />;
  if (areaId === "vzdelavani-a-rozvoj") return <Target {...props} />;
  return <CircleDollarSign {...props} />;
}

function AreaNode({ area, active, onSelect }: { area: HomeArea; active: boolean; onSelect: (area: HomeArea) => void }) {
  const router = useRouter();
  const isMind = area.pillar === "mind";
  const theme = isMind
    ? active
      ? "border-petrol bg-petrol text-cream"
      : "border-petrol/25 bg-surface text-ink hover:border-petrol hover:bg-petrol/10"
    : active
      ? "border-olive bg-olive text-cream"
      : "border-olive/35 bg-surface text-ink hover:border-olive hover:bg-olive/10";

  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => area.id === "stravovani" ? router.push("/stravovani") : onSelect(area)}
      onFocus={() => onSelect(area)}
      onMouseEnter={() => onSelect(area)}
      className={`flex min-h-[5.4rem] w-full items-center gap-3 rounded-[6px] border p-3 text-left transition duration-200 ${theme}`}
    >
      <span className={active ? "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream/15" : isMind ? "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-petrol/10 text-petrol" : "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-olive/15 text-olive"}>
        <AreaIcon areaId={area.id} size={18} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-5">{area.shortTitle}</span>
        <span className={active ? "mt-1 block text-xs leading-4 text-cream/75" : "mt-1 block text-xs leading-4 text-muted"}>
          {area.topics.slice(0, 2).join(" · ")}
        </span>
      </span>
    </button>
  );
}

function FinanceNode({ area, active, onSelect }: { area: FinanceArea; active: boolean; onSelect: (area: FinanceArea) => void }) {
  const theme = active
    ? "border-terracotta bg-terracotta text-cream"
    : "border-terracotta/40 bg-surface text-ink hover:border-terracotta hover:bg-terracotta/10";

  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onSelect(area)}
      onFocus={() => onSelect(area)}
      onMouseEnter={() => onSelect(area)}
      className={`flex min-h-[5.4rem] w-full items-center gap-3 rounded-[6px] border p-3 text-left transition duration-200 ${theme}`}
    >
      <span className={active ? "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream/15" : "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-terracotta/10 text-terracotta"}>
        <FinanceIcon areaId={area.id} size={18} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-5">{area.shortTitle}</span>
        <span className={active ? "mt-1 block text-xs leading-4 text-cream/75" : "mt-1 block text-xs leading-4 text-muted"}>
          {area.topics.slice(0, 2).join(" · ")}
        </span>
      </span>
    </button>
  );
}

function MobileAreaList({ title, description, areas, isMind }: { title: string; description: string; areas: HomeArea[]; isMind: boolean }) {
  const router = useRouter();
  const tone = isMind ? "text-petrol" : "text-olive";

  return (
    <div>
      <p className={`text-sm font-semibold ${tone}`}>{title}</p>
      <p className="mt-1 text-sm leading-6 text-muted">{description}</p>
      <div className="mt-4 border-y border-sand">
        {areas.map((area) => (
          <details key={area.id} className="group border-b border-sand last:border-b-0">
            <summary onClick={() => area.id === "stravovani" ? router.push("/stravovani") : undefined} className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-3 py-3 text-left marker:content-none">
              <span className="flex min-w-0 items-center gap-3">
                <span className={isMind ? "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-petrol/10 text-petrol" : "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-olive/15 text-olive"}>
                  <AreaIcon areaId={area.id} size={18} />
                </span>
                <span className="text-sm font-semibold text-ink">{area.title}</span>
              </span>
              <ChevronDown className="shrink-0 text-muted transition duration-200 group-open:rotate-180" aria-hidden size={18} />
            </summary>
            <div className="pb-5 pl-12">
              <p className="text-sm leading-6 text-muted">{area.description}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-muted">Témata</p>
              <p className="mt-1 text-sm leading-6 text-ink">{area.topics.join(" · ")}</p>
              <Link href={area.id === "stravovani" ? "/stravovani" : "#co-chces-resit"} className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold ${tone}`}>
                {area.id === "stravovani" ? "Otevřít plánovač stravování" : "Popsat situaci"}
                <ArrowRight aria-hidden size={16} />
              </Link>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

function MobileFinanceList() {
  return (
    <div>
      <p className="text-sm font-semibold text-terracotta">FINANCE</p>
      <p className="mt-1 text-sm leading-6 text-muted">Jak mám přehled, jak vydělávám a pro co se chci rozhodovat.</p>
      <div className="mt-4 border-y border-sand">
        {financeAreas.map((area) => (
          <details key={area.id} className="group border-b border-sand last:border-b-0">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-3 py-3 text-left marker:content-none">
              <span className="flex min-w-0 items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-terracotta/10 text-terracotta">
                  <FinanceIcon areaId={area.id} size={18} />
                </span>
                <span className="text-sm font-semibold text-ink">{area.title}</span>
              </span>
              <ChevronDown className="shrink-0 text-muted transition duration-200 group-open:rotate-180" aria-hidden size={18} />
            </summary>
            <div className="pb-5 pl-12">
              <p className="text-sm leading-6 text-muted">{area.description}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-muted">Témata</p>
              <p className="mt-1 text-sm leading-6 text-ink">{area.topics.join(" · ")}</p>
              <Link href="#finance-kalkulacka" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-terracotta">
                Otevřít finanční přehled
                <ArrowRight aria-hidden size={16} />
              </Link>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

export function BodyMindMap() {
  const [activeArea, setActiveArea] = useState<MapArea>(bodyAreas[0]);
  const activeIsMind = activeArea.pillar === "mind";
  const activeIsFinance = activeArea.pillar === "finance";
  const activeIsBridge = activeArea.pillar === "bridge";
  const activeLabel = activeIsFinance ? "Finance" : activeIsBridge ? "Spojuje tělo a psychiku" : activeIsMind ? "Psychika" : "Tělo";
  const activeIconClass = activeIsFinance || activeIsBridge
    ? "grid h-12 w-12 place-items-center rounded-full bg-terracotta/10 text-terracotta"
    : activeIsMind
      ? "grid h-12 w-12 place-items-center rounded-full bg-petrol/10 text-petrol"
      : "grid h-12 w-12 place-items-center rounded-full bg-olive/15 text-olive";
  const activeLabelClass = activeIsFinance || activeIsBridge
    ? "text-sm font-semibold text-terracotta"
    : activeIsMind
      ? "text-sm font-semibold text-petrol"
      : "text-sm font-semibold text-olive";
  const activeAction = activeArea.id === "stravovani"
    ? { href: "/stravovani", label: "Otevřít plánovač stravování" }
    : activeIsFinance
    ? { href: "#finance-kalkulacka", label: activeArea.id === "rozpocet-a-kalkulacka" ? "Otevřít kalkulačku" : "Otevřít finanční přehled" }
    : { href: "#co-chces-resit", label: "Popsat svoji situaci" };

  return (
    <section id="mapa-cloveka" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-6 border-b border-sand pb-10 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Hlavní mapa člověka"
              title="Začni u oblasti, ve které se poznáváš."
              description="Tělo, psychika a finance se propisují do toho, jak člověk funguje v každém dni. Každá oblast ukazuje, kde můžeš začít a co s ní může souviset."
            />
            <p className="max-w-xs text-sm leading-6 text-muted">Na počítači vyber oblast v jednom ze tří sloupců. Na telefonu se mapa přepne do přehledného stromu.</p>
          </div>
        </ScrollReveal>

        <div className="mt-10 hidden lg:block">
          <div className="grid items-start gap-5 xl:gap-6 lg:grid-cols-3">
            <div>
              <div className="min-h-[4.75rem] border-l-2 border-olive pl-4">
                <p className="text-lg font-semibold text-forest-deep">TĚLO</p>
                <p className="mt-1 text-sm leading-5 text-muted">Jak vypadám a jak fyzicky funguju.</p>
              </div>
              <div className="mt-5 grid gap-3">
                {bodyAreas.map((area) => <AreaNode key={area.id} area={area} active={activeArea.id === area.id} onSelect={(selectedArea) => setActiveArea(selectedArea)} />)}
              </div>
            </div>

            <div>
              <div className="min-h-[4.75rem] border-l-2 border-petrol pl-4">
                <p className="text-lg font-semibold text-forest-deep">PSYCHIKA</p>
                <p className="mt-1 text-sm leading-5 text-muted">Jak se cítím, přemýšlím a funguju mezi lidmi.</p>
              </div>
              <div className="mt-5 grid gap-3">
                {mindAreas.map((area) => <AreaNode key={area.id} area={area} active={activeArea.id === area.id} onSelect={(selectedArea) => setActiveArea(selectedArea)} />)}
              </div>
            </div>

            <div>
              <div className="min-h-[4.75rem] border-l-2 border-terracotta pl-4">
                <p className="text-lg font-semibold text-forest-deep">FINANCE</p>
                <p className="mt-1 text-sm leading-5 text-muted">Jak mám přehled, jak vydělávám a pro co se chci rozhodovat.</p>
              </div>
              <div className="mt-5 grid gap-3">
                {financeAreas.map((area) => <FinanceNode key={area.id} area={area} active={activeArea.id === area.id} onSelect={(selectedArea) => setActiveArea(selectedArea)} />)}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 rounded-[8px] border border-sand bg-surface p-6 md:grid-cols-[auto_1fr] md:items-start">
            <span className={activeIconClass}>
              {activeIsFinance ? <FinanceIcon areaId={activeArea.id} size={22} /> : <AreaIcon areaId={activeArea.id} size={22} />}
            </span>
            <div aria-live="polite">
              <p className={activeLabelClass}>{activeLabel}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-ink">{activeArea.title}</h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{activeArea.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {activeArea.topics.map((topic) => <span key={topic} className="border border-sand bg-cream px-2.5 py-1 text-xs text-ink">{topic}</span>)}
              </div>
              <Link href={activeAction.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest transition hover:text-terracotta">
                {activeAction.label}
                <ArrowRight aria-hidden size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:hidden">
          <MobileAreaList title="TĚLO" description="Jak vypadám a jak fyzicky funguju." areas={bodyAreas} isMind={false} />
          <MobileAreaList title="PSYCHIKA" description="Jak se cítím, přemýšlím a funguju mezi lidmi." areas={mindAreas} isMind />
          <MobileFinanceList />
        </div>
      </div>
    </section>
  );
}
