import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-FqId949q.mjs";
import { b as Link, q as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as animalById } from "./animals-BCW_J0tS.mjs";
import { t as CHAINS } from "./chains-Oq51pbdt.mjs";
import { t as useHavre } from "./store-G1Ku_bi5.mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CBNC-87B.mjs";
import { n as Route } from "./router-BDx6cqcl.mjs";
import { t as LegalBadge } from "./legal-badge-DQTs_IOT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/elevage._id-BAnm6X8k.js
var import_jsx_runtime = require_jsx_runtime();
function AnimalPage() {
	const { id } = Route.useParams();
	const a = animalById(id);
	if (!a) throw notFound();
	const toggle = useHavre((s) => s.toggleAnimal);
	const present = useHavre((s) => s.profile.animalsPresent.includes(id));
	const related = CHAINS.filter((c) => c.animalIds.includes(id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Élevage",
			title: a.name,
			description: a.summary,
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: present ? "outline" : "default",
				onClick: () => toggle(id),
				children: present ? "Retirer du foyer" : "Marquer comme présent"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalBadge, { level: a.legal.level }),
				a.beginner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-muted px-2.5 py-0.5 text-xs",
					children: "Accessible"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-muted px-2.5 py-0.5 text-xs",
					children: "Expérimenté"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: a.latin
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
					k: "Surface min. / conseillée",
					v: `${a.minSurfaceM2} / ${a.recommendedSurfaceM2} m²`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
					k: "Budget de départ",
					v: `à partir de ${a.minBudgetEur} €`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
					k: "Temps",
					v: `${a.hoursPerWeek} h / semaine`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
					k: "Bruit / odeur",
					v: `${a.noise} / 3 · ${a.smell} / 3`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
					k: "Cadres",
					v: a.settings.join(", ")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
					k: "Climats",
					v: a.climates === "all" ? "Tous" : a.climates.join(", ")
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Cadre légal (France, foyer)" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "grid gap-3 text-sm leading-relaxed text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Déclaration."
						}),
						" ",
						a.legal.declaration
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Abattage."
						}),
						" ",
						a.legal.slaughter
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Produits."
						}),
						" ",
						a.legal.products
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Voisinage."
						}),
						" ",
						a.legal.neighbor
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "list-disc pl-4",
						children: a.legal.sources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							className: "text-primary underline-offset-2 hover:underline",
							target: "_blank",
							rel: "noreferrer",
							children: s.label
						}) }, s.href))
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Rendements et boucle" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "grid gap-3 text-sm leading-relaxed text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "list-disc pl-4",
						children: a.yields.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-medium text-foreground",
								children: [y.label, " :"]
							}),
							" ",
							y.qty,
							" ",
							y.unit,
							" / ",
							y.per
						] }, y.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Aliment."
						}),
						" ",
						a.feed.description,
						" Boucle : ",
						a.feed.loop
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Fumier."
						}),
						" ",
						a.manure.kgYear,
						" kg/an — ",
						a.manure.use
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Logement."
						}),
						" ",
						a.housing
					] })
				]
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Santé et écueils" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "list-disc space-y-1 pl-4",
						children: a.health.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: h }, h))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-medium text-foreground",
						children: "Pièges fréquents"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-1 list-disc space-y-1 pl-4",
						children: a.pitfalls.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: h }, h))
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Pour démarrer · chaînes liées" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "list-disc space-y-1 pl-4",
					children: a.starter.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: h }, h))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [related.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/chaines",
							search: { id: c.id },
							children: c.name
						})
					}, c.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/elevage",
							children: "Toutes les fiches"
						})
					})]
				})]
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
function Fact({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-card p-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-medium capitalize",
			children: v
		})]
	});
}
//#endregion
export { AnimalPage as component };
