import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant =
  | "orange"
  | "recover"
  | "distress"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "secondary"
  | "dark";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
}

const Badge = ({
  children,
  variant = "orange",
  className = "",
  ...props
}: BadgeProps) => {
  const customVariants = ["orange", "recover", "distress"];

  const variantClass = customVariants.includes(variant)
    ? `badge-${variant}`
    : `text-bg-${variant}`;

  return (
    <span className={`badge ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </span>
  );
};

export default Badge;
