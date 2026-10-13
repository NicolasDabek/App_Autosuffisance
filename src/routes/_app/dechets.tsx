import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Disclaimer } from "@/components/disclaimer";
import { NumberField } from "@/components/number-field";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { CROP_FEEDING, WASTE_INPUTS, WASTE_METHODS } from "@/data/waste";
import { frEuro, frNumber } from "@/lib/format";
import { useHavre } from "@/lib/store";

export const Route = createFileRoute("/_app/dechets")({ component: DechetsPage });

function DechetsPage() {
  const garden = useHavre((s) => s.profile.gardenM2);
  const patchProfile = useHavre((s) => s.patchProfile);
  const [inputs, setInputs] = useState<Record<string, number>>(() =>
    Object.fromEntries(WASTE_INPUTS.map((i) => [i.id, i.kgWeekDefault])),
  );
  const [methodId, setMethodId] = useState("compost");
  const method = WASTE_METHODS.find((m) => m.id === methodId) ?? WASTE_METHODS[0];

  const weekly = useMemo(
    () => Object.values(inputs).reduce((a, b) => a + b, 0),
    [inputs],
  );
  const browns = (inputs.carton ?? 0) + (inputs.broyat ?? 0);
  const brownPct = weekly > 0 ? (browns / weekly) * 100 : 0;
  const [coverKgM2, setCoverKgM2] = useState(3);
  const yearIn = weekly * 52;
  const yearOut = yearIn * method.conversion;
  const weeks = method.timeWeeks;

  return (
    <div>
      <PageHeader
        kicker="Recycler"
        title="Déchets → sol"
        description="Ce que le foyer jette devient un plan d’apports pour le potager. Choisissez la méthode, lisez ce qu’elle refuse, puis calibre les doses par culture."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Intrants hebdomadaires</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-5">
            {WASTE_INPUTS.map((i) => (
              <div key={i.id} className="grid gap-2">
                <div className="flex justify-between text-sm">
                  <Label>{i.label}</Label>
                  <span className="tabular-nums text-muted-foreground">{frNumber(inputs[i.id], 1)} kg</span>
                </div>
                <Slider
                  min={0}
                  max={12}
                  step={0.1}
                  value={[inputs[i.id]]}
                  onValueChange={([v]) => setInputs((s) => ({ ...s, [i.id]: v ?? 0 }))}
                />
              </div>
            ))}
            <p className="text-sm text-muted-foreground">
              Total {frNumber(weekly, 1)} kg / sem. · {frNumber(yearIn, 0)} kg / an
            </p>
            <p className={`text-sm ${brownPct < 25 && weekly > 0 ? "text-destructive" : "text-muted-foreground"}`}>
              Bruns (carbone) : {frNumber(brownPct, 0)} % du poids.{" "}
              {brownPct < 25
                ? "Trop de verts : compost tassé et odorant. Visez au moins un tiers de bruns en volume."
                : "Équilibre carbone / azote correct."}
            </p>
            <Button variant="outline" size="sm" onClick={() => patchProfile({ wasteKgWeek: Math.round(weekly * 10) / 10 })}>
              Utiliser ce total dans le tableau de bord
            </Button>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-3 lg:col-span-3">
          <div className="flex flex-wrap gap-2">
            {WASTE_METHODS.map((m) => (
              <Button
                key={m.id}
                size="sm"
                variant={m.id === methodId ? "default" : "outline"}
                onClick={() => setMethodId(m.id)}
              >
                {m.name}
              </Button>
            ))}
          </div>
          <Card>
            <CardHeader>
              <CardTitle>{method.name}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm leading-relaxed text-muted-foreground">
              <p>{method.summary}</p>
              <p>
                Conversion ~{Math.round(method.conversion * 100)} % · {weeks} semaines · {method.space}
              </p>
              <p>
                <span className="text-foreground">Accepte.</span> {method.accepts.join(", ")}
              </p>
              <p>
                <span className="text-foreground">Refuse.</span> {method.rejects.join(", ")}
              </p>
              <p>
                <span className="text-foreground">NPK / usage.</span> {method.npk}. {method.use}
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-foreground">
                <p className="rounded-lg bg-muted p-3">
                  <span className="block text-xs text-muted-foreground">Amendement / an</span>
                  <span className="font-display text-2xl tabular-nums">{frNumber(yearOut, 0)} kg</span>
                </p>
                <p className="rounded-lg bg-muted p-3">
                  <span className="block text-xs text-muted-foreground">Engrais évités (ordre)</span>
                  <span className="font-display text-2xl tabular-nums">{frEuro(yearOut * 0.35)}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2 className="mt-10 font-display text-xl font-semibold">Plan d’apports ({garden} m² de potager)</h2>
      <div className="mt-3 overflow-x-auto rounded-xl bg-card shadow-[var(--shadow-border)]">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Cultures</th>
              <th className="px-4 py-3 font-medium">kg / m²</th>
              <th className="px-4 py-3 font-medium">Quand</th>
            </tr>
          </thead>
          <tbody>
            {CROP_FEEDING.map((c) => (
              <tr key={c.crop} className="border-b border-border last:border-0">
                <td className="px-4 py-3">{c.crop}</td>
                <td className="px-4 py-3 tabular-nums">{c.compostKgM2}</td>
                <td className="px-4 py-3 text-muted-foreground">{c.when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Avec {frNumber(yearOut, 0)} kg, vous pouvez amender environ{" "}
        {frNumber(yearOut / Math.max(0.5, coverKgM2), 0)} m² de planches gourmandes à{" "}
        <span className="inline-block w-20 align-middle">
          <NumberField min={0.5} max={10} emptyValue={3} value={coverKgM2} onValueChange={setCoverKgM2} aria-label="Dose de compost en kg/m²" />
        </span>{" "}
        kg/m².{" "}
        <Link to="/potager" className="text-primary underline-offset-2 hover:underline">
          Voir les cultures
        </Link>
        {" · "}
        <Link to="/sol" className="text-primary underline-offset-2 hover:underline">
          Textures, urine, biochar
        </Link>
        {" · "}
        <Link to="/bricolage/$id" params={{ id: "composteur" }} className="text-primary underline-offset-2 hover:underline">
          Fabriquer un composteur
        </Link>
      </p>
      <Disclaimer />
    </div>
  );
}
