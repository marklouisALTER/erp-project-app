"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

type categoryType = {
    id: string
    label: string
}[]

const categories:categoryType = [
    { id: 'branch-one', label: 'Main Branch' },
    { id: 'branch-two', label: 'Quezon Branch' },
    { id: 'branch-three', label: 'Malabon Branch' },
    { id: 'branch-four', label: 'Makati Branch' },
  ]
  

export function ProductTabs() {
  return (
    <Tabs defaultValue="branch-one" className="mb-6">
      <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
        {categories.map((category) => (
          <TabsTrigger
            key={category.id}
            value={category.id}
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#f54714] rounded-none px-4 py-2"
          >
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}

