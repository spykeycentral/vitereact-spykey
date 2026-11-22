import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5"><span className="grid size-8 place-items-center rounded-md border border-primary/30 bg-primary/10 font-mono text-sm font-black text-primary">S</span><span className="font-bold">SpyKey Central</span></div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">A curated intelligence hub for research, AI, cybersecurity awareness, and better tools.</p>
          </div>
          <div><p className="mb-4 text-sm font-semibold">Explore</p><div className="flex flex-col gap-3 text-sm text-muted-foreground"><Link to="/articles" className="hover:text-foreground">Articles</Link><Link to="/prompts" className="hover:text-foreground">Prompt Vault</Link><Link to="/tools" className="hover:text-foreground">Tool Database</Link></div></div>
          <div><p className="mb-4 text-sm font-semibold">Discover</p><div className="flex flex-col gap-3 text-sm text-muted-foreground"><Link to="/archive" className="hover:text-foreground">Research Archive</Link><Link to="/resources" className="hover:text-foreground">Resources</Link><Link to="/about" className="hover:text-foreground">About</Link></div></div>
          <div><p className="mb-4 text-sm font-semibold">Connect</p><a href="https://github.com" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">GitHub <ArrowUpRight aria-hidden="true" className="size-3.5" /></a></div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between"><p>© 2026 SpyKey Central</p><p>Curated with intention.</p></div>
      </div>
    </footer>
  );
}
