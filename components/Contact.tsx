import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { RESUME_DATA } from "../app/data/resume-data";

function Contact() {
  return (
    <section className="relative overflow-hidden bg-[#111318] py-16 md:py-20 px-6 md:px-12" id="contact">
      {/* Background orb */}
      <div className="glow-orb w-[250px] h-[250px] bg-indigo-600/6 -bottom-10 -left-10" />

      <div className="relative z-10 flex flex-wrap gap-10 lg:gap-16 max-w-5xl mx-auto">

        {/* ── Connect Section ───────────────────── */}
        <div className="w-full md:w-[42%] flex flex-col justify-center gap-7 animate-fade-in-left">
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400">Get in Touch</p>
            <h2 className="section-heading text-center md:text-start">Connect With Me</h2>
            <div className="section-divider w-12" />
          </div>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed text-center md:text-left">
            I specialize in building accessible and user-friendly web experiences. Passionate about clean, scalable code. Currently studying full-stack development and engaging in coding challenges.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {RESUME_DATA.contact.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                aria-label={social.name}
                className="group flex items-center justify-center w-11 h-11 rounded-full
                  border border-white/10 bg-white/5 text-gray-400
                  hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-300
                  transition-all duration-300 hover:scale-110 hover:shadow-glow-sm active:scale-95"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500">
            <FaLocationDot className="text-indigo-400 flex-shrink-0" />
            <a
              href={RESUME_DATA.locationLink}
              className="text-sm text-gray-400 hover:text-indigo-300 hover:underline transition-colors duration-300"
            >
              {RESUME_DATA.location}
            </a>
          </div>
        </div>

        {/* ── Contact Form ──────────────────────── */}
        <div className="w-full md:flex-1 animate-fade-in-right">
          <div className="glass-card p-7 md:p-8">
            <div className="flex flex-col items-center md:items-start gap-3 mb-6">
              <h2 className="section-heading text-2xl md:text-3xl text-center md:text-start">Contact</h2>
              <div className="section-divider w-10" />
              <p className="text-gray-400 text-sm text-center md:text-start">Feel free to reach out. I'd love to hear from you!</p>
            </div>

            <form action="https://formspree.io/f/xanylgpo" method="POST" className="space-y-4">
              {/* Name */}
              <FormField id="name" label="Name" type="text" name="name" />
              {/* Email */}
              <FormField id="email" label="Email" type="email" name="email" />
              {/* Subject */}
              <FormField id="subject" label="Subject" type="text" name="subject" />

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-xl bg-[#0d0f14] border border-white/10
                    text-gray-200 text-sm placeholder-gray-600
                    px-4 py-3 outline-none resize-none
                    focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20
                    transition-all duration-300"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center md:justify-start pt-1">
                <button type="submit" className="btn-primary px-8 py-3 text-sm">
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
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-gray-400">{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        required
        className="w-full rounded-xl bg-[#0d0f14] border border-white/10
          text-gray-200 text-sm placeholder-gray-600
          px-4 py-3 outline-none
          focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20
          transition-all duration-300"
      />
    </div>
  );
}