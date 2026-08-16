import { BookOpen, PlayCircle, FileText } from "lucide-react";
import type { Article } from "@/lib/types";
import { topicLabel } from "@/lib/utils";

const icons = {
  "Článek": BookOpen,
  "Video": PlayCircle,
  "Pracovní list": FileText
};

export function ContentCard({ article }: { article: Article }) {
  const Icon = icons[article.type];

  return (
    <article className="rounded-[6px] border border-sand bg-surface p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-forest">
          <Icon aria-hidden size={18} />
          {article.type}
        </span>
        {article.commercial ? (
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">komerční obsah</span>
        ) : null}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-ink">{article.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{article.summary}</p>
      <div className="mt-5 flex items-center justify-between gap-3 text-xs font-medium text-muted">
        <span>{topicLabel(article.topic)}</span>
        <span>{article.readingTime}</span>
      </div>
    </article>
  );
}
