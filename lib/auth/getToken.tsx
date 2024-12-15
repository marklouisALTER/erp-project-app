import { getSession, getToken } from "@/services/auth/supabaseAuth";

export const isAuthenticated = async () => {
	const { accessToken } = await getToken();

	return (
		accessToken === sessionStorage.getItem("accessToken") ||
		accessToken === localStorage.getItem("accessToken")
	);
};
