export type SeedRate = {
  cropId: string;
  perM2: number;
  unit: string;
  note: string;
};

export const SEED_RATES: SeedRate[] = [
  { cropId: "tomate", perM2: 4, unit: "plants", note: "Semis au chaud, un plant / 50 cm." },
  { cropId: "courge", perM2: 0.5, unit: "plant", note: "Un pied occupe 2 m², compost au trou." },
  { cropId: "courgette", perM2: 1, unit: "plant", note: "Un pied suffit souvent pour deux personnes." },
  { cropId: "haricot", perM2: 25, unit: "graines", note: "Poquets de 5, ou ligne tous les 8 cm." },
  { cropId: "pdt", perM2: 4, unit: "plants", note: "Plants germés, 30 cm sur le rang." },
  { cropId: "chou", perM2: 4, unit: "plants", note: "Pépinière puis repiquage, filet." },
  { cropId: "carotte", perM2: 0.4, unit: "g", note: "Semis clair, sable mélangé, sol meuble." },
  { cropId: "poireau", perM2: 15, unit: "plants", note: "Pépinière dense, habillage des racines." },
  { cropId: "salade", perM2: 12, unit: "plants", note: "Échelonner, pas tout le sachet en un jour." },
  { cropId: "epinard", perM2: 2, unit: "g", note: "Printemps et fin d’été, pas la canicule." },
  { cropId: "ail", perM2: 40, unit: "caïeux", note: "Les plus beaux, pointe en haut." },
  { cropId: "oignon", perM2: 1, unit: "g", note: "Ou 30 bulbilles / m²." },
  { cropId: "betterave", perM2: 1.5, unit: "g", note: "Glomérules : éclaircir à 10 cm." },
  { cropId: "feve", perM2: 15, unit: "graines", note: "Automne ou fin d’hiver selon climat." },
  { cropId: "petit-pois", perM2: 20, unit: "graines", note: "Rames si variété à rames." },
  { cropId: "radis", perM2: 2, unit: "g", note: "Ligne courte chaque semaine." },
  { cropId: "aubergine", perM2: 3, unit: "plants", note: "Chaud, comme la tomate, plus frileuse." },
  { cropId: "poivron", perM2: 4, unit: "plants", note: "Semis tôt, chaleur de fond." },
  { cropId: "concombre", perM2: 1.5, unit: "plants", note: "Palisser pour gagner du sol." },
  { cropId: "panais", perM2: 0.4, unit: "g", note: "Graine fraîche : elle vieillit mal." },
  { cropId: "navet", perM2: 0.4, unit: "g", note: "Filet anti-altises dès le semis." },
  { cropId: "mache", perM2: 1, unit: "g", note: "Tasser le semis, garder humide." },
  { cropId: "bette", perM2: 1, unit: "g", note: "Éclaircir, les jeunes se mangent." },
  { cropId: "celeri", perM2: 8, unit: "plants", note: "Semis long, terre riche et fraîche." },
  { cropId: "brocoli", perM2: 3, unit: "plants", note: "Filet, récolte des jets secondaires." },
  { cropId: "echalote", perM2: 25, unit: "bulbes", note: "Sol drainé, pas de fumier frais." },
  { cropId: "topinambour", perM2: 4, unit: "tubercules", note: "Coin dédié : il revient." },
  { cropId: "kale", perM2: 4, unit: "plants", note: "Après les choux d’été, ou en même temps." },
  { cropId: "fenouil", perM2: 8, unit: "plants", note: "Semis d’été pour bulbes d’automne." },
  { cropId: "basilic", perM2: 6, unit: "plants", note: "Au pied des tomates, pas avant les saints de glace." },
  { cropId: "persil", perM2: 0.5, unit: "g", note: "Levée lente, terre fraîche." },
  { cropId: "roquette", perM2: 0.4, unit: "g", note: "Échelonner, filet si altises." },
  { cropId: "claytone", perM2: 0.3, unit: "g", note: "Semis de fin d’été, ne pas noyer." },
  { cropId: "physalis", perM2: 3, unit: "plants", note: "Même calendrier que la tomate." },
  { cropId: "oca", perM2: 6, unit: "tubercules", note: "Planter après les gelées, récolter après." },
  { cropId: "rutabaga", perM2: 0.3, unit: "g", note: "Semis plus tardif que le navet." },
  { cropId: "pakchoi", perM2: 12, unit: "plants", note: "Mieux en fin d’été." },
  { cropId: "oseille", perM2: 4, unit: "plants", note: "Vivace : un coin suffit des années." },
  { cropId: "coriandre", perM2: 0.5, unit: "g", note: "Série de fin d’été plus fiable." },
  { cropId: "raifort", perM2: 2, unit: "éclats", note: "Barrière : il colonise." },
  { cropId: "cardon", perM2: 1, unit: "plant", note: "Grand gabarit, compost au pied." },
  { cropId: "amarante", perM2: 0.3, unit: "g", note: "Chaleur, éclaircir pour les feuilles." },
  { cropId: "epeautre", perM2: 15, unit: "g", note: "Semis d’automne, battage à prévoir." },
  { cropId: "mais", perM2: 6, unit: "graines", note: "En carré pour la pollinisation, pas une seule ligne." },
  { cropId: "patate-douce", perM2: 3, unit: "plants", note: "Slips, chaleur, récolte avant gel." },
];

export function seedRateFor(cropId: string) {
  return SEED_RATES.find((s) => s.cropId === cropId);
}
