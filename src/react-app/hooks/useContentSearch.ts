import { useMemo } from "react";

import type { ContentItem } from "@/types/content";

export function useContentSearch(items: ContentItem[], query: string) {
  return useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return [];
    return items.filter((item) =>
      [item.title, item.description, item.category, ...(item.tags ?? [])]
        .join(" ")
        .toLowerCase()
        .includes(needle),
    );
  }, [items, query]);
}
