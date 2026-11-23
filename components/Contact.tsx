import { FaLocationDot, FaEnvelope } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { RESUME_DATA } from "../app/data/resume-data";

function Contact() {
  return (
    <section className="relative overflow-hidden py-[4rem] sm:py-[5rem] px-[1.5rem] lg:px-[3rem] max-w-[76rem] mx-auto" id="contact">
      {/* Background orb */}
      <div className="glow-orb w-[20rem] h-[20rem] theme-glow-orb-1 -bottom-[3rem] -left-[3rem] opacity-20" />

      <div className="relative z-10 flex flex-wrap gap-[2.5rem] lg:gap-[4rem] max-w-[64rem] mx-auto">

        {/* ── Connect Section ───────────────────── */}
        <div className="w-full md:w-[42%] flex flex-col justify-center gap-[1.5rem] animate-fade-in-left">
          <div className="flex flex-col items-center md:items-start gap-[0.75rem]">
            <span className="theme-badge px-[0.875rem] py-[0.3rem] rounded-full text-[0.75rem] font-semibold tracking-wider uppercase">
              Get in Touch
            </span>
            <h2 className="section-heading text-center md:text-start">Let's Connect</h2>
            <div className="w-[3rem] h-[0.1875rem] rounded-full section-divider" />
          </div>

          <p className="text-zinc-300 text-[0.9375rem] sm:text-[1rem] leading-[1.6] text-center md:text-left">
            Have a forward-deployed role, an autonomous AI workflow, or a business system to build? Reach out directly on WhatsApp or drop a message below.
          </p>

          {/* Quick Contact Links */}
          <div className="flex flex-col gap-[0.75rem] items-center md:items-start">
            {/* WhatsApp Direct Option */}
            <a
              href={RESUME_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[0.75rem] px-[1rem] py-[0.625rem] rounded-[0.75rem] border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-200 text-[0.875rem] font-medium"
            >
              <BsWhatsapp className="text-emerald-400 text-[1.125rem] flex-shrink-0" />
              <span>WhatsApp: {RESUME_DATA.phone}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="inline-flex items-center gap-[0.75rem] text-[0.875rem] text-zinc-400 hover:text-white transition-colors duration-150"
            >
              <FaEnvelope className="stat-icon-color flex-shrink-0" />
              <span>{RESUME_DATA.contact.email}</span>
            </a>

            {/* Location */}
            <div className="inline-flex items-center gap-[0.75rem] text-zinc-500 text-[0.875rem]">
              <FaLocationDot className="stat-icon-color flex-shrink-0" />
              <a
                href={RESUME_DATA.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white hover:underline transition-colors duration-150"
              >
                {RESUME_DATA.location}
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-[0.75rem] pt-[0.5rem]">
            {RESUME_DATA.contact.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="group flex items-center justify-center w-[2.75rem] h-[2.75rem] rounded-full
                  border border-white/10 bg-white/5 text-zinc-400
                  hover:border-white/30 hover:text-white
                  transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <social.icon className="h-[1.125rem] w-[1.125rem]" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Contact Form ──────────────────────── */}
        <div className="w-full md:flex-1 animate-fade-in-right">
          <div className="glass-card p-[1.75rem] md:p-[2rem] rounded-[1.25rem]">
            <div className="flex flex-col items-center md:items-start gap-[0.75rem] mb-[1.5rem]">
              <h2 className="section-heading text-[1.5rem] md:text-[1.75rem] text-center md:text-start">Send a Message</h2>
              <div className="w-[2.5rem] h-[0.125rem] rounded-full section-divider" />
              <p className="text-zinc-400 text-[0.875rem] text-center md:text-start">Feel free to reach out. I'll get back to you promptly!</p>
            </div>

            <form action="https://formspree.io/f/xanylgpo" method="POST" className="space-y-[1rem]">
              {/* Name */}
              <FormField id="name" label="Name" type="text" name="name" />
              {/* Email */}
              <FormField id="email" label="Email" type="email" name="email" />
              {/* Subject */}
              <FormField id="subject" label="Subject" type="text" name="subject" />

              {/* Message */}
              <div className="flex flex-col gap-[0.375rem]">
                <label htmlFor="message" className="text-[0.875rem] font-medium text-zinc-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-[0.75rem] bg-black/40 border border-white/10
                    text-zinc-200 text-[0.875rem] placeholder-zinc-600
                    px-[1rem] py-[0.75rem] outline-none resize-none
                    focus:border-white/30 focus:ring-2 focus:ring-white/10
                    transition-all duration-200"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center md:justify-start pt-[0.25rem]">
                <button type="submit" className="btn-primary px-[2rem] py-[0.75rem] text-[0.875rem] rounded-[0.75rem]">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

function FormField({
  id, label, type, name,
}: { id: string; label: string; type: string; name: string }) {
  return (
    <div className="flex flex-col gap-[0.375rem]">
      <label htmlFor={id} className="text-[0.875rem] font-medium text-zinc-400">{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        required
        className="w-full rounded-[0.75rem] bg-black/40 border border-white/10
          text-zinc-200 text-[0.875rem] placeholder-zinc-600
          px-[1rem] py-[0.625rem] outline-none
          focus:border-white/30 focus:ring-2 focus:ring-white/10
          transition-all duration-200"
      />
    </div>
  );
}
