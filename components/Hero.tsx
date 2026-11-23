import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { Bot, Cpu, Layers, MapPin, ArrowUpRight } from "lucide-react";
import { RESUME_DATA } from "../app/data/resume-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4.5rem)] flex items-center py-[2rem] sm:py-[2.5rem] lg:py-[3rem] px-[1.5rem] sm:px-[2rem] lg:px-[3rem] max-w-[76rem] mx-auto">
      {/* Background Subtle Ambient Glow */}
      <div className="glow-orb w-[24rem] h-[24rem] theme-glow-orb-1 -top-[6rem] -left-[6rem] opacity-30" />
      <div className="glow-orb w-[20rem] h-[20rem] theme-glow-orb-2 top-[2rem] -right-[4rem] opacity-20" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-[2rem] lg:gap-[3rem]">

        {/* ── Left Column: Outcome-Focused Messaging (7 cols) ────────── */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start gap-[1rem] sm:gap-[1.25rem] text-center lg:text-left">

          {/* Availability pill matching LinkedIn banner */}
          <div className="inline-flex items-center gap-[0.5rem] rounded-full px-[0.875rem] py-[0.3rem] text-[0.75rem] font-semibold theme-badge">
            <span className="relative flex h-[0.5rem] w-[0.5rem]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-[0.5rem] w-[0.5rem] bg-emerald-400" />
            </span>
            <span>OPEN FOR REMOTE ROLES & CONTRACTS</span>
          </div>

          {/* Heading & Role Hierarchy */}
          <div className="flex flex-col gap-[0.5rem]">
            <h1 className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.1] text-white">
              Hi, I'm <span className="accent-gradient-text">{RESUME_DATA.name}</span>
            </h1>

            <div className="flex flex-col gap-[0.25rem]">
              <span className="text-[1.25rem] sm:text-[1.5rem] lg:text-[1.65rem] font-extrabold uppercase tracking-wide text-white leading-tight">
                BUILDING AI-POWERED BUSINESS SYSTEMS
              </span>
              <p className="text-[0.9375rem] sm:text-[1rem] font-medium text-zinc-300 leading-snug">
                Forward Deployed Engineer • Turning Business Problems into Production-Ready AI & Custom Software
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-[0.5rem] text-[0.8125rem] font-medium text-zinc-400 pt-[0.25rem]">
              <MapPin className="w-[0.875rem] h-[0.875rem] text-zinc-400 flex-shrink-0" />
              <span>Karachi, Pakistan</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300">Available Globally for Remote Roles</span>
            </div>

            <div className="w-[3.5rem] h-[0.125rem] rounded-full section-divider mx-auto lg:mx-0 mt-[0.25rem]" />
          </div>

          {/* Concise Outcome Statement */}
          <p className="text-zinc-300 text-[0.9375rem] sm:text-[1rem] leading-[1.6] max-w-[34rem]">
            I engineer practical software solutions, autonomous AI agent workflows, and business management systems that automate operations, eliminate manual bottlenecks, and deliver measurable business outcomes.
          </p>

          {/* 3 Outcome Pillars from LinkedIn banner */}
          <div className="flex flex-wrap gap-[0.5rem] justify-center lg:justify-start">
            <span className="theme-pill inline-flex items-center gap-[0.375rem] px-[0.75rem] py-[0.3rem] rounded-full text-[0.75rem] font-semibold">
              <Bot className="w-[0.875rem] h-[0.875rem] text-zinc-300" />
              AI Agents
            </span>
            <span className="theme-pill inline-flex items-center gap-[0.375rem] px-[0.75rem] py-[0.3rem] rounded-full text-[0.75rem] font-semibold">
              <Cpu className="w-[0.875rem] h-[0.875rem] text-zinc-300" />
              Workflow Automation
            </span>
            <span className="theme-pill inline-flex items-center gap-[0.375rem] px-[0.75rem] py-[0.3rem] rounded-full text-[0.75rem] font-semibold">
              <Layers className="w-[0.875rem] h-[0.875rem] text-zinc-300" />
              Custom AI Solutions
            </span>
          </div>

          {/* Action Buttons - Always above the fold! */}
          <div className="flex flex-wrap items-center gap-[0.75rem] justify-center lg:justify-start pt-[0.25rem]">
            <a
              href={RESUME_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-[0.5rem] px-[1.375rem] py-[0.6875rem] text-[0.875rem] font-semibold rounded-[0.75rem]
                bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20
                hover:shadow-emerald-600/30 transition-all duration-200 active:translate-y-px"
            >
              <BsWhatsapp className="text-[1rem]" />
              Start on WhatsApp
            </a>
            <Link
              href="/#projects"
              className="btn-primary px-[1.375rem] py-[0.6875rem] text-[0.875rem] inline-flex items-center justify-center rounded-[0.75rem]"
            >
              View Built Systems
            </Link>
            <a
              href={RESUME_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-[1.375rem] py-[0.6875rem] text-[0.875rem] inline-flex items-center justify-center rounded-[0.75rem]"
            >
              View CV
            </a>
          </div>
        </div>

        {/* ── Right Column: Balanced Portrait in rem (5 cols) ─────────── */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-[16rem] h-[16rem] sm:w-[18rem] sm:h-[18rem] lg:w-[21rem] lg:h-[21rem]">
            {/* Subtle glow halo */}
            <div className="absolute inset-0 rounded-full theme-photo-glow blur-2xl scale-105" />

            {/* Circular Border with subtle inner ring */}
            <div className="relative p-[0.1875rem] rounded-full theme-photo-border w-full h-full shadow-2xl">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-950">
                <Image
                  src={RESUME_DATA.profilePicPath}
                  alt={RESUME_DATA.name}
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
