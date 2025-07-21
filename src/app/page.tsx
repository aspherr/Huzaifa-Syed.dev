"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

import Button from '@/components/button';
import Footer from '@/components/footer';

export default function Home() {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mainRef = useRef<HTMLDivElement | null>(null);

  const sectionName = (ref: React.RefObject<HTMLDivElement | null>, name: string, ) => {
    return (
      <div ref={ref}>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={ useInView(ref, { amount: 0.4 }) ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="font-mono text-left ml-10 mt-25">
          <h1 className="font-mono font-bold text-4xl text-blue-600">{name}</h1>
        </motion.div>
      </div> 
    );
 }

  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const handleScroll = () => {
    const container = mainRef.current;
    if (!container) return;

    const homeSection = document.getElementById('home');
    if (!homeSection) return;

    const scrollTop = container.scrollTop;
    const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;

    setVisible(scrollTop > homeBottom - 100);
  };

  useEffect(() => {
    const container = mainRef.current;
    if (!container) return;  
    
    container.addEventListener('scroll', handleScroll);
    handleScroll();
  
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
  
  
  const links = [
    { href: "#home", label: "home" },
    { href: "#about-me", label: "work" },
    { href: "#projects", label: "projects" },
    { href: "#contact-me", label: "contact" },
  ];

  return (
    <main ref={mainRef} className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      
      {/* settings & links navbar */}
      <section id='settings'>
      
        <AnimatePresence>
          {visible && (
            
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="fixed w-full left-1/2 transform -translate-x-1/2 px-6 py-6 z-10 flex flex-row items-center font-mono text-base text-white"
            >
              <div className="fixed w-full h-full bg-[var(--background)]/50 backdrop-blur-sm"></div>
                            
              <div className='mx-auto border-2 border-zinc-900 rounded-xl px-3 py-2 z-0'>
                <ul className="flex-1 flex justify-center gap-4 z-10">
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

      <section id='home'>
        <div className="flex h-screen items-center justify-center max-w-screen-xl mx-auto gap-x-30 snap-start">
          {/* main title */}
          <div className="font-mono text-left space-y-3">
            <h1 className="font-bold text-7xl">
              huzaifa<span className="text-blue-600">.syed()</span>
            </h1>
            <h3 className="text-lg pl-1">
              An up-and-coming <span className="text-blue-600">full-stack</span> engineer.
            </h3>
          </div>

          {/* page links */}
          <div className="font-mono font-bold text-4xl text-zinc-700 text-right">
            <ul className="space-y-4">
              {links.map(({ href, label }) => (
                <li key={label}>
                    <motion.button
                      whileHover={{ x: -10 }}
                      transition={{ duration: 0.1 }}
                      onClick={() => scrollToSection(href.replace("#", ""))}
                      className="hover:text-blue-600 duration-200">
                      {label}
                    </motion.button>
                </li>
              ))} 
            </ul>
          </div>
        </div>
      </section>
      
      <section id="about-me" className="min-h-screen flex snap-start">
        <div className='flex justify-center w-full mt-10'>

        </div>
      </section>

      <section id="projects" className="min-h-screen flex snap-start">
        <div className='flex justify-center w-full mt-10'>

        </div>
      </section>
        
      <section id="contact-me" className="min-h-screen flex snap-start">
        <div className='flex justify-center items-center w-full pb-30'>
          <div className="w-full max-w-lg mx-auto mt-30">

            <div className="flex flex-col md:flex-row gap-4 pb-4">
              <a href="mailto:your-email@example.com" className="flex-1 bg-zinc-900 rounded-xl p-4 flex items-center justify-center gap-2 group">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" 
                viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className='group-hover:text-blue-600 transsition-all duration-150'>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>

              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                className="flex-1 bg-zinc-900 rounded-xl p-4 flex items-center justify-center gap-2 group">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" 
                viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className='group-hover:text-blue-600 transsition-all duration-150'>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                className="flex-1 bg-zinc-900 rounded-xl p-4 flex items-center justify-center gap-2 group">
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className='group-hover:text-blue-600 transsition-all duration-150'>
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
                    className="mt-1 block w-full border border-zinc-500 text-white placeholder-zinc-600 rounded-md shadow-sm p-2 outline-none focus:border-white transition-all duration-300"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder='jane.doe@example.com'
                    required
                    className="mt-1 block w-full border border-zinc-500 text-white placeholder-zinc-600 rounded-md shadow-sm p-2 outline-none focus:border-white transition-all duration-300"
                  />
                </div>

                <div>
                  <textarea 
                  required
                  placeholder='Type your message here...'
                  className='mt-1 block w-full h-72 border border-zinc-500 text-white placeholder-zinc-600 rounded-md shadow-sm p-2 outline-none focus:border-white transition-all duration-300 resize-none'>
                  </textarea>
                </div>

                <div className='flex justify-center'>
                  <input 
                  type="submit" 
                  value="Send Message" 
                  className='text-zinc-600 font-bold text-md rounded-md w-full py-1 border border-zinc-500 hover:border-white transition-all duration-300 hover:text-blue-600'>
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
