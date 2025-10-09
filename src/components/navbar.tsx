import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { House, BriefcaseBusiness, Layers, Mail} from "lucide-react"


const Navbar = React.forwardRef<HTMLDivElement, {}>((_, ref)  => {
    const [activeSection, setActiveSection] = useState("home")

    const icons = React.useMemo(
        () => [
            { label: "home", icon: <House className="w-5 h-5" /> },
            { label: "work", icon: <BriefcaseBusiness className="w-5 h-5" /> },
            { label: "projects", icon: <Layers className="w-5 h-5" /> },
            { label: "contact-me", icon: <Mail className="w-5 h-5" /> },
        ], []
    );

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) { section.scrollIntoView({ behavior: 'smooth' });}
    };

    const idToLabel = useMemo(() => 
        new Map(icons.map(({ label }) => [label.replace('#', ''), label])),
        [icons]
    );

    useEffect(() => {
        let container: HTMLDivElement | null = null;
        if (ref && typeof ref !== "function") {
            container = ref.current;
        }

        const observer = new IntersectionObserver(
        (entries) => {
            const visibleEntries = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visibleEntries.length > 0) {
            const id = visibleEntries[0].target.getAttribute('id') || '';
            const label = idToLabel.get(id) ?? id;
            setActiveSection(label);
            }
        },
        {
            root: container,
            rootMargin: '-35% 0px -35% 0px',
            threshold: 0,
        }
        );

        const observed: Element[] = [];
        icons.forEach(({ label }) => {
            const id = label.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                observer.observe(el);
                observed.push(el);
            }
        });

        return () => {
        observer.disconnect();
        };
    }, [icons, idToLabel, ref]);

    return (
        <div className="fixed bottom-4 z-[9999] w-full flex justify-center pointer-events-none">
            <div className="flex flex-col items-center justify-center 
                w-full max-w-[275px] md:max-w-[240px] sm:max-w-sm mx-auto sm:mx-6
                font-mono backdrop-blur-md bg-accent/30
                rounded-2xl px-4 py-2 shadow-lg border border-accent/40
                pointer-events-auto">
                <div className="flex flex-row items-center justify-between w-full text-black/75 dark:text-white">
                    {icons.map(({ label, icon }) => (
                        <ul key={ label }>
                            <motion.button
                            onClick={() => {
                            scrollToSection(label);
                            setActiveSection(label);
                            }}
                            className={`p-2 hover:scale-115 transition-transform duration-200 rounded-lg ${
                            activeSection === label ? "bg-accent/50 text-blue-600" : ""
                            }`}>
                            {icon}
                        </motion.button>
                        </ul>
                    ))}     
                </div>
            </div>
        </div>
    )
});

export default Navbar
