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

  const FlipCard = () => {
    const [flipped, setFlipped] = useState(false);
  
    return (
      <div className="w-72 h-72 [perspective:1000px] cursor-pointer" onClick={() => setFlipped(!flipped)}>
        <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? "rotate-y-180" : ""}`}>
  
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden border border-zinc-900 rounded-xl px-4 py-2 flex items-center justify-center text-center bg-zinc-900 text-white">
            <span className="font-bold text-6xl">改善</span>
          </div>
  
          {/* Back */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 border border-zinc-900 rounded-xl px-6 py-4 flex items-center justify-center text-left bg-blue-600 text-white">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">
                kai·zen
              </span>

              <span className="text-base pt-2">
                a Japanese business philosophy of continuous improvement of working practices, personal efficiency, etc.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  useEffect(() => {
    const container = mainRef.current;
    if (!container) return;  
    
    container.addEventListener('scroll', handleScroll);
    handleScroll();
  
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
  
  
  const links = [
    { href: "#home", label: "home" },
    { href: "#projects", label: "experience" },
    { href: "#contact-me", label: "contact" },
  ];

  return (
    <main ref={mainRef} className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      
      {/* settings & links navbar */}
      <section id='settings'>
      
        <AnimatePresence>
          {visible && (
            
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "tween", stiffness: 200, damping: 1 }}
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

      <section id="home">

        <div className="flex flex-col items-center justify-start h-screen max-w-screen-xl mx-auto px-6 pt-12 font-mono snap-start">
    
          {/* main title */}
          <div className="space-y-2 text-left w-full max-w-xl">
            <h1 className="font-bold text-5xl">
              huzaifa<span className="text-blue-600">.syed</span>
            </h1>
            <h3 className="text-base">
              A <span className="text-blue-600">full-stack</span> engineer.
            </h3>
          </div>

          {/* about me */}
          <div className="text-sm leading-relaxed text-left w-full max-w-xl mt-6">
            <p className='pb-5'>
              Hey 👋 My name is Huzaifa and I'm a React and Next.js engineer based in the UK with full-stack experience.
              I build fast, scalable web applications with clean, and maintainable code. 🚀 <br/>
            </p>
          </div>

          {/* technologies */}
          <div className="w-full max-w-xl mx-auto mt-3 flex flex-row gap-6">
            <div className="border border-zinc-900 rounded-xl px-6 py-4 w-full max-w-4xs sm:max-w-2xs">
              <h2 className="text-xl font-bold text-blue-600 mb-5">Technologies I have worked with</h2>

              <div className="grid grid-cols-5 sm:grid-cols-4 gap-7 justify-items-center">
                <svg viewBox="0 0 128 128">
                  <path fill="#5a5a5a" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
                </svg>

                <svg viewBox="0 0 128 128">
                  <path fill="#5a5a5a" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path>
                </svg>
              
                <svg viewBox="0 0 128 128">
                  <g fill="#5a5a5a"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                </svg>
                
                <svg viewBox="0 0 128 128">
                  <path fill="#5a5a5a" d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64 64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64 64 64 0 0 0 64 0Zm17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92-.111.096a64 64 0 0 0 .111-.096z"></path>
                </svg>

                <svg viewBox="0 0 128 128">
                  <path fill="#5a5a5a" d="m64.36 0.005859c-1.045 0-2.091 0.2701-3.027 0.8125l-49.82 28.75 53.63 98.38c0.7789-0.1012 1.542-0.3539 2.244-0.7578l50.17-28.97c1.21-0.7006 2.114-1.787 2.607-3.049l-55.23-95.13c-0.1908-0.01819-0.3808-0.03711-0.5723-0.03711zm1.9 0.3203 35.65 61.39 16.86-31.02c-0.3597-0.3535-0.7631-0.6666-1.211-0.9258l-50.17-28.95c-0.3597-0.2085-0.7391-0.3638-1.125-0.4922zm-55.6 29.79c-1.566 1.133-2.518 2.949-2.518 4.9v57.95c0 1.292 0.4194 2.521 1.15 3.537l19.36-33.38-18-33.01zm108.8 1.408-16.97 31.21 18.03 31.06c0.03737-0.2716 0.05859-0.5456 0.05859-0.8242v-57.95c0-1.275-0.4097-2.488-1.123-3.496zm-90.25 32.63-19.23 33.15c0.3538 0.344 0.7477 0.6527 1.186 0.9062l50.16 28.97c0.8345 0.4788 1.753 0.7317 2.682 0.7852l-34.79-63.82z"></path>
                </svg>
          
                <svg viewBox="0 0 128 128">
                  <path fill="#5a5a5a" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"></path>
                </svg>

                <svg viewBox="0 0 128 128">
                  <path fill="#5a5a5a" d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"></path>
                </svg>

                <svg viewBox="0 0 128 128">
                  <path fill="#5a5a5a" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"></path>
                </svg>

                <svg viewBox="0 0 128 128">
                  <path fill="#5a5a5a" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path>
                </svg>

                <svg viewBox="0 0 128 128">
                  <path fill="#5a5a5a" d="M63.443 0c-1.782 0-3.564.39-4.916 1.172L11.594 28.27C8.89 29.828 6.68 33.66 6.68 36.78v54.197c0 1.562.55 3.298 1.441 4.841l-.002.002c.89 1.543 2.123 2.89 3.475 3.672l46.931 27.094c2.703 1.562 7.13 1.562 9.832 0h.002l46.934-27.094c1.352-.78 2.582-2.129 3.473-3.672.89-1.543 1.441-3.28 1.441-4.843V36.779c0-1.557-.55-3.295-1.441-4.838v-.002c-.891-1.545-2.121-2.893-3.473-3.67L68.359 1.173C67.008.39 65.226 0 63.443 0zm.002 26.033c13.465 0 26.02 7.246 32.77 18.91l-16.38 9.479c-3.372-5.836-9.66-9.467-16.39-9.467-10.432 0-18.922 8.49-18.922 18.924S53.013 82.8 63.445 82.8c6.735 0 13.015-3.625 16.395-9.465l16.375 9.477c-6.746 11.662-19.305 18.91-32.77 18.91-20.867 0-37.843-16.977-37.843-37.844s16.976-37.844 37.843-37.844v-.002zM92.881 57.57h4.201v4.207h4.203v4.203h-4.203v4.207h-4.201V65.98h-4.207v-4.203h4.207V57.57zm15.765 0h4.208v4.207h4.203v4.203h-4.203v4.207h-4.208V65.98h-4.205v-4.203h4.205V57.57z"></path>
                </svg>

                <svg viewBox="0 0 128 128">
                  <path fill="#5a5a5a" d="M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zm33.189-10.46c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zm11.319-60.575c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zm9.998 81.144s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.964-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644C17.455 81.134 61.958 83.958 85 77.896zm5.609 15.145c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559C89.459 14.563 76.492 1.587 76.492 1.587c5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zm27.274 51.748c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z"></path>
                </svg>

                <svg viewBox="0 0 128 128">
                  <path fill="#5a5a5a" d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314a9.66 9.66 0 012.293 9.993L87.42 55.529c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.578 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.779 3.777 3.779 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-4.088-9.905-.311-13.683.934-.933 1.855-1.638 2.855-2.11V47.333c-1-.472-1.92-1.172-2.856-2.111-2.861-2.86-3.396-7.06-1.928-10.576L40.983 20.333 3.229 58.123c-3.175 3.177-3.155 8.325.02 11.5l55.126 55.114c3.173 3.174 8.325 3.174 11.503 0l54.86-54.858c3.175-3.176 3.178-8.327.004-11.501z"></path>
                </svg>

                <svg viewBox="0 0 128 128">
                  <path fill="#5a5a5a" fill-rule="evenodd" d="M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z" clip-rule="evenodd"></path>
                </svg>                    
              </div>
            </div>

            <div className='flex flex-col'>
              <FlipCard />

              <div className="w-72 h-12 mt-4 border border-zinc-900 rounded-xl px-4 py-2 flex items-center justify-center text-center bg-blue-600 hover:border-white duration-450 transition-all">
                <a href="/cv.pdf" download className="flex items-center gap-2 font-medium text-white">
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
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* education */}
          <div className="border border-zinc-900 rounded-xl px-6 py-4 mt-5 w-full max-w-xl">
            <h2 className="text-xl font-bold text-blue-600 mb-3">Education</h2>
            <div className="flex items-start gap-3">
              <img
                src="/images/university-logo.png"
                alt="St George's University"
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <p className="text-sm font-semibold">City St George's University of London</p>
                <p className="text-xs">2022 – 2025</p>
                <p className="text-xs italic pt-1">BSc Computer Science</p>
              </div>
            </div>
          </div>
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
                fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"
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
