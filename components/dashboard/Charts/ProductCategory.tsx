import { Card } from '@/components/ui/card'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

export const ProductCategory = () => {

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
    <Card className="p-4">
		<h3 className="font-semibold mb-4">Product Category</h3>
		<div className="h-[200px] flex items-center justify-center">
		  <Doughnut data={categoryData} options={{ maintainAspectRatio: false }} />
		</div>
    </Card>
  )
}
