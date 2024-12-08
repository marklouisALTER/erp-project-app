import { MdSpaceDashboard } from "react-icons/md";

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
        icon: <MdSpaceDashboard />,
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
        icon: <MdSpaceDashboard />,
        path: "/dashboard/account-settings",
    }
];