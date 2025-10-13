import Link from "next/link"; 
import { motion, type Variants } from 'framer-motion';
import { ExternalLink } from "lucide-react";
import { siGithub } from "simple-icons"

import { Button } from './ui/button';
import Stack, { type TechItem } from "./stack"

type ProjectProps = {
  hasImage: boolean;
  image?: React.ReactNode;
  name: string;
  subtitle: string;
  desc: string;
  tech_stack?: readonly TechItem[];
  demoLink?: string;
  repoLink?: string;
  cardVar: Variants;
};

const Project = ({ hasImage, image, name, subtitle, desc, tech_stack, demoLink, repoLink, cardVar }: ProjectProps) => {
  return (
    <motion.div
      initial="rest" animate="rest" whileHover="hover" variants={cardVar}
      className="relative w-full max-w-2xl bg-accent/30 border border-accent/40 rounded-lg shadow transition
            hover:shadow-[0_16px_48px_-16px_rgb(23_23_23_/_0.55)] duration-300 ease-in-out
            md:min-h-[16rem]"
    >
      <div className="pb-5 leading-tight">

        <div className="relative top-0 left-0 overflow-hidden">
          {hasImage ? (
            <>
              {image}
            </>
          ) : (
            <div className='flex items-center justify-center h-48'>
              <div className='absolute w-full bg-white'/>
              <svg className='w-10 h-10 text-accent' data-slot="icon" aria-hidden="true" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
          )}
        </div>

        <div className='p-4'>
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-lg md:text-xl">{name}</h1>
          </div>

          <h2 className='text-blue-600 text-sm'>{subtitle}</h2>
          <p className="text-sm mt-2 max-w-2xl break-words">
              {desc}
          </p>

          <Stack tech_stack={tech_stack}/>
        </div>

        <div className='absolute bottom-1 flex flex-row items-center p-4 gap-4 text-xs'>
            {demoLink ? (
              <Button variant="secondary" className="bg-accent/30" asChild>
                <Link href={demoLink}>
                Link
                <ExternalLink />
                </Link>
              </Button>
            ) : null}
          
            {repoLink ? (
              <Button variant="secondary" className="bg-accent/30" asChild>
                <Link href={repoLink}>
                Repo
                <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current">
                    <title>{siGithub.title}</title>
                    <path d={siGithub.path} />
                </svg>
                </Link>
              </Button>
            ) : null}
          </div>
      </div>
  </motion.div>
  )
}

export default Project
