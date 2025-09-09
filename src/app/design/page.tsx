"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { 
  Palette, 
  Type, 
  Ruler, 
  Circle, 
  Layers, 
  Component,
  Sun
} from "lucide-react";

export default function DesignPage() {
  const { toast } = useToast();

  const colorTokens = [
    { name: "Background", light: "hsl(0 0% 100%)", dark: "hsl(222 47% 11%)", css: "--color-background" },
    { name: "Foreground", light: "hsl(222 47% 11%)", dark: "hsl(210 40% 98%)", css: "--color-foreground" },
    { name: "Primary", light: "hsl(246 83% 67%)", dark: "hsl(246 83% 72%)", css: "--color-primary" },
    { name: "Secondary", light: "hsl(210 40% 96%)", dark: "hsl(217 33% 17%)", css: "--color-secondary" },
    { name: "Muted", light: "hsl(210 40% 96.1%)", dark: "hsl(217 33% 17%)", css: "--color-muted" },
    { name: "Accent", light: "hsl(142 70% 45%)", dark: "hsl(142 72% 40%)", css: "--color-accent" },
    { name: "Destructive", light: "hsl(0 84% 60%)", dark: "hsl(0 72% 50%)", css: "--color-destructive" },
    { name: "Success", light: "hsl(142 70% 45%)", dark: "hsl(142 72% 40%)", css: "--color-success" },
    { name: "Warning", light: "hsl(38 92% 50%)", dark: "hsl(38 92% 55%)", css: "--color-warning" },
    { name: "Info", light: "hsl(199 89% 48%)", dark: "hsl(199 89% 53%)", css: "--color-info" },
  ];

  const radiusTokens = [
    { name: "None", value: "0px", css: "--radius-none" },
    { name: "Small", value: "0.375rem", css: "--radius-sm" },
    { name: "Medium", value: "0.75rem", css: "--radius-md" },
    { name: "Large", value: "1rem", css: "--radius-lg" },
    { name: "Extra Large", value: "1.25rem", css: "--radius-xl" },
    { name: "2X Large", value: "1.5rem", css: "--radius-2xl" },
    { name: "Pill", value: "9999px", css: "--radius-pill" },
  ];

  const spacingTokens = [
    { name: "0", value: "0px", css: "--spacing-0" },
    { name: "1", value: "0.25rem", css: "--spacing-1" },
    { name: "2", value: "0.5rem", css: "--spacing-2" },
    { name: "4", value: "1rem", css: "--spacing-4" },
    { name: "6", value: "1.5rem", css: "--spacing-6" },
    { name: "8", value: "2rem", css: "--spacing-8" },
    { name: "12", value: "3rem", css: "--spacing-12" },
    { name: "16", value: "4rem", css: "--spacing-16" },
    { name: "24", value: "6rem", css: "--spacing-24" },
  ];

  const shadowTokens = [
    { name: "Small", value: "0 1px 2px 0 rgb(0 0 0 / 0.05)", css: "--shadow-sm" },
    { name: "Medium", value: "0 4px 8px -2px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)", css: "--shadow-md" },
    { name: "Large", value: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", css: "--shadow-lg" },
    { name: "Extra Large", value: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", css: "--shadow-xl" },
    { name: "2X Large", value: "0 25px 50px -12px rgb(0 0 0 / 0.25)", css: "--shadow-2xl" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Container size="xl">
        <Section size="lg">
          <div className="text-center mb-12">
            <h1 className="heading-1 mb-4">Design System</h1>
            <p className="lead max-w-2xl mx-auto">
              A comprehensive design system built with design tokens, 
              providing consistency and scalability across the application.
            </p>
          </div>

          {/* Theme Toggle Demo */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sun className="h-5 w-5" />
                Theme System
              </CardTitle>
              <CardDescription>
                Toggle between light, dark, and system themes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <div className="text-sm text-muted-foreground">
                  Current theme is automatically detected and persisted
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Color Palette */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Color Palette
              </CardTitle>
              <CardDescription>
                Design tokens for colors with light and dark mode variants
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {colorTokens.map((color) => (
                  <div key={color.name} className="space-y-3">
                    <h4 className="font-semibold">{color.name}</h4>
                    <div className="flex gap-2">
                      <div 
                        className="w-12 h-12 rounded-md border"
                        style={{ backgroundColor: color.light }}
                        title={`Light: ${color.light}`}
                      />
                      <div 
                        className="w-12 h-12 rounded-md border"
                        style={{ backgroundColor: color.dark }}
                        title={`Dark: ${color.dark}`}
                      />
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">
                      {color.css}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Typography */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="h-5 w-5" />
                Typography Scale
              </CardTitle>
              <CardDescription>
                Consistent typography using a modular scale
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h1 className="heading-1">Heading 1</h1>
                  <code className="code">heading-1</code>
                </div>
                <div>
                  <h2 className="heading-2">Heading 2</h2>
                  <code className="code">heading-2</code>
                </div>
                <div>
                  <h3 className="heading-3">Heading 3</h3>
                  <code className="code">heading-3</code>
                </div>
                <div>
                  <h4 className="heading-4">Heading 4</h4>
                  <code className="code">heading-4</code>
                </div>
                <div>
                  <h5 className="heading-5">Heading 5</h5>
                  <code className="code">heading-5</code>
                </div>
                <div>
                  <h6 className="heading-6">Heading 6</h6>
                  <code className="code">heading-6</code>
                </div>
                <div>
                  <p className="body-large">Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <code className="code">body-large</code>
                </div>
                <div>
                  <p className="body">Body - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <code className="code">body</code>
                </div>
                <div>
                  <p className="body-small">Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <code className="code">body-small</code>
                </div>
                <div>
                  <p className="lead">Lead text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <code className="code">lead</code>
                </div>
                <div>
                  <p className="small">Small text</p>
                  <code className="code">small</code>
                </div>
                <div>
                  <p className="muted">Muted text</p>
                  <code className="code">muted</code>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Spacing Scale */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ruler className="h-5 w-5" />
                Spacing Scale
              </CardTitle>
              <CardDescription>
                Consistent spacing using design tokens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {spacingTokens.map((space) => (
                  <div key={space.name} className="flex items-center gap-4">
                    <div className="w-16 text-sm font-mono">{space.name}</div>
                    <div className="w-20 text-xs text-muted-foreground">{space.value}</div>
                    <div 
                      className="bg-primary h-4 rounded"
                      style={{ width: space.value }}
                    />
                    <code className="text-xs font-mono text-muted-foreground">
                      {space.css}
                    </code>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Border Radius */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Circle className="h-5 w-5" />
                Border Radius
              </CardTitle>
              <CardDescription>
                Consistent border radius values
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {radiusTokens.map((radius) => (
                  <div key={radius.name} className="text-center space-y-2">
                    <div 
                      className="w-16 h-16 bg-primary mx-auto"
                      style={{ borderRadius: radius.value }}
                    />
                    <div className="text-sm font-semibold">{radius.name}</div>
                    <code className="text-xs font-mono text-muted-foreground">
                      {radius.value}
                    </code>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Shadows */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Shadow Scale
              </CardTitle>
              <CardDescription>
                Elevation and depth using shadow tokens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {shadowTokens.map((shadow) => (
                  <div key={shadow.name} className="text-center space-y-2">
                    <div 
                      className="w-24 h-24 bg-card border rounded-lg mx-auto"
                      style={{ boxShadow: shadow.value }}
                    />
                    <div className="text-sm font-semibold">{shadow.name}</div>
                    <code className="text-xs font-mono text-muted-foreground">
                      {shadow.css}
                    </code>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Components Gallery */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Component className="h-5 w-5" />
                Components Gallery
              </CardTitle>
              <CardDescription>
                UI components built with design tokens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Buttons */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Buttons</h4>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="default">Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">🚀</Button>
                  </div>
                </div>

                {/* Badges */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Badges</h4>
                  <div className="flex flex-wrap gap-4">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="info">Info</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </div>

                {/* Inputs */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Form Elements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Enter your password" />
                    </div>
                  </div>
                </div>

                {/* Cards */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Cards</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card description goes here</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Card content with some text and information.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Another Card</CardTitle>
                        <CardDescription>Another description</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>More card content with different information.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Third Card</CardTitle>
                        <CardDescription>Third description</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Even more card content for demonstration.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Skeleton Loading */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Loading States</h4>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[150px]" />
                  </div>
                </div>

                {/* Toast Demo */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Toast Notifications</h4>
                  <div className="flex gap-4">
                    <Button
                      onClick={() => toast({
                        title: "Success!",
                        description: "Your action was completed successfully.",
                        variant: "success",
                      })}
                    >
                      Success Toast
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => toast({
                        title: "Error!",
                        description: "Something went wrong. Please try again.",
                        variant: "destructive",
                      })}
                    >
                      Error Toast
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => toast({
                        title: "Info",
                        description: "Here's some information for you.",
                        variant: "info",
                      })}
                    >
                      Info Toast
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle>Usage Guidelines</CardTitle>
              <CardDescription>
                How to use the design system effectively
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <h4>Design Tokens</h4>
                <p>
                  All design decisions are driven by tokens defined in <code>styles/tokens.json</code>. 
                  These tokens automatically generate CSS variables that work with both light and dark themes.
                </p>
                
                <h4>Component Variants</h4>
                <p>
                  Components use class-variance-authority (cva) for consistent variant management. 
                  This ensures all component states follow the same patterns.
                </p>
                
                <h4>Accessibility</h4>
                <p>
                  All components are built with accessibility in mind, including proper focus management, 
                  ARIA attributes, and keyboard navigation support.
                </p>
                
                <h4>Dark Mode</h4>
                <p>
                  The theme system automatically handles dark mode using CSS variables and the 
                  <code>class=&quot;dark&quot;</code> selector on the HTML element.
                </p>
              </div>
            </CardContent>
          </Card>
        </Section>
      </Container>
    </div>
  );
}
