import Image from "next/image";
import Link from "next/link";
import { RESUME_DATA } from "../app/data/resume-data";

const About = () => {
    return (
        <section className="relative overflow-hidden bg-[#111318] py-16 md:py-20 px-6 md:px-12" id="about">
            {/* Subtle background orb */}
            <div className="glow-orb w-[300px] h-[300px] bg-indigo-600/5 -top-20 -right-20 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20 mx-auto max-w-5xl">

                {/* ── Image ─────────────────────────── */}
                <div className="w-[65%] sm:w-[50%] md:w-[40%] flex-shrink-0 animate-fade-in-left">
                    <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-indigo-500/40 via-violet-500/20 to-transparent">
                        <Image
                            src={RESUME_DATA.profilePicPath}
                            alt="Profile Photo"
                            width={400}
                            height={400}
                            className="w-full h-full object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* ── Content ──────────────────────── */}
                <div className="flex flex-col items-center md:items-start gap-6 animate-fade-in-right">
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400">Get to know me</p>
                        <h2 className="section-heading text-center md:text-start">About Me</h2>
                        <div className="section-divider w-12" />
                    </div>

                    <div className="space-y-4 text-gray-400 text-base leading-relaxed text-center md:text-start">
                        {RESUME_DATA.about.map((para, idx) => {
                            const colonIndex = para.indexOf(":");
                            if (colonIndex !== -1) {
                                const heading = para.slice(0, colonIndex);
                                const content = para.slice(colonIndex + 1);
                                return (
                                    <p key={idx}>
                                        <span className="font-semibold text-gray-200">{heading}:</span>
                                        {content}
                                    </p>
                                );
                            }
                            return <p key={idx}>{para}</p>;
                        })}
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href={RESUME_DATA.resumePath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary px-8 py-3 text-sm inline-flex items-center"
                        >
                            View CV
                        </Link>
                        <a
                            href={RESUME_DATA.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost px-6 py-3 text-sm inline-flex items-center text-emerald-400 hover:text-emerald-300"
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
