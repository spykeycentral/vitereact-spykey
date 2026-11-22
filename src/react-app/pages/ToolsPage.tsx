import { ContentCard } from "@/components/ContentCard";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { tools } from "@/data/content";

export function ToolsPage() {
  return (
    <>
      <PageHeader eyebrow="Tool database / 03" title="Tools for serious work" description="A focused directory of applications and platforms that make research, knowledge, and creation more powerful." />
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        {tools.length > 0 ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{tools.map((item) => <ContentCard key={item.title} item={item} />)}</div> : <EmptyState title="No tools indexed yet" description="Tool profiles will appear here as the directory grows." />}
      </section>
    </>
  );
}
