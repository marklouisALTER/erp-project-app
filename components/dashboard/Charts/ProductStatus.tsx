import { Card } from '@/components/ui/card'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

export const ProductStatus = () => {
    	  // Data for the status chart
	  const statusData = {
		labels: ['Estimated', 'Approved', 'Pending'],
		datasets: [{
		  data: [35, 40, 25],
		  backgroundColor: ['#0EA5E9', '#FCD34D', '#10B981'],
		  borderWidth: 0,
		}]
	  }
	
  return (
    <Card className="p-4">
		<h3 className="font-semibold mb-4">Product Status</h3>
        <div className="h-[200px] flex items-center justify-center">
            <Doughnut data={statusData} options={{ maintainAspectRatio: false }} />
        </div>
    </Card> 
  )
}
