"use client";
import { dashboardLinks } from "@/data/dashboardLinks";
import { RiPerplexityLine } from "react-icons/ri";
import { SidebarLinks } from "./links/SidebarLinks";
import { useSidebarStore } from "@/store/useSidebarStore";

export default function Sidebar() {
    const { isOpen, toggleSidebar } = useSidebarStore();

    return (
        <>
            {/* Sidebar for Small Screens */}
            <aside
                className={`fixed top-0 left-0 z-30 h-screen w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } lg:hidden`}
            >
                <nav className="flex h-full flex-col px-5 py-4 shadow-sm">
                    {/* Header Logo */}
                    <div className="mb-8 flex items-center gap-2 py-4 pb-2 text-2xl">
                        <RiPerplexityLine className="text-3xl text-custom-orange" />
                        <span className="font-bold text-custom-orange">ERP</span>
                        <span className="font-bold text-custom-black">Project</span>
                    </div>
                    {/* Sidebar Links */}
                    {dashboardLinks.map((link) => (
                        <SidebarLinks item={link} key={link.key} />
                    ))}
                </nav>
            </aside>

            {/* Sidebar for Large Screens */}
            <aside className="fixed top-0 left-0 z-20 hidden h-screen w-[265px] bg-white shadow-lg lg:block">
                <nav className="flex h-full flex-col px-5 py-4 shadow-sm">
                    {/* Header Logo */}
                    <div className="mb-8 flex items-center gap-2 py-4 pb-2 text-2xl">
                        <RiPerplexityLine className="text-3xl text-custom-orange" />
                        <span className="font-bold text-custom-orange">ERP</span>
                        <span className="font-bold text-custom-black">Project</span>
                    </div>
                    {/* Sidebar Links */}
                    {dashboardLinks.map((link) => (
                        <SidebarLinks item={link} key={link.key} />
                    ))}
                </nav>
            </aside>
        </>
    );
}
