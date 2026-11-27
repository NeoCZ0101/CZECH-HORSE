"use client";

import { useState } from "react";
import { Headphones, BookOpen, PencilLine } from "lucide-react";

const icons = [Headphones, BookOpen, PencilLine];
const notes = {
  cs: [
    ["Hudba", "Kterou skladbu si pustíš znovu?", "Vyber si jednu a poslechni si ji až do konce. Co tě na ní dneska bavilo?"],
    ["Čtení", "Věta, ke které se chceš vrátit.", "Otevři rozečtenou knížku. Když tě některá věta zastaví, nech si u ní záložku."],
    ["Tvoření", "Někdy se usměju už u toho, jak tenhle web vzniká.", "Co by tě dnes bavilo vytvořit jen tak, i kdyby to nikdo další neviděl?"],
  ],
  en: [
    ["Music", "Which song would you play again?", "Pick one and listen to it all the way through. What did you enjoy about it today?"],
    ["Reading", "A line worth coming back to.", "Open the book you’re reading. When a sentence makes you pause, leave a bookmark there."],
    ["Creating", "Sometimes just making this site makes me smile.", "What would you enjoy making today, even if nobody else ever saw it?"],
  ],
};

export function MindNotes({ language }: { language: "cs" | "en" }) {
  const [index, setIndex] = useState(0);
  const entries = notes[language];
  const [, title, prompt] = entries[index];
  return (
    <div className="flex h-full flex-col border-y border-amber/40 bg-[#fbf4df] px-5 pb-5 pt-3 sm:px-6">
      <div role="group" aria-label={language === "cs" ? "Co mi dělá dobře" : "What lifts my mood"} className="flex flex-wrap gap-x-2 border-b border-amber/40">
        {entries.map(([label], i) => {
          const Icon = icons[i];
          return <button key={label} type="button" aria-pressed={index === i} onClick={() => setIndex(i)}
            className={`inline-flex min-h-11 items-center gap-1.5 border-b-2 px-1 text-sm transition-colors hover:text-ink focus-visible:outline-2 ${index === i ? "border-[#745518] font-semibold text-ink" : "border-transparent text-[#665c43]"}`}>
            <Icon size={15} aria-hidden />{label}
          </button>;
        })}
      </div>
      <div aria-live="polite" aria-atomic="true" className="my-auto py-4">
        <h3 className="font-display text-2xl font-semibold leading-tight text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-forest">{prompt}</p>
      </div>
    </div>
  );
}
