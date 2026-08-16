import type { Metadata } from "next";
import { BookOpen, Handshake, ShieldCheck, Users } from "lucide-react";
import { BreadcrumbTrail } from "@/components/breadcrumbs";
import { PartnerInquiryForm } from "@/components/partner-inquiry-form";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Pro odborníky | Vlastní směr",
  description: "B2B hodnota platformy pro odborníky, služby a komunitní partnery."
};

const benefits = [
  "oslovit správný typ klienta",
  "vysvětlit svůj přístup bez zkratky v katalogu",
  "publikovat odborný obsah napojený na situace",
  "zapojit se do životních cest",
  "pořádat události a skupiny",
  "získávat kvalifikovanou poptávku",
  "transparentně ukázat kvalifikaci a hranice služby",
  "spolupracovat s dalšími profesemi"
];

export default function PartnersPage() {
  return (
    <main className="bg-cream">
      <section className="bg-forest-deep text-cream">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <BreadcrumbTrail dark items={[{ href: "/", label: "Domů" }, { label: "Pro odborníky" }]} />
          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold text-sand">Síť navazujících profesí</p>
            <h1 className="mt-3 max-w-[18ch] font-display text-4xl font-semibold leading-tight md:text-6xl">Ne další katalog, kde se platí hlavně za viditelnost.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/75">
              Člověk nejdřív porozumí situaci a teprve potom hledá vhodnou službu. Partner díky tomu dostává poptávku s kontextem, realističtějším očekáváním a jasnější návazností.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeading
            eyebrow="Hodnota pro partnery"
            title="Profil je začátek. Hodnota vzniká v návaznosti."
            description="Psycholog, lektor, fyzioterapeut, trenér, nutriční terapeut, dentální hygienista i lokální služba vstupují do cesty jen tam, kde jejich práce skutečně dává smysl."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-3 rounded-[6px] border border-sand bg-cream p-4">
                <ShieldCheck className="mt-0.5 shrink-0 text-forest" aria-hidden size={19} />
                <p className="text-sm leading-6 text-muted">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            { icon: Users, title: "Kvalifikovanější poptávka", text: "Člověk už ví, proč danou službu hledá a co od ní může rozumně čekat." },
            { icon: BookOpen, title: "Obsah v kontextu", text: "Článek, video nebo pracovní list navazuje na konkrétní situaci, ne na obecný marketing." },
            { icon: Handshake, title: "Spolupráce profesí", text: "Situace mohou navazovat napříč psychikou, komunikací, zdravím, stravou, tělem, prezentací a prací bez míchání kompetencí." }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-[6px] border border-sage/60 bg-surface p-6 shadow-sm">
                <Icon className="text-terracotta" aria-hidden size={24} />
                <h2 className="mt-5 text-xl font-semibold text-forest-deep">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <SectionHeading
            eyebrow="Zájem o partnerství"
            title="Ukažte, s čím pomáháte a kde vaše role končí."
            description="Formulář je zatím prototypový. Další verze naváže ověřením kvalifikace, redakčním profilem, rozsahem práce a výběrem vhodných situací."
          />
          <PartnerInquiryForm />
        </div>
      </section>
    </main>
  );
}
