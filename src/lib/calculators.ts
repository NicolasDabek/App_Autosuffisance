import { CHAINS } from "@/data/chains";
import { climateById } from "@/data/climate";
import { pvYield } from "@/data/energy";
import type { AppPath, FoodChain } from "@/data/types";
import { WASTE_METHODS } from "@/data/waste";
import type { LogEntry, NoiseTol, Profile } from "./store";

const NOISE_MAP: Record<NoiseTol, 1 | 2 | 3> = { faible: 1, moyen: 2, eleve: 3 };

export type RankedChain = {
  chain: FoodChain;
  score: number;
  reasons: string[];
  blockers: string[];
  compatible: boolean;
};

export function rankChains(profile: Profile): RankedChain[] {
  const noiseTol = NOISE_MAP[profile.noiseTolerance];
  return CHAINS.map((chain) => {
    let score = 62;
    const reasons: string[] = [];
    const blockers: string[] = [];

    if (profile.surfaceM2 < chain.minSurfaceM2) {
      score -= 38;
      blockers.push(`Il faut environ ${chain.minSurfaceM2} m², vous en déclarez ${profile.surfaceM2}.`);
    } else if (profile.surfaceM2 < chain.recommendedSurfaceM2) {
      score -= 8;
      reasons.push("Surface un peu juste : viser la version compacte.");
    } else {
      score += 10;
      reasons.push("Surface compatible.");
    }

    if (profile.budgetEur < chain.setupEur[0]) {
      score -= 18;
      blockers.push("Budget d’installation inférieur au plancher du scénario.");
    } else if (profile.budgetEur < chain.setupEur[1]) {
      score -= 4;
      reasons.push("Budget dans la fourchette basse.");
    } else {
      score += 6;
    }

    if (profile.hoursPerWeek + 0.4 < chain.hoursPerWeek) {
      score -= 14;
      reasons.push(`Temps : le scénario demande ~${chain.hoursPerWeek} h/sem.`);
    } else {
      score += 4;
    }

    if (!chain.settings.includes(profile.setting)) {
      score -= 22;
      blockers.push(`Cadre ${profile.setting} peu adapté à ce scénario.`);
    }

    if (chain.climates !== "all" && !chain.climates.includes(profile.climate)) {
      score -= 16;
      blockers.push("Climat peu favorable.");
    }

    if (chain.noise > noiseTol) {
      score -= 16;
      reasons.push("Nuisances (bruit) au-dessus de votre tolérance.");
    }

    const overlap = chain.animalIds.filter((id) => profile.animalsPresent.includes(id));
    if (overlap.length) {
      score += 12;
      reasons.push("S’appuie sur un élevage déjà présent.");
    }

    if (chain.beginner) score += 5;
    if (profile.activeChainIds.includes(chain.id)) score += 6;

    const clamped = Math.max(0, Math.min(100, score));
    return {
      chain,
      score: clamped,
      reasons,
      blockers,
      compatible: blockers.length === 0 && clamped >= 42,
    };
  }).sort((a, b) => b.score - a.score);
}

export function yearLogs(logs: LogEntry[], year = new Date().getFullYear()) {
  return logs.filter((l) => l.date.startsWith(String(year)));
}

const KCAL_FALLBACK: Record<string, number> = {
  recolte: 400,
  oeufs: 70,
  viande: 1800,
  miel: 3000,
  cueillette: 350,
};

export function foodAutonomy(profile: Profile, logs: LogEntry[]) {
  const need = profile.people * 2500 * 365;
  const produced = yearLogs(logs).reduce((acc, l) => {
    if (!["recolte", "oeufs", "viande", "miel", "cueillette"].includes(l.kind)) return acc;
    return acc + (l.kcal ?? l.qty * (KCAL_FALLBACK[l.kind] ?? 0));
  }, 0);
  return { need, produced, pct: need ? Math.min(100, (produced / need) * 100) : 0 };
}

export function wasteStats(profile: Profile, logs: LogEntry[], methodId: string) {
  const method = WASTE_METHODS.find((m) => m.id === methodId) ?? WASTE_METHODS[0];
  const weekly = profile.wasteKgWeek;
  const kgYearIn = weekly * 52;
  const kgOut = kgYearIn * method.conversion;
  const logged = yearLogs(logs)
    .filter((l) => l.kind === "compost")
    .reduce((a, l) => a + l.qty, 0);
  return { method, kgYearIn, kgOut, logged, fertilizerSaveEur: kgOut * 0.35 };
}

export function energyStats(profile: Profile) {
  const climate = climateById(profile.climate);
  const steres = profile.housing.kwhHeatYear / 1750;
  const pv = pvYield(profile.housing.roofM2, climate.pvKwhPerKwc);
  const elecCov = profile.housing.kwhElecYear
    ? Math.min(100, ((pv.kwh * 0.35) / profile.housing.kwhElecYear) * 100)
    : 0;
  return { climate, steres, pv, elecCov };
}

export function nextActions(profile: Profile, stocks: Record<string, number> = {}, planCount = 0) {
  const actions: { title: string; href: AppPath; why: string }[] = [];
  if (!profile.completed) {
    actions.push({
      title: "Calibrer le foyer",
      href: "/",
      why: "Sans surface, climat et temps, les scénarios restent génériques.",
    });
  }
  if (profile.activeChainIds.length === 0) {
    actions.push({
      title: "Choisir une première chaîne",
      href: "/chaines",
      why: "Une boucle poules–compost–potager suffit souvent à démarrer.",
    });
  }
  if (planCount === 0 && profile.gardenM2 >= 8) {
    actions.push({
      title: "Dessiner le plan de semis",
      href: "/semis",
      why: "Répartir les m² par famille avant de commander trois fois trop de tomates.",
    });
  }
  const month = new Date().getMonth();
  if (month >= 6 && month <= 10) {
    actions.push({
      title: "Peser la récolte avant les bocaux",
      href: "/atelier",
      why: "Sel, sucre et nombre de bocaux se calculent au kilo, pas à l’œil.",
    });
  }
  if (!profile.animalsPresent.includes("lombrics") && profile.setting === "urbain") {
    actions.push({
      title: "Ouvrir un lombricomposteur",
      href: "/dechets",
      why: "C’est la boucle légale la plus simple en ville.",
    });
  }
  if (profile.housing.insulation === "faible") {
    actions.push({
      title: "Isoler avant de changer de chauffage",
      href: "/energie",
      why: "Un poêle trop gros dans une passoire est un piège.",
    });
  }
  if (profile.gardenM2 >= 20 && profile.activeChainIds.length) {
    actions.push({
      title: "Planifier les apports du mois",
      href: "/calendrier",
      why: "Le calendrier relie potager, élevage, cueillette et bois.",
    });
  }
  if (profile.gardenM2 >= 15 || profile.goals.includes("conserves")) {
    actions.push({
      title: "Transformer plutôt que jeter",
      href: "/conservation",
      why: "Bocaux, lacto et cave font durer juillet jusqu’en janvier.",
    });
  }
  if (profile.gardenM2 >= 20) {
    actions.push({
      title: "Lire le sol avant le compost du commerce",
      href: "/sol",
      why: "Texture, couverts et filets valent plus qu’un sac d’engrais.",
    });
  }
  if (!Object.values(stocks).some((n) => n > 0)) {
    actions.push({
      title: "Compter ce qui est déjà en cave",
      href: "/garde",
      why: "Bocaux, pommes de terre et sachets se mesurent avant l’hiver.",
    });
  }
  return actions.slice(0, 5);
}
