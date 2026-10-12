import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-FqId949q.mjs";
import { b as Link, q as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CBNC-87B.mjs";
import { t as DIY } from "./diy-CxNoRmqG.mjs";
import { i as Route$4 } from "./router-BDx6cqcl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bricolage._id-BfUiO31S.js
var import_jsx_runtime = require_jsx_runtime();
function DiyPage() {
	const { id } = Route$4.useParams();
	const d = DIY.find((x) => x.id === id);
	if (!d) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: d.category,
			title: d.name,
			description: `${d.time} · ${d.cost} · difficulté ${d.difficulty}/3`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Matériel" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "list-disc space-y-1 pl-4 text-sm text-muted-foreground",
				children: d.materials.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: m }, m))
			}) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Étapes" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "list-decimal space-y-1 pl-4 text-sm text-muted-foreground",
				children: d.steps.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: m }, m))
			}) })] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Droit et liens" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: d.legal }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: d.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiyLink, { l }, l))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			variant: "outline",
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/bricolage",
				children: "Tous les guides"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
var PAGES = {
	dechets: {
		to: "/dechets",
		label: "Déchets"
	},
	eau: {
		to: "/eau",
		label: "Eau"
	},
	potager: {
		to: "/potager",
		label: "Potager"
	},
	cueillette: {
		to: "/cueillette",
		label: "Cueillette"
	},
	calendrier: {
		to: "/calendrier",
		label: "Calendrier"
	},
	energie: {
		to: "/energie",
		label: "Énergie"
	},
	legal: {
		to: "/legal",
		label: "Cadre légal"
	},
	verger: {
		to: "/verger",
		label: "Verger"
	},
	conservation: {
		to: "/conservation",
		label: "Conservation"
	},
	garde: {
		to: "/garde",
		label: "Garde-manger"
	},
	semis: {
		to: "/semis",
		label: "Plan de semis"
	},
	atelier: {
		to: "/atelier",
		label: "Atelier"
	},
	sol: {
		to: "/sol",
		label: "Sol"
	},
	bricolage: {
		to: "/bricolage",
		label: "Bricolage"
	},
	elevage: {
		to: "/elevage",
		label: "Élevage"
	},
	chaines: {
		to: "/chaines",
		label: "Chaînes"
	}
};
function DiyLink({ l }) {
	const colon = l.indexOf(":");
	const kind = colon === -1 ? l : l.slice(0, colon);
	const rest = colon === -1 ? "" : l.slice(colon + 1);
	if (kind === "elevage" && rest) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		size: "sm",
		variant: "outline",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/elevage/$id",
			params: { id: rest },
			children: ["Fiche ", rest]
		})
	});
	if (kind === "chaines" && rest) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		size: "sm",
		variant: "outline",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/chaines",
			search: { id: rest },
			children: "Chaîne"
		})
	});
	if (kind === "bricolage" && rest) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		size: "sm",
		variant: "outline",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/bricolage/$id",
			params: { id: rest },
			children: "Guide"
		})
	});
	const page = PAGES[l];
	if (page) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		size: "sm",
		variant: "outline",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: page.to,
			children: page.label
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		size: "sm",
		variant: "outline",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			children: l
		})
	});
}
//#endregion
export { DiyPage as component };
