import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-FqId949q.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useHavre } from "./store-G1Ku_bi5.mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { t as NumberField } from "./number-field-B7hIsrlq.mjs";
import { t as Badge } from "./badge-BCJWBkyV.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CBNC-87B.mjs";
import { t as Label } from "./label-2J_LU4QX.mjs";
import { a as frNumber, n as currentMonthIndex, t as MONTH_LABELS } from "./format-B0RhrTi8.mjs";
import { t as CROPS } from "./crops-CTfBakKE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/semis-DM_mhhUn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SEED_RATES = [
	{
		cropId: "tomate",
		perM2: 4,
		unit: "plants",
		note: "Semis au chaud, un plant / 50 cm."
	},
	{
		cropId: "courge",
		perM2: .5,
		unit: "plant",
		note: "Un pied occupe 2 m², compost au trou."
	},
	{
		cropId: "courgette",
		perM2: 1,
		unit: "plant",
		note: "Un pied suffit souvent pour deux personnes."
	},
	{
		cropId: "haricot",
		perM2: 25,
		unit: "graines",
		note: "Poquets de 5, ou ligne tous les 8 cm."
	},
	{
		cropId: "pdt",
		perM2: 4,
		unit: "plants",
		note: "Plants germés, 30 cm sur le rang."
	},
	{
		cropId: "chou",
		perM2: 4,
		unit: "plants",
		note: "Pépinière puis repiquage, filet."
	},
	{
		cropId: "carotte",
		perM2: .4,
		unit: "g",
		note: "Semis clair, sable mélangé, sol meuble."
	},
	{
		cropId: "poireau",
		perM2: 15,
		unit: "plants",
		note: "Pépinière dense, habillage des racines."
	},
	{
		cropId: "salade",
		perM2: 12,
		unit: "plants",
		note: "Échelonner, pas tout le sachet en un jour."
	},
	{
		cropId: "epinard",
		perM2: 2,
		unit: "g",
		note: "Printemps et fin d’été, pas la canicule."
	},
	{
		cropId: "ail",
		perM2: 40,
		unit: "caïeux",
		note: "Les plus beaux, pointe en haut."
	},
	{
		cropId: "oignon",
		perM2: 1,
		unit: "g",
		note: "Ou 30 bulbilles / m²."
	},
	{
		cropId: "betterave",
		perM2: 1.5,
		unit: "g",
		note: "Glomérules : éclaircir à 10 cm."
	},
	{
		cropId: "feve",
		perM2: 15,
		unit: "graines",
		note: "Automne ou fin d’hiver selon climat."
	},
	{
		cropId: "petit-pois",
		perM2: 20,
		unit: "graines",
		note: "Rames si variété à rames."
	},
	{
		cropId: "radis",
		perM2: 2,
		unit: "g",
		note: "Ligne courte chaque semaine."
	},
	{
		cropId: "aubergine",
		perM2: 3,
		unit: "plants",
		note: "Chaud, comme la tomate, plus frileuse."
	},
	{
		cropId: "poivron",
		perM2: 4,
		unit: "plants",
		note: "Semis tôt, chaleur de fond."
	},
	{
		cropId: "concombre",
		perM2: 1.5,
		unit: "plants",
		note: "Palisser pour gagner du sol."
	},
	{
		cropId: "panais",
		perM2: .4,
		unit: "g",
		note: "Graine fraîche : elle vieillit mal."
	},
	{
		cropId: "navet",
		perM2: .4,
		unit: "g",
		note: "Filet anti-altises dès le semis."
	},
	{
		cropId: "mache",
		perM2: 1,
		unit: "g",
		note: "Tasser le semis, garder humide."
	},
	{
		cropId: "bette",
		perM2: 1,
		unit: "g",
		note: "Éclaircir, les jeunes se mangent."
	},
	{
		cropId: "celeri",
		perM2: 8,
		unit: "plants",
		note: "Semis long, terre riche et fraîche."
	},
	{
		cropId: "brocoli",
		perM2: 3,
		unit: "plants",
		note: "Filet, récolte des jets secondaires."
	},
	{
		cropId: "echalote",
		perM2: 25,
		unit: "bulbes",
		note: "Sol drainé, pas de fumier frais."
	},
	{
		cropId: "topinambour",
		perM2: 4,
		unit: "tubercules",
		note: "Coin dédié : il revient."
	},
	{
		cropId: "kale",
		perM2: 4,
		unit: "plants",
		note: "Après les choux d’été, ou en même temps."
	},
	{
		cropId: "fenouil",
		perM2: 8,
		unit: "plants",
		note: "Semis d’été pour bulbes d’automne."
	},
	{
		cropId: "basilic",
		perM2: 6,
		unit: "plants",
		note: "Au pied des tomates, pas avant les saints de glace."
	},
	{
		cropId: "persil",
		perM2: .5,
		unit: "g",
		note: "Levée lente, terre fraîche."
	},
	{
		cropId: "roquette",
		perM2: .4,
		unit: "g",
		note: "Échelonner, filet si altises."
	},
	{
		cropId: "claytone",
		perM2: .3,
		unit: "g",
		note: "Semis de fin d’été, ne pas noyer."
	},
	{
		cropId: "physalis",
		perM2: 3,
		unit: "plants",
		note: "Même calendrier que la tomate."
	},
	{
		cropId: "oca",
		perM2: 6,
		unit: "tubercules",
		note: "Planter après les gelées, récolter après."
	},
	{
		cropId: "rutabaga",
		perM2: .3,
		unit: "g",
		note: "Semis plus tardif que le navet."
	},
	{
		cropId: "pakchoi",
		perM2: 12,
		unit: "plants",
		note: "Mieux en fin d’été."
	},
	{
		cropId: "oseille",
		perM2: 4,
		unit: "plants",
		note: "Vivace : un coin suffit des années."
	},
	{
		cropId: "coriandre",
		perM2: .5,
		unit: "g",
		note: "Série de fin d’été plus fiable."
	},
	{
		cropId: "raifort",
		perM2: 2,
		unit: "éclats",
		note: "Barrière : il colonise."
	},
	{
		cropId: "cardon",
		perM2: 1,
		unit: "plant",
		note: "Grand gabarit, compost au pied."
	},
	{
		cropId: "amarante",
		perM2: .3,
		unit: "g",
		note: "Chaleur, éclaircir pour les feuilles."
	},
	{
		cropId: "epeautre",
		perM2: 15,
		unit: "g",
		note: "Semis d’automne, battage à prévoir."
	},
	{
		cropId: "mais",
		perM2: 6,
		unit: "graines",
		note: "En carré pour la pollinisation, pas une seule ligne."
	},
	{
		cropId: "patate-douce",
		perM2: 3,
		unit: "plants",
		note: "Slips, chaleur, récolte avant gel."
	}
];
function seedRateFor(cropId) {
	return SEED_RATES.find((s) => s.cropId === cropId);
}
function allocate(ids, garden, areas) {
	const customSum = ids.filter((id) => (areas[id] ?? 0) > 0).reduce((acc, id) => acc + (areas[id] ?? 0), 0);
	const rest = ids.filter((id) => (areas[id] ?? 0) <= 0);
	const share = rest.length ? Math.max(0, garden - customSum) / rest.length : 0;
	const out = {};
	for (const id of ids) out[id] = (areas[id] ?? 0) > 0 ? areas[id] : share;
	return {
		out,
		customSum,
		share
	};
}
function SemisPage() {
	const garden = useHavre((s) => s.profile.gardenM2);
	const planIds = useHavre((s) => s.planIds) ?? [];
	const planM2 = useHavre((s) => s.planM2) ?? {};
	const toggle = useHavre((s) => s.togglePlan);
	const setM2 = useHavre((s) => s.setPlanM2);
	const clearAreas = useHavre((s) => s.clearPlanM2);
	const clearAll = useHavre((s) => s.clearPlan);
	const hydrated = useHavre((s) => s.hydrated);
	const month = currentMonthIndex();
	const families = (0, import_react.useMemo)(() => [...new Set(CROPS.map((c) => c.family))].sort((a, b) => a.localeCompare(b, "fr")), []);
	const [family, setFamily] = (0, import_react.useState)("all");
	const ids = hydrated ? planIds : [];
	const areas = hydrated ? planM2 : {};
	const selected = CROPS.filter((c) => ids.includes(c.id));
	const { out, customSum } = allocate(ids, garden, areas);
	const assigned = selected.reduce((acc, c) => acc + (out[c.id] ?? 0), 0);
	const kilos = selected.reduce((acc, c) => acc + (out[c.id] ?? 0) * c.yieldKgM2, 0);
	const familyArea = /* @__PURE__ */ new Map();
	for (const c of selected) familyArea.set(c.family, (familyArea.get(c.family) ?? 0) + (out[c.id] ?? 0));
	const tense = [...familyArea.entries()].filter(([, m2]) => assigned > 0 && m2 / assigned > .4);
	const visible = CROPS.filter((c) => family === "all" || c.family === family);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Nourrir",
			title: "Plan de semis",
			description: "On choisit les cultures, Havre répartit les mètres carrés du potager et estime graines et kilos. Une famille qui dépasse 40 % de la surface fatigue le sol : c’est le signal de rotation, pas une interdiction."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-4 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Potager déclaré"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-2xl tabular-nums",
							children: [garden, " m²"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "text-xs text-primary underline-offset-2 hover:underline",
							children: "Ajuster sur le tableau de bord"
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Cultures au plan"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl tabular-nums",
							children: selected.length
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [frNumber(assigned, 1), " m² affectés"]
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Ordre de grandeur"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-2xl tabular-nums",
							children: [
								"~",
								frNumber(kilos, 0),
								" kg"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "si l’année n’est pas mauvaise"
						})
					]
				}) })
			]
		}),
		customSum > garden + .05 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-4 rounded-lg border border-border bg-muted/60 px-3 py-2 text-sm",
			children: [
				"Les mètres saisis à la main (",
				frNumber(customSum, 1),
				") dépassent le potager (",
				garden,
				" m²). Le reste des cultures tombe à zéro tant que ce n’est pas corrigé."
			]
		}) : ids.length > 0 && ids.every((id) => (areas[id] ?? 0) > 0) && garden - customSum > .5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-4 rounded-lg border border-border bg-muted/60 px-3 py-2 text-sm",
			children: [
				"Il reste ",
				frNumber(garden - customSum, 1),
				" m² non couverts. Laissez un 0 pour que Havre les répartisse, ou gardez une planche de repos."
			]
		}) : null,
		tense.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-4 rounded-lg border border-border bg-muted/60 px-3 py-2 text-sm",
			children: [
				"Rotation tendue : ",
				tense.map(([name, m2]) => `${name} ${frNumber(m2 / assigned * 100, 0)} %`).join(" · "),
				". Étaler sur une autre famille, ou accepter et noter la planche pour l’an prochain."
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex flex-wrap items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Choisir"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					disabled: !hydrated,
					onClick: () => clearAreas(),
					children: "Répartir également"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					disabled: !hydrated,
					onClick: () => clearAll(),
					children: "Vider le plan"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setFamily("all"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: family === "all" ? "secondary" : "outline",
					children: "Toutes familles"
				})
			}), families.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setFamily(f),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: family === f ? "secondary" : "outline",
					children: f
				})
			}, f))]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex flex-wrap gap-1.5",
			children: visible.map((c) => {
				const on = ids.includes(c.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: !hydrated,
					onClick: () => toggle(c.id),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: on ? "default" : "outline",
						children: c.name
					})
				}, c.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-xl font-semibold",
			children: "Mètres et semences"
		}),
		selected.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted-foreground",
			children: "Aucune culture. Le plan reste dans ce navigateur."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 grid gap-3 sm:grid-cols-2",
			children: selected.map((c) => {
				const m2 = out[c.id] ?? 0;
				const rate = seedRateFor(c.id);
				const manual = (areas[c.id] ?? 0) > 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					id: c.id,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
						className: "pb-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-base",
								children: c.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: [
									c.family,
									" · ",
									c.rotationGap
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-xs text-muted-foreground underline-offset-2 hover:underline",
								onClick: () => toggle(c.id),
								children: "Retirer"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "grid gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: `m2-${c.id}`,
								children: "m² saisis (0 = part automatique)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
								id: `m2-${c.id}`,
								value: manual ? areas[c.id] : 0,
								onValueChange: (v) => setM2(c.id, v),
								min: 0,
								max: 500,
								emptyValue: 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground",
								children: [
									"Affecté ",
									frNumber(m2, 1),
									" m² · ~",
									frNumber(m2 * c.yieldKgM2, 1),
									" kg · besoin azote ",
									c.nNeed
								]
							}),
							rate ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground",
								children: [
									"Semence ≈ ",
									frNumber(rate.perM2 * m2, rate.perM2 * m2 >= 10 ? 0 : 1),
									" ",
									rate.unit,
									". ",
									rate.note
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "Dose de semence : voir le sachet, la fiche ne fixe pas de grammage."
							})
						]
					})] })
				}, c.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-xl font-semibold",
			children: "Calendrier du plan"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-3 grid gap-2 sm:grid-cols-2",
			children: MONTH_LABELS.map((label, i) => {
				const sow = selected.filter((c) => c.monthsSow.includes(i));
				const har = selected.filter((c) => c.monthsHarvest.includes(i));
				const current = i === month;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: `rounded-lg border px-3 py-3 ${current ? "border-primary" : "border-border"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-medium capitalize",
							children: [label, current ? " · maintenant" : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: ["Semer : ", sow.length ? sow.map((c) => c.name).join(", ") : "—"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: ["Récolter : ", har.length ? har.map((c) => c.name).join(", ") : "—"]
						})
					]
				}, label);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 text-sm text-muted-foreground",
			children: [
				"Les fiches détaillées restent au",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/potager",
					className: "text-primary underline-offset-2 hover:underline",
					children: "potager"
				}),
				". Ce qui déborde se transforme à l’",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/atelier",
					className: "text-primary underline-offset-2 hover:underline",
					children: "atelier"
				}),
				"."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
//#endregion
export { SemisPage as component };
