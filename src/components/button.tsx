import React from 'react';

type ButtonProps = {
    Icon: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ Icon }) => {
    return (
        <button className="flex items-center justify-center w-12 h-12 rounded-lg bg-stone-950 text-white border border-stone-700 hover:border-white hover:shadow-[0_0_6px_2px_rgba(255,255,255,0.3)] transition-all duration-300 group">
            {Icon}
        </button>
    );
};

export default Button;