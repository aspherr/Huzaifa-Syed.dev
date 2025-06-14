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
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  

 const sectionName = (ref: React.RefObject<HTMLDivElement | null>, name: string, ) => {
  return (
    <div ref={ref}>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={ useInView(ref, { amount: 0.4 }) ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="font-mono text-left ml-10 mt-30">
        <h1 className="font-bold text-5xl text-blue-600">{name}</h1>
      </motion.div>
    </div> 
  );
 }

  const [visible, setVisible] = useState(false);

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
    { href: "#about-me", label: ".about-me()" },
    { href: "#experience", label: ".experience()" },
    { href: "#projects", label: ".projects()" },
    { href: "#contact-me", label: ".contact-me()" },
  ];

  return (
    <main ref={mainRef} className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      
      {/* settings & links navbar */}
      <section id='settings'>
      
        <AnimatePresence>
          {visible && (
            
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="fixed top-4 w-full px-6 z-10 flex flex-row items-center font-mono font-bold text-xl text-zinc-700"
            >
              <div className="fixed w-full h-20 bg-[var(--background)]"></div>
              
              <div className="flex-none mt-1.5 z-10">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.05  }}
                  onClick={() => {
                    scrollToSection("home")
                  }}
                  className="duration-200 hover:text-blue-600 font-bold"
                >
                  ()
                </motion.button>
              </div>

              <ul className="flex-1 flex justify-center gap-12 z-10">
                {links.map(({ href, label }) => (
                  <li key={label}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.1 }}
                      onClick={() => {
                        scrollToSection(href.replace("#", ""));}}
                      className="hover:text-blue-600 duration-200">
                      {label}
                    </motion.button>
                  </li>
                ))} 
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-row fixed gap-4 top-4 right-5 z-10"> 
          {/* language toggle */}
          <Button Icon={
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="group-hover:text-blue-600 transition-colors duration-300">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          }/>

          {/* light/dark mode toggle */}
          <Button Icon={
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="group-hover:text-blue-600 transition-colors duration-300">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          }/>

          {/* colour picker */}
          <Button Icon={
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20" 
            height="20"
            viewBox="0 0 24 24" 
            fill="none" 
            strokeWidth="1.5" 
            stroke="currentColor"
            className="group-hover:text-blue-600 transition-colors duration-300">
              <path d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg> 
          }/>
        </div>
      </section>

      <section id='home'>
        <div className="flex h-screen items-center justify-center max-w-screen-xl mx-auto gap-x-30 snap-start">
          {/* main title */}
          <div className="font-mono text-left space-y-3">
            <h1 className="font-bold text-7xl">
              huzaifa<span className="text-blue-600">.syed()</span>
            </h1>
            <h3 className="text-lg pl-1">
              An up-and-coming <span className="text-blue-600">full-stack</span> engineer
            </h3>
          </div>

          {/* page links */}
          <div className="font-mono font-bold text-4xl text-zinc-700 text-right">
            <ul className="space-y-4">
              {links.map(({ href, label }) => (
                <li key={label}>
                    <button
                      onClick={() => scrollToSection(href.replace("#", ""))}
                      className="hover:text-blue-600 duration-200">
                      {label}
                    </button>
                </li>
              ))} 
            </ul>
          </div>
        </div>
      </section>
      
      <section id="about-me" className="min-h-screen flex snap-start">
        {sectionName(aboutRef, ".about-me()")}
      </section>

      <section id="experience" className="min-h-screen flex snap-start">
        {sectionName(experienceRef, ".experience()")}
      </section>

      <section id="projects" className="min-h-screen flex snap-start">
        {sectionName(projectsRef, ".projects()")}
      </section>

      <section id="contact-me" className="min-h-screen flex snap-start">
        {sectionName(contactRef, ".contact-me()")}
      </section>

      <section id="socials">
        {/* socials navbar */}
        <div className="flex flex-row fixed gap-4 bottom-4 right-5 z-10">
          {/* github */}
          <Button Icon={
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="group-hover:text-blue-600 transition-colors duration-300">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>}

            Link={"https://github.com/aspherr"}/>

          {/* linked-in */}
          <Button Icon={
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="group-hover:text-blue-600 transition-colors duration-300">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>}
            
            Link={"https://www.linkedin.com/in/huzaifa-syed-profile/"}/>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    
    </main>      
  );
}
