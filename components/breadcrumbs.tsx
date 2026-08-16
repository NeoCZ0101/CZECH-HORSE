import Link from "next/link";

type Crumb = {
  href?: string;
  label: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return <BreadcrumbTrail items={items} />;
}

export function BreadcrumbTrail({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  return (
    <nav aria-label="Drobečková navigace" className={dark ? "text-sm text-cream/60" : "text-sm text-muted"}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden>/</span> : null}
            {item.href ? (
              <Link href={item.href} className={dark ? "transition hover:text-sand" : "transition hover:text-forest"}>
                {item.label}
              </Link>
            ) : (
              <span className={dark ? "text-cream" : "text-ink"}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
