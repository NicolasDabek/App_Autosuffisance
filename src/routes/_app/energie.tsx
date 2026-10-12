import { createFileRoute, Link } from "@tanstack/react-router";
import { Disclaimer } from "@/components/disclaimer";
import { NumberField } from "@/components/number-field";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ENERGY_SCENARIOS } from "@/data/energy";
import { energyStats } from "@/lib/calculators";
import { frEuro, frNumber } from "@/lib/format";
import { useHavre } from "@/lib/store";

export const Route = createFileRoute("/_app/energie")({ component: EnergiePage });

function EnergiePage() {
  const profile = useHavre((s) => s.profile);
  const patchHousing = useHavre((s) => s.patchHousing);
  const stats = energyStats(profile);
  const bill = profile.housing.kwhElecYear * 0.22 + profile.housing.kwhHeatYear * 0.12;

  return (
    <div>
      <PageHeader
        kicker="Habitat"
        title="Énergie et chauffage"
        description="Isoler, puis chauffer, puis produire. Les montants d’aides changent : France Rénov’ reste la porte d’entrée, pas un devis de salon."
      />

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Votre logement</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="grid gap-1.5">
            <Label>kWh électricité / an</Label>
            <NumberField
              integer
              min={0}
              value={profile.housing.kwhElecYear}
              onValueChange={(kwhElecYear) => patchHousing({ kwhElecYear })}
            />
          </div>
          <div className="grid gap-1.5">
            <Label>kWh chaleur / an</Label>
            <NumberField
              integer
              min={0}
              value={profile.housing.kwhHeatYear}
              onValueChange={(kwhHeatYear) => patchHousing({ kwhHeatYear })}
            />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Stères si tout le chaud au bois</p>
            <p className="font-display text-2xl tabular-nums">{frNumber(stats.steres, 1)}</p>
            <p className="text-xs text-muted-foreground">{stats.climate.woodNote}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">PV toiture (ordre, sans batterie)</p>
            <p className="font-display text-2xl tabular-nums">{frNumber(stats.pv.kwc, 1)} kWc</p>
            <p className="text-xs text-muted-foreground">
              ~{frNumber(stats.pv.kwh, 0)} kWh brut · {frNumber(stats.elecCov, 0)} % des besoins élec en autoconsommation diurne
            </p>
          </div>
        </CardContent>
      </Card>

      <p className="mb-4 text-sm text-muted-foreground">
        Facture d’ordre de grandeur (0,22 €/kWh élec, 0,12 €/kWh chaleur) : {frEuro(bill)} / an. Ce n’est pas un devis.
      </p>

      <div className="grid gap-4 lg:grid-cols-2">
        {ENERGY_SCENARIOS.map((s) => {
          const save = bill * (s.yearlySavePct / 100);
          return (
            <Card key={s.id}>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg">{s.name}</CardTitle>
                  <Badge variant="muted">complexité {s.complexity}/3</Badge>
                </div>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm text-muted-foreground">
                <p>{s.summary}</p>
                <p className="text-foreground">
                  {frEuro(s.capex[0])}–{frEuro(s.capex[1])} · ~{s.yearlySavePct} % de facture (
                  {frEuro(save)}) · retour {s.timeToReturnYears[0]}–{s.timeToReturnYears[1]} ans
                </p>
                <p>
                  Autonomie chaleur ~{s.autonomyHeatPct} % · électricité ~{s.autonomyElecPct} %
                </p>
                <ol className="list-decimal space-y-1 pl-4">
                  {s.steps.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ol>
                <ul className="list-disc space-y-1 pl-4">
                  {s.caveats.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <p className="mt-6 text-sm">
        <Link to="/bricolage/$id" params={{ id: "stock-bois" }} className="text-primary underline-offset-2 hover:underline">
          Abri à bois
        </Link>
        {" · "}
        <Link to="/legal" className="text-primary underline-offset-2 hover:underline">
          Aides et air
        </Link>
      </p>
      <Disclaimer />
    </div>
  );
}
