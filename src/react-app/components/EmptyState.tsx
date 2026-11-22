import { Inbox } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <Card variant="dossier" className="items-center border-dashed py-10 text-center">
      <CardContent className="flex flex-col items-center">
        <span className="mb-4 grid size-11 place-items-center rounded-lg border border-border bg-secondary text-muted-foreground"><Inbox aria-hidden="true" className="size-5" /></span>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
