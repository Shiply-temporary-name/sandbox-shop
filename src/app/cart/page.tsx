"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { formatPrice } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft, CreditCard } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Mock cart data
const cartItems = [
  {
    id: "1",
    product: {
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
    quantity: 2,
  },
  {
    id: "2",
    product: {
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
    quantity: 1,
  },
];


export default function CartPage() {
  const { toast } = useToast();
  const [items, setItems] = useState(cartItems);
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: string) => {
    const item = items.find(item => item.id === id);
    setItems(items.filter(item => item.id !== id));
    if (item) {
      toast({
        title: "Item removed",
        description: `${item.product.name} has been removed from your cart.`,
        variant: "info",
      });
    }
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
      variant: "info",
    });
  };

  const handleCheckout = async () => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast({
      title: "Redirecting to checkout...",
      description: "Please complete your payment information.",
      variant: "info",
    });
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Section size="lg">
        <Container>
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="heading-1 mb-2">Shopping Cart</h1>
                <p className="lead">
                  {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
                </p>
              </div>
              <div className="flex gap-2">
                <Link href="/products">
                  <Button variant="outline">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Continue Shopping
                  </Button>
                </Link>
                {items.length > 0 && (
                  <Button variant="outline" onClick={clearCart} className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear Cart
                  </Button>
                )}
              </div>
            </div>
          </div>

          {items.length === 0 ? (
            <Card className="text-center py-16">
              <CardContent>
                <ShoppingCart className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
                <h2 className="heading-2 mb-4">Your cart is empty</h2>
                <p className="text-muted-foreground mb-8">Add some products to get started!</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/products">
                    <Button size="lg">
                      Browse Products
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" size="lg">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Cart Items</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-border last:border-b-0">
                          <div className="relative w-20 h-20 flex-shrink-0">
                            <Image
                              src={item.product.image}
                              alt={item.product.name}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-medium text-foreground truncate">
                              {item.product.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {item.product.category}
                            </p>
                            <p className="text-lg font-semibold text-foreground">
                              {formatPrice(item.product.price)}
                            </p>
                          </div>

                          <div className="flex items-center space-x-3">
                            <div className="flex items-center border border-border rounded-lg">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="h-8 w-8 p-0 hover:bg-muted"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="px-3 py-1 text-sm font-medium min-w-[3rem] text-center">
                                {item.quantity}
                              </span>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="h-8 w-8 p-0 hover:bg-muted"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>

                            <div className="text-right">
                              <p className="text-lg font-semibold text-foreground">
                                {formatPrice(item.product.price * item.quantity)}
                              </p>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => removeItem(item.id)}
                                className="text-destructive hover:text-destructive p-1"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-8">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">{formatPrice(subtotal)}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="font-medium">
                          {shipping === 0 ? (
                            <Badge variant="success">Free</Badge>
                          ) : (
                            formatPrice(shipping)
                          )}
                        </span>
                      </div>
                      
                      {shipping > 0 && (
                        <div className="text-sm text-muted-foreground">
                          Add {formatPrice(50 - subtotal)} more for free shipping
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span className="font-medium">{formatPrice(tax)}</span>
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Total</span>
                          <span>{formatPrice(total)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <Button 
                        className="w-full" 
                        size="lg" 
                        onClick={handleCheckout}
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Processing...
                          </div>
                        ) : (
                          <>
                            <CreditCard className="h-5 w-5 mr-2" />
                            Proceed to Checkout
                          </>
                        )}
                      </Button>
                      
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                          Secure checkout with SSL encryption
                        </p>
                      </div>
                    </div>

                    {/* Trust badges */}
                    <div className="mt-6 pt-6 border-t">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl mb-1">🚚</div>
                          <p className="text-xs text-muted-foreground">Free Shipping</p>
                        </div>
                        <div>
                          <div className="text-2xl mb-1">↩️</div>
                          <p className="text-xs text-muted-foreground">Easy Returns</p>
                        </div>
                        <div>
                          <div className="text-2xl mb-1">🔒</div>
                          <p className="text-xs text-muted-foreground">Secure</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}
