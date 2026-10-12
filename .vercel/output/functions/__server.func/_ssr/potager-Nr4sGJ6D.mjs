import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useHavre } from "./store-G1Ku_bi5.mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { t as Badge } from "./badge-BCJWBkyV.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CBNC-87B.mjs";
import { t as MONTH_LABELS } from "./format-B0RhrTi8.mjs";
import { n as ROTATION_GUIDE, r as SEED_SAVING, t as CROPS } from "./crops-CTfBakKE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/potager-Nr4sGJ6D.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SEASONS = [
	{
		id: "all",
		label: "Toutes saisons"
	},
	{
		id: "printemps",
		label: "Printemps"
	},
	{
		id: "ete",
		label: "Été"
	},
	{
		id: "automne",
		label: "Automne"
	},
	{
		id: "hiver",
		label: "Hiver"
	},
	{
		id: "perenne",
		label: "Vivaces"
	}
];
function PotagerPage() {
	const garden = useHavre((s) => s.profile.gardenM2);
	const month = (/* @__PURE__ */ new Date()).getMonth();
	const now = CROPS.filter((c) => c.monthsSow.includes(month) || c.monthsHarvest.includes(month));
	const gourmandes = CROPS.filter((c) => c.nNeed === "fort");
	const estimated = Math.round(garden * 2.2);
	const families = (0, import_react.useMemo)(() => [...new Set(CROPS.map((c) => c.family))].sort(), []);
	const [season, setSeason] = (0, import_react.useState)("all");
	const [family, setFamily] = (0, import_react.useState)("all");
	const [nNeed, setNNeed] = (0, import_react.useState)("all");
	const list = CROPS.filter((c) => {
		if (season !== "all" && c.season !== season) return false;
		if (family !== "all" && c.family !== family) return false;
		if (nNeed !== "all" && c.nNeed !== nNeed) return false;
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Nourrir",
			title: "Potager",
			description: "Cultures, rotations, faim d’azote et semences. Reliez cette page aux déchets : le compost mûr nourrit les gourmandes, pas les carottes."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Surface potager / verger"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-display text-2xl font-semibold tabular-nums",
						children: [garden, " m²"]
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Ordre de grandeur récolte"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-display text-2xl font-semibold tabular-nums",
							children: [
								"~",
								estimated,
								" kg/an"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "2,2 kg/m², mix conservateur"
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "À relier"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/semis",
							className: "mt-1 block text-sm text-primary underline-offset-2 hover:underline",
							children: "Plan de semis"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dechets",
							className: "mt-1 block text-sm text-primary underline-offset-2 hover:underline",
							children: "Plan d’apports déchets → sol"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/conservation",
							className: "mt-1 block text-sm text-primary underline-offset-2 hover:underline",
							children: "Transformer la récolte"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sol",
							className: "mt-1 block text-sm text-primary underline-offset-2 hover:underline",
							children: "Sol, engrais verts, ravageurs"
						})
					]
				}) })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-xl font-semibold",
			children: "En ce moment"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex flex-wrap gap-2",
			children: now.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
				variant: "secondary",
				children: [
					c.name,
					" ",
					c.monthsSow.includes(month) ? "· semer" : "· récolter"
				]
			}, c.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-xl font-semibold",
			children: "Rotation type sur 4 planches"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
			children: ROTATION_GUIDE.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
				className: "text-base",
				children: [
					r.year,
					" · ",
					r.slot
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "text-sm text-muted-foreground",
				children: r.examples
			})] }, r.year))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-xl font-semibold",
			children: "Fiches cultures"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex flex-wrap gap-1.5",
			children: SEASONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setSeason(s.id),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: season === s.id ? "default" : "outline",
					children: s.label
				})
			}, s.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex flex-wrap gap-1.5",
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
			className: "mt-2 flex flex-wrap gap-1.5",
			children: [
				"all",
				"faible",
				"moyen",
				"fort"
			].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setNNeed(n),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: nNeed === n ? "secondary" : "outline",
					children: n === "all" ? "Tous azotes" : `N ${n}`
				})
			}, n))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 overflow-x-auto rounded-xl bg-card shadow-[var(--shadow-border)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[640px] text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "border-b border-border text-xs uppercase tracking-wider text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Culture"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Famille"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "N"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "kg/m²"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Fenêtre"
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					id: c.id,
					className: "border-b border-border last:border-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: c.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-xs text-xs text-muted-foreground",
								children: c.notes
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 text-muted-foreground",
							children: c.family
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 capitalize",
							children: c.nNeed
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 tabular-nums",
							children: c.yieldKgM2
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-4 py-3 text-xs text-muted-foreground",
							children: [
								"Semis ",
								c.monthsSow.map((m) => MONTH_LABELS[m].slice(0, 3)).join(", "),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Récolte ",
								c.monthsHarvest.map((m) => MONTH_LABELS[m].slice(0, 3)).join(", ")
							]
						})
					]
				}, c.id)) })]
			})
		}),
		list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted-foreground",
			children: "Aucune culture pour ce filtre."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-xs text-muted-foreground",
			children: [list.length, " fiches affichées."]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-xl font-semibold",
			children: "Garder ses semences"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 max-w-2xl text-sm text-muted-foreground",
			children: [
				"Libre pour le jardin du foyer. La vente de sachets est un autre cadre. Voir",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/legal",
					className: "text-primary underline-offset-2 hover:underline",
					children: "Cadre légal"
				}),
				"."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 grid gap-3 sm:grid-cols-2",
			children: SEED_SAVING.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-base",
					children: s.crop
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "muted",
					children: s.ease
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "text-sm text-muted-foreground",
				children: s.note
			})] }, s.crop))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 text-sm text-muted-foreground",
			children: [
				"Les plus gourmandes (",
				gourmandes.map((g) => g.name).join(", "),
				") doivent recevoir le compost de poules et lapins — jamais cru."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
//#endregion
export { PotagerPage as component };
