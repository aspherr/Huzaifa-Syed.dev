import React from "react";

interface ButtonProps {
    href: string;
    target?: string;
    label: string;
    size?: 'sm' | 'md' | 'lg';  
    className?: string;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({href, target, label, size = 'md', className = '', children}) => {
    const sizeClasses = {
        sm: 'text-sm px-6 py-3',
        md: 'text-lg px-8 py-4',
        lg: 'text-xl px-10 py-5',
      };

    return (
        <a href={href} target={target} className={`relative inline-flex justify-center items-center text-primary border-2 
                  border-gray-200/50 hover:border-gray-600 dark:hover:border-gray-300 
                  rounded-lg transition duration-300 ease-in-out ${sizeClasses[size]} ${className}`}>

            {children && <span>{children}</span>}

            <span>{label}</span>
        </a>
    );
};

export default Button;
