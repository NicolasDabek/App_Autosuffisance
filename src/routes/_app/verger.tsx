import { createFileRoute, Link } from "@tanstack/react-router";
import { Disclaimer } from "@/components/disclaimer";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { climateById } from "@/data/climate";
import { TREES } from "@/data/trees";
import { MONTH_LABELS } from "@/lib/format";
import { useHavre } from "@/lib/store";

export const Route = createFileRoute("/_app/verger")({ component: VergerPage });

function VergerPage() {
  const climate = useHavre((s) => s.profile.climate);
  const info = climateById(climate);
  const suited = TREES.filter((t) => t.climates === "all" || t.climates.includes(climate));
  const others = TREES.filter((t) => t.climates !== "all" && !t.climates.includes(climate));

  return (
    <div>
      <PageHeader
        kicker="Nourrir"
        title="Verger"
        description={`Climat ${info.name} : ${info.regions}. Les ruches, le compost et les poules sous les cépées ferment la boucle.`}
      />

      <div className="mb-6 flex flex-wrap gap-2">
        <Badge variant="ok">Adaptés : {suited.length}</Badge>
        <Badge variant="muted">Limites climatiques : {others.length}</Badge>
        <ButtonLink />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {suited.map((t) => (
          <TreeCard key={t.id} t={t} tone="ok" />
        ))}
      </div>

      {others.length ? (
        <>
          <h2 className="mt-10 font-display text-xl font-semibold">Plus risqués ici</h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            {others.map((t) => (
              <TreeCard key={t.id} t={t} tone="warn" />
            ))}
          </div>
        </>
      ) : null}
      <Disclaimer />
    </div>
  );
}

function ButtonLink() {
  return (
    <span className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
      <Link to="/chaines" search={{ id: "ruches-verger" }} className="text-primary underline-offset-2 hover:underline">
        Chaîne ruches · verger
      </Link>
      <Link to="/conservation" className="text-primary underline-offset-2 hover:underline">
        Cave, séchage, confitures
      </Link>
      <Link to="/sol" className="text-primary underline-offset-2 hover:underline">
        Tavelure, carpocapse, cloque
      </Link>
    </span>
  );
}

function TreeCard({
  t,
  tone,
}: {
  t: (typeof TREES)[number];
  tone: "ok" | "warn";
}) {
  return (
    <Card id={t.id}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{t.name}</CardTitle>
          <Badge variant={tone === "ok" ? "ok" : "warn"}>{tone === "ok" ? "Climat OK" : "Limite"}</Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-2 text-sm text-muted-foreground">
        <p>{t.notes}</p>
        <p>
          <span className="text-foreground">Pollinisation.</span> {t.pollination}
        </p>
        <p>
          <span className="text-foreground">Espacement.</span> {t.spacingM} m · fruit vers {t.yearsToFruit} ans · {t.yieldKg}
        </p>
        <p>
          <span className="text-foreground">Récolte.</span>{" "}
          {t.harvestMonths.map((m) => MONTH_LABELS[m]).join(", ")} — {t.uses}
        </p>
        {t.rootstock ? (
          <p>
            <span className="text-foreground">Porte-greffe.</span> {t.rootstock}
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}
