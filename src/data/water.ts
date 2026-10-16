import type { WaterTopic } from "./types";

export const WATER: WaterTopic[] = [
  {
    id: "pluie",
    name: "Eau de pluie",
    summary:
      "La boucle la plus simple : toiture → crapaudine → cuve opaque → jardin et abreuvoirs. 1 mm × 1 m² = 1 litre.",
    uses: ["Irrigation", "Nettoyage", "Abreuvoirs animaux (eau claire, cuve alimentaire)", "WC / lavage si réseau séparé"],
    legal:
      "Arrêté du 21 août 2008 pour les usages intérieurs. Eau non potable, pictogrammes, pas de piquage sur l’eau de ville. Déclaration en mairie si usage à l’intérieur.",
    sizing:
      "Foyer de 4, jardin 100 m² : 1 000–3 000 L utiles. Toiture 80 m² en climat 700 mm : ~28 m³ collectables à 50 % de rendement — la cuve lisse les semaines, pas l’année sèche du Midi.",
    savings: "Le m³ d’eau potable évité + l’eau d’été quand les arrêtés sécheresse limitent le réseau.",
  },
  {
    id: "noue",
    name: "Noues et infiltration",
    summary: "Mieux vaut infiltrer que tout stocker. Une noue enherbée en aval du trop-plein recharge le sol du verger.",
    uses: ["Trop-plein de cuve", "Eaux de toiture secondaires", "Chemins d’eau du potager"],
    legal: "Ne pas diriger vers le voisin ni un cours d’eau fragile. Lotissements : règlement de voirie.",
    sizing: "Section 30×30 cm sur 5–10 m suffit souvent à un trop-plein de 1 000 L.",
    savings: "Moins d’arrosage au pied des fruitiers, moins d’érosion.",
  },
  {
    id: "paillage",
    name: "Paillage = château d’eau",
    summary: "5 cm de paille, BRF ou feuilles réduisent l’évaporation de 30 à 70 %. C’est le premier « équipement » d’autonomie hydrique.",
    uses: ["Planches", "Jeunes scions", "Haies l’année de plantation"],
    legal: "Aucun.",
    sizing: "Une botte de paille couvre ~10 m². BRF : 3 cm, pas une dune.",
    savings: "Arrosoirs, stress des tomates, croûte de battance.",
  },
  {
    id: "puits",
    name: "Puits et forage",
    summary: "Ressource puissante mais encadrée. Analyse d’eau avant tout usage alimentaire. Rabattement de nappe en été.",
    uses: ["Jardin", "Parfois sanitaire après traitement et contrôles"],
    legal:
      "Forage > 10 m : déclaration. Selon débit et nappe, autorisation loi sur l’eau. Déclaration d’ouvrage. Pas de confusion avec l’eau potable publique.",
    sizing: "Un forage « jardin » 500–2 000 € n’est pas un projet week-end. Pompe, crépine, protection électrique.",
    savings: "Peut effacer l’eau d’irrigation. Coût caché : électricité, fer/manganèse, sécheresse.",
  },
  {
    id: "eaux-grises",
    name: "Eaux grises (prudence)",
    summary:
      "Réutiliser lave-linge ou douche vers le jardin est tentant et souvent hors cadre si raccordement sauvage. Savons, bore, graisses : sol et nappe.",
    uses: ["Projets conçus (phytoépuration agréée) plutôt que tuyau dans les tomates"],
    legal: "Assainissement non collectif : SPANC. Tout rejet hors dispositif prévu est un risque (santé + sanctions).",
    sizing: "Phytoépuration : plusieurs m² par EH, étude de sol.",
    savings: "Réels sur un site autonome bien conçu ; pièges sur un pavillon raccordé au tout-à-l’égout.",
  },
  {
    id: "oyas",
    name: "Oyas et irrigation de fond",
    summary:
      "Pot de terre cuite enterré : l’eau sue vers les racines. Moins d’évaporation qu’un arrosoir du soir, idéal tomates et courges.",
    uses: ["Planches gourmandes", "Serre", "Jeunes scions en année 1"],
    legal: "Aucun. Eau de pluie bienvenue.",
    sizing: "1 oya de 1,5–3 L pour 2–4 plants. Remplissage 1–3 fois / semaine selon canicule.",
    savings: "30–50 % d’eau d’arrosage sur les cultures ciblées, moins de mildiou lié au feuillage mouillé.",
  },
  {
    id: "goutte",
    name: "Goutte-à-goutte gravitaire",
    summary: "Cuve surélevée, filtre, goutteurs. Sans pompe si 50 cm de dénivelé. Le paillage reste le premier levier.",
    uses: ["Rang de tomates", "Haie nouvellement plantée", "Serre"],
    legal: "Jardin : libre. Interdiction de connecter au réseau d’eau potable sans disconnexion anti-retour.",
    sizing: "Goutteurs 2 L/h, 30–40 cm sur tomates. Une cuve 300 L tient quelques jours de canicule, pas un mois sec.",
    savings: "Précision, moins de pertes. Entretien : bouchage, gel, algues dans la cuve.",
  },
  {
    id: "mare",
    name: "Mare",
    summary:
      "Biodiversité, microclimat, éventuellement canards. Ce n’est pas une réserve potable. Berges douces, plantes indigènes, pas d’espèces invasives.",
    uses: ["Faune auxiliaire", "Canards (bassin séparé plus facile à vider)", "Inertie thermique du jardin"],
    legal:
      "Hors cours d’eau. Selon surface et connexion hydrographique : déclaration. Enfants : sécurité. Tortue de Floride et écrevisses invasives : interdites.",
    sizing: "4–12 m² suffisent à un jardin. Une zone > 80 cm limite le gel total.",
    savings: "Peu d’euros, beaucoup de grenouilles. Moustiques si l’eau est morte et sans prédateurs.",
  },
  {
    id: "phyto",
    name: "Phytoépuration (cadre)",
    summary:
      "Traiter ses eaux usées par les plantes est un métier (étude de sol, agrément, SPANC), pas un bassin de roseaux improvisé derrière la haie.",
    uses: ["Assainissement non collectif conçu", "Eaux grises dans un projet global"],
    legal: "SPANC, filière agréée, contrôles. Un tuyau de machine à laver dans les tomates n’est pas une phytoépuration.",
    sizing: "Plusieurs m² par équivalent-habitant, trop-plein, accès vidange. Étude obligatoire hors réseau.",
    savings: "Réels sur un site autonome bien né. Piège réglementaire et sanitaire sinon.",
  },
  {
    id: "citerne",
    name: "Citerne enterrée",
    summary:
      "Stock de plusieurs m³, hors gel, hors lumière. Plus cher qu’une cuve souple, plus discret, plus stable.",
    uses: ["Irrigation", "Réserve incendie parfois (règlement)", "Appoint WC si réseau séparé déclaré"],
    legal: "Déclaration urbanisme selon volume. Usages intérieurs : arrêté 2008, pictogrammes, pas de piquage ville.",
    sizing: "3–10 m³ pour un jardin sérieux. Trop-plein vers noue. Regard, trop-plein anti-retour.",
    savings: "Lisse les semaines sèches. Ne crée pas l’eau d’une année méditerranéenne.",
  },
  {
    id: "filtration",
    name: "Filtration de pluie (non potable)",
    summary:
      "Crapaudine, décanteur, filtre 50 µm, charbon parfois. Cela fait une eau d’arrosage et de ménage, pas une eau du robinet.",
    uses: ["Goutte-à-goutte", "Lavage", "Abreuvoirs si cuve alimentaire et entretien"],
    legal: "Boire l’eau de toiture sans traitement maîtrisé : non. Analyses si usage alimentaire animal sensible.",
    sizing: "Filtres à la descente + avant pompe. Entretien 2 fois / an, plus à la chute des feuilles.",
    savings: "Pompes qui durent, goutteurs qui ne se bouchent pas.",
  },
  {
    id: "secheresse",
    name: "Arrêtés sécheresse",
    summary:
      "En crise, l’arrosoir municipal est limité. L’eau de pluie déjà stockée reste un atout ; pomper la nappe peut être interdit.",
    uses: ["Planifier le paillage avant juillet", "Prioriser vivaces et arbres an 1", "Calendrier de remplissage hivernal"],
    legal: "Arrêtés préfectoraux : irrigation, puits, remplissage piscine. Les consulter, ils bougent chaque semaine en été.",
    sizing: "Une cuve 1000 L = quelques jours de canicule sur 20 m² paillés, pas un potager de 200 m².",
    savings: "Le vrai levier reste le sol couvert, pas la cuve Instagram.",
  },
  {
    id: "distillat",
    name: "Distillation solaire (survie, pas un bar)",
    summary:
      "Un alambic solaire d’urgence peut dessaler ou clarifier un peu d’eau. Débit dérisoire. Ce n’est ni un alambic d’eau-de-vie, ni un forage.",
    uses: ["Expérience pédagogique", "Secours"],
    legal: "Eau-de-vie : régime fiscal (voir Cadre légal). Distiller de l’eau : libre. Vendre de l’eau : cadre alimentaire.",
    sizing: "Quelques litres / jour par m² de vitrage au mieux. Pas un plan d’autonomie.",
    savings: "Proche de zéro en kWh, proche de zéro en litres utiles au foyer.",
  },
  {
    id: "sobriete-eau",
    name: "Sobriété domestique",
    summary:
      "Un Français consomme en moyenne ~145 L d’eau potable par jour. Douche, chasse d’eau et lave-linge font l’essentiel : c’est là que se gagnent les premiers m³.",
    uses: ["Mousseurs et douchette économe (6–8 L/min)", "Chasse double débit", "Chasse d’eau à l’eau de pluie (réseau séparé)", "Lave-linge et lave-vaisselle pleins, en mode éco"],
    legal: "Libre. Toilettes sèches : autorisées, à condition de composter les matières sans nuisance (voir Déchets → sol).",
    sizing: "Foyer de 4 : ~210 m³/an au réseau. −20 à −30 % avec mousseurs, douches courtes et chasse économe ; jusqu’à −40 % avec WC à la pluie ou toilettes sèches.",
    savings: "Plusieurs dizaines à centaines d’euros par an selon le prix local du m³ (eau + assainissement), et autant d’eau de cuve gardée pour l’été.",
  },
  {
    id: "arrosage-raisonne",
    name: "Arroser moins, mieux",
    summary:
      "Un arrosage profond et espacé pousse les racines à descendre. Le petit arrosage quotidien du soir garde les racines en surface et nourrit les limaces.",
    uses: ["Arroser au pied, tôt le matin", "1 arrosage de 10–20 L/m² par semaine plutôt que 7 petits", "Biner : « un binage vaut deux arrosages »", "Tensiomètre ou doigt dans la terre à 5 cm avant d’ouvrir le robinet"],
    legal: "Respecter les arrêtés sécheresse : horaires et usages restreints, y compris parfois pour l’eau de puits.",
    sizing: "Potager paillé en été : ~3 à 5 L/m²/jour d’évapotranspiration en canicule ; sans paillage, nettement plus.",
    savings: "Souvent 30–50 % d’eau d’arrosage en moins, et des plantes plus résistantes au coup de chaud.",
  },
];

export function rainCollectable(roofM2: number, mmYear: number, efficiency = 0.5) {
  return roofM2 * mmYear * efficiency; // litres
}

/** Pluviométrie annuelle indicative par climat (mm). */
export const RAIN_MM: Record<string, number> = {
  oceanique: 850,
  "semi-oceanique": 700,
  continental: 750,
  mediterraneen: 550,
  montagne: 1100,
  "atlantique-sud": 900,
};
