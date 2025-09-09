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
              onAddToCart={(product) => {
                console.log("Added to cart:", product.name);
                // TODO: Implement cart functionality
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
