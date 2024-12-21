import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MoreVertical } from 'lucide-react'

export const ProductTable = () => {
  return (
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
  )
}
