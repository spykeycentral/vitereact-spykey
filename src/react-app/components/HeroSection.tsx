import { Activity, RadioTower } from "lucide-react";
import type { ReactNode } from "react";

type HeroSectionProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
};

export function HeroSection({ eyebrow, title, description, children }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/80">
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10 opacity-60" />
      <div aria-hidden="true" className="absolute -right-32 -top-32 -z-10 size-[30rem] rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[1fr_0.7fr] lg:px-8 lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.17em] text-primary">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />{eyebrow}
          </div>
          <h1 className="hero-rise max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="hero-rise mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8" style={{ animationDelay: "100ms" }}>{description}</p>
          {children && <div className="hero-rise mt-8" style={{ animationDelay: "180ms" }}>{children}</div>}
        </div>
        <div className="hero-rise relative hidden min-h-64 lg:block" style={{ animationDelay: "220ms" }}>
          <div aria-hidden="true" className="dossier-grid absolute inset-0 rounded-2xl opacity-60" />
          <div className="absolute inset-5 rounded-xl border border-border bg-[#111827]/95 p-5 shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between border-b border-border/80 pb-4">
              <div className="flex items-center gap-2 text-xs font-medium"><RadioTower aria-hidden="true" className="size-3.5 text-primary" /> Signal monitor</div>
              <span className="font-mono text-[10px] text-muted-foreground">LIVE / 01</span>
            </div>
            <div role="img" aria-label="Signal activity visualization" className="mt-6 flex items-end gap-1.5">
              {[28, 44, 35, 62, 48, 76, 52, 88, 59, 70, 43, 82, 61, 94, 55, 74, 47, 86, 65, 98, 58, 76, 45, 70, 54, 91, 63, 81].map((height, index) => (
                <span key={index} className={`h-24 flex-1 origin-bottom rounded-sm ${index > 20 ? "bg-sky-400/70" : "bg-primary/70"}`} style={{ transform: `scaleY(${height / 100})` }} />
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between text-[11px] text-muted-foreground"><span>Pattern recognition</span><span className="inline-flex items-center gap-1 text-primary"><Activity aria-hidden="true" className="size-3" /> Active</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
