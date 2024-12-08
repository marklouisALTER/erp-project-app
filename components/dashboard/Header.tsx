"use client";

import { useSidebarStore } from "@/store/useSidebarStore";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

export default function Header() {
    const { isOpen, toggleSidebar } = useSidebarStore();

    return (
        <header className="bg-custom-gray fixed w-full lg:w-[calc(100%-265px)] lg:ml-[265px] z-20">
            <div className="flex justify-between items-center h-16 px-4">
                <h1 className="text-2xl font-bold text-custom-orange">ERP</h1>

                {/* Sidebar Toggle Button for Small Screens */}
                <button
                    className="block lg:hidden p-2 bg-custom-orange text-white rounded-md shadow-md"
                    onClick={toggleSidebar}
                >
                    {isOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
                </button>
            </div>
        </header>
    );
}
