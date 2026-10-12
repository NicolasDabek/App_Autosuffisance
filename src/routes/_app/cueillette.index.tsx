import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Disclaimer } from "@/components/disclaimer";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FORAGE, FORAGE_HABITATS } from "@/data/forage";
import type { ForageKind } from "@/data/types";
import { MONTH_LABELS, currentMonthIndex } from "@/lib/format";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/cueillette/")({ component: CueillettePage });

const KINDS: { id: ForageKind | "all"; label: string }[] = [
  { id: "all", label: "Tout" },
  { id: "plante", label: "Plantes" },
  { id: "champignon", label: "Champignons" },
  { id: "fruit", label: "Fruits" },
  { id: "noix", label: "Noix" },
];

function CueillettePage() {
  const [month, setMonth] = useState(currentMonthIndex());
  const [kind, setKind] = useState<ForageKind | "all">("all");
  const [hab, setHab] = useState<string>("all");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return FORAGE.filter((f) => {
      if (!f.months.includes(month)) return false;
      if (kind !== "all" && f.kind !== kind) return false;
      if (hab !== "all" && !f.habitats.includes(hab)) return false;
      if (q && !`${f.name} ${f.latin}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [month, kind, hab, q]);

  return (
    <div>
      <PageHeader
        kicker="Nourrir"
        title="Cueillette"
        description="Saison, milieu, confusions et cadre légal. Les champignons : quotas préfectoraux, pas de râteau, identification certaine."
      />

      <div className="mb-4 flex gap-1 overflow-x-auto pb-1">
        {MONTH_LABELS.map((m, i) => (
          <button
            key={m}
            type="button"
            onClick={() => setMonth(i)}
            className={cn(
              "h-10 shrink-0 rounded-full px-3 text-sm capitalize",
              i === month ? "bg-primary text-primary-foreground" : "bg-card text-foreground shadow-[var(--shadow-border)]",
            )}
          >
            {m.slice(0, 3)}
          </button>
        ))}
      </div>

      <div className="mb-6 flex flex-col gap-3">
        <Input placeholder="Nom ou latin…" value={q} onChange={(e) => setQ(e.target.value)} className="max-w-sm" />
        <div className="flex flex-wrap gap-1.5">
          {KINDS.map((k) => (
            <button key={k.id} type="button" onClick={() => setKind(k.id)}>
              <Badge variant={kind === k.id ? "default" : "outline"}>{k.label}</Badge>
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button type="button" onClick={() => setHab("all")}>
            <Badge variant={hab === "all" ? "secondary" : "outline"}>Tous milieux</Badge>
          </button>
          {FORAGE_HABITATS.map((h) => (
            <button key={h} type="button" onClick={() => setHab(h)}>
              <Badge variant={hab === h ? "secondary" : "outline"}>{h}</Badge>
            </button>
          ))}
        </div>
      </div>

      {list.length === 0 ? (
        <p className="text-sm text-muted-foreground">Rien pour ce filtre. Changez de mois ou de milieu.</p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2">
          {list.map((f) => (
            <li key={f.id}>
              <Link
                to="/cueillette/$id"
                params={{ id: f.id }}
                className="block rounded-xl bg-card p-4 shadow-[var(--shadow-border)] transition-shadow hover:shadow-[var(--shadow-border-hover)]"
              >
                <p className="font-medium">{f.name}</p>
                <p className="text-xs italic text-muted-foreground">{f.latin}</p>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{f.edible}</p>
                <p className="mt-2 text-xs text-primary">Confusion : {f.lookalikes}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Disclaimer />
    </div>
  );
}
