"use client";

import { useState } from "react";
import { ProductCard } from "@/components/shop/product-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useToast } from "@/hooks/use-toast";
import { Search, Grid, List } from "lucide-react";

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
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
      variant: "success",
    });
  };

  const categories = ["All", "Electronics", "Sports", "Accessories", "Home & Kitchen"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Section size="lg">
        <Container>
          <div className="mb-8">
            <h1 className="heading-1 mb-4">All Products</h1>
            <p className="lead">
              Browse our complete collection of products
            </p>
          </div>

          {/* Filters and Search */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search products..."
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} products
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
            <Badge variant="secondary">
              {selectedCategory}
            </Badge>
          </div>
          
          {/* Products Grid */}
          <div className={
            viewMode === "grid" 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }>
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  No products found in this category.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSelectedCategory("All")}
                >
                  View All Products
                </Button>
              </CardContent>
            </Card>
          )}
        </Container>
      </Section>
    </div>
  );
}
