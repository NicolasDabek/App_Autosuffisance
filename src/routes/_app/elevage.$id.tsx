import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Disclaimer } from "@/components/disclaimer";
import { Chip, Kpi, KpiGrid } from "@/components/havre";
import { FlockCalculator } from "@/components/flock-calculator";
import { LegalBadge } from "@/components/legal-badge";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { animalById } from "@/data/animals";
import { CHAINS } from "@/data/chains";
import { useHavre } from "@/lib/store";

export const Route = createFileRoute("/_app/elevage/$id")({ component: AnimalPage });

function AnimalPage() {
  const { id } = Route.useParams();
  const toggle = useHavre((s) => s.toggleAnimal);
  const present = useHavre((s) => s.profile.animalsPresent.includes(id));
  const a = animalById(id);
  if (!a) throw notFound();
  const related = CHAINS.filter((c) => c.animalIds.includes(id));

  return (
    <div>
      <PageHeader
        kicker={`Élevage › ${a.name}`}
        title={a.id === "poules" ? "Calculer son poulailler" : a.name}
        description={a.summary}
        action={
          <Button variant={present ? "outline" : "default"} onClick={() => toggle(id)}>
            {present ? "Retirer du foyer" : "Marquer comme présent"}
          </Button>
        }
      />
      <div className="-mt-2 mb-4 flex flex-wrap items-center gap-2">
        <Chip tone={a.beginner ? "moss" : "terra"}>{a.beginner ? "✓ Accessible" : "Expérimenté"}</Chip>
        <LegalBadge level={a.legal.level} />
        <Chip tone="water">
          {a.minSurfaceM2}–{a.recommendedSurfaceM2} m²
        </Chip>
        <Chip tone="water">{a.hoursPerWeek} h/sem.</Chip>
        {a.latin ? <span className="text-xs italic text-muted-foreground">{a.latin}</span> : null}
      </div>

      {a.id === "poules" ? <FlockCalculator /> : null}

      <KpiGrid className="mt-4">
        <Kpi label="Budget de départ" value={`${a.minBudgetEur}`} unit="€ min." />
        <Kpi label="Bruit / odeur" value={`${a.noise} · ${a.smell}`} unit="/ 3" />
        <Kpi label="Cadres" value={`${a.settings.length}`} unit="cadres" note={a.settings.join(", ")} />
        <Kpi label="Climats" value={a.climates === "all" ? "Tous" : `${a.climates.length}`} note={a.climates === "all" ? undefined : a.climates.join(", ")} />
      </KpiGrid>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Cadre légal (France, foyer)</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Déclaration.</span> {a.legal.declaration}
            </p>
            <p>
              <span className="font-medium text-foreground">Abattage.</span> {a.legal.slaughter}
            </p>
            <p>
              <span className="font-medium text-foreground">Produits.</span> {a.legal.products}
            </p>
            <p>
              <span className="font-medium text-foreground">Voisinage.</span> {a.legal.neighbor}
            </p>
            <ul className="list-disc pl-4">
              {a.legal.sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="text-primary underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rendements et boucle</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm leading-relaxed text-muted-foreground">
            <ul className="list-disc pl-4">
              {a.yields.map((y) => (
                <li key={y.label}>
                  <span className="font-medium text-foreground">{y.label} :</span> {y.qty} {y.unit} / {y.per}
                </li>
              ))}
            </ul>
            <p>
              <span className="font-medium text-foreground">Aliment.</span> {a.feed.description} Boucle : {a.feed.loop}
            </p>
            <p>
              <span className="font-medium text-foreground">Fumier.</span> {a.manure.kgYear} kg/an — {a.manure.use}
            </p>
            <p>
              <span className="font-medium text-foreground">Logement.</span> {a.housing}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Santé et écueils</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="list-disc space-y-1 pl-4">
              {a.health.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <p className="mt-3 font-medium text-foreground">Pièges fréquents</p>
            <ul className="mt-1 list-disc space-y-1 pl-4">
              {a.pitfalls.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pour démarrer · chaînes liées</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="list-disc space-y-1 pl-4">
              {a.starter.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {related.map((c) => (
                <Button key={c.id} asChild variant="outline" size="sm">
                  <Link to="/chaines" search={{ id: c.id }}>
                    {c.name}
                  </Link>
                </Button>
              ))}
              <Button asChild variant="outline" size="sm">
                <Link to="/elevage">Toutes les fiches</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Disclaimer />
    </div>
  );
}

