import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
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
            <h2 className="section-heading text-center md:text-start">Let's Connect</h2>
            <div className="section-divider w-12" />
          </div>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed text-center md:text-left">
            Have a forward-deployed role, an autonomous AI workflow, or a business system to build? Reach out directly on WhatsApp or drop a message below.
          </p>

          {/* Quick Contact Links */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            {/* WhatsApp Direct Option */}
            <a
              href={RESUME_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 text-sm font-medium"
            >
              <BsWhatsapp className="text-emerald-400 text-lg flex-shrink-0" />
              <span>WhatsApp: {RESUME_DATA.phone}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="inline-flex items-center gap-3 text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300"
            >
              <FaEnvelope className="text-indigo-400 flex-shrink-0" />
              <span>{RESUME_DATA.contact.email}</span>
            </a>

            {/* Location */}
            <div className="inline-flex items-center gap-3 text-gray-500 text-sm">
              <FaLocationDot className="text-indigo-400 flex-shrink-0" />
              <a
                href={RESUME_DATA.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-300 hover:underline transition-colors duration-300"
              >
                {RESUME_DATA.location}
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
            {RESUME_DATA.contact.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
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
        </div>

        {/* ── Contact Form ──────────────────────── */}
        <div className="w-full md:flex-1 animate-fade-in-right">
          <div className="glass-card p-7 md:p-8">
            <div className="flex flex-col items-center md:items-start gap-3 mb-6">
              <h2 className="section-heading text-2xl md:text-3xl text-center md:text-start">Send a Message</h2>
              <div className="section-divider w-10" />
              <p className="text-gray-400 text-sm text-center md:text-start">Feel free to reach out. I'll get back to you promptly!</p>
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
