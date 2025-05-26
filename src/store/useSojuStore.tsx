import { create } from 'zustand';

type SojuStore = {
    sojuCount: number;
    setSojuCount: (count: number) => void;
};
  
export const useSojuStore = create<SojuStore>((set) => ({
    sojuCount: 0,
    setSojuCount: (sojuCount) => set({ sojuCount }),
}));
