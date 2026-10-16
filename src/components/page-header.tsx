import type { ReactNode } from "react";

export function PageHeader({
  kicker,
  title,
  description,
  action,
}: {
  kicker?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {kicker ? (
          <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.08em] text-primary">{kicker}</p>
        ) : null}
        <h1 className="font-display text-[30px] font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-1.5 max-w-prose text-base leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </header>
  );
}
