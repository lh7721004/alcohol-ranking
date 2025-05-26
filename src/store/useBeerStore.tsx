import { create } from 'zustand';
type BeerStore = {
    beerCount: number;
    setBeerCount: (count: number) => void;
};
export const useBeerStore = create<BeerStore>((set) => ({
    beerCount: 0,
    setBeerCount: (beerCount) => set({ beerCount }),
}));
