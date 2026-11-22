import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const principles = ["Clarity over volume", "Evidence over momentum", "Utility over novelty", "Independence over promotion"];

export function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About / 06" title="Independent by design" description="SpyKey Central is a curated publishing and discovery project for people who take knowledge seriously." />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[1fr_380px] lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold">Why SpyKey Central exists</h2>
          <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground">
            <p>The web produces more information every day than any individual can reasonably process. The result is not a lack of access, but a growing need for judgment, context, and curation.</p>
            <p>SpyKey Central brings together useful ideas, credible sources, practical AI workflows, and consequential tools. Every addition is selected for its ability to improve how we think or work.</p>
            <p>Our standard is simple: be useful, be specific, and respect the reader's attention.</p>
          </div>
          <Button asChild className="mt-8"><Link to="/articles">Read the latest <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
        <Card variant="dossier">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">Our principles</p>
          <ol className="mt-2 space-y-4">
            {principles.map((principle, index) => <li key={principle} className="flex items-center gap-3 border-b border-border/70 pb-4 text-sm last:border-0 last:pb-0"><span className="grid size-7 place-items-center rounded-full bg-secondary font-mono text-xs text-muted-foreground">{index + 1}</span>{principle}</li>)}
          </ol>
        </Card>
      </section>
    </>
  );
}
