import { ArrowUpRight, FileText } from "lucide-react";

import { CategoryBadge } from "@/components/CategoryBadge";
import { Tag } from "@/components/Tag";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ContentItem } from "@/types/content";

export function ContentCard({ item }: { item: ContentItem }) {
  return (
    <Card variant="dossier" className="group relative h-full gap-0 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_12px_36px_rgb(0_0_0/20%)]">
      <CardHeader>
        <div className="mb-3 flex items-center justify-between gap-3">
          <CategoryBadge category={item.category} />
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"><FileText aria-hidden="true" className="size-3" /> Brief</span>
        </div>
        <CardTitle className="pr-5 text-lg leading-7">{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{item.description}</CardDescription>
        {item.tags && <div className="mt-4 flex flex-wrap gap-1.5">{item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>}
        {item.date && <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-4 font-mono text-[10px] text-muted-foreground"><span>{item.date}</span>{item.readTime && <span>{item.readTime}</span>}</div>}
      </CardContent>
      <ArrowUpRight aria-hidden="true" className="absolute right-6 top-6 size-4 text-muted-foreground transition-colors group-hover:text-primary" />
    </Card>
  );
}
