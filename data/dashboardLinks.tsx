import { MdSpaceDashboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaBoxes } from "react-icons/fa";

export type SidebarLink = {
    key: string;
    label: string;
    path?: string;
    icon: JSX.Element;
    subLinks?: {
        key: string;
        label: string;
        path: string;
        icon?: JSX.Element;
    }[];
};

export const dashboardLinks: SidebarLink[] = [
    {
        key: "dashboard",
        label: "Dashboard",
        path: "/dashboard",
        icon: <MdSpaceDashboard />,
    },
    {
        key: "inventory",
        label: "Inventory",
        icon: <FaBoxes />,
        subLinks: [
            {
                key: "products",
                label: "Products",
                path: "/dashboard/inventory/products",
            },
            {
                key: "categories",
                label: "Categories",
                path: "/dashboard/inventory/categories",
            }
        ],
    },
    {
        key: "account-settings",
        label: "Account Settings",
        icon: <IoSettings />,
        subLinks: [
            {
                key: "change-theme",
                label: "Change Theme",
                path: "/account-settings/change-theme",
            },
        ],
    }
];