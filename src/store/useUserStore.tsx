import { create } from 'zustand';
export type User = {
    id: string;
    name: string;
    email: string;
    // 옵션, 필요에 따라 추가 가능한 필드
    [key: string]: any;
};
export type UserStore = {
    user: User | null;
    isLoggedIn: boolean;
    accessToken: string | null;
    refreshToken: string | null;
    login: (user: User, accessToken: string, refreshToken?: string | null) => void;
    logout: () => void;
    updateUser: (updatedUser: Partial<User>) => void;
    setAccessToken: (accessToken: string) => void;
    setRefreshToken: (refreshToken: string) => void;
};
export const useUserStore = create<UserStore>((set) => ({
    // 유저 객체 ({ id, name, email, ... } 이런거 저장)
    user: null,
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null,
    login: (user, accessToken, refreshToken = null) =>
        set({
        user,
        isLoggedIn: true,
        accessToken,
        refreshToken,
        }),
    logout: () =>
        set({
        user: null,
        isLoggedIn: false,
        accessToken: null,
        refreshToken: null,
        }),
    updateUser: (updatedUser) =>
        set((state) => ({
        user: { ...state.user, ...updatedUser },
        })),
    setAccessToken: (accessToken) =>
        set({ accessToken }),
    setRefreshToken: (refreshToken) =>
        set({ refreshToken }),
}));
