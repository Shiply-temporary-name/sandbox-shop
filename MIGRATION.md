# Design System Migration Guide

This guide explains how to migrate existing components to use the new design system.

## 🎯 Core Principles

1. **Use Design Tokens**: Always reference tokens from `styles/tokens.json`
2. **CSS Variables**: Use `hsl(var(--color-token))` for colors
3. **Component Variants**: Use `class-variance-authority` for consistent variants
4. **Accessibility First**: Ensure WCAG AA compliance
5. **Theme Support**: Test in both light and dark modes

## 🔄 Migration Steps

### 1. Replace Hard-coded Colors

**Before:**
```tsx
<div className="bg-blue-500 text-white">
  Content
</div>
```

**After:**
```tsx
<div className="bg-primary text-primary-foreground">
  Content
</div>
```

### 2. Use Design System Components

**Before:**
```tsx
<button className="px-4 py-2 bg-blue-500 text-white rounded">
  Click me
</button>
```

**After:**
```tsx
<Button variant="default">
  Click me
</Button>
```

### 3. Apply Typography Classes

**Before:**
```tsx
<h1 className="text-4xl font-bold text-gray-900">
  Title
</h1>
```

**After:**
```tsx
<h1 className="heading-1">
  Title
</h1>
```

### 4. Use Spacing Tokens

**Before:**
```tsx
<div className="p-4 m-2 space-y-4">
  Content
</div>
```

**After:**
```tsx
<div className="p-4 m-2 space-y-4">
  Content
</div>
```
*Note: Spacing tokens are already mapped to Tailwind classes*

## 🧩 Component Migration Examples

### Card Component

**Before:**
```tsx
<div className="bg-white rounded-lg shadow-md p-6">
  <h3 className="text-lg font-semibold mb-2">Title</h3>
  <p className="text-gray-600">Content</p>
</div>
```

**After:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Content</p>
  </CardContent>
</Card>
```

### Button Component

**Before:**
```tsx
<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Primary
</button>
<button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
  Secondary
</button>
```

**After:**
```tsx
<Button variant="default">Primary</Button>
<Button variant="outline">Secondary</Button>
```

### Form Components

**Before:**
```tsx
<label className="block text-sm font-medium text-gray-700 mb-1">
  Email
</label>
<input 
  className="w-full px-3 py-2 border border-gray-300 rounded-md"
  type="email"
/>
```

**After:**
```tsx
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />
```

## 🎨 Color Migration

### Semantic Color Mapping

| Old Color | New Token | Usage |
|-----------|-----------|-------|
| `text-gray-900` | `text-foreground` | Primary text |
| `text-gray-600` | `text-muted-foreground` | Secondary text |
| `bg-blue-500` | `bg-primary` | Primary actions |
| `bg-gray-100` | `bg-muted` | Subtle backgrounds |
| `border-gray-300` | `border` | Default borders |

### State Colors

| State | Token | Usage |
|-------|-------|-------|
| Success | `text-success` | Success messages |
| Warning | `text-warning` | Warning messages |
| Error | `text-destructive` | Error messages |
| Info | `text-info` | Information messages |

## 📏 Spacing Migration

### Consistent Spacing Scale

```tsx
// Use consistent spacing scale
<div className="space-y-4">     // 1rem
<div className="space-y-6">     // 1.5rem
<div className="space-y-8">     // 2rem
<div className="space-y-12">    // 3rem
```

### Container and Section

**Before:**
```tsx
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4">
    Content
  </div>
</section>
```

**After:**
```tsx
<Section size="lg">
  <Container>
    Content
  </Container>
</Section>
```

## 🌙 Dark Mode Migration

### Automatic Theme Support

All components automatically support dark mode through CSS variables:

```tsx
// This automatically adapts to light/dark theme
<div className="bg-background text-foreground">
  Content
</div>
```

### Theme-Specific Adjustments

```tsx
// Use theme-specific classes when needed
<div className="bg-background dark:bg-card">
  Content
</div>
```

## ♿ Accessibility Migration

### Focus Management

**Before:**
```tsx
<button className="focus:outline-none focus:ring-2 focus:ring-blue-500">
  Button
</button>
```

**After:**
```tsx
<Button>Button</Button>
// Focus styles are built-in
```

### ARIA Attributes

**Before:**
```tsx
<button aria-label="Close dialog">
  ×
</button>
```

**After:**
```tsx
<Button aria-label="Close dialog">
  ×
</Button>
```

## 🔧 Custom Component Creation

### Using Design Tokens

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const customVariants = cva(
  "rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
      },
      size: {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface CustomProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof customVariants> {}

export function Custom({ className, variant, size, ...props }: CustomProps) {
  return (
    <div
      className={cn(customVariants({ variant, size }), className)}
      {...props}
    />
  );
}
```

## 🧪 Testing Migration

### Visual Testing

1. Test in both light and dark modes
2. Verify responsive behavior
3. Check hover and focus states
4. Validate color contrast ratios

### Accessibility Testing

```bash
# Run accessibility checks
npm run a11y

# Manual testing checklist
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA
```

## 📚 Common Patterns

### Layout Components

```tsx
// Use Container and Section for consistent layouts
<Section size="lg">
  <Container>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>Content 1</Card>
      <Card>Content 2</Card>
    </div>
  </Container>
</Section>
```

### Form Patterns

```tsx
// Consistent form styling
<div className="space-y-4">
  <div>
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" />
  </div>
  <div>
    <Label htmlFor="password">Password</Label>
    <Input id="password" type="password" />
  </div>
  <Button type="submit">Submit</Button>
</div>
```

### Card Patterns

```tsx
// Consistent card layouts
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## 🚨 Common Pitfalls

### Avoid These Patterns

```tsx
// ❌ Don't use hard-coded colors
<div className="bg-blue-500 text-white">

// ❌ Don't skip accessibility
<button onClick={handleClick}>

// ❌ Don't ignore theme support
<div className="bg-white text-black">

// ❌ Don't use inconsistent spacing
<div className="p-3 m-1 space-y-2">
```

### Use These Patterns Instead

```tsx
// ✅ Use design tokens
<div className="bg-primary text-primary-foreground">

// ✅ Include accessibility
<Button onClick={handleClick} aria-label="Action">

// ✅ Support themes
<div className="bg-background text-foreground">

// ✅ Use consistent spacing
<div className="p-4 m-2 space-y-4">
```

## 📖 Resources

- [Design System Documentation](/design)
- [Component Library Reference](/design#components)
- [Color Palette](/design#colors)
- [Typography Scale](/design#typography)
- [Spacing System](/design#spacing)

## 🤝 Getting Help

1. Check the design system documentation at `/design`
2. Review existing component implementations
3. Test in both light and dark modes
4. Validate accessibility compliance
5. Ask for code review before merging
