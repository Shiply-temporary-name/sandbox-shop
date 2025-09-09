import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/layout";
import { CartProvider } from "@/store/cart-context";
import { ToastProvider } from "@/components/ui/toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ShopStore - Your Online Shopping Destination",
  description: "Discover amazing products at unbeatable prices. Fast delivery and excellent customer service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <CartProvider>
          <ToastProvider>
            <Layout>
              {children}
            </Layout>
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  );
}
