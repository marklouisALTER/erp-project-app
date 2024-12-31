"use client"

import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useProductStore } from '@/store/useProductstore'

export function SearchAndFilters() {
  const { filteredProducts, sortProducts, filterByStockStatus } = useProductStore();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    filteredProducts(searchValue);
  };

  const handleSort = (value: string) => {
    sortProducts(value);
  };

  const handleFilter = (value: string) => {
    filterByStockStatus(value);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
        <Input
          placeholder="Search the product name"
          className="pl-10"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <div className="flex gap-4">
        <Select onValueChange={handleFilter}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="in-stock">In Stock</SelectItem>
            <SelectItem value="out-of-stock">Out of Stock</SelectItem>
            <SelectItem value="low-stock">Low Stock</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={handleSort}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="name-asc">Name (A-Z)</SelectItem>
            <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            <SelectItem value="price-asc">Price (Low-High)</SelectItem>
            <SelectItem value="price-desc">Price (High-Low)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

