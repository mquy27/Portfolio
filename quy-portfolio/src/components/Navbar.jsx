import CardNav from "./CardNav";
import { href, Link, Links } from "react-router-dom";
import { FileStack } from 'lucide-react';

const Navbar = () => {
    const items = [
        {
            label: "About",
            href: "#about",
            bgColor: "bg-gradient-to-r from-cyan-200/50 to-sky-200/50 backdrop-blur-md border border-white/40",
            textColor: "text-black",
            links: [
                { label: "About Me", href: "#about" },
                { label: "My Expertise", href: "#about" },
            ]
        },
        {
            label: "Experience",
            href: "#experience",
            bgColor: "bg-gradient-to-r from-sky-200/50 to-rose-200/50 backdrop-blur-md border border-white/40",
            textColor: "text-black",
            links: [
                { label: "Work", href: "#experience" },
                { label: "Education", href: "#experience" },
            ]
        },
        {
            label: "Project",
            href: "#project",
            bgColor: "bg-gradient-to-r from-rose-200/50 to-yellow-200/50 backdrop-blur-md border border-white/40",
            textColor: "text-black",
            links: [
                { label: "My Project", href: "#project" },
            ]
        },
        {
            label: "Contact",
            href: "#contact",
            bgColor: "bg-gradient-to-r from-amber-200/50 to-cyan-200/50 backdrop-blur-md border border-white/40",
            textColor: "text-black",
            links: [
                { label: "My Information", href: "#contact" },
                { label: "Contact Form", href: "#contact" },
            ]
        }
    ];

    const NavItem = ({ link, className, onClick }) => {
        const isHash = link.href.startsWith("#") || link.href === "/#";

        if (isHash) {
            return (
                <a
                    href={link.href}
                    className={className}
                    onClick={onClick}
                >
                    {link.name}
                </a>
            );
        }

        return (
            <Link
                to={link.href}
                className={className}
                onClick={onClick}
            >
                {link.name}
            </Link>
        );
    };

    return (
        <CardNav
            items={items}
            baseColor="rgba(255, 255, 255, 0.7)"
            textColor="text-blue-600"
            menuColor="text-black"
            buttonBgColor="rgba(255, 255, 255, 0)"
            buttonTextColor="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"
            buttonHoverBgColor="bg-blue-700"
            buttonHoverTextColor="text-white"
            ease="power3.out"
            logoText="LÊ MINH QUÝ"
            rightAction={
                <Link to="/photography" className="hidden md:flex items-center justify-center p-2 transition-all hover:scale-125 duration-300 text-blue-600 hover:text-blue-800">
                    <FileStack size={32} />
                </Link>
            }
            className="fixed top-0 z-50 font-mono backdrop-blur-md rounded-xl"
        />
    );
};

export default Navbar;
