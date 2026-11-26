import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  language: "cs" | "en";
  title: string;
  image: string;
  sections: { title: string; text?: string; href?: string; items?: { title: string; text: string }[] }[];
};

export function KitchenGuide({ language, title, image, sections }: Props) {
  const english = language === "en";
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link href={english ? "/en/stravovani" : "/stravovani"} className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:underline">
        <ArrowLeft aria-hidden size={17} />
        {english ? "Back to food and nutrition" : "Zpět na stravování"}
      </Link>
      <header className="grid items-center gap-6 border-b border-sand py-8 sm:grid-cols-2">
        <h1 className="font-display text-4xl font-semibold text-ink">{title}</h1>
        <Image src={image} width={960} height={400} alt="" sizes="(min-width: 640px) 45vw, 95vw" className="h-auto w-full" />
      </header>
      <div className="grid gap-x-10 sm:grid-cols-2">
        {sections.map(section => (
          <section key={section.title} className="border-b border-sand py-6">
            <h2 className="font-display text-2xl font-semibold text-ink">{section.href ? (
              <Link href={section.href} className="inline-flex items-center gap-2 text-forest underline decoration-olive/50 underline-offset-4 hover:decoration-forest">
                {section.title}<ArrowRight aria-hidden size={18} />
              </Link>
            ) : section.title}</h2>
            {section.text && <p className="mt-3 leading-6 text-muted">{section.text}</p>}
            {section.items && (
              <dl className="mt-4 space-y-4">
                {section.items.map(item => (
                  <div key={item.title}>
                    <dt className="font-semibold text-forest">{item.title}</dt>
                    <dd className="mt-1 leading-6 text-muted">{item.text}</dd>
                  </div>
                ))}
              </dl>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
