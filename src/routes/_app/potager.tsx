import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Disclaimer } from "@/components/disclaimer";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CROPS, ROTATION_GUIDE, SEED_SAVING } from "@/data/crops";
import { Advanced, Chip, Hero, ListRow, Note, Segmented } from "@/components/havre";
import { Button } from "@/components/ui/button";
import { allocatePlan, gardenYield, household, wasteStats } from "@/lib/calculators";
import { frNumber, MONTH_LABELS } from "@/lib/format";
import { usePref, useHavre } from "@/lib/store";

const ROT_COLORS = ["#a4482b", "#2f5d3a", "#c9922e", "#2d6170", "#5a3a26", "#5a5045"];
const DIET: Record<string, string> = { omnivore: "omnivore", flexitarien: "flexitarien", vegetarien: "végétarien", vegan: "végétalien" };

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
  const profile = useHavre((s) => s.profile);
  const garden = profile.gardenM2;
  const y = gardenYield(profile);
  const month = new Date().getMonth();
  const sowNow = CROPS.filter((c) => c.monthsSow.includes(month));
  const harvestNow = CROPS.filter((c) => c.monthsHarvest.includes(month));
  const [tab, setTab] = useState<"semer" | "recolter" | "tout">("semer");
  const [showAll, setShowAll] = useState(false);
  const shown = tab === "semer" ? sowNow : tab === "recolter" ? harvestNow : CROPS;
  const hydrated = useHavre((s) => s.hydrated);
  const planIds = useHavre((s) => s.planIds);
  const planM2 = useHavre((s) => s.planM2);
  const logs = useHavre((s) => s.logs);
  const [pathsPct] = usePref("pathsPct");
  const cultivated = garden * (1 - Math.min(60, Math.max(0, pathsPct)) / 100);
  const waste = wasteStats(profile, logs, "compost");
  const ids = hydrated ? (planIds ?? []) : [];
  const { out } = allocatePlan(ids, cultivated, hydrated ? (planM2 ?? {}) : {});
  const famM2 = new Map<string, number>();
  for (const c of CROPS) if (ids.includes(c.id)) famM2.set(c.family, (famM2.get(c.family) ?? 0) + (out[c.id] ?? 0));
  const famTotal = [...famM2.values()].reduce((a, b) => a + b, 0);
  const rotation = famTotal > 0
    ? [...famM2.entries()].map(([family, m2]) => ({ family, pct: (m2 / famTotal) * 100 })).filter((r) => r.pct > 0).sort((a, b) => b.pct - a.pct)
    : [];
  const overloaded = rotation.filter((r) => r.pct > 40);
  const gourmandes = CROPS.filter((c) => c.nNeed === "fort");
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

      <Hero tone="bark" label={`Récolte estimée sur ${garden} m²`} value={`~${frNumber(y.net, 0)}`} unit="kg/an" pct={y.coverPct}>
        <p className="text-sm">
          {frNumber(y.coverPct, 0)} % des {frNumber(y.needKg, 0)} kg nécessaires · {frNumber(y.m2ForFull, 0)} m² pour l’autonomie
        </p>
      </Hero>
      <Advanced title="Comment c’est calculé ?" icon="🧮" className="bg-card">
        <p className="text-sm text-muted-foreground">
          2,2 kg/m² × climat {frNumber(y.factors.climate, 2)} × sol {frNumber(y.factors.soil, 2)} × savoir-faire{" "}
          {frNumber(y.factors.skill, 2)} × eau {frNumber(y.factors.water, 2)} = {frNumber(y.kgM2, 2)} kg/m², puis −{" "}
          {profile.storageLossPct} % de pertes. Besoin : régime {DIET[profile.diet]}, {frNumber(household(profile).adultEq, 1)}{" "}
          équivalent adulte.{" "}
          <Link to="/" hash="foyer" className="text-primary underline">
            Ajuster le profil
          </Link>
        </p>
      </Advanced>

      <Card className="mt-4">
        <CardContent className="p-4">
          <h2 className="text-[22px] font-bold">En {MONTH_LABELS[month]}</h2>
          <div className="mt-3">
            <Segmented<"semer" | "recolter" | "tout">
              label="Cultures du mois"
              value={tab}
              onChange={setTab}
              options={[
                ["semer", `Semer · ${sowNow.length}`],
                ["recolter", `Récolter · ${harvestNow.length}`],
                ["tout", "Tout"],
              ]}
            />
          </div>
          <div className="mt-2">
            {shown.slice(0, showAll ? undefined : 6).map((c) => {
              const sow = c.monthsSow.includes(month);
              const harvest = c.monthsHarvest.includes(month);
              const asSow = tab === "semer" || (tab === "tout" && sow);
              return (
                <ListRow
                  key={c.id}
                  icon={asSow ? "🌱" : harvest ? "🧺" : "🌿"}
                  tone={asSow ? "moss" : harvest ? "terra" : "wheat"}
                  title={c.name}
                  sub={`${c.family} · ${frNumber(c.yieldKgM2, 1)} kg/m²`}
                  right={
                    tab === "tout" && !sow && !harvest ? (
                      <Chip tone="wheat">hors saison</Chip>
                    ) : asSow ? (
                      <Chip>semer</Chip>
                    ) : (
                      <Chip tone="terra">récolter</Chip>
                    )
                  }
                />
              );
            })}
            {shown.length === 0 ? <p className="py-3 text-sm text-muted-foreground">Rien à {tab === "semer" ? "semer" : "récolter"} ce mois-ci.</p> : null}
          </div>
          {shown.length > 6 ? (
            <Button variant="outline" className="mt-3 w-full" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Réduire la liste" : `Voir les ${shown.length} cultures`}
            </Button>
          ) : null}
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardContent className="p-4">
          <h2 className="text-[22px] font-bold">Rotation</h2>
          <p className="text-[15px] text-muted-foreground">Au-delà de 40 % de surface pour une famille, le sol fatigue.</p>
          {rotation.length ? (
            <>
              <div className="mt-3 flex h-6 overflow-hidden rounded-lg text-xs font-bold" role="img" aria-label="Répartition des familles au plan de semis">
                {rotation.map((r, i) => (
                  <div
                    key={r.family}
                    className="truncate px-1.5 py-1"
                    style={{ width: `${r.pct}%`, background: ROT_COLORS[i % ROT_COLORS.length], color: i % ROT_COLORS.length === 2 ? "#1f1a14" : "#fff" }}
                    title={`${r.family} ${frNumber(r.pct, 0)} %`}
                  >
                    {r.family}
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {rotation.map((r) => `${r.family} ${frNumber(r.pct, 0)} %`).join(" · ")}
              </p>
              {overloaded.length ? (
                <Note icon="⚠">
                  {overloaded.map((r) => r.family).join(", ")} dépasse{overloaded.length > 1 ? "nt" : ""} 40 % du plan.
                </Note>
              ) : (
                <Note tone="ok" icon="✓">
                  Aucune famille ne dépasse 40 %.
                </Note>
              )}
            </>
          ) : (
            <Note tone="info" icon="📋">
              Aucun plan de semis : ajoutez des cultures pour voir la rotation.
            </Note>
          )}
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardContent className="p-4">
          <h2 className="text-[22px] font-bold">À relier</h2>
          <div className="mt-1.5">
            <ListRow icon="📋" title="Plan de semis" sub={`Répartir les ${frNumber(cultivated, 0)} m² cultivés`} to="/semis" />
            <ListRow icon="♻" tone="terra" title="Déchets → sol" sub={`${frNumber(waste.kgOut, 0)} kg d’amendement / an`} to="/dechets" />
            <ListRow icon="🫙" tone="wheat" title="Transformer la récolte" sub="Conserves, séchage, cave" to="/conservation" />
            <ListRow icon="🐞" tone="water" title="Sol, engrais verts, ravageurs" sub="Base de connaissances" to="/sol" />
          </div>
        </CardContent>
      </Card>

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
