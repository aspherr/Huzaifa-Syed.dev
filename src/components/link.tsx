type LinkProps = {
    url: string;
    icon: React.ReactNode;
  };
  
  const Link = ({url, icon}: LinkProps) => {
      return (
        <a href={url} target="_blank" className="flex-1 bg-accent/30 border border-accent/40 hover:border-blue-600 rounded-xl p-4 flex items-center justify-center gap-2 transition-all duration-500 group">
            {icon}
        </a>
      );
  };
  
  export default Link;
  