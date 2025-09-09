#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';

interface Tokens {
  color: Record<string, { light: string; dark: string }>;
  radius: Record<string, string>;
  spacing: Record<string, string>;
  shadow: Record<string, string>;
  font: Record<string, string>;
  typeScale: {
    base: string;
    ratio: number;
    sizes: Record<string, string>;
    lineHeights: Record<string, string>;
    letterSpacing: Record<string, string>;
  };
  breakpoints: Record<string, string>;
  zIndex: Record<string, string>;
}

function buildThemeCSS(tokens: Tokens): string {
  let css = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

:root {
  /* Colors - Light Mode */\n`;

  // Generate color variables for light mode
  Object.entries(tokens.color).forEach(([key, value]) => {
    css += `  --color-${key}: ${value.light};\n`;
  });

  css += `\n  /* Radius */\n`;
  Object.entries(tokens.radius).forEach(([key, value]) => {
    css += `  --radius-${key}: ${value};\n`;
  });

  css += `\n  /* Shadows */\n`;
  Object.entries(tokens.shadow).forEach(([key, value]) => {
    css += `  --shadow-${key}: ${value};\n`;
  });

  css += `\n  /* Typography */\n`;
  Object.entries(tokens.font).forEach(([key, value]) => {
    css += `  --font-${key}: ${value};\n`;
  });

  css += `\n  /* Spacing scale */\n`;
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    const cssKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
    css += `  --spacing-${cssKey}: ${value};\n`;
  });

  css += `\n  /* Z-index */\n`;
  Object.entries(tokens.zIndex).forEach(([key, value]) => {
    css += `  --z-${key}: ${value};\n`;
  });

  css += `}

.dark {
  /* Colors - Dark Mode */\n`;

  // Generate color variables for dark mode
  Object.entries(tokens.color).forEach(([key, value]) => {
    css += `  --color-${key}: ${value.dark};\n`;
  });

  css += `}

/* Base styles using CSS variables */
* {
  border-color: hsl(var(--color-border));
}

body {
  background-color: hsl(var(--color-background));
  color: hsl(var(--color-foreground));
  font-family: var(--font-sans);
}

/* Focus styles */
.focus-ring {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-ring:focus-visible {
  outline: 2px solid hsl(var(--color-ring));
  outline-offset: 2px;
}

/* Scrollbar styles */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: hsl(var(--color-muted));
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--color-border));
  border-radius: var(--radius-md);
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--color-muted-foreground));
}

/* Selection styles */
::selection {
  background-color: hsl(var(--color-primary) / 0.2);
  color: hsl(var(--color-foreground));
}`;

  return css;
}

function validateTokens(tokens: any): boolean {
  const requiredSections = ['color', 'radius', 'spacing', 'shadow', 'font', 'typeScale'];
  
  for (const section of requiredSections) {
    if (!tokens[section]) {
      console.error(`Missing required section: ${section}`);
      return false;
    }
  }

  // Validate color tokens have light and dark variants
  for (const [key, value] of Object.entries(tokens.color)) {
    if (typeof value === 'object' && value !== null) {
      if (!('light' in value) || !('dark' in value)) {
        console.error(`Color token ${key} missing light or dark variant`);
        return false;
      }
    }
  }

  return true;
}

async function main() {
  try {
    const tokensPath = path.join(process.cwd(), 'styles', 'tokens.json');
    const outputPath = path.join(process.cwd(), 'styles', 'theme.css');
    
    console.log('Reading tokens from:', tokensPath);
    const tokensData = fs.readFileSync(tokensPath, 'utf8');
    const tokens: Tokens = JSON.parse(tokensData);
    
    console.log('Validating tokens...');
    if (!validateTokens(tokens)) {
      console.error('Token validation failed');
      process.exit(1);
    }
    
    console.log('Building theme CSS...');
    const themeCSS = buildThemeCSS(tokens);
    
    console.log('Writing theme CSS to:', outputPath);
    fs.writeFileSync(outputPath, themeCSS);
    
    console.log('✅ Theme CSS built successfully');
  } catch (error) {
    console.error('❌ Error building theme CSS:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
