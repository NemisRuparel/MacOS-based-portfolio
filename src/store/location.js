import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "#constants";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location) =>
      set((state) => {
        state.activeLocation = location;   // ✅ use the clicked item
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = locations.work;
      }),
  }))
);

export default useLocationStore;
