import React from "react";

interface ButtonProps {
    href: string;
    target?: string;
    label: string;
    size?: 'sm' | 'md' | 'lg';  
    className?: string;
    spanClassName? : string;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({href, target, label, size = 'md', className = '', spanClassName, children}) => {
    const sizeClasses = {
        sm: 'text-sm px-6 py-3',
        md: 'text-lg px-8 py-4',
        lg: 'text-xl px-10 py-6',
      };

    return (
        <a href={href} target={target} className={`relative inline-flex justify-center items-center text-primary border-2 
                  border-gray-200/50 hover:border-gray-500 dark:border-gray-700 dark:hover:border-gray-600 
                  rounded-lg transition duration-300 ease-in-out hover:border-transparent 
                  dark:hover:border-transparent ${sizeClasses[size]} ${className}`}>

            {children && <span>{children}</span>}

            <span>{label}</span>

            <span className=".btn-glow absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 ease-in-out 
                            border-2 border-transparent hover:border-white hover:opacity-100 hover:shadow-glow">                
            </span>
        </a>
    );
};

export default Button;
