import { Badge } from "@/components/ui/badge";

const categoryStyles: Record<string, string> = {
  research: "border-sky-400/20 bg-sky-400/10 text-sky-300",
  search: "border-sky-400/20 bg-sky-400/10 text-sky-300",
  strategy: "border-amber-400/20 bg-amber-400/10 text-amber-300",
  "critical thinking": "border-amber-400/20 bg-amber-400/10 text-amber-300",
  "ai research": "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  security: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
};

export function CategoryBadge({ category }: { category: string }) {
  const variant = category.toLowerCase() === "strategy" ? "warning" : "outline";
  const style = categoryStyles[category.toLowerCase()] ?? "";
  return <Badge variant={variant} className={style}>{category}</Badge>;
}
