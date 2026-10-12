import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ANIMALS } from "./animals-BCW_J0tS.mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { t as Input } from "./input-DXePJzje.mjs";
import { t as Badge } from "./badge-BCJWBkyV.mjs";
import { t as LegalBadge } from "./legal-badge-DQTs_IOT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/elevage.index-CzISiUNu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATS = [
	{
		id: "all",
		label: "Tous"
	},
	{
		id: "volaille",
		label: "Volailles"
	},
	{
		id: "lagomorphe",
		label: "Lapins"
	},
	{
		id: "abeille",
		label: "Abeilles"
	},
	{
		id: "ruminant",
		label: "Ruminants"
	},
	{
		id: "porcin",
		label: "Porcins"
	},
	{
		id: "insecte",
		label: "Insectes"
	},
	{
		id: "mollusque",
		label: "Mollusques"
	},
	{
		id: "poisson",
		label: "Poissons"
	}
];
function ElevagePage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("all");
	const [legal, setLegal] = (0, import_react.useState)("all");
	const list = (0, import_react.useMemo)(() => {
		return ANIMALS.filter((a) => {
			if (cat !== "all" && a.category !== cat) return false;
			if (legal !== "all" && a.legal.level !== legal) return false;
			if (q && !`${a.name} ${a.summary}`.toLowerCase().includes(q.toLowerCase())) return false;
			return true;
		});
	}, [
		q,
		cat,
		legal
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Nourrir",
			title: "Élevage légal, foyer privé",
			description: "Fiches pour l’autoconsommation en France : déclaration, identification, abattage familial, voisinage. Rien ici n’autorise la vente."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-col gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Filtrer une espèce…",
					value: q,
					onChange: (e) => setQ(e.target.value),
					className: "max-w-sm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCat(c.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: cat === c.id ? "default" : "outline",
							children: c.label
						})
					}, c.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: [
						"all",
						"simple",
						"declaration",
						"identification",
						"complexe"
					].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setLegal(l),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: legal === l ? "secondary" : "outline",
							children: l === "all" ? "Tous cadres" : l
						})
					}, l))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-border rounded-xl bg-card shadow-[var(--shadow-border)]",
			children: list.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/elevage/$id",
				params: { id: a.id },
				className: cn("flex flex-col gap-2 px-5 py-4 transition-colors hover:bg-muted/50 sm:flex-row sm:items-center sm:justify-between"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: a.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 max-w-xl text-sm text-muted-foreground",
					children: a.summary
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalBadge, { level: a.legal.level }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs tabular-nums text-muted-foreground",
						children: [
							a.minSurfaceM2,
							" m² · ",
							a.hoursPerWeek,
							" h/sem."
						]
					})]
				})]
			}) }, a.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
//#endregion
export { ElevagePage as component };
