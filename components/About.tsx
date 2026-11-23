import Image from "next/image";
import { RESUME_DATA } from "../app/data/resume-data";

const About = () => {
    return (
        <section className="relative overflow-hidden py-[4rem] sm:py-[5rem] px-[1.5rem] lg:px-[3rem] max-w-[76rem] mx-auto" id="about">
            {/* Subtle background orb */}
            <div className="glow-orb w-[22rem] h-[22rem] theme-glow-orb-1 -top-[4rem] -right-[4rem] pointer-events-none opacity-20" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-[2.5rem] lg:gap-[4rem]">

                {/* ── Image ─────────────────────────── */}
                <div className="w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem] flex-shrink-0">
                    <div className="relative p-[0.1875rem] rounded-[1.25rem] theme-photo-border shadow-2xl">
                        <div className="relative w-full aspect-square rounded-[1.125rem] overflow-hidden bg-black/80">
                            <Image
                                src={RESUME_DATA.profilePicPath}
                                alt="Profile Photo"
                                fill
                                className="object-cover hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Content ──────────────────────── */}
                <div className="flex flex-col items-center md:items-start gap-[1.25rem]">
                    <div className="flex flex-col items-center md:items-start gap-[0.5rem]">
                        <span className="theme-badge px-[0.875rem] py-[0.3rem] rounded-full text-[0.75rem] font-semibold tracking-wider uppercase">
                            Get to know me
                        </span>
                        <h2 className="section-heading text-center md:text-start">About Me</h2>
                        <div className="w-[3rem] h-[0.1875rem] rounded-full section-divider" />
                    </div>

                    <div className="space-y-[0.75rem] text-zinc-300 text-[0.9375rem] sm:text-[1rem] leading-[1.65] text-center md:text-start">
                        {RESUME_DATA.about.map((para, idx) => {
                            const colonIndex = para.indexOf(":");
                            if (colonIndex !== -1) {
                                const heading = para.slice(0, colonIndex);
                                const content = para.slice(colonIndex + 1);
                                return (
                                    <p key={idx}>
                                        <span className="font-semibold text-white">{heading}:</span>
                                        {content}
                                    </p>
                                );
                            }
                            return <p key={idx}>{para}</p>;
                        })}
                    </div>

                    <div className="flex items-center gap-[1rem] pt-[0.5rem]">
                        <a
                            href={RESUME_DATA.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary px-[1.5rem] py-[0.6875rem] text-[0.875rem] inline-flex items-center rounded-[0.75rem]"
                        >
                            View CV
                        </a>
                        <a
                            href={RESUME_DATA.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost px-[1.375rem] py-[0.6875rem] text-[0.875rem] inline-flex items-center text-emerald-400 hover:text-emerald-300 rounded-[0.75rem]"
                        >
                            WhatsApp Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
