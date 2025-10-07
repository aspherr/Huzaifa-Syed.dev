type StatProps = {
  num: number;
  desc: React.ReactNode;
};

const Stat = ({num, desc}: StatProps) => {
    return (
        <div
        className="flex gap-4 justify-center items-center cursor-pointer
                   transition-all duration-500 group-hover:blur-xs hover:blur-none group text-black/75 dark:text-white"
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
