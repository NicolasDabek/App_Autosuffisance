import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Disclaimer } from "@/components/disclaimer";
import { PageHeader } from "@/components/page-header";
import { NumberField } from "@/components/number-field";
import { Label } from "@/components/ui/label";
import { CALENDAR } from "@/data/calendar";
import type { ClimateId } from "@/data/types";
import { MONTH_LABELS, currentMonthIndex } from "@/lib/format";
import { useHavre } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/calendrier")({ component: CalPage });

const PILLAR: Record<string, string> = {
  nourrir: "Nourrir",
  recycler: "Recycler",
  habitat: "Habitat",
  savoir: "Savoir",
};

/** Décalage saisonnier indicatif (jours) par rapport à un jardin semi-océanique de plaine (~100 m). */
const CLIMATE_SHIFT: Record<ClimateId, number> = {
  oceanique: -3,
  "semi-oceanique": 0,
  continental: 7,
  mediterraneen: -14,
  montagne: 0,
  "atlantique-sud": -7,
};

function seasonShiftDays(climate: ClimateId, altitudeM: number) {
  // En montagne sans altitude renseignée, on suppose un jardin vers 900 m.
  const a = climate === "montagne" && (altitudeM ?? 0) < 500 ? 900 : (altitudeM ?? 100);
  const alt = Math.max(0, a - 100);
  return (CLIMATE_SHIFT[climate] ?? 0) + (alt / 100) * 3.5;
}

function CalPage() {
  const [month, setMonth] = useState(currentMonthIndex());
  const tasks = CALENDAR.filter((t) => t.month === month);
  const year = new Date().getFullYear();
  const doneTasks = useHavre((s) => s.doneTasks) ?? [];
  const toggle = useHavre((s) => s.toggleTask);
  const hydrated = useHavre((s) => s.hydrated);
  const doneCount = hydrated
    ? tasks.filter((t) => doneTasks.includes(`${year}-${month}-${t.title}`)).length
    : 0;
  const profile = useHavre((s) => s.profile);
  const patch = useHavre((s) => s.patchProfile);
  const shift = seasonShiftDays(profile.climate, profile.altitudeM);

  return (
    <div>
      <PageHeader
        kicker="Savoir"
        title="Calendrier"
        description="Un almanach unique : potager, verger, animaux, cueillette, bois, déclarations. Cochez ce qui est fait : ça reste dans ce navigateur, pour l’année en cours."
      />
      <div className="mb-6 flex flex-wrap items-end gap-4 rounded-xl bg-card p-4 shadow-[var(--shadow-border)]">
        <div className="grid w-36 gap-1.5">
          <Label htmlFor="alt">Altitude du jardin (m)</Label>
          <NumberField
            id="alt"
            integer
            min={0}
            max={2500}
            value={profile.altitudeM}
            onValueChange={(altitudeM) => patch({ altitudeM })}
          />
        </div>
        <p className="max-w-xl text-sm text-muted-foreground">
          {Math.abs(shift) < 4
            ? "Calendrier utilisable tel quel pour votre climat."
            : shift > 0
              ? `Printemps ~${Math.round(shift)} jours plus tard que le calendrier de référence (climat + altitude) : décalez semis et plantations, avancez les rentrées d’automne d’autant.`
              : `Printemps ~${Math.round(-shift)} jours plus tôt que la référence : semis possibles plus tôt, mais surveillez la sécheresse d’été.`}{" "}
          Repère : ~3–4 jours de retard par 100 m d’altitude.
        </p>
      </div>
      <div className="mb-6 grid grid-cols-3 gap-1.5 sm:grid-cols-6 lg:grid-cols-12">
        {MONTH_LABELS.map((m, i) => (
          <button
            key={m}
            type="button"
            onClick={() => setMonth(i)}
            className={cn(
              "h-11 rounded-lg text-xs capitalize sm:text-sm",
              i === month ? "bg-primary text-primary-foreground" : "bg-card shadow-[var(--shadow-border)]",
            )}
          >
            {m.slice(0, 3)}
          </button>
        ))}
      </div>
      <p className="mb-4 font-display text-2xl capitalize">
        {MONTH_LABELS[month]}
        <span className="ml-3 text-base font-normal text-muted-foreground">
          {doneCount}/{tasks.length} faits
        </span>
      </p>
      <ol className="flex flex-col gap-3">
        {tasks.map((t) => {
          const key = `${year}-${month}-${t.title}`;
          const done = hydrated && doneTasks.includes(key);
          return (
            <li key={t.title} className="rounded-xl bg-card p-4 shadow-[var(--shadow-border)]">
              <div className="flex items-start gap-3">
                <label className="mt-0.5 flex min-h-10 min-w-10 items-start">
                  <input
                    type="checkbox"
                    className="mt-1 size-4 shrink-0 rounded-sm border border-input accent-primary"
                    checked={done}
                    onChange={() => toggle(key)}
                    aria-label={`Marquer « ${t.title} » comme fait`}
                  />
                </label>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-primary">{PILLAR[t.pillar]}</p>
                  <p className={cn("mt-1 font-medium", done && "text-muted-foreground line-through")}>{t.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.detail}</p>
                  {t.href ? (
                    <Link to={t.href} className="mt-2 inline-block text-sm text-primary underline-offset-2 hover:underline">
                      Ouvrir le module
                    </Link>
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
      <Disclaimer />
    </div>
  );
}
