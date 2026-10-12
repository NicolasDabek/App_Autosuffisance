import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Disclaimer } from "@/components/disclaimer";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { DIY } from "@/data/diy";

export const Route = createFileRoute("/_app/bricolage/")({ component: BricoPage });

const CATS = [
  { id: "all", label: "Tous" },
  { id: "abri", label: "Abris" },
  { id: "sol", label: "Sol" },
  { id: "eau", label: "Eau" },
  { id: "energie", label: "Énergie" },
  { id: "conservation", label: "Conservation" },
  { id: "cloture", label: "Clôture" },
] as const;

function BricoPage() {
  const [cat, setCat] = useState<(typeof CATS)[number]["id"]>("all");
  const list = DIY.filter((d) => cat === "all" || d.category === cat);

  return (
    <div>
      <PageHeader
        kicker="Habitat"
        title="Bricolage d’autonomie"
        description="Guides courts, matériaux, points de droit. Un rocket artisanal n’est pas un poêle d’assurance."
      />
      <div className="mb-6 flex flex-wrap gap-1.5">
        {CATS.map((c) => (
          <button key={c.id} type="button" onClick={() => setCat(c.id)}>
            <Badge variant={cat === c.id ? "default" : "outline"}>{c.label}</Badge>
          </button>
        ))}
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {list.map((d) => (
          <li key={d.id}>
            <Link
              to="/bricolage/$id"
              params={{ id: d.id }}
              className="block rounded-xl bg-card p-4 shadow-[var(--shadow-border)] transition-shadow hover:shadow-[var(--shadow-border-hover)]"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-medium">{d.name}</p>
                <Badge variant="muted">{d.difficulty}/3</Badge>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {d.time} · {d.cost}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <Disclaimer />
    </div>
  );
}
