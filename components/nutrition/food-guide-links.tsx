import Image from "next/image";
import Link from "next/link";

const guides = [
  {
    image: "/sauces.webp",
    cs: { href: "/stravovani/omacky", title: "Omáčky", summary: "Rajčatová, koprová, houbová a bazalkové pesto." },
    en: { href: "/en/stravovani/sauces", title: "Sauces", summary: "Tomato sauce, creamy dill sauce, mushroom gravy and basil pesto." },
  },
  {
    image: "/food-meat-fish-raw.png",
    cs: { href: "/stravovani/maso-a-ryby", title: "Maso a ryby", summary: "Drůbež, vepřové, hovězí, jehněčí i ryby." },
    en: { href: "/en/stravovani/meat-and-fish", title: "Meat and fish", summary: "Poultry, pork, beef, lamb and fish." },
  },
  {
    image: "/side-dishes.webp",
    cs: { href: "/stravovani/prilohy", title: "Přílohy", summary: "Brambory, rýže, těstoviny, obiloviny, luštěniny a knedlíky." },
    en: { href: "/en/stravovani/side-dishes", title: "Side dishes", summary: "Potatoes, rice, pasta, grains, pulses and dumplings." },
  },
];

export function FoodGuideLinks({ language }: { language: "cs" | "en" }) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {guides.map(guide => {
        const { href, title, summary } = guide[language];
        return (
          <Link key={href} href={href} className="overflow-hidden border border-sand bg-surface text-left transition hover:border-petrol focus-visible:outline-petrol">
            <div className="relative aspect-[2.4] bg-white">
              <Image src={guide.image} alt="" fill sizes="(min-width: 768px) 30vw, 92vw" className="object-contain" />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{summary}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
