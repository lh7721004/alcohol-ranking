import { create } from 'zustand';
type QRStore = {
    QRcode: string;
    setQRcode: (count: string) => void;
};
export const useQRStore = create<QRStore>((set) => ({
    QRcode: "",
    setQRcode: (QRcode) => set({ QRcode }),
}));
