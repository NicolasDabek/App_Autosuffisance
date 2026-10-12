import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Disclaimer } from "@/components/disclaimer";
import { LegalBadge } from "@/components/legal-badge";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ANIMALS } from "@/data/animals";
import type { AnimalCategory, LegalLevel } from "@/data/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/elevage/")({ component: ElevagePage });

const CATS: { id: AnimalCategory | "all"; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "volaille", label: "Volailles" },
  { id: "lagomorphe", label: "Lapins" },
  { id: "abeille", label: "Abeilles" },
  { id: "ruminant", label: "Ruminants" },
  { id: "porcin", label: "Porcins" },
  { id: "insecte", label: "Insectes" },
  { id: "mollusque", label: "Mollusques" },
  { id: "poisson", label: "Poissons" },
];

function ElevagePage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<AnimalCategory | "all">("all");
  const [legal, setLegal] = useState<LegalLevel | "all">("all");

  const list = useMemo(() => {
    return ANIMALS.filter((a) => {
      if (cat !== "all" && a.category !== cat) return false;
      if (legal !== "all" && a.legal.level !== legal) return false;
      if (q && !`${a.name} ${a.summary}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [q, cat, legal]);

  return (
    <div>
      <PageHeader
        kicker="Nourrir"
        title="Élevage légal, foyer privé"
        description="Fiches pour l’autoconsommation en France : déclaration, identification, abattage familial, voisinage. Rien ici n’autorise la vente."
      />

      <div className="mb-6 flex flex-col gap-3">
        <Input placeholder="Filtrer une espèce…" value={q} onChange={(e) => setQ(e.target.value)} className="max-w-sm" />
        <div className="flex flex-wrap gap-1.5">
          {CATS.map((c) => (
            <button key={c.id} type="button" onClick={() => setCat(c.id)}>
              <Badge variant={cat === c.id ? "default" : "outline"}>{c.label}</Badge>
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {(["all", "simple", "declaration", "identification", "complexe"] as const).map((l) => (
            <button key={l} type="button" onClick={() => setLegal(l)}>
              <Badge variant={legal === l ? "secondary" : "outline"}>
                {l === "all" ? "Tous cadres" : l}
              </Badge>
            </button>
          ))}
        </div>
      </div>

      <ul className="divide-y divide-border rounded-xl bg-card shadow-[var(--shadow-border)]">
        {list.map((a) => (
          <li key={a.id}>
            <Link
              to="/elevage/$id"
              params={{ id: a.id }}
              className={cn(
                "flex flex-col gap-2 px-5 py-4 transition-colors hover:bg-muted/50 sm:flex-row sm:items-center sm:justify-between",
              )}
            >
              <div>
                <p className="font-medium">{a.name}</p>
                <p className="mt-1 max-w-xl text-sm text-muted-foreground">{a.summary}</p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-2">
                <LegalBadge level={a.legal.level} />
                <span className="text-xs tabular-nums text-muted-foreground">
                  {a.minSurfaceM2} m² · {a.hoursPerWeek} h/sem.
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Disclaimer />
    </div>
  );
}
