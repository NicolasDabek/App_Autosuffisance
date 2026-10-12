import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Disclaimer } from "@/components/disclaimer";
import { NumberField } from "@/components/number-field";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CONSERVE } from "@/data/conservation";
import { RECIPES } from "@/data/recipes";
import { currentMonthIndex, frNumber } from "@/lib/format";

export const Route = createFileRoute("/_app/atelier")({ component: AtelierPage });

function scaledText(qty: number, scale: number) {
  const v = qty * scale;
  const digits = v >= 20 || Math.abs(v - Math.round(v)) < 0.05 ? 0 : 1;
  return frNumber(v, digits);
}

function AtelierPage() {
  const month = currentMonthIndex();
  const [id, setId] = useState(RECIPES[0].id);
  const recipe = RECIPES.find((r) => r.id === id) ?? RECIPES[0];
  const [kg, setKg] = useState(recipe.baseKg);
  const scale = recipe.baseKg > 0 ? kg / recipe.baseKg : 0;
  const method = CONSERVE.find((m) => m.id === recipe.method);

  return (
    <div>
      <PageHeader
        kicker="Nourrir"
        title="Atelier"
        description="On pèse la récolte, Havre met à l’échelle sel, sucre, bocaux. Les temps de stérilisation restent des ordres de grandeur : un aliment peu acide ne se traite pas comme une confiture."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <ul className="order-2 flex flex-col gap-2 lg:order-1 lg:col-span-2">
          {RECIPES.map((r) => {
            const on = r.id === recipe.id;
            const now = r.months.includes(month);
            return (
              <li key={r.id}>
                <button
                  type="button"
                  onClick={() => {
                    setId(r.id);
                    setKg(r.baseKg);
                  }}
                  className={`w-full rounded-lg border px-3 py-3 text-left ${on ? "border-primary bg-muted/60" : "border-border hover:bg-muted/40"}`}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium">{r.name}</span>
                    {now ? <Badge variant="secondary">Ce mois</Badge> : null}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">{r.summary}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <Card className="order-1 lg:order-2 lg:col-span-3" id={recipe.id}>
          <CardHeader>
            <CardTitle>{recipe.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{recipe.summary}</p>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{method?.name ?? recipe.method}</Badge>
              <Badge variant="muted">{recipe.time}</Badge>
            </div>
            <div className="max-w-xs">
              <Label htmlFor="kg-batch">Kilos de {recipe.baseLabel}</Label>
              <NumberField
                id="kg-batch"
                className="mt-1.5"
                value={kg}
                onValueChange={setKg}
                min={0}
                max={40}
                emptyValue={recipe.baseKg}
              />
              <p className="mt-1 text-xs text-muted-foreground">Recette de référence : {frNumber(recipe.baseKg, recipe.baseKg < 1 ? 1 : 0)} kg.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Pour cette pesée</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {recipe.ingredients.map((ing) => (
                  <li key={ing.label}>
                    {ing.label} — {scaledText(ing.qty, scale)} {ing.unit}
                  </li>
                ))}
                <li>
                  Contenants — {scaledText(recipe.jars, scale)} × {recipe.jarSize}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Gestes</h3>
              <ol className="mt-2 list-decimal space-y-1 pl-4 text-sm text-muted-foreground">
                {recipe.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
            <p className="rounded-lg bg-muted/70 px-3 py-2 text-sm">{recipe.caution}</p>
            <p className="text-sm text-muted-foreground">
              Méthode complète :{" "}
              <Link to="/conservation" hash={recipe.method} className="text-primary underline-offset-2 hover:underline">
                {method?.name ?? "conservation"}
              </Link>
              . Ce qui est déjà en cave se note au{" "}
              <Link to="/garde" className="text-primary underline-offset-2 hover:underline">
                garde-manger
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      </div>
      <Disclaimer>
        Havre met une recette de foyer à l’échelle. Ce n’est pas un barème de conserverie agréée. Les temps de chaleur sont indicatifs : en cas de doute sur un bocal (odeur, capsule plate, trouble), on jette sans goûter.
      </Disclaimer>
    </div>
  );
}
