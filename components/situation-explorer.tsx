"use client";

import { useMemo, useState } from "react";
import { situations, topics } from "@/lib/data";
import type { TopicId } from "@/lib/types";
import { FilterBar } from "@/components/filter-bar";
import { SituationCard } from "@/components/cards/situation-card";

const options = [
  { value: "all", label: "Vše" },
  ...topics.map((topic) => ({ value: topic.id, label: topic.shortLabel }))
];

export function SituationExplorer() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") {
      return situations;
    }

    return situations.filter((situation) => situation.areas.includes(active as TopicId));
  }, [active]);

  return (
    <div className="grid gap-8">
      <FilterBar label="Filtrovat podle oblasti" options={options} value={active} onChange={setActive} />
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-muted">
          Zobrazeno {filtered.length} situací. Každá začíná otázkami a samostatnými kroky, ne prodejem služby.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((situation) => (
          <SituationCard key={situation.id} situation={situation} />
        ))}
      </div>
    </div>
  );
}
