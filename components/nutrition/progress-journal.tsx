"use client";

import { CalendarDays, Check, Download, Mail, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

type ProgressEntry = {
  date: string;
  weight: string;
  waist: string;
  chest: string;
  height: string;
  sleep: string;
  energy: string;
  movement: string;
  note: string;
};

const emptyEntry = (): ProgressEntry => ({ date: new Date().toISOString().slice(0, 10), weight: "", waist: "", chest: "", height: "", sleep: "", energy: "", movement: "", note: "" });

export function ProgressJournal() {
  const [entry, setEntry] = useState<ProgressEntry>(emptyEntry);
  const [entries, setEntries] = useState<ProgressEntry[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = window.localStorage.getItem("vlastni-smer-progress");
      if (stored) setEntries(JSON.parse(stored) as ProgressEntry[]);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  function update(field: keyof ProgressEntry, value: string) {
    setEntry((current) => ({ ...current, [field]: value }));
    setSaved(false);
  }

  function saveEntry() {
    const next = [entry, ...entries.filter((item) => item.date !== entry.date)].sort((a, b) => b.date.localeCompare(a.date));
    setEntries(next);
    window.localStorage.setItem("vlastni-smer-progress", JSON.stringify(next));
    setSaved(true);
  }

  function removeEntry(date: string) {
    const next = entries.filter((item) => item.date !== date);
    setEntries(next);
    window.localStorage.setItem("vlastni-smer-progress", JSON.stringify(next));
  }

  function exportCsv() {
    const header = ["datum", "vaha_kg", "pas_cm", "hrudnik_cm", "vyska_cm", "spanek_h", "energie_1_5", "pohyb", "poznamka"];
    const rows = entries.map((item) => [item.date, item.weight, item.waist, item.chest, item.height, item.sleep, item.energy, item.movement, item.note].map((value) => `"${value.replaceAll('"', '""')}"`).join(";"));
    const blob = new Blob([[header.join(";"), ...rows].join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "vlastni-smer-progres.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  function prepareEmail() {
    const body = entries.map((item) => `${item.date}: ${item.weight || "-"} kg | pas ${item.waist || "-"} cm | hrudník ${item.chest || "-"} cm | spánek ${item.sleep || "-"} h | energie ${item.energy || "-"}/5 | ${item.movement || "bez pohybu"}`).join("%0D%0A");
    window.location.href = `mailto:?subject=Vlastní směr - můj progres&body=${body}`;
  }

  const bmi = entry.weight && entry.height ? (Number(entry.weight) / (Number(entry.height) / 100) ** 2).toFixed(1) : null;
  const waistHeight = entry.waist && entry.height ? (Number(entry.waist) / Number(entry.height)).toFixed(2) : null;
  const fields: Array<[keyof ProgressEntry, string, "date" | "number" | "text"]> = [["date", "Datum", "date"], ["weight", "Váha (kg)", "number"], ["waist", "Pas (cm)", "number"], ["chest", "Hrudník (cm)", "number"], ["height", "Výška (cm)", "number"], ["sleep", "Spánek (hod.)", "number"], ["energy", "Energie (1–5)", "number"], ["movement", "Pohyb", "text"]];

  return (
    <section id="progres" className="border-y border-sand bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-olive">DENÍK PROGRESU</p><h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">Sleduj, co se opravdu mění.</h2><p className="mt-4 text-base leading-7 text-muted">Zapiš si měření a okolnosti dne. Čísla jsou jen jedna část obrazu; stejně důležitý může být spánek, energie a pravidelnost pohybu.</p></div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="border border-sand bg-surface p-5 sm:p-7"><div className="flex items-center gap-3"><CalendarDays className="text-olive" aria-hidden size={20} /><h3 className="font-display text-2xl font-semibold text-ink">Dnešní záznam</h3></div><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{fields.map(([field, label, type]) => <label key={field} className="grid gap-1.5 text-xs font-semibold text-muted"><span>{label}</span><input type={type} min={type === "number" ? 0 : undefined} max={field === "energy" ? 5 : undefined} value={entry[field]} onChange={(event) => update(field, event.target.value)} className="min-h-10 border border-sand bg-cream px-3 text-sm font-normal text-ink outline-none transition focus:border-forest" /></label>)}</div><label className="mt-4 grid gap-1.5 text-xs font-semibold text-muted"><span>Poznámka k dni</span><textarea value={entry.note} onChange={(event) => update("note", event.target.value)} rows={3} placeholder="Jak ses cítil, co se povedlo, co ovlivnilo den…" className="border border-sand bg-cream px-3 py-2 text-sm font-normal text-ink outline-none transition focus:border-forest" /></label><div className="mt-5 flex flex-wrap items-center gap-3"><button type="button" onClick={saveEntry} className="inline-flex min-h-11 items-center gap-2 bg-forest px-4 py-3 text-sm font-semibold text-cream transition hover:bg-forest-deep"><Check aria-hidden size={16} />{saved ? "Uloženo" : "Uložit záznam"}</button>{bmi && <span className="border border-sand px-3 py-2 text-xs text-muted">BMI orientačně: <strong className="text-ink">{bmi}</strong></span>}{waistHeight && <span className="border border-sand px-3 py-2 text-xs text-muted">Pas / výška: <strong className="text-ink">{waistHeight}</strong></span>}</div></div>
          <div className="border-l-2 border-terracotta pl-5 text-sm leading-6 text-muted"><p className="font-semibold text-ink">Co má smysl sledovat</p><p className="mt-2">Váha a obvod pasu ukazují trend. Hrudník, spánek, energie a pohyb doplňují kontext, aby se progres nezúžil na jedno číslo.</p><p className="mt-3 text-xs">Záznamy zůstávají v tomto prohlížeči. Nejde o diagnózu ani lékařské hodnocení.</p></div>
        </div>
        <div className="mt-8 border-t border-sand pt-6"><div className="flex flex-wrap items-center justify-between gap-3"><p className="text-sm font-semibold text-ink">Historie záznamů <span className="font-normal text-muted">({entries.length})</span></p><div className="flex flex-wrap gap-2"><button type="button" onClick={exportCsv} disabled={!entries.length} className="inline-flex min-h-10 items-center gap-2 border border-sand px-3 py-2 text-xs font-semibold text-muted transition hover:border-forest hover:text-forest disabled:cursor-not-allowed disabled:opacity-40"><Download aria-hidden size={15} />Stáhnout CSV</button><button type="button" onClick={prepareEmail} disabled={!entries.length} className="inline-flex min-h-10 items-center gap-2 border border-sand px-3 py-2 text-xs font-semibold text-muted transition hover:border-forest hover:text-forest disabled:cursor-not-allowed disabled:opacity-40"><Mail aria-hidden size={15} />Připravit e-mail</button></div></div>{entries.length > 0 && <div className="mt-4 overflow-x-auto"><table className="w-full min-w-[720px] text-left text-sm"><thead className="border-b border-sand text-xs uppercase tracking-[0.08em] text-muted"><tr><th className="pb-3 pr-4 font-semibold">Datum</th><th className="pb-3 pr-4 font-semibold">Váha</th><th className="pb-3 pr-4 font-semibold">Pas</th><th className="pb-3 pr-4 font-semibold">Spánek</th><th className="pb-3 pr-4 font-semibold">Energie</th><th className="pb-3 font-semibold">Akce</th></tr></thead><tbody>{entries.map((item) => <tr key={item.date} className="border-b border-sand/70"><td className="py-3 pr-4 text-ink">{item.date}</td><td className="py-3 pr-4 text-muted">{item.weight ? `${item.weight} kg` : "-"}</td><td className="py-3 pr-4 text-muted">{item.waist ? `${item.waist} cm` : "-"}</td><td className="py-3 pr-4 text-muted">{item.sleep ? `${item.sleep} h` : "-"}</td><td className="py-3 pr-4 text-muted">{item.energy || "-"}/5</td><td className="py-3"><button type="button" onClick={() => removeEntry(item.date)} aria-label={`Smazat záznam ${item.date}`} className="text-muted transition hover:text-terracotta"><Trash2 aria-hidden size={16} /></button></td></tr>)}</tbody></table></div>}</div>
      </div>
    </section>
  );
}
