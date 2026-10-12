import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        className="size-8 shrink-0"
        aria-hidden="true"
        fill="none"
      >
        <rect x="1.5" y="1.5" width="29" height="29" rx="8" className="stroke-primary" strokeWidth="1.5" />
        <path
          d="M8 21.5c2.2-6 5-9.5 8-9.5s5.8 3.5 8 9.5"
          className="stroke-primary"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="11" r="2.2" className="fill-primary" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight text-foreground">Havre</span>
    </span>
  );
}
