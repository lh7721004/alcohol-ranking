import { create } from 'zustand';

export const useQRStore = create((set) => ({
    QRcode: "",
    setQRcode: (QRcode) => set({ QRcode }),
}));
