import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...props }) => {
  const baseStyles = "px-4 py-2 rounded-full transition hover:bg-opacity-90";
  const variantStyles = {
    primary: "bg-primary-200",
    outline: "bg-transparent border-2 border-primary-200",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]}`;

  return (
    <button
      {...props}
      className={`${buttonStyles} ${props.className || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;

