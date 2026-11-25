import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const dishes = {
  cs: [
    {
      title: "Brambory",
      tip: "Na salát vyber pevné brambory typu A, které po uvaření drží tvar. Moučnatý typ C se snadno rozmačká na jemnou kaši.",
      pair: "Vařené s koprem k rybě, kaše k sekané nebo salát k řízku.",
    },
    {
      title: "Rýže",
      tip: "Basmati má dlouhá zrna, která se po uvaření snadno oddělí. Jasmínová rýže je měkčí a lehce lepivá.",
      pair: "Basmati k čočkovému kari, jasmínová rýže k zelenině z pánve.",
    },
    {
      title: "Těstoviny",
      tip: "Krátká kolínka a vrtule zachytí omáčku v záhybech. Široké nudle se dobře promíchají s houbami a máslem.",
      pair: "Kolínka k rajské omáčce nebo široké nudle k hovězímu na houbách.",
    },
    {
      title: "Obiloviny a kuskus",
      tip: "Bulgur je nalámaná předvařená pšenice, kroupy bývají ječné. Kuskus jsou drobné těstoviny z krupice. Běžný instantní kuskus stačí zalít podle návodu a načechrat vidličkou.",
      pair: "Bulgur s petrželí k jehněčímu, kroupy k pečeným houbám.",
    },
    {
      title: "Luštěniny",
      tip: "Zelená čočka si při šetrném vaření zachová tvar. Červená loupaná čočka se snadno rozvaří na kaši. Uvařenou cizrnu z konzervy můžeš scedit a rovnou ochutit.",
      pair: "Vlažná čočka s hořčičnou zálivkou k vejci nebo cizrna s citronem k pečené zelenině.",
    },
    {
      title: "Knedlíky",
      tip: "Houskový knedlík má pórovitou střídku, která dobře nasákne omáčku. Bramborový je hutnější a podrží si tvar i vedle šťavnatého zelí.",
      pair: "Houskový ke svíčkové, bramborový k pečenému vepřovému se zelím.",
    },
  ],
  en: [
    {
      title: "Potatoes",
      tip: "Waxy potatoes hold their shape when boiled for a salad. Floury potatoes break down easily for a smooth mash.",
      pair: "Boiled with dill alongside fish, mashed with meatloaf or in a salad with schnitzel.",
    },
    {
      title: "Rice",
      tip: "Basmati cooks into long, separate grains. Jasmine rice is softer and slightly sticky.",
      pair: "Basmati with lentil curry or jasmine rice with stir-fried vegetables.",
    },
    {
      title: "Pasta",
      tip: "Elbows and spirals catch sauce in their curves. Wide ribbons toss well with mushrooms and butter.",
      pair: "Elbows with tomato sauce or ribbons with beef and mushrooms.",
    },
    {
      title: "Grains and couscous",
      tip: "Bulgur is cracked, parboiled wheat. Pearl barley has a chewy bite. Couscous is a tiny semolina pasta. Prepare instant couscous according to the packet and fluff it with a fork.",
      pair: "Bulgur with parsley alongside lamb, or pearl barley with roasted mushrooms.",
    },
    {
      title: "Pulses",
      tip: "Green lentils hold their shape when simmered gently. Split red lentils soften into a purée. Canned chickpeas can be drained and seasoned straight away.",
      pair: "Warm lentils with mustard dressing alongside an egg, or lemony chickpeas with roast vegetables.",
    },
    {
      title: "Czech dumplings",
      tip: "Sliced bread dumplings soak up sauces through their airy crumb. Potato dumplings are denser and hold their shape alongside braised cabbage.",
      pair: "Bread dumplings with svíčková cream sauce, or potato dumplings with roast pork and cabbage.",
    },
  ],
};

export function SideDishGuide({ language }: { language: "cs" | "en" }) {
  const english = language === "en";
  return (
    <main className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href={english ? "/en/stravovani" : "/stravovani"} className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:underline">
          <ArrowLeft aria-hidden size={17} />
          {english ? "Back to food and nutrition" : "Zpět na stravování"}
        </Link>
        <header className="grid items-center gap-6 border-b border-sand py-8 sm:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-semibold text-ink">{english ? "Side dishes" : "Přílohy"}</h1>
            <p className="mt-3 max-w-md leading-7 text-muted">
              {english ? "What goes well with fish, a roast or a rich sauce? Compare the texture of six everyday sides and find a pairing for your meal." : "Co k rybě, co k pečeni a co k husté omáčce? Porovnej šest běžných příloh podle toho, jak se chovají při vaření a s čím chutnají."}
            </p>
          </div>
          <Image src="/side-dishes.webp" width={1200} height={500} sizes="(min-width: 640px) 45vw, 95vw" alt="" className="h-auto w-full" />
        </header>
        <div className="grid gap-x-10 sm:grid-cols-2">
          {dishes[language].map(dish => (
            <section key={dish.title} className="border-b border-sand py-6">
              <h2 className="font-display text-2xl font-semibold text-ink">{dish.title}</h2>
              <p className="mt-3 leading-6 text-muted">{dish.tip}</p>
              <p className="mt-3 border-l-2 border-olive pl-3 text-sm leading-6 text-forest">{dish.pair}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
