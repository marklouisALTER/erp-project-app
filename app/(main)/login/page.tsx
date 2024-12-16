"use client";

import { WavyElement } from "@/components/elements/wavy";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { loginSchema } from "@/schema";
import {
	getSession,
	login,
	rememberMe,
	storeSessionStorage,
} from "@/services/auth/supabaseAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { Button } from "antd";
import { isAuthenticated } from "@/lib/auth/getToken";

export default function Login() {
	const router = useRouter();
	const { isDark } = useTheme();

	const [loading, setLoading] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	// useEffect(() => {
	// 	!isAuthenticated() ? null : router.push("/dashboard");
	// });

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const handleLogin = async (values: z.infer<typeof loginSchema>) => {
		setLoading(true);

		try {
			const response = await login(values);

			if (!isChecked) {
				storeSessionStorage(response);
			} else {
				rememberMe(response);
			}

			toast.success("Login Successs!");
			router.push("/dashboard");
		} catch (error) {
			toast.error("Invalid credentials.");
		} finally {
			setLoading(false);
		}
	};

	const handleCheck = (e) => {
		setIsChecked(e.target.checked);
	};

	return (
		<section className="relative w-full h-screen flex items-center justify-center px-5 antialiased">
			<div className="w-[30rem] h-[18rem] z-[99] rounded-xl bg-white shadow-2xl shadow-gray-800/40 border-2 border-gray-200 p-5">
				<div className="items-center justify-center text-center">
					<h1>Logo here</h1>
				</div>
				<div className="p-4 justify-center items-center">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(handleLogin)}>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												placeholder="Email"
												{...field}
											/>
										</FormControl>
										<FormMessage
											className={cn("text-red-600")}
										/>
									</FormItem>
								)}
							></FormField>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												placeholder="*********"
												type="password"
												{...field}
											/>
										</FormControl>
										<FormMessage
											className={cn("text-red-600")}
										/>
									</FormItem>
								)}
							></FormField>
							<Checkbox
								className={cn("py-2")}
								checked={isChecked}
								onChange={handleCheck}
							>
								Remember me?
							</Checkbox>
							<Button
								type="primary"
								loading={loading}
								htmlType="submit"
								className="w-full"
							>
								Login
							</Button>
						</form>
					</Form>
				</div>
			</div>
			<WavyElement />
		</section>
	);
}
