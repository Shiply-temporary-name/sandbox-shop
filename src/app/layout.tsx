import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/layout";
import { ThemeProvider } from "@/lib/theme";
import { Toaster } from "@/components/ui/toaster";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="ui-theme"
        >
          <Layout>
            {children}
          </Layout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
