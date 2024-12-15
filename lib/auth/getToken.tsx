import { getSession } from "@/services/auth/supabaseAuth";

export const isAuthenticated = async () => {
	const session = await getSession();

	return (
		session?.access_token === sessionStorage.getItem("accessToken") ||
		session?.access_token === localStorage.getItem("accessToken")
	);
};
