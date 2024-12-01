import { supabase } from "./supabaseClient";

type loginCredentials = {
	email: string;
	password: string;
};

export const login = async ({ email, password }: loginCredentials) => {
	const { data, error } = supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		console.log("Login Error: ", error);
		throw error;
	}

	return data;
};

export const logout = async () => {
	const { error } = supabase.auth.signOut();

	if (error) {
		console.log("Logout Error: ", error);
		return false;
	}

	return true;
};

export const getUser = async () => {
	const { data, error } = await supabase.auth.getUser();

	if (error) {
		console.log("Error getting user details: ", error);
	}

	return data.user;
};

export const getSession = async () => {
	const { data, error } = await supabase.auth.getSession();

	if (error) {
		console.log("Error getting user session: ", error);
	}

	return data.session;
};
