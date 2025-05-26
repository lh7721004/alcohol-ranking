import { create } from 'zustand';

export const useBeerStore = create((set) => ({
    beerCount: 0,
    setBeerCount: (beerCount) => set({ beerCount }),
}));
