    import Marquee from 'react-fast-marquee';

    const Stack = ({ paused = false }) => {
        const tech = [
            "Javascript",
            "Typescript",
            "React.JS",
            "Next.JS",
            "Node.JS",
            "Express",
            "DaisyUI",
            "TailwindCSS",
            "Python",
            "Java",
            "C++",
            "Firebase",
            "Git",
            "Docker"
        ];
        const tagClasses = "border rounded-xl mr-3 px-4 py-2.5 border-zinc-900 bg-zinc-950 font-bold font-mono text-sm text-white hover:border-blue-600 transition-all duration-500";
        
        return (
            <div className='relative'>
                <Marquee play={!paused} pauseOnHover={false} gradient gradientWidth="80" gradientColor={[24, 24, 27]}>
                    {tech.map((t) => (
                        <div key={t} className={tagClasses}>
                            {t}
                        </div>
                    ))}
                </Marquee>
            </div>
    )
    }

    export default Stack
