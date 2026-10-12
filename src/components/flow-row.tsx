import { ArrowRight } from "lucide-react";
import type { ChainNode } from "@/data/types";
import { cn } from "@/lib/utils";

export function FlowRow({ nodes, className }: { nodes: ChainNode[]; className?: string }) {
  return (
    <ol className={cn("flex flex-wrap items-center gap-1.5", className)}>
      {nodes.map((n, i) => (
        <li key={n.id + i} className="flex items-center gap-1.5">
          {i > 0 ? <ArrowRight className="size-3.5 text-muted-foreground" aria-hidden="true" /> : null}
          <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground">{n.label}</span>
        </li>
      ))}
    </ol>
  );
}
