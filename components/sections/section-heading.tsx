type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function SectionHeading({ eyebrow, title, description, dark = false }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className={dark ? "text-sm font-semibold text-sand" : "text-sm font-semibold text-terracotta"}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={dark ? "mt-3 font-display text-3xl font-semibold text-cream md:text-4xl" : "mt-3 font-display text-3xl font-semibold text-ink md:text-4xl"}>
        {title}
      </h2>
      {description ? (
        <p className={dark ? "mt-4 text-base leading-7 text-cream/70" : "mt-4 text-base leading-7 text-muted"}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
