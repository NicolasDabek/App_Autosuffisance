//#region node_modules/.nitro/vite/services/ssr/assets/stocks-C8c6hPvR.js
var STOCK_GROUPS = [
	{
		id: "cave",
		label: "Cave et frais"
	},
	{
		id: "sec",
		label: "Sec et bocaux"
	},
	{
		id: "semences",
		label: "Semences"
	},
	{
		id: "energie",
		label: "Bois et eau"
	}
];
/** Ordres de grandeur d’un hiver de foyer, pas une ration militaire. */
var STOCKS = [
	{
		id: "pdt",
		name: "Pommes de terre",
		group: "cave",
		unit: "kg",
		per: "person",
		qty: 40,
		integer: true,
		note: "Cave 8–10 °C, obscurité. Variétés de garde (Charlotte tardive, Agria, Désirée). Séparer des pommes (éthylène).",
		href: "/potager"
	},
	{
		id: "courges",
		name: "Courges",
		group: "cave",
		unit: "kg",
		per: "person",
		qty: 12,
		integer: true,
		note: "12–15 °C, sec, pédoncule intact, jamais empilées. Butternut et potimarron tiennent souvent jusqu’en février.",
		href: "/conservation"
	},
	{
		id: "racines",
		name: "Carottes, betteraves, panais",
		group: "cave",
		unit: "kg",
		per: "person",
		qty: 15,
		integer: true,
		note: "Sable légèrement humide, 80–90 % d’humidité. En terre sous paillis si le gel n’est pas profond.",
		href: "/conservation"
	},
	{
		id: "alliums",
		name: "Ail et oignons secs",
		group: "cave",
		unit: "kg",
		per: "person",
		qty: 4,
		integer: true,
		note: "Sec et aéré, pas la cave humide des racines. Tresses ou clayettes. Jeter dès qu’un bulbe moisit.",
		href: "/potager"
	},
	{
		id: "pommes",
		name: "Pommes de garde",
		group: "cave",
		unit: "kg",
		per: "person",
		qty: 15,
		integer: true,
		note: "Une couche, variété de garde (Reinette, Canada, Belle de Boskoop). Loin des pommes de terre.",
		href: "/verger"
	},
	{
		id: "bocaux",
		name: "Bocaux de légumes",
		group: "sec",
		unit: "bocaux",
		per: "person",
		qty: 24,
		integer: true,
		note: "Coulis, haricots, ratatouille. Capsule concave, étiquette, 12–18 mois au sombre. Un bocal qui fuit : poubelle.",
		href: "/conservation"
	},
	{
		id: "lacto",
		name: "Lacto (choucroute, pickles)",
		group: "sec",
		unit: "bocaux",
		per: "person",
		qty: 6,
		integer: true,
		note: "Toujours sous saumure, 8–12 °C. 2 % de sel. Un voile noir ou une odeur de pourri : jeter.",
		href: "/conservation"
	},
	{
		id: "confitures",
		name: "Confitures et sirops",
		group: "sec",
		unit: "pots",
		per: "person",
		qty: 8,
		integer: true,
		note: "55–65 % de sucre pour une garde ambiante. Les allégées vivent au frigo.",
		href: "/conservation"
	},
	{
		id: "secs",
		name: "Légumineuses sèches",
		group: "sec",
		unit: "kg",
		per: "person",
		qty: 6,
		integer: true,
		note: "Haricots, lentilles, pois chiches. Bocaux + laurier contre la bruche. Fraîcheur 1–2 ans.",
		href: "/potager"
	},
	{
		id: "farine",
		name: "Farine",
		group: "sec",
		unit: "kg",
		per: "person",
		qty: 20,
		integer: true,
		note: "Blé ou sarrasin. Complète : au frais, elle rancit. Moudre tard. Le pain du foyer n’est pas encore l’autonomie calorique.",
		href: "/conservation"
	},
	{
		id: "miel",
		name: "Miel",
		group: "sec",
		unit: "kg",
		per: "person",
		qty: 1.5,
		integer: false,
		note: "Se conserve des années à l’abri de l’humidité. Cristallisé ≠ gâté. Pas pour les moins d’un an.",
		href: "/elevage"
	},
	{
		id: "noix",
		name: "Noix, noisettes, châtaignes sèches",
		group: "sec",
		unit: "kg",
		per: "person",
		qty: 3,
		integer: true,
		note: "Une couche, sec, trier le balanin. Farine de châtaigne : petits lots au frais (rance vite).",
		href: "/cueillette"
	},
	{
		id: "sachets",
		name: "Sachets de l’année",
		group: "semences",
		unit: "sachets",
		per: "household",
		qty: 15,
		integer: true,
		note: "Inventaire en janvier : ce qui a manqué en juillet. Variétés reproductibles pour le foyer, pas pour la vente.",
		href: "/potager"
	},
	{
		id: "ail-semence",
		name: "Ail et échalotes de semence",
		group: "semences",
		unit: "têtes",
		per: "household",
		qty: 30,
		integer: true,
		note: "Les plus beaux caïeux, au sec, plantés à l’automne. Renouveler la souche de temps en temps.",
		href: "/potager"
	},
	{
		id: "pdt-plants",
		name: "Plants de pomme de terre",
		group: "semences",
		unit: "kg",
		per: "household",
		qty: 8,
		integer: true,
		note: "Tubercules sains, germés au jour, pas de la cave à manger. Rotation 4 ans (doryphore, mildiou).",
		href: "/potager"
	},
	{
		id: "bois",
		name: "Bois sec prêt à brûler",
		group: "energie",
		unit: "stères",
		per: "heat",
		qty: 1,
		integer: false,
		note: "Le besoin vient de votre chauffage. Viser deux années d’avance : le bois de cet automne chauffe dans 18 mois.",
		href: "/energie"
	},
	{
		id: "eau",
		name: "Eau de pluie utile",
		group: "energie",
		unit: "L",
		per: "household",
		qty: 1e3,
		integer: true,
		note: "Cuve opaque, non potable. 1 000 L lissent quelques jours de canicule, pas l’été méditerranéen. Trop-plein vers une noue.",
		href: "/eau"
	}
];
var SEED_LIFE = [
	{
		id: "tomate-sem",
		name: "Tomate, poivron, aubergine",
		years: "4–6 ans",
		note: "Autogames. Fermenter la gelée de tomate 2–3 jours, rincer, sécher. Un sachet = une variété."
	},
	{
		id: "courge-sem",
		name: "Courges et courgettes",
		years: "4–6 ans",
		note: "S’hybrident entre elles. Une variété par jardin, ou accepter le mélange."
	},
	{
		id: "chou-sem",
		name: "Choux, radis, navet",
		years: "4–5 ans",
		note: "Allogames. Isolation longue. Pour débuter, racheter les choux."
	},
	{
		id: "laitue-sem",
		name: "Laitue, chicorée",
		years: "3–5 ans",
		note: "Laisser monter. 10 m d’écart entre laitues si l’on veut rester fidèle."
	},
	{
		id: "carotte-sem",
		name: "Carotte, panais, persil",
		years: "1–3 ans",
		note: "Bisannuelles. Panais : souvent 1 an seulement. Hiverner les plus belles racines."
	},
	{
		id: "oignon-sem",
		name: "Oignon (graine)",
		years: "1–2 ans",
		note: "La graine vieillit vite. Bulbilles et caïeux se gardent mieux que le sachet."
	},
	{
		id: "poireau-sem",
		name: "Poireau",
		years: "2–3 ans",
		note: "Graine noire, allogame. Un lot de porte-graines suffit au foyer."
	},
	{
		id: "haricot-sem",
		name: "Haricot, pois, fève, lentille",
		years: "3–4 ans",
		note: "Laisser sécher sur pied. Bruche : congeler 48 h les semences avant le bocal."
	},
	{
		id: "betterave-sem",
		name: "Betterave, bette, épinard",
		years: "4–5 ans",
		note: "Même famille (chénopodes) : éloigner les porte-graines."
	},
	{
		id: "concombre-sem",
		name: "Concombre, melon",
		years: "5–8 ans",
		note: "Chaleur pour la graine mûre (fruit très avancé, pas le cornichon jeune)."
	},
	{
		id: "basilic-sem",
		name: "Basilic, aromates annuels",
		years: "3–5 ans",
		note: "Laisser quelques hampes. Sec total avant le bocal."
	},
	{
		id: "fleurs-sem",
		name: "Souci, capucine, phacélie",
		years: "2–4 ans",
		note: "Utiles aux auxiliaires. Récolter sec, tamiser."
	}
];
function stockTarget(item, people, steres) {
	if (item.per === "person") return item.qty * Math.max(1, people);
	if (item.per === "heat") return Math.max(.5, Math.round(steres * 10) / 10);
	return item.qty;
}
//#endregion
export { stockTarget as i, STOCKS as n, STOCK_GROUPS as r, SEED_LIFE as t };
