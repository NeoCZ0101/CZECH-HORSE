import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowRight, HelpCircle, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContentCard } from "@/components/cards/content-card";
import { CommunityGroupCard } from "@/components/cards/community-group-card";
import { EventCard } from "@/components/cards/event-card";
import { ExpertCard } from "@/components/cards/expert-card";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { StepTimeline } from "@/components/step-timeline";
import { articles, communityGroups, events, experts, lifeJourneys, situationGuides, situations } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return situations.map((situation) => ({ slug: situation.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const situation = situations.find((item) => item.slug === slug);

  return {
    title: situation ? `${situation.title} | Vlastní směr` : "Situace | Vlastní směr",
    description: situation?.description
  };
}

export default async function SituationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const situation = situations.find((item) => item.slug === slug);

  if (!situation) {
    notFound();
  }

  const guide = situationGuides[situation.slug];
  const journey = lifeJourneys.find((item) => item.slug === situation.slug);
  const signals = guide?.signals ?? [
    "Situace se vrací opakovaně.",
    "Není jasné, která část potřebuje vlastní krok a která vhodnou podporu.",
    "Další krok působí větší, než ve skutečnosti je.",
  ];
  const questions = guide?.reflectionQuestions ?? [
    "Co se v této situaci opakuje?",
    "Který malý krok bys mohl zkusit bez velkého rizika?",
    "Kdo nebo co ti může pomoct držet realitu?",
  ];
  const selfSteps = guide?.selfSteps ?? [
    "Pojmenuj jednu konkrétní scénu z posledních sedmi dnů.",
    "Napiš, co jsi v ní chtěl udělat a co jsi nakonec udělal.",
    "Vyber jeden příští krok, který trvá méně než hodinu.",
  ];
  const relatedExperts = experts
    .filter((expert) => expert.relatedSituations.includes(situation.title))
    .sort((a, b) => b.areas.filter((area) => situation.areas.includes(area)).length - a.areas.filter((area) => situation.areas.includes(area)).length)
    .slice(0, 3);
  const relatedArticles = articles
    .filter((article) => situation.areas.includes(article.topic))
    .sort((a, b) => situation.areas.indexOf(a.topic) - situation.areas.indexOf(b.topic))
    .slice(0, 4);
  const relatedGroups = communityGroups
    .filter((group) => group.areas.some((area) => situation.areas.includes(area)))
    .sort((a, b) => b.areas.filter((area) => situation.areas.includes(area)).length - a.areas.filter((area) => situation.areas.includes(area)).length);
  const relatedEvents = events
    .filter((event) => event.areas.some((area) => situation.areas.includes(area)))
    .sort((a, b) => b.areas.filter((area) => situation.areas.includes(area)).length - a.areas.filter((area) => situation.areas.includes(area)).length);
  const preferredGroup = communityGroups.find((group) => group.title === journey?.community) ?? relatedGroups[0] ?? communityGroups[0];
  const fallbackJourney = [
    { title: "Zachytit konkrétní scénu", description: "Vyber jednu nedávnou situaci, ve které se problém projevil.", task: "Napiš, co se stalo a co tě to stálo." },
    { title: "Rozlišit vrstvy", description: "Odděl praktickou překážku, vlastní návyk, tlak okolí a možnou odbornou část.", task: "Označ jednu věc, kterou můžeš ověřit." },
    { title: "Udělat malý krok", description: "Zvol krok, který přinese novou informaci a nevyžaduje změnit všechno.", task: "Naplánuj ho do příštích sedmi dnů." },
    { title: "Vyhodnotit realitu", description: "Sleduj, co skutečně pomohlo a jaká podpora dává smysl dál.", task: "Zapiš výsledek ve třech větách." },
  ];

  const modelExperiences = situation.slug === "stydim-se-usmat"
    ? [
        {
          quote: "Největší úleva byla, že první návštěva nebyla rozsudek. Dostal jsem stav a pořadí kroků, ne přednášku o tom, proč jsem nepřišel dřív.",
          name: "Daniel, 36",
          context: "modelová zkušenost s návratem k péči",
        },
        {
          quote: "Zuby jsem začal řešit, ale při focení jsem se pořád schovával. Až pak mi došlo, že praktický problém a starý stud nejsou úplně stejná věc.",
          name: "Michal, 31",
          context: "modelová zkušenost s dlouhodobým studem",
        },
      ]
    : [
        {
          quote: "Nejvíc mi pomohlo zjistit, že nemusím hned měnit celý život. První krok byl pojmenovat jednu situaci, která se pořád vracela.",
          name: "Petr, 34",
          context: "modelová zkušenost s prvním krokem",
        },
        {
          quote: "Dlouho jsem čekal, až budu mít jistotu. Ve skutečnosti mi pomohl až malý pokus, podle kterého šlo rozhodnout, co dál.",
          name: "Martin, 39",
          context: "modelová zkušenost s rozhodováním",
        },
      ];
  return (
    <main className="bg-cream">
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ href: "/", label: "Domů" }, { href: "/co-resim", label: "Co řeším" }, { label: situation.title }]} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_0.55fr]">
            <div>
              <p className="text-sm font-semibold text-terracotta">Detail životní situace</p>
              <h1 className="mt-3 max-w-[18ch] font-display text-4xl font-semibold leading-tight text-forest-deep md:text-6xl">{situation.title}</h1>
              <p className="mt-5 text-lg leading-8 text-muted">
                {guide?.intro ?? situation.description}
              </p>
            </div>
            <aside className="self-start rounded-[6px] border border-sage bg-mist p-5">
              <h2 className="text-lg font-semibold text-forest-deep">Další rozumný krok</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{situation.nextStep}</p>
              <Link
                href="#samostatne-kroky"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-[6px] bg-forest px-5 py-3 text-sm font-semibold text-cream transition hover:bg-forest-deep"
              >
                Začít prvními kroky
                <ArrowRight aria-hidden size={17} />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeading
            eyebrow="Typické projevy"
            title="Nejde o nálepku. Jde o přesnější popis."
            description="Tyto body nemají určovat diagnózu. Mají pomoct všimnout si, co se v běžném životě opakuje."
          />
          <div className="grid gap-3">
            {signals.map((signal) => (
              <div key={signal} className="flex gap-3 rounded-[6px] border border-sand bg-surface p-4">
                <HelpCircle className="mt-0.5 shrink-0 text-forest" aria-hidden size={19} />
                <p className="text-sm leading-6 text-muted">{signal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Otázky k zamyšlení" title="Nejdřív si udělej trochu místa v hlavě." />
            <ul className="mt-7 grid gap-3">
              {questions.map((question) => (
                <li key={question} className="border-l-2 border-terracotta bg-cream px-4 py-3 text-sm leading-6 text-muted">
                  {question}
                </li>
              ))}
            </ul>
          </div>
          <div id="samostatne-kroky">
            <SectionHeading eyebrow="Co můžeš zkusit sám" title="Malé kroky, které nevyžadují změnit celý život najednou." />
            <ul className="mt-7 grid gap-3">
              {selfSteps.map((step) => (
                <li key={step} className="rounded-[6px] border border-sand px-4 py-3 text-sm leading-6 text-muted">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeading
            eyebrow="Doporučená cesta"
            title={journey?.title ?? "Od přesnějšího popisu k jednomu rozumnému kroku."}
            description={journey ? `${journey.startingPoint} Výsledek: ${journey.outcome}` : "Cesta neslibuje nový život přes noc. Pomáhá rozlišit, co můžeš udělat sám a kde dává smysl navazující podpora."}
          />
          <StepTimeline steps={journey?.stages ?? fallbackJourney} />
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionHeading
              eyebrow="Související obsah"
              title="Ne pasivní čtení, ale opora pro další krok."
              description="Část materiálů může být komerční. V prototypu je takový obsah označený přímo na kartě."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {(relatedArticles.length ? relatedArticles : articles.slice(0, 4)).map((article) => (
                <ContentCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeading
            eyebrow="Modelové zkušenosti"
            title="Ne jako návod na život. Spíš důkaz, že podobné téma má víc podob."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {modelExperiences.map((experience) => (
              <TestimonialCard key={experience.name} {...experience} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-deep py-14 text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="Vhodné typy podpory"
            title="Odborník má navazovat na situaci, ne nahrazovat vlastní rozhodnutí."
            description="Tady se ukazuje, jaké typy služeb mohou dávat smysl. Nejde o diagnózu ani povinnost službu využít."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {(guide?.expertTypes ?? situation.relatedExpertTypes).map((type) => (
              <article key={type} className="rounded-[6px] border border-cream/15 bg-cream/5 p-5">
                <ShieldCheck className="text-sand" aria-hidden size={22} />
                <p className="mt-4 text-sm leading-6 text-cream/75">{type}</p>
              </article>
            ))}
          </div>
          <div className="mt-9 grid gap-5">
            {(relatedExperts.length ? relatedExperts : experts.slice(0, 2)).map((expert) => (
              <ExpertCard key={expert.slug} expert={expert} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Události a skupiny" title="Pokračovat můžeš v konkrétním formátu." />
            <div className="mt-7 grid gap-5">
              <CommunityGroupCard group={preferredGroup} />
              <EventCard event={relatedEvents[0] ?? events[0]} />
            </div>
          </div>
          <aside className="self-start border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 shrink-0 text-amber-700" aria-hidden size={22} />
              <div>
                <h2 className="text-lg font-semibold text-forest-deep">Kdy vyhledat odbornou pomoc</h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {guide?.helpNotice ?? "Pokud je situace dlouhodobě zahlcující, souvisí s úzkostí, násilím, sebepoškozováním nebo zdravotním stavem, je vhodné vyhledat odbornou psychologickou, psychoterapeutickou nebo zdravotní pomoc. Platforma ji nenahrazuje."}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
