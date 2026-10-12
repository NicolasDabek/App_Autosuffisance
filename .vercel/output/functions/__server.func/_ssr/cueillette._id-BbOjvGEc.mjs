import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-FqId949q.mjs";
import { b as Link, q as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useHavre } from "./store-G1Ku_bi5.mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CBNC-87B.mjs";
import { t as MONTH_LABELS } from "./format-B0RhrTi8.mjs";
import { t as FORAGE } from "./forage-DckquQhk.mjs";
import { r as Route$2 } from "./router-BDx6cqcl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cueillette._id-BbOjvGEc.js
var import_jsx_runtime = require_jsx_runtime();
function ForagePage() {
	const { id } = Route$2.useParams();
	const f = FORAGE.find((x) => x.id === id);
	if (!f) throw notFound();
	const toggle = useHavre((s) => s.toggleForageSaved);
	const saved = useHavre((s) => s.forageIds.includes(id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: f.kind,
			title: f.name,
			description: f.latin,
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: saved ? "outline" : "default",
				onClick: () => toggle(id),
				children: saved ? "Retirer du carnet" : "Garder dans le carnet"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-6 text-sm text-muted-foreground",
			children: [
				"Saison : ",
				f.months.map((m) => MONTH_LABELS[m]).join(", "),
				" · ",
				f.habitats.join(" · ")
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Usage" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "grid gap-3 text-sm leading-relaxed text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: f.edible }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-foreground",
						children: "Conservation."
					}),
					" ",
					f.conserve
				] })]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Confusion et droit" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "grid gap-3 text-sm leading-relaxed text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-destructive",
							children: "Risque de confusion."
						}),
						" ",
						f.lookalikes
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Précautions."
						}),
						" ",
						f.caution
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Légal."
						}),
						" ",
						f.legal
					] })
				]
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			variant: "outline",
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/cueillette",
				children: "Retour au guide"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
//#endregion
export { ForagePage as component };
