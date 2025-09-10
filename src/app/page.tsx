"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

import Tag from "@/components/tag";
import Stat from "@/components/stat";
import Globe from "@/components/globe";
import Stack from '@/components/stack';
import Footer from '@/components/footer';
import Playback from "@/components/playback";
import Work from '@/components/work';
import Project from '@/components/project';

export default function Home() {

  const [hovered, setHovered] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mainRef = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const handleScroll = () => {
    const container = mainRef.current;
    if (!container) return;

    const homeSection = document.getElementById('home');
    if (!homeSection) return;

    const scrollTop = container.scrollTop;
    const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;

    setVisible(scrollTop > homeBottom + 100);
  };

  useEffect(() => {
    const container = mainRef.current;
    if (!container) return;  
    
    container.addEventListener('scroll', handleScroll);
    handleScroll();
  
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const textVariants: Variants = {
    rest:  { x: 0 },
    hover: { x: 8, transition: { type: "spring", stiffness: 300, damping: 20 } }
  }

  const links = [
    { href: "#home", label: "home" },
    { href: "#experience", label: "experience" },
    { href: "#contact-me", label: "contact" },
  ];

  const emplora_tags = [
    "Javascript",
    "React",
    "Express",
    "Node JS",
    "MongoDB",
    "DaisyUI",
    "REST API",
  ] as const;

  const zs_tags = [
    "Javascript",
    "React",
    "Express",
    "Node JS",
    "SQL",
    "REST API",
  ] as const;

  const cardVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.01 },
  };

  const expRef = useRef<HTMLSpanElement | null>(null);
  const [inView, setInView] = useState(false);


  useEffect(() => {
    const container = mainRef.current;
    if (!container || !expRef.current) return;

    const handleScroll = () => {
      const rect = expRef.current!.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      if (rect.top <= containerRect.top + 300) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, [mainRef]);

  return (
    <main ref={mainRef} className="h-screen overflow-y-scroll scroll-smooth">
      
      {/* settings & links navbar */}
      <section id='settings'>
      
        <AnimatePresence>
          {visible && (
            
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "tween", stiffness: 200, damping: 1 }}
              className="fixed w-full left-1/2 transform -translate-x-1/2 px-4 py-6 z-10 flex flex-row items-center font-mono text-base text-white"
            >
              <div className="fixed inset-0 w-full h-full bg-[var(--background)]/50 backdrop-blur-sm"></div>
                            
              <div className='mx-auto border-2 border-zinc-900 rounded-xl px-3 py-2 z-0'>
                <ul className="flex-1 flex justify-center gap-2 z-10 text-sm">
                  {links.map(({ href, label }) => (
                    <li key={label}>
                      <motion.button
                        onClick={() => {
                          scrollToSection(href.replace("#", ""));
                          setActiveSection(label);
                        }}
                        className={`hover:text-blue-600 duration-200 px-3 py-1 rounded-lg ${
                          activeSection === label ? "bg-zinc-800 text-blue-600" : ""
                        }`}
                      >
                        {label}
                      </motion.button>
                    </li>
                  ))} 
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section id="home">

        <div className="flex flex-col items-center justify-start min-h-screen max-w-screen-xl mx-auto px-6 pt-6 font-mono">
  
          <div className="space-y-2 text-left w-full max-w-2xl px-0">
            <h1 className="font-bold text-4xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight">
              huzaifa<span className="text-blue-600">.syed</span>
            </h1>
            <h3 className="text-base xs:text-base sm:text-base md:text-lg lg:text-xl text-neutral-600">
              A <span className="text-blue-600">full-stack</span> developer.
            </h3>
          </div>

          <div className="leading-relaxed text-left w-full max-w-2xl mt-6">
            <p className='pb-5 text-md'>
              Hey 👋 My name is Huzaifa and I'm a React/Next JS developer. I ship clean, tested code and scalable features. ⚙️ <br/>
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
              <div className="h-12 mt-4 mb-4 border border-blue-600 rounded-3xl px-6 py-2 flex items-center justify-center text-center hover:bg-blue-600 duration-500 transition-all">
                  <a href="/cv.pdf" download className="flex items-center gap-2 text-sm text-white">
                    <span>DOWNLOAD CV</span>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="20" height="20" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" 
                        strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="feather feather-download">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </a>
                </div>
            </div>
          </div>

          <div className="gap-8 mt-8 w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 group">
            <Stat num={21} desc={"Age"} />
            <Stat num={2} desc={<>Years of <br /> Experience</>} />
            <Stat num={8} desc={<>Projects <br /> Worked On </>} />
            <Stat num={3} desc={<>Projects <br /> Deployed </>} />
          </div>

          <div className="w-full max-w-2xl mt-8 space-y-8">
            <motion.div
              initial="rest"
              animate="rest"
              whileHover="hover"
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              className="relative w-full h-32 border rounded-lg border-zinc-800 bg-zinc-950 overflow-hidden shadow transition
                        hover:shadow-[0_16px_48px_-16px_rgb(23_23_23_/_0.55)] duration-300 ease-in-out">
              <motion.div
                variants={textVariants}
                className="w-full grid grid-cols-1 absolute top-3 left-3 md:top-5 md:left-5 right-56 font-mono">
                <span className="text-lg text-white/50">My Primary <span className='font-bold text-white'>Tech Stack</span></span>
              </motion.div>

              <div className='mt-16'>
                <Stack paused={hovered} />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="relative w-full h-64 border rounded-lg border-zinc-800 bg-zinc-950 overflow-hidden shadow transition
                          hover:shadow-[0_16px_48px_-16px_rgb(23_23_23_/_0.55)] duration-300 ease-in-out">
                <motion.div
                  variants={textVariants}
                  className="w-full grid grid-cols-1 absolute top-5 left-5 right-56 font-mono">
                  <span className="opacity-50 text-md">Based In</span>
                  <span className="font-bold text-2xl inline-block">London, UK 📍</span>
                </motion.div>
                
                <div className="absolute inset-y-0 right-32 md:right-0 w-40 sm:w-48 md:w-64 pointer-events-none">
                  <Globe />
                </div>
              </motion.div>
              
              <div className='flex flex-col gap-8 md:gap-4'>
                <motion.div
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  className="relative w-full h-40 border rounded-lg border-zinc-800 bg-zinc-950 overflow-hidden shadow transition
                            hover:shadow-[0_16px_48px_-16px_rgb(23_23_23_/_0.55)] duration-300 ease-in-out">
                  <motion.div
                    variants={textVariants}
                    className="w-full grid grid-cols-1 absolute top-5 left-5">
                    <span className="font-mono font-bold text-xl z-10 leading-tight">Pragmatic developer <br /> who has built clean, reliable systems 🚀</span>
                  </motion.div>

                </motion.div>

                <motion.div
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  className="relative w-full h-20 border rounded-lg border-zinc-800 bg-zinc-950 overflow-hidden shadow transition
                            hover:shadow-[0_16px_48px_-16px_rgb(23_23_23_/_0.55)] duration-300 ease-in-out">
                  <Playback />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="font-mono">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mt-28">
          <div className="flex flex-col gap-x-4 gap-y-6 w-full max-w-2xl mx-auto">

            <div className="flex justify-end items-center gap-3 whitespace-nowrap">
              <h2 className="font-bold text-5xl md:text-4xl text-neutral-600 leading-none">WORK</h2>
            </div>

            <Work 
            role={"FULL-STACK DEVELOPER"}
            company={"Zee-Solutions Corp (Remote)"}
            desc={`Worked remotely as a full-stack developer delivering
                  end-to-end web apps for state agencies. I designed and shipped React interfaces
                  and dashboards, connected them to APIs for CRUD and real-time workflows, and built
                  in solid validation and role-based access so things worked as expected. On the
                  backend, I helped in planning database schemas, permission models, and REST
                  endpoints, then tuned them for performance and easy maintenance.`}
            tech_stack={zs_tags}
            cardVar={cardVariants}/>

          </div>
        </div>
      </section>

      <section id="projects" className="font-mono">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col gap-x-4 gap-y-6 w-full max-w-2xl mx-auto">

            <div className="flex justify-end items-center gap-3 whitespace-nowrap">
              <h2 className="font-bold text-5xl md:text-4xl text-neutral-600 leading-none">PROJECTS</h2>
            </div>

            <div className="fex min-w-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                
                <Project 
                  name={"EMPLORA"} 
                  subtitle={"Employee Management System"} 
                  desc={`Built a full-stack web app with CRUD operations, search & sort, REST API with rate limiting, and dynamic form validation for efficient employee record management.`}
                  tech_stack={emplora_tags}
                  link={"https://github.com/aspherr/Emplora"}
                  cardVar={cardVariants}/>
    
                <Project 
                  name={"MORPH"} 
                  subtitle={"File-Converstion Web App"} 
                  desc={"Coming Soon..."}
                  tech_stack={[""]}
                  link={""}
                  cardVar={cardVariants}/>
                              
                <Project 
                  name={"PROJECT δ"} 
                  subtitle={""} 
                  desc={"Coming Soon..."}
                  tech_stack={[""]}
                  link={""}
                  cardVar={cardVariants}/>

                <Project 
                  name={"PROJECT λ"} 
                  subtitle={""} 
                  desc={"Coming Soon..."} 
                  tech_stack={[""]}
                  link={""}
                  cardVar={cardVariants}/>
                  
              </div>
            </div>
          </div>
        </div>
      </section>

              
      <section id="contact-me" className="min-h-screen flex">
        <div className='flex justify-center items-center w-full pb-30'>
          <div className="w-full max-w-lg mx-auto mt-30 px-4">

            <div className="flex flex-col md:flex-row gap-4 pb-4 ">
              <a href="mailto:your-email@example.com" className="flex-1 bg-zinc-950 border border-zinc-500   hover:border-blue-600 rounded-xl p-4 flex items-center justify-center gap-2 transition-all duration-500">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" 
                viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className=''>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>

              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                className="flex-1 bg-zinc-950 border border-zinc-500 hover:border-blue-600 rounded-xl p-4 flex items-center justify-center gap-2 transition-all duration-500">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" 
                viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className=''>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                className="flex-1 bg-zinc-950 border border-zinc-500 hover:border-blue-600 rounded-xl p-4 flex items-center justify-center gap-2 transition-all duration-500">
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className=''>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
              </a>
            </div>

            <form className='font-mono'>
              <motion.div className='flex flex-col gap-5'>
                <div>
                  <input
                    type="text"
                    placeholder='Jane Doe'
                    required
                    className="mt-1 block w-full border bg-zinc-950 border-zinc-500 text-white placeholder-zinc-600 rounded-md shadow-sm p-2 outline-none focus:border-white transition-all duration-300"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder='jane.doe@example.com'
                    required
                    className="mt-1 block w-full border bg-zinc-950 border-zinc-500 text-white placeholder-zinc-600 rounded-md shadow-sm p-2 outline-none focus:border-white transition-all duration-300"
                  />
                </div>

                <div>
                  <textarea 
                  required
                  placeholder='Type your message here...'
                  className='mt-1 block w-full h-72 border bg-zinc-950 border-zinc-500 text-white placeholder-zinc-600 rounded-md shadow-sm p-2 outline-none focus:border-white transition-all duration-300 resize-none'>
                  </textarea>
                </div>

                <div className='flex justify-center'>
                  <input 
                  type="submit" 
                  value="Send Message" 
                  className='border border-blue-600 rounded-3xl px-6 py-2 flex items-center justify-center text-center hover:bg-blue-600 duration-500 transition-all'>
                  </input>
                </div>
              </motion.div>

            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    
    </main>      
  );
}
