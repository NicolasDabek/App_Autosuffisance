import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { t as NumberField } from "./number-field-B7hIsrlq.mjs";
import { t as Badge } from "./badge-BCJWBkyV.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CBNC-87B.mjs";
import { t as Label } from "./label-2J_LU4QX.mjs";
import { a as frNumber, n as currentMonthIndex } from "./format-B0RhrTi8.mjs";
import { t as CONSERVE } from "./conservation-BEI2ZwqQ.mjs";
import { t as RECIPES } from "./recipes-DjiSN3j-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/atelier-CQYYUJGl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function scaledText(qty, scale) {
	const v = qty * scale;
	const digits = v >= 20 || Math.abs(v - Math.round(v)) < .05 ? 0 : 1;
	return frNumber(v, digits);
}
function AtelierPage() {
	const month = currentMonthIndex();
	const [id, setId] = (0, import_react.useState)(RECIPES[0].id);
	const recipe = RECIPES.find((r) => r.id === id) ?? RECIPES[0];
	const [kg, setKg] = (0, import_react.useState)(recipe.baseKg);
	const scale = recipe.baseKg > 0 ? kg / recipe.baseKg : 0;
	const method = CONSERVE.find((m) => m.id === recipe.method);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Nourrir",
			title: "Atelier",
			description: "On pèse la récolte, Havre met à l’échelle sel, sucre, bocaux. Les temps de stérilisation restent des ordres de grandeur : un aliment peu acide ne se traite pas comme une confiture."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "order-2 flex flex-col gap-2 lg:order-1 lg:col-span-2",
				children: RECIPES.map((r) => {
					const on = r.id === recipe.id;
					const now = r.months.includes(month);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setId(r.id);
							setKg(r.baseKg);
						},
						className: `w-full rounded-lg border px-3 py-3 text-left ${on ? "border-primary bg-muted/60" : "border-border hover:bg-muted/40"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: r.name
							}), now ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								children: "Ce mois"
							}) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-xs text-muted-foreground",
							children: r.summary
						})]
					}) }, r.id);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "order-1 lg:order-2 lg:col-span-3",
				id: recipe.id,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: recipe.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: recipe.summary
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								children: method?.name ?? recipe.method
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "muted",
								children: recipe.time
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
									htmlFor: "kg-batch",
									children: ["Kilos de ", recipe.baseLabel]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
									id: "kg-batch",
									className: "mt-1.5",
									value: kg,
									onValueChange: setKg,
									min: 0,
									max: 40,
									emptyValue: recipe.baseKg
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: [
										"Recette de référence : ",
										frNumber(recipe.baseKg, recipe.baseKg < 1 ? 1 : 0),
										" kg."
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium",
							children: "Pour cette pesée"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-2 space-y-1 text-sm text-muted-foreground",
							children: [recipe.ingredients.map((ing) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								ing.label,
								" — ",
								scaledText(ing.qty, scale),
								" ",
								ing.unit
							] }, ing.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Contenants — ",
								scaledText(recipe.jars, scale),
								" × ",
								recipe.jarSize
							] })]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium",
							children: "Gestes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-2 list-decimal space-y-1 pl-4 text-sm text-muted-foreground",
							children: recipe.steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-lg bg-muted/70 px-3 py-2 text-sm",
							children: recipe.caution
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								"Méthode complète :",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/conservation",
									hash: recipe.method,
									className: "text-primary underline-offset-2 hover:underline",
									children: method?.name ?? "conservation"
								}),
								". Ce qui est déjà en cave se note au",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/garde",
									className: "text-primary underline-offset-2 hover:underline",
									children: "garde-manger"
								}),
								"."
							]
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, { children: "Havre met une recette de foyer à l’échelle. Ce n’est pas un barème de conserverie agréée. Les temps de chaleur sont indicatifs : en cas de doute sur un bocal (odeur, capsule plate, trouble), on jette sans goûter." })
	] });
}
//#endregion
export { AtelierPage as component };
