import { React } from "react";

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
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        ]
    },
];

const AboutMe = () => {
    return (
        <section id="about" className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-mono text-amber-600 tracking-wide uppercase mb-4 block">About Me</h2>
                    <p className="max-w-2xl mx-auto text-xl text-gray-600 font-mono border-b border-amber-600 pb-4">
                        I'm a passionate frontend developer with a deep love for creating innovative and user-friendly applications.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-18 sm:px-24 lg:px-32 items-start">
                <div className="space-y-6">
                    <p className="text-lg text-gray-600 font-mono leading-relaxed text-balance text-left">
                        I am a <span className="text-sky-600 font-bold">Software Engineer</span> specializing in <span className="text-amber-600 font-bold">Frontend Development</span>, with a strong foundation in web technologies.
                    </p>
                    <p className="text-lg text-gray-600 font-mono leading-relaxed text-balance text-left">
                        Born in 2004, I have a <span className="text-sky-600 font-bold">deep passion</span> for building user-friendly websites and applications that solve real-world problems.
                        Currently, I am pursuing a Bachelor's degree in Software Engineering at HUTECH university, maintaining a GPA of <span className="text-amber-600 font-bold">3.43/4.0</span>.
                    </p>
                    <p className="text-lg text-gray-600 font-mono leading-relaxed text-balance text-left">
                        I pride myself on being a collaborative team player with good communication skills. I am eager to learn, adapt to new technologies, and contribute to the company's success.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <button className="inline-flex items-center justify-center gap-2 text-white bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-1 cursor-pointer">
                            Download CV
                        </button>
                        <a href="#contact" className="inline-flex items-center justify-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm border border-amber-300 hover:border-amber-500 hover:bg-white px-8 py-3 rounded-full transition-all">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="space-y-8">
                    {skillCategories.map((category, idx) => (
                        <div key={idx}>
                            <h3 className="text-xl font-bold font-mono text-gray-800 mb-4 border-l-4 border-amber-500 pl-3">{category.title}</h3>
                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="group flex flex-col items-center justify-center p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-amber-200 hover:bg-amber-50 transition-all duration-300 w-24 h-24"
                                        title={skill.name}
                                    >
                                        <div className="w-10 h-10 mb-2 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                                        </div>
                                        <span className="text-xs font-bold text-gray-600 group-hover:text-amber-700 font-mono text-center">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
