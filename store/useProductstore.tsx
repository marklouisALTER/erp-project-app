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
    branch: string
}[];

type ProductStoreType = {
    products: mockProductsType
    currentBranch: string
    setBranch: (branchId: string) => void
    setProducts: (products: mockProductsType) => void
    filteredProducts: (searchItem: string) => void
    sortProducts: (sortOption: string) => void
    filterByStockStatus: (status: string) => void
    filterByBranch: (branchId: string) => void
}

const mockProducts: mockProductsType = [
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
    branch: "branch-one",
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
    branch: "branch-two", 
  },
  {
    id: 3,
    name: "Snake Plant",
    price: 34.00,
    stock: 150,
    basePrice: 28.50,
    margin: 5.50,
    cost: 0.18,
    status: { current: 10, total: 150 },
    stock_status: "low-stock",
    lastUpdated: "10-12-2019",
    branch: "branch-three", 
  },
  {
    id: 4,
    name: "Foundation",
    price: 89.00,
    stock: 400,
    basePrice: 70.00,
    margin: 19.00,
    cost: 0.25,
    status: { current: 20, total: 400 },
    stock_status: "in-stock",
    lastUpdated: "10-15-2019",
    branch: "branch-four",
  },
  {
    id: 5,
    name: "Succulent",
    price: 15.00,
    stock: 100,
    basePrice: 10.00,
    margin: 5.00,
    cost: 0.15,
    status: { current: 10, total: 100 },
    stock_status: "out-of-stock",
    lastUpdated: "10-18-2019",
    branch: "branch-one",
  },
  {
    id: 6,
    name: "Eyeliner",
    price: 49.00,
    stock: 200,
    basePrice: 30.00,
    margin: 19.00,
    cost: 0.20,
    status: { current: 10, total: 200 },
    stock_status: "in-stock",
    lastUpdated: "10-20-2019",
    branch: "branch-two",
  },
  {
    id: 7,
    name: "Aloe Vera",
    price: 25.00,
    stock: 150,
    basePrice: 20.00,
    margin: 5.00,
    cost: 0.15,
    status: { current: 10, total: 150 },
    stock_status: "low-stock",
    lastUpdated: "10-22-2019",
    branch: "branch-three",
  },
  {
    id: 8,
    name: "Blush",
    price: 59.00,
    stock: 300,
    basePrice: 40.00,
    margin: 19.00,
    cost: 0.20,
    status: { current: 10, total: 300 },
    stock_status: "in-stock",
    lastUpdated: "10-25-2019",
    branch: "branch-four",
  },
  {
    id: 9,
    name: "Pothos",
    price: 29.00,
    stock: 100,
    basePrice: 20.00,
    margin: 9.00,
    cost: 0.18,
    status: { current: 10, total: 100 },
    stock_status: "out-of-stock",
    lastUpdated: "10-28-2019",
    branch: "branch-one",
  }
];

  export const useProductStore = create<ProductStoreType>((set, get) => ({
    products: mockProducts,
    currentBranch: "branch-one",
    setBranch: (branchId) => set({ currentBranch: branchId }),
    setProducts: (products) => set({ products }),
  
    filteredProducts: (searchItem) => {

      const { products, currentBranch,setProducts } = get();

      const filteredBranchProducts = products.filter((product) => product.branch === currentBranch);

      const filteredProducts = filteredBranchProducts.filter((product) =>
        product.name.toLowerCase().includes(searchItem)
      );
      // console.log(filteredProducts);
      setProducts(filteredProducts);
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
    filterByBranch: (branchId) => {
      // Assuming your products have a branch-related property.
      const filtered = mockProducts.filter((product) => product.branch === branchId);
      set({ products: filtered });
    },
  }));
  