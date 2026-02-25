import kanban from "../assets/kanban-board.png"
import portfo2 from "../assets/portfo-2.png"
import kimky from "../assets/figma-kimky.png"
import { Github } from "lucide-react"
import { ArrowRight } from "lucide-react"
const ProjectList = [
    {
        role: "Frontend Developer",
        tag: "School Project",
        period: "Oct 2025 - Dec 2025",
        name: "Project Managemanet System (Jira/Notion-inspired)",
        description: "A comprehensive project management system inspired by Jira and Notion, designed to streamline workflows and enhance team collaboration. This platform features intuitive task tracking, project organization, and seamless communication tools to boost productivity.",
        image: kanban,
        link: "",
        github: "github.com/mquy27/ProjectManagement",
        techstacks: ["HTML", "CSS", "JavaScript", "SQL Server", "C#", "Entity Framework", "ASP.NET Core"],
        contributions: ["Developed a robust rendering logic for complex components including dynamic Kanban boards, interactive Dashboards (Chart.js), and multi-tab Task Detail modals.",
            "Mastered Tailwind CSS for a premium design; implemented Drag & Drop API and Optimistic UI updates to ensure a seamless, desktop-like user experience.",
            "Engineered a custom Auth system using JWT and handled complex data state across multiple views (Gantt, Backlog, Spreadsheet).",
            "Handled complex data synchronization for the Scrum Burn-down Chart and Kanban Board using asynchronous JavaScript and error-handling strategies."
        ]
    },
    {
        role: "Frontend Developer",
        tag: "Personal Project",
        period: "Dec 2025 - Present",
        name: "Personal Portfolio V1/V2",
        description: "A personal portfolio website to showcase my projects and skills. Both versions of the website are built with React and Tailwind CSS.",
        image: portfo2,
        link: "https://mquysportfolio.vercel.app",
        github: "https://github.com/mquy27/PortfolioV2",
        techstacks: [
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Framer Motion",
            "Vite"
        ],
        contributions: [
            "Architected and developed a highly interactive, modern personal portfolio utilizing React, Vite, and Tailwind CSS to vividly showcase personal projects and frontend capabilities.",
            "Implemented advanced, fluid web animations and scroll-based interactions using Framer Motion and GSAP, including parallax scrolling effects and dynamic timeline visualizations.",
            "Engineered custom, interactive UI logic such as seamless Draggable components, 3D rotating text, and engaging physics-based collision simulations utilizing Matter.js.",
            "Designed a fully responsive, mobile-first styling architecture with tailored CSS gradients, noise textures, and optimized rendering to ensure a seamless premium user experience across all devices."
        ]
    },
    {
        role: "Fullstack Developer",
        tag: "Freelance Project",
        period: "Dec 2025 - Present",
        name: "Kim Kỳ Ceramic",
        description: "A premium e-commerce and showcase website for high-end ceramic products, featuring a modern UI/UX architecture and headless CMS integration.",
        image: kimky,
        link: "https://kimkyceramic.com",
        techstacks: ["Next.js", "Figma", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
        contributions: ["Designed and prototyped the UI/UX in Figma, establishing a cohesive design system and typography scale to ensure a premium, pixel-perfect translation from mockup to code.",
            "Architected a dynamic 'Page Builder' system using Sanity CMS and polymorphic GROQ queries, empowering content editors to create complex, magazine-style blog layouts without writing code.",
            "Engineered native-like mobile interactions by implementing CSS Scroll Snap for product image galleries and building a fully responsive Bento Grid system for product collections.",
            "Elevated the brand's premium identity by integrating Framer Motion for sophisticated micro-interactions, including scroll-triggered fade-ins, layout transitions, and interactive product cards.",
            "Optimized application performance and technical SEO by leveraging Next.js Server Components, managing filter states via URL parameters, and generating automated JSON-LD schema markup."
        ]
    }
]
const Project = () => {
    return (
        <section id="project" className="font-outfit">
            <div className="py-20 w-full">
                <div className="mx-auto px-4 container">
                    <div className="text-center mb-16 space-y-2">
                        <p className="text-xs text-gray-600 md:text-sm uppercase tracking-[0.3]">My Selected Projects</p>
                        <h2 className="relative z-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 font-fira font-medium text-balance tracking-normal text-center text-gray-900">Assignments to <span className="text-transparent bg-linear-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text font-outfit">Reality</span></h2>
                        <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">Here are some of my selected projects that I have worked on during my studies and personal time. And it will grow overtime.</p>
                    </div>
                    <div className="w-full">
                        {ProjectList.map((project, index) => (
                            <div key={index} className="relative max-w-7xl mx-auto pb-20">
                                <div className="flex flex-col lg:flex-row justify-start pt-10 md:pt-20 lg:pt-40 gap-8 md:gap-10">
                                    <div className="relative lg:sticky z-40 lg:top-40 self-start w-full lg:w-1/2">
                                        <div className="relative w-full aspect-video lg:h-96 overflow-hidden rounded-xl shadow-lg bg-gray-50/50 flex items-center justify-center p-2 border border-gray-100/50">
                                            <img src={project.image} alt={project.name} className="w-full h-full object-contain rounded-lg" />
                                        </div>
                                    </div>
                                    <div className="relative w-full lg:w-1/2 pl-0 lg:pl-10">
                                        <div className="space-y-6">
                                            <div className="mb-8 flex flex-col">
                                                <div className="flex items-center justify-start gap-2">
                                                    <span className="text-cyan-500 text-xs md:text-sm font-semibold uppercase tracking-wider mb-3">{project.tag}</span>
                                                    <span className="text-amber-500 text-xs md:text-sm font-semibold uppercase tracking-wider mb-3">{project.period}</span>
                                                </div>
                                                <div className="group">
                                                    <a href={project.link} className="text-2xl md:text-4xl flex items-center gap-2 font-bold font-outfit text-gray-900 mb-4 tracking-tight">
                                                        <ArrowRight className="inline-block w-0 opacity-0 group-hover:w-10 group-hover:opacity-100 h-10 transition-all duration-300 ease-in-out" />{project.name}</a>

                                                </div>
                                                {project.github && (
                                                    <div className="flex items-start justify-start px-2 pb-4">
                                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-all duration-300 ease-in-out hover:scale-110">
                                                            <Github className="w-6 h-6" /> Github
                                                        </a>
                                                    </div>
                                                )}
                                                <p className="text-sm sm:text-base md:text-lg font-normal text-gray-700 leading-relaxed max-w-3xl">{project.description}</p>
                                            </div>
                                            <div className="relative rounded-2xl bg-white p-4 md:p-6 lg:p-8 backdrop-blur-sm">
                                                <div className="space-y-6">
                                                    <div>
                                                        <div className="flex flex-col gap-2 items-start mb-4">
                                                            <span className="text-base md:text-lg lg:text-xl text-gray-900 font-semibold tracking-tight border-b-2 border-dashed border-cyan-600">My contributions to this project</span>
                                                            <span className="text-sm text-cyan-600 font-semibold">{project.role}</span>
                                                        </div>
                                                        <ul className="pl-6 space-y-2">
                                                            {project.contributions.map((contribution, index) => (
                                                                <li key={index} className="relative pl-8 py-2 text-sm md:text-base text-gray-700 
                                                                    before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 
                                                                    before:w-2 before:h-2 before:bg-cyan-400 before:rounded-full before:shadow-[0_0_10px_#22d3ee]
                                                                    hover:bg-white/20 hover:backdrop-blur-sm rounded-lg transition-all duration-300 px-4">
                                                                    {contribution}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="pt-4 border-t border-gray-200">
                                                <p className="text-xs text-neutral-500 mb-3 uppercase tracking-wider">
                                                    Tech Stacks Used
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.techstacks.map((techstack, index) => (
                                                        <span key={index} className="text-xs text-neutral-500 px-3 py-1 rounded-lg border border-neutral-200 font-semibold">{techstack}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Project