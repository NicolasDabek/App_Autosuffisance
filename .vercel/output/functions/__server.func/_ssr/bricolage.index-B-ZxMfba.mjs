import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { t as Badge } from "./badge-BCJWBkyV.mjs";
import { t as DIY } from "./diy-CxNoRmqG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bricolage.index-B-ZxMfba.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATS = [
	{
		id: "all",
		label: "Tous"
	},
	{
		id: "abri",
		label: "Abris"
	},
	{
		id: "sol",
		label: "Sol"
	},
	{
		id: "eau",
		label: "Eau"
	},
	{
		id: "energie",
		label: "Énergie"
	},
	{
		id: "conservation",
		label: "Conservation"
	},
	{
		id: "cloture",
		label: "Clôture"
	}
];
function BricoPage() {
	const [cat, setCat] = (0, import_react.useState)("all");
	const list = DIY.filter((d) => cat === "all" || d.category === cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Habitat",
			title: "Bricolage d’autonomie",
			description: "Guides courts, matériaux, points de droit. Un rocket artisanal n’est pas un poêle d’assurance."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 flex flex-wrap gap-1.5",
			children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setCat(c.id),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: cat === c.id ? "default" : "outline",
					children: c.label
				})
			}, c.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3 sm:grid-cols-2",
			children: list.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/bricolage/$id",
				params: { id: d.id },
				className: "block rounded-xl bg-card p-4 shadow-[var(--shadow-border)] transition-shadow hover:shadow-[var(--shadow-border-hover)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: d.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "muted",
						children: [d.difficulty, "/3"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: [
						d.time,
						" · ",
						d.cost
					]
				})]
			}) }, d.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
//#endregion
export { BricoPage as component };
