import { motion, type Variants } from 'framer-motion';

type ProjectProps = {
  hasImage: boolean;
  image?: React.ReactNode;
  name: string;
  subtitle: string;
  desc: string;
  tech_stack?: readonly string[];
  link: string;
  cardVar: Variants;
};

const Project = ({ hasImage, image, name, subtitle, desc, tech_stack, link, cardVar }: ProjectProps) => {
  return (
    <motion.div
      initial="rest" animate="rest" whileHover="hover" variants={cardVar}
      className="relative w-full max-w-2xl rounded-md bg-neutral-900 shadow transition
            hover:shadow-[0_16px_48px_-16px_rgb(23_23_23_/_0.55)] duration-300 ease-in-out
            md:min-h-[16rem]"
    >
      <div className="p-4 pb-5 leading-tight">

        <div className="relative flex overflow-hidden items-center justify-center mb-5 mt-2 md:mt-0 rounded-lg border-zinc-900 bg-neutral-800 w-full h-full md:h-44">
          {hasImage ? (
            <>
              {image}
              <div className="absolute inset-0 bg-black/25 rounded-lg"></div>
            </>
          ) : (
            <div className='flex items-center justify-center h-48'>
              <svg className='w-10 h-10 text-neutral-600' data-slot="icon" aria-hidden="true" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <h1 className="font-bold text-lg md:text-xl">{name}</h1>
          
          <a href={link} target='_blank'>
            <span className='rounded-full bg-neutral-950 border border-blue-600 md:border-zinc-800 w-8 h-8 flex items-center justify-center hover:border-blue-600 transition-colors duration-500 group'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
              className="stroke-white md:stroke-neutral-600 group-hover:stroke-white transition-colors duration-500">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </span>
          </a>
        </div>

        <h2 className='text-blue-600 text-sm'>{subtitle}</h2>
        <p className="text-sm mt-2 max-w-2xl break-words">
            {desc}
        </p>

        <div className="inset-x-4 md:inset-x-6 flex flex-wrap items-center gap-2 mt-4">
          {tech_stack?.map((tech) => (
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
