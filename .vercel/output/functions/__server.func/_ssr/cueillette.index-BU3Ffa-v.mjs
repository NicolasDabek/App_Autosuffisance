import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { t as Input } from "./input-DXePJzje.mjs";
import { t as Badge } from "./badge-BCJWBkyV.mjs";
import { n as currentMonthIndex, t as MONTH_LABELS } from "./format-B0RhrTi8.mjs";
import { n as FORAGE_HABITATS, t as FORAGE } from "./forage-DckquQhk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cueillette.index-BU3Ffa-v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KINDS = [
	{
		id: "all",
		label: "Tout"
	},
	{
		id: "plante",
		label: "Plantes"
	},
	{
		id: "champignon",
		label: "Champignons"
	},
	{
		id: "fruit",
		label: "Fruits"
	},
	{
		id: "noix",
		label: "Noix"
	}
];
function CueillettePage() {
	const [month, setMonth] = (0, import_react.useState)(currentMonthIndex());
	const [kind, setKind] = (0, import_react.useState)("all");
	const [hab, setHab] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const list = (0, import_react.useMemo)(() => {
		return FORAGE.filter((f) => {
			if (!f.months.includes(month)) return false;
			if (kind !== "all" && f.kind !== kind) return false;
			if (hab !== "all" && !f.habitats.includes(hab)) return false;
			if (q && !`${f.name} ${f.latin}`.toLowerCase().includes(q.toLowerCase())) return false;
			return true;
		});
	}, [
		month,
		kind,
		hab,
		q
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Nourrir",
			title: "Cueillette",
			description: "Saison, milieu, confusions et cadre légal. Les champignons : quotas préfectoraux, pas de râteau, identification certaine."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4 flex gap-1 overflow-x-auto pb-1",
			children: MONTH_LABELS.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setMonth(i),
				className: cn("h-10 shrink-0 rounded-full px-3 text-sm capitalize", i === month ? "bg-primary text-primary-foreground" : "bg-card text-foreground shadow-[var(--shadow-border)]"),
				children: m.slice(0, 3)
			}, m))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-col gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Nom ou latin…",
					value: q,
					onChange: (e) => setQ(e.target.value),
					className: "max-w-sm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: KINDS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setKind(k.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: kind === k.id ? "default" : "outline",
							children: k.label
						})
					}, k.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setHab("all"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: hab === "all" ? "secondary" : "outline",
							children: "Tous milieux"
						})
					}), FORAGE_HABITATS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setHab(h),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: hab === h ? "secondary" : "outline",
							children: h
						})
					}, h))]
				})
			]
		}),
		list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Rien pour ce filtre. Changez de mois ou de milieu."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3 sm:grid-cols-2",
			children: list.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/cueillette/$id",
				params: { id: f.id },
				className: "block rounded-xl bg-card p-4 shadow-[var(--shadow-border)] transition-shadow hover:shadow-[var(--shadow-border-hover)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: f.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs italic text-muted-foreground",
						children: f.latin
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 line-clamp-2 text-sm text-muted-foreground",
						children: f.edible
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs text-primary",
						children: ["Confusion : ", f.lookalikes]
					})
				]
			}) }, f.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
//#endregion
export { CueillettePage as component };
