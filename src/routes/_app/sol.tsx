import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Disclaimer } from "@/components/disclaimer";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AMENDMENTS, AUXILIARIES, COVER_CROPS, PESTS, SOIL_TYPES } from "@/data/soil";
import { MONTH_LABELS, currentMonthIndex } from "@/lib/format";

export const Route = createFileRoute("/_app/sol")({ component: SolPage });

const SECTIONS = [
  { id: "textures", label: "Textures" },
  { id: "amendements", label: "Amendements" },
  { id: "couverts", label: "Engrais verts" },
  { id: "ravageurs", label: "Ravageurs" },
  { id: "auxiliaires", label: "Auxiliaires" },
] as const;

function SolPage() {
  const [section, setSection] = useState<(typeof SECTIONS)[number]["id"]>("textures");
  const month = currentMonthIndex();
  const coversNow = COVER_CROPS.filter((c) => c.monthsSow.includes(month));
  const pestCrops = useMemo(() => [...new Set(PESTS.flatMap((p) => p.crops))].sort(), []);
  const [crop, setCrop] = useState("all");
  const pests = crop === "all" ? PESTS : PESTS.filter((p) => p.crops.includes(crop));

  return (
    <div>
      <PageHeader
        kicker="Nourrir"
        title="Sol, semences, auxiliaires"
        description="Avant d’acheter un sac, lire la terre. Texture, pH, couverts, et qui mange qui. Le compost vient des Déchets ; les doses gourmandes, du Potager."
      />

      <div className="mb-6 flex flex-wrap gap-3 text-sm">
        <Link to="/potager" className="text-primary underline-offset-2 hover:underline">
          Potager
        </Link>
        <Link to="/dechets" className="text-primary underline-offset-2 hover:underline">
          Déchets → sol
        </Link>
        <Link to="/verger" className="text-primary underline-offset-2 hover:underline">
          Verger
        </Link>
        <Link to="/legal" className="text-primary underline-offset-2 hover:underline">
          Semences & pesticides
        </Link>
      </div>

      {coversNow.length ? (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">À semer ce mois-ci · {MONTH_LABELS[month]}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {coversNow.map((c) => (
              <Badge key={c.id} variant="secondary">
                {c.name}
              </Badge>
            ))}
          </CardContent>
        </Card>
      ) : null}

      <div className="mb-6 flex flex-wrap gap-1.5">
        {SECTIONS.map((s) => (
          <button key={s.id} type="button" onClick={() => setSection(s.id)}>
            <Badge variant={section === s.id ? "default" : "outline"}>{s.label}</Badge>
          </button>
        ))}
      </div>

      {section === "textures" ? (
        <ul className="grid gap-4 lg:grid-cols-2">
          {SOIL_TYPES.map((t) => (
            <li key={t.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{t.name}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Toucher.</span> {t.feel}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Eau.</span> {t.water}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Travail.</span> {t.work}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Cultures.</span> {t.crops}
                  </p>
                  <ul className="list-disc pl-4">
                    {t.amends.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      ) : null}

      {section === "amendements" ? (
        <ul className="grid gap-4 lg:grid-cols-2">
          {AMENDMENTS.map((a) => (
            <li key={a.id} id={a.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{a.name}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2 text-sm text-muted-foreground">
                  <p className="text-foreground">{a.npk}</p>
                  <p>{a.use}</p>
                  <p>
                    <span className="font-medium text-foreground">Dose.</span> {a.dose}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Attention.</span> {a.caution}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      ) : null}

      {section === "couverts" ? (
        <ul className="grid gap-4 lg:grid-cols-2">
          {COVER_CROPS.map((c) => (
            <li key={c.id} id={c.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{c.name}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2 text-sm text-muted-foreground">
                  <p className="text-foreground">{c.role}</p>
                  <p>
                    Semis : {c.monthsSow.map((m) => MONTH_LABELS[m]).join(", ")}
                  </p>
                  <p>{c.notes}</p>
                  <p>
                    <span className="font-medium text-foreground">Destruction.</span> {c.destroy}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      ) : null}

      {section === "ravageurs" ? (
        <div>
          <div className="mb-4 flex flex-wrap gap-1.5">
            <button type="button" onClick={() => setCrop("all")}>
              <Badge variant={crop === "all" ? "secondary" : "outline"}>Toutes cultures</Badge>
            </button>
            {pestCrops.map((c) => (
              <button key={c} type="button" onClick={() => setCrop(c)}>
                <Badge variant={crop === c ? "secondary" : "outline"}>{c}</Badge>
              </button>
            ))}
          </div>
          <ul className="grid gap-4">
            {pests.map((p) => (
              <li key={p.id} id={p.id}>
                <Card>
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <CardTitle>{p.name}</CardTitle>
                      <div className="flex flex-wrap gap-1">
                        {p.crops.map((c) => (
                          <Badge key={c} variant="muted">
                            {c}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">Signes.</span> {p.signs}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Prévenir.</span> {p.prevention}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Intervenir.</span> {p.intervention}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Cadre.</span> {p.legal}
                    </p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {section === "auxiliaires" ? (
        <ul className="grid gap-4 sm:grid-cols-2">
          {AUXILIARIES.map((a) => (
            <li key={a.id} id={a.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{a.name}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2 text-sm text-muted-foreground">
                  <p className="text-foreground">{a.role}</p>
                  <p>
                    <span className="font-medium text-foreground">Habitat.</span> {a.habitat}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Plantes.</span> {a.plants}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      ) : null}

      <Disclaimer />
    </div>
  );
}
