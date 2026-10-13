import type { ReactNode } from "react";
import { NumberField } from "@/components/number-field";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { household } from "@/lib/calculators";
import { frEuro, frNumber } from "@/lib/format";
import { useHavre, usePref } from "@/lib/store";

/** Ponte annuelle de 1re année selon le type de poule (ordres de grandeur). */
const BREEDS = {
  hybride: { label: "Hybride pondeuse (rousse, ISA…)", eggs: 280 },
  mixte: { label: "Rustique mixte (Sussex, Marans…)", eggs: 180 },
  ornement: { label: "Ornement / naine", eggs: 110 },
} as const;
type Breed = keyof typeof BREEDS;

/** La ponte baisse d’environ 15 à 20 % par an après la première saison. */
const AGE_FACTOR = { "1": 1, "2": 0.82, "3": 0.68, "4": 0.55 } as const;
type Age = keyof typeof AGE_FACTOR;

export function FlockCalculator() {
  const profile = useHavre((s) => s.profile);
  const hh = household(profile);
  const [hens, setHens] = usePref("hens");
  const [breed, setBreed] = usePref("breed");
  const [age, setAge] = usePref("layAge");
  const [moultWeeks, setMoultWeeks] = usePref("moultWeeks");
  const [rangePct, setRangePct] = usePref("rangePct");
  const [feedEur, setFeedEur] = usePref("feedEur");
  const [eggsPerAdultWeek, setEggsPerAdultWeek] = usePref("eggsPerAdultWeek");

  // La pause de mue/hiver est déjà partiellement incluse dans les moyennes : on n’en retire que l’excédent au-delà de 6 semaines.
  const extraPause = Math.max(0, Math.min(26, moultWeeks) - 6) / 52;
  const eggsYear = hens * BREEDS[breed].eggs * AGE_FACTOR[age] * (1 - extraPause);
  const feedKg = hens * 44 * (1 - Math.min(60, Math.max(0, rangePct)) / 100);
  const need = eggsPerAdultWeek * hh.adultEq * 52;
  const cover = need ? Math.min(999, (eggsYear / need) * 100) : 0;
  const costPerDozen = eggsYear > 0 ? (feedKg * feedEur * 12) / eggsYear : 0;

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Calculer son poulailler</CardTitle>
        <CardDescription>
          Ponte, aliment et couverture des besoins du foyer ({frNumber(hh.adultEq, 1)} équivalent adulte). Ordres de grandeur.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <F label="Poules">
          <NumberField integer min={1} max={50} emptyValue={1} value={hens} onValueChange={setHens} />
        </F>
        <F label="Type de poule">
          <Select value={breed} onValueChange={(v) => setBreed(v as Breed)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {(Object.keys(BREEDS) as Breed[]).map((b) => (
                <SelectItem key={b} value={b}>
                  {BREEDS[b].label} · ~{BREEDS[b].eggs}/an
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </F>
        <F label="Âge (saison de ponte)">
          <Select value={age} onValueChange={(v) => setAge(v as Age)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1re année (100 %)</SelectItem>
              <SelectItem value="2">2e année (~82 %)</SelectItem>
              <SelectItem value="3">3e année (~68 %)</SelectItem>
              <SelectItem value="4">4e année et + (~55 %)</SelectItem>
            </SelectContent>
          </Select>
        </F>
        <F label="Arrêt mue + hiver (semaines)">
          <NumberField integer min={0} max={26} emptyValue={8} value={moultWeeks} onValueChange={setMoultWeeks} />
        </F>
        <F label="Part de ration trouvée (parcours, restes) %">
          <NumberField integer min={0} max={60} value={rangePct} onValueChange={setRangePct} />
        </F>
        <F label="Prix de l’aliment (€/kg)">
          <NumberField min={0} max={5} value={feedEur} onValueChange={setFeedEur} />
        </F>
        <F label="Œufs consommés / adulte / semaine">
          <NumberField min={0} max={21} value={eggsPerAdultWeek} onValueChange={setEggsPerAdultWeek} />
        </F>
        <div />
        <Out k="Œufs / an" v={`~${frNumber(eggsYear, 0)}`} hint={`≈ ${frNumber(eggsYear / 52, 1)} par semaine en moyenne, bien plus au printemps`} />
        <Out k="Besoins du foyer couverts" v={`${frNumber(cover, 0)} %`} hint={`${frNumber(need, 0)} œufs/an consommés`} />
        <Out k="Aliment acheté" v={`${frNumber(feedKg, 0)} kg/an`} hint={`${frEuro(feedKg * feedEur)} / an`} />
        <Out k="Coût aliment / douzaine" v={eggsYear > 0 ? `${frNumber(costPerDozen, 2)} €` : "—"} hint="Hors litière, soins et amortissement" />
      </CardContent>
    </Card>
  );
}

function F({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <Label>{label}</Label>
      {children}
    </div>
  );
}

function Out({ k, v, hint }: { k: string; v: string; hint: string }) {
  return (
    <div className="rounded-lg bg-muted/60 p-3">
      <p className="text-xs text-muted-foreground">{k}</p>
      <p className="font-display text-xl tabular-nums">{v}</p>
      <p className="text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}
