import { create } from "zustand";

type mockProductsType = {
    id: number
    name: string
    price: number
    stock: number
    basePrice: number
    margin: number
    cost: number
    status: { current: number, total: number }
    stock_status: string
    lastUpdated: string
}[];

type ProductStoreType = {
    products: mockProductsType
    setProducts: (products: mockProductsType) => void
    filteredProducts: (searchItem: string) => void
    sortProducts: (sortOption: string) => void
    filterByStockStatus: (status: string) => void
}

const mockProducts:mockProductsType = [
    {
      id: 1,
      name: "Monstera",
      price: 48.00,
      stock: 200,
      basePrice: 39.02,
      margin: 8.98,
      cost: 0.22,
      status: { current: 10, total: 50 },
      stock_status: "in-stock",
      lastUpdated: "10-09-2019",
    },
    {
      id: 2,
      name: "Lipstick",
      price: 69.00,
      stock: 300,
      basePrice: 50.02,
      margin: 19.98,
      cost: 0.22,
      status: { current: 10, total: 300 },
      stock_status: "in-stock",
      lastUpdated: "10-09-2019",
    },
    {
      id: 3,
      name: "Cactus",
      price: 25.00,
      stock: 500,
      basePrice: 15.02,
      margin: 9.98,
      cost: 0.22,
      status: { current: 10, total: 500 },
      stock_status: "in-stock",
      lastUpdated: "10-09-2019",
    },
    {
      id: 4,
      name: "Fiddle Leaf Fig",
      price: 35.00,
      stock: 100,
      basePrice: 25.02,
      margin: 9.98,
      cost: 0.22,
      status: { current: 10, total: 100 },
      stock_status: "in-stock",
      lastUpdated: "10-09-2019",
    },
    {
      id: 5,
      name: "Snake Plant",
      price: 20.00,
      stock: 100,
      basePrice: 15.02,
      margin: 4.98,
      cost: 0.22,
      status: { current: 10, total: 100 },
      stock_status: "in-stock",
      lastUpdated: "10-09-2019",
    },
    {
      id: 6,
      name: "Peace Lily",
      price: 30.00,
      stock: 200,
      basePrice: 20.02,
      margin: 9.98,
      cost: 0.22,
      status: { current: 10, total: 200 },
      stock_status: "in-stock",
      lastUpdated: "10-09-2019",
    },
    {
      id: 7,
      name: "Rubber Plant",
      price: 40.00,
      stock: 200,
      basePrice: 30.02,
      margin: 9.98,
      cost: 0.22,
      status: { current: 10, total: 200 },
      stock_status: "in-stock",
      lastUpdated: "10-09-2019",
    },
    {
      id: 8,
      name: "Pothos",
      price: 15.00,
      stock: 200,
      basePrice: 10.02,
      margin: 4.98,
      cost: 0.22,
      status: { current: 10, total: 200 },
      stock_status: "in-stock",
      lastUpdated: "10-09-2019",
    },

  ]
  export const useProductStore = create<ProductStoreType>((set) => ({
    products: mockProducts,
    setProducts: (products) => set({ products }),
  
    filteredProducts: (searchItem) => {
      const filteredProducts = mockProducts.filter((product) =>
        product.name.toLowerCase().includes(searchItem.toLowerCase())
      );
      set({ products: filteredProducts });
    },
  
    sortProducts: (sortOption) => {
      let sortedProducts = [...mockProducts];
      switch (sortOption) {
        case "name-asc":
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-desc":
          sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "price-asc":
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
      }
      set({ products: sortedProducts });
    },
  
    filterByStockStatus: (status) => {
      const filteredProducts =
        status === "all"
          ? mockProducts
          : mockProducts.filter((product) => product.stock_status === status);
      set({ products: filteredProducts });
    },
  }));
  