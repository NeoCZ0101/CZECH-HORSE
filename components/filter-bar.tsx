"use client";

import { SlidersHorizontal } from "lucide-react";
import { cx } from "@/lib/utils";

type Option = {
  value: string;
  label: string;
};

type FilterBarProps = {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export function FilterBar({ label, options, value, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3 border-y border-sand bg-surface py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
        <SlidersHorizontal aria-hidden size={18} />
        {label}
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-end sm:overflow-visible sm:pb-0">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cx(
              "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition",
              value === option.value
                ? "border-forest bg-forest text-cream"
                : "border-sand bg-surface text-muted hover:border-terracotta/60 hover:bg-cream"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
