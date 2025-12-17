import Image from "next/image";
import Link from "next/link";
import { RESUME_DATA } from "../app/data/resume-data";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="text-primary-foreground flex flex-col md:flex-row p-4 md:py-14 md:px-12">
      {/* Text Section */}
      <div className="w-full md:w-[60%] lg:w-1/2 p-6 flex flex-col items-center md:items-start my-auto gap-5">
        <div className="font-bold flex flex-col items-center md:items-start gap-3">
          <h1 className="text-3xl md:text-4xl text-center md:text-start">Hi, I'm <span className="font-interBold">{RESUME_DATA.name}</span></h1>
          <h3 className="text-2xl md:text-3xl text-center md:text-start">AI-Powered Full-Stack Web Developer</h3>
          <div className="w-36 h-1 bg-muted-foreground rounded-lg"></div>
        </div>
        {/* Summary */}
        <p className="text-secondary-foreground text-lg text-center md:text-start px-0 sm:px-14 md:px-0 whitespace-pre-line">
          {RESUME_DATA.summary}
        </p>
        {/* Connect with me */}
        <div>
          <h4 className="text-secondary-foreground text-lg text-center md:text-start">Connect with me:</h4>
          <div className="flex gap-3 items-center justify-center md:justify-start mt-2">
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
        </div>

        {/* Link Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <Link href={"/#contact"}><button className="bg-primary-foreground text-primary text-lg font-semibold rounded-lg py-2 px-6 hover:bg-secondary-foreground/80 transition-all duration-300 focus:outline-none">Contact Me</button></Link>
          <Link href={"/#projects"}><button className="border-2 border-secondary-foreground text-secondary-foreground text-lg font-semibold rounded-lg px-6 py-2 focus:outline-none hover:bg-secondary-foreground hover:text-secondary transition-all duration-300">My Projects</button></Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-[90%] md:w-[40%] lg:w-1/2 mx-auto flex items-center mt-6 md:mt-0">
        <Image
          src={RESUME_DATA.profilePicPath}
          alt="Profile Photo"
          width={400}
          height={400}
          className="object-cover mx-auto border-2 border-secondary-foreground transition-transform hover:scale-105 duration-500 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
        />
      </div>
    </div>
  )
}