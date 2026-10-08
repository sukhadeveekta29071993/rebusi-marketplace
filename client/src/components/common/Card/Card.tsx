import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  dark?: boolean;
}

function Card({ children, className = "", dark = false, ...props }: CardProps) {
  return (
    <div
      className={`${dark ? "card-dark" : "custom-card"} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
