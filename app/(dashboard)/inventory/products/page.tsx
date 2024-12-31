import { ProductTableMain } from '@/components/dashboard/Table/ProductTableMain'
import { AddProductButton } from '@/components/dashboard/Modals/AddProduct'
import { ProductTabs } from '@/components/dashboard/Tabs/ProductTabs'
import { SearchAndFilters } from '@/components/dashboard/Filters/ProductFilters'

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">List of Products</h1>
        <AddProductButton />
      </div>
      <ProductTabs />
      <SearchAndFilters />
      <ProductTableMain />
    </div>
  )
}

