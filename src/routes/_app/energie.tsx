import { createFileRoute, Link } from "@tanstack/react-router";
import { Disclaimer } from "@/components/disclaimer";
import { Advanced, Hero, Kpi, KpiGrid } from "@/components/havre";
import { NumberField } from "@/components/number-field";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ENERGY_SCENARIOS } from "@/data/energy";
import { energyStats } from "@/lib/calculators";
import { frEuro, frNumber } from "@/lib/format";
import { useHavre } from "@/lib/store";

export const Route = createFileRoute("/_app/energie")({ component: EnergiePage });

function EnergiePage() {
  const profile = useHavre((s) => s.profile);
  const patchHousing = useHavre((s) => s.patchHousing);
  const stats = energyStats(profile);
  const h = profile.housing;
  const bill = profile.housing.kwhElecYear * 0.22 + profile.housing.kwhHeatYear * 0.12;

  return (
    <div>
      <PageHeader
        kicker="Habitat"
        title="Énergie et chauffage"
        description="Isoler, puis chauffer, puis produire. Les montants d’aides changent : France Rénov’ reste la porte d’entrée, pas un devis de salon."
      />

      <Hero label="Bois si 100 % de la chaleur" value={frNumber(stats.steres, 1)} unit="stères/an">
        <p className="text-sm">
          {frNumber(stats.usefulHeat, 0)} kWh utiles ÷ ({frNumber(stats.kwhPerStere, 0)} kWh/stère × {h.stoveEffPct} %). {stats.climate.woodNote}
        </p>
      </Hero>
      <KpiGrid>
        <Kpi label="☀ PV toiture" value={frNumber(stats.pv.kwc, 1)} unit="kWc" note={`~${frNumber(stats.pv.kwh, 0)} kWh/an brut`} />
        <Kpi label="⚡ Élec couverte" value={frNumber(stats.elecCov, 0)} unit="%" note={`${h.selfConsumptionPct} % autoconsommés`} />
        <Kpi label="💶 Facture estimée" value={frNumber(bill, 0)} unit="€/an" note="0,22 €/kWh élec · 0,12 €/kWh chaleur" />
        <Kpi label="🔥 Chaleur utile" value={frNumber(stats.usefulHeat / 1000, 1)} unit="MWh/an" note={`climat ${stats.climate.name.toLowerCase()}`} />
      </KpiGrid>

      <Card className="mb-8 mt-4">
        <CardHeader>
          <CardTitle className="text-[22px]">Votre logement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
          <div className="grid gap-1.5">
            <Label>Chauffage actuel</Label>
            <Pick
              value={h.heating}
              onChange={(heating) => patchHousing({ heating })}
              options={[
                ["gaz", "Gaz (rendement 90 %)"],
                ["fioul", "Fioul (85 %)"],
                ["elec", "Électrique direct (100 %)"],
                ["bois", "Bois (70 %)"],
                ["pac", "Pompe à chaleur (COP 3)"],
                ["mixte", "Mixte (90 %)"],
              ]}
            />
          </div>
          <div className="grid gap-1.5">
            <Label>Toiture pour panneaux (m²)</Label>
            <NumberField integer min={0} value={h.roofM2} onValueChange={(roofM2) => patchHousing({ roofM2 })} />
          </div>
          </div>
          <Advanced count={5}>
            <div className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="grid gap-1.5">
            <Label>Essence de bois</Label>
            <Pick
              value={h.woodKind}
              onChange={(woodKind) => patchHousing({ woodKind })}
              options={[
                ["feuillus-durs", "Feuillus durs (chêne, hêtre, charme)"],
                ["feuillus-tendres", "Feuillus tendres (bouleau, peuplier)"],
                ["resineux", "Résineux (pin, épicéa)"],
              ]}
            />
          </div>
          <div className="grid gap-1.5">
            <Label>Humidité du bois (%)</Label>
            <NumberField
              integer
              min={10}
              max={60}
              emptyValue={20}
              value={h.woodMoisturePct}
              onValueChange={(woodMoisturePct) => patchHousing({ woodMoisturePct })}
            />
          </div>
          <div className="grid gap-1.5">
            <Label>Rendement du poêle (%)</Label>
            <NumberField
              integer
              min={30}
              max={95}
              emptyValue={75}
              value={h.stoveEffPct}
              onValueChange={(stoveEffPct) => patchHousing({ stoveEffPct })}
            />
          </div>
          <div className="grid gap-1.5">
            <Label>Orientation du pan</Label>
            <Pick
              value={h.pvOrientation}
              onChange={(pvOrientation) => patchHousing({ pvOrientation })}
              options={[
                ["sud", "Sud (100 %)"],
                ["sud-est-ouest", "Sud-est / sud-ouest (95 %)"],
                ["est-ouest", "Est / ouest (85 %)"],
                ["nord", "Nord (60 %, déconseillé)"],
              ]}
            />
          </div>
          <div className="grid gap-1.5">
            <Label>Part autoconsommée (%)</Label>
            <NumberField
              integer
              min={0}
              max={100}
              emptyValue={35}
              value={h.selfConsumptionPct}
              onValueChange={(selfConsumptionPct) => patchHousing({ selfConsumptionPct })}
            />
          </div>
            </div>
          </Advanced>
        </CardContent>
      </Card>

      <h2 className="mb-3 text-[22px] font-bold">Scénarios</h2>

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

function Pick<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: [T, string][];
}) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as T)}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map(([id, label]) => (
          <SelectItem key={id} value={id}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
