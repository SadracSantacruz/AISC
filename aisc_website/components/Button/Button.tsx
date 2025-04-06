import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "px-4 py-1 text-sm",
  md: "px-6 py-2 text-base",
  lg: "px-8 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ text, href, size = "md" }) => {
  return (
    <Link href={href}>
      <button
        className={`border border-white rounded-full text-white hover:bg-white hover:text-black transition ${sizeClasses[size]}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
