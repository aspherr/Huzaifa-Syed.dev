"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

import Dots from '@/components/dots';
import Tag from "@/components/tag";
import Stat from "@/components/stat";
import Globe from "@/components/globe";
import Stack from '@/components/stack';
import Footer from '@/components/footer';
import Playback from "@/components/playback";
import Work from '@/components/work';
import Project from '@/components/project';
import Link from '@/components/link';

export default function Home() {

  const successMsg = () => toast.success('Message was sent successfully!',
    {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );

  const warningMsg = (msg: string) => toast.error(msg,
    {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );

  const failMsg = () => toast.error('Failed to send message. Try Again!',
    {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );


  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mainRef = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const container = mainRef.current;
    if (!container) return;

    const homeSection = document.getElementById('home');
    if (!homeSection) return;

    const scrollTop = container.scrollTop;

    const homeBottomInContainer =
    homeSection.getBoundingClientRect().bottom -
    container.getBoundingClientRect().top +
    container.scrollTop;

    setVisible(scrollTop >= homeBottomInContainer - 700);
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

  const cardVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.01 },
  };

  const zs_tags = [
    "Javascript",
    "React",
    "Express",
    "Node JS",
    "SQL",
    "REST API",
  ] as const;

  const emplora_tags = [
    "Javascript",
    "React",
    "Express",
    "Node JS",
    "MongoDB",
    "TailwindCSS",
    "DaisyUI",
    "REST API",
  ] as const;

  const morph_tags = [
    "Typescript",
    "NextJS",
    "Node JS",
    "Redis",
    "TailwindCSS",
    "Shadecn/UI",
    "REST API",
  ] as const;

  const neuro_tags = [
    "Rust",
    "Tauri",
    "Svelte",
    "Javascript",
    "TailwindCSS",
    "Redis",
    "OpenAI API",
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
            warningMsg('Please enter a valid name.');
            setNameError(true);
            return false;
          }
          break;
      
        case 'email':
          if (!emailRegex.test(val)) {
            warningMsg('Please enter a valid email.');
            setEmailError(true);
            return false;
          }
          break;

        case 'message':
          if (!val) {
            warningMsg('Please enter a message.');
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
          failMsg();
          return;
        }

        setName('');
        setNameError(false);
        
        setEmail('');
        setEmailError(false);
        
        setMessage('');
        setMessageError(false);
       
        successMsg();
      
    } catch (error) {
        console.log("Error: ", error);
    }  
}
  
  return (
    <main ref={mainRef} className="h-screen overflow-y-scroll scroll-smooth mt-5 md:mt-10">
      
      <Toaster position="bottom-center" reverseOrder={false} />
      
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
            <div className='bg-neutral-900 p-2 rounded-sm inline-block relative'>
              <h1 className="font-bold text-4xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight">
                huzaifa<span className="text-blue-600">.syed</span>
              </h1>

              <Dots />
            </div>

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
              className="relative w-full h-72 md:h-32 rounded-sm bg-neutral-900 overflow-hidden shadow transition
                        hover:shadow-[0_16px_48px_-16px_rgb(23_23_23_/_0.55)] duration-300 ease-in-out">
              <motion.div
                variants={textVariants}
                className="w-full grid grid-cols-1 absolute top-3 left-3 md:top-5 md:left-5 right-56 font-mono">
                  <div className="grid grid-cols-1 md:grid-cols-2 leading-tight">
                    <div className="flex flex-col space-y-1 ml-2 mt-2">
                      <span className="opacity-50 text-lg">My Primary</span>
                      <span className="font-bold text-3xl inline-block">Tech Stack</span>
                    </div>

                    <div className="mt-5 md:-mt-2 ml-2 md:-ml-24">
                      <Stack />
                    </div>
                  </div>
              </motion.div>

            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="relative w-full h-64 rounded-sm bg-neutral-900 overflow-hidden shadow transition
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
                  className="relative w-full h-40 rounded-sm bg-neutral-900 overflow-hidden shadow transition
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
                  className="relative w-full h-20 rounded-sm bg-neutral-900 overflow-hidden shadow transition
                            hover:shadow-[0_16px_48px_-16px_rgb(23_23_23_/_0.55)] duration-300 ease-in-out">
                  <Playback />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="font-mono scroll-mt-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mt-28">
          <div className="flex flex-col gap-x-4 gap-y-6 w-full max-w-2xl mx-auto">

            <div className="flex justify-end items-center gap-3 whitespace-nowrap">
              <div className='bg-neutral-900 p-2 rounded-sm inline-block relative'>
                <h2 className="font-bold text-5xl md:text-6xl lg:text-7xl text-blue-600 leading-none">.work</h2>
                <Dots />
              </div>
            </div>
            
            <div className='mt-3'>
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
        </div>
      </section>

      <section id="projects" className="font-mono">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col gap-x-4 gap-y-6 w-full max-w-2xl mx-auto">

            <div className="flex justify-end items-center gap-3 whitespace-nowrap">
              <div className='bg-neutral-900 p-2 rounded-sm inline-block relative'>
                <h2 className="font-bold text-5xl md:text-6xl lg:text-7xl text-blue-600 leading-none">.projects</h2>
                <Dots />
              </div>
            </div>

            <div className="fex min-w-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-3">
                                
                <Project
                  hasImage={true}
                  image={<img src="images/emplora.png" alt="emplora-showcase" className='rounded-lg' />}
                  name={"EMPLORA"} 
                  subtitle={"Employee Management System"} 
                  desc={`Built a full-stack web app with CRUD operations, search & sort, REST API with rate limiting, 
                          and dynamic form validation for efficient employee record management.`}
                  tech_stack={emplora_tags}
                  link={"https://github.com/aspherr/Emplora"}
                  cardVar={cardVariants}/>
    
                <Project
                  hasImage={false}
                  name={"MORPH"} 
                  subtitle={"File-Converstion Web App"} 
                  desc={`Built a Next.js app for efficient multi-format file conversion with drag-and-drop uploads and cloud storage. Designed a responsive UI with TailwindCSS and optimized backend processing with Node.js for fast, secure conversions.`}
                  tech_stack={morph_tags}
                  link={"https://github.com/aspherr/Morph"}
                  cardVar={cardVariants}/>
                              
                <Project
                  hasImage={true}
                  image={<img src="images/neuro.png" alt="neuro-showcase" className='rounded-lg' />}
                  name={"NEURO"} 
                  subtitle={"AI Powered Notebook"} 
                  desc={`Built a cross-platform AI-powered notebook with Rust and Tauri, featuring vault-based note management, 
                          authentication with Redis, cloud storage, and OpenAI API integration for prompt interactions.`}
                  tech_stack={neuro_tags}
                  link={"https://github.com/aspherr/Neuro"}
                  cardVar={cardVariants}/>

                <Project 
                  hasImage={false}
                  name={"PROJECT λ"}  
                  subtitle={""} 
                  desc={"Coming Soon..."} 
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
              <Link
                url="mailto:huzaifasyed.dev@gmail.com"
                icon={
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className=''>
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
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className=''>
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
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className=''>
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
                    className={`mt-1 block w-full border bg-zinc-950 text-white placeholder-zinc-600 rounded-md shadow-sm p-2 outline-none focus:border-white transition-all duration-300 ${nameError ? "border-dashed border-red-500" : "border-zinc-500"}`}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder='jane.doe@example.com'
                    value={email}
                    onChange={(e) => {setEmail(e.target.value); setEmailError(false); }}
                    className={`mt-1 block w-full border bg-zinc-950 text-white placeholder-zinc-600 rounded-md shadow-sm p-2 outline-none focus:border-white transition-all duration-300 ${emailError ? "border-dashed border-red-500" : "border-zinc-500"}`}
                  />
                </div>

                <div>
                  <textarea 
                  placeholder='Type your message here...'
                  value={message}
                  onChange={(e) => {setMessage(e.target.value); setMessageError(false)}}
                  className={`mt-1 block w-full h-72 border bg-zinc-950 text-white placeholder-zinc-600 rounded-md shadow-sm p-2 outline-none focus:border-white transition-all duration-300 resize-none ${messageError ? "border-dashed border-red-500" : "border-zinc-500"}`}>
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
