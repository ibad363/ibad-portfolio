import Link from "next/link";
import { RESUME_DATA } from "../app/data/resume-data";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0c10]">
      <div className="px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 mx-auto max-w-[110rem]">

        {/* Brand + Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
          <Link href="/" className="text-base font-bold text-white hover:text-indigo-400 transition-colors duration-300">
            Ibad<span className="text-indigo-400">.</span>
          </Link>
          <span className="hidden sm:block w-px h-4 bg-white/15" />
          <p className="text-sm text-gray-500">© {year} Ibad Ur Rehman. All rights reserved.</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-2.5">
          {RESUME_DATA.contact.social.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              aria-label={social.name}
              className="flex items-center justify-center w-9 h-9 rounded-full
                border border-white/[0.08] bg-white/[0.04] text-gray-500
                hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300
                transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <social.icon className="h-[15px] w-[15px]" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;