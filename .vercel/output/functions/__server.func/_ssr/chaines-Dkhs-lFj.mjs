import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-FqId949q.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useHavre } from "./store-G1Ku_bi5.mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { t as Badge } from "./badge-BCJWBkyV.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-CBNC-87B.mjs";
import { a as frNumber, i as frEuro } from "./format-B0RhrTi8.mjs";
import { a as rankChains } from "./calculators-8RSGes5A.mjs";
import { T as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as Route$19 } from "./router-BDx6cqcl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chaines-Dkhs-lFj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FlowRow({ nodes, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: cn("flex flex-wrap items-center gap-1.5", className),
		children: nodes.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center gap-1.5",
			children: [i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
				className: "size-3.5 text-muted-foreground",
				"aria-hidden": "true"
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground",
				children: n.label
			})]
		}, n.id + i))
	});
}
function ChainesPage() {
	const { id: qid } = Route$19.useSearch();
	const profile = useHavre((s) => s.profile);
	const toggleChain = useHavre((s) => s.toggleChain);
	const ranked = (0, import_react.useMemo)(() => rankChains(profile), [profile]);
	const [sel, setSel] = (0, import_react.useState)(qid ?? ranked[0]?.chain.id);
	const current = ranked.find((r) => r.chain.id === sel) ?? ranked[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Nourrir",
			title: "Chaînes alimentaires",
			description: "Combinaisons réalistes pour un particulier en France : pas une liste d’animaux, des boucles. Le score tient compte de votre terrain, budget, temps, climat, bruit et de ce qui est déjà là.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				size: "sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: "Ajuster le foyer"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2 lg:col-span-2",
				children: ranked.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSel(r.chain.id),
					className: cn("rounded-xl bg-card p-4 text-left shadow-[var(--shadow-border)] transition-shadow", r.chain.id === current.chain.id && "ring-2 ring-ring"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: r.chain.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums text-sm text-primary",
								children: frNumber(r.score, 0)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: r.chain.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap gap-1",
							children: [r.compatible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "ok",
								children: "Compatible"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "warn",
								children: "Freins"
							}), r.chain.beginner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "muted",
								children: "Début"
							}) : null]
						})
					]
				}, r.chain.id))
			}), current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: current.chain.name }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: current.chain.tagline }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowRow, {
						nodes: current.chain.nodes,
						className: "pt-2"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-5 text-sm leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
									k: "Surface min.",
									v: `${current.chain.minSurfaceM2} m²`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
									k: "Idéal",
									v: `${current.chain.recommendedSurfaceM2} m²`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
									k: "Installation",
									v: `${frEuro(current.chain.setupEur[0])}–${frEuro(current.chain.setupEur[1])}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
									k: "Temps",
									v: `${current.chain.hoursPerWeek} h/sem.`
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							title: "Cadre légal",
							children: current.chain.legalNote
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							title: "Boucles",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "list-disc space-y-1 pl-4",
								children: current.chain.loops.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: l }, l))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							title: "Rendements indicatifs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "list-disc space-y-1 pl-4",
								children: current.chain.yields.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-medium text-foreground",
										children: [y.label, "."]
									}),
									" ",
									y.detail
								] }, y.label))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							title: "Mise en place",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "list-decimal space-y-1 pl-4",
								children: current.chain.steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							title: "Points de vigilance",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "list-disc space-y-1 pl-4",
								children: current.chain.risks.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
							})
						}),
						current.blockers.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							title: "Freins par rapport à votre foyer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "list-disc space-y-1 pl-4 text-chart-3",
								children: current.blockers.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
							})
						}) : null,
						current.reasons.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "list-disc space-y-1 pl-4 text-muted-foreground",
							children: current.reasons.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => toggleChain(current.chain.id),
								children: profile.activeChainIds.includes(current.chain.id) ? "Retirer du tableau de bord" : "Activer cette chaîne"
							}), current.chain.animalIds.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/elevage/$id",
									params: { id },
									children: ["Fiche ", id]
								})
							}, id))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: current.chain.savings
						})
					]
				})]
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
function Mini({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-xs text-muted-foreground",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "font-medium tabular-nums",
		children: v
	})] });
}
function Block({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "mb-1 text-xs font-medium uppercase tracking-[0.14em] text-primary",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-muted-foreground",
		children
	})] });
}
//#endregion
export { ChainesPage as component };
