import { CHAINS } from "@/data/chains";
import { climateById } from "@/data/climate";
import { pvYield } from "@/data/energy";
import type { AppPath, ClimateId, FoodChain } from "@/data/types";
import { WASTE_METHODS } from "@/data/waste";
import type {
  Activity,
  Diet,
  LogEntry,
  NoiseTol,
  Orientation,
  Profile,
  RoofMaterial,
  Skill,
  SoilId,
  WoodKind,
} from "./store";

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

/** Besoins indicatifs (ANSES / EFSA, ordres de grandeur adultes 18–60 ans, moyenne femmes/hommes). */
const ADULT_KCAL: Record<Activity, number> = { sedentaire: 2000, moderee: 2300, active: 2700 };
const CHILD_KCAL = 1600;
/** Légumes, fruits et pommes de terre consommés par adulte et par an, selon le régime (kg). */
const PRODUCE_KG_ADULT: Record<Diet, number> = { omnivore: 170, flexitarien: 200, vegetarien: 230, vegan: 260 };

export function household(profile: Profile) {
  const people = Math.max(1, profile.people);
  const children = Math.min(Math.max(0, profile.children ?? 0), people);
  const adults = people - children;
  /** Équivalent adulte : un enfant compte ~0,6. */
  const adultEq = adults + children * 0.6;
  const kcalDay = adults * ADULT_KCAL[profile.activity ?? "moderee"] + children * CHILD_KCAL;
  return { people, adults, children, adultEq, kcalDay };
}

export function foodAutonomy(profile: Profile, logs: LogEntry[]) {
  const need = household(profile).kcalDay * 365;
  const raw = yearLogs(logs).reduce((acc, l) => {
    if (!["recolte", "oeufs", "viande", "miel", "cueillette"].includes(l.kind)) return acc;
    return acc + (l.kcal ?? l.qty * (KCAL_FALLBACK[l.kind] ?? 0));
  }, 0);
  const loss = Math.min(90, Math.max(0, profile.storageLossPct ?? 0)) / 100;
  const produced = raw * (1 - loss);
  return { need, produced, raw, pct: need ? Math.min(100, (produced / need) * 100) : 0 };
}

const CLIMATE_YIELD: Record<ClimateId, number> = {
  oceanique: 1,
  "semi-oceanique": 1,
  continental: 0.95,
  mediterraneen: 0.9,
  montagne: 0.75,
  "atlantique-sud": 1.05,
};
const SOIL_YIELD: Record<SoilId, number> = {
  limoneux: 1.1,
  humifere: 1.1,
  argileux: 0.95,
  sableux: 0.85,
  calcaire: 0.85,
};
const SKILL_YIELD: Record<Skill, number> = { debutant: 0.7, intermediaire: 1, confirme: 1.3 };

/** Récolte potagère estimée : base 2,2 kg/m² modulée par climat, sol, savoir-faire, arrosage et pertes. */
export function gardenYield(profile: Profile) {
  const base = 2.2;
  const climate = CLIMATE_YIELD[profile.climate] ?? 1;
  const soil = SOIL_YIELD[profile.soil ?? "limoneux"] ?? 1;
  const skill = SKILL_YIELD[profile.skill ?? "debutant"] ?? 1;
  const dry = profile.climate === "mediterraneen" ? 0.6 : 0.85;
  const water = profile.irrigation === false ? dry : 1;
  const kgM2 = base * climate * soil * skill * water;
  const gross = kgM2 * profile.gardenM2;
  const loss = Math.min(90, Math.max(0, profile.storageLossPct ?? 0)) / 100;
  const net = gross * (1 - loss);
  const hh = household(profile);
  const needKg = PRODUCE_KG_ADULT[profile.diet ?? "omnivore"] * hh.adultEq;
  const coverPct = needKg ? Math.min(100, (net / needKg) * 100) : 0;
  const m2ForFull = kgM2 > 0 ? needKg / (kgM2 * (1 - loss)) : 0;
  return { kgM2, gross, net, needKg, coverPct, m2ForFull, factors: { climate, soil, skill, water } };
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

/** Rendement du chauffage actuel (énergie utile / énergie consommée). */
const HEATING_EFF: Record<Profile["housing"]["heating"], number> = {
  gaz: 0.9,
  fioul: 0.85,
  elec: 1,
  bois: 0.7,
  pac: 3,
  mixte: 0.9,
};
/** kWh PCI par stère à 20 % d’humidité (ordres de grandeur ADEME / interprofession). */
const WOOD_KWH_STERE: Record<WoodKind, number> = {
  "feuillus-durs": 2000,
  "feuillus-tendres": 1700,
  resineux: 1500,
};
const ORIENTATION_FACTOR: Record<Orientation, number> = {
  sud: 1,
  "sud-est-ouest": 0.95,
  "est-ouest": 0.85,
  nord: 0.6,
};
const ROOF_COEF: Record<RoofMaterial, number> = {
  tuiles: 0.9,
  ardoise: 0.9,
  metal: 0.95,
  "plat-gravier": 0.6,
  vegetalise: 0.3,
};

/**
 * Énergie utile relative selon l’humidité du bois (base 20 %) : PCI en baisse
 * et combustion dégradée (eau à évaporer, foyer plus froid). Ordre de grandeur.
 */
export function moistureFactor(pct: number) {
  const h = Math.min(60, Math.max(10, pct));
  const pci = (x: number) => 5.2 * (1 - x) - 0.68 * x;
  return Math.max(0, pci(h / 100) / pci(0.2));
}

export function energyStats(profile: Profile) {
  const climate = climateById(profile.climate);
  const h = { ...profile.housing };
  const usefulHeat = h.kwhHeatYear * (HEATING_EFF[h.heating] ?? 0.9);
  const kwhPerStere = (WOOD_KWH_STERE[h.woodKind] ?? 2000) * moistureFactor(h.woodMoisturePct ?? 20);
  const stoveEff = Math.min(95, Math.max(30, h.stoveEffPct ?? 75)) / 100;
  const steres = kwhPerStere > 0 ? usefulHeat / (kwhPerStere * stoveEff) : 0;
  const base = pvYield(h.roofM2, climate.pvKwhPerKwc);
  const pv = { kwc: base.kwc, kwh: base.kwh * (ORIENTATION_FACTOR[h.pvOrientation] ?? 1) };
  const sc = Math.min(100, Math.max(0, h.selfConsumptionPct ?? 35)) / 100;
  const elecCov = h.kwhElecYear ? Math.min(100, ((pv.kwh * sc) / h.kwhElecYear) * 100) : 0;
  return { climate, steres, pv, elecCov, usefulHeat, kwhPerStere };
}

export function roofCoefficient(material: RoofMaterial) {
  return ROOF_COEF[material] ?? 0.9;
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
