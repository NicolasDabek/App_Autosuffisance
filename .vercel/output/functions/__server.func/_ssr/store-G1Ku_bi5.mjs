import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-G1Ku_bi5.js
var defaultProfile = {
	completed: false,
	people: 2,
	surfaceM2: 200,
	gardenM2: 80,
	climate: "semi-oceanique",
	setting: "periurbain",
	hoursPerWeek: 6,
	budgetEur: 1500,
	noiseTolerance: "moyen",
	animalsPresent: [],
	housing: {
		type: "maison",
		year: 1975,
		floorM2: 100,
		insulation: "moyenne",
		roofM2: 80,
		heating: "gaz",
		kwhElecYear: 4500,
		kwhHeatYear: 12e3
	},
	wasteKgWeek: 6,
	goals: [],
	activeChainIds: []
};
var useHavre = create()(persist((set) => ({
	hydrated: false,
	profile: defaultProfile,
	logs: [],
	forageIds: [],
	stocks: {},
	doneTasks: [],
	planIds: [],
	planM2: {},
	setHydrated: () => set({ hydrated: true }),
	patchProfile: (p) => set((s) => ({ profile: {
		...s.profile,
		...p
	} })),
	patchHousing: (p) => set((s) => ({ profile: {
		...s.profile,
		housing: {
			...s.profile.housing,
			...p
		}
	} })),
	toggleAnimal: (id) => set((s) => ({ profile: {
		...s.profile,
		animalsPresent: s.profile.animalsPresent.includes(id) ? s.profile.animalsPresent.filter((x) => x !== id) : [...s.profile.animalsPresent, id]
	} })),
	toggleChain: (id) => set((s) => ({ profile: {
		...s.profile,
		activeChainIds: s.profile.activeChainIds.includes(id) ? s.profile.activeChainIds.filter((x) => x !== id) : [...s.profile.activeChainIds, id]
	} })),
	toggleGoal: (id) => set((s) => ({ profile: {
		...s.profile,
		goals: s.profile.goals.includes(id) ? s.profile.goals.filter((x) => x !== id) : [...s.profile.goals, id]
	} })),
	addLog: (e) => set((s) => ({ logs: [{
		...e,
		id: crypto.randomUUID()
	}, ...s.logs].slice(0, 400) })),
	removeLog: (id) => set((s) => ({ logs: s.logs.filter((l) => l.id !== id) })),
	toggleForageSaved: (id) => set((s) => ({ forageIds: s.forageIds.includes(id) ? s.forageIds.filter((x) => x !== id) : [...s.forageIds, id] })),
	setStock: (id, qty) => set((s) => ({ stocks: {
		...s.stocks ?? {},
		[id]: qty
	} })),
	toggleTask: (key) => set((s) => {
		const cur = s.doneTasks ?? [];
		return { doneTasks: cur.includes(key) ? cur.filter((k) => k !== key) : [...cur, key].slice(-400) };
	}),
	togglePlan: (id) => set((s) => {
		const cur = s.planIds ?? [];
		const on = cur.includes(id);
		const planM2 = { ...s.planM2 ?? {} };
		if (on) delete planM2[id];
		return {
			planIds: on ? cur.filter((x) => x !== id) : [...cur, id],
			planM2
		};
	}),
	setPlanM2: (id, m2) => set((s) => {
		const planM2 = { ...s.planM2 ?? {} };
		if (m2 <= 0) delete planM2[id];
		else planM2[id] = m2;
		return { planM2 };
	}),
	clearPlanM2: () => set({ planM2: {} }),
	clearPlan: () => set({
		planIds: [],
		planM2: {}
	}),
	resetAll: () => set({
		profile: defaultProfile,
		logs: [],
		forageIds: [],
		stocks: {},
		doneTasks: [],
		planIds: [],
		planM2: {}
	})
}), {
	name: "havre-store",
	onRehydrateStorage: () => (state) => {
		state?.setHydrated();
	},
	partialize: (s) => ({
		profile: s.profile,
		logs: s.logs,
		forageIds: s.forageIds,
		stocks: s.stocks,
		doneTasks: s.doneTasks,
		planIds: s.planIds,
		planM2: s.planM2
	})
}));
//#endregion
export { useHavre as t };
