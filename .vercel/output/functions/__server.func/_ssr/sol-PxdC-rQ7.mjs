import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { t as Badge } from "./badge-BCJWBkyV.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CBNC-87B.mjs";
import { n as currentMonthIndex, t as MONTH_LABELS } from "./format-B0RhrTi8.mjs";
import { a as SOIL_TYPES, i as PESTS, n as AUXILIARIES, r as COVER_CROPS, t as AMENDMENTS } from "./soil-X5vYbGUu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sol-PxdC-rQ7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		id: "textures",
		label: "Textures"
	},
	{
		id: "amendements",
		label: "Amendements"
	},
	{
		id: "couverts",
		label: "Engrais verts"
	},
	{
		id: "ravageurs",
		label: "Ravageurs"
	},
	{
		id: "auxiliaires",
		label: "Auxiliaires"
	}
];
function SolPage() {
	const [section, setSection] = (0, import_react.useState)("textures");
	const month = currentMonthIndex();
	const coversNow = COVER_CROPS.filter((c) => c.monthsSow.includes(month));
	const pestCrops = (0, import_react.useMemo)(() => [...new Set(PESTS.flatMap((p) => p.crops))].sort(), []);
	const [crop, setCrop] = (0, import_react.useState)("all");
	const pests = crop === "all" ? PESTS : PESTS.filter((p) => p.crops.includes(crop));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Nourrir",
			title: "Sol, semences, auxiliaires",
			description: "Avant d’acheter un sac, lire la terre. Texture, pH, couverts, et qui mange qui. Le compost vient des Déchets ; les doses gourmandes, du Potager."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-wrap gap-3 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/potager",
					className: "text-primary underline-offset-2 hover:underline",
					children: "Potager"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dechets",
					className: "text-primary underline-offset-2 hover:underline",
					children: "Déchets → sol"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/verger",
					className: "text-primary underline-offset-2 hover:underline",
					children: "Verger"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/legal",
					className: "text-primary underline-offset-2 hover:underline",
					children: "Semences & pesticides"
				})
			]
		}),
		coversNow.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
				className: "text-lg",
				children: ["À semer ce mois-ci · ", MONTH_LABELS[month]]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "flex flex-wrap gap-2",
				children: coversNow.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "secondary",
					children: c.name
				}, c.id))
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 flex flex-wrap gap-1.5",
			children: SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setSection(s.id),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: section === s.id ? "default" : "outline",
					children: s.label
				})
			}, s.id))
		}),
		section === "textures" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-4 lg:grid-cols-2",
			children: SOIL_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: t.name }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "grid gap-2 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Toucher."
						}),
						" ",
						t.feel
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Eau."
						}),
						" ",
						t.water
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Travail."
						}),
						" ",
						t.work
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Cultures."
						}),
						" ",
						t.crops
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "list-disc pl-4",
						children: t.amends.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: a }, a))
					})
				]
			})] }) }, t.id))
		}) : null,
		section === "amendements" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-4 lg:grid-cols-2",
			children: AMENDMENTS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				id: a.id,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: a.name }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground",
							children: a.npk
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: a.use }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "Dose."
							}),
							" ",
							a.dose
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "Attention."
							}),
							" ",
							a.caution
						] })
					]
				})] })
			}, a.id))
		}) : null,
		section === "couverts" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-4 lg:grid-cols-2",
			children: COVER_CROPS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				id: c.id,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: c.name }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground",
							children: c.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Semis : ", c.monthsSow.map((m) => MONTH_LABELS[m]).join(", ")] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: c.notes }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "Destruction."
							}),
							" ",
							c.destroy
						] })
					]
				})] })
			}, c.id))
		}) : null,
		section === "ravageurs" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-wrap gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setCrop("all"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: crop === "all" ? "secondary" : "outline",
					children: "Toutes cultures"
				})
			}), pestCrops.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setCrop(c),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: crop === c ? "secondary" : "outline",
					children: c
				})
			}, c))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-4",
			children: pests.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				id: p.id,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: p.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1",
						children: p.crops.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "muted",
							children: c
						}, c))
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "Signes."
							}),
							" ",
							p.signs
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "Prévenir."
							}),
							" ",
							p.prevention
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "Intervenir."
							}),
							" ",
							p.intervention
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "Cadre."
							}),
							" ",
							p.legal
						] })
					]
				})] })
			}, p.id))
		})] }) : null,
		section === "auxiliaires" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-4 sm:grid-cols-2",
			children: AUXILIARIES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				id: a.id,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: a.name }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground",
							children: a.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "Habitat."
							}),
							" ",
							a.habitat
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "Plantes."
							}),
							" ",
							a.plants
						] })
					]
				})] })
			}, a.id))
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
//#endregion
export { SolPage as component };
