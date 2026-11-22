import { ContentCard } from "@/components/ContentCard";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { resourceCollections } from "@/data/content";

export function ResourcesPage() {
  return (
    <>
      <PageHeader eyebrow="Curated resources / 05" title="The useful internet" description="Collections and starting points for learning, researching, and navigating the digital world." />
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        {resourceCollections.length > 0 ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{resourceCollections.map((item) => <ContentCard key={item.title} item={item} />)}</div> : <EmptyState title="Collections are in progress" description="Curated resource lists will be available here soon." />}
      </section>
    </>
  );
}
