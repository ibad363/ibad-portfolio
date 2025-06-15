import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "../app/data/resume-data";

function Contact() {
  return (
    <div className="p-4 md:py-14 md:px-12 flex flex-wrap" id="contact">
      {/* Connect Section */}
      <div className="w-full md:w-1/2 px-6 flex flex-col justify-center items-center md:items-start space-y-6">
        {/* Heading */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h1 className="text-secondary-foreground text-2xl md:text-3xl font-bold tracking-wider">Connect With Me</h1>
          <div className="w-16 h-[3px] rounded-lg bg-muted-foreground"></div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {RESUME_DATA.contact.social.map((social) => (
            <Button
              key={social.name}
              variant="outline"
              size="icon"
              className="h-12 w-12 touch-manipulation rounded-full border-border transition-all hover:scale-110 hover:border-gray-600 hover:bg-gray-9 hover:text-secondary-foreground active:scale-95"
              asChild
            >
              <a href={social.url} target="_blank" aria-label={social.name}>
                <social.icon className="h-6 w-6" />
              </a>
            </Button>
          ))}
        </div>

        {/* Bio */}
        <p className="text-gray-300 text-center md:text-left text-sm md:text-base leading-relaxed">
          I specialize in building accessible and user-friendly web experiences. Passionate about clean, scalable code. Currently studying full-stack development and engaging in coding challenges.
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-500 mt-2">
          <FaLocationDot />
          <a href={RESUME_DATA.locationLink} className="text text-muted-foreground hover:text-primary-foreground hover:underline transition-colors duration-300">{RESUME_DATA.location}</a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full md:w-1/2 px-6 mt-10 md:mt-0">
        {/* Heading */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h1 className="text-secondary-foreground text-2xl md:text-3xl font-bold tracking-wider">Contact</h1>
          <div className="w-16 h-[3px] rounded-lg bg-muted-foreground"></div>
        </div>
        <p className="text-gray-300 mt-3 text-center md:text-start">Feel free to reach out. I'd love to hear from you!</p>

        {/* Form */}
        <form action="https://formspree.io/f/xanylgpo" method="POST" className="space-y-4 mt-4">
          {/* Name */}
          <div className="space-y-1 flex flex-col items-center md:items-start">
            <label htmlFor="name" className="text-secondary-foreground">Name</label>
            <input type="text" name="name" id="name"
              className="bg-secondary rounded-md border border-border focus:border-muted-foreground focus:ring-1 focus:ring-muted-foreground text-gray-300 outline-none w-full p-2 tracking-wider transition-colors duration-500"
              required />
          </div>

          {/* Email */}
          <div className="space-y-1 flex flex-col items-center md:items-start">
            <label htmlFor="email" className="text-secondary-foreground">Email</label>
            <input type="email" name="email" id="email"
              className="bg-secondary rounded-md border border-border focus:border-muted-foreground focus:ring-1 focus:ring-muted-foreground text-gray-300 outline-none w-full p-2 tracking-wider transition-colors duration-500"
              required />
          </div>

          {/* Subject */}
          <div className="space-y-1 flex flex-col items-center md:items-start">
            <label htmlFor="subject" className="text-secondary-foreground">Subject</label>
            <input type="text" name="subject" id="subject"
              className="bg-secondary rounded-md border border-border focus:border-muted-foreground focus:ring-1 focus:ring-muted-foreground text-gray-300 outline-none w-full p-2 tracking-wider transition-colors duration-500"
              required />
          </div>

          {/* Message */}
          <div className="space-y-1 flex flex-col items-center md:items-start">
            <label htmlFor="message" className="text-secondary-foreground">Message</label>
            <textarea id="message" name="message"
              className="bg-secondary rounded-md border border-border focus:border-muted-foreground focus:ring-1 focus:ring-muted-foreground text-gray-300 outline-none w-full p-2 tracking-wider transition-colors duration-500 resize-none"
              rows={5} required />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center md:justify-start">
            <button type="submit"
              className="bg-primary-foreground text-primary text-lg font-semibold rounded-lg py-2 px-6 hover:bg-secondary-foreground/80 transition-all duration-300 focus:outline-none">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;