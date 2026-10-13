import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Disclaimer } from "@/components/disclaimer";
import { NumberField } from "@/components/number-field";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CROPS } from "@/data/crops";
import { seedRateFor } from "@/data/seed-rates";
import { MONTH_LABELS, currentMonthIndex, frNumber } from "@/lib/format";
import { gardenYield } from "@/lib/calculators";
import { useHavre } from "@/lib/store";

export const Route = createFileRoute("/_app/semis")({ component: SemisPage });

function allocate(ids: string[], garden: number, areas: Record<string, number>) {
  const custom = ids.filter((id) => (areas[id] ?? 0) > 0);
  const customSum = custom.reduce((acc, id) => acc + (areas[id] ?? 0), 0);
  const rest = ids.filter((id) => (areas[id] ?? 0) <= 0);
  const share = rest.length ? Math.max(0, garden - customSum) / rest.length : 0;
  const out: Record<string, number> = {};
  for (const id of ids) out[id] = (areas[id] ?? 0) > 0 ? areas[id] : share;
  return { out, customSum, share };
}

/** Semence majorée des pertes ; plants et graines comptés en unités entières. */
function seedText(qty: number, unit: string, lossPct: number) {
  const v = qty / (1 - Math.min(70, Math.max(0, lossPct)) / 100);
  if (unit !== "g") return frNumber(Math.ceil(v), 0);
  return frNumber(v, v >= 10 ? 0 : 1);
}

function SemisPage() {
  const profile = useHavre((s) => s.profile);
  const gardenTotal = profile.gardenM2;
  const [pathsPct, setPathsPct] = useState(25);
  const [lossPct, setLossPct] = useState(20);
  const garden = Math.round(gardenTotal * (1 - Math.min(60, Math.max(0, pathsPct)) / 100) * 10) / 10;
  const site = gardenYield(profile).kgM2 / 2.2;
  const planIds = useHavre((s) => s.planIds) ?? [];
  const planM2 = useHavre((s) => s.planM2) ?? {};
  const toggle = useHavre((s) => s.togglePlan);
  const setM2 = useHavre((s) => s.setPlanM2);
  const clearAreas = useHavre((s) => s.clearPlanM2);
  const clearAll = useHavre((s) => s.clearPlan);
  const hydrated = useHavre((s) => s.hydrated);
  const month = currentMonthIndex();
  const families = useMemo(() => [...new Set(CROPS.map((c) => c.family))].sort((a, b) => a.localeCompare(b, "fr")), []);
  const [family, setFamily] = useState("all");

  const ids = hydrated ? planIds : [];
  const areas = hydrated ? planM2 : {};
  const selected = CROPS.filter((c) => ids.includes(c.id));
  const { out, customSum } = allocate(ids, garden, areas);
  const assigned = selected.reduce((acc, c) => acc + (out[c.id] ?? 0), 0);
  const kilos = selected.reduce((acc, c) => acc + (out[c.id] ?? 0) * c.yieldKgM2 * site, 0);

  const familyArea = new Map<string, number>();
  for (const c of selected) familyArea.set(c.family, (familyArea.get(c.family) ?? 0) + (out[c.id] ?? 0));
  const tense = [...familyArea.entries()].filter(([, m2]) => assigned > 0 && m2 / assigned > 0.4);

  const visible = CROPS.filter((c) => family === "all" || c.family === family);

  return (
    <div>
      <PageHeader
        kicker="Nourrir"
        title="Plan de semis"
        description="On choisit les cultures, Havre répartit les mètres carrés du potager et estime graines et kilos. Une famille qui dépasse 40 % de la surface fatigue le sol : c’est le signal de rotation, pas une interdiction."
      />

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground">Potager déclaré</p>
            <p className="font-display text-2xl tabular-nums">{frNumber(garden, 0)} m² cultivés</p>
            <p className="text-xs text-muted-foreground">sur {gardenTotal} m² déclarés</p>
            <Link to="/" className="text-xs text-primary underline-offset-2 hover:underline">
              Ajuster sur le tableau de bord
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground">Cultures au plan</p>
            <p className="font-display text-2xl tabular-nums">{selected.length}</p>
            <p className="text-xs text-muted-foreground">{frNumber(assigned, 1)} m² affectés</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground">Ordre de grandeur</p>
            <p className="font-display text-2xl tabular-nums">~{frNumber(kilos, 0)} kg</p>
            <p className="text-xs text-muted-foreground">
              climat, sol, savoir-faire et arrosage du profil (×{frNumber(site, 2)})
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-6 grid max-w-xl gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="paths">Allées et passe-pieds (%)</Label>
          <NumberField id="paths" integer min={0} max={60} value={pathsPct} onValueChange={setPathsPct} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="loss">Pertes à la levée / repiquage (%)</Label>
          <NumberField id="loss" integer min={0} max={70} value={lossPct} onValueChange={setLossPct} />
        </div>
      </div>

      {customSum > garden + 0.05 ? (
        <p className="mb-4 rounded-lg border border-border bg-muted/60 px-3 py-2 text-sm">
          Les mètres saisis à la main ({frNumber(customSum, 1)}) dépassent la surface cultivée ({frNumber(garden, 1)} m²). Le reste des cultures tombe à zéro tant que ce n’est pas corrigé.
        </p>
      ) : ids.length > 0 && ids.every((id) => (areas[id] ?? 0) > 0) && garden - customSum > 0.5 ? (
        <p className="mb-4 rounded-lg border border-border bg-muted/60 px-3 py-2 text-sm">
          Il reste {frNumber(garden - customSum, 1)} m² non couverts. Laissez un 0 pour que Havre les répartisse, ou gardez une planche de repos.
        </p>
      ) : null}
      {tense.length ? (
        <p className="mb-4 rounded-lg border border-border bg-muted/60 px-3 py-2 text-sm">
          Rotation tendue : {tense.map(([name, m2]) => `${name} ${frNumber((m2 / assigned) * 100, 0)} %`).join(" · ")}. Étaler sur une autre famille, ou accepter et noter la planche pour l’an prochain.
        </p>
      ) : null}

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <h2 className="font-display text-xl font-semibold">Choisir</h2>
        <Button type="button" variant="outline" size="sm" disabled={!hydrated} onClick={() => clearAreas()}>
          Répartir également
        </Button>
        <Button type="button" variant="outline" size="sm" disabled={!hydrated} onClick={() => clearAll()}>
          Vider le plan
        </Button>
      </div>
      <div className="flex flex-wrap gap-1.5">
        <button type="button" onClick={() => setFamily("all")}>
          <Badge variant={family === "all" ? "secondary" : "outline"}>Toutes familles</Badge>
        </button>
        {families.map((f) => (
          <button key={f} type="button" onClick={() => setFamily(f)}>
            <Badge variant={family === f ? "secondary" : "outline"}>{f}</Badge>
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {visible.map((c) => {
          const on = ids.includes(c.id);
          return (
            <button key={c.id} type="button" disabled={!hydrated} onClick={() => toggle(c.id)}>
              <Badge variant={on ? "default" : "outline"}>{c.name}</Badge>
            </button>
          );
        })}
      </div>

      <h2 className="mt-10 font-display text-xl font-semibold">Mètres et semences</h2>
      {selected.length === 0 ? (
        <p className="mt-3 text-sm text-muted-foreground">Aucune culture. Le plan reste dans ce navigateur.</p>
      ) : (
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {selected.map((c) => {
            const m2 = out[c.id] ?? 0;
            const rate = seedRateFor(c.id);
            const manual = (areas[c.id] ?? 0) > 0;
            return (
              <li key={c.id} id={c.id}>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-base">{c.name}</CardTitle>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {c.family} · {c.rotationGap}
                        </p>
                      </div>
                      <button type="button" className="text-xs text-muted-foreground underline-offset-2 hover:underline" onClick={() => toggle(c.id)}>
                        Retirer
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 text-sm">
                    <Label htmlFor={`m2-${c.id}`}>m² saisis (0 = part automatique)</Label>
                    <NumberField
                      id={`m2-${c.id}`}
                      value={manual ? areas[c.id] : 0}
                      onValueChange={(v) => setM2(c.id, v)}
                      min={0}
                      max={500}
                      emptyValue={0}
                    />
                    <p className="text-muted-foreground">
                      Affecté {frNumber(m2, 1)} m² · ~{frNumber(m2 * c.yieldKgM2 * site, 1)} kg · besoin azote {c.nNeed}
                    </p>
                    {rate ? (
                      <p className="text-muted-foreground">
                        Semence ≈ {seedText(rate.perM2 * m2, rate.unit, lossPct)} {rate.unit}. {rate.note}
                      </p>
                    ) : (
                      <p className="text-muted-foreground">Dose de semence : voir le sachet, la fiche ne fixe pas de grammage.</p>
                    )}
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ul>
      )}

      <h2 className="mt-10 font-display text-xl font-semibold">Calendrier du plan</h2>
      <ol className="mt-3 grid gap-2 sm:grid-cols-2">
        {MONTH_LABELS.map((label, i) => {
          const sow = selected.filter((c) => c.monthsSow.includes(i));
          const har = selected.filter((c) => c.monthsHarvest.includes(i));
          const current = i === month;
          return (
            <li key={label} className={`rounded-lg border px-3 py-3 ${current ? "border-primary" : "border-border"}`}>
              <p className="text-sm font-medium capitalize">
                {label}
                {current ? " · maintenant" : ""}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Semer : {sow.length ? sow.map((c) => c.name).join(", ") : "—"}
              </p>
              <p className="text-sm text-muted-foreground">
                Récolter : {har.length ? har.map((c) => c.name).join(", ") : "—"}
              </p>
            </li>
          );
        })}
      </ol>

      <p className="mt-6 text-sm text-muted-foreground">
        Les fiches détaillées restent au{" "}
        <Link to="/potager" className="text-primary underline-offset-2 hover:underline">
          potager
        </Link>
        . Ce qui déborde se transforme à l’
        <Link to="/atelier" className="text-primary underline-offset-2 hover:underline">
          atelier
        </Link>
        .
      </p>
      <Disclaimer />
    </div>
  );
}
