import { create } from 'zustand';

export const useUserStore = create((set) => ({
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
