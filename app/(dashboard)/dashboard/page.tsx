"use client";

import { isAuthenticated } from "@/lib/auth/getToken";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Card } from "@/components/ui/card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { ProductTable } from "@/components/dashboard/Table/ProductTable";
import { ProductStatus } from "@/components/dashboard/Charts/ProductStatus";
import { ProductCategory } from "@/components/dashboard/Charts/ProductCategory";
import { ProductSummary } from "@/components/dashboard/Cards/ProductSummary";

ChartJS.register(ArcElement, Tooltip, Legend)


export default function page() {
	const router = useRouter();

	useEffect(() => {
		!isAuthenticated() ? router.push("/login") : null;
	}, []);

	return (
		<div className="p-6 max-w-7xl mx-auto space-y-6">
			{/* Header */}
			<div className="flex justify-between items-center">
				<div>
					<h1 className="text-2xl font-bold">Hello, Mark Louis</h1>
					<p className="text-muted-foreground">Front End Engineer</p>
				</div>
				<div className="flex items-center gap-4">
					<span className="font-semibold">Summary Report</span>
					<span>01 Jan 2020 - 31 Jan 2020</span>
				</div>
			</div>

			{/* Stats Overview */}
			<ProductSummary />

			{/* Charts */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<ProductStatus />
				<ProductCategory />
			</div>

			{/* Tasks Table */}
			<Card>
				<div className="p-4">
					<h2 className="text-xl font-semibold mb-4">All Products</h2>
					
					{/* Filters */}
					<div className="flex gap-4 mb-4">
						<Select defaultValue="all">
							<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="All Categories" />
							</SelectTrigger>
							<SelectContent className="bg-white">
							<SelectItem value="all">All Categories</SelectItem>
							<SelectItem value="maintenance">Hardware</SelectItem>
							<SelectItem value="capital">Foods</SelectItem>
							<SelectItem value="others">Others</SelectItem>
							</SelectContent>
						</Select>
						<Input placeholder="Search..." className="max-w-xs" />
						<Button className="bg-custom-orange text-white">Filter</Button>
					</div>

					{/* Table */}
					<ProductTable />
				</div>
			</Card>
  		</div>
	);
}
