import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Disclaimer } from "@/components/disclaimer";
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
        kicker="Élevage"
        title={a.name}
        description={a.summary}
        action={
          <Button variant={present ? "outline" : "default"} onClick={() => toggle(id)}>
            {present ? "Retirer du foyer" : "Marquer comme présent"}
          </Button>
        }
      />
      <div className="mb-6 flex flex-wrap gap-2">
        <LegalBadge level={a.legal.level} />
        {a.beginner ? (
          <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs">Accessible</span>
        ) : (
          <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs">Expérimenté</span>
        )}
        <span className="text-xs text-muted-foreground">{a.latin}</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Fact k="Surface min. / conseillée" v={`${a.minSurfaceM2} / ${a.recommendedSurfaceM2} m²`} />
        <Fact k="Budget de départ" v={`à partir de ${a.minBudgetEur} €`} />
        <Fact k="Temps" v={`${a.hoursPerWeek} h / semaine`} />
        <Fact k="Bruit / odeur" v={`${a.noise} / 3 · ${a.smell} / 3`} />
        <Fact k="Cadres" v={a.settings.join(", ")} />
        <Fact k="Climats" v={a.climates === "all" ? "Tous" : a.climates.join(", ")} />
      </div>

      {a.id === "poules" ? <FlockCalculator /> : null}

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

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl bg-card p-4 shadow-[var(--shadow-border)]">
      <p className="text-xs text-muted-foreground">{k}</p>
      <p className="mt-1 font-medium capitalize">{v}</p>
    </div>
  );
}
