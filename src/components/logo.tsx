import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="grid size-[34px] shrink-0 place-items-center rounded-[10px] bg-primary font-display text-lg font-bold text-primary-foreground"
      >
        H
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-foreground">Havre</span>
    </span>
  );
}
