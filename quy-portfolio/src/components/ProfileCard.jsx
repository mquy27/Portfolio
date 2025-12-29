import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react";

const ProfileCard = ({
    name = "Lê Minh Quý",
    role = "Software Engineer",
    image = "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    username = "@mquy27",
    status = "Online"
}) => {
    return (
        <div className="relative w-[300px] h-[400px] bg-[#1a1a1a] rounded-[30px] overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-800">
            {/* Background Gradient & Noise */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-black/80 z-0"></div>

            {/* Lighting Effect */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-purple-500/10 via-transparent to-transparent pointer-events-none z-10 blur-3xl"></div>

            {/* Content Container */}
            <div className="relative z-20 h-full flex flex-col items-center pt-8">
                {/* Header Text */}
                <div className="text-center mb-4 z-30">
                    <h2 className="text-2xl font-bold text-gray-100 font-sans tracking-wide">{name}</h2>
                    <p className="text-sm text-gray-400 font-medium tracking-wider">{role}</p>
                </div>

                {/* Main Image */}
                <div className="absolute bottom-0 w-full h-[85%] z-10">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover object-center"
                        style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                    />
                    {/* Inner Shadow for blend */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                </div>

                {/* Glass Bottom Bar */}
                <div className="absolute bottom-4 w-[90%] h-16 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-between px-3 z-30 shadow-lg ring-1 ring-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                            <img src={image} alt="avatar" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-200 text-xs font-bold">{username}</span>
                            <span className="text-gray-400 text-[10px] font-medium flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block animate-pulse"></span> {status}
                            </span>
                        </div>
                    </div>

                    <a
                        href="#contact"
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all border border-white/5 active:scale-95"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
