import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Disclaimer } from "@/components/disclaimer";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DIY } from "@/data/diy";
import type { AppPath } from "@/data/types";

export const Route = createFileRoute("/_app/bricolage/$id")({ component: DiyPage });

function DiyPage() {
  const { id } = Route.useParams();
  const d = DIY.find((x) => x.id === id);
  if (!d) throw notFound();

  return (
    <div>
      <PageHeader kicker={d.category} title={d.name} description={`${d.time} · ${d.cost} · difficulté ${d.difficulty}/3`} />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Matériel</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
              {d.materials.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Étapes</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal space-y-1 pl-4 text-sm text-muted-foreground">
              {d.steps.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Droit et liens</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p>{d.legal}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {d.links.map((l) => (
              <DiyLink key={l} l={l} />
            ))}
          </div>
        </CardContent>
      </Card>
      <Button asChild variant="outline" className="mt-6">
        <Link to="/bricolage">Tous les guides</Link>
      </Button>
      <Disclaimer />
    </div>
  );
}

const PAGES: Record<string, { to: AppPath; label: string }> = {
  dechets: { to: "/dechets", label: "Déchets" },
  eau: { to: "/eau", label: "Eau" },
  potager: { to: "/potager", label: "Potager" },
  cueillette: { to: "/cueillette", label: "Cueillette" },
  calendrier: { to: "/calendrier", label: "Calendrier" },
  energie: { to: "/energie", label: "Énergie" },
  legal: { to: "/legal", label: "Cadre légal" },
  verger: { to: "/verger", label: "Verger" },
  conservation: { to: "/conservation", label: "Conservation" },
  garde: { to: "/garde", label: "Garde-manger" },
  semis: { to: "/semis", label: "Plan de semis" },
  atelier: { to: "/atelier", label: "Atelier" },
  sol: { to: "/sol", label: "Sol" },
  bricolage: { to: "/bricolage", label: "Bricolage" },
  elevage: { to: "/elevage", label: "Élevage" },
  chaines: { to: "/chaines", label: "Chaînes" },
};

function DiyLink({ l }: { l: string }) {
  const colon = l.indexOf(":");
  const kind = colon === -1 ? l : l.slice(0, colon);
  const rest = colon === -1 ? "" : l.slice(colon + 1);

  if (kind === "elevage" && rest) {
    return (
      <Button asChild size="sm" variant="outline">
        <Link to="/elevage/$id" params={{ id: rest }}>
          Fiche {rest}
        </Link>
      </Button>
    );
  }
  if (kind === "chaines" && rest) {
    return (
      <Button asChild size="sm" variant="outline">
        <Link to="/chaines" search={{ id: rest }}>
          Chaîne
        </Link>
      </Button>
    );
  }
  if (kind === "bricolage" && rest) {
    return (
      <Button asChild size="sm" variant="outline">
        <Link to="/bricolage/$id" params={{ id: rest }}>
          Guide
        </Link>
      </Button>
    );
  }
  const page = PAGES[l];
  if (page) {
    return (
      <Button asChild size="sm" variant="outline">
        <Link to={page.to}>{page.label}</Link>
      </Button>
    );
  }
  return (
    <Button asChild size="sm" variant="outline">
      <Link to="/">{l}</Link>
    </Button>
  );
}
