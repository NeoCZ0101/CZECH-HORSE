import Link from "next/link";
import { ArrowRight, ListChecks } from "lucide-react";
import type { Situation } from "@/lib/types";
import { cx } from "@/lib/utils";
import { topics } from "@/lib/data";

type SituationCardData = Pick<Situation, "slug" | "title" | "description" | "stepCount"> & {
  areas?: Situation["areas"];
};

type SituationCardProps = {
  situation: SituationCardData;
  category?: string;
  ctaLabel?: string;
  tone?: "cream" | "sage" | "forest";
  className?: string;
};

const toneStyles = {
  cream: {
    card: "border-sand bg-surface text-ink hover:border-terracotta/60",
    category: "text-terracotta",
    description: "text-muted",
    meta: "border-forest/10 text-muted",
    link: "text-forest group-hover:text-terracotta"
  },
  sage: {
    card: "border-sage bg-mist text-ink hover:border-forest/50",
    category: "text-forest",
    description: "text-muted",
    meta: "border-forest/15 text-muted",
    link: "text-forest group-hover:text-terracotta"
  },
  forest: {
    card: "border-forest bg-forest text-cream hover:border-terracotta",
    category: "text-sand",
    description: "text-cream/75",
    meta: "border-cream/15 text-cream/65",
    link: "text-cream group-hover:text-sand"
  }
};

export function SituationCard({
  situation,
  category,
  ctaLabel = "Projít situaci",
  tone = "cream",
  className
}: SituationCardProps) {
  const styles = toneStyles[tone];
  const fallbackCategory = situation.areas?.[0]
    ? topics.find((topic) => topic.id === situation.areas?.[0])?.shortLabel
    : undefined;

  return (
    <article
      className={cx(
        "group flex h-full min-h-[270px] flex-col justify-between rounded-[6px] border p-6 shadow-[0_12px_32px_rgba(37,40,33,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(37,40,33,0.11)]",
        styles.card,
        className
      )}
    >
      <div>
        <p className={cx("text-xs font-semibold uppercase", styles.category)}>
          {category ?? fallbackCategory ?? "Situace"}
        </p>
        <h3 className="mt-4 max-w-[24ch] font-display text-2xl font-semibold leading-[1.15] sm:text-[1.7rem]">
          {situation.title}
        </h3>
        <p className={cx("mt-4 max-w-2xl text-sm leading-6", styles.description)}>
          {situation.description}
        </p>
      </div>
      <div className={cx("mt-7 flex flex-col items-start justify-between gap-4 border-t pt-4 sm:flex-row sm:items-center", styles.meta)}>
        <span className="inline-flex items-center gap-2 text-sm">
          <ListChecks aria-hidden size={16} />
          {situation.stepCount} kroků
        </span>
        <Link
          href={`/situace/${situation.slug}`}
          className={cx("inline-flex items-center gap-2 text-sm font-semibold transition", styles.link)}
        >
          {ctaLabel}
          <ArrowRight aria-hidden size={16} />
        </Link>
      </div>
    </article>
  );
}
