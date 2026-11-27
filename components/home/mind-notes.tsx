import { Headphones, Podcast, BookOpen, PencilLine, ChevronDown } from "lucide-react";

const icons = [Headphones, Podcast, BookOpen, PencilLine];
const notes = {
  cs: [
    ["Hudba", "Kterou skladbu si pustíš znovu?", "Vyber si jednu a poslechni si ji až do konce. Co tě na ní dneska bavilo?"],
    ["Podcasty", "Co ti po poslechu zůstalo v hlavě?", "Vybav si poslední rozhovor, který tě zaujal. Jakou myšlenku z něj bys chtěl probrat s někým dalším?"],
    ["Čtení", "Věta, ke které se chceš vrátit.", "Otevři rozečtenou knížku. Když tě některá věta zastaví, nech si u ní záložku."],
    ["Tvoření", "Někdy se usměju už u toho, jak tenhle web vzniká.", "Co by tě dnes bavilo vytvořit jen tak, i kdyby to nikdo další neviděl?"],
  ],
  en: [
    ["Music", "Which song would you play again?", "Pick one and listen to it all the way through. What did you enjoy about it today?"],
    ["Podcasts", "What stayed with you after listening?", "Think of the last conversation you enjoyed listening to. Which idea would you like to talk through with someone else?"],
    ["Reading", "A line worth coming back to.", "Open the book you’re reading. When a sentence makes you pause, leave a bookmark there."],
    ["Creating", "Sometimes just making this site makes me smile.", "What would you enjoy making today, even if nobody else ever saw it?"],
  ],
};

export function MindNotes({ language }: { language: "cs" | "en" }) {
  return (
    <div className="grid gap-3">
      {notes[language].map(([label, title, prompt], i) => {
          const Icon = icons[i];
          return (
            <details key={label} className="group rounded-[6px] border border-amber/35 bg-surface open:bg-amber/10 hover:border-amber">
              <summary className="flex min-h-16 cursor-pointer list-none items-center gap-3 p-3 marker:content-none md:min-h-[4.5rem]">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-amber/10 text-[#775a21]"><Icon size={18} aria-hidden /></span>
                <span className="min-w-0"><strong className="block text-sm">{label}</strong><span className="mt-1 block text-xs text-muted">{title}</span></span>
                <ChevronDown size={16} aria-hidden className="ml-auto shrink-0 text-muted group-open:rotate-180" />
              </summary>
              <p className="px-4 pb-4 text-sm leading-6 text-forest">{prompt}</p>
            </details>
          );
        })}
    </div>
  );
}
