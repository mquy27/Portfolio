import { Github, Linkedin, Mail, Facebook, Instagram, ArrowRight } from "lucide-react";
import RotatingText from "./RotatingText";
import DiscordStatus from "./DiscordStatus";
import TerminalPortfolio from "./TerminalPortfolio";

const Hero = () => {
    return (
        <section id="home" className="relative font-outfit min-h-screen w-full flex items-center justify-center pt-20 pb-0 overflow-hidden bg-linear-to-b from-amber-50 via-orange-50 to-yellow-100 px-6 sm:px-16 lg:px-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-6">
                    <div className="text-center md:text-left mt-6 md:mt-12">
                        <span className="text-amber-600 font-bold text-xl tracking-wide block mb-2">Hello, I'm <span className="bg-clip-text text-cyan-500">Minh Quy</span></span>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight font-fira">
                            Frontend Developer
                            <br />
                            <span className="bg-clip-text text-3xl md:text-5xl font-outfit">& a bit of <span className="text-cyan-600">UI Designer</span></span>
                        </h1>
                        {/* <div className="text-3xl text-gray-700 font-mono mb-4 min-h-[60px] flex flex-row items-center justify-center md:justify-start flex-wrap gap-2">
                            <span className="whitespace-nowrap">I'm a</span>
                            <RotatingText
                                texts={['Web Developer', 'UI Designer', 'Freelancer']}
                                mainClassName="text-white font-mono font-bold text-xl sm:text-2xl md:text-3xl px-3 py-1 bg-cyan-600 rounded-md overflow-hidden"
                                staggerFrom="first"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="pb-0.5 sm:pb-1 md:pb-1 mr-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2000}
                                animatePresenceMode="popLayout"
                            />
                        </div> */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4 md:mt-8 lg:mt-2">
                            <div className="flex items-center gap-2 group w-full sm:w-auto">
                                <a href="#contact" className="w-full sm:w-auto inline-flex whitespace-nowrap items-center justify-center gap-2 text-white bg-cyan-600 px-6 py-3 md:px-10 md:py-3.5 rounded-full transition-all shadow-lg transform font-medium text-base md:text-lg">
                                    <ArrowRight className="w-0 h-5 group-hover:w-5 transition-all" /> Let's Chat
                                </a>
                            </div>
                            <a href="#project" className="w-full sm:w-auto inline-flex whitespace-nowrap items-center justify-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm border border-amber-200 hover:border-amber-300 hover:bg-white px-6 py-3 md:px-10 md:py-3.5 rounded-full transition-all font-medium text-base md:text-lg">
                                View Work
                            </a>
                        </div>

                        <div className="mt-12 flex items-center justify-center md:justify-start gap-6 text-gray-500">
                            <a href="https://github.com/mquy27" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-all transform hover:scale-110"><Github size={24} /></a>
                            <a href="https://linkedin.com/in/mquy2702" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.6)] transition-all transform hover:scale-110"><Linkedin size={24} /></a>
                            <a href="mailto:leminhquy737@gmail.com" className="hover:text-red-500 hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.6)] transition-all transform hover:scale-110"><Mail size={24} /></a>
                        </div>
                    </div>

                    {/* <ProfileCard /> */}
                    <TerminalPortfolio />
                </div>
            </div>
            {/* wave animation */}
            <div className="absolute bottom-0 left-0 w-full leading-none overflow-hidden z-0">
                <svg className="relative block w-[calc(100%+1.3px)] h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(14, 165, 233, 0.7)" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(56, 189, 248, 0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(125, 211, 252, 0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#0ea5e9" />
                    </g>
                </svg>
            </div>
        </section>
    );
};

export default Hero;


