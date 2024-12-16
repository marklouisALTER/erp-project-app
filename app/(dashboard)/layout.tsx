import type { Metadata } from "next";
import "../globals.css";
import { Karla } from "next/font/google";
import Sidebar from "@/components/dashboard/Sidebar";
import { Suspense } from "react";
import Loader from "@/components/Common/Loader";
import Header from "@/components/dashboard/Header";
import { IsAuth } from "@/lib/auth/AuthProvider";

const karla = Karla({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: "Erp System Management App | Dashboard",
    description: "Erp System Management App is a web application that helps you manage your business",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
    <html lang="en">
        <body className={karla.className}>
            <IsAuth>
                <section className="w-full h-screen">
                    <Sidebar />
                    <div className="flex flex-col h-screen">
                        {/* Header */}
                        <Header />
                        {/* Main Content */}
                        <main className="mt-16 min-h-[calc(100vh-4rem)] lg:ml-[265px]">
                            <Suspense fallback={<Loader />}>{children}</Suspense>
                        </main>
                    </div>
                </section>
            </IsAuth>
        </body>
    </html>
    )
}