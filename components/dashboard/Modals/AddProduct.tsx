"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AddProductButton() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#f54714] hover:bg-[#d93d0c] text-white">
          Add new product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Price</Label>
            <Input id="price" type="number" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="stock">Stock</Label>
            <Input id="stock" type="number" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="basePrice">Base Price</Label>
            <Input id="basePrice" type="number" />
          </div>
          <Button
            onClick={() => setOpen(false)}
            className="bg-[#f54714] hover:bg-[#d93d0c] text-white"
          >
            Add Product
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

