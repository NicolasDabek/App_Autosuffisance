import { i as __toESM } from "./_runtime.mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./_ssr/button-FqId949q.mjs";
import { b as Link, g as Outlet, p as useRouterState, x as useRouter } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as ANIMALS } from "./_ssr/animals-BCW_J0tS.mjs";
import { t as CHAINS } from "./_ssr/chains-Oq51pbdt.mjs";
import { t as useHavre } from "./_ssr/store-G1Ku_bi5.mjs";
import { t as Input } from "./_ssr/input-DXePJzje.mjs";
import { E as Apple, _ as Flame, a as TreeDeciduous, b as ClipboardList, c as Shovel, d as Recycle, f as Package, g as Layers, h as LayoutDashboard, l as Search, m as Leaf, n as Warehouse, o as SunMedium, p as Menu, r as Utensils, s as Sprout, t as X, u as Scale, v as Droplets, w as CalendarDays, y as CookingPot } from "./_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "./_libs/@radix-ui/react-dialog+[...].mjs";
import { t as CONSERVE } from "./_ssr/conservation-BEI2ZwqQ.mjs";
import { t as CROPS } from "./_ssr/crops-CTfBakKE.mjs";
import { t as DIY } from "./_ssr/diy-CxNoRmqG.mjs";
import { t as FORAGE } from "./_ssr/forage-DckquQhk.mjs";
import { t as LEGAL } from "./_ssr/legal-DFRBhw38.mjs";
import { a as SOIL_TYPES, i as PESTS, n as AUXILIARIES, r as COVER_CROPS, t as AMENDMENTS } from "./_ssr/soil-X5vYbGUu.mjs";
import { t as RECIPES } from "./_ssr/recipes-DjiSN3j-.mjs";
import { n as STOCKS, t as SEED_LIFE } from "./_ssr/stocks-C8c6hPvR.mjs";
import { t as TREES } from "./_ssr/trees-B_DX_v6H.mjs";
import { a as Viewport, i as ScrollAreaThumb, n as Root, r as ScrollAreaScrollbar, t as Corner } from "./_libs/radix-ui__react-scroll-area.mjs";
import { n as Portal, r as Provider, t as Content2 } from "./_libs/radix-ui__react-tooltip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app-DJGC1n8m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-foreground/35", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-1/2 top-1/2 z-50 grid w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-card p-6 shadow-[var(--shadow-border-hover)]", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Fermer"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col gap-1.5", className),
	...props
});
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("font-display text-lg font-semibold leading-none", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var NAV = [
	{
		id: "home",
		label: "Vue d’ensemble",
		items: [{
			href: "/",
			label: "Tableau de bord",
			icon: LayoutDashboard,
			blurb: "Boucles actives, autonomie, prochaines actions"
		}]
	},
	{
		id: "nourrir",
		label: "Nourrir",
		items: [
			{
				href: "/chaines",
				label: "Chaînes alimentaires",
				icon: Sprout,
				blurb: "Simulateur de combinaisons légales"
			},
			{
				href: "/elevage",
				label: "Élevage légal",
				icon: Warehouse,
				blurb: "Fiches animaux pour l’autoconsommation"
			},
			{
				href: "/potager",
				label: "Potager",
				icon: Leaf,
				blurb: "Cultures, rotations, apports"
			},
			{
				href: "/semis",
				label: "Plan de semis",
				icon: ClipboardList,
				blurb: "Mètres carrés, familles, semences"
			},
			{
				href: "/sol",
				label: "Sol & auxiliaires",
				icon: Layers,
				blurb: "Textures, engrais verts, ravageurs"
			},
			{
				href: "/verger",
				label: "Verger",
				icon: Apple,
				blurb: "Fruitiers selon climat et pollinisation"
			},
			{
				href: "/cueillette",
				label: "Cueillette",
				icon: TreeDeciduous,
				blurb: "Plantes, champignons, cadre légal"
			},
			{
				href: "/conservation",
				label: "Conservation",
				icon: CookingPot,
				blurb: "Bocaux, lacto, séchage, cave"
			},
			{
				href: "/atelier",
				label: "Atelier",
				icon: Utensils,
				blurb: "Sel, sucre et bocaux au kilo"
			},
			{
				href: "/garde",
				label: "Garde-manger",
				icon: Package,
				blurb: "Stocks, semences, objectif d’hiver"
			}
		]
	},
	{
		id: "recycler",
		label: "Recycler",
		items: [{
			href: "/dechets",
			label: "Déchets → sol",
			icon: Recycle,
			blurb: "Compost, bokashi, plan de fertilisation"
		}, {
			href: "/eau",
			label: "Eau",
			icon: Droplets,
			blurb: "Récupération, puits, usages autorisés"
		}]
	},
	{
		id: "habitat",
		label: "Habitat",
		items: [{
			href: "/energie",
			label: "Énergie & chauffage",
			icon: Flame,
			blurb: "Scénarios d’autonomie, bois, solaire"
		}, {
			href: "/bricolage",
			label: "Bricolage",
			icon: Shovel,
			blurb: "Abris, serre, clôtures, conservation"
		}]
	},
	{
		id: "savoir",
		label: "Savoir",
		items: [
			{
				href: "/calendrier",
				label: "Calendrier",
				icon: CalendarDays,
				blurb: "Travaux du mois, saison par saison"
			},
			{
				href: "/legal",
				label: "Cadre légal",
				icon: Scale,
				blurb: "Autoconsommation en France, sources officielles"
			},
			{
				href: "/journal",
				label: "Journal",
				icon: SunMedium,
				blurb: "Récoltes, œufs, kWh, cueillettes"
			}
		]
	}
];
var ALL_NAV_ITEMS = NAV.flatMap((g) => g.items);
function buildIndex() {
	const hits = ALL_NAV_ITEMS.map((i) => ({
		href: i.href,
		title: i.label,
		group: "Pages"
	}));
	ANIMALS.forEach((a) => hits.push({
		href: `/elevage/${a.id}`,
		title: a.name,
		group: "Élevage"
	}));
	CHAINS.forEach((c) => hits.push({
		href: `/chaines?id=${c.id}`,
		title: c.name,
		group: "Chaînes"
	}));
	CROPS.forEach((c) => hits.push({
		href: `/potager#${c.id}`,
		title: c.name,
		group: "Potager"
	}));
	TREES.forEach((t) => hits.push({
		href: `/verger#${t.id}`,
		title: t.name,
		group: "Verger"
	}));
	FORAGE.forEach((f) => hits.push({
		href: `/cueillette/${f.id}`,
		title: f.name,
		group: "Cueillette"
	}));
	DIY.forEach((d) => hits.push({
		href: `/bricolage/${d.id}`,
		title: d.name,
		group: "Bricolage"
	}));
	CONSERVE.forEach((c) => hits.push({
		href: `/conservation#${c.id}`,
		title: c.name,
		group: "Conservation"
	}));
	LEGAL.forEach((l) => hits.push({
		href: `/legal#${l.id}`,
		title: l.title,
		group: "Légal"
	}));
	SOIL_TYPES.forEach((s) => hits.push({
		href: `/sol#${s.id}`,
		title: s.name,
		group: "Sol"
	}));
	AMENDMENTS.forEach((a) => hits.push({
		href: `/sol#${a.id}`,
		title: a.name,
		group: "Sol"
	}));
	COVER_CROPS.forEach((c) => hits.push({
		href: `/sol#${c.id}`,
		title: c.name,
		group: "Engrais verts"
	}));
	PESTS.forEach((p) => hits.push({
		href: `/sol#${p.id}`,
		title: p.name,
		group: "Ravageurs"
	}));
	AUXILIARIES.forEach((a) => hits.push({
		href: `/sol#${a.id}`,
		title: a.name,
		group: "Auxiliaires"
	}));
	STOCKS.forEach((s) => hits.push({
		href: `/garde#${s.id}`,
		title: s.name,
		group: "Garde-manger"
	}));
	SEED_LIFE.forEach((s) => hits.push({
		href: `/garde#${s.id}`,
		title: s.name,
		group: "Semences"
	}));
	RECIPES.forEach((r) => hits.push({
		href: `/atelier#${r.id}`,
		title: r.name,
		group: "Atelier"
	}));
	return hits;
}
function CommandSearch() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)("");
	const router = useRouter();
	const index = (0, import_react.useMemo)(buildIndex, []);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setOpen((v) => !v);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const results = (0, import_react.useMemo)(() => {
		const s = q.trim().toLowerCase();
		if (!s) return index.slice(0, 12);
		return index.filter((h) => h.title.toLowerCase().includes(s) || h.group.toLowerCase().includes(s)).slice(0, 16);
	}, [q, index]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setOpen(true),
		className: "flex h-10 w-full items-center gap-2 rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:bg-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex-1 text-left",
				children: "Rechercher"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
				className: "hidden rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium sm:inline",
				children: "⌘K"
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "gap-3 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: "Recherche"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					autoFocus: true,
					placeholder: "Animal, plante, chaîne, guide…",
					value: q,
					onChange: (e) => setQ(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "max-h-80 overflow-y-auto",
					children: results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "px-2 py-6 text-center text-sm text-muted-foreground",
						children: "Aucun résultat"
					}) : results.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex w-full items-center justify-between rounded-md px-2 py-2.5 text-left text-sm hover:bg-muted",
						onClick: () => {
							setOpen(false);
							setQ("");
							router.history.push(h.href);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: h.group
						})]
					}) }, h.href + h.title))
				})
			]
		})
	})] });
}
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 32 32",
			className: "size-8 shrink-0",
			"aria-hidden": "true",
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "1.5",
					y: "1.5",
					width: "29",
					height: "29",
					rx: "8",
					className: "stroke-primary",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M8 21.5c2.2-6 5-9.5 8-9.5s5.8 3.5 8 9.5",
					className: "stroke-primary",
					strokeWidth: "1.5",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "16",
					cy: "11",
					r: "2.2",
					className: "fill-primary"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-xl font-semibold tracking-tight text-foreground",
			children: "Havre"
		})]
	});
}
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
	ref,
	className: cn("relative overflow-hidden", className),
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corner, {})
	]
}));
ScrollArea.displayName = Root.displayName;
var ScrollBar = import_react.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbar, {
	ref,
	orientation,
	className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
}));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
var Sheet = Dialog$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-foreground/30", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed z-50 gap-4 bg-card p-6 shadow-[var(--shadow-border-hover)] transition ease-out data-[state=open]:animate-in data-[state=closed]:animate-out", side === "right" && "inset-y-0 right-0 h-full w-80 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right", side === "left" && "inset-y-0 left-0 h-full w-80 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left", side === "bottom" && "inset-x-0 bottom-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Fermer"
		})]
	})]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col gap-1.5 text-left", className),
	...props
});
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("font-display text-lg font-semibold", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
var TooltipProvider = Provider;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md bg-foreground px-3 py-1.5 text-xs text-background", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
function NavList({ onNavigate }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "flex flex-col gap-6 pb-8",
		children: NAV.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [group.id === "home" ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 px-2 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground",
			children: group.label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-0.5",
			children: group.items.map((item) => {
				const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(item.href + "/");
				const Icon = item.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.href,
					onClick: onNavigate,
					className: cn("flex min-h-10 items-center gap-2.5 rounded-lg px-2.5 text-sm transition-colors", active ? "bg-sidebar-accent font-medium text-primary" : "text-sidebar-foreground hover:bg-muted"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 shrink-0" }), item.label]
				}) }, item.href);
			})
		})] }, group.id))
	});
}
function AppShell({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const setHydrated = useHavre((s) => s.setHydrated);
	const hydrated = useHavre((s) => s.hydrated);
	(0, import_react.useEffect)(() => {
		if (!hydrated) setHydrated();
	}, [hydrated, setHydrated]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		delayDuration: 200,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-svh",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "fixed inset-y-0 left-0 z-30 hidden w-60 border-r border-sidebar-border bg-sidebar lg:flex lg:flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-16 items-center px-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-3 pb-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandSearch, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
						className: "flex-1 px-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavList, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "border-t border-sidebar-border px-4 py-3 text-[11px] leading-relaxed text-muted-foreground",
						children: "Almanach d’autosuffisance — France, foyer privé."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-60",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur-sm lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: () => setOpen(true),
							"aria-label": "Menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
						open,
						onOpenChange: setOpen,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
							side: "left",
							className: "flex w-80 flex-col bg-sidebar p-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
									className: "h-16 justify-center px-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
										className: "sr-only",
										children: "Navigation"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-3 pb-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandSearch, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
									className: "flex-1 px-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavList, { onNavigate: () => setOpen(false) })
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8",
						children
					})
				]
			})]
		})
	});
}
function AppLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
//#endregion
export { AppLayout as component };
