import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function calculateTotal(items: { product: { price: number }; quantity: number }[]): number {
  return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}
