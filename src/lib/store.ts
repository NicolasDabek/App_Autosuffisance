import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ClimateId, Setting } from "@/data/types";

export type NoiseTol = "faible" | "moyen" | "eleve";

export type Profile = {
  completed: boolean;
  people: number;
  surfaceM2: number;
  gardenM2: number;
  climate: ClimateId;
  setting: Setting;
  hoursPerWeek: number;
  budgetEur: number;
  noiseTolerance: NoiseTol;
  animalsPresent: string[];
  housing: {
    type: "maison" | "appart";
    year: number;
    floorM2: number;
    insulation: "faible" | "moyenne" | "bonne" | "passive";
    roofM2: number;
    heating: "gaz" | "fioul" | "elec" | "bois" | "pac" | "mixte";
    kwhElecYear: number;
    kwhHeatYear: number;
  };
  wasteKgWeek: number;
  goals: string[];
  activeChainIds: string[];
};

export type LogKind =
  | "recolte"
  | "oeufs"
  | "viande"
  | "miel"
  | "compost"
  | "bois"
  | "pv"
  | "cueillette"
  | "eau";

export type LogEntry = {
  id: string;
  date: string;
  kind: LogKind;
  label: string;
  qty: number;
  unit: string;
  kcal?: number;
};

export const defaultProfile: Profile = {
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
    kwhHeatYear: 12000,
  },
  wasteKgWeek: 6,
  goals: [],
  activeChainIds: [],
};

type State = {
  hydrated: boolean;
  profile: Profile;
  logs: LogEntry[];
  forageIds: string[];
  stocks: Record<string, number>;
  doneTasks: string[];
  planIds: string[];
  planM2: Record<string, number>;
  setHydrated: () => void;
  patchProfile: (p: Partial<Profile>) => void;
  patchHousing: (p: Partial<Profile["housing"]>) => void;
  toggleAnimal: (id: string) => void;
  toggleChain: (id: string) => void;
  toggleGoal: (id: string) => void;
  addLog: (e: Omit<LogEntry, "id">) => void;
  removeLog: (id: string) => void;
  toggleForageSaved: (id: string) => void;
  setStock: (id: string, qty: number) => void;
  toggleTask: (key: string) => void;
  togglePlan: (id: string) => void;
  setPlanM2: (id: string, m2: number) => void;
  clearPlanM2: () => void;
  clearPlan: () => void;
  resetAll: () => void;
};

export const useHavre = create<State>()(
  persist(
    (set) => ({
      hydrated: false,
      profile: defaultProfile,
      logs: [],
      forageIds: [],
      stocks: {},
      doneTasks: [],
      planIds: [],
      planM2: {},
      setHydrated: () => set({ hydrated: true }),
      patchProfile: (p) => set((s) => ({ profile: { ...s.profile, ...p } })),
      patchHousing: (p) =>
        set((s) => ({ profile: { ...s.profile, housing: { ...s.profile.housing, ...p } } })),
      toggleAnimal: (id) =>
        set((s) => ({
          profile: {
            ...s.profile,
            animalsPresent: s.profile.animalsPresent.includes(id)
              ? s.profile.animalsPresent.filter((x) => x !== id)
              : [...s.profile.animalsPresent, id],
          },
        })),
      toggleChain: (id) =>
        set((s) => ({
          profile: {
            ...s.profile,
            activeChainIds: s.profile.activeChainIds.includes(id)
              ? s.profile.activeChainIds.filter((x) => x !== id)
              : [...s.profile.activeChainIds, id],
          },
        })),
      toggleGoal: (id) =>
        set((s) => ({
          profile: {
            ...s.profile,
            goals: s.profile.goals.includes(id)
              ? s.profile.goals.filter((x) => x !== id)
              : [...s.profile.goals, id],
          },
        })),
      addLog: (e) =>
        set((s) => ({
          logs: [{ ...e, id: crypto.randomUUID() }, ...s.logs].slice(0, 400),
        })),
      removeLog: (id) => set((s) => ({ logs: s.logs.filter((l) => l.id !== id) })),
      toggleForageSaved: (id) =>
        set((s) => ({
          forageIds: s.forageIds.includes(id)
            ? s.forageIds.filter((x) => x !== id)
            : [...s.forageIds, id],
        })),
      setStock: (id, qty) =>
        set((s) => ({
          stocks: { ...(s.stocks ?? {}), [id]: qty },
        })),
      toggleTask: (key) =>
        set((s) => {
          const cur = s.doneTasks ?? [];
          return {
            doneTasks: cur.includes(key) ? cur.filter((k) => k !== key) : [...cur, key].slice(-400),
          };
        }),
      togglePlan: (id) =>
        set((s) => {
          const cur = s.planIds ?? [];
          const on = cur.includes(id);
          const planM2 = { ...(s.planM2 ?? {}) };
          if (on) delete planM2[id];
          return {
            planIds: on ? cur.filter((x) => x !== id) : [...cur, id],
            planM2,
          };
        }),
      setPlanM2: (id, m2) =>
        set((s) => {
          const planM2 = { ...(s.planM2 ?? {}) };
          if (m2 <= 0) delete planM2[id];
          else planM2[id] = m2;
          return { planM2 };
        }),
      clearPlanM2: () => set({ planM2: {} }),
      clearPlan: () => set({ planIds: [], planM2: {} }),
      resetAll: () =>
        set({
          profile: defaultProfile,
          logs: [],
          forageIds: [],
          stocks: {},
          doneTasks: [],
          planIds: [],
          planM2: {},
        }),
    }),
    {
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
        planM2: s.planM2,
      }),
    },
  ),
);
