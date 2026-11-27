import { Headphones, BookOpen, PencilLine, ChevronDown } from "lucide-react";

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

export function MindNotes({ language, mobile = false }: { language: "cs" | "en"; mobile?: boolean }) {
  const cs = language === "cs";
  return (
    <div id={mobile ? "map-mind-mobile" : "map-mind"} className="scroll-mt-24">
      <div className="lg:min-h-[4.75rem] lg:border-l-2 lg:border-amber lg:pl-4">
        <p className="text-sm font-semibold text-forest-deep lg:text-lg">{cs ? "PSYCHIKA" : "MIND"}</p>
        <p className="mt-1 text-sm leading-5 text-muted">{cs ? "Čemu se věnuju, když chci mít lepší den." : "Things I turn to when I want a better day."}</p>
      </div>
      <div className="mt-4 grid gap-3 lg:mt-5">
        {notes[language].map(([label, title, prompt], i) => {
          const Icon = icons[i];
          return (
            <details key={label} className="group rounded-[6px] border border-amber/35 bg-surface open:bg-amber/10 hover:border-amber">
              <summary className="flex min-h-16 cursor-pointer list-none items-center gap-3 p-3 marker:content-none lg:min-h-[5.4rem]">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-amber/10 text-[#775a21]"><Icon size={18} aria-hidden /></span>
                <span className="min-w-0"><strong className="block text-sm">{label}</strong><span className="mt-1 block text-xs text-muted">{title}</span></span>
                <ChevronDown size={16} aria-hidden className="ml-auto shrink-0 text-muted group-open:rotate-180" />
              </summary>
              <p className="px-4 pb-4 text-sm leading-6 text-forest">{prompt}</p>
            </details>
          );
        })}
      </div>
    </div>
  );
}
