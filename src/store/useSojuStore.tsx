import { create } from 'zustand';

export const useSojuStore = create((set) => ({
    sojuCount: 0,
    setSojuCount: (sojuCount) => set({ sojuCount }),
}));
