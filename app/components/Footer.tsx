import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import { RESUME_DATA } from "../data/resume-data";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="border-t-2">
      <footer className=" p-3 flex flex-col sm:flex-row items-center justify-between gap-2 mx-auto max-w-[110rem]">
        
        {/* Name */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <h3 className="sm:ml-6 text-xl text-primary-foreground font-semibold sm:border-border sm:border-r-2 sm:pr-6">Ibad Ur Rehman</h3>
            <p className="text-muted-foreground">© 2024 Ibad Ur Rehman</p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-3">
          {RESUME_DATA.contact.social.map((social) => (
              <Button
                key={social.name}
                variant="outline"
                size="icon"
                className="h-10 w-10 touch-manipulation rounded-full border-border transition-all hover:scale-110 hover:border-gray-600 hover:bg-gray-9 hover:text-secondary-foreground active:scale-95"
                asChild
              >
                <a href={social.url} target="_blank" aria-label={social.name}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
        </div>
      </footer>
    </div>
  )
}

export default Footer