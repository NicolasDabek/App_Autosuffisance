import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Disclaimer } from "@/components/disclaimer";
import { NumberField } from "@/components/number-field";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ANIMALS } from "@/data/animals";
import { CALENDAR } from "@/data/calendar";
import { CHAINS } from "@/data/chains";
import { CLIMATES } from "@/data/climate";
import { energyStats, foodAutonomy, nextActions, rankChains, wasteStats } from "@/lib/calculators";
import { currentMonthIndex, frNumber, monthLabel } from "@/lib/format";
import { useHavre } from "@/lib/store";

export const Route = createFileRoute("/_app/")({ component: Dashboard });

const GOALS = [
  { id: "oeufs", label: "Œufs du foyer" },
  { id: "legumes", label: "Légumes et conserves" },
  { id: "viande", label: "Un peu de viande" },
  { id: "miel", label: "Miel / pollinisation" },
  { id: "dechets", label: "Zéro biodéchet poubelle" },
  { id: "chauffage", label: "Moins dépendre du réseau pour le chaud" },
  { id: "eau", label: "Eau de pluie" },
  { id: "conserves", label: "Conserves et cave" },
];

function Dashboard() {
  const profile = useHavre((s) => s.profile);
  const logs = useHavre((s) => s.logs);
  const month = currentMonthIndex();
  const food = foodAutonomy(profile, logs);
  const waste = wasteStats(profile, logs, "compost");
  const energy = energyStats(profile);
  const ranked = rankChains(profile);
  const best = ranked.find((r) => r.compatible);
  const tasks = CALENDAR.filter((t) => t.month === month);
  const stocks = useHavre((s) => s.stocks) ?? {};
  const planIds = useHavre((s) => s.planIds) ?? [];
  const actions = nextActions(profile, stocks, planIds.length);

  return (
    <div>
      <PageHeader
        kicker={`${monthLabel(month)} · semaine ${weekNum()}`}
        title={profile.completed ? "Votre clos" : "Installer le foyer"}
        description={
          profile.completed
            ? "Les boucles se parlent : déchets, sol, plantes, animaux, eau, chaleur. Le tableau agrège ce que vous journalisez et ce que le simulateur recommande."
            : "Quelques paramètres — surface, climat, temps, logement — suffisent à relier toutes les pages de l’almanach."
        }
      />

      {!profile.completed ? <Onboarding /> : null}

      <div className="grid gap-4 sm:grid-cols-3">
        <Stat
          label="Autonomie alimentaire"
          value={`${frNumber(food.pct, 0)} %`}
          hint={food.produced ? `${frNumber(food.produced / 1000, 0)} k kcal journalisées / ${frNumber(food.need / 1000, 0)} k` : "Journalisez récoltes et œufs"}
        />
        <Stat
          label="Biodéchets valorisés"
          value={`${frNumber(waste.kgYearIn, 0)} kg`}
          hint={`≈ ${frNumber(waste.kgOut, 0)} kg d’amendement / an`}
        />
        <Stat
          label="Bois si 100 % chaleur"
          value={`${frNumber(energy.steres, 1)} st`}
          hint={`${energy.climate.name} · isolation ${profile.housing.insulation}`}
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Prochaines actions</CardTitle>
            <CardDescription>Priorités calculées à partir du profil, pas une liste générique.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {actions.map((a) => (
              <Link
                key={a.title}
                to={a.href}
                className="flex items-start justify-between gap-3 rounded-lg bg-muted/60 px-3 py-3 transition-colors hover:bg-muted"
              >
                <span>
                  <span className="block text-sm font-medium">{a.title}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{a.why}</span>
                </span>
                <ArrowRight className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              </Link>
            ))}
            {best ? (
              <div className="rounded-lg border border-border p-3">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">Chaîne la plus adaptée</p>
                <p className="mt-1 font-display text-lg font-semibold">{best.chain.name}</p>
                <p className="text-sm text-muted-foreground">{best.chain.tagline}</p>
                <Button asChild size="sm" className="mt-3">
                  <Link to="/chaines" search={{}}>
                    Voir le simulateur
                  </Link>
                </Button>
              </div>
            ) : null}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Ce mois-ci</CardTitle>
            <CardDescription>Extrait du calendrier, relié aux modules.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {tasks.map((t) => (
              <Link key={t.title} to={t.href ?? "/calendrier"} className="block rounded-md hover:bg-muted/80">
                <p className="text-sm font-medium">{t.title}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">{t.detail}</p>
              </Link>
            ))}
            <Button asChild variant="outline" size="sm">
              <Link to="/calendrier">Calendrier complet</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <section className="mt-8">
        <h2 className="font-display text-xl font-semibold">Boucles actives</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {profile.activeChainIds.length === 0 ? (
            <Card>
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground">
                  Aucune chaîne activée. Le simulateur en propose {CHAINS.length}, de la jardinière urbaine au clos rural.
                </p>
                <Button asChild className="mt-3" size="sm">
                  <Link to="/chaines" search={{}}>
                    Ouvrir les chaînes
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            profile.activeChainIds.map((id) => {
              const c = CHAINS.find((x) => x.id === id);
              if (!c) return null;
              return (
                <Card key={id}>
                  <CardHeader>
                    <CardTitle className="text-base">{c.name}</CardTitle>
                    <CardDescription>{c.tagline}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })
          )}
        </div>
      </section>

      <Disclaimer />
    </div>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <Card>
      <CardContent className="p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
        <p className="mt-2 font-display text-3xl font-semibold tabular-nums tracking-tight">{value}</p>
        <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
      </CardContent>
    </Card>
  );
}

function weekNum() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  const yearStart = new Date(d.getFullYear(), 0, 1);
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

function Onboarding() {
  const profile = useHavre((s) => s.profile);
  const hydrated = useHavre((s) => s.hydrated);
  const patch = useHavre((s) => s.patchProfile);
  const patchHousing = useHavre((s) => s.patchHousing);
  const toggleAnimal = useHavre((s) => s.toggleAnimal);
  const toggleGoal = useHavre((s) => s.toggleGoal);

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Profil du foyer</CardTitle>
        <CardDescription>
          Ces champs alimentent le simulateur de chaînes, le potager, l’énergie et le tableau de bord. Rien n’est envoyé
          sur un serveur : tout reste dans ce navigateur.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field label="Personnes au foyer">
            <NumberField
              integer
              min={1}
              emptyValue={1}
              value={profile.people}
              onValueChange={(people) => patch({ people })}
            />
          </Field>
          <Field label="Terrain (m²)">
            <NumberField
              integer
              min={0}
              value={profile.surfaceM2}
              onValueChange={(surfaceM2) => patch({ surfaceM2 })}
            />
          </Field>
          <Field label="Potager / verger (m²)">
            <NumberField
              integer
              min={0}
              value={profile.gardenM2}
              onValueChange={(gardenM2) => patch({ gardenM2 })}
            />
          </Field>
          <Field label="Heures / semaine">
            <NumberField
              min={0}
              value={profile.hoursPerWeek}
              onValueChange={(hoursPerWeek) => patch({ hoursPerWeek })}
            />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field label="Climat">
            <Select value={profile.climate} onValueChange={(v) => patch({ climate: v as typeof profile.climate })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CLIMATES.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field label="Cadre">
            <Select value={profile.setting} onValueChange={(v) => patch({ setting: v as typeof profile.setting })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="urbain">Urbain</SelectItem>
                <SelectItem value="periurbain">Périurbain</SelectItem>
                <SelectItem value="rural">Rural</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field label="Budget d’installation (€)">
            <NumberField
              integer
              min={0}
              value={profile.budgetEur}
              onValueChange={(budgetEur) => patch({ budgetEur })}
            />
          </Field>
          <Field label="Bruit toléré">
            <Select
              value={profile.noiseTolerance}
              onValueChange={(v) => patch({ noiseTolerance: v as typeof profile.noiseTolerance })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="faible">Faible (voisins proches)</SelectItem>
                <SelectItem value="moyen">Moyen</SelectItem>
                <SelectItem value="eleve">Élevé (écarté)</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field label="Logement">
            <Select
              value={profile.housing.type}
              onValueChange={(v) => patchHousing({ type: v as typeof profile.housing.type })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maison">Maison</SelectItem>
                <SelectItem value="appart">Appartement</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field label="Isolation">
            <Select
              value={profile.housing.insulation}
              onValueChange={(v) => patchHousing({ insulation: v as typeof profile.housing.insulation })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="faible">Faible</SelectItem>
                <SelectItem value="moyenne">Moyenne</SelectItem>
                <SelectItem value="bonne">Bonne</SelectItem>
                <SelectItem value="passive">Très bonne / passive</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field label="Chauffage actuel">
            <Select
              value={profile.housing.heating}
              onValueChange={(v) => patchHousing({ heating: v as typeof profile.housing.heating })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gaz">Gaz</SelectItem>
                <SelectItem value="fioul">Fioul</SelectItem>
                <SelectItem value="elec">Électricité</SelectItem>
                <SelectItem value="bois">Bois</SelectItem>
                <SelectItem value="pac">Pompe à chaleur</SelectItem>
                <SelectItem value="mixte">Mixte</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field label="Toiture exploitable (m²)">
            <NumberField
              integer
              min={0}
              value={profile.housing.roofM2}
              onValueChange={(roofM2) => patchHousing({ roofM2 })}
            />
          </Field>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Intentions</p>
          <div className="flex flex-wrap gap-2">
            {GOALS.map((g) => {
              const on = profile.goals.includes(g.id);
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => toggleGoal(g.id)}
                  className="rounded-full"
                >
                  <Badge variant={on ? "default" : "outline"}>{g.label}</Badge>
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Déjà en place</p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {ANIMALS.map((a) => (
              <label key={a.id} className="flex min-h-10 items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="size-4 shrink-0 rounded-sm border border-input accent-primary"
                  checked={hydrated && profile.animalsPresent.includes(a.id)}
                  onChange={() => toggleAnimal(a.id)}
                />
                {a.name}
              </label>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={() => patch({ completed: true })}>Enregistrer le foyer</Button>
          <Progress value={profile.completed ? 100 : 55} className="max-w-xs" />
        </div>
      </CardContent>
    </Card>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <Label>{label}</Label>
      {children}
    </div>
  );
}
