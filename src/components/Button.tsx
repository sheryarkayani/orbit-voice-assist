
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  icon = false,
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = "rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-orbit-purple hover:bg-orbit-darkPurple text-white shadow-orbit-sm hover:shadow-orbit border border-transparent",
    secondary: "bg-orbit-blue hover:bg-orbit-darkBlue text-white shadow-orbit-sm hover:shadow-orbit border border-transparent",
    outline: "bg-transparent hover:bg-gray-50 text-orbit-purple border border-orbit-purple",
    text: "bg-transparent hover:bg-gray-50 text-orbit-purple border-none",
  };
  
  const sizeStyles = {
    sm: "text-sm py-2 px-3",
    md: "py-3 px-5",
    lg: "text-lg py-4 px-6",
  };
  
  const widthStyles = fullWidth ? "w-full" : "";
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthStyles,
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {icon && <ArrowRight className="ml-2 h-4 w-4" />}
    </button>
  );
};

export default Button;
