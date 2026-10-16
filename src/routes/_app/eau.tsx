import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Disclaimer } from "@/components/disclaimer";
import { Hero } from "@/components/havre";
import { NumberField } from "@/components/number-field";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RAIN_MM, WATER, rainCollectable } from "@/data/water";
import { climateById } from "@/data/climate";
import { roofCoefficient } from "@/lib/calculators";
import { frNumber } from "@/lib/format";
import { useHavre } from "@/lib/store";

export const Route = createFileRoute("/_app/eau")({ component: EauPage });

function EauPage() {
  const profile = useHavre((s) => s.profile);
  const patchHousing = useHavre((s) => s.patchHousing);
  const [overflowPct, setOverflowPct] = useState(20);
  const roof = profile.housing.roofM2;
  const mm = RAIN_MM[profile.climate] ?? 700;
  const coef = roofCoefficient(profile.housing.roofMaterial);
  const efficiency = coef * (1 - overflowPct / 100);
  const litres = rainCollectable(roof, mm, efficiency);
  const climate = climateById(profile.climate);

  return (
    <div>
      <PageHeader
        kicker="Recycler"
        title="Eau"
        description="La toiture, le paillage et la noue font plus, souvent, qu’un forage. L’eau de pluie n’est pas potable : le droit le dit clairement."
      />

      <Hero label="Pluie récupérable sur votre toiture" value={`≈ ${frNumber(litres / 1000, 1)}`} unit="m³/an">
        <p className="text-sm">
          {roof} m² × {mm} mm ({climate.name}) × {frNumber(efficiency * 100, 0)} % de rendement. Eau non potable.
        </p>
      </Hero>

      <Card className="mb-8 mt-4">
        <CardHeader>
          <CardTitle>Collecte selon votre toiture</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-3">
          <div className="grid gap-1.5">
            <Label>Toiture raccordée (m², au sol)</Label>
            <NumberField integer min={0} value={roof} onValueChange={(roofM2) => patchHousing({ roofM2 })} />
          </div>
          <div className="grid gap-1.5">
            <Label>Couverture</Label>
            <Select
              value={profile.housing.roofMaterial}
              onValueChange={(v) => patchHousing({ roofMaterial: v as typeof profile.housing.roofMaterial })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tuiles">Tuiles (coef. 0,9)</SelectItem>
                <SelectItem value="ardoise">Ardoise (0,9)</SelectItem>
                <SelectItem value="metal">Bac acier / zinc (0,95)</SelectItem>
                <SelectItem value="plat-gravier">Toit plat gravillonné (0,6)</SelectItem>
                <SelectItem value="vegetalise">Toit végétalisé (0,3)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-1.5">
            <Label>Pertes débordement / premier flot (%)</Label>
            <NumberField integer min={0} max={90} value={overflowPct} onValueChange={setOverflowPct} />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Pluviométrie {climate.name}</p>
            <p className="font-display text-2xl tabular-nums">{mm} mm</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Collectable (~{frNumber(efficiency * 100, 0)} % de rendement)</p>
            <p className="font-display text-2xl tabular-nums">{frNumber(litres / 1000, 1)} m³/an</p>
          </div>
          <p className="sm:col-span-3 text-sm text-muted-foreground">
            Une cuve de 1 à 3 m³ lisse les semaines, pas une sécheresse méditerranéenne. Relier au{" "}
            <Link to="/bricolage/$id" params={{ id: "cuve-eau" }} className="text-primary underline-offset-2 hover:underline">
              guide récupérateur
            </Link>
            .
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {WATER.map((w) => (
          <Card key={w.id}>
            <CardHeader>
              <CardTitle className="text-lg">{w.name}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2 text-sm leading-relaxed text-muted-foreground">
              <p>{w.summary}</p>
              <p>
                <span className="text-foreground">Usages.</span> {w.uses.join(" · ")}
              </p>
              <p>
                <span className="text-foreground">Droit.</span> {w.legal}
              </p>
              <p>
                <span className="text-foreground">Dimensionnement.</span> {w.sizing}
              </p>
              <p>
                <span className="text-foreground">Gain.</span> {w.savings}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Disclaimer />
    </div>
  );
}
