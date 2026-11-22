import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = ComponentProps<"span"> & {
  variant?: "default" | "secondary" | "outline" | "warning";
};

const variants = {
  default: "border-transparent bg-primary/10 text-emerald-300",
  secondary: "border-transparent bg-secondary text-secondary-foreground",
  outline: "border-border bg-transparent text-muted-foreground",
  warning: "border-amber-400/20 bg-amber-400/10 text-amber-300",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn("inline-flex w-fit items-center rounded-md border px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider", variants[variant], className)}
      {...props}
    />
  );
}
