import type { Metadata } from "next"
import "../globals.css";

export const metadata: Metadata = {
    title: "Erp System Management App",
    description: "Erp System Management App is a web application that helps you manage your business",
}

export default function RootLayout({ children }: Readonly <{children: React.ReactNode}>){
    return (
        <html lang="en">
            <body>
                {/* We will put here the components for auth such as login and sign up */}
               {children}
            </body>
        </html>
    )
}