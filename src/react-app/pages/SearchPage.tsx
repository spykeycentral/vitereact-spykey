import { useSearchParams } from "react-router-dom";

import { CategoryBadge } from "@/components/CategoryBadge";
import { EmptyState } from "@/components/EmptyState";
import { SearchField } from "@/components/SearchField";
import { searchableContent } from "@/data/content";
import { useContentSearch } from "@/hooks/useContentSearch";

export function SearchPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") ?? "";
  const results = useContentSearch(searchableContent, query);

  function updateQuery(value: string) {
    setParams(value ? { q: value } : {}, { replace: true });
  }

  return (
    <section className="mx-auto min-h-[65vh] max-w-4xl px-5 py-14 lg:px-8 lg:py-16">
      <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">Signal intelligence / Search</p>
      <h1 className="text-4xl font-semibold tracking-tight">Find it in Central</h1>
      <SearchField value={query} onChange={updateQuery} placeholder="Search articles, prompts, and tools..." className="mt-8" autoFocus label="Search all SpyKey Central content" />
      <div className="mt-8">
        {!query && <p className="text-sm text-muted-foreground">Start typing to search the complete library.</p>}
        {query && results.length === 0 && <EmptyState title="No matching intelligence" description={`No results found for “${query}”. Try a broader search term.`} />}
        {results.length > 0 && (
          <>
            <p className="mb-4 font-mono text-xs text-muted-foreground">{results.length} records matched</p>
            <div className="divide-y divide-border/70 border-y border-border/70">
              {results.map((item, index) => (
                <article key={`${item.title}-${item.category}`} className="py-5">
                  <div className="mb-3 flex items-center gap-2"><CategoryBadge category={item.category} /><span className="font-mono text-[10px] text-muted-foreground">SKC-{String(index + 1).padStart(3, "0")}</span></div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
