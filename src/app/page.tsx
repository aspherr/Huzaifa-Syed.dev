"use client";

import Image from 'next/image'
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useTheme } from "next-themes"
import { toast } from "sonner"
import GitHubCalendar from "react-github-calendar";
import { GitCommitHorizontal, BriefcaseBusiness, Layers, Download, MessageSquareShare } from "lucide-react"
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiPython,
  SiAmazonwebservices,
  SiDocker,
  SiNodedotjs,
  SiMongodb,
  SiDaisyui,
  SiShadcnui,
  SiRust,
  SiTauri,
  SiSvelte,
  SiRedis,
  SiOpenai,
  SiPostgresql,
} from 'react-icons/si';

import { ScrollArea } from "@/components/ui/scroll-area"

import ThemeToggle from '@/components/themeToggle';
import LangToggle from '@/components/langToggle';
import Navbar from '@/components/navbar';
import Tag from "@/components/tag";
import Stat from "@/components/stat";
import LogoLoop from '@/components/LogoLoop';
import Playback from "@/components/playback";
import Work from '@/components/work';
import Project from '@/components/project';
import Link from '@/components/link';
import GradualBlur from '@/components/GradualBlur';
import Footer from '@/components/footer';

export default function Home() {

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const colorScheme = resolvedTheme === "dark" ? "dark" : "light";

  const mainRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  const titleInView = useInView(titleRef, {
    root: mainRef,
    margin: "-10% 0px -70% 0px",
    amount: "some",
  });
  const showLocation = titleInView

  const cardVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.01 },
  };

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiJavascript />, title: "Javascript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org/" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com/" },
    { node: <SiAmazonwebservices />, title: "AWS", href: "https://aws.amazon.com/" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com/" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org/en" },
  ];

  const today = new Date();
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(today.getMonth() - 3);
  threeMonthsAgo.setDate(threeMonthsAgo.getDate() - 24);

  const repoName = "Morph"
  const repoUrl = "https://github.com/aspherr/Morph"
  const [commits, setCommits] = useState([])
  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const res = await fetch("https://api.github.com/repos/aspherr/Morph/commits")
        if (!res.ok) {
          throw new Error("Could not fetch commit data")
        }

        const data = await res.json()
        const messages = data.map((c: { commit: { message: string } }) => c.commit.message);
        setCommits(messages)
    
      } catch (error) {
        console.error("Error:", error);
      } 
    }

    fetchCommits();
  }, []);

  const zs_stack = [
    { key: 'ts', Icon: SiTypescript },
    { key: 'react', Icon: SiReact },
    { key: 'express', Icon: SiExpress },
    { key: 'node', Icon: SiNodedotjs },
    { key: 'sql', Icon: SiPostgresql }
  ] as const;

  const emplora_stack = [
    { key: 'js', Icon: SiJavascript },
    { key: 'react', Icon: SiReact },
    { key: 'express', Icon: SiExpress },
    { key: 'node', Icon: SiNodedotjs },
    { key: 'mongo', Icon: SiMongodb },
    { key: 'tailwind', Icon: SiTailwindcss },
    { key: 'daisyui', Icon: SiDaisyui },
  ] as const;

  const morph_stack = [
    { key: 'ts', Icon: SiTypescript },
    { key: 'react', Icon: SiReact },
    { key: 'next', Icon: SiNextdotjs },
    { key: 'node', Icon: SiNodedotjs },
    { key: 'tailwind', Icon: SiTailwindcss },
    { key: 'shadecn/ui', Icon: SiShadcnui },
  ] as const;

  const neuro_stack = [
    { key: 'rust', Icon: SiRust },
    { key: 'tauri', Icon: SiTauri },
    { key: 'svelte', Icon: SiSvelte },
    { key: 'js', Icon: SiJavascript },
    { key: 'tailwind', Icon: SiTailwindcss },
    { key: 'redis', Icon: SiRedis },
    { key: 'openai', Icon: SiOpenai }
  ] as const;

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState(false);
  

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
  const nameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

  type Fields = {
    name: string;
    email: string;
    message: string;
  };

  function validate(fields: Fields) {
    for (const [key, value] of Object.entries(fields)) {
      const val = value.trim();
      switch (key) {
        case 'name':
          if (!nameRegex.test(val)) {
            toast.warning('Please enter a valid name.');
            setNameError(true);
            return false;
          }
          break;
      
        case 'email':
          if (!emailRegex.test(val)) {
            toast.warning('Please enter a valid email.');
            setEmailError(true);
            return false;
          }
          break;

        case 'message':
          if (!val) {
            toast.warning('Please enter a message.');
            setMessageError(true);
            return false;
          }
          break;
      }
    }

    setNameError(false);
    setEmailError(false);
    setMessageError(false);
    return true;
  }
  
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate({ name, email, message })) return;

    try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message }),
          });

        const json = await res.json();
        if (!json) {
          toast.error("Message failed to send. Please try again.");
          return;
        }

        setName('');
        setNameError(false);
        
        setEmail('');
        setEmailError(false);
        
        setMessage('');
        setMessageError(false);
       
        toast.success("Message sent successfully.");
      
    } catch (error) {
        toast.error("Message failed to send. Please try again.");
        console.log("Error: ", error);
    }  
}
  
  return (
    <main ref={mainRef} className="h-screen overflow-y-scroll scroll-smooth w-full">    
      <section id="settings" className="mt-5 md:mt-20 pointer-events-none">
        <div className="fixed top-4 z-50 w-full flex justify-center pointer-events-none">
          <div className="flex flex-col items-center justify-center 
                          w-full max-w-2xl mx-4 sm:mx-6 
                          font-mono backdrop-blur bg-accent/30 
                          rounded-md p-1 px-3 shadow-md border border-accent/40 
                          pointer-events-auto">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="relative w-56 h-7 overflow-hidden flex items-center">
                <AnimatePresence
                  mode="wait">
                  {showLocation ? (
                    <motion.div
                      key="location"
                      className="absolute text-sm leading-tight"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}>
                      📍 London, UK
                    </motion.div>
                  ) : (
                    <motion.div
                      key="name"
                      className="absolute text-sm leading-tight"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}>
                      <div className="flex flex-row items-center gap-2">
                        <div className="relative items-center w-8 h-8"> 
                          <Image
                            src="/images/memoji.png"
                            alt="Memoji"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className='font-semibold text-md tracking-widest leading-none'>HS</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <LangToggle />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="navbar" className="mt-5 md:mt-20 pointer-events-none">
        <Navbar ref={mainRef}/>
      </section>

      <section id="home" className='mt-15 md:mt-5'>
        <div className="flex flex-col items-center justify-start min-h-screen max-w-screen-xl mx-auto px-6 pt-6 font-mono">
          <div className="flex md:flex-row items-center justify-between w-full max-w-2xl px-0 font-mono">
            <div ref={titleRef} className="text-left text-black/75 dark:text-white">
              <p>Hey there I'm</p>
              <div className="text-4xl md:text-6xl font-semibold">
                <h1>Huzaifa</h1>
                <h1 className="text-blue-600">Syed</h1>
              </div>
            </div>

            <div className="flex justify-center items-center bg-accent/30 border border-accent/40 rounded-md overflow-hidden w-24 h-24 md:w-30 md:h-30 p-3">
              <div className="relative w-full h-full flex justify-center items-center">
                <Image
                  src="/images/memoji.png"
                  alt="Memoji"
                  width={480}
                  height={480}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="leading-relaxed text-left w-full max-w-2xl mt-6">
            <p className="pb-5 text-sm md:text-md max-w-full md:max-w-md mx-auto md:mx-0 md:text-left text-black/75 dark:text-white">
              I'm a full-stack React and Next.js developer focused on building fast, scalable, and reliable web experiences ⚡
            </p>


            <div className='flex flex-row gap-4 justify-start'>
              <Tag icon={
                <svg data-slot="icon" aria-hidden="true" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                } title={"Frontend"}/>

              <Tag icon={
                <svg data-slot="icon" aria-hidden="true" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                } title={"Backend"}/>
            </div>
          </div>
        
          <div className="flex flex-col w-full max-w-2xl">
            <div className='flex flex-col w-full md:w-auto pt-5 items-center justify-center'>
              <div className="h-12 mt-4 mb-4 border border-blue-600 backdrop-blur bg-accent/30 rounded-xl px-6 py-2 flex items-center justify-center text-center hover:bg-blue-600 duration-500 transition-all">
                  <a href="/download/cv.pdf" download className="flex items-center gap-2 text-sm text-black/75 dark:text-white">
                    <span>DOWNLOAD RESUME</span>
                    <Download strokeWidth={1.5} width={16} height={16}/>
                  </a>
                </div>
            </div>
          </div>

          <div className="gap-8 mt-8 w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 group">
            <Stat num={21} desc={"Age"} />
            <Stat num={1} desc={<>Year of <br /> Experience</>} />
            <Stat num={8} desc={<>Projects <br /> Worked On </>} />
            <Stat num={3} desc={<>Projects <br /> Deployed </>} />
          </div>

          <div className="w-full max-w-2xl space-y-15">
            <div className='mt-15 text-black/75 dark:text-white'>
              <LogoLoop
                logos={techLogos}
                speed={90}
                direction="left"
                logoHeight={38}
                gap={50}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor={`color-mix(in oklch, var(--background) 70%, transparent 30%)`}
                style={{
                  maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
                ariaLabel="Technology partners"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative w-full h-[240px] bg-accent/30 border border-accent/40 rounded overflow-hidden shadow transition
                    hover:shadow-[0_16px_48px_-16px_rgb(23_23_23_/_0.55)] duration-300 ease-in-out">
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold tracking-wide uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_0_3px_rgba(37,99,235,0.25)]" />
                    Currently Building
                  </span>
                </div>
                        
                <div className="px-4 mt-15">
                  <div className="mb-3 flex items-center gap-2">
                    <GitCommitHorizontal strokeWidth={1.25} className="h-5 w-5 opacity-80" />
                    <a href={repoUrl} target="_blank" rel="noreferrer noopener" 
                      className="text-sm font-semibold underline">{repoName}
                    </a>
                    <span className="ml-auto text-[11px] rounded-full bg-foreground/5 px-2 py-0.5">
                      {commits.length}
                    </span>
                  </div>

                  <ScrollArea className="h-[120px] w-full rounded">
                    <ul className="divide-y divide-accent/30">
                      {commits.map((msg, i) => (
                        <li
                          key={`${i}-${msg}`}
                          className="group flex items-start gap-2 px-1 py-2 hover:bg-foreground/[0.03]"
                          title={msg}>
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-accent/70 group-hover:bg-accent" />
                          <p className="text-xs leading-relaxed line-clamp-2 break-words">
                            {msg}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </div>
              
              <div className='flex flex-col gap-8 md:gap-4'>
                <div className="relative w-full h-36 bg-accent/30 border border-accent/40 rounded overflow-hidden shadow transition
                            hover:shadow-[0_16px_48px_-16px_rgb(23_23_23_/_0.55)] duration-300 ease-in-out
                            flex items-center justify-center p-3">
                  <div className="flex items-center justify-center overflow-hidden scale-110 rounded-md p-3 bg-tranparent">
                    {!mounted ? (
                      null
                    ) : (
                      <GitHubCalendar
                        username="aspherr"
                        transformData={(data) =>
                          data.filter(
                            (day) =>
                              new Date(day.date) >= threeMonthsAgo && new Date(day.date) <= today)
                          }
                        hideColorLegend={true}
                        hideMonthLabels={true}
                        hideTotalCount={true}
                        colorScheme={colorScheme}
                        theme={{
                          dark: ["#27272a", "#1e3a8a", "#2563eb", "#3b82f6", "#93c5fd"],
                          light: ["#f8fafc", "#1e3a8a", "#2563eb", "#3b82f6", "#93c5fd"]
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="relative w-full h-20 bg-accent/30 border border-accent/40 rounded overflow-hidden shadow transition-all
                                  hover:shadow-[0_16px_48px_-16px_rgb(23_23_23_/_0.55)] duration-300 ease-in-out">
                  <Playback />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='experience' className='relative'>
        <section id="work" className="font-mono scroll-mt-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="flex flex-col gap-x-4 gap-y-6 w-full max-w-2xl mx-auto">

              <div className="flex flex-row justify-start items-center gap-6 whitespace-nowrap">
                <div className='p-3 bg-accent/30 border border-accent/40 rounded-xl text-blue-600'>
                  <BriefcaseBusiness className='w-5 h-5 md:w-6 md:h-6'/>
                </div>
                <h1 className='text-2xl md:text-4xl font-semibold'>
                  WORK EXPERIENCE
                </h1>
              </div>
                
                <Work
                date_range='2023-2024'
                role={"FULL-STACK DEVELOPER"}
                company={"Zee-Solutions Corp"}
                desc={`Built and integrated full-stack features for government web apps using React and Node.js. 
                        Developed responsive UI components, APIs, and role-based systems, ensuring secure, scalable, 
                        and user-friendly solutions in an Agile environment.`}
                tech_stack={zs_stack}
                cardVar={cardVariants}/>
          
            </div>
          </div>
        </section>

        <section id="projects" className="font-mono -mt-10">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="flex flex-col gap-x-4 gap-y-6 w-full max-w-2xl mx-auto">

              <div className="flex flex-row justify-start items-center gap-6 whitespace-nowrap">
                <div className='p-3 bg-accent/30 border border-accent/40 rounded-xl text-blue-600'>
                  <Layers className='w-5 h-5 md:w-6 md:h-6'/>
                </div>
                <h1 className='text-2xl md:text-4xl font-semibold'>
                  PROJECTS
                </h1>
              </div>

              <div className="fex min-w-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-15 md:gap-10 mt-3">
                                
                <Project
                  hasImage={true}
                  image={<img src="images/emplora.png" alt="emplora-showcase" className='w-full h-full object-cover rounded-t-lg' />}
                  name={"EMPLORA"} 
                  subtitle={"Employee Management System"} 
                  desc={`Employee management web app featuring full CRUD operations, RESTful APIs, and 
                          built-in rate limiting for secure and efficient data handling.`}
                  tech_stack={emplora_stack}
                  repoLink={"https://github.com/aspherr/Emplora"}
                  cardVar={cardVariants}/>
    
                <Project
                  hasImage={true}
                  image={<img src="images/morph.png" alt="morph-showcase" className='w-full h-full object-cover rounded-t-lg' />}
                  name={"MORPH"} 
                  subtitle={"File-Converstion Web App"} 
                  desc={`A simple and fast file conversion web app built with Next.js, enabling users to 
                          seamlessly convert files between multiple formats.`}
                  tech_stack={morph_stack}
                  demoLink={"https://use-morph.vercel.app/"}
                  repoLink={"https://github.com/aspherr/Morph"}
                  cardVar={cardVariants}/>
                              
                <Project
                  hasImage={true}
                  image={<img src="images/neuro.png" alt="neuro-showcase" className='w-full h-full object-cover rounded-t-lg' />}
                  name={"NEURO"} 
                  subtitle={"AI Powered Notebook"} 
                  desc={`A cross-platform AI-powered notebook that helps you organize, store, and interact with your notes 
                          intelligently.`}
                  tech_stack={neuro_stack}
                  repoLink={"https://github.com/aspherr/Neuro"}
                  cardVar={cardVariants}/>

                <Project 
                  hasImage={false}
                  name={"PROJECT λ"}  
                  subtitle={""} 
                  desc={"Coming Soon..."} 
                  cardVar={cardVariants}/>
                  
              </div>
            </div>

            </div>
          </div>
        </section>
      </section>
        
      <section id="contact-me" className="min-h-screen flex">
        <div className='flex justify-center items-center w-full pb-30'>
          <div className="w-full max-w-2xl mx-auto mt-30 px-4 md:px-0">

            <div className="flex flex-col md:flex-row gap-4 pb-4 ">
              <Link
                url="mailto:huzaifasyed.dev@gmail.com"
                icon={
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className='text-neutral-500 group-hover:text-black/75 dark:group-hover:text-white transition-colors duration-500'>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                }
              />
              
              <Link
                url="https://github.com/aspherr"
                icon={
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className='text-neutral-500 group-hover:text-black/75 dark:group-hover:text-white  transition-colors duration-500'>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                }
              />

              <Link
                url="https://www.linkedin.com/in/hsyed-dev/"
                icon={
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className='text-neutral-500 group-hover:text-black/75 dark:group-hover:text-white  transition-colors duration-500'>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                }
              />
            </div>

            <form className='font-mono' onSubmit={sendEmail}>
              <motion.div className='flex flex-col gap-5'>
                <div>
                  <input
                    type="text"
                    placeholder='Jane Doe'
                    value={name}
                    onChange={(e) => {setName(e.target.value); setNameError(false); }}
                    className={`mt-1 block w-full border focus:border-black/75 dark:focus:border-white/75 bg-[var(--background)] text-black/75 dark:text-white placeholder-zinc-600 rounded-md shadow-sm p-2 outline-none transition-all duration-300 ${nameError ? "border-dashed border-2 border-red-500" : "border-accent"}`}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder='jane.doe@example.com'
                    value={email}
                    onChange={(e) => {setEmail(e.target.value); setEmailError(false); }}
                    className={`mt-1 block w-full border focus:border-black/75 focus:dark:border-white/75 bg-[var(--background)] text-black/75 dark:text-white placeholder-zinc-600 rounded-md shadow-sm p-2 outline-none transition-all duration-300 ${emailError ? "border-dashed border-2 border-red-500" : "border-accent"}`}
                  />
                </div>

                <div>
                  <textarea 
                  placeholder='Type your message here...'
                  value={message}
                  onChange={(e) => {setMessage(e.target.value); setMessageError(false)}}
                  className={`mt-1 block w-full h-72 border focus:border-black/75 focus:dark:border-white/75 bg-[var(--background)] text-black/75 dark:text-white placeholder-zinc-600 rounded-md shadow-sm p-3 outline-none transition-all duration-300 resize-none ${messageError ? "border-dashed border-2 border-red-500" : "border-accent"}`}>
                  </textarea>
                </div>

                <div className='flex flex-row justify-center items-center'>
                  <div className='flex items-center w-44 h-12 mt-4 mb-4 border border-blue-600 backdrop-blur bg-accent/30 rounded-xl px-6 py-2 text-center hover:bg-blue-600 duration-500 transition-all gap-2'>
                    <input 
                    type="submit" 
                    value="SEND MESSAGE"
                    className='text-sm'>
                    </input>
                    <MessageSquareShare strokeWidth={1.5} width={16} height={16}/>
                  </div>
                </div>
              </motion.div>

            </form>
          </div>
        </div>
      </section>

      <Footer/>
      
      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={1}
        divCount={2}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </main>      
  );
}
