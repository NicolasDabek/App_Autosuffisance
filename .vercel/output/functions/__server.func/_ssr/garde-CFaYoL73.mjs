import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useHavre } from "./store-G1Ku_bi5.mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { t as NumberField } from "./number-field-B7hIsrlq.mjs";
import { t as Badge } from "./badge-BCJWBkyV.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CBNC-87B.mjs";
import { a as frNumber } from "./format-B0RhrTi8.mjs";
import { n as energyStats } from "./calculators-8RSGes5A.mjs";
import { t as Progress } from "./progress-DCOEff7P.mjs";
import { i as stockTarget, n as STOCKS, r as STOCK_GROUPS, t as SEED_LIFE } from "./stocks-C8c6hPvR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/garde-CFaYoL73.js
var import_jsx_runtime = require_jsx_runtime();
function GardePage() {
	const profile = useHavre((s) => s.profile);
	const stocks = useHavre((s) => s.stocks) ?? {};
	const setStock = useHavre((s) => s.setStock);
	const hydrated = useHavre((s) => s.hydrated);
	const steres = energyStats(profile).steres;
	const rows = STOCKS.map((item) => {
		const target = stockTarget(item, profile.people, steres);
		const qty = hydrated ? stocks[item.id] ?? 0 : 0;
		return {
			item,
			target,
			qty,
			pct: target > 0 ? Math.min(100, qty / target * 100) : 0
		};
	});
	const covered = rows.filter((r) => r.pct >= 100).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Nourrir",
			title: "Garde-manger",
			description: "Ce qui est déjà en cave, en bocaux et en sachets, comparé à un hiver de foyer. Les chiffres sont des ordres de grandeur, pas une ration. Tout reste dans ce navigateur."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-4 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Foyer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl tabular-nums",
						children: [profile.people, " pers."]
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Postes couverts"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl tabular-nums",
						children: [
							covered,
							" / ",
							rows.length
						]
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Bois si tout le chauffage"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-2xl tabular-nums",
							children: [frNumber(steres, 1), " st"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/energie",
							className: "text-xs text-primary underline-offset-2 hover:underline",
							children: "Ajuster le logement"
						})
					]
				}) })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-10",
			children: STOCK_GROUPS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold",
				children: g.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-3",
				children: rows.filter((r) => r.item.group === g.id).map(({ item, target, qty, pct }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					id: item.id,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
						className: "pb-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-base",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: item.note
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: pct >= 100 ? "ok" : "muted",
								children: pct >= 100 ? "Couvert" : `${frNumber(pct, 0)} %`
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "grid gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: pct }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-end gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-muted-foreground",
									children: [
										"En stock (",
										item.unit,
										")"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
									className: "w-28",
									integer: item.integer !== false,
									min: 0,
									value: qty,
									onValueChange: (n) => setStock(item.id, n)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "pb-2 text-sm text-muted-foreground",
								children: [
									"Objectif ",
									frNumber(target, item.integer === false ? 1 : 0),
									" ",
									item.unit,
									" · ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: item.href,
										className: "text-primary underline-offset-2 hover:underline",
										children: "Voir la fiche"
									})
								]
							})]
						})]
					})] })
				}, item.id))
			})] }, g.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-12 font-display text-xl font-semibold",
			children: "Combien de temps une graine tient"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-2xl text-sm text-muted-foreground",
			children: "Au sec, au frais, à l’obscurité. Un sachet tiède dans la serre perd une année. Libre pour le jardin du foyer — la vente de semences est un autre cadre."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 grid gap-3 sm:grid-cols-2",
			children: SEED_LIFE.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				id: s.id,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-base",
						children: s.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						children: s.years
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "text-sm text-muted-foreground",
					children: s.note
				})] })
			}, s.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
//#endregion
export { GardePage as component };
