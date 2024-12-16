import { create } from 'zustand'

type useThemeStoreType = {
    isDarkMode: boolean
    setIsDarkMode: (value: boolean) => void
}

export const useThemeStore = create<useThemeStoreType>((set) => ({
    isDarkMode: false,
    setIsDarkMode: (value) => set({ isDarkMode: value }),
}))