import { create } from "zustand";

type sidebarStoreType = {
    isOpen: boolean;
    toggleSidebar: () => void;
}

export const useSidebarStore = create<sidebarStoreType>((set) => ({
    isOpen: false,
    toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
})); 