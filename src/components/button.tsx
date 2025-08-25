import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "secondary";
};

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...props }) => {
  const baseStyles = "px-7 py-2 rounded-full transition duration-50 ease-in hover:bg-opacity-90";
  const variantStyles = {
    primary: "bg-primary-200 disabled:bg-primary-100 disabled:text-gray-1 hover:bg-primary-300 active:bg-primary-400",
    outline: "bg-transparent disabled:text-primary-100 disabled:outline-primary-100 active:outline-primary-400 hover:outline-primary-300 outline-2 outline-primary-200 -outline-offset-2",
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

