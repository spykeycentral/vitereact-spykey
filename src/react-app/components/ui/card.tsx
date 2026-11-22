import * as React from "react";

import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<"div"> & {
  variant?: "default" | "dossier" | "feature" | "elevated";
};

const variants = {
  default: "border-border bg-card text-card-foreground",
  dossier: "border-border/80 bg-card text-card-foreground shadow-[inset_0_1px_0_rgb(255_255_255/3%)]",
  feature: "border-primary/30 bg-[linear-gradient(145deg,#1f2937,#111827)] text-card-foreground shadow-[0_0_36px_rgb(34_197_94/7%)]",
  elevated: "border-border bg-[#111827] text-card-foreground shadow-lg shadow-black/20",
};

export function Card({ className, variant = "default", ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      data-variant={variant}
      className={cn("flex flex-col gap-5 rounded-xl border p-6", variants[variant], className)}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-header" className={cn("flex flex-col gap-2", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 data-slot="card-title" className={cn("font-semibold tracking-tight", className)} {...props} />;
}

export function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="card-description" className={cn("text-sm leading-6 text-muted-foreground", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn(className)} {...props} />;
}
