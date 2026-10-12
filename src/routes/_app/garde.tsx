import { createFileRoute, Link } from "@tanstack/react-router";
import { Disclaimer } from "@/components/disclaimer";
import { NumberField } from "@/components/number-field";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SEED_LIFE, STOCK_GROUPS, STOCKS, stockTarget } from "@/data/stocks";
import { energyStats } from "@/lib/calculators";
import { frNumber } from "@/lib/format";
import { useHavre } from "@/lib/store";

export const Route = createFileRoute("/_app/garde")({ component: GardePage });

function GardePage() {
  const profile = useHavre((s) => s.profile);
  const stocks = useHavre((s) => s.stocks) ?? {};
  const setStock = useHavre((s) => s.setStock);
  const hydrated = useHavre((s) => s.hydrated);
  const steres = energyStats(profile).steres;

  const rows = STOCKS.map((item) => {
    const target = stockTarget(item, profile.people, steres);
    const qty = hydrated ? (stocks[item.id] ?? 0) : 0;
    const pct = target > 0 ? Math.min(100, (qty / target) * 100) : 0;
    return { item, target, qty, pct };
  });
  const covered = rows.filter((r) => r.pct >= 100).length;

  return (
    <div>
      <PageHeader
        kicker="Nourrir"
        title="Garde-manger"
        description="Ce qui est déjà en cave, en bocaux et en sachets, comparé à un hiver de foyer. Les chiffres sont des ordres de grandeur, pas une ration. Tout reste dans ce navigateur."
      />

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground">Foyer</p>
            <p className="font-display text-2xl tabular-nums">{profile.people} pers.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground">Postes couverts</p>
            <p className="font-display text-2xl tabular-nums">
              {covered} / {rows.length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground">Bois si tout le chauffage</p>
            <p className="font-display text-2xl tabular-nums">{frNumber(steres, 1)} st</p>
            <Link to="/energie" className="text-xs text-primary underline-offset-2 hover:underline">
              Ajuster le logement
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-10">
        {STOCK_GROUPS.map((g) => (
          <section key={g.id}>
            <h2 className="font-display text-xl font-semibold">{g.label}</h2>
            <ul className="mt-3 grid gap-3">
              {rows
                .filter((r) => r.item.group === g.id)
                .map(({ item, target, qty, pct }) => (
                  <li key={item.id} id={item.id}>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <CardTitle className="text-base">{item.name}</CardTitle>
                            <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
                          </div>
                          <Badge variant={pct >= 100 ? "ok" : "muted"}>
                            {pct >= 100 ? "Couvert" : `${frNumber(pct, 0)} %`}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="grid gap-3">
                        <Progress value={pct} />
                        <div className="flex flex-wrap items-end gap-4">
                          <div className="grid gap-1.5">
                            <span className="text-xs text-muted-foreground">En stock ({item.unit})</span>
                            <NumberField
                              className="w-28"
                              integer={item.integer !== false}
                              min={0}
                              value={qty}
                              onValueChange={(n) => setStock(item.id, n)}
                            />
                          </div>
                          <p className="pb-2 text-sm text-muted-foreground">
                            Objectif {frNumber(target, item.integer === false ? 1 : 0)} {item.unit}
                            {" · "}
                            <Link to={item.href} className="text-primary underline-offset-2 hover:underline">
                              Voir la fiche
                            </Link>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>

      <h2 className="mt-12 font-display text-xl font-semibold">Combien de temps une graine tient</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Au sec, au frais, à l’obscurité. Un sachet tiède dans la serre perd une année. Libre pour le jardin du foyer — la vente de semences est un autre cadre.
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {SEED_LIFE.map((s) => (
          <li key={s.id} id={s.id}>
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base">{s.name}</CardTitle>
                  <Badge variant="secondary">{s.years}</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{s.note}</CardContent>
            </Card>
          </li>
        ))}
      </ul>
      <Disclaimer />
    </div>
  );
}
