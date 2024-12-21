import React from 'react'
import { MoreVertical, PenToolIcon as Tool, FileText, CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'

export const ProductSummary = () => {
  return (
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
  )
}
