import { motion, type Variants } from 'framer-motion';

type ProjectProps = {
  name: string;
  subtitle: string;
  desc: string;
  tech_tags: readonly string[];
  link: string;
  cardVar: Variants;
};

const Project = ({ name, subtitle, desc, tech_tags, link, cardVar }: ProjectProps) => {
  return (
        <motion.div
        initial="rest" animate="rest" whileHover="hover" variants={cardVar}
        className="relative w-full max-w-2xl rounded-lg border border-zinc-800 bg-zinc-950 shadow transition
                hover:shadow-[0_16px_48px_-16px_rgb(23_23_23_/_0.55)] duration-300 ease-in-out
                md:min-h-[16rem]">
                    <div className="p-4 pb-5 leading-tight">
                      <div className="flex items-center justify-between">

                        <h1 className="font-bold text-lg md:text-xl">{name}</h1>
                        
                        <a href={link} target='_blank'>
                          <span className='rounded-full bg-zinc-950 border border-blue-600 md:border-zinc-800 w-8 h-8 flex items-center justify-center hover:border-blue-600 transition-colors duration-500 group'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                            className="stroke-white md:stroke-neutral-600 group-hover:stroke-white transition-colors duration-500">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </span>
                        </a>

                      </div>

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
