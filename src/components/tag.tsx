type StatProps = {
    icon: React.ReactNode;
    title: string;
  };

const Tag = ({icon, title}: StatProps) => {
    return (
        <div className="flex items-center z-10 gap-2 border rounded-2xl py-1 px-2 backdrop-blur bg-accent/30 p-1 shadow-md border-accent font-mono text-xs opacity-75 hover:border-blue-600 hover:scale-105 transition-all duration-500 pointer-cursor">
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
