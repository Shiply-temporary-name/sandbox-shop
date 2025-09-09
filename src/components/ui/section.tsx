import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: "sm" | "md" | "lg" | "xl";
  as?: "section" | "div" | "article" | "aside" | "main";
}

const sectionVariants = {
  sm: "py-8",
  md: "py-12",
  lg: "py-16",
  xl: "py-20",
};

export function Section({
  className,
  size = "md",
  as: Component = "section",
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(sectionVariants[size], className)}
      {...props}
    />
  );
}
