import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import { Disclaimer } from "@/components/disclaimer";
import { FlowRow } from "@/components/flow-row";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { rankChains } from "@/lib/calculators";
import { frEuro, frNumber } from "@/lib/format";
import { useHavre } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/chaines")({
  validateSearch: (s: Record<string, unknown>): { id?: string } =>
    typeof s.id === "string" && s.id ? { id: s.id } : {},
  component: ChainesPage,
});

function ChainesPage() {
  const { id: qid } = Route.useSearch();
  const profile = useHavre((s) => s.profile);
  const toggleChain = useHavre((s) => s.toggleChain);
  const ranked = useMemo(() => rankChains(profile), [profile]);
  const [sel, setSel] = useState(qid ?? ranked[0]?.chain.id);
  const current = ranked.find((r) => r.chain.id === sel) ?? ranked[0];

  return (
    <div>
      <PageHeader
        kicker="Nourrir"
        title="Chaînes alimentaires"
        description="Combinaisons réalistes pour un particulier en France : pas une liste d’animaux, des boucles. Le score tient compte de votre terrain, budget, temps, climat, bruit et de ce qui est déjà là."
        action={
          <Button asChild variant="outline" size="sm">
            <Link to="/">Ajuster le foyer</Link>
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="flex flex-col gap-2 lg:col-span-2">
          {ranked.map((r) => (
            <button
              key={r.chain.id}
              type="button"
              onClick={() => setSel(r.chain.id)}
              className={cn(
                "rounded-xl bg-card p-4 text-left shadow-[var(--shadow-border)] transition-shadow",
                r.chain.id === current.chain.id && "ring-2 ring-ring",
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-medium">{r.chain.name}</p>
                <span className="tabular-nums text-sm text-primary">{frNumber(r.score, 0)}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{r.chain.tagline}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {r.compatible ? <Badge variant="ok">Compatible</Badge> : <Badge variant="warn">Freins</Badge>}
                {r.chain.beginner ? <Badge variant="muted">Début</Badge> : null}
              </div>
            </button>
          ))}
        </div>

        {current ? (
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>{current.chain.name}</CardTitle>
              <CardDescription>{current.chain.tagline}</CardDescription>
              <FlowRow nodes={current.chain.nodes} className="pt-2" />
            </CardHeader>
            <CardContent className="grid gap-5 text-sm leading-relaxed">
              <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Mini k="Surface min." v={`${current.chain.minSurfaceM2} m²`} />
                <Mini k="Idéal" v={`${current.chain.recommendedSurfaceM2} m²`} />
                <Mini
                  k="Installation"
                  v={`${frEuro(current.chain.setupEur[0])}–${frEuro(current.chain.setupEur[1])}`}
                />
                <Mini k="Temps" v={`${current.chain.hoursPerWeek} h/sem.`} />
              </dl>

              <Block title="Cadre légal">{current.chain.legalNote}</Block>

              <Block title="Boucles">
                <ul className="list-disc space-y-1 pl-4">
                  {current.chain.loops.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </Block>

              <Block title="Rendements indicatifs">
                <ul className="list-disc space-y-1 pl-4">
                  {current.chain.yields.map((y) => (
                    <li key={y.label}>
                      <span className="font-medium text-foreground">{y.label}.</span> {y.detail}
                    </li>
                  ))}
                </ul>
              </Block>

              <Block title="Mise en place">
                <ol className="list-decimal space-y-1 pl-4">
                  {current.chain.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </Block>

              <Block title="Points de vigilance">
                <ul className="list-disc space-y-1 pl-4">
                  {current.chain.risks.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </Block>

              {current.blockers.length ? (
                <Block title="Freins par rapport à votre foyer">
                  <ul className="list-disc space-y-1 pl-4 text-chart-3">
                    {current.blockers.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </Block>
              ) : null}

              {current.reasons.length ? (
                <ul className="list-disc space-y-1 pl-4 text-muted-foreground">
                  {current.reasons.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              ) : null}

              <div className="flex flex-wrap gap-2">
                <Button onClick={() => toggleChain(current.chain.id)}>
                  {profile.activeChainIds.includes(current.chain.id)
                    ? "Retirer du tableau de bord"
                    : "Activer cette chaîne"}
                </Button>
                {current.chain.animalIds.map((id) => (
                  <Button key={id} asChild variant="outline" size="sm">
                    <Link to="/elevage/$id" params={{ id }}>
                      Fiche {id}
                    </Link>
                  </Button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">{current.chain.savings}</p>
            </CardContent>
          </Card>
        ) : null}
      </div>
      <Disclaimer />
    </div>
  );
}

function Mini({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-xs text-muted-foreground">{k}</dt>
      <dd className="font-medium tabular-nums">{v}</dd>
    </div>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="mb-1 text-xs font-medium uppercase tracking-[0.14em] text-primary">{title}</h3>
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
}
