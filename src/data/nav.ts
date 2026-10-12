import type { LucideIcon } from "lucide-react";
import {
  Apple,
  CalendarDays,
  ClipboardList,
  CookingPot,
  Droplets,
  Flame,
  Layers,
  LayoutDashboard,
  Leaf,
  Package,
  Recycle,
  Scale,
  Shovel,
  Sprout,
  SunMedium,
  TreeDeciduous,
  Utensils,
  Warehouse,
} from "lucide-react";
import type { AppPath } from "./types";

export type NavItem = {
  href: AppPath;
  label: string;
  icon: LucideIcon;
  blurb: string;
};

export type NavGroup = {
  id: string;
  label: string;
  items: NavItem[];
};

export const NAV: NavGroup[] = [
  {
    id: "home",
    label: "Vue d’ensemble",
    items: [
      {
        href: "/",
        label: "Tableau de bord",
        icon: LayoutDashboard,
        blurb: "Boucles actives, autonomie, prochaines actions",
      },
    ],
  },
  {
    id: "nourrir",
    label: "Nourrir",
    items: [
      {
        href: "/chaines",
        label: "Chaînes alimentaires",
        icon: Sprout,
        blurb: "Simulateur de combinaisons légales",
      },
      {
        href: "/elevage",
        label: "Élevage légal",
        icon: Warehouse,
        blurb: "Fiches animaux pour l’autoconsommation",
      },
      {
        href: "/potager",
        label: "Potager",
        icon: Leaf,
        blurb: "Cultures, rotations, apports",
      },
      {
        href: "/semis",
        label: "Plan de semis",
        icon: ClipboardList,
        blurb: "Mètres carrés, familles, semences",
      },
      {
        href: "/sol",
        label: "Sol & auxiliaires",
        icon: Layers,
        blurb: "Textures, engrais verts, ravageurs",
      },
      {
        href: "/verger",
        label: "Verger",
        icon: Apple,
        blurb: "Fruitiers selon climat et pollinisation",
      },
      {
        href: "/cueillette",
        label: "Cueillette",
        icon: TreeDeciduous,
        blurb: "Plantes, champignons, cadre légal",
      },
      {
        href: "/conservation",
        label: "Conservation",
        icon: CookingPot,
        blurb: "Bocaux, lacto, séchage, cave",
      },
      {
        href: "/atelier",
        label: "Atelier",
        icon: Utensils,
        blurb: "Sel, sucre et bocaux au kilo",
      },
      {
        href: "/garde",
        label: "Garde-manger",
        icon: Package,
        blurb: "Stocks, semences, objectif d’hiver",
      },
    ],
  },
  {
    id: "recycler",
    label: "Recycler",
    items: [
      {
        href: "/dechets",
        label: "Déchets → sol",
        icon: Recycle,
        blurb: "Compost, bokashi, plan de fertilisation",
      },
      {
        href: "/eau",
        label: "Eau",
        icon: Droplets,
        blurb: "Récupération, puits, usages autorisés",
      },
    ],
  },
  {
    id: "habitat",
    label: "Habitat",
    items: [
      {
        href: "/energie",
        label: "Énergie & chauffage",
        icon: Flame,
        blurb: "Scénarios d’autonomie, bois, solaire",
      },
      {
        href: "/bricolage",
        label: "Bricolage",
        icon: Shovel,
        blurb: "Abris, serre, clôtures, conservation",
      },
    ],
  },
  {
    id: "savoir",
    label: "Savoir",
    items: [
      {
        href: "/calendrier",
        label: "Calendrier",
        icon: CalendarDays,
        blurb: "Travaux du mois, saison par saison",
      },
      {
        href: "/legal",
        label: "Cadre légal",
        icon: Scale,
        blurb: "Autoconsommation en France, sources officielles",
      },
      {
        href: "/journal",
        label: "Journal",
        icon: SunMedium,
        blurb: "Récoltes, œufs, kWh, cueillettes",
      },
    ],
  },
];

export const ALL_NAV_ITEMS = NAV.flatMap((g) => g.items);
