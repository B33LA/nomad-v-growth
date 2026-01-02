import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold uppercase tracking-wider py-4 px-8 transition-all duration-300 text-sm md:text-base border border-transparent";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-brand-redDark shadow-glow hover:shadow-glow-hover",
    secondary: "bg-brand-charcoal text-white hover:bg-brand-black border-brand-charcoal hover:border-brand-red",
    outline: "bg-transparent border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;