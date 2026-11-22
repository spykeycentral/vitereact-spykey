import { ContentCard } from "@/components/ContentCard";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { articles } from "@/data/content";

export function ArticlesPage() {
  return (
    <>
      <PageHeader eyebrow="Journal / 01" title="Articles" description="Clear-eyed analysis of AI, research, technology, and the systems shaping how we understand the world." />
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        {articles.length > 0 ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{articles.map((item) => <ContentCard key={item.title} item={item} />)}</div> : <EmptyState title="No articles yet" description="Editorial briefings will appear here when they are published." />}
      </section>
    </>
  );
}
