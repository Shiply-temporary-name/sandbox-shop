"use client";

import { HeroSection } from "@/components/shop/hero-section";
import { ProductCard } from "@/components/shop/product-card";
import { Product } from "@/types";

// Mock data for demonstration
const featuredProducts: Product[] = [
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
];

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Discover our most popular items
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
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
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">↩️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Customer support whenever you need it</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}