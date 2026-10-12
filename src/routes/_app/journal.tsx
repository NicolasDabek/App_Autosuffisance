import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Disclaimer } from "@/components/disclaimer";
import { NumberField } from "@/components/number-field";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { foodAutonomy } from "@/lib/calculators";
import { frDate, frNumber, todayISO } from "@/lib/format";
import { type LogKind, useHavre } from "@/lib/store";

export const Route = createFileRoute("/_app/journal")({ component: JournalPage });

const KINDS: { id: LogKind; label: string; unit: string; kcal?: number }[] = [
  { id: "recolte", label: "Récolte potager / verger", unit: "kg", kcal: 400 },
  { id: "oeufs", label: "Œufs", unit: "pièces", kcal: 70 },
  { id: "viande", label: "Viande (carcasse)", unit: "kg", kcal: 1800 },
  { id: "miel", label: "Miel", unit: "kg", kcal: 3000 },
  { id: "cueillette", label: "Cueillette", unit: "kg", kcal: 350 },
  { id: "compost", label: "Compost sorti", unit: "kg" },
  { id: "bois", label: "Bois brûlé", unit: "stères" },
  { id: "pv", label: "Électricité PV", unit: "kWh" },
  { id: "eau", label: "Eau de pluie utilisée", unit: "L" },
];

function JournalPage() {
  const logs = useHavre((s) => s.logs);
  const add = useHavre((s) => s.addLog);
  const remove = useHavre((s) => s.removeLog);
  const profile = useHavre((s) => s.profile);
  const reset = useHavre((s) => s.resetAll);
  const food = foodAutonomy(profile, logs);
  const [kind, setKind] = useState<LogKind>("oeufs");
  const meta = KINDS.find((k) => k.id === kind)!;
  const [label, setLabel] = useState("Œufs");
  const [qty, setQty] = useState(6);
  const [date, setDate] = useState(todayISO());

  return (
    <div>
      <PageHeader
        kicker="Savoir"
        title="Journal"
        description="Récoltes, œufs, kWh, stères, litres. C’est ce journal qui fait bouger le pourcentage d’autonomie du tableau de bord."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground">kcal journalisées / besoin</p>
            <p className="font-display text-2xl tabular-nums">
              {frNumber(food.produced, 0)} / {frNumber(food.need, 0)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground">Autonomie alimentaire</p>
            <p className="font-display text-2xl tabular-nums">{frNumber(food.pct, 1)} %</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground">Entrées</p>
            <p className="font-display text-2xl tabular-nums">{logs.length}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Ajouter</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div className="grid gap-1.5 sm:col-span-2">
            <Label>Type</Label>
            <Select
              value={kind}
              onValueChange={(v) => {
                const k = v as LogKind;
                setKind(k);
                const m = KINDS.find((x) => x.id === k);
                if (m) setLabel(m.label);
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {KINDS.map((k) => (
                  <SelectItem key={k.id} value={k.id}>
                    {k.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-1.5">
            <Label>Libellé</Label>
            <Input value={label} onChange={(e) => setLabel(e.target.value)} />
          </div>
          <div className="grid gap-1.5">
            <Label>Quantité ({meta.unit})</Label>
            <NumberField min={0} value={qty} onValueChange={setQty} />
          </div>
          <div className="grid gap-1.5">
            <Label>Date</Label>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="sm:col-span-2 lg:col-span-5">
            <Button
              onClick={() =>
                add({
                  date,
                  kind,
                  label,
                  qty,
                  unit: meta.unit,
                  kcal: meta.kcal ? qty * meta.kcal : undefined,
                })
              }
            >
              Enregistrer
            </Button>
          </div>
        </CardContent>
      </Card>

      <ul className="mt-6 divide-y divide-border rounded-xl bg-card shadow-[var(--shadow-border)]">
        {logs.length === 0 ? (
          <li className="p-5 text-sm text-muted-foreground">Aucune entrée. Le tableau de bord restera à 0 %.</li>
        ) : (
          logs.map((l) => (
            <li key={l.id} className="flex items-center justify-between gap-3 px-4 py-3 text-sm">
              <span>
                <span className="text-muted-foreground">{frDate(l.date)} · </span>
                {l.label}{" "}
                <span className="tabular-nums">
                  {l.qty} {l.unit}
                </span>
              </span>
              <Button variant="ghost" size="sm" onClick={() => remove(l.id)}>
                Retirer
              </Button>
            </li>
          ))
        )}
      </ul>

      <Button variant="outline" className="mt-6" onClick={() => reset()}>
        Réinitialiser le foyer (navigateur)
      </Button>
      <Disclaimer />
    </div>
  );
}
