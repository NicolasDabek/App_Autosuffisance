export type ClimateId =
  | "oceanique"
  | "semi-oceanique"
  | "continental"
  | "mediterraneen"
  | "montagne"
  | "atlantique-sud";

export type Setting = "urbain" | "periurbain" | "rural";

export type AppPath =
  | "/"
  | "/chaines"
  | "/elevage"
  | "/potager"
  | "/verger"
  | "/cueillette"
  | "/conservation"
  | "/garde"
  | "/semis"
  | "/atelier"
  | "/sol"
  | "/dechets"
  | "/eau"
  | "/energie"
  | "/bricolage"
  | "/calendrier"
  | "/legal"
  | "/journal";

export type LegalLevel = "simple" | "declaration" | "identification" | "complexe";

export type AnimalCategory =
  | "volaille"
  | "lagomorphe"
  | "abeille"
  | "mollusque"
  | "ruminant"
  | "porcin"
  | "insecte"
  | "poisson";

export type YieldItem = {
  label: string;
  qty: number;
  unit: string;
  kcalPerUnit?: number;
  per: string;
};

export type Animal = {
  id: string;
  name: string;
  latin?: string;
  category: AnimalCategory;
  summary: string;
  minSurfaceM2: number;
  recommendedSurfaceM2: number;
  minBudgetEur: number;
  hoursPerWeek: number;
  noise: 1 | 2 | 3;
  smell: 1 | 2 | 3;
  settings: Setting[];
  climates: ClimateId[] | "all";
  beginner: boolean;
  yields: YieldItem[];
  feed: { description: string; kgYear: number; loop: string };
  manure: { kgYear: number; use: string };
  housing: string;
  health: string[];
  legal: {
    level: LegalLevel;
    privateOk: boolean;
    declaration: string;
    slaughter: string;
    products: string;
    neighbor: string;
    sources: { label: string; href: string }[];
  };
  loops: string[];
  starter: string[];
  pitfalls: string[];
};

export type ChainNode = {
  id: string;
  label: string;
  kind: "animal" | "waste" | "plant" | "process" | "energy" | "water";
};

export type FoodChain = {
  id: string;
  name: string;
  tagline: string;
  nodes: ChainNode[];
  animalIds: string[];
  minSurfaceM2: number;
  recommendedSurfaceM2: number;
  setupEur: [number, number];
  hoursPerWeek: number;
  noise: 1 | 2 | 3;
  settings: Setting[];
  climates: ClimateId[] | "all";
  beginner: boolean;
  legalNote: string;
  loops: string[];
  yields: { label: string; detail: string }[];
  savings: string;
  steps: string[];
  risks: string[];
};

export type Crop = {
  id: string;
  name: string;
  family: string;
  season: "printemps" | "ete" | "automne" | "hiver" | "perenne";
  monthsSow: number[];
  monthsHarvest: number[];
  yieldKgM2: number;
  nNeed: "faible" | "moyen" | "fort";
  companions: string[];
  rotationGap: string;
  notes: string;
};

export type FruitTree = {
  id: string;
  name: string;
  rootstock?: string;
  climates: ClimateId[] | "all";
  chill: string;
  pollination: string;
  spacingM: number;
  yearsToFruit: number;
  yieldKg: string;
  harvestMonths: number[];
  uses: string;
  notes: string;
};

export type ForageKind = "plante" | "champignon" | "fruit" | "noix";

export type ForageSpecies = {
  id: string;
  name: string;
  latin: string;
  kind: ForageKind;
  months: number[];
  habitats: string[];
  edible: string;
  lookalikes: string;
  legal: string;
  caution: string;
  conserve: string;
};

export type WasteMethod = {
  id: string;
  name: string;
  summary: string;
  accepts: string[];
  rejects: string[];
  conversion: number;
  timeWeeks: number;
  space: string;
  npk: string;
  use: string;
};

export type EnergyScenario = {
  id: string;
  name: string;
  summary: string;
  capex: [number, number];
  yearlySavePct: number;
  autonomyHeatPct: number;
  autonomyElecPct: number;
  complexity: 1 | 2 | 3;
  timeToReturnYears: [number, number];
  suits: string[];
  steps: string[];
  caveats: string[];
};

export type DiyGuide = {
  id: string;
  name: string;
  category: "abri" | "sol" | "eau" | "energie" | "conservation" | "cloture";
  difficulty: 1 | 2 | 3;
  time: string;
  cost: string;
  materials: string[];
  steps: string[];
  legal: string;
  links: string[];
};

export type CalendarTask = {
  month: number;
  pillar: "nourrir" | "recycler" | "habitat" | "savoir";
  title: string;
  detail: string;
  href?: AppPath;
};

export type LegalTopic = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  sources: { label: string; href: string }[];
};

export type WaterTopic = {
  id: string;
  name: string;
  summary: string;
  uses: string[];
  legal: string;
  sizing: string;
  savings: string;
};

export type ConserveMethod = {
  id: string;
  name: string;
  summary: string;
  bestFor: string[];
  notFor: string[];
  steps: string[];
  duration: string;
  storage: string;
  pitfalls: string[];
  legal: string;
};

export type SoilTexture = {
  id: string;
  name: string;
  feel: string;
  water: string;
  work: string;
  crops: string;
  amends: string[];
};

export type CoverCrop = {
  id: string;
  name: string;
  monthsSow: number[];
  role: string;
  notes: string;
  destroy: string;
};

export type Amendment = {
  id: string;
  name: string;
  npk: string;
  use: string;
  dose: string;
  caution: string;
};

export type GardenPest = {
  id: string;
  name: string;
  crops: string[];
  signs: string;
  prevention: string;
  intervention: string;
  legal: string;
};

export type Auxiliary = {
  id: string;
  name: string;
  role: string;
  habitat: string;
  plants: string;
};
