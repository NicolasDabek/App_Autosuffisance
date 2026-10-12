import type { ClimateId } from "./types";

export const CLIMATES: {
  id: ClimateId;
  name: string;
  regions: string;
  frost: string;
  pvKwhPerKwc: number;
  heatFactor: number;
  woodNote: string;
}[] = [
  {
    id: "oceanique",
    name: "Océanique",
    regions: "Bretagne, Normandie, Pays de la Loire, nord de la Nouvelle-Aquitaine",
    frost: "Hivers doux, peu de gelées sévères, humidité élevée",
    pvKwhPerKwc: 1050,
    heatFactor: 0.85,
    woodNote: "Bois souvent humide : 18–24 mois de séchage sous abri",
  },
  {
    id: "semi-oceanique",
    name: "Semi-océanique",
    regions: "Île-de-France, Centre-Val de Loire, Hauts-de-France ouest",
    frost: "Gelées régulières de décembre à mars",
    pvKwhPerKwc: 1120,
    heatFactor: 1,
    woodNote: "Taillis et haies productifs, séchage 18 mois",
  },
  {
    id: "continental",
    name: "Continental / semi-continental",
    regions: "Grand Est, Bourgogne-Franche-Comté, Auvergne",
    frost: "Hivers froids, amplitude thermique forte",
    pvKwhPerKwc: 1180,
    heatFactor: 1.25,
    woodNote: "Fort besoin de chauffage ; forêts de feuillus, stères à anticiper",
  },
  {
    id: "mediterraneen",
    name: "Méditerranéen",
    regions: "PACA, Occitanie littorale, Corse, Drôme/Ardèche sud",
    frost: "Été sec, hiver doux, risque de sécheresse et d’incendie",
    pvKwhPerKwc: 1450,
    heatFactor: 0.55,
    woodNote: "Chauffage limité ; olivier, amandier, eau à stocker",
  },
  {
    id: "montagne",
    name: "Montagne",
    regions: "Alpes, Pyrénées, Massif central d’altitude, Vosges, Jura",
    frost: "Saison courte, neige, gel tardif",
    pvKwhPerKwc: 1250,
    heatFactor: 1.45,
    woodNote: "Poêle ou chaudière bois souvent central ; séchage long",
  },
  {
    id: "atlantique-sud",
    name: "Atlantique sud",
    regions: "Aquitaine, Charentes, piémont pyrénéen ouest",
    frost: "Doux, orages d’été, bonne pousse végétative",
    pvKwhPerKwc: 1280,
    heatFactor: 0.7,
    woodNote: "Pin et chêne ; attention humidité océanique au séchage",
  },
];

export function climateById(id: ClimateId) {
  return CLIMATES.find((c) => c.id === id) ?? CLIMATES[1];
}
