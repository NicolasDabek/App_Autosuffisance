import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-FqId949q.mjs";
import { t as useHavre } from "./store-G1Ku_bi5.mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { t as Input } from "./input-DXePJzje.mjs";
import { t as NumberField } from "./number-field-B7hIsrlq.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CBNC-87B.mjs";
import { t as Label } from "./label-2J_LU4QX.mjs";
import { a as frNumber, r as frDate, s as todayISO } from "./format-B0RhrTi8.mjs";
import { r as foodAutonomy } from "./calculators-8RSGes5A.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BdlOuI5A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal-7vez38Iz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KINDS = [
	{
		id: "recolte",
		label: "Récolte potager / verger",
		unit: "kg",
		kcal: 400
	},
	{
		id: "oeufs",
		label: "Œufs",
		unit: "pièces",
		kcal: 70
	},
	{
		id: "viande",
		label: "Viande (carcasse)",
		unit: "kg",
		kcal: 1800
	},
	{
		id: "miel",
		label: "Miel",
		unit: "kg",
		kcal: 3e3
	},
	{
		id: "cueillette",
		label: "Cueillette",
		unit: "kg",
		kcal: 350
	},
	{
		id: "compost",
		label: "Compost sorti",
		unit: "kg"
	},
	{
		id: "bois",
		label: "Bois brûlé",
		unit: "stères"
	},
	{
		id: "pv",
		label: "Électricité PV",
		unit: "kWh"
	},
	{
		id: "eau",
		label: "Eau de pluie utilisée",
		unit: "L"
	}
];
function JournalPage() {
	const logs = useHavre((s) => s.logs);
	const add = useHavre((s) => s.addLog);
	const remove = useHavre((s) => s.removeLog);
	const profile = useHavre((s) => s.profile);
	const reset = useHavre((s) => s.resetAll);
	const food = foodAutonomy(profile, logs);
	const [kind, setKind] = (0, import_react.useState)("oeufs");
	const meta = KINDS.find((k) => k.id === kind);
	const [label, setLabel] = (0, import_react.useState)("Œufs");
	const [qty, setQty] = (0, import_react.useState)(6);
	const [date, setDate] = (0, import_react.useState)(todayISO());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Savoir",
			title: "Journal",
			description: "Récoltes, œufs, kWh, stères, litres. C’est ce journal qui fait bouger le pourcentage d’autonomie du tableau de bord."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "kcal journalisées / besoin"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl tabular-nums",
						children: [
							frNumber(food.produced, 0),
							" / ",
							frNumber(food.need, 0)
						]
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Autonomie alimentaire"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl tabular-nums",
						children: [frNumber(food.pct, 1), " %"]
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Entrées"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl tabular-nums",
						children: logs.length
					})]
				}) })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Ajouter" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5 sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: kind,
							onValueChange: (v) => {
								const k = v;
								setKind(k);
								const m = KINDS.find((x) => x.id === k);
								if (m) setLabel(m.label);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: KINDS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: k.id,
								children: k.label
							}, k.id)) })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Libellé" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: label,
							onChange: (e) => setLabel(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: [
							"Quantité (",
							meta.unit,
							")"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
							min: 0,
							value: qty,
							onValueChange: setQty
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "date",
							value: date,
							onChange: (e) => setDate(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2 lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => add({
								date,
								kind,
								label,
								qty,
								unit: meta.unit,
								kcal: meta.kcal ? qty * meta.kcal : void 0
							}),
							children: "Enregistrer"
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 divide-y divide-border rounded-xl bg-card shadow-[var(--shadow-border)]",
			children: logs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "p-5 text-sm text-muted-foreground",
				children: "Aucune entrée. Le tableau de bord restera à 0 %."
			}) : logs.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between gap-3 px-4 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted-foreground",
						children: [frDate(l.date), " · "]
					}),
					l.label,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums",
						children: [
							l.qty,
							" ",
							l.unit
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => remove(l.id),
					children: "Retirer"
				})]
			}, l.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			className: "mt-6",
			onClick: () => reset(),
			children: "Réinitialiser le foyer (navigateur)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
//#endregion
export { JournalPage as component };
