import type { Metadata } from "next";
import "../globals.css";
import { Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"] });
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
	title: "Erp System Management App",
	description:
		"Erp System Management App is a web application that helps you manage your business",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={karla.className}>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={true}
					closeOnClick
					rtl={false}
					pauseOnHover
				/>
				{/* We will put here the components for auth such as login and sign up */}
				{children}
			</body>
		</html>
	);
}
