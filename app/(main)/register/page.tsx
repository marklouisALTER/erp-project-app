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
import { Button } from "@/components/ui/button";
import { WavyElement } from "@/components/elements/wavy";

const formScema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string(),
	first_name: z.string(),
	last_name: z.string(),
	contact_number: z.string().min(11, "Invalid phone number."),
});

export default function Register() {
	const form = useForm<z.infer<typeof formScema>>({
		resolver: zodResolver(formScema),
		defaultValues: {
			email: "",
			password: "",
			first_name: "",
			last_name: "",
			contact_number: "",
		},
	});

	const onSubmit = (values: z.infer<typeof formScema>) => {
		console.log("submitted");
		console.log(values);

		//register()
	};

	return (
		<section className="relative w-full h-screen flex items-center justify-center px-5 antialiased">
			<div className="w-[40rem] h-[35rem] z-[99] rounded-xl bg-white shadow-2xl shadow-gray-800/40 border-2 border-gray-200 p-5">
				<div className="items-center justify-center text-center">
					<h1>Logo here</h1>
				</div>
				<div className="flex-col p-4">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<FormField
								control={form.control}
								name="first_name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>First Name</FormLabel>
										<FormControl>
											<Input
												placeholder="First name"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							></FormField>
							<FormField
								control={form.control}
								name="last_name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Last Name</FormLabel>
										<FormControl>
											<Input
												placeholder="Last Name"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							></FormField>
							<FormField
								control={form.control}
								name="contact_number"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Contact Number</FormLabel>
										<FormControl>
											<Input
												placeholder="Contact Number"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							></FormField>
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
										<FormMessage />
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
												type="password"
												placeholder="Password"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							></FormField>
							<div className="text-center py-5">
								<Button type="submit">Submit</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
			<WavyElement />
		</section>
	);
}
