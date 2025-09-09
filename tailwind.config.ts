import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        muted: {
          DEFAULT: "hsl(var(--color-muted))",
          foreground: "hsl(var(--color-muted-foreground))",
        },
        "muted-foreground": "hsl(var(--color-muted-foreground))",
        card: {
          DEFAULT: "hsl(var(--color-card))",
          foreground: "hsl(var(--color-card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--color-popover))",
          foreground: "hsl(var(--color-popover-foreground))",
        },
        border: "hsl(var(--color-border))",
        input: "hsl(var(--color-input))",
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          foreground: "hsl(var(--color-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary))",
          foreground: "hsl(var(--color-secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent))",
          foreground: "hsl(var(--color-accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--color-destructive))",
          foreground: "hsl(var(--color-destructive-foreground))",
        },
        success: "hsl(var(--color-success))",
        warning: "hsl(var(--color-warning))",
        info: "hsl(var(--color-info))",
        ring: "hsl(var(--color-ring))",
      },
      borderRadius: {
        none: "var(--radius-none)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        inner: "var(--shadow-inner)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      spacing: {
        "0": "var(--spacing-0)",
        px: "var(--spacing-px)",
        "0.5": "var(--spacing-0-5)",
        "1": "var(--spacing-1)",
        "1.5": "var(--spacing-1-5)",
        "2": "var(--spacing-2)",
        "2.5": "var(--spacing-2-5)",
        "3": "var(--spacing-3)",
        "3.5": "var(--spacing-3-5)",
        "4": "var(--spacing-4)",
        "5": "var(--spacing-5)",
        "6": "var(--spacing-6)",
        "7": "var(--spacing-7)",
        "8": "var(--spacing-8)",
        "9": "var(--spacing-9)",
        "10": "var(--spacing-10)",
        "11": "var(--spacing-11)",
        "12": "var(--spacing-12)",
        "14": "var(--spacing-14)",
        "16": "var(--spacing-16)",
        "20": "var(--spacing-20)",
        "24": "var(--spacing-24)",
        "28": "var(--spacing-28)",
        "32": "var(--spacing-32)",
        "36": "var(--spacing-36)",
        "40": "var(--spacing-40)",
        "44": "var(--spacing-44)",
        "48": "var(--spacing-48)",
        "52": "var(--spacing-52)",
        "56": "var(--spacing-56)",
        "60": "var(--spacing-60)",
        "64": "var(--spacing-64)",
        "72": "var(--spacing-72)",
        "80": "var(--spacing-80)",
        "96": "var(--spacing-96)",
      },
      zIndex: {
        "0": "var(--z-0)",
        "10": "var(--z-10)",
        "20": "var(--z-20)",
        "30": "var(--z-30)",
        "40": "var(--z-40)",
        "50": "var(--z-50)",
        auto: "var(--z-auto)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-in-from-top": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.2s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.2s ease-out",
        "slide-in-from-left": "slide-in-from-left 0.2s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
