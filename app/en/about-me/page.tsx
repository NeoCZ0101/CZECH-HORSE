import type { Metadata } from "next";
import { BreadcrumbTrail } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "About me | Vlastní směr",
  description: "I started Vlastní směr for myself, to learn how to look after my body and figure out work, confidence and money.",
};

export default function AboutPage() {
  return (
    <main className="bg-cream text-ink">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
        <BreadcrumbTrail items={[{ href: "/en", label: "Home" }, { label: "About me" }]} />
        <h1 className="mt-8 font-display text-4xl font-semibold leading-tight text-forest-deep">
          About me
        </h1>
        <div className="mt-6 space-y-5 text-lg leading-8">
          <h2 className="font-display text-2xl font-semibold text-forest-deep">Why I started Vlastní směr</h2>
          <p>I’m David. I started Vlastní směr mostly for myself. I wanted to take better care of my skin, hair and teeth, get stronger, and learn to cook a few meals I’d happily make again. I’m also figuring out work, confidence and money. On this site those are three separate areas. In my life, they’re all me.</p>
          <p>I put things here that I want to understand and try for myself. When I’m curious about salmon, I want to know what to look for at the shop, but also how to turn it into a good dinner. And when I think about money, my first question isn’t where to invest. It’s how much I actually have left at the end of an ordinary month.</p>
          <p>I’m sharing this site now because you might be asking some of the same questions. We don’t have to have the same goals to enjoy the same recipe.</p>
        </div>
      </article>
    </main>
  );
}
