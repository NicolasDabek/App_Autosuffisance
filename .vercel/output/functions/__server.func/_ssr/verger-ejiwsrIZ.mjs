import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useHavre } from "./store-G1Ku_bi5.mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { t as Badge } from "./badge-BCJWBkyV.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CBNC-87B.mjs";
import { t as MONTH_LABELS } from "./format-B0RhrTi8.mjs";
import { n as climateById } from "./climate-CGxKgulf.mjs";
import { t as TREES } from "./trees-B_DX_v6H.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verger-ejiwsrIZ.js
var import_jsx_runtime = require_jsx_runtime();
function VergerPage() {
	const climate = useHavre((s) => s.profile.climate);
	const info = climateById(climate);
	const suited = TREES.filter((t) => t.climates === "all" || t.climates.includes(climate));
	const others = TREES.filter((t) => t.climates !== "all" && !t.climates.includes(climate));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Nourrir",
			title: "Verger",
			description: `Climat ${info.name} : ${info.regions}. Les ruches, le compost et les poules sous les cépées ferment la boucle.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: "ok",
					children: ["Adaptés : ", suited.length]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: "muted",
					children: ["Limites climatiques : ", others.length]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: suited.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreeCard, {
				t,
				tone: "ok"
			}, t.id))
		}),
		others.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-xl font-semibold",
			children: "Plus risqués ici"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 grid gap-4 md:grid-cols-2",
			children: others.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreeCard, {
				t,
				tone: "warn"
			}, t.id))
		})] }) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
function ButtonLink() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex flex-wrap gap-x-3 gap-y-1 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/chaines",
				search: { id: "ruches-verger" },
				className: "text-primary underline-offset-2 hover:underline",
				children: "Chaîne ruches · verger"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/conservation",
				className: "text-primary underline-offset-2 hover:underline",
				children: "Cave, séchage, confitures"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/sol",
				className: "text-primary underline-offset-2 hover:underline",
				children: "Tavelure, carpocapse, cloque"
			})
		]
	});
}
function TreeCard({ t, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		id: t.id,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				className: "text-lg",
				children: t.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: tone === "ok" ? "ok" : "warn",
				children: tone === "ok" ? "Climat OK" : "Limite"
			})]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "grid gap-2 text-sm text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.notes }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: "Pollinisation."
					}),
					" ",
					t.pollination
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: "Espacement."
					}),
					" ",
					t.spacingM,
					" m · fruit vers ",
					t.yearsToFruit,
					" ans · ",
					t.yieldKg
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: "Récolte."
					}),
					" ",
					t.harvestMonths.map((m) => MONTH_LABELS[m]).join(", "),
					" — ",
					t.uses
				] }),
				t.rootstock ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: "Porte-greffe."
					}),
					" ",
					t.rootstock
				] }) : null
			]
		})]
	});
}
//#endregion
export { VergerPage as component };
