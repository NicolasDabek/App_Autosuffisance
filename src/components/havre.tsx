import { Link } from "@tanstack/react-router";
import { ChevronRight, Minus, Plus } from "lucide-react";
import type { ReactNode } from "react";
import type { AppPath } from "@/data/types";
import { cn } from "@/lib/utils";

/** Composants du système de design Havre : résultat d’abord, réglages ensuite. */

export type Tone = "moss" | "terra" | "wheat" | "water";

const CHIP: Record<Tone, string> = {
  moss: "bg-moss-light text-moss-dark",
  terra: "bg-terra-light text-terra-dark",
  wheat: "bg-wheat-light text-wheat-dark",
  water: "bg-water-light text-water-dark",
};

export function Chip({ tone = "moss", children, className }: { tone?: Tone; children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold", CHIP[tone], className)}>
      {children}
    </span>
  );
}

export function Hero({
  label,
  value,
  unit,
  pct,
  children,
  tone = "moss",
}: {
  label: string;
  value: string;
  unit?: string;
  /** Remplissage de la barre (0–100). */
  pct?: number;
  children?: ReactNode;
  tone?: "moss" | "bark";
}) {
  return (
    <section
      className={cn("rounded-[20px] p-[18px] text-white", tone === "bark" ? "bg-bark" : "bg-moss")}
      aria-label={label}
    >
      <p className="text-sm opacity-90">{label}</p>
      <p className="mt-1.5 font-display text-5xl font-bold leading-none tabular-nums">
        {value} {unit ? <span className="text-xl font-semibold">{unit}</span> : null}
      </p>
      {pct != null ? (
        <div
          className="mt-3 h-3 overflow-hidden rounded-full bg-white/20"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(Math.min(100, Math.max(0, pct)))}
        >
          <i className="block h-full rounded-full bg-[#f3c96b]" style={{ width: `${Math.min(100, Math.max(0, pct))}%` }} />
        </div>
      ) : null}
      {children ? <div className="mt-2.5 text-[15px]">{children}</div> : null}
    </section>
  );
}

export function KpiGrid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mt-2.5 grid grid-cols-2 gap-2.5 lg:grid-cols-4", className)}>{children}</div>;
}

export function Kpi({ label, value, unit, note }: { label: ReactNode; value: string; unit?: string; note?: ReactNode }) {
  return (
    <div className="min-w-0 rounded-[14px] border border-border bg-card p-3">
      <p className="text-[13px] font-semibold text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-[26px] font-bold leading-tight tabular-nums">
        {value} {unit ? <span className="font-sans text-sm font-semibold text-muted-foreground">{unit}</span> : null}
      </p>
      {note ? <p className="mt-0.5 text-[13px] text-muted-foreground">{note}</p> : null}
    </div>
  );
}

const NOTE: Record<"warn" | "ok" | "info", string> = {
  warn: "bg-wheat-light text-[#4f3609]",
  ok: "bg-moss-light text-moss-dark",
  info: "bg-water-light text-water-dark",
};

export function Note({ tone = "warn", icon, children }: { tone?: "warn" | "ok" | "info"; icon?: ReactNode; children: ReactNode }) {
  return (
    <div className={cn("mt-3 flex gap-2.5 rounded-[14px] px-3.5 py-3 text-[15px]", NOTE[tone])}>
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      <div className="min-w-0">{children}</div>
    </div>
  );
}

/** Réglages repliables (« Mode avancé »). */
export function Advanced({
  title = "Mode avancé",
  count,
  icon = "⚙",
  children,
  defaultOpen = false,
  className,
}: {
  title?: string;
  count?: number;
  icon?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}) {
  return (
    <details
      className={cn("havre-adv mt-[18px] rounded-[14px] border-[1.5px] border-dashed border-input px-3.5 open:pb-3.5", className)}
      open={defaultOpen || undefined}
    >
      <summary className="flex min-h-[52px] cursor-pointer items-center gap-2.5 font-bold text-moss-dark">
        <span aria-hidden="true">{icon}</span>
        {title}
        {count ? ` · ${count} réglages` : ""}
      </summary>
      {children}
    </details>
  );
}

export function Group({ title, children, first = false }: { title: string; children: ReactNode; first?: boolean }) {
  return (
    <div className={cn("pt-1", first ? "mt-1" : "mt-[18px] border-t border-border")}>
      <h4 className="mt-3 text-[13px] font-bold uppercase tracking-[0.06em] text-muted-foreground">{title}</h4>
      {children}
    </div>
  );
}

export function Stepper({
  value,
  onChange,
  min = 0,
  max = 999,
  step = 1,
  suffix,
  label,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  label: string;
}) {
  const set = (v: number) => onChange(Math.min(max, Math.max(min, Math.round(v * 100) / 100)));
  const btn = "grid h-12 w-[52px] place-items-center bg-moss-light text-moss-dark disabled:opacity-40";
  return (
    <div className="flex items-center overflow-hidden rounded-xl border-[1.5px] border-input bg-white">
      <button type="button" className={btn} aria-label={`${label} : moins`} disabled={value <= min} onClick={() => set(value - step)}>
        <Minus className="size-5" />
      </button>
      <output className="flex-1 text-center text-lg font-bold tabular-nums" aria-live="polite">
        {String(value).replace(".", ",")}
        {suffix ? <span className="ml-1 text-sm font-normal text-muted-foreground">{suffix}</span> : null}
      </output>
      <button type="button" className={btn} aria-label={`${label} : plus`} disabled={value >= max} onClick={() => set(value + step)}>
        <Plus className="size-5" />
      </button>
    </div>
  );
}

export function Segmented<T extends string>({
  value,
  onChange,
  options,
  label,
}: {
  value: T;
  onChange: (v: T) => void;
  options: [T, string][];
  label: string;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex gap-1 rounded-xl bg-muted p-1">
      {options.map(([id, text]) => (
        <button
          key={id}
          type="button"
          role="radio"
          aria-checked={value === id}
          onClick={() => onChange(id)}
          className={cn(
            "min-h-10 flex-1 rounded-[9px] px-1 text-sm font-semibold",
            value === id ? "bg-white text-foreground shadow-sm" : "text-muted-foreground",
          )}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

export function Field({ label, hint, children }: { label: string; hint?: ReactNode; children: ReactNode }) {
  return (
    <div className="mt-3.5 grid gap-1.5">
      <span className="text-[15px] font-semibold">{label}</span>
      {children}
      {hint ? <small className="text-[13px] text-muted-foreground">{hint}</small> : null}
    </div>
  );
}

const ICON_BG: Record<Tone, string> = {
  moss: "bg-moss-light",
  terra: "bg-terra-light",
  wheat: "bg-wheat-light",
  water: "bg-water-light",
};

export function ListRow({
  icon,
  tone = "moss",
  title,
  sub,
  to,
  right,
}: {
  icon: ReactNode;
  tone?: Tone;
  title: ReactNode;
  sub?: ReactNode;
  to?: AppPath;
  right?: ReactNode;
}) {
  const inner = (
    <>
      <span className={cn("grid size-[42px] flex-none place-items-center rounded-xl text-xl", ICON_BG[tone])} aria-hidden="true">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <b className="block font-semibold">{title}</b>
        {sub ? <span className="text-sm text-muted-foreground">{sub}</span> : null}
      </span>
      {right ?? (to ? <ChevronRight className="size-5 text-muted-foreground" /> : null)}
    </>
  );
  const cls = "flex items-center gap-3 border-t border-border py-3 first:border-t-0";
  return to ? (
    <Link to={to} className={cn(cls, "hover:bg-muted/40")}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

/** Résumé collant au-dessus de la barre d’onglets, sur mobile. */
export function StickyResult({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <div className="fixed inset-x-3 bottom-[84px] z-20 flex items-center justify-between gap-3 rounded-[14px] bg-foreground px-3.5 py-2.5 text-sm text-white shadow-lg lg:hidden">
      <span className="min-w-0 truncate">{left}</span>
      <b className="font-display text-lg">{right}</b>
    </div>
  );
}
