import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-start justify-center px-5 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">404 / Record not found</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">This page is off the record.</h1>
      <p className="mt-4 max-w-xl leading-7 text-muted-foreground">The address may have changed, or this record may not exist.</p>
      <Button asChild className="mt-7"><Link to="/">Return to SpyKey Central</Link></Button>
    </section>
  );
}
