import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string(),
});

export const registerSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password should be atleast 6 characters"),
	first_name: z.string(),
	last_name: z.string(),
	contact_number: z.string().min(11, "Invalid phone number.").startsWith('09', 'It should starts with 09'),
});

