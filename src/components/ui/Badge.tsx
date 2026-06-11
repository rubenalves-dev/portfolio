import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "normal" | "core" | "tag";
  className?: string;
  onClick?: () => void;
};

export default function Badge({
  children,
  variant = "normal",
  className = "",
  onClick,
}: BadgeProps) {
  let badgeClass = "";

  if (variant === "core") {
    badgeClass = "badge--core";
  } else if (variant === "tag") {
    badgeClass = "badge--tag";
  }

  const clickableClass = onClick ? "badge--clickable" : "";
  const fullClassName = `badge ${badgeClass} ${clickableClass} ${className}`.trim();

  if (onClick) {
    return (
      <button onClick={onClick} className={fullClassName}>
        {children}
      </button>
    );
  }

  return <span className={fullClassName}>{children}</span>;
}
