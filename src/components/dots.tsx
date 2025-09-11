const Dots = () => {
  return (
    <div>
        <div className="pointer-events-none animate-pulse group-hover/cover:hidden group-hover/cover:opacity-100 group h-2 w-2 rounded-full bg-zinc-800 dark:bg-white opacity-20 group-hover/cover:bg-white absolute -right-[2px] -top-[2px]"></div>
        <div className="pointer-events-none animate-pulse group-hover/cover:hidden group-hover/cover:opacity-100 group h-2 w-2 rounded-full bg-zinc-800 dark:bg-white opacity-20 group-hover/cover:bg-white absolute -right-[2px] -bottom-[2px]"></div>
        <div className="pointer-events-none animate-pulse group-hover/cover:hidden group-hover/cover:opacity-100 group h-2 w-2 rounded-full bg-zinc-800 dark:bg-white opacity-20 group-hover/cover:bg-white absolute -left-[2px] -top-[2px]"></div>
        <div className="pointer-events-none animate-pulse group-hover/cover:hidden group-hover/cover:opacity-100 group h-2 w-2 rounded-full bg-zinc-800 dark:bg-white opacity-20 group-hover/cover:bg-white absolute -left-[2px] -bottom-[2px]"></div>
    </div>
  )
}

export default Dots
