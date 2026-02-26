import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Development",
        skills: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        ]
    },
    {
        title: "Tools & Version Control",
        skills: [
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            { name: "Visual Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg" },
        ]
    },
    {
        title: "Basic Knowledge",
        skills: [
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
            // { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        ]
    },
];

const AboutMe = () => {
    return (
        <section id="about">
            <div className="py-20 bg-white relative overflow-hidden min-h-screen">
                <section className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 lg:min-h-screen lg:flex-row lg:justify-between px-6 py-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-xl space-y-8 lg:max-w-lg relative z-10 shrink-0"
                    >
                        <div className="space-y-4">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-sm font-outfit text-amber-600 font-bold uppercase tracking-[0.3]"
                            >
                                Know about me
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold leading-[1.1] tracking-tight text-gray-900"
                            >
                                <span className="block mb-2">Frontend Developer & <span className="block">a little bit of
                                    <br />
                                    <span className="text-transparent bg-linear-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text font-outfit">UI Designer</span>
                                </span>
                                </span>
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="space-y-6 text-xl leading-relaxed text-gray-700 max-w-xl font-outfit font-light"
                        >
                            <p>
                                I'm <span className="text-cyan-600 font-bold drop-shadow-sm">Minh Quy</span>, a passionate Frontend Developer who loves building beautiful and user-friendly websites.
                                Currently in my final years of studying Software Engineering at HCMC University of Technology with my cultivated GPA of <span className="text-amber-500 font-medium">3.44/4.0</span>.
                            </p>
                            <p>
                                I am seeking for opportunities in Frontend Internships to growth and contribute my best to real-world projects.
                            </p>
                            <p>
                                At the moment I am trying to focus more on improving my skills in Frontend Development, especially in <span className="text-cyan-600 font-bold">React</span> and <span className="text-cyan-600 font-bold">TypeScript</span>.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <a href="/LeMinhQuyCV.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-600 group inline-flex items-center justify-center gap-2 text-sm font-normal px-4 py-2 rounded-md border border-cyan-600/30 hover:text-cyan-800 bg-cyan-100/30 hover:bg-cyan-200/30 transition-all duration-300 hover:border-cyan-600/50 hover:shadow-md hover:scale-105">
                                View CV
                                <div className="relative overflow-hidden w-6 h-6 rounded-full border border-cyan-500/50">
                                    <div className="flex flex-col w-12 -translate-y-6 transition-transform duration-300 ease-out group-hover:translate-y-0">
                                        <ExternalLink className="w-6 h-6 p-1" />
                                        <ExternalLink className="w-6 h-6 p-1" />
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative block w-full h-[600px] max-w-xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="absolute inset-0 bg-linear-to-br from-amber-200/20 to-orange-300/20 backdrop-blur-3xl blur-xl rounded-full overflow-visible"
                        >
                            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-400/20 rounded-full blur-[80px]"></div>
                            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-400/20 rounded-full blur-[80px]"></div>
                        </motion.div>
                        {skillCategories.flatMap(c => c.skills).map((skill, index) => {
                            const positions = [
                                { top: '5%', left: '10%' }, { top: '15%', left: '55%' },
                                { top: '30%', left: '5%' }, { top: '40%', left: '65%' },
                                { top: '60%', left: '10%' }, { top: '70%', left: '45%' },
                                { top: '10%', left: '80%' }, { top: '30%', left: '35%' },
                                { top: '50%', left: '40%' }, { top: '65%', left: '80%' },
                                { top: '5%', left: '40%' }, { top: '80%', left: '10%' }
                            ];
                            const pos = positions[index % positions.length];
                            const delay = (index * 0.5) % 4;
                            const duration = 5 + (index % 3);

                            return (
                                <div
                                    key={index}
                                    className="absolute animate-float bg-white/40 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-xl flex items-center justify-center group hover:bg-white/60 transition-all duration-300 hover:scale-110 z-20"
                                    style={{
                                        top: pos.top,
                                        left: pos.left,
                                        animationDelay: `${delay}s`,
                                        animationDuration: `${duration}s`
                                    }}
                                >
                                    <img src={skill.icon} alt={skill.name} className="w-6 h-6 md:w-10 md:h-10 object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all" />
                                    <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs font-bold text-gray-600 whitespace-nowrap transition-all bg-white/80 px-2 py-1 rounded shadow-sm">
                                        {skill.name}
                                    </span>
                                </div>
                            );
                        })}
                    </motion.div>
                </section>
            </div>
        </section>
    );
};

export default AboutMe;