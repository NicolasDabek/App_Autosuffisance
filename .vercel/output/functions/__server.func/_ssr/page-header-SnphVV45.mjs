import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-header-SnphVV45.js
var import_jsx_runtime = require_jsx_runtime();
function Disclaimer({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-10 max-w-3xl text-xs leading-relaxed text-muted-foreground",
		children: children ?? "Havre propose une information générale pour l’autoconsommation en France. Ce n’est ni un conseil juridique, ni un diagnostic énergétique, ni une ordonnance agricole. Vérifiez les arrêtés préfectoraux, le PLU, la DDPP et les textes en vigueur avant d’agir."
	});
}
function PageHeader({ kicker, title, description, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl",
			children: [
				kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs font-medium uppercase tracking-[0.16em] text-primary",
					children: kicker
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
					children: title
				}),
				description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-prose text-base leading-relaxed text-muted-foreground",
					children: description
				}) : null
			]
		}), action ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shrink-0",
			children: action
		}) : null]
	});
}
//#endregion
export { PageHeader as n, Disclaimer as t };
