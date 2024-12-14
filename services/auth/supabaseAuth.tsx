import { ACTIVE } from "@/constants/status";
import { supabase } from "./supabaseClient";

type loginCredentials = {
	email: string;
	password: string;
};

type registerCredentials = {
	email: string;
	password: string;
	first_name: string;
	last_name: string;
	status?: string;
	user_type?: string;
	contact_number: string;
};

export const login = async ({ email, password }: loginCredentials) => {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		console.log("Login Error: ", error);
		throw error;
	}

	const accessToken = data.session.access_token;
	const refreshToken = data.session.refresh_token;
	const userId = data.user.id;
	const accountData = await getAccount(userId);

	return {
		accessToken: accessToken,
		refreshToken: refreshToken,
		accountData: accountData,
	};
};

export const register = async ({
	email,
	password,
	first_name,
	last_name,
	contact_number,
}: registerCredentials) => {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
	});

	if (error) {
		console.log("Error supabase signup", error);
		throw error;
	}

	const insertData = {
		user_id: data.user?.id,
		email: email,
		first_name: first_name,
		last_name: last_name,
		status: ACTIVE,
		user_type: "admin",
		contact_number: contact_number,
	};

	console.log("inserted data", insertData);

	const { data: insertValues, error: insertError } = await supabase
		.from("account")
		.insert(insertData);

	if (insertError) {
		console.log("Error register", insertError);
		throw insertError;
	}

	console.log("success");

	return { insertData, data };
};

export const logout = async () => {
	const { error } = await supabase.auth.signOut();

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

export const getAccount = async (userId: string) => {
	const { data, error } = await supabase
		.from("account")
		.select("*")
		.eq("user_id", userId);

	if (error) {
		console.log("Error fetching account data", error);
	}

	const accountData = data;

	return data?.[0] ?? null;
};

export const rememberMe = (data: any) => {
	localStorage.setItem("account", JSON.parse(data))
};

export const storeSessionStorage = (data: any) => {
	sessionStorage.setItem("account", JSON.stringify(data));
};

export const clearStorage = (storage?: string) => {
	storage === 'local' ? localStorage.clear() : sessionStorage.clear();
};

