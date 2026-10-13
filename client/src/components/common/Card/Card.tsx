import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  dark?: boolean;
}

const Card = ({
  children,
  dark = false,
  className = "",
  ...props
}: CardProps) => {
  const cardClass = dark ? "card-dark" : "custom-card";

  return (
    <div className={`${cardClass} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
};

export default Card;
