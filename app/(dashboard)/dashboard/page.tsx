"use client";

import { isAuthenticated } from "@/lib/auth/getToken";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MoreVertical, PenToolIcon as Tool, FileText, CheckCircle } from 'lucide-react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)


export default function page() {
	const router = useRouter();

	useEffect(() => {
		!isAuthenticated() ? router.push("/login") : null;
	}, []);

	  // Data for the status chart
	  const statusData = {
		labels: ['Estimated', 'Approved', 'Pending'],
		datasets: [{
		  data: [35, 40, 25],
		  backgroundColor: ['#0EA5E9', '#FCD34D', '#10B981'],
		  borderWidth: 0,
		}]
	  }
	
	  // Data for the category chart
	  const categoryData = {
		labels: ['Food', 'Hardware', 'Others'],
		datasets: [{
		  data: [60, 25, 15],
		  backgroundColor: ['#0EA5E9', '#FCD34D', '#10B981'],
		  borderWidth: 0,
		}]
	  }
	

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
	<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
	  <Card className="p-4">
		<div className="flex items-center gap-4">
		  <div className="p-2 bg-blue-100 rounded-lg">
			<Tool className="w-6 h-6 text-blue-600" />
		  </div>
		  <div>
			<p className="text-2xl font-bold">258</p>
			<p className="text-sm text-muted-foreground">Total Product Order</p>
			<p className="text-sm text-green-600">↑ 22% higher</p>
		  </div>
		</div>
	  </Card>
	  <Card className="p-4">
		<div className="flex items-center gap-4">
		  <div className="p-2 bg-yellow-100 rounded-lg">
			<FileText className="w-6 h-6 text-yellow-600" />
		  </div>
		  <div>
			<p className="text-2xl font-bold">142</p>
			<p className="text-sm text-muted-foreground">Estimated Shipping</p>
			<p className="text-sm text-red-600">↓ 27% completed</p>
		  </div>
		</div>
	  </Card>
	  <Card className="p-4">
		<div className="flex items-center gap-4">
		  <div className="p-2 bg-green-100 rounded-lg">
			<CheckCircle className="w-6 h-6 text-green-600" />
		  </div>
		  <div>
			<p className="text-2xl font-bold">116</p>
			<p className="text-sm text-muted-foreground">Approved products</p>
			<p className="text-sm text-green-600">↑ 35% approved</p>
		  </div>
		</div>
	  </Card>
	</div>

	{/* Charts */}
	<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
	  <Card className="p-4">
		<h3 className="font-semibold mb-4">Product Status</h3>
		<div className="h-[200px] flex items-center justify-center">
		  <Doughnut data={statusData} options={{ maintainAspectRatio: false }} />
		</div>
	  </Card>
	  <Card className="p-4">
		<h3 className="font-semibold mb-4">Product Category</h3>
		<div className="h-[200px] flex items-center justify-center">
		  <Doughnut data={categoryData} options={{ maintainAspectRatio: false }} />
		</div>
	  </Card>
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
		  <Button>Filter</Button>
		</div>

		{/* Table */}
		<Table>
		  <TableHeader>
			<TableRow>
			  <TableHead className="w-[50px]">
				<Input type="checkbox" className="w-4 h-4" />
			  </TableHead>
			  <TableHead>Sl. No.</TableHead>
			  <TableHead>Product name</TableHead>
			  <TableHead>Product code</TableHead>
			  <TableHead>Product category</TableHead>
			  <TableHead>Status</TableHead>
			  <TableHead>Action</TableHead>
			  <TableHead></TableHead>
			</TableRow>
		  </TableHeader>
		  <TableBody>
			{[1, 2, 3].map((row) => (
			  <TableRow key={row}>
				<TableCell>
				  <Input type="checkbox" className="w-4 h-4" />
				</TableCell>
				<TableCell>{row}</TableCell>
				<TableCell>Burger Patty</TableCell>
				<TableCell>10000000105</TableCell>
				<TableCell>Foods</TableCell>
				<TableCell>
				  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
					New
				  </span>
				</TableCell>
				<TableCell>
				  <Button variant="outline" className="bg-yellow-50 text-gray-700">Prepare Estimate</Button>
				</TableCell>
				<TableCell>
				  <Button variant="ghost" size="icon">
					<MoreVertical className="w-4 h-4" />
				  </Button>
				</TableCell>
			  </TableRow>
			))}
		  </TableBody>
		</Table>
	  </div>
	</Card>
  </div>
	);
}
