
import { ArrowRight } from "lucide-react"
import { Github, Linkedin, Facebook, Instagram } from "lucide-react"
const Footer = () => {
    return (
        <footer id="footer">
            <div className="container mx-auto my-6 max-w-6xl z-9999">
                <div className="relative mx-auto flex flex-col md:flex-row items-center gap-6 rounded-3xl px-4 py-10 backdrop-blur-lg bg-white/80 border-cyan-500/70 shadow-xl shadow-cyan-500/15">
                    <div className="flex flex-1 flex-col items-start gap-4 md:flex-row md:gap-10 md:px-8">
                        <div className="hidden md:flex flex-col space-y-6 md:w-1/2">
                            <h3 className="font-outfit font-extrabold text-cyan-500/70 tracking-tight md:text-4xl">MINHQUY</h3>
                            <p className="text-gray-600 w-60 font-outfit text-sm leading-5">Frontend Developer seeking for Internships and Freelance opportunities to contribute in real-world projects.</p>
                        </div>
                        <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:w-1/2 md:gap-16">
                            <div className="flex flex-col gap-2 md:gap-4">
                                <h4 className="font-outfit text-base text-slate-900">Navigation</h4>
                                <ul className="flex flex-wrap md:flex-col items-start gap-x-4 gap-y-2 text-sm text-slate-700 md:gap-y-3">
                                    <li>
                                        <a href="#home" className="group relative gap-2 inline-flex items-center cursor-pointer">Home
                                            <ArrowRight className="opacity-0 w-0 group-hover:w-4 group-hover:opacity-100 h-4 transition-all duration-300 ease-in-out" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#about" className="group relative gap-2 inline-flex items-center cursor-pointer">About
                                            <ArrowRight className="opacity-0 w-0 group-hover:w-4 group-hover:opacity-100 h-4 transition-all duration-300 ease-in-out" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#project" className="group relative gap-2 inline-flex items-center cursor-pointer">Project
                                            <ArrowRight className="opacity-0 w-0 group-hover:w-4 group-hover:opacity-100 h-4 transition-all duration-300 ease-in-out" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact" className="group relative gap-2 inline-flex items-center cursor-pointer">Contact
                                            <ArrowRight className="opacity-0 w-0 group-hover:w-4 group-hover:opacity-100 h-4 transition-all duration-300 ease-in-out" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2 md:gap-4">
                                <h4 className="font-outfit text-base text-slate-900">Expertise</h4>
                                <ul className="flex flex-wrap md:flex-col items-start gap-x-4 gap-y-2 md:gap-y-3 text-sm text-slate-700">
                                    <li>
                                        <a href="#about" className="group relative gap-2 inline-flex items-center cursor-pointer">Frontend Development
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#about" className="group relative gap-2 inline-flex items-center cursor-pointer">UX/UI Design
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2 md:gap-4">
                                <h4 className="font-outfit text-base text-slate-900">Connect</h4>
                                <ul className="flex flex-wrap md:flex-col items-start gap-x-4 gap-y-2 md:gap-y-3 text-sm text-slate-700">
                                    <li>
                                        <a href="#contact" className="group relative gap-2 inline-flex items-center cursor-pointer">Contact Me
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#project" className="group relative gap-2 inline-flex items-center cursor-pointer">Experience
                                        </a>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-4 justify-between gap-4 md:flex-row md:px-8 text-slate-600">
                    <div className="flex items-center gap-3 flex-col md:flex-row sm:gap-6">
                        <p className="whitespace-nowrap">© 2025 <a href="/" className="font-outfit whitespace-nowrap hover:text-slate-900 transition-all">Minh Quy</a>. All rights reserved.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 sm:gap-6 items-center justify-end">
                        <div className="flex gap-3">
                            <a href="https://github.com/mquy27" target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5 hover:text-black transition-all duration-300 ease-in-out" /></a>
                            <a href="https://www.linkedin.com/in/mquy2702/" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5 hover:text-blue-600 transition-all duration-300 ease-in-out" /></a>
                            <a href="https://www.facebook.com/LeeWuys" target="_blank" rel="noopener noreferrer"><Facebook className="w-5 h-5 hover:text-blue-600 transition-all duration-300 ease-in-out" /></a>
                            <a href="https://www.instagram.com/qiys.lm/" target="_blank" rel="noopener noreferrer"><Instagram className="w-5 h-5 hover:text-pink-600 transition-all duration-300 ease-in-out" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer