import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Disclaimer } from "@/components/disclaimer";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FORAGE } from "@/data/forage";
import { MONTH_LABELS } from "@/lib/format";
import { useHavre } from "@/lib/store";

export const Route = createFileRoute("/_app/cueillette/$id")({ component: ForagePage });

function ForagePage() {
  const { id } = Route.useParams();
  const f = FORAGE.find((x) => x.id === id);
  if (!f) throw notFound();
  const toggle = useHavre((s) => s.toggleForageSaved);
  const saved = useHavre((s) => s.forageIds.includes(id));

  return (
    <div>
      <PageHeader
        kicker={f.kind}
        title={f.name}
        description={f.latin}
        action={
          <Button variant={saved ? "outline" : "default"} onClick={() => toggle(id)}>
            {saved ? "Retirer du carnet" : "Garder dans le carnet"}
          </Button>
        }
      />
      <p className="mb-6 text-sm text-muted-foreground">
        Saison : {f.months.map((m) => MONTH_LABELS[m]).join(", ")} · {f.habitats.join(" · ")}
      </p>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm leading-relaxed text-muted-foreground">
            <p>{f.edible}</p>
            <p>
              <span className="font-medium text-foreground">Conservation.</span> {f.conserve}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Confusion et droit</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              <span className="font-medium text-destructive">Risque de confusion.</span> {f.lookalikes}
            </p>
            <p>
              <span className="font-medium text-foreground">Précautions.</span> {f.caution}
            </p>
            <p>
              <span className="font-medium text-foreground">Légal.</span> {f.legal}
            </p>
          </CardContent>
        </Card>
      </div>
      <Button asChild variant="outline" className="mt-6">
        <Link to="/cueillette">Retour au guide</Link>
      </Button>
      <Disclaimer />
    </div>
  );
}
