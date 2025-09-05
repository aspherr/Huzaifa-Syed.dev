const Tag = ({icon, title}) => {
    return (
        <div className="flex items-center gap-2 border rounded-2xl py-1 px-2 border-zinc-500 bg-zinc-950 text-white font-mono text-xs opacity-75 hover:border-blue-600 transition-colors duration-500">
            <span className="w-4 h-4 shrink-0 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:block">
                {icon}
            </span>

            <span>
                {title}
            </span>
        </div>
    );
};

export default Tag;
