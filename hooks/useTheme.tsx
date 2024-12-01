import { create } from 'zustand';

type Theme = {
    isDark: boolean;
    toggleTheme: () => void;
}

export const useTheme = create<Theme>((set) => ({
    isDark: false,
    toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}));