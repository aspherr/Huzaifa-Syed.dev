import { motion, type Variants } from 'framer-motion';

type ProjectProps = {
  name: string;
  subtitle?: string;
  desc?: string;
  cardVar: Variants;
};

const Project = ({ name, subtitle, desc, cardVar }: ProjectProps) => {
  return (
        <motion.div
        initial="rest" animate="rest" whileHover="hover" variants={cardVar}
        className="relative w-full max-w-2xl rounded-lg border border-zinc-800 bg-zinc-950 shadow transition
                hover:shadow-[0_16px_48px_-16px_rgb(23_23_23_/_0.55)] duration-300 ease-in-out
                min-h-[16rem]">
                    <div className="p-4 sm:p-6 pb-20 leading-tight">
                        <h1 className="font-bold text-lg md:text-xl">{name}</h1>
                        <h2 className='text-blue-600 text-sm'>{subtitle}</h2>
                        <p className="text-xs sm:text-sm mt-2 max-w-2xl break-words">
                            {desc}
                        </p>
                    </div>
    </motion.div>
  )
}

export default Project
