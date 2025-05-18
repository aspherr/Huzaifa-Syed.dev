import React from 'react';

type ButtonProps = {
    Icon: React.ReactNode;
    Link?: string;
}

const Button: React.FC<ButtonProps> = ({ Icon, Link }) => {

    const classes = "flex items-center justify-center w-10 h-10 rounded-lg bg-stone-950 text-white border border-stone-700 hover:border-white hover:shadow-[0_0_6px_2px_rgba(255,255,255,0.3)] transition-all duration-300 group"
    
    if (Link) {
        return (
            <a href={Link} target="_blank" rel="noopener noreferrer" className={classes}>
                {Icon}
            </a>
        );
    }

    return (
        <button className={classes}>
            {Icon}
        </button>
    );

};

export default Button;