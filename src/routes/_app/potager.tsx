import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Disclaimer } from "@/components/disclaimer";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CROPS, ROTATION_GUIDE, SEED_SAVING } from "@/data/crops";
import { MONTH_LABELS } from "@/lib/format";
import { useHavre } from "@/lib/store";

export const Route = createFileRoute("/_app/potager")({ component: PotagerPage });

const SEASONS = [
  { id: "all", label: "Toutes saisons" },
  { id: "printemps", label: "Printemps" },
  { id: "ete", label: "Été" },
  { id: "automne", label: "Automne" },
  { id: "hiver", label: "Hiver" },
  { id: "perenne", label: "Vivaces" },
] as const;

function PotagerPage() {
  const garden = useHavre((s) => s.profile.gardenM2);
  const month = new Date().getMonth();
  const now = CROPS.filter((c) => c.monthsSow.includes(month) || c.monthsHarvest.includes(month));
  const gourmandes = CROPS.filter((c) => c.nNeed === "fort");
  const estimated = Math.round(garden * 2.2);
  const families = useMemo(() => [...new Set(CROPS.map((c) => c.family))].sort(), []);
  const [season, setSeason] = useState<(typeof SEASONS)[number]["id"]>("all");
  const [family, setFamily] = useState<string>("all");
  const [nNeed, setNNeed] = useState<"all" | "faible" | "moyen" | "fort">("all");

  const list = CROPS.filter((c) => {
    if (season !== "all" && c.season !== season) return false;
    if (family !== "all" && c.family !== family) return false;
    if (nNeed !== "all" && c.nNeed !== nNeed) return false;
    return true;
  });

  return (
    <div>
      <PageHeader
        kicker="Nourrir"
        title="Potager"
        description="Cultures, rotations, faim d’azote et semences. Reliez cette page aux déchets : le compost mûr nourrit les gourmandes, pas les carottes."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground">Surface potager / verger</p>
            <p className="mt-1 font-display text-2xl font-semibold tabular-nums">{garden} m²</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground">Ordre de grandeur récolte</p>
            <p className="mt-1 font-display text-2xl font-semibold tabular-nums">~{estimated} kg/an</p>
            <p className="text-xs text-muted-foreground">2,2 kg/m², mix conservateur</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground">À relier</p>
            <Link to="/semis" className="mt-1 block text-sm text-primary underline-offset-2 hover:underline">
              Plan de semis
            </Link>
            <Link to="/dechets" className="mt-1 block text-sm text-primary underline-offset-2 hover:underline">
              Plan d’apports déchets → sol
            </Link>
            <Link to="/conservation" className="mt-1 block text-sm text-primary underline-offset-2 hover:underline">
              Transformer la récolte
            </Link>
            <Link to="/sol" className="mt-1 block text-sm text-primary underline-offset-2 hover:underline">
              Sol, engrais verts, ravageurs
            </Link>
          </CardContent>
        </Card>
      </div>

      <h2 className="mt-10 font-display text-xl font-semibold">En ce moment</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {now.map((c) => (
          <Badge key={c.id} variant="secondary">
            {c.name} {c.monthsSow.includes(month) ? "· semer" : "· récolter"}
          </Badge>
        ))}
      </div>

      <h2 className="mt-10 font-display text-xl font-semibold">Rotation type sur 4 planches</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {ROTATION_GUIDE.map((r) => (
          <Card key={r.year}>
            <CardHeader>
              <CardTitle className="text-base">
                {r.year} · {r.slot}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{r.examples}</CardContent>
          </Card>
        ))}
      </div>

      <h2 className="mt-10 font-display text-xl font-semibold">Fiches cultures</h2>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {SEASONS.map((s) => (
          <button key={s.id} type="button" onClick={() => setSeason(s.id)}>
            <Badge variant={season === s.id ? "default" : "outline"}>{s.label}</Badge>
          </button>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        <button type="button" onClick={() => setFamily("all")}>
          <Badge variant={family === "all" ? "secondary" : "outline"}>Toutes familles</Badge>
        </button>
        {families.map((f) => (
          <button key={f} type="button" onClick={() => setFamily(f)}>
            <Badge variant={family === f ? "secondary" : "outline"}>{f}</Badge>
          </button>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {(["all", "faible", "moyen", "fort"] as const).map((n) => (
          <button key={n} type="button" onClick={() => setNNeed(n)}>
            <Badge variant={nNeed === n ? "secondary" : "outline"}>
              {n === "all" ? "Tous azotes" : `N ${n}`}
            </Badge>
          </button>
        ))}
      </div>

      <div className="mt-3 overflow-x-auto rounded-xl bg-card shadow-[var(--shadow-border)]">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Culture</th>
              <th className="px-4 py-3 font-medium">Famille</th>
              <th className="px-4 py-3 font-medium">N</th>
              <th className="px-4 py-3 font-medium">kg/m²</th>
              <th className="px-4 py-3 font-medium">Fenêtre</th>
            </tr>
          </thead>
          <tbody>
            {list.map((c) => (
              <tr key={c.id} id={c.id} className="border-b border-border last:border-0">
                <td className="px-4 py-3">
                  <p className="font-medium">{c.name}</p>
                  <p className="max-w-xs text-xs text-muted-foreground">{c.notes}</p>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{c.family}</td>
                <td className="px-4 py-3 capitalize">{c.nNeed}</td>
                <td className="px-4 py-3 tabular-nums">{c.yieldKgM2}</td>
                <td className="px-4 py-3 text-xs text-muted-foreground">
                  Semis {c.monthsSow.map((m) => MONTH_LABELS[m].slice(0, 3)).join(", ")}
                  <br />
                  Récolte {c.monthsHarvest.map((m) => MONTH_LABELS[m].slice(0, 3)).join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {list.length === 0 ? (
        <p className="mt-3 text-sm text-muted-foreground">Aucune culture pour ce filtre.</p>
      ) : (
        <p className="mt-3 text-xs text-muted-foreground">{list.length} fiches affichées.</p>
      )}

      <h2 className="mt-10 font-display text-xl font-semibold">Garder ses semences</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Libre pour le jardin du foyer. La vente de sachets est un autre cadre. Voir{" "}
        <Link to="/legal" className="text-primary underline-offset-2 hover:underline">
          Cadre légal
        </Link>
        .
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {SEED_SAVING.map((s) => (
          <Card key={s.crop}>
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-base">{s.crop}</CardTitle>
                <Badge variant="muted">{s.ease}</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{s.note}</CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Les plus gourmandes ({gourmandes.map((g) => g.name).join(", ")}) doivent recevoir le compost de poules et lapins
        — jamais cru.
      </p>
      <Disclaimer />
    </div>
  );
}
