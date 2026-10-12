import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as lazyRouteComponent, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BDx6cqcl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-BnuWWY8X.css";
var APP_NAME = "Havre";
var Route$25 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Almanach d'autosuffisance alimentaire, énergétique et circulaire pour particuliers en France."
			},
			{
				name: "theme-color",
				content: "#3A5340"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "antialiased",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitNotFoundComponentImporter = () => import("../_app-BVOQqFvs.mjs");
var $$splitComponentImporter$24 = () => import("../_app-DJGC1n8m.mjs");
var Route$24 = createFileRoute("/_app")({
	component: lazyRouteComponent($$splitComponentImporter$24, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var $$splitComponentImporter$23 = () => import("../_app-Cg6yJiRY.mjs");
var Route$23 = createFileRoute("/_app/")({ component: lazyRouteComponent($$splitComponentImporter$23, "component") });
var $$splitComponentImporter$22 = () => import("./atelier-CQYYUJGl.mjs");
var Route$22 = createFileRoute("/_app/atelier")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
var $$splitComponentImporter$21 = () => import("./bricolage-CUSDtG-O.mjs");
var Route$21 = createFileRoute("/_app/bricolage")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("./calendrier-5Rmqxowt.mjs");
var Route$20 = createFileRoute("/_app/calendrier")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./chaines-Dkhs-lFj.mjs");
var Route$19 = createFileRoute("/_app/chaines")({
	validateSearch: (s) => typeof s.id === "string" && s.id ? { id: s.id } : {},
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./conservation-DomXynZN.mjs");
var Route$18 = createFileRoute("/_app/conservation")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./cueillette-CvbvFVZD.mjs");
var Route$17 = createFileRoute("/_app/cueillette")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./dechets-_MRA9Hvh.mjs");
var Route$16 = createFileRoute("/_app/dechets")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./eau-DMyHaeAn.mjs");
var Route$15 = createFileRoute("/_app/eau")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./elevage-CSpsGoK_.mjs");
var Route$14 = createFileRoute("/_app/elevage")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./energie-CMUj8Pcs.mjs");
var Route$13 = createFileRoute("/_app/energie")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./garde-CFaYoL73.mjs");
var Route$12 = createFileRoute("/_app/garde")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./journal-7vez38Iz.mjs");
var Route$11 = createFileRoute("/_app/journal")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./legal-C__P3rKV.mjs");
var Route$10 = createFileRoute("/_app/legal")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./potager-Nr4sGJ6D.mjs");
var Route$9 = createFileRoute("/_app/potager")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./semis-DM_mhhUn.mjs");
var Route$8 = createFileRoute("/_app/semis")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./sol-PxdC-rQ7.mjs");
var Route$7 = createFileRoute("/_app/sol")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./verger-ejiwsrIZ.mjs");
var Route$6 = createFileRoute("/_app/verger")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./bricolage.index-B-ZxMfba.mjs");
var Route$5 = createFileRoute("/_app/bricolage/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./bricolage._id-BfUiO31S.mjs");
var Route$4 = createFileRoute("/_app/bricolage/$id")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./cueillette.index-BU3Ffa-v.mjs");
var Route$3 = createFileRoute("/_app/cueillette/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./cueillette._id-BbOjvGEc.mjs");
var Route$2 = createFileRoute("/_app/cueillette/$id")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./elevage.index-CzISiUNu.mjs");
var Route$1 = createFileRoute("/_app/elevage/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./elevage._id-BAnm6X8k.mjs");
var Route = createFileRoute("/_app/elevage/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var AppRoute = Route$24.update({
	id: "/_app",
	getParentRoute: () => Route$25
});
var AppIndexRoute = Route$23.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppRoute
});
var AppAtelierRoute = Route$22.update({
	id: "/atelier",
	path: "/atelier",
	getParentRoute: () => AppRoute
});
var AppBricolageRoute = Route$21.update({
	id: "/bricolage",
	path: "/bricolage",
	getParentRoute: () => AppRoute
});
var AppCalendrierRoute = Route$20.update({
	id: "/calendrier",
	path: "/calendrier",
	getParentRoute: () => AppRoute
});
var AppChainesRoute = Route$19.update({
	id: "/chaines",
	path: "/chaines",
	getParentRoute: () => AppRoute
});
var AppConservationRoute = Route$18.update({
	id: "/conservation",
	path: "/conservation",
	getParentRoute: () => AppRoute
});
var AppCueilletteRoute = Route$17.update({
	id: "/cueillette",
	path: "/cueillette",
	getParentRoute: () => AppRoute
});
var AppDechetsRoute = Route$16.update({
	id: "/dechets",
	path: "/dechets",
	getParentRoute: () => AppRoute
});
var AppEauRoute = Route$15.update({
	id: "/eau",
	path: "/eau",
	getParentRoute: () => AppRoute
});
var AppElevageRoute = Route$14.update({
	id: "/elevage",
	path: "/elevage",
	getParentRoute: () => AppRoute
});
var AppEnergieRoute = Route$13.update({
	id: "/energie",
	path: "/energie",
	getParentRoute: () => AppRoute
});
var AppGardeRoute = Route$12.update({
	id: "/garde",
	path: "/garde",
	getParentRoute: () => AppRoute
});
var AppJournalRoute = Route$11.update({
	id: "/journal",
	path: "/journal",
	getParentRoute: () => AppRoute
});
var AppLegalRoute = Route$10.update({
	id: "/legal",
	path: "/legal",
	getParentRoute: () => AppRoute
});
var AppPotagerRoute = Route$9.update({
	id: "/potager",
	path: "/potager",
	getParentRoute: () => AppRoute
});
var AppSemisRoute = Route$8.update({
	id: "/semis",
	path: "/semis",
	getParentRoute: () => AppRoute
});
var AppSolRoute = Route$7.update({
	id: "/sol",
	path: "/sol",
	getParentRoute: () => AppRoute
});
var AppVergerRoute = Route$6.update({
	id: "/verger",
	path: "/verger",
	getParentRoute: () => AppRoute
});
var AppBricolageIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppBricolageRoute
});
var AppBricolageIdRoute = Route$4.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AppBricolageRoute
});
var AppCueilletteIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppCueilletteRoute
});
var AppCueilletteIdRoute = Route$2.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AppCueilletteRoute
});
var AppElevageIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppElevageRoute
});
var AppElevageIdRoute = Route.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AppElevageRoute
});
var AppBricolageRouteChildren = {
	AppBricolageIdRoute,
	AppBricolageIndexRoute
};
var AppBricolageRouteWithChildren = AppBricolageRoute._addFileChildren(AppBricolageRouteChildren);
var AppCueilletteRouteChildren = {
	AppCueilletteIdRoute,
	AppCueilletteIndexRoute
};
var AppCueilletteRouteWithChildren = AppCueilletteRoute._addFileChildren(AppCueilletteRouteChildren);
var AppElevageRouteChildren = {
	AppElevageIdRoute,
	AppElevageIndexRoute
};
var AppRouteChildren = {
	AppAtelierRoute,
	AppBricolageRoute: AppBricolageRouteWithChildren,
	AppCalendrierRoute,
	AppChainesRoute,
	AppConservationRoute,
	AppCueilletteRoute: AppCueilletteRouteWithChildren,
	AppDechetsRoute,
	AppEauRoute,
	AppElevageRoute: AppElevageRoute._addFileChildren(AppElevageRouteChildren),
	AppEnergieRoute,
	AppGardeRoute,
	AppJournalRoute,
	AppLegalRoute,
	AppPotagerRoute,
	AppSemisRoute,
	AppSolRoute,
	AppVergerRoute,
	AppIndexRoute
};
var rootRouteChildren = { AppRoute: AppRoute._addFileChildren(AppRouteChildren) };
var routeTree = Route$25._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { Route$19 as a, Route$4 as i, Route as n, Route$2 as r, router_exports as t };
