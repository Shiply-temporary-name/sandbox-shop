# ShopStore - Design System

A modern e-commerce application built with Next.js 14, TypeScript, and a comprehensive design system.

## 🎨 Design System

This project implements a token-driven design system with:

- **Design Tokens**: Centralized design decisions in `styles/tokens.json`
- **CSS Variables**: Automatic light/dark theme support
- **Component Library**: shadcn/ui components with design token integration
- **Typography Scale**: Modular typography system
- **Accessibility**: WCAG AA compliant components

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── design/            # Design system documentation
│   ├── products/          # Product catalog
│   ├── cart/              # Shopping cart
│   └── checkout/          # Checkout process
├── components/
│   ├── ui/                # Design system components
│   ├── layout/            # Layout components
│   └── shop/              # E-commerce components
├── lib/                   # Utilities and theme provider
├── hooks/                 # Custom React hooks
└── types/                 # TypeScript definitions

styles/
├── tokens.json            # Design tokens (single source of truth)
├── theme.css              # Generated CSS variables
└── typography.css         # Typography utilities
```

## 🎯 Design System Usage

### Design Tokens

All design decisions are centralized in `styles/tokens.json`:

```json
{
  "color": {
    "primary": { "light": "246 83% 67%", "dark": "246 83% 72%" },
    "background": { "light": "0 0% 100%", "dark": "222 47% 11%" }
  },
  "spacing": {
    "4": "1rem",
    "8": "2rem"
  }
}
```

### CSS Variables

Tokens automatically generate CSS variables:

```css
:root {
  --color-primary: 246 83% 67%;
  --spacing-4: 1rem;
}

.dark {
  --color-primary: 246 83% 72%;
}
```

### Using in Components

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function MyComponent() {
  return (
    <Card className="p-4">
      <Button variant="primary">Click me</Button>
    </Card>
  );
}
```

## 🛠️ Available Scripts

```bash
# Build design tokens
npm run tokens:build

# Validate design tokens
npm run tokens:check

# Run design system checks
npm run design:check

# Accessibility check
npm run a11y
```

## 🎨 Design System Documentation

Visit `/design` to see the complete design system documentation including:

- Color palette with light/dark variants
- Typography scale
- Spacing system
- Component gallery
- Theme toggle demo

## 🌙 Theme System

The theme system supports:

- **Light Mode**: Default theme
- **Dark Mode**: Automatic dark theme
- **System Theme**: Follows OS preference
- **Persistence**: User preference saved to localStorage

### Theme Toggle

```tsx
import { ThemeToggle } from "@/components/ui/theme-toggle";

function Header() {
  return (
    <header>
      <ThemeToggle />
    </header>
  );
}
```

## 🧩 Component Library

### Button Variants

```tsx
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
```

### Card Components

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Form Components

```tsx
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="Enter email" />
```

## 📱 Responsive Design

The design system is fully responsive with breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## ♿ Accessibility

All components are built with accessibility in mind:

- WCAG AA contrast ratios
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- ARIA attributes

## 🎯 Creating New Components

1. **Use Design Tokens**: Always reference tokens from `styles/tokens.json`
2. **Follow Patterns**: Use existing components as templates
3. **Add Variants**: Use `class-variance-authority` for consistent variants
4. **Test Accessibility**: Ensure keyboard navigation and screen reader support
5. **Document Usage**: Add examples to the design system page

### Example Component

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "rounded-lg border p-4",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export function Alert({ className, variant, ...props }: AlertProps) {
  return (
    <div
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}
```

## 🔧 Customization

### Adding New Tokens

1. Update `styles/tokens.json`
2. Run `npm run tokens:build`
3. Update Tailwind config if needed
4. Use in components

### Adding New Themes

1. Add theme variants to `styles/tokens.json`
2. Update `styles/theme.css` generation
3. Modify theme provider logic
4. Test across all components

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Contributing

1. Follow the existing code patterns
2. Use the design system consistently
3. Test across light/dark themes
4. Ensure accessibility compliance
5. Update documentation as needed

## 📄 License

MIT License - see LICENSE file for details