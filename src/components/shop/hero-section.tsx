"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <Section size="xl" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
      
      <Container className="relative z-10">
        <div className="text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">New Collection Available</span>
          </div>
          
          <h1 className="heading-1 mb-6 text-primary-foreground">
            Welcome to ShopStore
          </h1>
          
          <p className="lead mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Discover amazing products at unbeatable prices with fast shipping and excellent customer service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <Link href="/products">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
              asChild
            >
              <Link href="/design">
                Design System
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
