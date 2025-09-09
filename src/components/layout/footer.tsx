import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <Section size="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="heading-4">ShopStore</h3>
              <p className="text-muted-foreground">
                Your one-stop destination for quality products at unbeatable prices.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="heading-5">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                <li><Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">Products</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link href="/design" className="text-muted-foreground hover:text-foreground transition-colors">Design System</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="heading-5">Customer Service</h4>
              <ul className="space-y-2">
                <li><Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">Shipping Info</Link></li>
                <li><Link href="/returns" className="text-muted-foreground hover:text-foreground transition-colors">Returns</Link></li>
                <li><Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
                <li><Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">Support</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="heading-5">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">support@shopstore.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">123 Store St, City, ST 12345</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 mt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-muted-foreground text-sm">
                © 2024 ShopStore. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
                <Badge variant="outline" className="text-xs">
                  v1.0.0
                </Badge>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
