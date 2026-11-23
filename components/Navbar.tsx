"use client";

import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { ExternalLink } from "lucide-react";
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
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-[#070709]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_0.25rem_2rem_rgba(0,0,0,0.5)]"
                    : "bg-transparent border-b border-transparent"
                }`}
        >
            <header className="flex items-center justify-between gap-[1rem] px-[1.5rem] lg:px-[3rem] h-[4.25rem] mx-auto max-w-[76rem]">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0 group">
                    <span className="text-[1.125rem] font-bold tracking-tight text-white transition-colors duration-200">
                        Ibad<span className="accent-gradient-text">.</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-[0.25rem] lg:gap-[0.5rem]">
                    {NAV_ITEMS.map(({ label, href }) => (
                        <NavLink key={label} href={href} label={label} />
                    ))}
                </nav>

                {/* Quick Action Buttons */}
                <div className="hidden md:flex items-center gap-[0.75rem] flex-shrink-0">
                    <a
                        href={RESUME_DATA.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-[0.375rem] px-[0.75rem] py-[0.375rem] text-[0.75rem] font-semibold rounded-[0.5rem]
                            border border-emerald-500/30 bg-emerald-500/10 text-emerald-300
                            hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-200"
                    >
                        <BsWhatsapp className="text-[0.875rem]" />
                        WhatsApp
                    </a>
                    <a
                        href={RESUME_DATA.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-[0.8125rem] py-[0.4375rem] px-[1.125rem] inline-flex items-center gap-[0.375rem] rounded-[0.5rem]"
                    >
                        View CV
                        <ExternalLink className="w-[0.8125rem] h-[0.8125rem]" />
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-[0.3125rem] p-[0.5rem] rounded-[0.5rem] hover:bg-white/5 transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-[1.25rem] h-[0.125rem] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[0.4375rem]" : ""}`} />
                    <span className={`block w-[1.25rem] h-[0.125rem] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-[1.25rem] h-[0.125rem] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[0.4375rem]" : ""}`} />
                </button>
            </header>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[24rem] opacity-100" : "max-h-0 opacity-0"
                    } bg-[#070709]/95 backdrop-blur-xl border-b border-white/[0.08]`}
            >
                <nav className="flex flex-col px-[1.5rem] py-[1rem] gap-[0.25rem]">
                    {NAV_ITEMS.map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className="text-[0.875rem] text-gray-400 hover:text-white hover:bg-white/5 px-[0.75rem] py-[0.5rem] rounded-[0.5rem] transition-all duration-200"
                        >
                            {label}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-[0.5rem] mt-[0.75rem] pt-[0.75rem] border-t border-white/10">
                        <a
                            href={RESUME_DATA.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-[0.5rem] px-[1rem] py-[0.625rem] rounded-[0.5rem] border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-[0.875rem] font-semibold"
                        >
                            <BsWhatsapp className="text-[1rem]" />
                            Chat on WhatsApp
                        </a>
                        <a
                            href={RESUME_DATA.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-[0.875rem] py-[0.625rem] px-[1.25rem] inline-flex items-center justify-center gap-[0.5rem] rounded-[0.5rem]"
                        >
                            View CV <ExternalLink className="w-[0.875rem] h-[0.875rem]" />
                        </a>
                    </div>
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
            className="relative px-[0.625rem] lg:px-[0.75rem] py-[0.375rem] text-[0.8125rem] lg:text-[0.875rem] text-zinc-400 hover:text-white rounded-[0.5rem] hover:bg-white/5 transition-all duration-200 group"
        >
            {label}
            <span className="absolute bottom-[0.25rem] left-[0.625rem] right-[0.625rem] h-[0.125rem] rounded-full section-divider scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
        </Link>
    );
}
