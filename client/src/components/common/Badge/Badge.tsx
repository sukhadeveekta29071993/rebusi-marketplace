import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "orange" | "recover" | "distress";
  className?: string;
}

function Badge({ children, variant = "orange", className = "" }: BadgeProps) {
  return (
    <span className={`badge badge-${variant} ${className}`.trim()}>
      {children}
    </span>
  );
}

export default Badge;
