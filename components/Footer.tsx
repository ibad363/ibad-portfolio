import Link from "next/link";
import { RESUME_DATA } from "../app/data/resume-data";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-[#070709]">
      <div className="px-[1.5rem] lg:px-[3rem] py-[1.5rem] flex flex-col sm:flex-row items-center justify-between gap-[1rem] mx-auto max-w-[76rem]">

        {/* Brand + Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-[0.5rem] sm:gap-[1.25rem]">
          <Link href="/" className="text-[1rem] font-bold text-white transition-colors duration-200">
            Ibad<span className="accent-gradient-text">.</span>
          </Link>
          <span className="hidden sm:block w-[0.0625rem] h-[1rem] bg-white/15" />
          <p className="text-[0.875rem] text-zinc-400">© {year} Ibad Ur Rehman. All rights reserved.</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-[0.625rem]">
          {RESUME_DATA.contact.social.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex items-center justify-center w-[2.25rem] h-[2.25rem] rounded-full
                border border-white/[0.08] bg-white/[0.04] text-zinc-400
                hover:border-white/30 hover:text-white
                transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <social.icon className="h-[0.9375rem] w-[0.9375rem]" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
