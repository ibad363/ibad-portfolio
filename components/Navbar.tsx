"use client";

import Link from "next/link";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { RESUME_DATA } from "../app/data/resume-data";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Education", href: "/#education" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-[#0d0f14]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
                    : "bg-transparent border-b border-transparent"
                }`}
        >
            <header className="flex items-center justify-between gap-4 px-6 md:px-10 py-4 mx-auto max-w-[110rem]">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0 group">
                    <span className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors duration-300">
                        Ibad<span className="text-indigo-400 group-hover:text-white transition-colors duration-300">.</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {NAV_ITEMS.map(({ label, href }) => (
                        <NavLink key={label} href={href} label={label} />
                    ))}
                </nav>

                {/* Download CV Button */}
                <Link href={RESUME_DATA.resumePath} target="_blank" className="hidden md:block flex-shrink-0">
                    <button className="btn-primary text-sm py-2 px-5">
                        Download CV
                        <AiOutlineCloudDownload className="text-base" />
                    </button>
                </Link>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-[5px] p-2 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                    <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                </button>
            </header>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } bg-[#0d0f14]/95 backdrop-blur-xl border-b border-white/[0.06]`}
            >
                <nav className="flex flex-col px-6 py-4 gap-1">
                    {NAV_ITEMS.map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className="text-sm text-gray-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-200"
                        >
                            {label}
                        </Link>
                    ))}
                    <Link href={RESUME_DATA.resumePath} target="_blank" className="mt-2">
                        <button className="btn-primary text-sm py-2 px-5 w-full justify-center">
                            Download CV <AiOutlineCloudDownload className="text-base" />
                        </button>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;

function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="relative px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 group"
        >
            {label}
            <span className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </Link>
    );
}