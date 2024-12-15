"use client";

import { register } from "@/services/auth/supabaseAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormItem,
	FormField,
	FormDescription,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { WavyElement } from "@/components/elements/wavy";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "antd";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { registerSchema } from "@/schema";

export default function Register() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: "",
			password: "",
			first_name: "",
			last_name: "",
			contact_number: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof registerSchema>) => {
		setLoading(true);

		try {
			const response = await register(values);
			toast.success("Registration successful!");
			form.reset();
			router.push("/login");
		} catch (error) {
			toast.error("Something went wrong.");
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="relative w-full h-screen flex items-center justify-center px-5 antialiased">
			<div className="w-[30rem] h-[40rem] z-[99] rounded-xl bg-white shadow-2xl shadow-gray-800/40 border-2 border-gray-200 p-5">
				<div className="items-center justify-center text-center">
					<h1>Logo here</h1>
				</div>
				<div className="flex-col p-4 justify-center items-center">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<FormField
								control={form.control}
								name="first_name"
								render={({ field }) => (
									<FormItem className={cn(" pb-4")}>
										<FormLabel>First Name</FormLabel>
										<FormControl>
											<Input
												placeholder="First Name"
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
								name="last_name"
								render={({ field }) => (
									<FormItem className={cn(" pb-4")}>
										<FormLabel>Last Name</FormLabel>
										<FormControl>
											<Input
												placeholder="Last Name"
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
								name="contact_number"
								render={({ field }) => (
									<FormItem className={cn("pb-4")}>
										<FormLabel>Contact Number</FormLabel>
										<FormControl>
											<Input
												placeholder="Contact Number"
												maxLength={11}
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
								name="email"
								render={({ field }) => (
									<FormItem className={cn("pb-4")}>
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
									<FormItem className={cn("pb-4")}>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="Password"
												{...field}
											/>
										</FormControl>
										<FormMessage
											className={cn("text-red-600")}
										/>
									</FormItem>
								)}
							></FormField>
							<Button
								type="primary"
								loading={loading}
								htmlType="submit"
								className="w-full mt-5"
							>
								Register
							</Button>
						</form>
					</Form>
				</div>
			</div>
			<WavyElement />
		</section>
	);
}
