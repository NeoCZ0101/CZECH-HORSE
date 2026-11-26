import Image from "next/image";
import Link from "next/link";

const guides = [
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
  {
    image: "/sauces-seasoning.webp",
    cs: { href: "/stravovani/omacky-a-dochuceni", title: "Omáčky a dochucení", summary: "Omáčky, bylinky, koření a med." },
    en: { href: "/en/stravovani/sauces-and-seasoning", title: "Sauces and seasoning", summary: "Sauces, herbs, spices and honey." },
  },
  {
    image: "/produce.webp",
    cs: { href: "/stravovani/zelenina-a-houby", title: "Zelenina, ovoce a houby", summary: "Mrkev a brokolice, jablka a hrozny, žampiony a hlíva." },
    en: { href: "/en/stravovani/vegetables-and-mushrooms", title: "Vegetables, fruit and mushrooms", summary: "Carrots and broccoli, apples and grapes, button and oyster mushrooms." },
  },
  {
    image: "/eggs-cheese-deli.webp",
    cs: { href: "/stravovani/vejce-syry-a-uzeniny", title: "Vejce, sýry a uzeniny", summary: "Vejce, čerstvé i zrající sýry, šunka a salám." },
    en: { href: "/en/stravovani/eggs-cheese-and-deli-meats", title: "Eggs, cheese and deli meats", summary: "Eggs, fresh and aged cheeses, ham and salami." },
  },
  {
    image: "/drinks-with-wine.webp",
    cs: { href: "/stravovani/napoje", title: "Nápoje", summary: "Voda, káva, mléko a džusy, pivo, víno a destiláty." },
    en: { href: "/en/stravovani/drinks", title: "Drinks", summary: "Water, coffee, milk and juice, beer, wine and spirits." },
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
