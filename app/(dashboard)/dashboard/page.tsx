"use client";

import { isAuthenticated } from "@/lib/auth/getToken";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function page() {
	const router = useRouter();

	useEffect(() => {
		!isAuthenticated() ? router.push("/login") : null;
	}, []);

	return <section>Dashboard</section>;
}
