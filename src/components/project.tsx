import { motion, type Variants } from 'framer-motion';

type ProjectProps = {
  name: string;
  subtitle: string;
  desc: string;
  tech_tags: readonly string[];
  cardVar: Variants;
};

const Project = ({ name, subtitle, desc, tech_tags, cardVar }: ProjectProps) => {
  return (
        <motion.div
        initial="rest" animate="rest" whileHover="hover" variants={cardVar}
        className="relative w-full max-w-2xl rounded-lg border border-zinc-800 bg-zinc-950 shadow transition
                hover:shadow-[0_16px_48px_-16px_rgb(23_23_23_/_0.55)] duration-300 ease-in-out
                md:min-h-[16rem]">
                    <div className="p-4 pb-5 leading-tight">
                        <h1 className="font-bold text-lg md:text-xl">{name}</h1>
                        <h2 className='text-blue-600 text-sm'>{subtitle}</h2>
                        <p className="text-xs md:text-sm mt-2 max-w-2xl break-words">
                            {desc}
                        </p>

                        <div className="inset-x-4 md:inset-x-6 flex flex-wrap items-center gap-2 mt-4">
                          {tech_tags.map((tech) => (
                            <div
                              key={tech}
                              className="flex items-center gap-2 border rounded-2xl py-1 px-2
                                        border-zinc-700 bg-zinc-950 text-white text-[10px] text-xs
                                        opacity-80 hover:border-blue-600 transition-colors duration-700">
                              <span>{tech}</span>
                            </div>
                          ))}
                        </div>
                    </div>
    </motion.div>
  )
}

export default Project
