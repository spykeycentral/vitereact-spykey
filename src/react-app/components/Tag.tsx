import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex w-fit items-center rounded border border-border/80 bg-secondary/70 px-2 py-0.5 font-mono text-[10px] font-medium tracking-wide text-muted-foreground", className)}>
      {children}
    </span>
  );
}
