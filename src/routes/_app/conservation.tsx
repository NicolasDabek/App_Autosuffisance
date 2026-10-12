import { createFileRoute, Link } from "@tanstack/react-router";
import { Disclaimer } from "@/components/disclaimer";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONSERVE, CONSERVE_CALENDAR } from "@/data/conservation";
import { MONTH_LABELS, currentMonthIndex } from "@/lib/format";

export const Route = createFileRoute("/_app/conservation")({ component: ConservationPage });

function ConservationPage() {
  const month = currentMonthIndex();
  const now = CONSERVE_CALENDAR.find((c) => c.month === month);

  return (
    <div>
      <PageHeader
        kicker="Nourrir"
        title="Conservation"
        description="Le potager de juillet ne nourrit janvier que si l’on transforme. Bocaux, lacto, séchage, cave : moins de kWh que le congélateur, plus de savoir-faire."
      />

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">Ce mois-ci · {MONTH_LABELS[month]}</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p>{now?.focus}</p>
          <p className="mt-2">
            Relier au{" "}
            <Link to="/atelier" className="text-primary underline-offset-2 hover:underline">
              atelier
            </Link>
            , au{" "}
            <Link to="/calendrier" className="text-primary underline-offset-2 hover:underline">
              calendrier
            </Link>
            , au{" "}
            <Link to="/garde" className="text-primary underline-offset-2 hover:underline">
              garde-manger
            </Link>
            , au{" "}
            <Link to="/bricolage/$id" params={{ id: "sechoir" }} className="text-primary underline-offset-2 hover:underline">
              séchoir solaire
            </Link>{" "}
            et au{" "}
            <Link to="/bricolage/$id" params={{ id: "garde-manger" }} className="text-primary underline-offset-2 hover:underline">
              garde-manger
            </Link>
            .
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        {CONSERVE.map((m) => (
          <Card key={m.id} id={m.id}>
            <CardHeader>
              <CardTitle className="text-lg">{m.name}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted-foreground">
              <p>{m.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {m.bestFor.map((b) => (
                  <Badge key={b} variant="secondary">
                    {b}
                  </Badge>
                ))}
              </div>
              <p>
                <span className="text-foreground">Éviter.</span> {m.notFor.join(" · ")}
              </p>
              <ol className="list-decimal space-y-1 pl-4">
                {m.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              <p>
                <span className="text-foreground">Temps.</span> {m.duration}
              </p>
              <p>
                <span className="text-foreground">Stockage.</span> {m.storage}
              </p>
              <ul className="list-disc space-y-1 pl-4">
                {m.pitfalls.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p>
                <span className="text-foreground">Droit.</span> {m.legal}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Disclaimer />
    </div>
  );
}
