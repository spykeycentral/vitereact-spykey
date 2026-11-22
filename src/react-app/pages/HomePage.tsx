import { useState, type FormEvent } from "react";
import { ArrowRight, BrainCircuit, Compass, Database, Fingerprint, Search, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { ContentCard } from "@/components/ContentCard";
import { EmptyState } from "@/components/EmptyState";
import { HeroSection } from "@/components/HeroSection";
import { SearchField } from "@/components/SearchField";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { archiveHighlights, articles, prompts, resourceCollections, tools } from "@/data/content";

type CategoryLink = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const categories: CategoryLink[] = [
  { title: "AI workflows", description: "Prompts & practical methods", href: "/prompts", icon: BrainCircuit },
  { title: "Cybersecurity", description: "Awareness & digital safety", href: "/resources", icon: ShieldCheck },
  { title: "Research tools", description: "A smarter working stack", href: "/tools", icon: Database },
  { title: "Knowledge discovery", description: "Ideas, sources & signals", href: "/archive", icon: Compass },
];

export function HomePage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const featuredArticles = articles.filter((item) => item.featured).slice(0, 3);

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    navigate(value ? `/search?q=${encodeURIComponent(value)}` : "/search");
  }

  return (
    <>
      <HeroSection
        eyebrow="Independent intelligence / online"
        title={<>Discover.<br />Analyze.<br /><span className="text-muted-foreground">Understand.</span></>}
        description="SpyKey Central is a hub for AI workflows, digital intelligence, research, cybersecurity awareness, and knowledge discovery."
      >
        <form onSubmit={search} role="search" className="max-w-xl">
          <SearchField value={query} onChange={setQuery} label="Search SpyKey Central" placeholder="Search intelligence, tools, and ideas..." />
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Button type="submit" className="rounded-md shadow-[0_0_24px_rgb(34_197_94/18%)]">Search Central <ArrowRight aria-hidden="true" /></Button>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Research / AI / Security</span>
          </div>
        </form>
      </HeroSection>

      <section aria-label="Featured categories" className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-14">
        <div className="mb-5 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground"><Fingerprint aria-hidden="true" className="size-3.5 text-primary" /> Featured categories</div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ title, description, href, icon: Icon }) => (
            <Link key={title} to={href} className="group rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <Card variant="dossier" className="h-full gap-0 rounded-xl transition-all group-hover:-translate-y-0.5 group-hover:border-primary/40">
                <CardContent className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-primary/20 bg-primary/5 text-primary"><Icon aria-hidden="true" className="size-4" /></span>
                  <span><span className="block text-sm font-semibold text-foreground">{title}</span><span className="mt-1 block text-xs leading-5 text-muted-foreground">{description}</span></span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <ContentSection number="01" eyebrow="Editorial" title="Featured Articles" description="Analysis and perspectives for people curious about what's changing." href="/articles" action="All articles">
        {featuredArticles.length > 0 ? <ContentGrid items={featuredArticles} /> : <EmptyState title="No articles yet" description="New editorial briefings will appear here when published." />}
      </ContentSection>

      <ContentSection number="02" eyebrow="Prompt engineering" title="AI Prompt Vault" description="Practical starting points for clearer analysis and stronger workflows." href="/prompts" action="Open the vault" striped>
        {prompts.length > 0 ? <ContentGrid items={prompts.slice(0, 3)} /> : <EmptyState title="The vault is being prepared" description="Prompt frameworks will be added to the collection soon." />}
      </ContentSection>

      <ContentSection number="03" eyebrow="Technology index" title="Tool Database" description="Useful applications for discovery, research, and knowledge work." href="/tools" action="Browse tools">
        {tools.length > 0 ? <ContentGrid items={tools.slice(0, 3)} /> : <EmptyState title="No tools indexed yet" description="New tool profiles will be listed here as the directory grows." />}
      </ContentSection>

      <ContentSection number="04" eyebrow="Research archive" title="Research Archive" description="Reference guides and research collections selected for long-term usefulness." href="/archive" action="Visit archive" striped>
        {archiveHighlights.length > 0 ? <ContentGrid items={archiveHighlights.slice(0, 3)} /> : <EmptyState title="Archive highlights coming soon" description="Research notes and field guides will be collected here." />}
      </ContentSection>

      <ContentSection number="05" eyebrow="Curated collections" title="Resources" description="Useful starting points for learning, researching, and navigating the digital world." href="/resources" action="Explore resources">
        {resourceCollections.length > 0 ? <ContentGrid items={resourceCollections.slice(0, 3)} /> : <EmptyState title="Collections are in progress" description="Curated resource lists will be available here soon." />}
      </ContentSection>

      <section className="border-t border-border/70">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-[#111827] p-6 sm:p-10 lg:p-12">
            <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">06 / Central index</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Follow the signal.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">Search across articles, AI workflows, research references, and tools—all in one place.</p></div>
              <form onSubmit={search} role="search" className="flex items-center gap-2">
                <SearchField value={query} onChange={setQuery} label="Search the SpyKey Central index" placeholder="What are you looking for?" className="min-w-0 flex-1" />
                <Button type="submit" size="icon" aria-label="Submit search" className="size-12 shrink-0"><Search aria-hidden="true" /></Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContentGrid({ items }: { items: typeof articles }) {
  return <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map((item) => <ContentCard key={item.title} item={item} />)}</div>;
}

function ContentSection({
  number,
  eyebrow,
  title,
  description,
  href,
  action,
  striped = false,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  action: string;
  striped?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={`border-t border-border/70 ${striped ? "bg-[#111827]/35" : ""}`}>
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <SectionHeader
          eyebrow={`${number} / ${eyebrow}`}
          title={title}
          description={description}
          action={<Button asChild variant="ghost" size="sm"><Link to={href}>{action} <ArrowRight aria-hidden="true" /></Link></Button>}
        />
        {children}
      </div>
    </section>
  );
}
