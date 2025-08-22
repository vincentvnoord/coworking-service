import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "secondary";
};

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...props }) => {
  const baseStyles = "px-7 py-2 rounded-full transition hover:bg-opacity-90";
  const variantStyles = {
    primary: "bg-primary-200",
    outline: "bg-transparent outline-2 outline-primary-200 -outline-offset-2",
    secondary: "bg-gray-2"
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

