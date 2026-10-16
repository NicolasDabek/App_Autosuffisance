import { createFileRoute, Link } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";
import { Disclaimer } from "@/components/disclaimer";
import { Chip, Hero, Kpi, KpiGrid, ListRow, Note, type Tone } from "@/components/havre";
import { NumberField } from "@/components/number-field";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ANIMALS } from "@/data/animals";
import { CALENDAR } from "@/data/calendar";
import { CHAINS } from "@/data/chains";
import { CLIMATES } from "@/data/climate";
import type { CalendarTask } from "@/data/types";
import { RAIN_MM, rainCollectable } from "@/data/water";
import {
  energyStats,
  flockStats,
  foodAutonomy,
  gardenYield,
  household,
  nextActions,
  rankChains,
  roofCoefficient,
  wasteStats,
} from "@/lib/calculators";
import { currentMonthIndex, frNumber, monthLabel } from "@/lib/format";
import { type Profile, useHavre } from "@/lib/store";

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
  const garden = gardenYield(profile);
  const ranked = rankChains(profile);
  const best = ranked.find((r) => r.compatible);
  const tasks = CALENDAR.filter((t) => t.month === month);
  const stocks = useHavre((s) => s.stocks) ?? {};
  const planIds = useHavre((s) => s.planIds) ?? [];
  const actions = nextActions(profile, stocks, planIds.length);

  const flock = flockStats(profile);
  const hasHens = profile.animalsPresent.includes("poules");
  const rainM3 =
    (rainCollectable(profile.housing.roofM2, RAIN_MM[profile.climate] ?? 700, roofCoefficient(profile.housing.roofMaterial) * 0.8)) /
    1000;
  const year = new Date().getFullYear();
  const doneTasks = useHavre((s) => s.doneTasks) ?? [];
  const hydrated = useHavre((s) => s.hydrated);
  const toggleTask = useHavre((s) => s.toggleTask);
  const [editing, setEditing] = useState(false);
  const hh = household(profile);
  const climateName = energy.climate.name;

  return (
    <div>
      <PageHeader
        kicker={`${monthLabel(month)} · semaine ${weekNum()}`}
        title={profile.completed ? "Bonjour" : "Installer le foyer"}
        description={
          profile.completed
            ? `Foyer de ${hh.adults} adulte${hh.adults > 1 ? "s" : ""}${hh.children ? ` et ${hh.children} enfant${hh.children > 1 ? "s" : ""}` : ""} · ${profile.gardenM2} m² cultivables · ${climateName.toLowerCase()}`
            : "Trois étapes — foyer, terrain, logement — suffisent à relier toutes les pages de l’almanach."
        }
      />

      {!profile.completed || editing ? <Onboarding onDone={editing ? () => setEditing(false) : undefined} /> : null}

      <Hero label="Autonomie alimentaire potentielle" value={frNumber(garden.coverPct, 0)} unit="% des légumes" pct={garden.coverPct}>
        <div className="flex flex-wrap justify-between gap-2 text-sm">
          <span>
            ~{frNumber(garden.net, 0)} kg / {frNumber(garden.needKg, 0)} kg
          </span>
          <span>Objectif : {frNumber(garden.m2ForFull, 0)} m²</span>
        </div>
        {food.produced ? (
          <p className="mt-1 text-sm opacity-90">
            Journalisé cette année : {frNumber(food.pct, 0)} % des calories du foyer.
          </p>
        ) : null}
      </Hero>

      <KpiGrid>
        <Link to="/elevage/$id" params={{ id: "poules" }} className="contents">
          <Kpi
            label="🥚 Œufs"
            value={hasHens ? frNumber(Math.min(999, flock.cover), 0) : "—"}
            unit={hasHens ? "%" : undefined}
            note={hasHens ? `${flock.hens} poules · ${flock.surplus > 0 ? "surplus" : "besoins"}` : "Pas de poules déclarées"}
          />
        </Link>
        <Kpi label="♻ Biodéchets valorisés" value={frNumber(waste.kgYearIn, 0)} unit="kg" note={`≈ ${frNumber(waste.kgOut, 0)} kg d’amendement`} />
        <Kpi
          label="🔥 Bois si 100 % chaleur"
          value={frNumber(energy.steres, 1)}
          unit="stères"
          note={`poêle ${profile.housing.stoveEffPct} % · isolation ${profile.housing.insulation}`}
        />
        <Kpi label="💧 Pluie récupérable" value={`≈ ${frNumber(rainM3, 0)}`} unit="m³/an" note={`${profile.housing.roofM2} m² de toiture`} />
      </KpiGrid>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-[22px] font-bold">Ce mois-ci</h2>
              <Chip>
                {tasks.length} tâche{tasks.length > 1 ? "s" : ""}
              </Chip>
            </div>
            <div className="mt-1.5">
              {tasks.slice(0, 5).map((t) => {
                const key = `${year}-${month}-${t.title}`;
                const done = hydrated && doneTasks.includes(key);
                const tone = TASK_TONE[t.pillar];
                return (
                  <ListRow
                    key={t.title}
                    icon={TASK_ICON[t.pillar]}
                    tone={tone}
                    title={<span className={done ? "line-through opacity-60" : undefined}>{t.title}</span>}
                    sub={PILLAR_LABEL[t.pillar]}
                    right={
                      <button
                        type="button"
                        onClick={() => toggleTask(key)}
                        aria-pressed={done}
                        className="rounded-full"
                        aria-label={done ? `Marquer « ${t.title} » à faire` : `Marquer « ${t.title} » fait`}
                      >
                        <Chip tone={done ? "moss" : tone}>{done ? "✓ fait" : "à faire"}</Chip>
                      </button>
                    }
                  />
                );
              })}
            </div>
            <Button asChild variant="outline" className="mt-3 w-full">
              <Link to="/calendrier">Calendrier complet</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-[22px] font-bold">Prochaines actions</h2>
            <p className="text-[15px] text-muted-foreground">Calculées à partir du profil.</p>
            <div className="mt-1.5">
              {actions.map((a) => (
                <ListRow key={a.title} icon="→" title={a.title} sub={a.why} to={a.href} />
              ))}
            </div>
            {best ? (
              <Note tone="ok" icon="🌱">
                Chaîne la plus adaptée : <b>{best.chain.name}</b>.{" "}
                <Link to="/chaines" search={{}} className="underline">
                  Voir le simulateur
                </Link>
              </Note>
            ) : null}
          </CardContent>
        </Card>
      </div>

      {profile.completed && !editing ? (
        <Card className="mt-4" id="foyer">
          <CardContent className="p-4">
            <h2 className="text-[22px] font-bold">Mon foyer</h2>
            <p className="text-[15px] text-muted-foreground">Tout reste dans ce navigateur, rien n’est envoyé.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>
                👪 {hh.adults} adulte{hh.adults > 1 ? "s" : ""}
                {hh.children ? ` · ${hh.children} enfant${hh.children > 1 ? "s" : ""}` : ""}
              </Chip>
              <Chip>🍽 {DIET_LABEL[profile.diet]}</Chip>
              <Chip>🌍 {SOIL_LABEL[profile.soil]}</Chip>
              <Chip>🌦 {climateName}</Chip>
              <Chip>
                🏠 {profile.housing.type === "maison" ? "Maison" : "Appartement"} {SETTING_LABEL[profile.setting]}
              </Chip>
              <Chip tone="water">🔥 {HEATING_LABEL[profile.housing.heating]}</Chip>
              <Chip tone="wheat">🌱 {SKILL_LABEL[profile.skill]}</Chip>
            </div>
            <Button variant="outline" className="mt-3.5 w-full" onClick={() => setEditing(true)}>
              Modifier le profil (3 étapes)
            </Button>
          </CardContent>
        </Card>
      ) : null}

      <Card className="mt-4">
        <CardContent className="p-4">
          <h2 className="text-[22px] font-bold">Explorer</h2>
          <div className="mt-1.5">
            <ListRow icon="🥕" title="Potager & plan de semis" sub={`${frNumber(garden.coverPct, 0)} % des légumes couverts`} to="/potager" />
            <ListRow
              icon="🐓"
              tone="wheat"
              title="Élevage"
              sub={profile.animalsPresent.length ? `${profile.animalsPresent.length} espèce(s) en place` : "Aucun animal déclaré"}
              to="/elevage"
            />
            <ListRow icon="🫙" tone="terra" title="Atelier & conservation" sub="Conserves, cave, réserves" to="/atelier" />
            <ListRow icon="💧" tone="water" title="Eau & énergie" sub={`≈ ${frNumber(rainM3, 0)} m³ de pluie · ${frNumber(energy.steres, 1)} stères`} to="/eau" />
          </div>
        </CardContent>
      </Card>

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

const PILLAR_LABEL: Record<CalendarTask["pillar"], string> = {
  nourrir: "Nourrir",
  recycler: "Recycler",
  habitat: "Habitat",
  savoir: "Savoir",
};
const TASK_TONE: Record<CalendarTask["pillar"], Tone> = { nourrir: "moss", recycler: "terra", habitat: "water", savoir: "wheat" };
const TASK_ICON: Record<CalendarTask["pillar"], string> = { nourrir: "🌱", recycler: "♻", habitat: "🪵", savoir: "📖" };
const DIET_LABEL: Record<Profile["diet"], string> = {
  omnivore: "Omnivore",
  flexitarien: "Flexitarien",
  vegetarien: "Végétarien",
  vegan: "Végétalien",
};
const SOIL_LABEL: Record<Profile["soil"], string> = {
  limoneux: "Limoneux",
  argileux: "Argileux",
  sableux: "Sableux",
  calcaire: "Calcaire",
  humifere: "Humifère",
};
const SKILL_LABEL: Record<Profile["skill"], string> = {
  debutant: "Débutant",
  intermediaire: "Intermédiaire",
  confirme: "Confirmé",
};
const SETTING_LABEL: Record<Profile["setting"], string> = { urbain: "urbain", periurbain: "périurbain", rural: "rurale" };
const HEATING_LABEL: Record<Profile["housing"]["heating"], string> = {
  gaz: "Gaz",
  fioul: "Fioul",
  elec: "Électrique",
  bois: "Bois",
  pac: "Pompe à chaleur",
  mixte: "Mixte",
};

function weekNum() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  const yearStart = new Date(d.getFullYear(), 0, 1);
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

const STEPS = ["Le foyer", "Le terrain", "Logement & animaux"] as const;

function Onboarding({ onDone }: { onDone?: () => void }) {
  const [step, setStep] = useState(0);
  const profile = useHavre((s) => s.profile);
  const hydrated = useHavre((s) => s.hydrated);
  const patch = useHavre((s) => s.patchProfile);
  const patchHousing = useHavre((s) => s.patchHousing);
  const toggleAnimal = useHavre((s) => s.toggleAnimal);
  const toggleGoal = useHavre((s) => s.toggleGoal);

  return (
    <Card className="mb-8" id="foyer">
      <CardHeader>
        <CardTitle>{profile.completed ? "Modifier le profil" : "Profil du foyer"} · {STEPS[step]}</CardTitle>
        <CardDescription>
          Ces champs alimentent le simulateur de chaînes, le potager, l’énergie et le tableau de bord. Rien n’est envoyé
          sur un serveur : tout reste dans ce navigateur.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <ol className="flex gap-2" aria-label="Étapes">
          {STEPS.map((s, i) => (
            <li key={s} className="flex-1">
              <button
                type="button"
                onClick={() => setStep(i)}
                aria-current={i === step ? "step" : undefined}
                className={`w-full rounded-xl px-2 py-2 text-left text-sm font-semibold ${i === step ? "bg-moss text-white" : i < step ? "bg-moss-light text-moss-dark" : "bg-muted text-muted-foreground"}`}
              >
                <span className="block text-xs opacity-80">Étape {i + 1}/3</span>
                {s}
              </button>
            </li>
          ))}
        </ol>
        {step === 0 ? (<>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field label="Personnes au foyer">
            <NumberField
              integer
              min={1}
              emptyValue={1}
              value={profile.people}
              onValueChange={(people) => patch({ people, children: Math.min(profile.children, Math.max(0, people - 1)) })}
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
          <Field label="Dont enfants (< 12 ans)">
            <NumberField
              integer
              min={0}
              max={Math.max(0, profile.people - 1)}
              value={profile.children}
              onValueChange={(children) => patch({ children })}
            />
          </Field>
          <Field label="Activité physique">
            <Choice
              value={profile.activity}
              onChange={(activity) => patch({ activity })}
              options={[
                ["sedentaire", "Sédentaire (~2 000 kcal/j)"],
                ["moderee", "Modérée (~2 300 kcal/j)"],
                ["active", "Active / travaux (~2 700 kcal/j)"],
              ]}
            />
          </Field>
          <Field label="Régime alimentaire">
            <Choice
              value={profile.diet}
              onChange={(diet) => patch({ diet })}
              options={[
                ["omnivore", "Omnivore"],
                ["flexitarien", "Flexitarien"],
                ["vegetarien", "Végétarien"],
                ["vegan", "Végétalien"],
              ]}
            />
          </Field>
          <Field label="Pertes stockage / transfo (%)">
            <NumberField
              integer
              min={0}
              max={90}
              value={profile.storageLossPct}
              onValueChange={(storageLossPct) => patch({ storageLossPct })}
            />
          </Field>
        </div>
        </>) : null}
        {step === 1 ? (<>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field label="Sol dominant">
            <Choice
              value={profile.soil}
              onChange={(soil) => patch({ soil })}
              options={[
                ["limoneux", "Limoneux"],
                ["argileux", "Argileux"],
                ["sableux", "Sableux"],
                ["calcaire", "Calcaire / caillouteux"],
                ["humifere", "Humifère / forestier"],
              ]}
            />
          </Field>
          <Field label="Expérience au potager">
            <Choice
              value={profile.skill}
              onChange={(skill) => patch({ skill })}
              options={[
                ["debutant", "Débutant (1–2 saisons)"],
                ["intermediaire", "Intermédiaire"],
                ["confirme", "Confirmé (planches denses)"],
              ]}
            />
          </Field>
          <Field label="Arrosage d’été">
            <Choice
              value={profile.irrigation ? "oui" : "non"}
              onChange={(v) => patch({ irrigation: v === "oui" })}
              options={[
                ["oui", "Oui (cuve, réseau, goutte-à-goutte)"],
                ["non", "Non, pluie seule"],
              ]}
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
        </>) : null}
        {step === 2 ? (<>
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
        </>) : null}
        <div className="flex flex-wrap items-center gap-3">
          {step > 0 ? (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              ← Retour
            </Button>
          ) : null}
          {step < 2 ? (
            <Button onClick={() => setStep(step + 1)}>Étape suivante →</Button>
          ) : (
            <Button
              onClick={() => {
                patch({ completed: true });
                onDone?.();
              }}
            >
              Enregistrer le foyer
            </Button>
          )}
          {profile.completed && onDone ? (
            <Button variant="link" onClick={onDone}>
              Fermer
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

function Choice<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: [T, string][];
}) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as T)}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map(([id, label]) => (
          <SelectItem key={id} value={id}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
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
