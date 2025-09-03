const Stat = ({num, desc}) => {
    return (
        <div
        className="flex gap-4 justify-center items-center cursor-pointer text-white
                   transition-all duration-500 group-hover:blur-xs hover:blur-none group"
      >
        <span className="text-5xl font-bold">
          {num}
        </span>
  
        <span className="text-sm font-medium opacity-50 transition-all duration-500">
          {desc}
        </span>
      </div>
    );
};

export default Stat;
