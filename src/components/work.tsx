import { motion, type Variants } from "framer-motion"

import Stack, { type TechItem } from "./stack"

type WorkProps = {
    date_range: string
    role: string;
    company: string;
    desc: string;
    tech_stack: readonly TechItem[];
    cardVar: Variants;
  };

const Work = ({ date_range, role, company, desc, tech_stack, cardVar }: WorkProps) => {
  return (
    <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        variants={cardVar}
        className="col-start-2 relative w-full pb-2 md:pb-0 bg-accent/30 border border-accent/40 rounded shadow transition
                hover:shadow-[0_16px_48px_-16px_rgb(23_23_23_/_0.55)] duration-300 ease-in-out md:min-h-[16em]">
      <div className="p-4 sm:p-6 pb-20 sm:pb-20 leading-tight">
        <p className="font-light text-xs sm:text-md opacity-50 mb-1">{date_range}</p>
        <h1 className="font-semibold text-md sm:text-lg">{role}</h1>
        <p className="text-blue-600 text-sm mt-1">{company}</p>
        <p className="text-xs md:text-sm mt-2 max-w-2xl break-words leading-relaxed text-left">{desc}</p>
      </div>

      <div className="absolute inset-x-4 sm:inset-x-6 bottom-3 sm:bottom-7 flex flex-wrap items-center gap-2 -space-x-4">
        <Stack tech_stack={tech_stack} />
      </div>
    </motion.div>

    
  )
}

export default Work
