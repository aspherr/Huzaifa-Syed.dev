import { motion, type Variants } from "framer-motion"

type WorkProps = {
    role: string;
    company: string;
    desc: string;
    tech_stack: readonly string[];
    cardVar: Variants;
  };

const Work = ({ role, company, desc, tech_stack, cardVar }: WorkProps) => {
  return (
    <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        variants={cardVar}
        className="col-start-2 relative w-full pb-2 md:pb-0 rounded-md bg-neutral-900 shadow transition
                hover:shadow-[0_16px_48px_-16px_rgb(23_23_23_/_0.55)] duration-300 ease-in-out
                md:min-h-[16em]">
            <div className="p-4 sm:p-6 pb-20 sm:pb-20 leading-tight">
            <h1 className="font-bold text-lg sm:text-xl">{role}</h1>
            <p className="text-blue-600 text-sm sm:text-base font-medium">
                {company}
            </p>

            <p className="text-sm mt-2 max-w-2xl break-words">
                {desc}
            </p>
            </div>

            <div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-7 flex flex-wrap items-center gap-2">
            {tech_stack.map((tech) => (
                <div
                key={tech}
                className="flex items-center gap-2 border rounded-2xl py-1 px-2
                            border-zinc-700 bg-zinc-950 text-white text-[10px] text-xs
                            opacity-80 hover:border-blue-600 transition-colors duration-700"
                >
                <span>{tech}</span>
                </div>
            ))}
        </div>
        
    </motion.div>

    
  )
}

export default Work
