import Image from "next/image";
import Link from "next/link";
import { RESUME_DATA } from "../app/data/resume-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Background Gradient Orbs — contained by overflow-hidden */}
      <div className="glow-orb w-[400px] h-[400px] bg-indigo-600/10 -top-32 -left-32" />
      <div className="glow-orb w-[300px] h-[300px] bg-violet-600/8 top-10 -right-20" />
      <div className="glow-orb w-[250px] h-[250px] bg-indigo-500/6 bottom-0 left-1/3" />

      <div className="relative z-10 w-full flex flex-col-reverse md:flex-row items-center gap-10 px-6 md:px-12 mx-auto">

        {/* ── Text Section ─────────────────────────────── */}
        <div className="w-full md:w-[58%] flex flex-col items-center md:items-start gap-6">

          {/* Available badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
            </span>
            Available for new projects
          </div>

          {/* Heading */}
          <div className="animate-fade-in-up-delay-1 flex flex-col items-center md:items-start gap-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center md:text-start leading-[1.1]">
              <span className="gradient-text">Hi, I'm </span>
              <span className="accent-gradient-text">{RESUME_DATA.name}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400 text-center md:text-start">
              AI-Powered Full-Stack Web Developer
            </h2>
            <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
          </div>

          {/* Summary */}
          <p className="animate-fade-in-up-delay-2 text-gray-400 text-base md:text-lg leading-relaxed text-center md:text-start max-w-xl whitespace-pre-line">
            {RESUME_DATA.summary}
          </p>

          {/* Social Links */}
          <div className="animate-fade-in-up-delay-3 flex flex-col items-center md:items-start gap-3">
            <p className="text-sm text-gray-500 font-medium tracking-wider uppercase">Connect with me</p>
            <div className="flex gap-3 items-center flex-wrap justify-center md:justify-start">
              {RESUME_DATA.contact.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  aria-label={social.name}
                  className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-gray-400
                    hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-300
                    transition-all duration-300 hover:scale-110 hover:shadow-glow-sm active:scale-95"
                >
                  <social.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up-delay-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/#contact" className="w-full sm:w-auto">
              <button className="btn-primary px-8 py-3 text-base w-full sm:w-auto">
                Contact Me
              </button>
            </Link>
            <Link href="/#projects" className="w-full sm:w-auto">
              <button className="btn-ghost px-8 py-3 text-base w-full sm:w-auto">
                My Projects
              </button>
            </Link>
          </div>
        </div>

        {/* ── Image Section ────────────────────────────── */}
        <div className="w-[60%] sm:w-[45%] md:w-[42%] mx-auto md:mx-0 flex-shrink-0 animate-fade-in-right">
          <div className="relative">
            {/* Glow ring behind image */}
            <div className="absolute inset-0 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-indigo-600/30 to-violet-600/20 blur-2xl scale-110 animate-float" />
            {/* Gradient border wrapper */}
            <div className="relative p-[3px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-indigo-500/60 via-violet-500/40 to-transparent animate-float">
              <Image
                src={RESUME_DATA.profilePicPath}
                alt="Profile Photo"
                width={460}
                height={460}
                priority
                className="object-cover w-full h-full rounded-[60%_40%_30%_70%/60%_30%_70%_40%] hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}