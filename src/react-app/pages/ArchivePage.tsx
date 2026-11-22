import { ContentCard } from "@/components/ContentCard";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { archiveHighlights } from "@/data/content";

export function ArchivePage() {
  return (
    <>
      <PageHeader eyebrow="Research archive / 04" title="Reports and reference" description="Long-form research, field guides, handbooks, and studies from the SpyKey Central desk." />
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        {archiveHighlights.length > 0 ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{archiveHighlights.map((item) => <ContentCard key={item.title} item={item} />)}</div> : <EmptyState title="Archive highlights coming soon" description="Research notes and field guides will be collected here." />}
      </section>
    </>
  );
}
