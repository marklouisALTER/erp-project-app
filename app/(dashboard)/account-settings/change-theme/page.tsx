"use client"

import { useState } from "react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch, ConfigProvider } from "antd"

const data = [
  { value: 10 },
  { value: 20 },
  { value: 30 },
  { value: 40 },
  { value: 50 },
  { value: 60 },
  { value: 45 },
  { value: 30 },
]

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#f54714", // Set your active color here
        },
      }}
    >
    <section className="p-5">
        <h3 className="text-2xl font-semibold text-zinc-800">Change Theme</h3>
        <div className="flex flex-col items-center md:flex-row md:items-start gap-8 p-8">
        
        {/* Dark Mode Card */}
        <Card className={`w-[300px] cursor-pointer ${isDarkMode ? "bg-zinc-900" : "bg-white"}`}>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode" className={isDarkMode ? "text-white" : "text-zinc-900"}>
                Dark mode
              </Label>
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onChange={(checked) => setIsDarkMode(checked)}
              />
            </div>
            <Input
              type="search"
              placeholder="Search..."
              className={`${
                isDarkMode ? "bg-zinc-800 text-white border-zinc-700" : "bg-white text-zinc-900"
              }`}
            />
            <div className={`space-y-2 ${isDarkMode ? "text-zinc-400" : "text-zinc-500"}`}>
              <div className="h-2 w-3/4 bg-current rounded opacity-20 bg-custom-orange animate-pulse" />
              <div className="h-2 w-full bg-current rounded opacity-20 bg-custom-orange animate-pulse" />
              <div className="h-2 w-2/3 bg-current rounded opacity-20 bg-custom-orange animate-pulse" />
            </div>
            <div className="h-[120px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="value"
                    fill={isDarkMode ? "#f54714" : "#f54714"}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
  
      </div>
    </section>
    </ConfigProvider>
  )
}
