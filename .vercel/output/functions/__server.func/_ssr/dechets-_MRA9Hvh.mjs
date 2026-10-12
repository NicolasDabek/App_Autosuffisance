import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-FqId949q.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useHavre } from "./store-G1Ku_bi5.mjs";
import { n as PageHeader, t as Disclaimer } from "./page-header-SnphVV45.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./card-CBNC-87B.mjs";
import { t as Label } from "./label-2J_LU4QX.mjs";
import { a as frNumber, i as frEuro } from "./format-B0RhrTi8.mjs";
import { n as WASTE_INPUTS, r as WASTE_METHODS, t as CROP_FEEDING } from "./waste-D2Cp_pBS.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/radix-ui__react-slider.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dechets-_MRA9Hvh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-5 w-5 rounded-full border border-primary bg-card shadow-[var(--shadow-border)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
function DechetsPage() {
	const garden = useHavre((s) => s.profile.gardenM2);
	const [inputs, setInputs] = (0, import_react.useState)(() => Object.fromEntries(WASTE_INPUTS.map((i) => [i.id, i.kgWeekDefault])));
	const [methodId, setMethodId] = (0, import_react.useState)("compost");
	const method = WASTE_METHODS.find((m) => m.id === methodId) ?? WASTE_METHODS[0];
	const weekly = (0, import_react.useMemo)(() => Object.values(inputs).reduce((a, b) => a + b, 0), [inputs]);
	const yearIn = weekly * 52;
	const yearOut = yearIn * method.conversion;
	const weeks = method.timeWeeks;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Recycler",
			title: "Déchets → sol",
			description: "Ce que le foyer jette devient un plan d’apports pour le potager. Choisissez la méthode, lisez ce qu’elle refuse, puis calibre les doses par culture."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Intrants hebdomadaires" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-5",
					children: [WASTE_INPUTS.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: i.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-muted-foreground",
								children: [frNumber(inputs[i.id], 1), " kg"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							min: 0,
							max: 12,
							step: .1,
							value: [inputs[i.id]],
							onValueChange: ([v]) => setInputs((s) => ({
								...s,
								[i.id]: v ?? 0
							}))
						})]
					}, i.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							"Total ",
							frNumber(weekly, 1),
							" kg / sem. · ",
							frNumber(yearIn, 0),
							" kg / an"
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 lg:col-span-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: WASTE_METHODS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: m.id === methodId ? "default" : "outline",
						onClick: () => setMethodId(m.id),
						children: m.name
					}, m.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: method.name }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-3 text-sm leading-relaxed text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: method.summary }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Conversion ~",
							Math.round(method.conversion * 100),
							" % · ",
							weeks,
							" semaines · ",
							method.space
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "Accepte."
							}),
							" ",
							method.accepts.join(", ")
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "Refuse."
							}),
							" ",
							method.rejects.join(", ")
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "NPK / usage."
							}),
							" ",
							method.npk,
							". ",
							method.use
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3 pt-2 text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "rounded-lg bg-muted p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-muted-foreground",
									children: "Amendement / an"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-2xl tabular-nums",
									children: [frNumber(yearOut, 0), " kg"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "rounded-lg bg-muted p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-muted-foreground",
									children: "Engrais évités (ordre)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl tabular-nums",
									children: frEuro(yearOut * .35)
								})]
							})]
						})
					]
				})] })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mt-10 font-display text-xl font-semibold",
			children: [
				"Plan d’apports (",
				garden || 80,
				" m²)"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 overflow-x-auto rounded-xl bg-card shadow-[var(--shadow-border)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[520px] text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "border-b border-border text-xs uppercase tracking-wider text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Cultures"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "kg / m²"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Quand"
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: CROP_FEEDING.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border last:border-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3",
							children: c.crop
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 tabular-nums",
							children: c.compostKgM2
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 text-muted-foreground",
							children: c.when
						})
					]
				}, c.crop)) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-sm text-muted-foreground",
			children: [
				"Avec ",
				frNumber(yearOut, 0),
				" kg, vous pouvez amender environ",
				" ",
				frNumber(yearOut / 3, 0),
				" m² de planches gourmandes.",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/potager",
					className: "text-primary underline-offset-2 hover:underline",
					children: "Voir les cultures"
				}),
				" · ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/sol",
					className: "text-primary underline-offset-2 hover:underline",
					children: "Textures, urine, biochar"
				}),
				" · ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/bricolage/$id",
					params: { id: "composteur" },
					className: "text-primary underline-offset-2 hover:underline",
					children: "Fabriquer un composteur"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
//#endregion
export { DechetsPage as component };
