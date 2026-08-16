type TestimonialCardProps = {
  quote: string;
  name: string;
  context: string;
};

export function TestimonialCard({ quote, name, context }: TestimonialCardProps) {
  return (
    <figure className="rounded-[6px] border border-sand bg-surface p-5 shadow-sm">
      <blockquote className="text-base leading-7 text-muted">„{quote}“</blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-semibold text-forest-deep">{name}</span>
        <span className="block text-muted">{context}</span>
      </figcaption>
    </figure>
  );
}
