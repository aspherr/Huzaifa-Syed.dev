type LinkProps = {
    url: string;
    icon: React.ReactNode;
  };
  
  const Link = ({url, icon}: LinkProps) => {
      return (
        <a href={url} target="_blank" className="flex-1 bg-zinc-950 border border-zinc-500 hover:border-blue-600 rounded-xl p-4 flex items-center justify-center gap-2 transition-all duration-500">
            {icon}
        </a>
      );
  };
  
  export default Link;
  