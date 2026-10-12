import { y as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./_ssr/button-FqId949q.mjs";
import { b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as ANIMALS } from "./_ssr/animals-BCW_J0tS.mjs";
import { t as CHAINS } from "./_ssr/chains-Oq51pbdt.mjs";
import { t as useHavre } from "./_ssr/store-G1Ku_bi5.mjs";
import { n as PageHeader, t as Disclaimer } from "./_ssr/page-header-SnphVV45.mjs";
import { t as NumberField } from "./_ssr/number-field-B7hIsrlq.mjs";
import { t as Badge } from "./_ssr/badge-BCJWBkyV.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./_ssr/card-CBNC-87B.mjs";
import { t as Label } from "./_ssr/label-2J_LU4QX.mjs";
import { a as frNumber, n as currentMonthIndex, o as monthLabel } from "./_ssr/format-B0RhrTi8.mjs";
import { t as CALENDAR } from "./_ssr/calendar-CdkQTOnN.mjs";
import { t as CLIMATES } from "./_ssr/climate-CGxKgulf.mjs";
import { a as rankChains, i as nextActions, n as energyStats, o as wasteStats, r as foodAutonomy } from "./_ssr/calculators-8RSGes5A.mjs";
import { t as Progress } from "./_ssr/progress-DCOEff7P.mjs";
import { T as ArrowRight } from "./_libs/lucide-react.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./_ssr/select-BdlOuI5A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app-Cg6yJiRY.js
var import_jsx_runtime = require_jsx_runtime();
var GOALS = [
	{
		id: "oeufs",
		label: "Œufs du foyer"
	},
	{
		id: "legumes",
		label: "Légumes et conserves"
	},
	{
		id: "viande",
		label: "Un peu de viande"
	},
	{
		id: "miel",
		label: "Miel / pollinisation"
	},
	{
		id: "dechets",
		label: "Zéro biodéchet poubelle"
	},
	{
		id: "chauffage",
		label: "Moins dépendre du réseau pour le chaud"
	},
	{
		id: "eau",
		label: "Eau de pluie"
	},
	{
		id: "conserves",
		label: "Conserves et cave"
	}
];
function Dashboard() {
	const profile = useHavre((s) => s.profile);
	const logs = useHavre((s) => s.logs);
	const month = currentMonthIndex();
	const food = foodAutonomy(profile, logs);
	const waste = wasteStats(profile, logs, "compost");
	const energy = energyStats(profile);
	const best = rankChains(profile).find((r) => r.compatible);
	const tasks = CALENDAR.filter((t) => t.month === month);
	const stocks = useHavre((s) => s.stocks) ?? {};
	const planIds = useHavre((s) => s.planIds) ?? [];
	const actions = nextActions(profile, stocks, planIds.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: `${monthLabel(month)} · semaine ${weekNum()}`,
			title: profile.completed ? "Votre clos" : "Installer le foyer",
			description: profile.completed ? "Les boucles se parlent : déchets, sol, plantes, animaux, eau, chaleur. Le tableau agrège ce que vous journalisez et ce que le simulateur recommande." : "Quelques paramètres — surface, climat, temps, logement — suffisent à relier toutes les pages de l’almanach."
		}),
		!profile.completed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Autonomie alimentaire",
					value: `${frNumber(food.pct, 0)} %`,
					hint: food.produced ? `${frNumber(food.produced / 1e3, 0)} k kcal journalisées / ${frNumber(food.need / 1e3, 0)} k` : "Journalisez récoltes et œufs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Biodéchets valorisés",
					value: `${frNumber(waste.kgYearIn, 0)} kg`,
					hint: `≈ ${frNumber(waste.kgOut, 0)} kg d’amendement / an`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Bois si 100 % chaleur",
					value: `${frNumber(energy.steres, 1)} st`,
					hint: `${energy.climate.name} · isolation ${profile.housing.insulation}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-6 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Prochaines actions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Priorités calculées à partir du profil, pas une liste générique." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "flex flex-col gap-3",
					children: [actions.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: a.href,
						className: "flex items-start justify-between gap-3 rounded-lg bg-muted/60 px-3 py-3 transition-colors hover:bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-medium",
							children: a.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block text-sm text-muted-foreground",
							children: a.why
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "mt-0.5 size-4 shrink-0 text-muted-foreground" })]
					}, a.title)), best ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.14em] text-primary",
								children: "Chaîne la plus adaptée"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-lg font-semibold",
								children: best.chain.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: best.chain.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/chaines",
									search: {},
									children: "Voir le simulateur"
								})
							})
						]
					}) : null]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Ce mois-ci" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Extrait du calendrier, relié aux modules." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "flex flex-col gap-3",
					children: [tasks.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: t.href ?? "/calendrier",
						className: "block rounded-md hover:bg-muted/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: t.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs leading-relaxed text-muted-foreground",
							children: t.detail
						})]
					}, t.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/calendrier",
							children: "Calendrier complet"
						})
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold",
				children: "Boucles actives"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: profile.activeChainIds.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							"Aucune chaîne activée. Le simulateur en propose ",
							CHAINS.length,
							", de la jardinière urbaine au clos rural."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-3",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/chaines",
							search: {},
							children: "Ouvrir les chaînes"
						})
					})]
				}) }) : profile.activeChainIds.map((id) => {
					const c = CHAINS.find((x) => x.id === id);
					if (!c) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-base",
						children: c.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: c.tagline })] }) }, id);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
	] });
}
function Stat({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
		className: "p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-3xl font-semibold tabular-nums tracking-tight",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: hint
			})
		]
	}) });
}
function weekNum() {
	const d = /* @__PURE__ */ new Date();
	d.setHours(0, 0, 0, 0);
	d.setDate(d.getDate() + 4 - (d.getDay() || 7));
	const yearStart = new Date(d.getFullYear(), 0, 1);
	return Math.ceil(((d.getTime() - yearStart.getTime()) / 864e5 + 1) / 7);
}
function Onboarding() {
	const profile = useHavre((s) => s.profile);
	const hydrated = useHavre((s) => s.hydrated);
	const patch = useHavre((s) => s.patchProfile);
	const patchHousing = useHavre((s) => s.patchHousing);
	const toggleAnimal = useHavre((s) => s.toggleAnimal);
	const toggleGoal = useHavre((s) => s.toggleGoal);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "mb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Profil du foyer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Ces champs alimentent le simulateur de chaînes, le potager, l’énergie et le tableau de bord. Rien n’est envoyé sur un serveur : tout reste dans ce navigateur." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "grid gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Personnes au foyer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
								integer: true,
								min: 1,
								emptyValue: 1,
								value: profile.people,
								onValueChange: (people) => patch({ people })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Terrain (m²)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
								integer: true,
								min: 0,
								value: profile.surfaceM2,
								onValueChange: (surfaceM2) => patch({ surfaceM2 })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Potager / verger (m²)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
								integer: true,
								min: 0,
								value: profile.gardenM2,
								onValueChange: (gardenM2) => patch({ gardenM2 })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Heures / semaine",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
								min: 0,
								value: profile.hoursPerWeek,
								onValueChange: (hoursPerWeek) => patch({ hoursPerWeek })
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Climat",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: profile.climate,
								onValueChange: (v) => patch({ climate: v }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: CLIMATES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: c.id,
									children: c.name
								}, c.id)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Cadre",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: profile.setting,
								onValueChange: (v) => patch({ setting: v }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "urbain",
										children: "Urbain"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "periurbain",
										children: "Périurbain"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "rural",
										children: "Rural"
									})
								] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Budget d’installation (€)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
								integer: true,
								min: 0,
								value: profile.budgetEur,
								onValueChange: (budgetEur) => patch({ budgetEur })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Bruit toléré",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: profile.noiseTolerance,
								onValueChange: (v) => patch({ noiseTolerance: v }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "faible",
										children: "Faible (voisins proches)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "moyen",
										children: "Moyen"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "eleve",
										children: "Élevé (écarté)"
									})
								] })]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Logement",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: profile.housing.type,
								onValueChange: (v) => patchHousing({ type: v }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "maison",
									children: "Maison"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "appart",
									children: "Appartement"
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Isolation",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: profile.housing.insulation,
								onValueChange: (v) => patchHousing({ insulation: v }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "faible",
										children: "Faible"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "moyenne",
										children: "Moyenne"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "bonne",
										children: "Bonne"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "passive",
										children: "Très bonne / passive"
									})
								] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Chauffage actuel",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: profile.housing.heating,
								onValueChange: (v) => patchHousing({ heating: v }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "gaz",
										children: "Gaz"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "fioul",
										children: "Fioul"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "elec",
										children: "Électricité"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "bois",
										children: "Bois"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "pac",
										children: "Pompe à chaleur"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "mixte",
										children: "Mixte"
									})
								] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Toiture exploitable (m²)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberField, {
								integer: true,
								min: 0,
								value: profile.housing.roofM2,
								onValueChange: (roofM2) => patchHousing({ roofM2 })
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-sm font-medium",
					children: "Intentions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: GOALS.map((g) => {
						const on = profile.goals.includes(g.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => toggleGoal(g.id),
							className: "rounded-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: on ? "default" : "outline",
								children: g.label
							})
						}, g.id);
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-sm font-medium",
					children: "Déjà en place"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
					children: ANIMALS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-10 items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							className: "size-4 shrink-0 rounded-sm border border-input accent-primary",
							checked: hydrated && profile.animalsPresent.includes(a.id),
							onChange: () => toggleAnimal(a.id)
						}), a.name]
					}, a.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => patch({ completed: true }),
						children: "Enregistrer le foyer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: profile.completed ? 100 : 55,
						className: "max-w-xs"
					})]
				})
			]
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
//#endregion
export { Dashboard as component };
