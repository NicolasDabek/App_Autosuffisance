import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { t as Badge } from "./badge-BCJWBkyV.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CBNC-87B.mjs";
import { n as currentMonthIndex, t as MONTH_LABELS } from "./format-B0RhrTi8.mjs";
import { n as CONSERVE_CALENDAR, t as CONSERVE } from "./conservation-BEI2ZwqQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/conservation-DomXynZN.js
var import_jsx_runtime = require_jsx_runtime();
function ConservationPage() {
	const month = currentMonthIndex();
	const now = CONSERVE_CALENDAR.find((c) => c.month === month);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Nourrir",
			title: "Conservation",
			description: "Le potager de juillet ne nourrit janvier que si l’on transforme. Bocaux, lacto, séchage, cave : moins de kWh que le congélateur, plus de savoir-faire."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
				className: "text-lg",
				children: ["Ce mois-ci · ", MONTH_LABELS[month]]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: now?.focus }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2",
					children: [
						"Relier au",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/atelier",
							className: "text-primary underline-offset-2 hover:underline",
							children: "atelier"
						}),
						", au",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/calendrier",
							className: "text-primary underline-offset-2 hover:underline",
							children: "calendrier"
						}),
						", au",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/garde",
							className: "text-primary underline-offset-2 hover:underline",
							children: "garde-manger"
						}),
						", au",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/bricolage/$id",
							params: { id: "sechoir" },
							className: "text-primary underline-offset-2 hover:underline",
							children: "séchoir solaire"
						}),
						" ",
						"et au",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/bricolage/$id",
							params: { id: "garde-manger" },
							className: "text-primary underline-offset-2 hover:underline",
							children: "garde-manger"
						}),
						"."
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 lg:grid-cols-2",
			children: CONSERVE.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				id: m.id,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-lg",
					children: m.name
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: m.summary }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: m.bestFor.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								children: b
							}, b))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "Éviter."
							}),
							" ",
							m.notFor.join(" · ")
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "list-decimal space-y-1 pl-4",
							children: m.steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "Temps."
							}),
							" ",
							m.duration
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "Stockage."
							}),
							" ",
							m.storage
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "list-disc space-y-1 pl-4",
							children: m.pitfalls.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: p }, p))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "Droit."
							}),
							" ",
							m.legal
						] })
					]
				})]
			}, m.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
//#endregion
export { ConservationPage as component };
