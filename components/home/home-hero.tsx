import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, Brain, Leaf, WalletCards } from "lucide-react";
import { FinanceCalculator } from "./finance-calculator";

type Language = "cs" | "en";
type Pillar = "body" | "mind" | "finance";

const copy = {
  cs: {
    pillars: "Tři pilíře", body: "Tělo", mind: "Psychika", finance: "Finance",
    bodyLine: "Pohyb. Pleť. Vlasy. Vousy.", mindLine: "Pohoda. Kontakt. Jistota.", financeLine: "Přehled. Rezerva. Klid.",
    bodyTopics: "Péče o tělo", mindTopics: "Témata psychiky", financeTopics: "Finanční témata", recipes: "Recepty",
    movement: "Muž si doma protahuje ramena.", grooming: "Detail upravených vlasů a vousů při ranní péči.", talk: "Muž naslouchá při osobním rozhovoru.",
  },
  en: {
    pillars: "Three pillars", body: "Body", mind: "Mind", finance: "Finance",
    bodyLine: "Movement. Skin. Hair. Beard.", mindLine: "Calm. Connection. Confidence.", financeLine: "Clarity. Reserve. Calm.",
    bodyTopics: "Body care", mindTopics: "Explore the mind", financeTopics: "Money topics", recipes: "Recipes",
    movement: "A man stretching his shoulders at home.", grooming: "Groomed hair and beard during a morning routine.", talk: "A man listening during a conversation.",
  },
};

function MapLink({ pillar, label }: { pillar: Pillar; label: string }) {
  const style = "min-h-11 items-center gap-2 font-semibold underline-offset-4 hover:underline";
  return <>
    <a href={`#map-${pillar}`} className={`hidden lg:inline-flex ${style}`}>{label}<ArrowRight size={16} aria-hidden /></a>
    <a href={`#map-${pillar}-mobile`} className={`inline-flex lg:hidden ${style}`}>{label}<ArrowRight size={16} aria-hidden /></a>
  </>;
}

export function HomeHero({ language = "cs" }: { language?: Language }) {
  const t = copy[language];
  const financeId = "finance-kalkulacka";
  return (
    <section aria-labelledby="home-title" className="border-b border-sand bg-surface text-ink">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="mb-5 flex items-baseline gap-4 sm:mb-6">
          <h1 id="home-title" className="font-display text-4xl font-semibold text-forest-deep sm:text-5xl">Vlastní směr</h1>
          <span aria-hidden className="h-px flex-1 self-center bg-sand" />
          <span className="text-sm font-semibold text-muted">{t.pillars}</span>
        </div>
        <nav aria-label={t.pillars} className="mb-4 flex justify-between gap-2 border-y border-sand sm:hidden">
          {([["hero-body", t.body], ["hero-mind", t.mind], [financeId, t.finance]] as const).map(([id, label]) => (
            <a key={id} href={"#" + id} className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-forest">{label}<ArrowDown size={14} aria-hidden /></a>
          ))}
        </nav>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(["body", "mind"] as const).map(pillar => {
            const body = pillar === "body";
            const Icon = body ? Leaf : Brain;
            return (
              <section key={pillar} id={`hero-${pillar}`} aria-labelledby={`hero-${pillar}-title`} className={`flex min-w-0 scroll-mt-24 flex-col border-t-4 ${body ? "border-olive bg-mist" : "border-amber bg-[#f4e8c9]"}`}>
                <header className="px-5 py-5 sm:px-6">
                  <div className="flex items-center justify-between gap-3">
                    <h2 id={`hero-${pillar}-title`} className="font-display text-3xl font-semibold">{t[pillar]}</h2>
                    <Icon size={21} aria-hidden className={body ? "text-olive" : "text-[#816428]"} />
                  </div>
                  <p className="mt-1 text-sm text-forest">{body ? t.bodyLine : t.mindLine}</p>
                </header>
                <div className={`relative flex-1 min-h-52 sm:min-h-60 lg:min-h-64 ${body ? "grid grid-cols-[1.05fr_1fr] gap-0.5" : ""}`}>
                  {body ? <>
                    <div className="relative"><Image src="/hero-body-movement.png" alt={t.movement} fill priority sizes="(min-width:1024px) 16vw, (min-width:640px) 24vw, 48vw" className="object-cover object-[50%_35%]" /></div>
                    <div className="relative"><Image src="/hero-grooming.png" alt={t.grooming} fill sizes="(min-width:1024px) 16vw, (min-width:640px) 24vw, 48vw" className="object-cover object-[50%_30%]" /></div>
                  </> : <Image src="/hero-psychology.png" alt={t.talk} fill sizes="(min-width:1024px) 32vw, (min-width:640px) 48vw, 95vw" className="object-cover object-[50%_34%]" />}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-x-3 px-5 py-1 text-sm text-forest sm:px-6">
                  <MapLink pillar={pillar} label={body ? t.bodyTopics : t.mindTopics} />
                  {body && <Link href={language === "cs" ? "/stravovani#recepty" : "/en/stravovani#recipes"} className="inline-flex min-h-11 items-center gap-1.5 hover:underline"><BookOpen size={16} aria-hidden />{t.recipes}</Link>}
                </div>
              </section>
            );
          })}
          <section id={financeId} aria-labelledby="hero-finance-title" className="flex min-w-0 scroll-mt-24 flex-col border-t-4 border-petrol bg-petrol text-cream sm:col-span-2 lg:col-span-1">
            <header className="px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between gap-3"><h2 id="hero-finance-title" className="font-display text-3xl font-semibold">{t.finance}</h2><WalletCards size={21} aria-hidden /></div>
              <p className="mt-1 text-sm">{t.financeLine}</p>
            </header>
            <FinanceCalculator language={language} />
            <div className="border-t border-white/20 px-5 py-1 text-sm sm:px-6"><MapLink pillar="finance" label={t.financeTopics} /></div>
          </section>
        </div>
      </div>
    </section>
  );
}
