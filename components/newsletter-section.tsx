import { Mail } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="border-t border-sage/20 bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sage/30 px-4 py-2 text-sm text-sand">
            <Mail aria-hidden size={17} />
            Klidný přehled bez tlaku
          </div>
          <h2 className="mt-5 font-display text-3xl font-semibold">Jednou měsíčně praktické otázky, cesty a události.</h2>
          <p className="mt-4 text-sm leading-6 text-cream/75">
            Prototypový odběr zatím nic neposílá. Ukazuje, kde bude v budoucnu navazovat obsah bez nekonečného feedu.
          </p>
        </div>
        <form className="grid gap-3 self-end sm:grid-cols-[1fr_auto]" action="#">
          <label className="sr-only" htmlFor="newsletter-email">
            E-mail
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            placeholder="tvuj@email.cz"
            className="min-h-12 rounded-[6px] border border-sage/40 bg-surface px-5 text-sm text-ink outline-none transition placeholder:text-muted focus:border-terracotta"
          />
          <button
            type="submit"
            className="min-h-12 rounded-[6px] bg-cream px-6 text-sm font-semibold text-forest-deep transition hover:-translate-y-0.5 hover:bg-sand"
          >
            Nechat si poslat přehled
          </button>
        </form>
      </div>
    </section>
  );
}
