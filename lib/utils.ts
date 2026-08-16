import { topics } from "@/lib/data";
import type { TopicId } from "@/lib/types";

export function topicLabel(id: TopicId) {
  return topics.find((topic) => topic.id === id)?.label ?? id;
}

export function formatAreas(areas: TopicId[]) {
  return areas.map(topicLabel).join(", ");
}

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
