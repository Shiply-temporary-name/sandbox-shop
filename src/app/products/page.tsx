"use client";

import { ProductCard } from "@/components/shop/product-card";
import { Product } from "@/types";

// Mock data for demonstration
const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Electronics",
    inStock: true,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Advanced smartwatch with health monitoring, GPS, and water resistance.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "Electronics",
    inStock: true,
    rating: 4.8,
    reviews: 89,
  },
  {
    id: "3",
    name: "Running Shoes",
    description: "Comfortable running shoes with excellent cushioning and breathable material.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    category: "Sports",
    inStock: true,
    rating: 4.3,
    reviews: 256,
  },
  {
    id: "4",
    name: "Coffee Maker",
    description: "Programmable coffee maker with built-in grinder and thermal carafe.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
    category: "Home & Kitchen",
    inStock: false,
    rating: 4.6,
    reviews: 67,
  },
  {
    id: "5",
    name: "Laptop Backpack",
    description: "Durable laptop backpack with multiple compartments and USB charging port.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    category: "Accessories",
    inStock: true,
    rating: 4.4,
    reviews: 92,
  },
  {
    id: "6",
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    category: "Electronics",
    inStock: true,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "7",
    name: "Yoga Mat",
    description: "Premium non-slip yoga mat with excellent grip and cushioning.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    category: "Sports",
    inStock: true,
    rating: 4.6,
    reviews: 203,
  },
  {
    id: "8",
    name: "Desk Lamp",
    description: "Modern LED desk lamp with adjustable brightness and USB charging port.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    category: "Home & Kitchen",
    inStock: true,
    rating: 4.5,
    reviews: 87,
  },
  {
    id: "9",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with precision tracking and long battery life.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    category: "Electronics",
    inStock: true,
    rating: 4.4,
    reviews: 134,
  },
  {
    id: "10",
    name: "Water Bottle",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    category: "Accessories",
    inStock: true,
    rating: 4.7,
    reviews: 298,
  },
  {
    id: "11",
    name: "Phone Case",
    description: "Protective phone case with shock absorption and wireless charging compatibility.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
    category: "Accessories",
    inStock: true,
    rating: 4.2,
    reviews: 156,
  },
  {
    id: "12",
    name: "Fitness Tracker",
    description: "Advanced fitness tracker with heart rate monitoring and sleep tracking.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
    category: "Electronics",
    inStock: true,
    rating: 4.5,
    reviews: 187,
  },
];

export default function ProductsPage() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">All Products</h1>
          <p className="text-lg text-gray-600">
            Browse our complete collection of products
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-md">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Sports</option>
            <option>Home & Kitchen</option>
            <option>Accessories</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-md">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
