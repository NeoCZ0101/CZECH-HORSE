"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function PartnerInquiryForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-4 rounded-[6px] border border-sand bg-cream p-5 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-ink">
          Jméno
          <input className="min-h-12 rounded-[4px] border border-sand bg-surface px-3 text-sm outline-none focus:border-terracotta" name="name" type="text" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          E-mail
          <input className="min-h-12 rounded-[4px] border border-sand bg-surface px-3 text-sm outline-none focus:border-terracotta" name="email" type="email" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-ink">
          Obor nebo typ služby
          <input className="min-h-12 rounded-[4px] border border-sand bg-surface px-3 text-sm outline-none focus:border-terracotta" name="field" type="text" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Lokalita
          <input className="min-h-12 rounded-[4px] border border-sand bg-surface px-3 text-sm outline-none focus:border-terracotta" name="location" type="text" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-ink">
        S čím konkrétně pomáháte
        <textarea className="min-h-32 rounded-[4px] border border-sand bg-surface px-3 py-3 text-sm outline-none focus:border-terracotta" name="message" />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 w-fit items-center justify-center rounded-[6px] bg-forest px-6 text-sm font-semibold text-cream transition hover:bg-forest-deep"
      >
        Odeslat prototypovou poptávku
      </button>
      {sent ? (
        <p className="inline-flex items-center gap-2 text-sm font-medium text-forest">
          <CheckCircle aria-hidden size={18} />
          Poptávka je v prototypu uložená jen jako informační stav.
        </p>
      ) : null}
    </form>
  );
}
