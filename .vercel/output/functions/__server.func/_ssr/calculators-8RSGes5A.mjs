import { t as CHAINS } from "./chains-Oq51pbdt.mjs";
import { n as climateById } from "./climate-CGxKgulf.mjs";
import { r as WASTE_METHODS } from "./waste-D2Cp_pBS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/calculators-8RSGes5A.js
var ENERGY_SCENARIOS = [
	{
		id: "sobriete",
		name: "Sobriété + joints + rideaux",
		summary: "Le kWh le moins cher est celui qu’on ne consomme pas. Avant tout équipement.",
		capex: [80, 600],
		yearlySavePct: 12,
		autonomyHeatPct: 0,
		autonomyElecPct: 0,
		complexity: 1,
		timeToReturnYears: [0, 2],
		suits: [
			"appart",
			"maison",
			"locataire"
		],
		steps: [
			"Relever 12 mois de factures (kWh, pas seulement €)",
			"Coupe-froid portes/fenêtres, bas de porte",
			"Rideaux épais, déscente de température nocturne 17 °C",
			"Eau chaude : mousseurs, ballon à 55–60 °C"
		],
		caveats: ["Ne règle pas un logement passoire", "Le confort subjectif compte autant que les kWh"]
	},
	{
		id: "isolation",
		name: "Isolation ciblée",
		summary: "Combles d’abord, puis plancher, puis murs. La hiérarchie est presque toujours celle-ci.",
		capex: [1500, 25e3],
		yearlySavePct: 35,
		autonomyHeatPct: 0,
		autonomyElecPct: 0,
		complexity: 2,
		timeToReturnYears: [5, 15],
		suits: ["maison"],
		steps: [
			"Diagnostic simple : combles perdus = 30 % des pertes typiques",
			"Vérifier aides (MaPrimeRénov’, CEE, TVA 5,5 %) — montants variables, dossier France Rénov’",
			"Ventilation : ne jamais étancher sans VMC"
		],
		caveats: ["Aides conditionnées à des artisans RGE", "Ponts thermiques et humidité si mal conçu"]
	},
	{
		id: "poele-bois",
		name: "Poêle à bois + stock",
		summary: "Chauffage en autonomie partielle. Ramonage, stockage sec, approvisionnement local.",
		capex: [1500, 6e3],
		yearlySavePct: 40,
		autonomyHeatPct: 70,
		autonomyElecPct: 0,
		complexity: 2,
		timeToReturnYears: [3, 8],
		suits: ["maison"],
		steps: [
			"Dimensionner ~0,06–0,1 kW/m² selon isolation (poêle trop gros = feux étouffés)",
			"Conduit aux normes, ramonage 2 fois/an dont 1 en période de chauffe (souvent obligatoire)",
			"Stock 2 ans : 1 stère ≈ 1 500–2 000 kWh selon essence et 20 % d’humidité",
			"Déclarer / assurances habitation"
		],
		caveats: ["Zones à faible émission : appareils flamme verte, parfois interdictions d’appareils anciens", "Bois trop humide = goudrons et mauvais rendement"]
	},
	{
		id: "pv-simple",
		name: "Solaire PV en autoconsommation",
		summary: "Toiture 3–6 kWc, sans batterie d’abord. Recouvre le ballon, le froid, le télétravail diurne.",
		capex: [4e3, 12e3],
		yearlySavePct: 25,
		autonomyHeatPct: 0,
		autonomyElecPct: 35,
		complexity: 2,
		timeToReturnYears: [8, 14],
		suits: ["maison"],
		steps: [
			"Estimer : kWc × productible climatique (1 050 à 1 450 kWh/kWc/an)",
			"Consuel / déclaration urbanisme selon puissance",
			"Piloter ballon et machines en heures solaires"
		],
		caveats: ["Sans batterie, le soir n’est pas couvert", "Ombres de cheminée et d’arbres"]
	},
	{
		id: "pv-batterie-pac",
		name: "PV + batterie + pompe à chaleur",
		summary: "Scénario résilient, investissement lourd. Isolation préalable quasi obligatoire.",
		capex: [18e3, 45e3],
		yearlySavePct: 55,
		autonomyHeatPct: 80,
		autonomyElecPct: 60,
		complexity: 3,
		timeToReturnYears: [12, 22],
		suits: ["maison"],
		steps: [
			"Isoler d’abord (sinon la PAC surconsomme)",
			"PAC air-eau ou géothermie selon terrain",
			"Batterie 5–10 kWh pour le soir, pas pour une semaine de tempête"
		],
		caveats: ["Dépendance aux fluides et pièces", "En montagne très froide, appoint bois souvent conservé"]
	},
	{
		id: "solaire-thermique",
		name: "Solaire thermique ECS",
		summary: "Eau chaude sanitaire 4–6 mois presque autonome, appoint l’hiver.",
		capex: [3e3, 8e3],
		yearlySavePct: 15,
		autonomyHeatPct: 10,
		autonomyElecPct: 0,
		complexity: 2,
		timeToReturnYears: [8, 16],
		suits: ["maison"],
		steps: [
			"2 capteurs + ballon 200–300 L",
			"Glycol, soupape, parasol d’été",
			"Appoint bois ou élec"
		],
		caveats: ["Suréchauffe en inoccupation estivale", "Entretien fluide"]
	},
	{
		id: "taillis-bois",
		name: "Produire son bois (taillis / haies)",
		summary: "Haies et taillis : 1 ha de taillis de 15–20 ans peut donner plusieurs stères, un jardin de haies quelques uns.",
		capex: [200, 2e3],
		yearlySavePct: 10,
		autonomyHeatPct: 20,
		autonomyElecPct: 0,
		complexity: 2,
		timeToReturnYears: [8, 20],
		suits: ["rural"],
		steps: [
			"Inventorier haies : charme, châtaillier, noisetier, frêne",
			"Rotation : 1/7 de la haie par an",
			"Séchage 18–24 mois sous abri ouvert",
			"Se renseigner ONF / DDT avant coupe en forêt (code forestier)"
		],
		caveats: ["Coupe rase et haies protégées (biodiversité, BCAE, PLU)", "Le temps de pousse se compte en années"]
	},
	{
		id: "poele-granules",
		name: "Poêle à granulés",
		summary: "Confort thermostaté, sacs de granulés, électricité pour la vis. Moins « autonome » qu’une bûche le jour de tempête.",
		capex: [2500, 7e3],
		yearlySavePct: 35,
		autonomyHeatPct: 60,
		autonomyElecPct: 0,
		complexity: 2,
		timeToReturnYears: [4, 10],
		suits: ["maison"],
		steps: [
			"Dimensionner sans surdimensionner (moduler, pas étouffer)",
			"Stock au sec, livraison palettes",
			"Conduit étanche, prises d’air, ramonage",
			"Prévoir un plan B (bûche, appoint) si coupure longue"
		],
		caveats: [
			"Dépend du réseau électrique et de la filière granulés",
			"Bruit de vis : selon modèle et cloisonnement",
			"ZFE / arrêtés : appareils performants exigés"
		]
	},
	{
		id: "ballon-thermo",
		name: "Ballon thermodynamique",
		summary: "ECS par petite PAC sur air extrait ou ambiant. Moins spectaculaire que le PV, souvent plus rentable sur l’eau chaude.",
		capex: [1800, 4500],
		yearlySavePct: 12,
		autonomyHeatPct: 5,
		autonomyElecPct: 0,
		complexity: 2,
		timeToReturnYears: [6, 12],
		suits: ["maison"],
		steps: [
			"Local hors gel, volume d’air suffisant (ou air extrait VMC)",
			"Ne pas l’enfermer dans un placard étouffé",
			"Appoint électrique intégré : surveiller les kWh"
		],
		caveats: ["Bruit, froid du local", "Aides variables, artisan RGE souvent requis"]
	},
	{
		id: "mini-eolien",
		name: "Petit éolien (prudence)",
		summary: "Rarement le premier investissement d’un jardin. Le vent utile est plus haut, plus régulier, et plus loin des voisins que le catalogue ne le dit.",
		capex: [3e3, 15e3],
		yearlySavePct: 8,
		autonomyHeatPct: 0,
		autonomyElecPct: 15,
		complexity: 3,
		timeToReturnYears: [12, 25],
		suits: ["rural"],
		steps: [
			"Mesurer le vent 6–12 mois (anémomètre, pas le feeling)",
			"Urbanisme : hauteur, nuisances, PLU, parfois enquête",
			"Comparer au kWc photovoltaïque au même budget"
		],
		caveats: [
			"Bruit, vibration, ombre portée, oiseaux",
			"Productible décevant sous 4–5 m/s moyens",
			"Maintenance : pales, roulements, assurances"
		]
	},
	{
		id: "poele-masse",
		name: "Poêle de masse (inertie)",
		summary: "Un ou deux feux vifs par jour, la masse restitue 12–24 h. Autonomie bois élevée, chantier lourd, ramonage, dimensionnement.",
		capex: [6e3, 18e3],
		yearlySavePct: 45,
		autonomyHeatPct: 85,
		autonomyElecPct: 0,
		complexity: 3,
		timeToReturnYears: [8, 16],
		suits: ["maison"],
		steps: [
			"Maison déjà isolée : sinon la masse surchauffe une pièce et le reste gèle",
			"Conception (canal, brique réfractaire), pas un tutoriel de 20 min",
			"Conduit, arrivée d’air, dallage porteur",
			"Apprendre la conduite : feux chauds, pas de feu étouffé"
		],
		caveats: [
			"Poids sur le plancher",
			"Artisan compétent rare",
			"Premier hiver d’apprentissage"
		]
	},
	{
		id: "cuisiniere-bois",
		name: "Cuisinière à bois",
		summary: "Chauffer la pièce à vivre et cuire. Bouilloire, four, parfois bouilleur pour radiateurs. Été : autre moyen de cuisson.",
		capex: [1800, 7e3],
		yearlySavePct: 20,
		autonomyHeatPct: 40,
		autonomyElecPct: 0,
		complexity: 2,
		timeToReturnYears: [6, 14],
		suits: ["maison"],
		steps: [
			"Modèle étanche, conduit adapté, plaque et four",
			"Bois très sec : cuisine = feu propre",
			"Plan B estival (solaire, gaz, élec)"
		],
		caveats: [
			"Chaleur indésirable en juin",
			"Ramonage",
			"Ne remplace pas une isolation"
		]
	},
	{
		id: "isolation-bio",
		name: "Isolation biosourcée (combles)",
		summary: "Ouate de cellulose, paille, fibre de bois, chanvre : le premier geste d’autonomie chaleur, avant le poêle « trop gros ».",
		capex: [1200, 8e3],
		yearlySavePct: 25,
		autonomyHeatPct: 0,
		autonomyElecPct: 0,
		complexity: 2,
		timeToReturnYears: [4, 12],
		suits: ["maison"],
		steps: [
			"Combles perdus d’abord (meilleur €/kWh)",
			"Vapeur : pare-vapeur côté chaud selon paroi",
			"Aides : RGE souvent requis. Bricolage possible en combles perdus non aidé"
		],
		caveats: [
			"Rongeurs dans la paille mal posée",
			"Humidité de toiture",
			"Ne pas étancher sans ventilation"
		]
	},
	{
		id: "four-solaire-nrj",
		name: "Cuisson solaire",
		summary: "Boîte ou parabole : 0 kWh, 0 fumée, météo dépendante. Complément d’été, pas un chauffage.",
		capex: [20, 400],
		yearlySavePct: 3,
		autonomyHeatPct: 0,
		autonomyElecPct: 2,
		complexity: 1,
		timeToReturnYears: [0, 3],
		suits: [
			"maison",
			"appart",
			"locataire"
		],
		steps: [
			"Four boîte DIY ou parabole du commerce",
			"Midi solaire, ciel clair",
			"Thermomètre : ne pas « stériliser » des haricots au four solaire"
		],
		caveats: ["Inutile sous la bruine bretonne de novembre", "Reflets / incendie de paillasson : ranger"]
	},
	{
		id: "groupe-secours",
		name: "Groupe électrogène de secours",
		summary: "Ce n’est pas de l’autonomie, c’est de la résilience courte : congélateur, pompe, médical. Essence, CO, voisinage.",
		capex: [400, 2500],
		yearlySavePct: 0,
		autonomyHeatPct: 0,
		autonomyElecPct: 5,
		complexity: 2,
		timeToReturnYears: [20, 40],
		suits: ["maison"],
		steps: [
			"Cibler 1–2 kVA pour le froid, pas la maison entière",
			"Dehors, échappement, jamais garage fermé (CO)",
			"Inverseur réseau : électricien, pas un bricolage qui réinjecte",
			"Carburant rotaté, test trimestriel"
		],
		caveats: [
			"Monoxyde de carbone",
			"Vol",
			"Bruit",
			"Illusion d’autonomie"
		]
	},
	{
		id: "poele-rocket",
		name: "Poêle rocket (prudence)",
		summary: "Foyer à tirage vif, bon si le conduit et la prise d’air sont justes, dangereux si les fumées restent dans la pièce. Ce n’est pas un bidon percé pour « essayer ».",
		capex: [80, 800],
		yearlySavePct: 8,
		autonomyHeatPct: 25,
		autonomyElecPct: 0,
		complexity: 3,
		timeToReturnYears: [4, 12],
		suits: ["maison"],
		steps: [
			"Conduit isolé, tirage mesuré, prise d’air dédiée",
			"Détecteur de monoxyde, test portes fermées",
			"Bois sec seulement",
			"Déclarer à l’assurance avant le premier feu"
		],
		caveats: [
			"Monoxyde",
			"Incendie si le bricolage fuit",
			"Voisinage et fumée basse",
			"Interdit de fait dans beaucoup de locations"
		]
	},
	{
		id: "poele-bouilleur",
		name: "Poêle bouilleur",
		summary: "Il chauffe la pièce et un ballon. Soupape, vase, réseau : c’est de la plomberie de chauffage, pas un serpentin dans un fût.",
		capex: [2500, 7e3],
		yearlySavePct: 15,
		autonomyHeatPct: 40,
		autonomyElecPct: 0,
		complexity: 3,
		timeToReturnYears: [6, 14],
		suits: ["maison"],
		steps: [
			"Dimensionner avec quelqu’un du métier",
			"Soupape, vase d’expansion, ballon tampon",
			"Ramonage et bois sec, comme tout poêle",
			"Secours électrique de la pompe pensé (pas de thermosiphon fantaisiste)"
		],
		caveats: [
			"Surchauffe",
			"Gel du réseau",
			"Installation non conforme",
			"Assurance"
		]
	}
];
function pvYield(roofM2, kwhPerKwc) {
	const kwc = roofM2 * .18;
	return {
		kwc,
		kwh: kwc * kwhPerKwc
	};
}
var NOISE_MAP = {
	faible: 1,
	moyen: 2,
	eleve: 3
};
function rankChains(profile) {
	const noiseTol = NOISE_MAP[profile.noiseTolerance];
	return CHAINS.map((chain) => {
		let score = 62;
		const reasons = [];
		const blockers = [];
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
		} else score += 6;
		if (profile.hoursPerWeek + .4 < chain.hoursPerWeek) {
			score -= 14;
			reasons.push(`Temps : le scénario demande ~${chain.hoursPerWeek} h/sem.`);
		} else score += 4;
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
		if (chain.animalIds.filter((id) => profile.animalsPresent.includes(id)).length) {
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
			compatible: blockers.length === 0 && clamped >= 42
		};
	}).sort((a, b) => b.score - a.score);
}
function yearLogs(logs, year = (/* @__PURE__ */ new Date()).getFullYear()) {
	return logs.filter((l) => l.date.startsWith(String(year)));
}
var KCAL_FALLBACK = {
	recolte: 400,
	oeufs: 70,
	viande: 1800,
	miel: 3e3,
	cueillette: 350
};
function foodAutonomy(profile, logs) {
	const need = profile.people * 2500 * 365;
	const produced = yearLogs(logs).reduce((acc, l) => {
		if (![
			"recolte",
			"oeufs",
			"viande",
			"miel",
			"cueillette"
		].includes(l.kind)) return acc;
		return acc + (l.kcal ?? l.qty * (KCAL_FALLBACK[l.kind] ?? 0));
	}, 0);
	return {
		need,
		produced,
		pct: need ? Math.min(100, produced / need * 100) : 0
	};
}
function wasteStats(profile, logs, methodId) {
	const method = WASTE_METHODS.find((m) => m.id === methodId) ?? WASTE_METHODS[0];
	const kgYearIn = profile.wasteKgWeek * 52;
	const kgOut = kgYearIn * method.conversion;
	return {
		method,
		kgYearIn,
		kgOut,
		logged: yearLogs(logs).filter((l) => l.kind === "compost").reduce((a, l) => a + l.qty, 0),
		fertilizerSaveEur: kgOut * .35
	};
}
function energyStats(profile) {
	const climate = climateById(profile.climate);
	const steres = profile.housing.kwhHeatYear / 1750;
	const pv = pvYield(profile.housing.roofM2, climate.pvKwhPerKwc);
	return {
		climate,
		steres,
		pv,
		elecCov: profile.housing.kwhElecYear ? Math.min(100, pv.kwh * .35 / profile.housing.kwhElecYear * 100) : 0
	};
}
function nextActions(profile, stocks = {}, planCount = 0) {
	const actions = [];
	if (!profile.completed) actions.push({
		title: "Calibrer le foyer",
		href: "/",
		why: "Sans surface, climat et temps, les scénarios restent génériques."
	});
	if (profile.activeChainIds.length === 0) actions.push({
		title: "Choisir une première chaîne",
		href: "/chaines",
		why: "Une boucle poules–compost–potager suffit souvent à démarrer."
	});
	if (planCount === 0 && profile.gardenM2 >= 8) actions.push({
		title: "Dessiner le plan de semis",
		href: "/semis",
		why: "Répartir les m² par famille avant de commander trois fois trop de tomates."
	});
	const month = (/* @__PURE__ */ new Date()).getMonth();
	if (month >= 6 && month <= 10) actions.push({
		title: "Peser la récolte avant les bocaux",
		href: "/atelier",
		why: "Sel, sucre et nombre de bocaux se calculent au kilo, pas à l’œil."
	});
	if (!profile.animalsPresent.includes("lombrics") && profile.setting === "urbain") actions.push({
		title: "Ouvrir un lombricomposteur",
		href: "/dechets",
		why: "C’est la boucle légale la plus simple en ville."
	});
	if (profile.housing.insulation === "faible") actions.push({
		title: "Isoler avant de changer de chauffage",
		href: "/energie",
		why: "Un poêle trop gros dans une passoire est un piège."
	});
	if (profile.gardenM2 >= 20 && profile.activeChainIds.length) actions.push({
		title: "Planifier les apports du mois",
		href: "/calendrier",
		why: "Le calendrier relie potager, élevage, cueillette et bois."
	});
	if (profile.gardenM2 >= 15 || profile.goals.includes("conserves")) actions.push({
		title: "Transformer plutôt que jeter",
		href: "/conservation",
		why: "Bocaux, lacto et cave font durer juillet jusqu’en janvier."
	});
	if (profile.gardenM2 >= 20) actions.push({
		title: "Lire le sol avant le compost du commerce",
		href: "/sol",
		why: "Texture, couverts et filets valent plus qu’un sac d’engrais."
	});
	if (!Object.values(stocks).some((n) => n > 0)) actions.push({
		title: "Compter ce qui est déjà en cave",
		href: "/garde",
		why: "Bocaux, pommes de terre et sachets se mesurent avant l’hiver."
	});
	return actions.slice(0, 5);
}
//#endregion
export { rankChains as a, nextActions as i, energyStats as n, wasteStats as o, foodAutonomy as r, ENERGY_SCENARIOS as t };
