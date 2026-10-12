import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useHavre } from "./store-G1Ku_bi5.mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { n as currentMonthIndex, t as MONTH_LABELS } from "./format-B0RhrTi8.mjs";
import { t as CALENDAR } from "./calendar-CdkQTOnN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/calendrier-5Rmqxowt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PILLAR = {
	nourrir: "Nourrir",
	recycler: "Recycler",
	habitat: "Habitat",
	savoir: "Savoir"
};
function CalPage() {
	const [month, setMonth] = (0, import_react.useState)(currentMonthIndex());
	const tasks = CALENDAR.filter((t) => t.month === month);
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	const doneTasks = useHavre((s) => s.doneTasks) ?? [];
	const toggle = useHavre((s) => s.toggleTask);
	const hydrated = useHavre((s) => s.hydrated);
	const doneCount = tasks.filter((t) => doneTasks.includes(`${year}-${month}-${t.title}`)).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Savoir",
			title: "Calendrier",
			description: "Un almanach unique : potager, verger, animaux, cueillette, bois, déclarations. Cochez ce qui est fait : ça reste dans ce navigateur, pour l’année en cours."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 grid grid-cols-3 gap-1.5 sm:grid-cols-6 lg:grid-cols-12",
			children: MONTH_LABELS.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setMonth(i),
				className: cn("h-11 rounded-lg text-xs capitalize sm:text-sm", i === month ? "bg-primary text-primary-foreground" : "bg-card shadow-[var(--shadow-border)]"),
				children: m.slice(0, 3)
			}, m))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-4 font-display text-2xl capitalize",
			children: [MONTH_LABELS[month], /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "ml-3 text-base font-normal text-muted-foreground",
				children: [
					doneCount,
					"/",
					tasks.length,
					" faits"
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex flex-col gap-3",
			children: tasks.map((t) => {
				const key = `${year}-${month}-${t.title}`;
				const done = hydrated && doneTasks.includes(key);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-xl bg-card p-4 shadow-[var(--shadow-border)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mt-0.5 flex min-h-10 min-w-10 items-start",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "mt-1 size-4 shrink-0 rounded-sm border border-input accent-primary",
								checked: done,
								onChange: () => toggle(key),
								"aria-label": `Marquer « ${t.title} » comme fait`
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-medium uppercase tracking-[0.14em] text-primary",
									children: PILLAR[t.pillar]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("mt-1 font-medium", done && "text-muted-foreground line-through"),
									children: t.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: t.detail
								}),
								t.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: t.href,
									className: "mt-2 inline-block text-sm text-primary underline-offset-2 hover:underline",
									children: "Ouvrir le module"
								}) : null
							]
						})]
					})
				}, t.title);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
//#endregion
export { CalPage as component };
