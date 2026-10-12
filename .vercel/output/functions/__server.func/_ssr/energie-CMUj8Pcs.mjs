import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useHavre } from "./store-G1Ku_bi5.mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { t as NumberField } from "./number-field-B7hIsrlq.mjs";
import { t as Badge } from "./badge-BCJWBkyV.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CBNC-87B.mjs";
import { t as Label } from "./label-2J_LU4QX.mjs";
import { a as frNumber, i as frEuro } from "./format-B0RhrTi8.mjs";
import { n as energyStats, t as ENERGY_SCENARIOS } from "./calculators-8RSGes5A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/energie-CMUj8Pcs.js
var import_jsx_runtime = require_jsx_runtime();
function EnergiePage() {
	const profile = useHavre((s) => s.profile);
	const patchHousing = useHavre((s) => s.patchHousing);
	const stats = energyStats(profile);
	const bill = profile.housing.kwhElecYear * .22 + profile.housing.kwhHeatYear * .12;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Habitat",
			title: "Énergie et chauffage",
			description: "Isoler, puis chauffer, puis produire. Les montants d’aides changent : France Rénov’ reste la porte d’entrée, pas un devis de salon."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Votre logement" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "kWh électricité / an" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
							integer: true,
							min: 0,
							value: profile.housing.kwhElecYear,
							onValueChange: (kwhElecYear) => patchHousing({ kwhElecYear })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "kWh chaleur / an" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
							integer: true,
							min: 0,
							value: profile.housing.kwhHeatYear,
							onValueChange: (kwhHeatYear) => patchHousing({ kwhHeatYear })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Stères si tout le chaud au bois"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl tabular-nums",
							children: frNumber(stats.steres, 1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: stats.climate.woodNote
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "PV toiture (ordre, sans batterie)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-2xl tabular-nums",
							children: [frNumber(stats.pv.kwc, 1), " kWc"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								"~",
								frNumber(stats.pv.kwh, 0),
								" kWh brut · ",
								frNumber(stats.elecCov, 0),
								" % des besoins élec en autoconsommation diurne"
							]
						})
					] })
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-4 text-sm text-muted-foreground",
			children: [
				"Facture d’ordre de grandeur (0,22 €/kWh élec, 0,12 €/kWh chaleur) : ",
				frEuro(bill),
				" / an. Ce n’est pas un devis."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 lg:grid-cols-2",
			children: ENERGY_SCENARIOS.map((s) => {
				const save = bill * (s.yearlySavePct / 100);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-lg",
						children: s.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "muted",
						children: [
							"complexité ",
							s.complexity,
							"/3"
						]
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s.summary }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-foreground",
							children: [
								frEuro(s.capex[0]),
								"–",
								frEuro(s.capex[1]),
								" · ~",
								s.yearlySavePct,
								" % de facture (",
								frEuro(save),
								") · retour ",
								s.timeToReturnYears[0],
								"–",
								s.timeToReturnYears[1],
								" ans"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Autonomie chaleur ~",
							s.autonomyHeatPct,
							" % · électricité ~",
							s.autonomyElecPct,
							" %"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "list-decimal space-y-1 pl-4",
							children: s.steps.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "list-disc space-y-1 pl-4",
							children: s.caveats.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
						})
					]
				})] }, s.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/bricolage/$id",
					params: { id: "stock-bois" },
					className: "text-primary underline-offset-2 hover:underline",
					children: "Abri à bois"
				}),
				" · ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/legal",
					className: "text-primary underline-offset-2 hover:underline",
					children: "Aides et air"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
//#endregion
export { EnergiePage as component };
