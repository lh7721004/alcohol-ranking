import { create } from 'zustand';
type QRStore = {
    QRcode: string;
    QRTime: Date;
    setQRcode: (QRcode: string) => void;
    setQRTime: (QRTime: Date) => void;
};
export const useQRStore = create<QRStore>((set) => ({
    QRcode: "",
    QRTime: undefined,
    setQRcode: (QRcode) => set({ QRcode }),
    setQRTime: (QRTime) => set({ QRTime })
}));
