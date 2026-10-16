import { Advanced, Field, Group, Hero, Kpi, KpiGrid, Note, Segmented, Stepper, StickyResult } from "@/components/havre";
import { NumberField } from "@/components/number-field";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AGE_FACTOR, BREEDS, flockStats } from "@/lib/calculators";
import { frEuro, frNumber } from "@/lib/format";
import { defaultPrefs, useHavre, usePref } from "@/lib/store";

type Breed = keyof typeof BREEDS;
type Age = keyof typeof AGE_FACTOR;

function Suffix({ children }: { children: string }) {
  return <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">{children}</span>;
}

/** Calculateur de poulailler : résultats d’abord, réglages groupés, mode avancé repliable. */
export function FlockCalculator() {
  const profile = useHavre((s) => s.profile);
  const hydrated = useHavre((s) => s.hydrated);
  const patchPrefs = useHavre((s) => s.patchPrefs);
  const [hens, setHens] = usePref("hens");
  const [breed, setBreed] = usePref("breed");
  const [age, setAge] = usePref("layAge");
  const [moultWeeks, setMoultWeeks] = usePref("moultWeeks");
  const [rangePct, setRangePct] = usePref("rangePct");
  const [feedEur, setFeedEur] = usePref("feedEur");
  const [eggsPerAdultWeek, setEggsPerAdultWeek] = usePref("eggsPerAdultWeek");
  const f = flockStats(profile, hydrated ? profile.prefs : defaultPrefs);
  const coverText = frNumber(Math.min(999, f.cover), 0);

  return (
    <div>
      <Hero label="Besoins en œufs couverts" value={coverText} unit="%" pct={f.cover}>
        <p>
          <b>~{frNumber(f.eggsYear, 0)} œufs/an</b> pour {frNumber(f.need, 0)} consommés — soit ≈{" "}
          {frNumber(f.eggsYear / 52, 0)} par semaine en moyenne, bien plus au printemps.
        </p>
      </Hero>
      <KpiGrid>
        <Kpi label="Aliment acheté" value={frNumber(f.feedKg, 0)} unit="kg/an" note={`≈ ${frEuro(f.feedCost)} / an`} />
        <Kpi
          label="Coût / douzaine"
          value={f.eggsYear > 0 ? frNumber(f.costPerDozen, 2) : "—"}
          unit="€"
          note="hors litière, soins"
        />
      </KpiGrid>
      {f.hensNeeded > 0 && f.hensNeeded !== hens ? (
        <Note tone={f.hensNeeded < hens ? "ok" : "warn"} icon="💡">
          <b>
            {f.hensNeeded} poule{f.hensNeeded > 1 ? "s" : ""} {f.hensNeeded < hens ? "suffiraient" : "seraient nécessaires"}
          </b>{" "}
          pour couvrir vos besoins (≈ {frNumber(f.coverWithNeeded, 0)} %).
        </Note>
      ) : null}
      {f.surplus > 0 ? (
        <Note tone="info" icon="🥚">
          Surplus ≈ {frNumber(f.surplus, 0)} œufs/an : à congeler battus ou transformer (pas de vente sans déclaration).
        </Note>
      ) : null}

      <section className="mt-3.5 rounded-2xl border border-border bg-card p-4">
        <h2 className="text-[22px] font-bold">Paramètres</h2>
        <Group title="Le troupeau" first>
          <Field label="Nombre de poules">
            <Stepper label="Nombre de poules" value={hens} onChange={setHens} min={1} max={50} />
          </Field>
          <Field label="Type de poule">
            <Select value={breed} onValueChange={(v) => setBreed(v as Breed)}>
              <SelectTrigger >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {(Object.keys(BREEDS) as Breed[]).map((b) => (
                  <SelectItem key={b} value={b}>
                    {BREEDS[b].label} · ~{BREEDS[b].eggs}/an
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </Group>
        <Group title="Le foyer">
          <Field label="Œufs mangés par adulte" hint={`Foyer : ${frNumber(f.hh.adultEq, 1)} équivalent adulte (enfant ≈ 0,6).`}>
            <Stepper
              label="Œufs mangés par adulte"
              value={eggsPerAdultWeek}
              onChange={setEggsPerAdultWeek}
              min={0}
              max={21}
              suffix="/ semaine"
            />
          </Field>
        </Group>
        <Advanced count={4}>
          <Field label="Âge (saison de ponte)" hint="100 % · 82 % · 68 % · 55 % de ponte">
            <Segmented<Age>
              label="Âge (saison de ponte)"
              value={age}
              onChange={setAge}
              options={[
                ["1", "1re année"],
                ["2", "2e"],
                ["3", "3e"],
                ["4", "4e +"],
              ]}
            />
          </Field>
          <Field label="Arrêt mue + hiver">
            <div className="relative">
              <NumberField integer min={0} max={26} emptyValue={8} value={moultWeeks} onValueChange={setMoultWeeks} className="pr-24" aria-label="Arrêt mue + hiver, en semaines" />
              <Suffix>semaines</Suffix>
            </div>
          </Field>
          <Field label="Ration trouvée (parcours, restes)">
            <div className="relative">
              <NumberField integer min={0} max={60} value={rangePct} onValueChange={setRangePct} className="pr-12" aria-label="Ration trouvée, en %" />
              <Suffix>%</Suffix>
            </div>
          </Field>
          <Field label="Prix de l’aliment" hint="Sac de 25 kg en jardinerie : à diviser par 25.">
            <div className="relative">
              <NumberField min={0} max={5} value={feedEur} onValueChange={setFeedEur} className="pr-16" aria-label="Prix de l’aliment, en €/kg" />
              <Suffix>€/kg</Suffix>
            </div>
          </Field>
          <button
            type="button"
            className="mt-3 text-[15px] font-semibold text-moss-dark underline"
            onClick={() =>
              patchPrefs({
                hens: defaultPrefs.hens,
                breed: defaultPrefs.breed,
                layAge: defaultPrefs.layAge,
                moultWeeks: defaultPrefs.moultWeeks,
                rangePct: defaultPrefs.rangePct,
                feedEur: defaultPrefs.feedEur,
                eggsPerAdultWeek: defaultPrefs.eggsPerAdultWeek,
              })
            }
          >
            Rétablir les valeurs par défaut
          </button>
        </Advanced>
      </section>
      <StickyResult left={`🥚 ${frNumber(f.eggsYear, 0)} œufs/an · ${coverText} %`} right={`${frNumber(f.feedCost, 0)} €/an`} />
    </div>
  );
}
