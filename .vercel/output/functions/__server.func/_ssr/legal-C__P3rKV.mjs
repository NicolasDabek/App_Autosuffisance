import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { S as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as LEGAL } from "./legal-DFRBhw38.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-C__P3rKV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b border-border", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0 text-muted-foreground leading-relaxed", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function LegalPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Savoir",
			title: "Cadre légal France",
			description: "Synthèse pour l’autoconsommation. Les textes bougent (influenza, aides, air). Les liens officiels priment sur cette page."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
			type: "single",
			collapsible: true,
			className: "rounded-xl bg-card px-5 shadow-[var(--shadow-border)]",
			children: LEGAL.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
				value: t.id,
				id: t.id,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
					className: "text-base",
					children: t.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-foreground",
						children: t.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "list-disc space-y-1 pl-4",
						children: t.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: b }, b))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 list-disc pl-4",
						children: t.sources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							className: "text-primary underline-offset-2 hover:underline",
							target: "_blank",
							rel: "noreferrer",
							children: s.label
						}) }, s.href))
					})
				] })]
			}, t.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
//#endregion
export { LegalPage as component };
