import type { ReactNode, CSSProperties, MouseEvent } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost" | "white" | "nav-cta";
  href?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
  style,
}: ButtonProps) {
  const baseClass = {
    primary: "button--primary",
    ghost: "button--ghost",
    white: "button--white",
    "nav-cta": "button--nav-cta",
  }[variant];

  const fullClassName = `button ${baseClass} ${className}`.trim();

  if (href) {
    const isAnchor = href.startsWith("#");
    return (
      <a
        href={href}
        className={fullClassName}
        onClick={onClick}
        style={style}
        {...(!isAnchor ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={fullClassName} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
