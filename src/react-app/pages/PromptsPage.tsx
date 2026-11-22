import { ContentCard } from "@/components/ContentCard";
import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { prompts } from "@/data/content";

export function PromptsPage() {
  return (
    <>
      <PageHeader eyebrow="AI Prompt Vault / 02" title="Prompts worth keeping" description="Practical prompt frameworks for research, analysis, writing, and better decisions." />
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        {prompts.length > 0 ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{prompts.map((item) => <ContentCard key={item.title} item={item} />)}</div> : <EmptyState title="The vault is being prepared" description="Prompt frameworks will be added to this collection soon." />}
      </section>
    </>
  );
}
